jQuery("#simulation")
    .on("click", ".s-b6998349-ca37-49c4-bbe3-b1ef548a7bce .click", function (event, data) {
        var jEvent, jFirer, cases;
        if (data === undefined) {
            data = event;
        }
        jEvent = jimEvent(event);
        jFirer = jEvent.getEventFirer();
        if (jFirer.is("#s-Image_5")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimNavigation",
                                    "parameter": {
                                        "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
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
        }
    })
    .on("pageload", ".s-b6998349-ca37-49c4-bbe3-b1ef548a7bce .pageload", function (event, data) {
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
        } else if (jFirer.is("#s-Text_6")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "target": ["#s-Text_6"],
                                        "value": {
                                            "datatype": "variable",
                                            "element": "Password"
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
        } else if (jFirer.is("#s-Text_5")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "target": ["#s-Text_5"],
                                        "value": {
                                            "datatype": "variable",
                                            "element": "Email"
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
        } else if (jFirer.is("#s-Text_4")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "target": ["#s-Text_4"],
                                        "value": {
                                            "datatype": "variable",
                                            "element": "Surname"
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
        } else if (jFirer.is("#s-Text_7")) {
            cases = [
                {
                    "blocks": [
                        {
                            "actions": [
                                {
                                    "action": "jimSetValue",
                                    "parameter": {
                                        "target": ["#s-Text_7"],
                                        "value": {
                                            "datatype": "variable",
                                            "element": "FirstName"
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
