!function(e){var n={};function r(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)r.d(t,c,function(n){return e[n]}.bind(null,c));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(module,exports){window.addEventListener("DOMContentLoaded",()=>{const buttons=document.querySelectorAll(".calculator-buttons button"),eq=document.querySelector(".calculator-display-equation span"),res=document.querySelector(".calculator-display-answer span"),checkBtn=e=>{switch(e){case"ac":clearEq();break;case"backspace":removeLastChar();break;case"=":calc();break;case"-":case"+":case"*":case"/":case"%":(eq.innerHTML||"-"===e)&&("+"!==eq.innerHTML.slice(-1)&&"-"!==eq.innerHTML.slice(-1)&&"*"!==eq.innerHTML.slice(-1)&&"/"!==eq.innerHTML.slice(-1)&&"%"!==eq.innerHTML.slice(-1)?eq.innerHTML+=e:eq.innerHTML.length>1&&(eq.innerHTML=eq.innerHTML.substring(0,eq.innerHTML.length-1)+e));break;default:eq.innerHTML+=e}console.log(eq.innerHTML)},clearEq=()=>{eq.innerHTML="",res.innerHTML=""},removeLastChar=()=>{eq.innerHTML=eq.innerHTML.slice(0,-1)},calc=()=>{let regEx=/(\d+)%(\d+)/g,percentRes=eq.innerHTML.replace(regEx,e=>e.slice(0,e.indexOf("%"))*e.slice(e.indexOf("%")+1)/100);res.innerHTML=eval(percentRes)};buttons.forEach(e=>{e.addEventListener("click",()=>{checkBtn(e.id)})})})}]);