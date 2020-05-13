jQuery("#simulation")
    .on("click", ".s-1432c19d-c891-4d09-9d9e-a0e9b91f9494 .click", function (event, data) {
        var jEvent, jFirer, cases;
        if (data === undefined) {
            data = event;
        }
        jEvent = jimEvent(event);
        jFirer = jEvent.getEventFirer();
        if (jFirer.is("#s-Button_17")) {
            cases = [
                {
                    "blocks": [
                        {
                            "condition": {
                                "action": "jimAnd",
                                "parameter": [{
                                    "action": "jimEquals",
                                    "parameter": [{
                                        "datatype": "property",
                                        "target": "#s-Input-text",
                                        "property": "jimGetValue"
                                    }, "john@mymail.com"]
                                }, {
                                    "action": "jimEquals",
                                    "parameter": [{
                                        "datatype": "property",
                                        "target": "#s-Input-text_2",
                                        "property": "jimGetValue"
                                    }, "123456"]
                                }]
                            },
                            "actions": [
                                {
                                    "action": "jimNavigation",
                                    "parameter": {
                                        "target": "screens/cadcdbd5-d639-4865-b840-0c142b724760",
                                        "transition": {
                                            "type": "slideleft",
                                            "duration": 700
                                        }
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        },
                        {
                            "actions": [
                                {
                                    "action": "jimHide",
                                    "parameter": {
                                        "target": ["#s-Button_18"],
                                        "effect": {
                                            "type": "fade",
                                            "easing": "linear",
                                            "duration": 200
                                        }
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                },
                                {
                                    "action": "jimShow",
                                    "parameter": {
                                        "target": ["#s-Button_18"],
                                        "effect": {
                                            "type": "fade",
                                            "easing": "linear",
                                            "duration": 200
                                        }
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                },
                                {
                                    "action": "jimShow",
                                    "parameter": {
                                        "target": ["#s-signin-button"],
                                        "effect": {
                                            "type": "bounce",
                                            "duration": 100
                                        }
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                },
                                {
                                    "action": "jimNavigation",
                                    "parameter": {
                                        "target": "screens/12f95033-51c0-4a0b-bb64-c80c715ca252",
                                        "transition": {
                                            "type": "slideleft",
                                            "duration": 700
                                        }
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        }
                    ],
                    "exectype": "serial",
                    "delay": 0
                }
            ];
            event.data = data;
            jEvent.launchCases(cases);
        } else if (jFirer.is("#s-Callout")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimHide",
                                    "parameter": {
                                        "target": ["#s-Callout"],
                                        "effect": {
                                            "type": "fade",
                                            "duration": 500
                                        }
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        }
                    ],
                    "exectype": "serial",
                    "delay": 0
                }
            ];
            event.data = data;
            jEvent.launchCases(cases);
        }
    })
    .on("click", ".s-1432c19d-c891-4d09-9d9e-a0e9b91f9494 .toggle", function (event, data) {
        var jEvent, jFirer, cases;
        if (data === undefined) {
            data = event;
        }
        jEvent = jimEvent(event);
        jFirer = jEvent.getEventFirer();
        if (jFirer.is("#s-Info")) {
            if (jFirer.data("jimHasToggle")) {
                jFirer.removeData("jimHasToggle");
                jEvent.undoCases(jFirer);
            } else {
                jFirer.data("jimHasToggle", true);
                event.backupState = true;
                event.target = jFirer;
                cases = [
                    {
                        "blocks": [
                            {
                                "actions": [
                                    {
                                        "action": "jimShow",
                                        "parameter": {
                                            "target": ["#s-Callout"],
                                            "effect": {
                                                "type": "fade",
                                                "duration": 500
                                            }
                                        },
                                        "exectype": "serial",
                                        "delay": 0
                                    }
                                ]
                            }
                        ],
                        "exectype": "serial",
                        "delay": 0
                    }
                ];
                jEvent.launchCases(cases);
            }
        }
    })
    .on("pageload", ".s-1432c19d-c891-4d09-9d9e-a0e9b91f9494 .pageload", function (event, data) {
        var jEvent, jFirer, cases;
        if (data === undefined) {
            data = event;
        }
        jEvent = jimEvent(event);
        jFirer = jEvent.getEventFirer();
        if (jFirer.is("#s-Label_31")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "target": ["#s-Label_31"],
                                        "value": {
                                            "action": "jimConcat",
                                            "parameter": [{
                                                "action": "jimSubstring",
                                                "parameter": [{
                                                    "action": "jimSystemTime"
                                                }, "0", "5"]
                                            }, " PM"]
                                        }
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        }
                    ],
                    "exectype": "serial",
                    "delay": 0
                }
            ];
            event.data = data;
            jEvent.launchCases(cases);
        }
    })
    .on("focusin", ".s-1432c19d-c891-4d09-9d9e-a0e9b91f9494 .focusin", function (event, data) {
        var jEvent, jFirer, cases;
        if (data === undefined) {
            data = event;
        }
        jEvent = jimEvent(event);
        jFirer = jEvent.getEventFirer();
        if (jFirer.is("#s-Input-text_2")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "variable": ["slide"],
                                        "value": "password"
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                },
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "target": ["#s-Input-text_2"],
                                        "value": ""
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        }
                    ],
                    "exectype": "serial",
                    "delay": 0
                },
                {
                    "blocks": [
                        {
                            "condition": {
                                "action": "jimEquals",
                                "parameter": [{
                                    "datatype": "property",
                                    "target": "#s-Input-text_2",
                                    "property": "jimGetValue"
                                }, "Password"]
                            },
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "target": ["#s-Input-text_2"],
                                        "value": ""
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        }
                    ],
                    "exectype": "serial",
                    "delay": 0
                },
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimMove",
                                    "parameter": {
                                        "target": ["#s-Boxes"],
                                        "top": {
                                            "type": "movetoposition",
                                            "value": "237"
                                        },
                                        "left": {
                                            "type": "movetoposition",
                                            "value": "27"
                                        },
                                        "containment": false,
                                        "effect": {
                                            "type": "none",
                                            "easing": "linear",
                                            "duration": 300
                                        }
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        }
                    ],
                    "exectype": "serial",
                    "delay": 0
                }
            ];
            event.data = data;
            jEvent.launchCases(cases);
        } else if (jFirer.is("#s-Input-text")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "target": ["#s-Input-text"],
                                        "value": ""
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                },
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "variable": ["slide"],
                                        "value": "email"
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        }
                    ],
                    "exectype": "serial",
                    "delay": 0
                },
                {
                    "blocks": [
                        {
                            "condition": {
                                "action": "jimEquals",
                                "parameter": [{
                                    "datatype": "property",
                                    "target": "#s-Input-text",
                                    "property": "jimGetValue"
                                }, "Email"]
                            },
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "target": ["#s-Input-text"],
                                        "value": ""
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        }
                    ],
                    "exectype": "serial",
                    "delay": 0
                },
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimMove",
                                    "parameter": {
                                        "target": ["#s-Boxes"],
                                        "top": {
                                            "type": "movetoposition",
                                            "value": "237"
                                        },
                                        "left": {
                                            "type": "movetoposition",
                                            "value": "27"
                                        },
                                        "containment": false,
                                        "effect": {
                                            "type": "none",
                                            "easing": "linear",
                                            "duration": 300
                                        }
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        }
                    ],
                    "exectype": "serial",
                    "delay": 0
                }
            ];
            event.data = data;
            jEvent.launchCases(cases);
        }
    })
    .on("focusout", ".s-1432c19d-c891-4d09-9d9e-a0e9b91f9494 .focusout", function (event, data) {
        var jEvent, jFirer, cases;
        if (data === undefined) {
            data = event;
        }
        jEvent = jimEvent(event);
        jFirer = jEvent.getEventFirer();
        if (jFirer.is("#s-Input-text_2")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "variable": ["slide"],
                                        "value": "1"
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        }
                    ],
                    "exectype": "serial",
                    "delay": 0
                },
                {
                    "blocks": [
                        {
                            "condition": {
                                "action": "jimEquals",
                                "parameter": [{
                                    "datatype": "property",
                                    "target": "#s-Input-text_2",
                                    "property": "jimGetValue"
                                }, ""]
                            },
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "target": ["#s-Input-text_2"],
                                        "value": "Password"
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        }
                    ],
                    "exectype": "serial",
                    "delay": 0
                },
                {
                    "blocks": [
                        {
                            "condition": {
                                "action": "jimEquals",
                                "parameter": [{
                                    "datatype": "variable",
                                    "element": "slide"
                                }, "1"]
                            },
                            "actions": [
                                {
                                    "action": "jimMove",
                                    "parameter": {
                                        "target": ["#s-Boxes"],
                                        "top": {
                                            "type": "movetoposition",
                                            "value": "293"
                                        },
                                        "left": {
                                            "type": "movetoposition",
                                            "value": "27"
                                        },
                                        "containment": false,
                                        "effect": {
                                            "type": "none",
                                            "easing": "linear",
                                            "duration": 300
                                        }
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        }
                    ],
                    "exectype": "serial",
                    "delay": 0
                }
            ];
            event.data = data;
            jEvent.launchCases(cases);
        } else if (jFirer.is("#s-Input-text")) {
            cases = [
                {
                    "blocks": [
                        {
                            "condition": {
                                "action": "jimEquals",
                                "parameter": [{
                                    "datatype": "property",
                                    "target": "#s-Input-text",
                                    "property": "jimGetValue"
                                }, ""]
                            },
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "target": ["#s-Input-text"],
                                        "value": "Email"
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        }
                    ],
                    "exectype": "serial",
                    "delay": 0
                },
                {
                    "blocks": [
                        {
                            "condition": {
                                "action": "jimEquals",
                                "parameter": [{
                                    "datatype": "variable",
                                    "element": "slide"
                                }, "password"]
                            },
                            "actions": [
                                {
                                    "action": "jimMove",
                                    "parameter": {
                                        "target": ["#s-Boxes"],
                                        "top": {
                                            "type": "movetoposition",
                                            "value": "293"
                                        },
                                        "left": {
                                            "type": "movetoposition",
                                            "value": "27"
                                        },
                                        "containment": false,
                                        "effect": {
                                            "type": "none",
                                            "easing": "linear",
                                            "duration": 300
                                        }
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        },
                        {
                            "actions": [
                                {
                                    "action": "jimMove",
                                    "parameter": {
                                        "target": ["#s-Boxes"],
                                        "top": {
                                            "type": "movetoposition",
                                            "value": "293"
                                        },
                                        "left": {
                                            "type": "movetoposition",
                                            "value": "27"
                                        },
                                        "containment": false,
                                        "effect": {
                                            "type": "none",
                                            "easing": "linear",
                                            "duration": 300
                                        }
                                    },
                                    "exectype": "serial",
                                    "delay": 0
                                }
                            ]
                        }
                    ],
                    "exectype": "serial",
                    "delay": 0
                }
            ];
            event.data = data;
            jEvent.launchCases(cases);
        }
    });
