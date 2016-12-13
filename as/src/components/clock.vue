

<template v-on:toggleActive="presentToggle()">
<div class="clock">
    <input v-model="dummyJson.totalsForAllResults['ga:avgSessionDuration']" /><button v-on:click="play">play</button>
    <div class="uk-panel uk-panel-box uk-visible-hover-inline uk-flex uk-flex-middle uk-flex-space-around">
        <div class="">
            <svg id="aClock" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	        viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">

                <g id="Layer_1">
                    <circle id="progressCircle" class="st3" cx="50" cy="50" r="46"  stroke-width="3" stroke-dasharray="0 , 2000"/>
                    <circle class="st0" cx="50" cy="50" r="42.8"/>
                    <circle class="st1" cx="50" cy="50" r="35.6"/>
                    <circle class="st2" cx="51" cy="51" r="34.4"/>
                    <circle class="st0" cx="50" cy="50" r="3.1"/>
                    <g>
                        <rect x="49.2" y="16.4" class="st0" width="1.5" height="5.7"/>
                        <rect x="77.9" y="49.2" class="st0" width="5.7" height="1.5"/>
                        <rect x="49.2" y="77.9" class="st0" width="1.5" height="5.7"/>
                        <rect x="16.4" y="49.2" class="st0" width="5.7" height="1.5"/>
                        <g>

                                <rect x="68.9" y="27.5" transform="matrix(0.7066 -0.7076 0.7076 0.7066 1.0784 59.0683)" class="st0" width="5.7" height="1.5"/>
                            <rect x="71" y="68.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -29.727 71.7673)" class="st0" width="1.5" height="5.7"/>

                                <rect x="25.4" y="71" transform="matrix(0.7066 -0.7076 0.7076 0.7066 -42.4977 41.0305)" class="st0" width="5.7" height="1.5"/>

                                <rect x="27.5" y="25.4" transform="matrix(0.7076 -0.7066 0.7066 0.7076 -11.6944 28.2051)" class="st0" width="1.5" height="5.7"/>
                        </g>
                    </g>
                </g>
                <g id="Layer_2">
                    <g id="current-line">
                        <line class="current-line" x1="50" y1="50" x2="50" y2="0.5"/>
                        <path  class="current-line" d="M50,50c0,0-0.3-0.8-0.6-2.1c-0.2-0.7-0.4-1.5-0.6-2.4c-0.1-0.5-0.2-1-0.4-1.5c-0.1-0.3-0.1-0.5,0-0.8
                            c0-0.3,0-0.6,0-0.9c0-4.6,0-10.8,0-17s0-12.4,0-17c0-0.3,0-0.6,0-0.9c0-0.3,0-0.5,0-0.8c0.1-0.5,0.2-1,0.4-1.5
                            c0.2-0.9,0.4-1.8,0.6-2.4C49.8,1.3,50,0.5,50,0.5s0.2,0.8,0.6,2.1c0.2,0.7,0.4,1.5,0.6,2.4c0.1,0.5,0.2,1,0.4,1.5
                            c0.1,0.3,0.1,0.5,0,0.8c0,0.3,0,0.6,0,0.9c0,4.6,0,10.8,0,17s0,12.4,0,17c0,0.3,0,0.6,0,0.9c0,0.3,0,0.5,0,0.8
                            c-0.1,0.5-0.2,1-0.4,1.5c-0.2,0.9-0.4,1.8-0.6,2.4C50.3,49.2,50,50,50,50z"/>
                    </g>
                </g>
            </svg>
        </div>

        <div>

            <div>
                <div>
                    <div class="uk-text-center">
                        <div id="sessionDuration" class="pk-text-xlarge uk-margin-small-bottom">{{sessionDuration}}</div>
                        <h3 class="uk-panel-title uk-margin-remove">Avg. Session Duration</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

</input>

</template>

<script>

    export default {
        name: 'clock',
        data:function () {
            return {
                presentData: [160],
                pastData:[140],
                inFocus:"present",
                sessionDuration:0,
                dummyJson:{
                    "columnHeaders":[
                        {
                            "columnType":"DIMENSION",
                            "dataType":"STRING",
                            "name":"ga:date"
                        },
                        {
                            "columnType":"METRIC",
                            "dataType":"TIME",
                            "name":"ga:avgSessionDuration"
                        }
                    ],
                    "dataTable":{
                        "cols":[
                            {
                                "id":"ga:date",
                                "label":"ga:date",
                                "type":"date"
                            },
                            {
                                "id":"ga:avgSessionDuration",
                                "label":"ga:avgSessionDuration",
                                "type":"number"
                            }
                        ],
                        "rows":[
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 11)"
                                    },
                                    {
                                        "v":"124.3048780487805"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 12)"
                                    },
                                    {
                                        "v":"119.81333333333333"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 13)"
                                    },
                                    {
                                        "v":"114.21311475409836"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 14)"
                                    },
                                    {
                                        "v":"137.58024691358025"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 15)"
                                    },
                                    {
                                        "v":"157.1494252873563"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 16)"
                                    },
                                    {
                                        "v":"148.58461538461538"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 17)"
                                    },
                                    {
                                        "v":"201.7816091954023"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 18)"
                                    },
                                    {
                                        "v":"138.78666666666666"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 19)"
                                    },
                                    {
                                        "v":"114.74137931034483"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 20)"
                                    },
                                    {
                                        "v":"106.47058823529412"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 21)"
                                    },
                                    {
                                        "v":"81.8840579710145"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 22)"
                                    },
                                    {
                                        "v":"140.390625"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 23)"
                                    },
                                    {
                                        "v":"56.05263157894737"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 24)"
                                    },
                                    {
                                        "v":"144.1818181818182"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 25)"
                                    },
                                    {
                                        "v":"136.19117647058823"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 26)"
                                    },
                                    {
                                        "v":"138.36507936507937"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 27)"
                                    },
                                    {
                                        "v":"121.70731707317073"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 28)"
                                    },
                                    {
                                        "v":"146.9875"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 29)"
                                    },
                                    {
                                        "v":"149.67532467532467"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 10, 30)"
                                    },
                                    {
                                        "v":"110.07692307692308"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 11, 01)"
                                    },
                                    {
                                        "v":"141.23611111111111"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 11, 02)"
                                    },
                                    {
                                        "v":"275.22"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 11, 03)"
                                    },
                                    {
                                        "v":"181.828125"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 11, 04)"
                                    },
                                    {
                                        "v":"52.46341463414634"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 11, 05)"
                                    },
                                    {
                                        "v":"148.05194805194805"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 11, 06)"
                                    },
                                    {
                                        "v":"112.30434782608695"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 11, 07)"
                                    },
                                    {
                                        "v":"179.9814814814815"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 11, 08)"
                                    },
                                    {
                                        "v":"223.22471910112358"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 11, 09)"
                                    },
                                    {
                                        "v":"156.08333333333334"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 11, 10)"
                                    },
                                    {
                                        "v":"115.35714285714286"
                                    }
                                ]
                            },
                            {
                                "c":[
                                    {
                                        "v":"Date(2016, 11, 11)"
                                    },
                                    {
                                        "v":"94.16949152542372"
                                    }
                                ]
                            }
                        ]
                    },
                    totalsForAllResults:{
                        'ga:avgSessionDuration':"139.88255195746737"
                    },
                    "time":1481560041,
                    metricDescriptions:{
                        'ga:avgSessionDuration':"The average duration (in seconds) of users\u0027 sessions."
                    },
                    "dimensionDescriptions":{
                        "ga:date":"The date of the session formatted as YYYYMMDD."
                    }

                },


            }
        },
        created: function(){
           this.test = new TimelineMax({paused:true});

        },
        mounted:function(){
            var self = this;
            var valueHolder = {time:0};
            var endTime = self.dummyJson.totalsForAllResults['ga:avgSessionDuration'];

            console.log('wtf');


            var currentLine = document.getElementById('current-line');
            var progressCircle = document.getElementById('progressCircle');
            var sessionDuration = document.getElementById('sessionDuration');

            self.test.set( currentLine,{svgOrigin:""+"50%"+" "+"50%"+""});
            self.test.set(  progressCircle,{svgOrigin:""+"50%"+" "+"50%"+"", rotation:'-90'});

            self.test.fromTo( currentLine , 3 , {}, {
                fill:'red',
                rotationZ:"250" ,
                scaleX:4,
                ease: CustomEase.create("custom", "M0,0,C0.081,0.247,0.32,-0.162,0.426,-0.01,0.556,0.178,0.61,1.003,0.672,1.048,0.788,1.132,0.818,1,1,1")
            }, 0)
            .fromTo( progressCircle ,3.2, {}, {
                strokeDasharray:"195"+", 2000",
                ease: CustomEase.create("custom", "M0,0,C0.081,0.247,0.32,-0.162,0.426,-0.01,0.556,0.178,0.61,1.003,0.672,1.048,0.788,1.132,0.818,1,1,1")
            }, 0)
            .to( valueHolder ,3.2, {
                time : endTime,
                roundProps: 'time',
                onUpdate:function(){
                    console.log(valueHolder.time);
                    self.sessionDuration = valueHolder.time;

                }

            }, 0)
            .to( sessionDuration ,3.2, {
                color:'#8ec73b',
                scale:2

            }, 0);


            self.test.play();

            function countUp(){


            }


        },

        watch: {

            "dummyJson.totalsForAllResults['ga:avgSessionDuration']" : {
                handler:function(){
                    test.restart();
                },
                deep: false,
                immediate:false
            }
        },

        methods:{
            timeToDeg:function(time){

            },
            play: function(){
                this.test.restart();
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    svg  {height: 100px;width:auto}
    svg .st0{fill:#2196F3;}
    svg .st3{fill:none;stroke:#8aff00}
        #aClock{transform:rotateZ(-180deg)}
    svg .st1{fill:#EAEAEA;}
    svg .st2{fill:#FCFCFC;}
    svg .current-line{}
    svg  #past-line{transform-origin:0px 101%;}
    svg  #current-line{transform-origin:0px 101%;fill:#274800;}
    svg .past-line{fill:orange; opacity:.2; }
</style>
