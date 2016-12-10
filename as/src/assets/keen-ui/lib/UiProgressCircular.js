/*!
 * Keen UI v0.8.9 (https://github.com/JosephusPaye/keen-ui)
 * (c) 2016 Josephus Paye II
 * Released under the MIT License.
 */
!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.UiProgressCircular=e():(r.Keen=r.Keen||{},r.Keen.UiProgressCircular=e())}(this,function(){return function(r){function e(i){if(t[i])return t[i].exports;var s=t[i]={exports:{},id:i,loaded:!1};return r[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var t={};return e.m=r,e.c=t,e.p="",e(0)}({0:function(r,e,t){r.exports=t(52)},1:function(r,e){r.exports=function(){var r=[];return r.toString=function(){for(var r=[],e=0;e<this.length;e++){var t=this[e];t[2]?r.push("@media "+t[2]+"{"+t[1]+"}"):r.push(t[1])}return r.join("")},r.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(i[o]=!0)}for(s=0;s<e.length;s++){var a=e[s];"number"==typeof a[0]&&i[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),r.push(a))}},r}},2:function(r,e,t){function i(r,e){for(var t=0;t<r.length;t++){var i=r[t],s=p[i.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](i.parts[o]);for(;o<i.parts.length;o++)s.parts.push(u(i.parts[o],e))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(u(i.parts[o],e));p[i.id]={id:i.id,refs:1,parts:a}}}}function s(r){for(var e=[],t={},i=0;i<r.length;i++){var s=r[i],o=s[0],a=s[1],n=s[2],u=s[3],c={css:a,media:n,sourceMap:u};t[o]?t[o].parts.push(c):e.push(t[o]={id:o,parts:[c]})}return e}function o(r,e){var t=h(),i=k[k.length-1];if("top"===r.insertAt)i?i.nextSibling?t.insertBefore(e,i.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),k.push(e);else{if("bottom"!==r.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function a(r){r.parentNode.removeChild(r);var e=k.indexOf(r);e>=0&&k.splice(e,1)}function n(r){var e=document.createElement("style");return e.type="text/css",o(r,e),e}function u(r,e){var t,i,s;if(e.singleton){var o=m++;t=g||(g=n(e)),i=c.bind(null,t,o,!1),s=c.bind(null,t,o,!0)}else t=n(e),i=l.bind(null,t),s=function(){a(t)};return i(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap)return;i(r=e)}else s()}}function c(r,e,t,i){var s=t?"":i.css;if(r.styleSheet)r.styleSheet.cssText=v(e,s);else{var o=document.createTextNode(s),a=r.childNodes;a[e]&&r.removeChild(a[e]),a.length?r.insertBefore(o,a[e]):r.appendChild(o)}}function l(r,e){var t=e.css,i=e.media,s=e.sourceMap;if(i&&r.setAttribute("media",i),s&&(t+="\n/*# sourceURL="+s.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var p={},f=function(r){var e;return function(){return"undefined"==typeof e&&(e=r.apply(this,arguments)),e}},d=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=f(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,m=0,k=[];r.exports=function(r,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var t=s(r);return i(t,e),function(r){for(var o=[],a=0;a<t.length;a++){var n=t[a],u=p[n.id];u.refs--,o.push(u)}if(r){var c=s(r);i(c,e)}for(var a=0;a<o.length;a++){var u=o[a];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete p[u.id]}}}};var v=function(){var r=[];return function(e,t){return r[e]=t,r.filter(Boolean).join("\n")}}()},52:function(r,e,t){var i,s;t(63),i=t(54),s=t(58),r.exports=i||{},r.exports.__esModule&&(r.exports=r.exports["default"]),s&&(("function"==typeof r.exports?r.exports.options||(r.exports.options={}):r.exports).template=s)},54:function(r,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"ui-progress-circular",props:{show:{type:Boolean,"default":!1},type:{type:String,"default":"indeterminate"},color:{type:String,"default":"primary"},value:{type:Number,"default":0},size:{type:Number,"default":32},stroke:Number,autoStroke:{type:Boolean,"default":!0},disableTransition:{type:Boolean,"default":!1}},computed:{strokeDashArray:function(){var r=2*Math.PI*this.radius;return Math.round(1e3*r)/1e3},strokeDashOffset:function(){var r=this.moderateValue(this.value),e=2*Math.PI*this.radius;return(100-r)/100*e},radius:function(){return(this.size-this.stroke)/2}},created:function(){this.stroke||(this.autoStroke?this.stroke=parseInt(this.size/8,10):this.stroke=4)},methods:{moderateValue:function(r){return isNaN(r)||0>r?0:r>100?100:r}}}},56:function(r,e,t){e=r.exports=t(1)(),e.push([r.id,".ui-progress-circular{position:relative}.ui-progress-circular .ui-progress-circular-determinate{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.ui-progress-circular .ui-progress-circular-determinate .ui-progress-circular-determinate-path{stroke-dashoffset:0;transition:stroke-dashoffset .3s ease}.ui-progress-circular .ui-progress-circular-determinate .ui-progress-circular-determinate-path.multi-color,.ui-progress-circular .ui-progress-circular-determinate .ui-progress-circular-determinate-path.primary{stroke:#2196f3}.ui-progress-circular .ui-progress-circular-determinate .ui-progress-circular-determinate-path.accent{stroke:#d500f9}.ui-progress-circular .ui-progress-circular-determinate .ui-progress-circular-determinate-path.black{stroke:#212121}.ui-progress-circular .ui-progress-circular-determinate .ui-progress-circular-determinate-path.white{stroke:#fff}.ui-progress-circular .ui-progress-circular-indeterminate{-webkit-animation:ui-progress-circular-rotate 1.4s linear infinite;animation:ui-progress-circular-rotate 1.4s linear infinite;-webkit-transform-origin:center center;transform-origin:center center;width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0}.ui-progress-circular .ui-progress-circular-indeterminate-path{stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;-webkit-animation:ui-progress-circular-dash 1.4s ease-in-out infinite;animation:ui-progress-circular-dash 1.4s ease-in-out infinite}.ui-progress-circular .ui-progress-circular-indeterminate-path.multi-color{-webkit-animation:ui-progress-circular-dash 1.4s ease-in-out infinite,ui-progress-circular-color 6s ease-in-out infinite;animation:ui-progress-circular-dash 1.4s ease-in-out infinite,ui-progress-circular-color 6s ease-in-out infinite}.ui-progress-circular .ui-progress-circular-indeterminate-path.primary{stroke:#2196f3}.ui-progress-circular .ui-progress-circular-indeterminate-path.accent{stroke:#d500f9}.ui-progress-circular .ui-progress-circular-indeterminate-path.black{stroke:#212121}.ui-progress-circular .ui-progress-circular-indeterminate-path.white{stroke:#fff}.ui-progress-circular-toggle-transition{opacity:1;-webkit-transform:scale(1);transform:scale(1);transition-duration:.3s;transition-timing-function:ease;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.ui-progress-circular-toggle-enter,.ui-progress-circular-toggle-leave{opacity:0;-webkit-transform:scale(0);transform:scale(0)}@-webkit-keyframes ui-progress-circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes ui-progress-circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes ui-progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dashoffset:-35px}50%,to{stroke-dasharray:89,200}to{stroke-dashoffset:-124px}}@keyframes ui-progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dashoffset:-35px}50%,to{stroke-dasharray:89,200}to{stroke-dashoffset:-124px}}@-webkit-keyframes ui-progress-circular-color{0%,to{stroke:#f44336}40%{stroke:#2196f3}66%{stroke:#4caf50}80%,90%{stroke:#ff9800}}@keyframes ui-progress-circular-color{0%,to{stroke:#f44336}40%{stroke:#2196f3}66%{stroke:#4caf50}80%,90%{stroke:#ff9800}}",""])},58:function(r,e){r.exports="<div class=ui-progress-circular :style=\"{ 'width': size + 'px', 'height': size + 'px' }\" v-show=show :transition=\"disableTransition ? null : 'ui-progress-circular-toggle'\"> <svg class=ui-progress-circular-determinate :width=size :height=size role=progressbar :aria-valuemin=0 :aria-valuemax=100 :aria-valuenow=value v-if=\"type === 'determinate'\"> <circle class=ui-progress-circular-determinate-path :class=[color] :r=radius :cx=\"size / 2\" :cy=\"size / 2\" fill=transparent :stroke-dasharray=strokeDashArray stroke-dashoffset=0 :style=\"{ 'stroke-dashoffset': strokeDashOffset, 'stroke-width': stroke }\"></circle> </svg> <svg class=ui-progress-circular-indeterminate viewBox=\"25 25 50 50\" role=progressbar :aria-valuemin=0 :aria-valuemax=100 v-else> <circle class=ui-progress-circular-indeterminate-path :class=[color] cx=50 cy=50 r=20 fill=none stroke-miterlimit=10 :stroke-width=stroke> </circle></svg> </div>"},63:function(r,e,t){var i=t(56);"string"==typeof i&&(i=[[r.id,i,""]]);t(2)(i,{});i.locals&&(r.exports=i.locals)}})});