export declare const COMPREHENSIVE_EXAMPLE_CONFIG: readonly [{
    readonly fieldId: "stringField";
    readonly field: {
        readonly type: "single";
        readonly fieldValue: {
            readonly type: "inputOutput";
            readonly variableType: {
                readonly type: "string";
                readonly defaultValue: "test";
            };
        };
        readonly label: "Input string (title)";
    };
}, {
    readonly fieldId: "numberField";
    readonly field: {
        readonly type: "single";
        readonly label: "Input number";
        readonly fieldValue: {
            readonly type: "inputOutput";
            readonly variableType: {
                readonly type: "number";
                readonly defaultValue: 25;
            };
        };
    };
}, {
    readonly fieldId: "booleanField";
    readonly field: {
        readonly type: "single";
        readonly label: "Input boolean";
        readonly fieldValue: {
            readonly type: "inputOutput";
            readonly variableType: {
                readonly type: "boolean";
                readonly defaultValue: undefined;
            };
        };
    };
}, {
    readonly fieldId: "dateField";
    readonly field: {
        readonly type: "single";
        readonly label: "Input date";
        readonly fieldValue: {
            readonly type: "inputOutput";
            readonly variableType: {
                readonly type: "date";
                readonly defaultValue: Date;
            };
        };
    };
}, {
    readonly fieldId: "timestampField";
    readonly field: {
        readonly type: "single";
        readonly label: "Input timestamp";
        readonly fieldValue: {
            readonly type: "inputOutput";
            readonly variableType: {
                readonly type: "timestamp";
                readonly defaultValue: Date;
            };
        };
    };
}, {
    readonly fieldId: "objectSetField";
    readonly field: {
        readonly type: "single";
        readonly label: "Input object set";
        readonly fieldValue: {
            readonly type: "inputOutput";
            readonly variableType: {
                readonly type: "objectSet";
                readonly objectTypeId: "rotten-tomatoes-movies";
                readonly defaultValue: {
                    readonly type: "string";
                    readonly primaryKeys: ["m/harry_potter_and_the_half_blood_prince"];
                };
            };
        };
    };
}, {
    readonly fieldId: "stringListField";
    readonly field: {
        readonly type: "single";
        readonly label: "Input string list";
        readonly fieldValue: {
            readonly type: "inputOutput";
            readonly variableType: {
                readonly type: "string-list";
                readonly defaultValue: ["hello", "world"];
            };
        };
    };
}, {
    readonly fieldId: "numberListField";
    readonly field: {
        readonly type: "single";
        readonly label: "Input number list";
        readonly fieldValue: {
            readonly type: "inputOutput";
            readonly variableType: {
                readonly type: "number-list";
                readonly defaultValue: [1, 3];
            };
        };
    };
}, {
    readonly fieldId: "booleanListField";
    readonly field: {
        readonly type: "single";
        readonly label: "Input boolean list";
        readonly fieldValue: {
            readonly type: "inputOutput";
            readonly variableType: {
                readonly type: "boolean-list";
                readonly defaultValue: [true, false];
            };
        };
    };
}, {
    readonly fieldId: "dateListField";
    readonly field: {
        readonly type: "single";
        readonly label: "Input date list";
        readonly fieldValue: {
            readonly type: "inputOutput";
            readonly variableType: {
                readonly type: "date-list";
                readonly defaultValue: [Date, Date];
            };
        };
    };
}, {
    readonly fieldId: "timestampListField";
    readonly field: {
        readonly type: "single";
        readonly label: "Input timestamp list";
        readonly fieldValue: {
            readonly type: "inputOutput";
            readonly variableType: {
                readonly type: "timestamp-list";
                readonly defaultValue: undefined;
            };
        };
    };
}, {
    readonly fieldId: "event";
    readonly field: {
        readonly type: "single";
        readonly label: "Events";
        readonly fieldValue: {
            readonly type: "event";
        };
    };
}, {
    readonly fieldId: "listOfFields";
    readonly field: {
        readonly type: "listOf";
        readonly label: "List of config fields";
        readonly addButtonText: "Add another entry to list";
        readonly config: readonly [{
            readonly fieldId: "stringFieldInsideListOf";
            readonly field: {
                readonly type: "single";
                readonly fieldValue: {
                    readonly type: "inputOutput";
                    readonly variableType: {
                        readonly type: "string";
                        readonly defaultValue: "hello world!";
                    };
                };
                readonly label: "String input field";
            };
        }, {
            readonly fieldId: "eventInsideListOf";
            readonly field: {
                readonly type: "single";
                readonly label: "Events";
                readonly fieldValue: {
                    readonly type: "event";
                };
            };
        }, {
            readonly fieldId: "nestedListOfField";
            readonly field: {
                readonly type: "listOf";
                readonly label: "List of inside list of";
                readonly addButtonText: "Add something else to listof nested inside another listof";
                readonly config: readonly [{
                    readonly fieldId: "booleanListInsideNestedListof";
                    readonly field: {
                        readonly type: "single";
                        readonly label: "Boolean list in nested listOf";
                        readonly fieldValue: {
                            readonly type: "inputOutput";
                            readonly variableType: {
                                readonly type: "boolean-list";
                                readonly defaultValue: [true, false, true, false];
                            };
                        };
                    };
                }];
            };
        }];
    };
}];
//# sourceMappingURL=ExampleConfig.d.ts.map