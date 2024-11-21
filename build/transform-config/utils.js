import { isOntologyObject } from "../types/ontologyObject";
import { assertNever, formatDate } from "../utils";
// Helpers for transformConfigToWorkshopContext
// Currently, object sets are limited to 10000 objects. This limit will be removed when osdk supports loading objectSets from temporary ObjectSetRids.
const MAX_OBJECTS = 10000;
/**
 * Given the value map, a value locator, and a value,
 * recursively traverses the value map and updates it.
 *
 * @param configValueMap: the entire value map tree, given starting from the root.
 * @param valueLocator: the path to the leaf in the value map tree that needs to have its value updated.
 */
export function createNewConfigValueMapWithValueChange(configValueMap, valueLocator, value) {
    switch (valueLocator.type) {
        case "listOf": {
            const valueMapField = configValueMap[valueLocator.configFieldId];
            if (valueMapField != null &&
                valueMapField.type === "listOf" &&
                valueLocator.index < valueMapField.listOfValues.length) {
                const nestedConfigValueMap = valueMapField.listOfValues[valueLocator.index];
                if (nestedConfigValueMap != null) {
                    return {
                        ...configValueMap,
                        [valueLocator.configFieldId]: {
                            ...valueMapField,
                            listOfValues: [
                                ...valueMapField.listOfValues.slice(0, valueLocator.index),
                                createNewConfigValueMapWithValueChange(nestedConfigValueMap, valueLocator.locator, value),
                                ...valueMapField.listOfValues.slice(valueLocator.index + 1),
                            ],
                        },
                    };
                }
            }
            return configValueMap;
        }
        case "single": {
            const valueMapField = configValueMap[valueLocator.configFieldId];
            if (valueMapField != null && valueMapField.type === "single") {
                return {
                    ...configValueMap,
                    [valueLocator.configFieldId]: {
                        ...valueMapField,
                        value: value,
                    },
                };
            }
            return configValueMap;
        }
        default:
            assertNever(`Unknown ILocator type ${valueLocator} when creating context`, valueLocator);
    }
}
/**
 * Given an unkonwn value, returns true only if it is a valid Date object.
 */
function isDate(val) {
    return val instanceof Date && !isNaN(val.getTime());
}
/**
 * Before setting a value in the context's value map:
 * - for objectSet variables, extract the primaryKeys, which is OSDK's preferred format to load objects with and cap to first 10,000 primaryKeys
 * - for date variables, convert from Date value to string value in format "yyyy-mm-dd"
 * - for date array variables, convert from Date[] value to string[] in format "yyyy-mm-dd" per entry
 */
export function maybeTransformValueToSetToValueMapTypes(variableType, value) {
    if (Array.isArray(value) && value.every(isOntologyObject)) {
        if (value.every((ontologyObject) => typeof ontologyObject.$primaryKey === "string")) {
            return {
                type: "string",
                primaryKeys: value
                    .slice(0, MAX_OBJECTS)
                    .map((ontologyObject) => ontologyObject.$primaryKey),
            };
        }
        else if (value.every((ontologyObject) => typeof ontologyObject.$primaryKey === "number")) {
            return {
                type: "number",
                primaryKeys: value
                    .slice(0, MAX_OBJECTS)
                    .map((ontologyObject) => ontologyObject.$primaryKey),
            };
        }
        return undefined;
    }
    else if (variableType.type === "date" && isDate(value)) {
        return formatDate(value);
    }
    else if (variableType.type === "date-list" &&
        Array.isArray(value) &&
        value.every(isDate)) {
        return value.map(formatDate);
    }
    return value;
}
/**
 * Before sending a value to Workshop:
 * - for objectSet variables, extract the objectRids, which is Workshop's preferred format to load objects with and cap to first 10,000 objectRids
 * - for date variables, convert from Date value to string value in format "yyyy-mm-dd"
 * - for date array variables, convert from Date[] value to string[] in format "yyyy-mm-dd" per entry
 */
export function maybeTransformValueToSetToWorkshopValue(variableType, value) {
    if (Array.isArray(value) && value.every(isOntologyObject)) {
        return {
            objectRids: value
                .slice(0, MAX_OBJECTS)
                .map((ontologyObject) => ontologyObject.$rid),
        };
    }
    else if (variableType.type === "date" && isDate(value)) {
        return formatDate(value);
    }
    else if (variableType.type === "date-list" &&
        Array.isArray(value) &&
        value.every(isDate)) {
        return value.map(formatDate);
    }
    return value;
}
