

<template v-on:toggleActive="presentToggle()">
<div class="clock">
    <toggle-button></toggle-button>

    <svg id="aClock" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">

<g id="Layer_1">
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
	<g id="past-line">
		<line class="past-line" x1="50" y1="50" x2="50" y2="0.5"/>
		<path  class="past-line" d="M50,50c0,0-0.3-0.8-0.6-2.1c-0.2-0.7-0.4-1.5-0.6-2.4c-0.1-0.5-0.2-1-0.4-1.5c-0.1-0.3-0.1-0.5,0-0.8
			c0-0.3,0-0.6,0-0.9c0-4.6,0-10.8,0-17s0-12.4,0-17c0-0.3,0-0.6,0-0.9c0-0.3,0-0.5,0-0.8c0.1-0.5,0.2-1,0.4-1.5
			c0.2-0.9,0.4-1.8,0.6-2.4C49.8,1.3,50,0.5,50,0.5s0.2,0.8,0.6,2.1c0.2,0.7,0.4,1.5,0.6,2.4c0.1,0.5,0.2,1,0.4,1.5
			c0.1,0.3,0.1,0.5,0,0.8c0,0.3,0,0.6,0,0.9c0,4.6,0,10.8,0,17s0,12.4,0,17c0,0.3,0,0.6,0,0.9c0,0.3,0,0.5,0,0.8
			c-0.1,0.5-0.2,1-0.4,1.5c-0.2,0.9-0.4,1.8-0.6,2.4C50.3,49.2,50,50,50,50z"/>
	</g>

</g>
</svg>
    <h1>{{inFocus}}</h1>
</div>

</template>

<script>
    var TM = require("gsap");


    export default {
        name: 'clock',
        data:function () {
            return {
                presentData: [160],
                pastData:[140],
                inFocus:"present"
            }
        },
        created: function(){

        },
        mounted:function(){
            var test = new TimelineLite();
            var currentLine = document.getElementById('current-line');
            var pastLine = document.getElementById('past-line');

            var bottomHeight = document.getElementById('Layer_2').getBoundingClientRect().height + document.getElementById('current-line').getBoundingClientRect().height;
            var middleWidth = document.getElementById('Layer_2').getBoundingClientRect().width/2 - document.getElementById('current-line').getBoundingClientRect().width/2;
            console.log(bottomHeight);
            test.set( currentLine,{svgOrigin:""+"50%"+" "+"50%"+""});


            test.fromTo( currentLine, 5, {}, {rotationZ:"+=360" });
            var a = setInterval(function() {
               test.restart();

            }, 5200);


        },
        methods:{
            timeToDeg:function(){

            },
            presentToggle:function(active){
                console.log('toggle activated in parent', active);
                active === true ? this.inFocus = 'present' : this.inFocus = 'past';
            }
        },
        components: {
            'toggle-button': require('./toggle-button.vue')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    svg  {height: 100px;width:auto}
    svg .st0{fill:#2196F3;}
    svg .st1{fill:#EAEAEA;}
    svg .st2{fill:#FCFCFC;}
    svg .current-line{fill:pink;}
    svg #past-line{transform-origin:0px 101%;}
    svg #current-line{transform-origin:0px 101%;}
    svg .past-line{fill:orange; opacity:.2; }
</style>
