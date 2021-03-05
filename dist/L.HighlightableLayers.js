!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("leaflet")):"function"==typeof define&&define.amd?define(["leaflet"],t):"object"==typeof exports?exports.L=t(require("leaflet")):(e.L=e.L||{},e.L.HighlightableLayers=t(e.L))}(self,(function(e){return(()=>{"use strict";var t={974:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(15),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"/* .leaflet-lhl-marker-hightlight-pane {\n\tz-index: 621;\n}*/\n\n.leaflet-pane.leaflet-lhl-raised-pane {\n\tz-index: 620;\n}\n\n.leaflet-pane.leaflet-lhl-raised-shadow-pane {\n\tz-index: 619;\n}\n\n.leaflet-pane.leaflet-lhl-shadow-pane {\n\tz-index: 399;\n}\n\n.leaflet-pane.leaflet-lhl-almost-over-pane {\n\tz-index: 201;\n}","",{version:3,sources:["webpack://./src/panes.css"],names:[],mappings:"AAAA;;EAEE;;AAEF;CACC,YAAY;AACb;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;AACb",sourcesContent:["/* .leaflet-lhl-marker-hightlight-pane {\n\tz-index: 621;\n}*/\n\n.leaflet-pane.leaflet-lhl-raised-pane {\n\tz-index: 620;\n}\n\n.leaflet-pane.leaflet-lhl-raised-shadow-pane {\n\tz-index: 619;\n}\n\n.leaflet-pane.leaflet-lhl-shadow-pane {\n\tz-index: 399;\n}\n\n.leaflet-pane.leaflet-lhl-almost-over-pane {\n\tz-index: 201;\n}"],sourceRoot:""}]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},15:e=>{function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,a=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[1],i=a[3];if("function"==typeof btoa){var l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),c="/*# ".concat(s," */"),u=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[o].concat(u).concat([c]).join("\n")}return[o].join("\n")}},477:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(379),a=n.n(r),o=n(974);a()(o.Z,{insert:"head",singleton:!1});const i=o.Z.locals||{}},379:(e,t,n)=>{var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function i(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],a=0;a<e.length;a++){var l=e[a],s=t.base?l[0]+t.base:l[0],c=n[s]||0,u="".concat(s," ").concat(c);n[s]=c+1;var f=i(u),h={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(o[f].references++,o[f].updater(h)):o.push({identifier:u,updater:y(h,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function h(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,d=0;function y(e,t){var n,r,a;if(t.singleton){var o=d++;n=p||(p=s(t)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=s(t),r=h.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=i(n[r]);o[a].references--}for(var s=l(e,t),c=0;c<n.length;c++){var u=i(n[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=s}}}},607:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(695),t),a(n(593),t),a(n(992),t),a(n(299),t)},992:function(e,t,n){var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,a++)r[a]=o[i];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.HighlightableRectangle=t.HighlightablePolyline=t.HighlightablePolygon=t.HighlightableCircleMarker=t.HighlightableCircle=t.createHighlightableLayerClass=void 0;var l=n(453),s=n(695),c=n(299),u=n(593);function f(e,t,n){void 0===t&&(t=[]);for(var r=function(t){function r(){for(var r,a=[],o=0;o<arguments.length;o++)a[o]=arguments[o];var l=t.apply(this,a)||this;l.realOptions=u.clone(l.options),n&&Object.assign(l.realOptions,n),l.realOptions.generateStyles||(l.realOptions.generateStyles=c.generatePolygonStyles),l.layers={};for(var s=0,f=Object.keys(null!==(r=l.realOptions.generateStyles(l.realOptions))&&void 0!==r?r:{});s<f.length;s++){var h=f[s];"main"!==h&&(l.layers[h]=new(e.bind.apply(e,i([void 0],a))))}return l.setStyle({}),l}return a(r,t),r.prototype.onAdd=function(e){t.prototype.onAdd.call(this,e);for(var n=0,r=Object.keys(this.layers);n<r.length;n++){var a=r[n];e.addLayer(this.layers[a])}return this},r.prototype.onRemove=function(e){for(var n=0,r=Object.keys(this.layers);n<r.length;n++){var a=r[n];e.removeLayer(this.layers[a])}return t.prototype.onRemove.call(this,e),this},r.prototype.setStyle=function(e){var n,r,a;Object.assign(this.realOptions,e);var i=null!==(a=null===(r=(n=this.realOptions).generateStyles)||void 0===r?void 0:r.call(n,this.realOptions))&&void 0!==a?a:{main:o({},this.realOptions)};i.main.pane&&s.setLayerPane(this,i.main.pane),t.prototype.setStyle.call(this,i.main);for(var l=0,c=Object.keys(this.layers);l<c.length;l++){var u=c[l];i[u].pane&&s.setLayerPane(this.layers[u],i[u].pane),this.layers[u].setStyle(i[u])}return this},r}(e),l=function(e){r.prototype[e]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var a=Object.getPrototypeOf(r.prototype)[e].apply(this,t),o=0,i=Object.keys(this.layers);o<i.length;o++){var l=i[o];this.layers[l][e].apply(this.layers[l],t)}return a}},f=0,h=i(["redraw"],t);f<h.length;f++)l(h[f]);return r}t.createHighlightableLayerClass=f,t.HighlightableCircle=f(l.Circle,["setRadius","setLatLng"]),t.HighlightableCircleMarker=f(l.CircleMarker,["setRadius","setLatLng"]),t.HighlightablePolygon=f(l.Polygon,["setLatLngs"]),t.HighlightablePolyline=f(l.Polyline,["setLatLngs"],{generateStyles:c.generatePolylineStyles}),t.HighlightableRectangle=f(l.Rectangle,["setBounds"])},695:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setLayerPane=void 0;var r=n(453);n(477),r.Map.addInitHook((function(){this.createPane("lhl-shadow"),this.createPane("lhl-raised"),this.createPane("lhl-raised-shadow"),this.createPane("lhl-almost-over")})),t.setLayerPane=function(e,t){e.options.pane!=t&&(e.options.pane=t,e._map&&e._map.removeLayer(e).addLayer(e))}},299:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.generatePolylineStyles=t.generatePolygonStyles=void 0;var a=n(593);t.generatePolygonStyles=function(e){var t,n,o=a.getBrightness(e.color.replace(/^#/,""))>.7,i=null!==(t=e.outlineColor)&&void 0!==t?t:o?"#000000":"#ffffff",l=null==e.color&&null==e.outlineWeight&&o?Math.round(e.weight/1.6):e.weight,s=null!==(n=e.outlineWeight)&&void 0!==n?n:2*l;return{border:r(r({},e),{color:i,fillColor:i,weight:s,pane:e.raised?"lhl-raised-shadow":"lhl-shadow",fill:e.outlineFill,interactive:!1}),main:r(r({},e),{weight:l,pane:e.raised?"lhl-raised":"overlayPane"})}},t.generatePolylineStyles=function(e){var t,n,o=a.getBrightness(e.color.replace(/^#/,""))>.7,i=null!==(t=e.outlineColor)&&void 0!==t?t:o?"#000000":"#ffffff",l=null==e.color&&null==e.outlineWeight&&o?Math.round(e.weight/1.6):e.weight,s=null!==(n=e.outlineWeight)&&void 0!==n?n:2*l;return{line:r(r({},e),{weight:l,pane:e.raised?"lhl-raised":"overlayPane",interactive:!1}),border:r(r({},e),{color:i,fillColor:i,weight:s,pane:e.raised?"lhl-raised-shadow":"lhl-shadow",interactive:!1}),main:{opacity:0,weight:Math.max(20,s,l),pane:"lhl-almost-over"}}}},593:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.clone=t.getBrightness=void 0,t.getBrightness=function(e){var t=parseInt(e.substr(0,2),16)/255,n=parseInt(e.substr(2,2),16)/255,r=parseInt(e.substr(4,2),16)/255;return Math.sqrt(.241*t*t+.691*n*n+.068*r*r)},t.clone=function(e){return Object.assign(Object.create(Object.getPrototypeOf(e)),e)}},453:t=>{t.exports=e}},n={};function r(e){if(n[e])return n[e].exports;var a=n[e]={id:e,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}return r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(607)})()}));
//# sourceMappingURL=L.HighlightableLayers.js.map