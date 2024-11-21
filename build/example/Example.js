import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { COMPREHENSIVE_EXAMPLE_CONFIG } from "./ExampleConfig";
import { visitLoadingState, } from "../types/loadingState";
import { useWorkshopContext } from "../";
/**
 * This is an example of how to use `useWorkshopContext`, and then ensure that the context object returned is loaded before
 * retrieving values or setting values.
 */
export const Example = () => {
    const workshopContext = useWorkshopContext(COMPREHENSIVE_EXAMPLE_CONFIG);
    // Use a visitor function to render based on the async status of the workshop context object
    return visitLoadingState(workshopContext, {
        loading: () => _jsx(_Fragment, { children: "Loading..." }),
        succeeded: loadedContext => _jsx(LoadedComprehensiveExample, { loadedWorkshopContext: loadedContext }),
        reloading: _reloadingContext => _jsx(_Fragment, { children: "Reloading..." }),
        failed: _error => _jsx(_Fragment, { children: "Error..." }),
    });
};
/**
 * This is an example of how to use values and setter methods inside of the context object.
 */
const LoadedComprehensiveExample = (props) => {
    const { stringField, booleanField, numberField, dateField, timestampField, stringListField, objectSetField, event, booleanListField, numberListField, dateListField, timestampListField, listOfFields, } = props.loadedWorkshopContext;
    /**
     * Examples of retrieving field values.
     */
    const stringFieldValue = stringField.fieldValue;
    const booleanFieldValue = booleanField.fieldValue;
    const numberFieldValue = numberField.fieldValue;
    // date values are stored as strings in format "yyyy-mm-dd"
    const dateFieldValue = dateField.fieldValue;
    const timestampFieldValue = timestampField.fieldValue;
    const objectSetFieldValue = objectSetField.fieldValue;
    // Example usage of objectSetFieldValue's primary keys to query for objects using osdk's client:
    //      const primaryKeys: string[] = isAsyncValueLoaded(objectSetFieldValue) ? objectSetFieldValue.value.primaryKeys : [];
    //      const housesfilteredByPrimaryKey: ObjectSet<RottenTomatoesMovies> = client.ontology.objects.RottenTomatoesMovies.where(query => query.rottenTomatoesLink.containsAnyTerm(primaryKeys.join(" ")));
    const stringListFieldValue = stringListField.fieldValue;
    const booleanListFieldValue = booleanListField.fieldValue;
    const numberListFieldValue = numberListField.fieldValue;
    // date arrays are stored as a string array with every entry in the format "yyyy-mm-dd" 
    const dateListFieldValue = dateListField.fieldValue;
    const timestampListFieldValue = timestampListField.fieldValue;
    /**
     * Examples of setting values on the config fields.
     */
    stringField.setLoading();
    stringField.setLoadedValue("Hello world!!!"); // The value takes the config field type, in this case, string
    stringField.setReloadingValue("I am reloading..."); // The value takes the config field type, in this case, string
    stringField.setFailedWithError("Oh no, an error occurred!"); // Takes string for error message
    booleanField.setLoading();
    booleanField.setLoadedValue(false); // The value takes the config field type, in this case, string
    booleanField.setReloadingValue(true); // The value takes the config field type, in this case, string
    booleanField.setFailedWithError("Oh no, an error occurred!"); // Takes string for error message
    dateField.setLoading();
    dateField.setLoadedValue(new Date("2024-01-01")); // The value takes the config field type, in this case, Date. Note that the value saved is a string in format "yyyy-mm-dd"
    dateField.setReloadingValue(new Date("2024-12-31")); // The value takes the config field type, in this case, Date. Note that the value saved is a string in format "yyyy-mm-dd"
    dateField.setFailedWithError("Oh no, an error occurred!"); // Takes string for error message
    /**
     * Examples of executing an event
     */
    event.executeEvent(undefined); // Takes a React MouseEvent, or undefined if not applicable
    /**
     * Examples of ListOf config. These are accessed by index.
     */
    listOfFields.forEach((listItem, index) => {
        // Events inside of listOf also have an execution method
        listItem.eventInsideListOf.executeEvent(undefined); // Takes a React MouseEvent, or undefined if not applicable
        // Single fields inside listOf each also have a value and setter methods
        // @ts-ignore
        const stringValueInsideListOf = listItem.stringFieldInsideListOf.fieldValue;
        listItem.stringFieldInsideListOf.setLoading();
        listItem.stringFieldInsideListOf.setLoadedValue(`I am a string inside of a listOf at index ${index}`);
        listItem.stringFieldInsideListOf.setReloadingValue(`stringFieldInsideListOf is reloading at ${index}`);
        listItem.stringFieldInsideListOf.setFailedWithError(`stringFieldInsideListOf failed to load at ${index}`);
        // Can have nested listOf configs
        listItem.nestedListOfField.forEach((nestedListItem, nestedIndex) => {
            // Single fields inside nested listOf configs also have value and setter methods
            nestedListItem.booleanListInsideNestedListof.setLoading();
            nestedListItem.booleanListInsideNestedListof.setLoadedValue([true, true]);
            nestedListItem.booleanListInsideNestedListof.setLoadedValue([
                false,
                true,
            ]);
            nestedListItem.booleanListInsideNestedListof.setFailedWithError(`booleanListInsideNestedListof failed to load at ${nestedIndex}`);
        });
    });
    return _jsxs(_Fragment, { children: [stringFieldValue, _jsx("br", {}), booleanFieldValue, _jsx("br", {}), numberFieldValue, _jsx("br", {}), dateFieldValue, _jsx("br", {}), timestampFieldValue, _jsx("br", {}), objectSetFieldValue, _jsx("br", {}), stringListFieldValue, _jsx("br", {}), booleanListFieldValue, _jsx("br", {}), numberListFieldValue, _jsx("br", {}), dateListFieldValue, _jsx("br", {}), timestampListFieldValue] });
};
