(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/*Custom CSS*/\nhtml {\n  font-size: 16px;\n}\n\n:root {\n  --border-color: #565656;\n  --border-btn: 1px solid var(--border-color);\n  --color-base-bg: #efefef;\n  --color-base-text: #333;\n  --color-btn-bg: #cfcfcf;\n  --display-theme-name: "Dark";\n}\n\n@media (prefers-color-scheme: dark) {\n  :root.dark {\n    --border-color: #cfcfcf;\n    --color-base-bg: #333;\n    --color-base-text: #efefef;\n    --color-btn-bg: #565656;\n    --display-theme-name: "Light";\n  }\n}\n\n:root.light {\n  --color-base-bg: #efefef;\n  --color-base-text: #333;\n  --color-btn-bg: #cfcfcf;\n}\n\n:root.dark {\n  --color-base-bg: #333;\n  --color-base-text: #efefef;\n  --color-btn-bg: #565656;\n}\n\nbody,\ninput,\n.theme-button,\n.tellme-button {\n  color: var(--color-base-text);\n}\n\nbody {\n  font-family: "Verdana", system-ui, "Segoe UI", Roboto, Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  text-align: center;\n  background-color: var(--color-base-bg);\n}\n\n.main {\n  margin: 100px auto;\n  max-width: min(95%, 1200px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\nimg,\nvideo {\n  object-fit: contain;\n  height: 400px;\n}\n\n.carousel-controls,\n.indicator-tray,\n.image-carousel {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.arrow {\n  width: 3rem;\n  fill: var(--color-base-text);\n}\n\n.arrow:hover {\n  fill: var(--color-btn-bg);\n}\n\nbutton:hover,\n.indicator:not(.active):hover {\n  /* indicate clickable with highlight */\n  box-shadow: 0 0 3rem 1rem var(--border-color) inset;\n  cursor: pointer;\n}\n\n.indicator {\n  display: inline-block; /* Ensures the indicators are on the same line */\n  height: 3rem; /* Sets the height of the indicators */\n  width: 3rem; /* Sets the width of the indicators */\n  border-radius: 50%; /* Ensures the indicators are circular */\n  background-color: var(--color-btn-bg); /* Sets the color of the indicators */\n  transition: opacity 0.5s ease-in-out; /* Cleaner transitions */\n  /*opacity: 0.5; /* Indicators default to semi-transparent and are revealed by class changing */\n}\n\n.indicator.active {\n  background-color: var(--color-base-text);\n}\n\n.theme-button-container {\n  align-self: flex-end;\n}\n\n.theme-button {\n  margin-top: 1rem;\n}\n\ninput,\n.theme-button,\n.tellme-button {\n  background-color: var(--color-btn-bg);\n  border: var(--border-btn);\n}\n\ninput[type="text"] {\n  text-align: center;\n}\n\ninput[type="text"]:focus {\n  border: 3px solid var(--border-btn);\n}\n\ninput:invalid {\n  border: 3px dashed red;\n}\n\n.error {\n  color: white;\n  background-color: #900;\n  margin: 0.5rem auto;\n}\n\n.people {\n  display: grid;\n  resize: both;\n  overflow: auto;\n  grid-template: repeat(1, 1fr) / repeat(auto-fit, minmax(400px, 1fr));\n  border: var(--border-btn);\n  gap: 1rem;\n}\n\n.person {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n/* Increasing font for smaller devices:\n- https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/#calculating-preferred-value-parameters-based-on-specific-starting-and-ending-points\n- https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/#using-negative-viewport-value-for-fluid-sizing\n*/\nh1 {\n  font-size: clamp(2rem, -20vw + 19.5rem, 12rem);\n}\nh2 {\n  font-size: clamp(1.5rem, -15vw + 14.625rem, 9rem);\n}\nlabel,\np,\ninput[type="text"],\nbutton,\n.error {\n  font-size: clamp(1rem, -10vw + 9.75rem, 6rem);\n}\n',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h="./assets/",b=[`${h}0.jpg`,`${h}1.jpg`,`${h}2.jpg`,`${h}3.jpg`,`${h}4.jpg`];let v=null,g=0;const y=document.querySelector(".main"),x=y.querySelector(".theme-button"),w=y.querySelector(".image-carousel"),S=document.querySelector(".carousel-controls .indicator-tray"),k=y.querySelector("form"),E=y.querySelector("#name"),C=document.querySelector("#name + p.error"),q=y.querySelector(".tellme-button");function L(){v&&clearTimeout(v),v=setTimeout((()=>{j((g+1)%b.length)}),2500)}function j(n){const e=g;g=n,w.removeChild(document.querySelector(".image-carousel").firstChild);const t=document.createElement("img");t.src=b[g],w.appendChild(t),S.querySelector(`.indicator:nth-child(${e+1})`).classList.remove("active"),S.querySelector(`.indicator:nth-child(${g+1})`).classList.add("active"),L()}function M(n){j("next"===n?(g+1)%b.length:(g-1+b.length)%b.length)}const T=(()=>{const n=["andrew","ethan","mom"],e=(n,e)=>e?`Hey ${n}.`:`Hey ${n}!`;return{greet:t=>{if(0!==t.name.length){const r=y.querySelector(".people"),o=document.createElement("div");o.classname="person";const a=document.createElement("p"),i=document.createElement("video");n.includes(t.name.toLowerCase())?(a.innerHTML=e(t.name[0].toUpperCase()+t.name.slice(1).toLowerCase(),!0),i.src=`${h}momo-bored.mp4`):(a.innerHTML=e("stranger",!1),i.src=`${h}momo-happy.mp4`),i.alt="Momo Gif",i.autoplay=!0,i.controls=!0,i.loop=!0,i.muted=!0,i.type="video/mp4",o.appendChild(a),o.appendChild(i),r.appendChild(o),y.appendChild(r)}}}})();function A(){E.validity.valueMissing&&(C.textContent="WHAT'S YOUR NAME?"),C.className="error active"}document.addEventListener("DOMContentLoaded",(()=>{const n=document.createElement("img");n.src=b[g],w.appendChild(n),b.forEach(((n,e)=>{const t=document.createElement("div");t.classList.add("indicator"),0===e&&t.classList.add("active"),S.appendChild(t)})),document.querySelector(".previous").addEventListener("click",(()=>M("previous"))),document.querySelector(".next").addEventListener("click",(()=>M("next"))),window.addEventListener("keydown",(n=>{"ArrowRight"===n.key?M("next"):"ArrowLeft"===n.key&&M("previous")})),document.querySelectorAll(".indicator").forEach(((n,e)=>{n.addEventListener("click",(()=>j(e)))})),L()})),E.addEventListener("input",(n=>{E.validity.valid?(C.textContent="",C.className="error"):A()})),k.addEventListener("submit",(n=>{E.validity.valid||A(),n.preventDefault()})),q.addEventListener("click",(()=>{const n={name:E.value};T.greet(n)})),x.addEventListener("click",(function(){const n=document.documentElement,e="dark"===n.className?"light":"dark";n.className=e;const t="dark"===n.className?"Light":"Dark";y.querySelector(".display-theme-name").textContent=t}))})()})();