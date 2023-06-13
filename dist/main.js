(()=>{var e={908:e=>{e.exports=function(e,n){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:e=>e)(n)?"dark"===e?"light":"dark":"dark"===e?"Light":"Dark"}},426:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"@import url(https://fonts.google.com/specimen/Indie+Flower?category=Handwriting);"]),i.push([e.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/*Custom CSS*/\nhtml {\n  font-size: 16px;\n}\n\n:root {\n  --border-color: #565656;\n  --border-btn: 1px solid var(--border-color);\n  --color-base-bg: #efefef;\n  --color-base-text: #333;\n  --color-btn-bg: #cfcfcf;\n  --display-theme-name: "Dark";\n}\n\n@media (prefers-color-scheme: dark) {\n  :root.dark {\n    --border-color: #cfcfcf;\n    --color-base-bg: #333;\n    --color-base-text: #efefef;\n    --color-btn-bg: #565656;\n    --display-theme-name: "Light";\n  }\n}\n\n:root.light {\n  --color-base-bg: #efefef;\n  --color-base-text: #333;\n  --color-btn-bg: #cfcfcf;\n}\n\n:root.dark {\n  --color-base-bg: #333;\n  --color-base-text: #efefef;\n  --color-btn-bg: #565656;\n}\n\nbody {\n  line-height: 1.5;\n  text-align: center;\n  background-color: var(--color-base-bg);\n}\n\ninput,\nbutton {\n  background-color: var(--color-btn-bg);\n  border: var(--border-btn);\n}\n\nbody,\nbutton,\ninput {\n  font-family: "Indie Flower", system-ui, "Segoe UI", Roboto, Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  color: var(--color-base-text);\n}\n\nimg,\nvideo {\n  object-fit: contain;\n  height: 400px;\n}\n\ninput[type="text"] {\n  text-align: center;\n}\n\ninput[type="text"]:focus {\n  border: 3px solid var(--border-btn);\n}\n\ninput:invalid {\n  border: 3px dashed red;\n}\n\n.main {\n  margin: 100px auto;\n  max-width: min(95%, 1200px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\n.carousel-controls,\n.indicator-tray,\n.image-carousel {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.arrow {\n  width: 3rem;\n  fill: var(--color-base-text);\n}\n\n.arrow:hover {\n  fill: var(--color-btn-bg);\n}\n\n.arrow.next > svg {\n  transform: rotate(180deg);\n}\n\nbutton:hover,\n.indicator:not(.active):hover {\n  /* indicate clickable with highlight */\n  box-shadow: 0 0 3rem 1rem var(--border-color) inset;\n  cursor: pointer;\n}\n\n.indicator {\n  display: inline-block; /* Ensures the indicators are on the same line */\n  height: 3rem; /* Sets the height of the indicators */\n  width: 3rem; /* Sets the width of the indicators */\n  border-radius: 50%; /* Ensures the indicators are circular */\n  background-color: var(--color-btn-bg); /* Sets the color of the indicators */\n  transition: opacity 0.5s ease-in-out; /* Cleaner transitions */\n  /*opacity: 0.5; /* Indicators default to semi-transparent and are revealed by class changing */\n}\n\n.indicator.active {\n  background-color: var(--color-base-text);\n}\n\n.theme-button-container {\n  align-self: flex-end;\n}\n\n.theme-button {\n  margin-top: 1rem;\n}\n\n.error {\n  color: white;\n  background-color: #900;\n  margin: 0.5rem auto;\n}\n\n.people {\n  display: grid;\n  resize: both;\n  overflow: auto;\n  grid-template: repeat(1, 1fr) / repeat(auto-fit, minmax(400px, 1fr));\n  border: var(--border-btn);\n  gap: 1rem;\n}\n\n.person {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.loader {\n  height: 0px;\n}\n\n/* Increasing font for smaller devices:\n- https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/#calculating-preferred-value-parameters-based-on-specific-starting-and-ending-points\n- https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/#using-negative-viewport-value-for-fluid-sizing\n*/\nh1 {\n  font-size: clamp(2rem, -20vw + 19.5rem, 12rem);\n}\nh2 {\n  font-size: clamp(1.5rem, -15vw + 14.625rem, 9rem);\n}\nlabel,\np,\ninput[type="text"],\nbutton,\n.error {\n  font-size: clamp(1rem, -10vw + 9.75rem, 6rem);\n}\n',""]);const c=i},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{"use strict";var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),m=t.n(u),p=t(426),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const h=t(908);document.querySelector(".theme-button").addEventListener("click",(()=>{const e=document.documentElement,n=h(e.className,!0);e.className=n;const t=h(e.className,!1);document.querySelector(".display-theme-name").textContent=t})),function(){const e="./assets/",n=[`${e}0.jpg`,`${e}1.jpg`,`${e}2.jpg`,`${e}3.jpg`,`${e}4.jpg`];let t=null,r=0;const o=document.querySelector(".image-carousel"),a=document.querySelector(".carousel-controls .indicator-tray");function i(){t&&clearTimeout(t),t=setTimeout((()=>{c((r+1)%n.length)}),2500)}function c(e){const t=r;r=e,o.removeChild(document.querySelector(".image-carousel").firstChild);const c=document.createElement("img");c.src=n[r],o.appendChild(c),a.querySelector(`.indicator:nth-child(${t+1})`).classList.remove("active"),a.querySelector(`.indicator:nth-child(${r+1})`).classList.add("active"),i()}function s(e){c("next"===e?(r+1)%n.length:(r-1+n.length)%n.length)}document.addEventListener("DOMContentLoaded",(()=>{const e=document.createElement("img");e.src=n[r],o.appendChild(e),n.forEach(((e,n)=>{const t=document.createElement("div");t.classList.add("indicator"),0===n&&t.classList.add("active"),a.appendChild(t)})),document.querySelector(".previous").addEventListener("click",(()=>s("previous"))),document.querySelector(".next").addEventListener("click",(()=>s("next"))),window.addEventListener("keydown",(e=>{"ArrowRight"===e.key?s("next"):"ArrowLeft"===e.key&&s("previous")})),document.querySelectorAll(".indicator").forEach(((e,n)=>{e.addEventListener("click",(()=>c(n)))})),i()}))}(),function(){const e="./assets/",n=[{role:"system",content:"You are a labrador retriever named Momo. Some facts about you: you were born on 11/21/2020, your owners are Andrew and Ethan Hinh, you are very lazy, and you enjoy slow walks in the park and tasty treats such as bully sticks, lamb, and chicken. In 10 words or less, answer the user as though you could express yourself in human language, but in your response replace any filler words with the word 'woof'. Remember, STAY IN CHARACTER AT ALL TIMES!"}],t=document.querySelector(".name-form"),r=document.querySelector("#name"),o=document.querySelector("#name + p.error"),a=document.querySelector(".tellme-button"),i=document.querySelector(".chat-form"),c=document.querySelector("#chat"),s=document.querySelector(".loader"),l=document.querySelector("#chat + p.error"),d=document.querySelector(".hmm-button"),u=(()=>{const t=["andrew","ethan"],r=(e,n)=>n?`Hey ${e}.`:`Hey ${e}!`;return{greet:n=>{if(0!==n.length){const o=document.querySelector(".people"),a=document.createElement("div");a.classname="person";const i=document.createElement("p"),c=document.createElement("video");t.includes(n.toLowerCase())?(i.innerHTML=r(n[0].toUpperCase()+n.slice(1).toLowerCase(),!0),c.src=`${e}momo-bored.mp4`):(i.innerHTML=r("stranger",!1),c.src=`${e}momo-happy.mp4`),c.alt="Momo Gif",c.autoplay=!0,c.controls=!0,c.loop=!0,c.muted=!0,c.type="video/mp4",a.appendChild(i),a.appendChild(c),o.appendChild(a)}},chat:async e=>{if(0!==e.length){s.style.height="6rem",n.push({role:"user",content:e});const t=document.querySelector(".answer > p"),r="https://momo112120.herokuapp.com/chat";try{let e=await fetch(r,{mode:"cors",method:"POST",body:JSON.stringify({messages:n}),headers:{"Content-type":"application/json; charset=UTF-8"}});if(e=await e.json(),!("answer"in e)&&"error"in e)throw new Error(e.error);e=e.answer,n.push({role:"assistant",content:e}),s.style.height="0px",t.innerHTML=e}catch(e){console.error(e)}}}}})();function m(){r.validity.valueMissing&&(o.textContent="WHAT'S YOUR NAME?"),o.className="error active"}function p(){c.validity.valueMissing&&(l.textContent="EMPTINESS IS SADNESS"),l.className="error active"}r.addEventListener("input",(e=>{r.validity.valid?(o.textContent="",o.className="error"):m()})),c.addEventListener("input",(e=>{c.validity.valid?(l.textContent="",l.className="error"):p()})),t.addEventListener("submit",(e=>{r.validity.valid||m(),e.preventDefault()})),i.addEventListener("submit",(e=>{c.validity.valid||p(),e.preventDefault()})),a.addEventListener("click",(()=>{const e=r.value;u.greet(e)})),d.addEventListener("click",(()=>{const e=c.value;u.chat(e)}))}()})()})();