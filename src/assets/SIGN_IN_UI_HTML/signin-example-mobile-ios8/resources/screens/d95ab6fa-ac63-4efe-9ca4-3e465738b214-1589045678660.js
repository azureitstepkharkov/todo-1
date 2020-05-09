jQuery("#simulation")
  .on("click", ".s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Button_16": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Button_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Button_16 span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Button_16": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Button_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Button_16 span": {
                      "attributes": {
                        "color": "#007DFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Label_58")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Label_58": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Label_58 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Label_58 span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Label_59": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "'IOS8-Icons-Regular',Arial"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Label_59 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Label_59 span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'IOS8-Icons-Regular',Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Label_58": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Label_58 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Label_58 span": {
                      "attributes": {
                        "color": "#007DFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Label_59": {
                      "attributes": {
                        "font-size": "20.0pt",
                        "font-family": "'IOS8-Icons-Regular',Arial"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Label_59 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Label_59 span": {
                      "attributes": {
                        "color": "#157EFB",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'IOS8-Icons-Regular',Arial",
                        "font-size": "20.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cadcdbd5-d639-4865-b840-0c142b724760",
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
  .on("pageload", ".s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-dotblue")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": ".s-dotblue",
                  "property": "jimGetValue"
                },"false" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 .shapewrapper-s-dotblue .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 .shapewrapper-s-dotblue span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Bold',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Label_168")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Label_168" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }," PM" ]
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
    } else if(jFirer.is("#s-Line_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Line_17" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 1000,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_40" ],
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
  .on("focusin", ".s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Input_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Input_15 input": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Light',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_15" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Label_107" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "13"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Label_107" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "13"
                    },
                    "containment": false
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
  .on("focusout", ".s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Input_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-d95ab6fa-ac63-4efe-9ca4-3e465738b214 #s-Input_15 input": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Light',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_15" ],
                    "value": "Search"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Label_107" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "155"
                    },
                    "containment": false
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