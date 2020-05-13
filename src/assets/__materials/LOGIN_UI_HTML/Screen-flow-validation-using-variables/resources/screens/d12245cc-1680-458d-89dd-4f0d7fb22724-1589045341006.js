jQuery("#simulation")
    .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function (event, data) {
        var jEvent, jFirer, cases;
        if (data === undefined) {
            data = event;
        }
        jEvent = jimEvent(event);
        jFirer = jEvent.getEventFirer();
        if (jFirer.is("#s-Image_1")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimShow",
                                    "parameter": {
                                        "target": ["#s-Panel_2"],
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
        } else if (jFirer.is("#s-Image_9")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimShow",
                                    "parameter": {
                                        "target": ["#s-Panel_1"],
                                        "transition": {
                                            "type": "slideright",
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
        } else if (jFirer.is("#s-Image_2")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimShow",
                                    "parameter": {
                                        "target": ["#s-Panel_3"],
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
        } else if (jFirer.is("#s-Image_12")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimShow",
                                    "parameter": {
                                        "target": ["#s-Panel_2"],
                                        "transition": {
                                            "type": "slideright",
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
        } else if (jFirer.is("#s-Image_3")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimNavigation",
                                    "parameter": {
                                        "target": "screens/b6998349-ca37-49c4-bbe3-b1ef548a7bce",
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
        }
    })
    .on("pageload", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .pageload", function (event, data) {
        var jEvent, jFirer, cases;
        if (data === undefined) {
            data = event;
        }
        jEvent = jimEvent(event);
        jFirer = jEvent.getEventFirer();
        if (jFirer.is("#s-Label_99")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "target": ["#s-Label_99"],
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
    .on("pageunload", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .pageunload", function (event, data) {
        var jEvent, jFirer, cases;
        if (data === undefined) {
            data = event;
        }
        jEvent = jimEvent(event);
        jFirer = jEvent.getEventFirer();
        if (jFirer.is("#s-Input-text_1")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "variable": ["FirstName"],
                                        "value": {
                                            "datatype": "property",
                                            "target": "#s-Input-text_1",
                                            "property": "jimGetValue"
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
        } else if (jFirer.is("#s-Input-text_2")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "variable": ["Surname"],
                                        "value": {
                                            "datatype": "property",
                                            "target": "#s-Input-text_2",
                                            "property": "jimGetValue"
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
        } else if (jFirer.is("#s-Input_text-3")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "variable": ["Email"],
                                        "value": {
                                            "datatype": "property",
                                            "target": "#s-Input_text-3",
                                            "property": "jimGetValue"
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
        } else if (jFirer.is("#s-Input-text_4")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "variable": ["Password"],
                                        "value": {
                                            "datatype": "property",
                                            "target": "#s-Input-text_4",
                                            "property": "jimGetValue"
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
