export const COMPREHENSIVE_EXAMPLE_CONFIG = [
    {
        fieldId: "stringField",
        field: {
            type: "single",
            fieldValue: {
                type: "inputOutput",
                variableType: {
                    type: "string",
                    defaultValue: "test",
                },
            },
            label: "Input string (title)",
        },
    },
    {
        fieldId: "numberField",
        field: {
            type: "single",
            label: "Input number",
            fieldValue: {
                type: "inputOutput",
                variableType: {
                    type: "number",
                    defaultValue: 25,
                },
            },
        },
    },
    {
        fieldId: "booleanField",
        field: {
            type: "single",
            label: "Input boolean",
            fieldValue: {
                type: "inputOutput",
                variableType: {
                    type: "boolean",
                    defaultValue: undefined,
                },
            },
        },
    },
    {
        fieldId: "dateField",
        field: {
            type: "single",
            label: "Input date",
            fieldValue: {
                type: "inputOutput",
                variableType: {
                    type: "date",
                    defaultValue: new Date("2024-01-01"),
                },
            },
        },
    },
    {
        fieldId: "timestampField",
        field: {
            type: "single",
            label: "Input timestamp",
            fieldValue: {
                type: "inputOutput",
                variableType: {
                    type: "timestamp",
                    defaultValue: new Date("2024-12-31"),
                },
            },
        },
    },
    {
        fieldId: "objectSetField",
        field: {
            type: "single",
            label: "Input object set",
            fieldValue: {
                type: "inputOutput",
                variableType: {
                    type: "objectSet",
                    objectTypeId: "rotten-tomatoes-movies",
                    defaultValue: {
                        type: "string",
                        primaryKeys: ["m/harry_potter_and_the_half_blood_prince"],
                    },
                },
            },
        },
    },
    {
        fieldId: "stringListField",
        field: {
            type: "single",
            label: "Input string list",
            fieldValue: {
                type: "inputOutput",
                variableType: {
                    type: "string-list",
                    defaultValue: ["hello", "world"],
                },
            },
        },
    },
    {
        fieldId: "numberListField",
        field: {
            type: "single",
            label: "Input number list",
            fieldValue: {
                type: "inputOutput",
                variableType: {
                    type: "number-list",
                    defaultValue: [1, 3],
                },
            },
        },
    },
    {
        fieldId: "booleanListField",
        field: {
            type: "single",
            label: "Input boolean list",
            fieldValue: {
                type: "inputOutput",
                variableType: {
                    type: "boolean-list",
                    defaultValue: [true, false],
                },
            },
        },
    },
    {
        fieldId: "dateListField",
        field: {
            type: "single",
            label: "Input date list",
            fieldValue: {
                type: "inputOutput",
                variableType: {
                    type: "date-list",
                    defaultValue: [new Date("2023-01-01"), new Date("2024-01-01")],
                },
            },
        },
    },
    {
        fieldId: "timestampListField",
        field: {
            type: "single",
            label: "Input timestamp list",
            fieldValue: {
                type: "inputOutput",
                variableType: {
                    type: "timestamp-list",
                    defaultValue: undefined,
                },
            },
        },
    },
    // TODO: struct not yet fully supported
    // {
    //     fieldId: "input-struct-field",
    //     field: {
    //         type: "single",
    //         label: "Input struct",
    //         fieldValue: {
    //             type: "inputOutput",
    //             variableType: {
    //                 type: "struct",
    //                 structFieldTypes: [
    //                     {
    //                         fieldId: "struct-field-1",
    //                         fieldType: {
    //                             type: "string",
    //                         },
    //                     },
    //                     {
    //                         fieldId: "struct-field-2",
    //                         fieldType: {
    //                             type: "boolean",
    //                         },
    //                     },
    //                 ],
    //             },
    //             defaultValue: {
    //                 status: "LOADED",
    //                 defaultValue: {
    //                     structFields: {
    //                         "struct-field-1": "yay",
    //                         "struct-field-2": false,
    //                     }
    //                 }
    //             }
    //         },
    //     }
    // },
    {
        fieldId: "event",
        field: {
            type: "single",
            label: "Events",
            fieldValue: {
                type: "event",
            },
        },
    },
    {
        fieldId: "listOfFields",
        field: {
            type: "listOf",
            label: "List of config fields",
            addButtonText: "Add another entry to list",
            config: [
                {
                    fieldId: "stringFieldInsideListOf",
                    field: {
                        type: "single",
                        fieldValue: {
                            type: "inputOutput",
                            variableType: {
                                type: "string",
                                defaultValue: "hello world!",
                            },
                        },
                        label: "String input field",
                    },
                },
                {
                    fieldId: "eventInsideListOf",
                    field: {
                        type: "single",
                        label: "Events",
                        fieldValue: {
                            type: "event",
                        },
                    },
                },
                // TODO: struct not supported yet
                // {
                //     fieldId: "structInListOf",
                //     field: {
                //         type: "single",
                //         label: "Struct in list of",
                //         fieldValue: {
                //             type: "inputOutput",
                //             variableType: {
                //                 type: "struct",
                //                 structFieldTypes: [
                //                     {
                //                         fieldId: "struct-field-1",
                //                         fieldType: {
                //                             type: "number",
                //                         },
                //                     },
                //                     {
                //                         fieldId: "struct-field-2",
                //                         fieldType: {
                //                             type: "date",
                //                         },
                //                     },
                //                 ],
                //             },
                //             defaultValue: {
                //                 status: "LOADED",
                //                 defaultValue: {
                //                     structFields: {
                //                         "struct-field-1": 321,
                //                         "struct-field-2": new Date("2024-01-01"),
                //                     }
                //                 }
                //             }
                //         }
                //     }
                // },
                {
                    fieldId: "nestedListOfField",
                    field: {
                        type: "listOf",
                        label: "List of inside list of",
                        addButtonText: "Add something else to listof nested inside another listof",
                        config: [
                            {
                                fieldId: "booleanListInsideNestedListof",
                                field: {
                                    type: "single",
                                    label: "Boolean list in nested listOf",
                                    fieldValue: {
                                        type: "inputOutput",
                                        variableType: {
                                            type: "boolean-list",
                                            defaultValue: [true, false, true, false],
                                        },
                                    },
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
];
