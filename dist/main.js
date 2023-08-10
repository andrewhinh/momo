(()=>{var n={908:n=>{n.exports=function(n,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:n=>n)(e)?"dark"===n?"light":"dark":"dark"===n?"Light":"Dark"}},426:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.google.com/specimen/Indie+Flower?category=Handwriting);"]),i.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/*Custom CSS*/\nhtml {\n  font-size: 16px;\n}\n\n:root {\n  --border-color: #565656;\n  --border-btn: 1px solid var(--border-color);\n  --color-base-bg: #efefef;\n  --color-base-text: #333;\n  --color-btn-bg: #cfcfcf;\n  --display-theme-name: "Dark";\n}\n\n@media (prefers-color-scheme: dark) {\n  :root.dark {\n    --border-color: #cfcfcf;\n    --color-base-bg: #333;\n    --color-base-text: #efefef;\n    --color-btn-bg: #565656;\n    --display-theme-name: "Light";\n  }\n}\n\n:root.light {\n  --color-base-bg: #efefef;\n  --color-base-text: #333;\n  --color-btn-bg: #cfcfcf;\n}\n\n:root.dark {\n  --color-base-bg: #333;\n  --color-base-text: #efefef;\n  --color-btn-bg: #565656;\n}\n\nbody {\n  line-height: 1.5;\n  text-align: center;\n  background-color: var(--color-base-bg);\n}\n\ninput,\nbutton {\n  background-color: var(--color-btn-bg);\n  border: var(--border-btn);\n}\n\nbody,\nbutton,\ninput {\n  font-family: "Indie Flower", system-ui, "Segoe UI", Roboto, Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  color: var(--color-base-text);\n}\n\nimg,\nvideo {\n  object-fit: contain;\n  height: 400px;\n}\n\ninput[type="text"] {\n  text-align: center;\n}\n\ninput[type="text"]:focus {\n  border: 3px solid var(--border-btn);\n}\n\ninput:invalid {\n  border: 3px dashed red;\n}\n\n.main {\n  margin: 100px auto;\n  max-width: min(95%, 1200px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\n.ball {\n  width: 5rem;\n  height: 5rem;\n  background: radial-gradient(\n    at 30% 30%,\n    rgb(199, 219, 251),\n    rgb(255, 105, 253)\n  );\n  border-radius: 50%;\n}\n\n.roll {\n  animation: roll 2.5s infinite ease-in-out alternate;\n}\n\n.bounce {\n  animation: bounce 0.5s infinite ease-out alternate;\n}\n\n@keyframes roll {\n  from {\n    transform: translateX(-10rem) rotate(0deg);\n  }\n  to {\n    transform: translateX(10rem) rotate(359deg);\n  }\n}\n\n@keyframes bounce {\n  from {\n    transform: translateY(5rem);\n  }\n  to {\n    transform: translateY(0rem);\n  }\n}\n\n.carousel-controls,\n.indicator-tray,\n.image-carousel {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n@keyframes moveLeft {\n  from {\n    transform: translateX(10rem);\n  }\n  to {\n    transform: translateX(-10rem);\n  }\n}\n\n@keyframes moveRight {\n  from {\n    transform: translateX(-10rem);\n  }\n  to {\n    transform: translateX(10rem);\n  }\n}\n\n.arrow {\n  width: 3rem;\n  fill: var(--color-base-text);\n  transition: fill 0.01s ease-in-out;\n}\n\n.arrow:hover {\n  fill: var(--color-btn-bg);\n  cursor: pointer;\n}\n\n.arrow.next > svg {\n  transform: rotate(180deg);\n}\n\nbutton:hover {\n  opacity: 0.6;\n  cursor: pointer;\n}\n\n.indicator {\n  display: inline-block; /* Ensures the indicators are on the same line */\n  height: 3rem; /* Sets the height of the indicators */\n  width: 3rem; /* Sets the width of the indicators */\n  border-radius: 50%; /* Ensures the indicators are circular */\n  background-color: var(--color-btn-bg); /* Sets the color of the indicators */\n  transition: background-color 0.01s ease-in-out;\n}\n\n.indicator.active {\n  background-color: var(--color-base-text);\n}\n\n.indicator:not(.active):hover {\n  background-color: var(--border-color);\n  cursor: pointer;\n}\n\n.theme-button-container {\n  align-self: flex-end;\n}\n\n.theme-button {\n  margin-top: 1rem;\n  transition: opacity 0.01s ease-in-out;\n}\n\n.error {\n  color: white;\n  background-color: #900;\n  margin: 0.5rem auto;\n}\n\n.people {\n  display: grid;\n  resize: both;\n  overflow: auto;\n  grid-template: repeat(1, 1fr) / repeat(auto-fit, minmax(400px, 1fr));\n  border: var(--border-btn);\n  gap: 1rem;\n}\n\n.person {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n/* Increasing font for smaller devices:\n- https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/#calculating-preferred-value-parameters-based-on-specific-starting-and-ending-points\n- https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/#using-negative-viewport-value-for-fluid-sizing\n*/\nh1 {\n  font-size: clamp(2rem, -20vw + 19.5rem, 12rem);\n}\nh2 {\n  font-size: clamp(1.5rem, -15vw + 14.625rem, 9rem);\n}\nlabel,\np,\ninput[type="text"],\nbutton,\n.error {\n  font-size: clamp(1rem, -10vw + 9.75rem, 6rem);\n}\n',""]);const s=i},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var m=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=o(p,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{"use strict";var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),m=t.n(u),p=t(426),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const h=t(908);document.querySelector(".theme-button").addEventListener("click",(()=>{const n=document.documentElement,e=h(n.className,!0);n.className=e;const t=h(n.className,!1);document.querySelector(".display-theme-name").textContent=t})),function(){const n="./assets/",e=[`${n}0.jpg`,`${n}1.jpg`,`${n}2.jpg`,`${n}3.jpg`,`${n}4.jpg`];let t=null,r=0,o="left";const a=document.querySelector(".image-carousel"),i=document.querySelector(".carousel-controls .indicator-tray");function s(){t&&clearTimeout(t),t=setTimeout((()=>{l((r+1)%e.length)}),2500)}function c(n){"left"===o?(o="right",n.style.animation="moveLeft 2.5s ease-in-out forwards"):(o="left",n.style.animation="moveRight 2.5s ease-in-out forwards")}function l(n){const t=r;r=n;const o=document.querySelector(".image-carousel").firstChild;o.src=e[r],o.style.animation="none",o.offsetHeight,o.style.animation=null,c(o),i.querySelector(`.indicator:nth-child(${t+1})`).classList.remove("active"),i.querySelector(`.indicator:nth-child(${r+1})`).classList.add("active"),s()}function d(n){l("next"===n?(r+1)%e.length:(r-1+e.length)%e.length)}document.querySelector(".previous").addEventListener("click",(()=>d("previous"))),document.querySelector(".next").addEventListener("click",(()=>d("next"))),document.querySelectorAll(".indicator").forEach(((n,e)=>{n.addEventListener("click",(()=>l(e)))})),window.addEventListener("keydown",(n=>{"ArrowRight"===n.key?d("next"):"ArrowLeft"===n.key&&d("previous")})),document.addEventListener("DOMContentLoaded",(()=>{const n=document.createElement("img");n.src=e[r],c(n),a.appendChild(n),e.forEach(((n,e)=>{const t=document.createElement("div");t.classList.add("indicator"),0===e&&t.classList.add("active"),i.appendChild(t)})),s()}))}(),function(){const n="./assets/",e=[{role:"system",content:"You are a labrador retriever named Momo. Some facts about you: you were born on 11/21/2020, your owners are Andrew and Ethan Hinh, you are very lazy, and you enjoy slow walks in the park and tasty treats such as bully sticks, lamb, and chicken. In 10 words or less, answer the user as though you could express yourself in human language, but in your response replace any filler words with the word 'woof'. Remember, STAY IN CHARACTER AT ALL TIMES!"}],t=document.querySelector(".name-form"),r=document.querySelector("#name"),o=document.querySelector("#name + p.error"),a=document.querySelector(".tellme-button"),i=document.querySelector(".chat-form"),s=document.querySelector("#chat"),c=document.querySelector("#chat + p.error"),l=document.querySelector(".hmm-button"),d=(()=>{const t=["andrew","ethan"],r=(n,e)=>e?`Hey ${n}.`:`Hey ${n}!`;return{greet:e=>{if(0!==e.length){const o=document.querySelector(".people");o.style.visibility="visible";const a=document.createElement("div");a.classname="person";const i=document.createElement("p"),s=document.createElement("video");t.includes(e.toLowerCase())?(i.innerHTML=r(e[0].toUpperCase()+e.slice(1).toLowerCase(),!0),s.src=`${n}momo-bored.mp4`,s.alt="Video of Momo being bored"):(i.innerHTML=r("stranger",!1),s.src=`${n}momo-happy.mp4`,s.alt="Video of Momo being happy"),s.autoplay=!0,s.controls=!0,s.loop=!0,s.muted=!0,s.type="video/mp4",a.appendChild(i),a.appendChild(s),o.appendChild(a)}},chat:async n=>{if(0!==n.length){const t=document.querySelector(".answer");t.style.visibility="visible";const r=document.querySelector(".loader");r.style.visibility="visible",t.style.display="none","none"===r.style.display&&(r.style.display="block"),e.push({role:"user",content:n});const o="https://momo112120.herokuapp.com/chat";let a=await fetch(o,{mode:"cors",method:"POST",body:JSON.stringify({messages:e}),headers:{"Content-type":"application/json; charset=UTF-8"}});if(a=await a.json(),!("answer"in a)&&"error"in a)throw new Error(a.error);a=a.answer,e.push({role:"assistant",content:a}),t.innerHTML=a,r.style.display="none","none"===t.style.display&&(t.style.display="block")}}}})();function u(){r.validity.valueMissing&&(o.textContent="WHAT'S YOUR NAME?"),o.className="error active"}function m(){s.validity.valueMissing&&(c.textContent="WHAT WAS THAT?"),c.className="error active"}r.addEventListener("input",(n=>{r.validity.valid?(o.textContent="",o.className="error"):u()})),s.addEventListener("input",(n=>{s.validity.valid?(c.textContent="",c.className="error"):m()})),t.addEventListener("submit",(n=>{r.validity.valid||u(),n.preventDefault()})),i.addEventListener("submit",(n=>{s.validity.valid||m(),n.preventDefault()})),a.addEventListener("click",(()=>{const n=r.value;d.greet(n)})),l.addEventListener("click",(()=>{const n=s.value;d.chat(n)}))}()})()})();