(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/*Custom CSS*/\nhtml {\n  font-size: 16px;\n}\n\n:root {\n  --border-btn: 1px solid #565656;\n  --color-base-bg: #efefef;\n  --color-base-text: #333;\n  --color-btn-bg: #cfcfcf;\n  --display-theme-name: "Dark";\n}\n\n@media (prefers-color-scheme: dark) {\n  :root.dark {\n    --border-btn: 1px solid #cfcfcf;\n    --color-base-bg: #333;\n    --color-base-text: #efefef;\n    --color-btn-bg: #565656;\n    --display-theme-name: "Light";\n  }\n}\n\n:root.light {\n  --border-btn: 1px solid #565656;\n  --color-base-bg: #efefef;\n  --color-base-text: #333;\n  --color-btn-bg: #cfcfcf;\n}\n\n:root.dark {\n  --border-btn: 1px solid #cfcfcf;\n  --color-base-bg: #333;\n  --color-base-text: #efefef;\n  --color-btn-bg: #565656;\n}\n\nbody,\ninput,\n.theme-button,\n.tellme-button {\n  color: var(--color-base-text);\n}\n\nbody {\n  font-family: "Verdana", system-ui, "Segoe UI", Roboto, Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  line-height: 1.5;\n  text-align: center;\n  background-color: var(--color-base-bg);\n}\n\ninput,\n.theme-button,\n.tellme-button {\n  background-color: var(--color-btn-bg);\n  border: var(--border-btn);\n}\n\n.main {\n  margin: 0 auto 50px auto;\n  max-width: min(95%, 1200px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\n.people {\n  display: grid;\n  resize: both;\n  overflow: auto;\n  grid-template: repeat(1, 1fr) / repeat(auto-fit, minmax(400px, 1fr));\n  gap: 1rem;\n}\n\n.person {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.theme-button-container {\n  align-self: flex-end;\n}\n\n.theme-button {\n  margin-top: 1rem;\n}\n\n/* Increasing font for smaller devices:\n- https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/#calculating-preferred-value-parameters-based-on-specific-starting-and-ending-points\n- https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/#using-negative-viewport-value-for-fluid-sizing\n*/\nh1 {\n  font-size: clamp(2rem, -20vw + 19.5rem, 12rem);\n}\nh2 {\n  font-size: clamp(1.5rem, -15vw + 14.625rem, 9rem);\n}\nlabel,\np,\ninput[type="text"],\nbutton {\n  font-size: clamp(1rem, -10vw + 9.75rem, 6rem);\n}\n\nimg,\nvideo {\n  object-fit: contain;\n  height: 400px;\n}\n\ninput[type="text"] {\n  text-align: center;\n}\n\ninput[type="text"]:focus {\n  border: 3px solid var(--border-btn);\n}\n',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="/",t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const b=t.p+"videos/momo-happy.mp4",h=t.p+"videos/momo-bored.mp4",v=document.querySelector(".main"),g=v.querySelector(".theme-button"),y=v.querySelector("input"),x=v.querySelector(".tellme-button"),w=v.querySelector(".people"),k=["andrew","ethan","mom"],S=(()=>{const n=n=>`Hey ${n}!`;return{greet:e=>{let t=document.createElement("div");t.classname="person";let o=document.createElement("p"),r=document.createElement("video");k.includes(e.name.toLowerCase())?(o.innerHTML=n(e.name[0].toUpperCase()+e.name.slice(1)),r.src=b):(o.innerHTML=n("stranger"),r.src=h),r.alt="Momo Gif",r.autoplay=!0,r.controls=!0,r.loop=!0,r.muted=!0,r.type="video/mp4",t.appendChild(o),t.appendChild(r),w.appendChild(t),v.appendChild(w)}}})();x.addEventListener("click",(()=>{let n={name:y.value};S.greet(n)})),g.addEventListener("click",(function(){const n=document.documentElement,e="dark"===n.className?"light":"dark";n.className=e;const t="dark"===n.className?"Light":"Dark";v.querySelector(".display-theme-name").textContent=t}))})()})();