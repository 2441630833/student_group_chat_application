(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-upload-upload"],{"1da1":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}},n("d3b7")},"24fb":function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"===typeof btoa){var o=function(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}(r),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"===typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},"3c35":function(t,e,n){"use strict";n.r(e);var r=n("fd79c"),o=n("befe");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("4ba1");var a=n("f0c5"),u=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,"445170a3",null,!1,r["a"],void 0);e["default"]=u.exports},"4ba1":function(t,e,n){"use strict";var r=n("7419"),o=n.n(r);o.a},"4f06":function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],u=i[1],c=i[2],s=i[3],l={id:t+":"+o,css:u,media:c,sourceMap:s};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}n.r(e),n.d(e,"default",(function(){return p}));var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),u=null,c=0,s=!1,l=function(){},f=null,d="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,n,o){s=n,f=o||{};var a=r(t,e);return h(a),function(e){for(var n=[],o=0;o<a.length;o++){var u=a[o],c=i[u.id];c.refs--,n.push(c)}e?(a=r(t,e),h(a)):a=[];for(o=0;o<n.length;o++){c=n[o];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(g(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function g(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(s)return l;r.parentNode.removeChild(r)}if(d){var o=c++;r=u||(u=v()),e=m.bind(null,r,o,!1),n=m.bind(null,r,o,!0)}else r=v(),e=b.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,r){var o=n?"":I(r.css);if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function b(t,e){var n=I(e.css),r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),f.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var w=/%\?([+-]?\d+(\.\d+)?)\?%/g,x=/\.\?%PAGE\?%/g,A=/\?%PAGE\?%\[data-v-[a-z0-9]{8}\]/g,E=/uni-page-body\[data-v-[a-z0-9]{8}\]/g,L=/var\(--status-bar-height\)/gi,F=/var\(--window-top\)/gi,k=/var\(--window-bottom\)/gi,C=/var\(--window-left\)/gi,j=/var\(--window-right\)/gi;function I(t){var e=function(){var t="function"===typeof getApp&&getApp();return t&&t.$route&&t.$route.meta&&t.$route.meta.name||""}();if("undefined"!==typeof uni&&!uni.canIUse("css.var")){var n=function(){var t="function"===typeof getApp&&getApp();if(t&&t.$route&&t.$route.meta&&t.$route.meta.name)return{top:t.$route.meta.windowTop,bottom:t.$route.meta.isTabBar?50:0};return{top:0,bottom:0}}();t=t.replace(L,"0px").replace(F,n.top+"px").replace(k,n.bottom+"px").replace(C,"0px").replace(j,"0px")}return t.replace(A,e).replace(x,"").replace(E,"body."+e+" uni-page-body").replace(/\{[\s\S]+?\}|@media.+?\{/g,(function(t){return"undefined"===typeof uni?t:t.replace(w,(function(t,e){return uni.upx2px(e)+"px"}))}))}},5312:function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7"),n("fb6a");var o=r(n("c7eb")),i=r(n("1da1")),a=n("c4ef"),u={data:function(){return{query:localStorage.getItem("userInput")||"",file:"",roomID:""}},onLoad:function(t){this.roomID=t.roomID},watch:{query:function(t){localStorage.setItem("userInput",t)}},methods:{backToIndex:function(){uni.reLaunch({url:"../chatroom/chatroom"})},chooseFile:function(){var t=this;uni.chooseFile({type:"file",success:function(){var e=(0,i.default)((0,o.default)().mark((function e(n){var r,i,a,u,c;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.tempFiles[0],e.next=3,fetch(r.path);case 3:return i=e.sent,e.next=6,i.blob();case 6:return a=e.sent,e.next=9,a.slice(0,5).arrayBuffer();case 9:u=e.sent,c=new TextDecoder("utf-8").decode(u),"%PDF-"===c?(t.file=r.path,uni.showToast({title:"File selected successfully",icon:"none",duration:2e3})):uni.showToast({title:"Only PDF files are allowed",icon:"none",duration:2e3});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fail:function(t){uni.showToast({title:"File selection failed",icon:"none",duration:2e3})}})},uploadFile:function(){var t=this;this.file&&uni.uploadFile({url:a.BASE_URL+":"+a.SERVER_PORT+"/file-upload",filePath:this.file,name:"file",formData:{query:this.query},success:function(e){var n=e.data;uni.showToast({title:"File uploaded successfully",icon:"none",duration:2e3});var r={roomID:t.roomID,messageContent:n,time:new Date,id:4};t.socket.emit("gptOutputText",r),uni.request({url:a.BASE_URL+":"+a.SERVER_PORT+"/groupchat",data:r,method:"POST",success:function(t){t.statusCode},fail:function(t){console.error("Failed to save chat data: "+t)}})},fail:function(t){uni.showToast({title:"File upload failed",icon:"none",duration:2e3})}})}}};e.default=u},7419:function(t,e,n){var r=n("8f6f");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("3320e088",r,!0,{sourceMap:!1,shadowMode:!1})},7588:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAuCAYAAAA2oQl1AAABm0lEQVRYR7XWO0oDQRjA8e+TRImF4AFMp2FdApqI2CgIWggeQc9gIdp5A7HxCmKt1kKwtNh0CxNYCxFCRLDYgBizuyOr7JLHvmbmmznA/JgX80fQM9A0m0sA3z3btn9CAqmdar2+OD8s33GAHc7hLfBx13GsF1IoRCrD8iMANKIFIOAVY9YpGZSE/G8ZnjFmXZJAaQgAtHzPPXAcZ6AMZSF9Fw+7XetL+TIURZQgEUQaEkWkIBlEGJJFhCAVpDCkihSCKJBciArJhCiRVIgaSYR0IFOQLmQM0onEkG4kgrBWazwBwvZEP7RG/xPVtghrper5/HViItZ3sRl9WqrI34pM05z1/LkPAFgYmZAj4Alj1jUFEp/RsrG2j8HMPSJUdGFxMxjG+p4f4IMubCxOdGJTFaQLS8wtHVhq11FjmQFJieWWKhWWC4XvigIrBFFghSFVTAhSwYQhWUwKksGkIVFMCRLBlKGiGAmUgx0xZt2SQWkYAjwz1t4ihRIxDjedTvuYHAqxldWNTQyCc+DwXioNLmzb/tQCJZXTL8IJez4aufulAAAAAElFTkSuQmCC"},"8f6f":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"/**\r\n * this uni-app's style variables setting\r\n *\r\n * \r\n * \r\n *\r\n */\r\n/* Colour setting */\r\n/* behaviour colour */\r\n/* word basic colour */\r\n/* backgroud colour */\r\n/*  */\r\n/* Font size setting */\r\n/* word size */\r\n/* image size */\r\n/* Border Radius */\r\n/* row spacing */\r\n/* column spacing*/\r\n/* Transparency */\r\n/* article scene */.status-bar[data-v-445170a3]{position:fixed;left:0;width:100%;height:%?88?%;padding-top:0;display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;z-index:998;color:#272832;-webkit-transition-property:all;transition-property:all;background:hsla(0,0%,100%,.96)}.status-bar .login-c[data-v-445170a3]{width:%?60?%;height:%?60?%;padding-top:%?22?%;padding-left:%?32?%}.content[data-v-445170a3]{padding:%?160?% %?28?% %?160?%}.login-back[data-v-445170a3]{width:%?20?%;height:%?34?%}.input[data-v-445170a3]{display:block;margin-left:auto;margin-right:auto;margin-top:%?54?%;padding:0 %?24?%;width:90%;height:%?150?%;background:#f2f2f2;border-radius:%?24?%;text-align:center;font-size:%?36?%;font-weight:600;color:#191d23}",""]),t.exports=e},b636:function(t,e,n){var r=n("e065");r("asyncIterator")},befe:function(t,e,n){"use strict";n.r(e);var r=n("5312"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},c7eb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),u=new C(r||[]);return i(a,"_invoke",{value:E(t,n,u)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=f;var p={};function h(){}function v(){}function g(){}var y={};l(y,u,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(j([])));b&&b!==n&&o.call(b,u)&&(y=b);var w=g.prototype=h.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){var n;i(this,"_invoke",{value:function(i,a){function u(){return new e((function(n,u){(function n(i,a,u,c){var s=d(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,r.default)(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)})(i,a,n,u)}))}return n=n?n.then(u,u):u()}})}function E(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return I()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=L(a,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=d(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=d(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function j(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=g,i(w,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:v,configurable:!0}),v.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(A.prototype),l(A.prototype,c,(function(){return this})),t.AsyncIterator=A,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new A(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),l(w,s,"Generator"),l(w,u,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=j,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t},n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=function(t){return t&&t.__esModule?t:{default:t}}(n("53ca"))},fd79c:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[r("v-uni-view",{staticClass:"status-bar"},[r("v-uni-navigator",{staticClass:"login-c",attrs:{"open-type":"navigateBack","hover-class":"none"}},[r("v-uni-image",{staticClass:"login-back",attrs:{src:n("7588")}})],1)],1),r("v-uni-view",{staticClass:"content"},[r("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseFile.apply(void 0,arguments)}}},[t._v("Choose File")]),r("v-uni-button",{attrs:{disabled:!t.file},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadFile.apply(void 0,arguments)}}},[t._v("Upload File")]),r("v-uni-textarea",{staticClass:"input",attrs:{maxlength:"-1",type:"text",placeholder:"Enter your prompt here,for example: provide two questions based on this document"},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1)],1)},o=[]}}]);