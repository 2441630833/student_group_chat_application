(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1b30":function(e,t,n){"use strict";n.r(t);var i=n("78ec"),o=n("b0a7");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("f555");var r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"7d873e0e",null,!1,i["a"],void 0);t["default"]=s.exports},"1de5":function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},2002:function(e,t,n){e.exports=n.p+"static/img/user.15db242a.png"},"24fb":function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"===typeof btoa){var o=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}(i),a=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"===typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(o[r]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);i&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},"2bc3":function(e,t,n){var i=n("b062");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("884fc914",i,!0,{sourceMap:!1,shadowMode:!1})},"4f06":function(e,t,n){"use strict";function i(e,t){for(var n=[],i={},o=0;o<t.length;o++){var a=t[o],r=a[0],s=a[1],u=a[2],c=a[3],d={id:e+":"+o,css:s,media:u,sourceMap:c};i[r]?i[r].parts.push(d):n.push(i[r]={id:r,parts:[d]})}return n}n.r(t),n.d(t,"default",(function(){return g}));var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},r=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,d=function(){},l=null,f="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(e,t,n,o){c=n,l=o||{};var r=i(e,t);return p(r),function(t){for(var n=[],o=0;o<r.length;o++){var s=r[o],u=a[s.id];u.refs--,n.push(u)}t?(r=i(e,t),p(r)):r=[];for(o=0;o<n.length;o++){u=n[o];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}}function p(e){for(var t=0;t<e.length;t++){var n=e[t],i=a[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(h(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var r=[];for(o=0;o<n.parts.length;o++)r.push(h(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:r}}}}function v(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function h(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(c)return d;i.parentNode.removeChild(i)}if(f){var o=u++;i=s||(s=v()),t=b.bind(null,i,o,!1),n=b.bind(null,i,o,!0)}else i=v(),t=w.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,i){var o=n?"":A(i.css);if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var a=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function w(e,t){var n=A(t.css),i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),l.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var S=/%\?([+-]?\d+(\.\d+)?)\?%/g,y=/\.\?%PAGE\?%/g,k=/\?%PAGE\?%\[data-v-[a-z0-9]{8}\]/g,T=/uni-page-body\[data-v-[a-z0-9]{8}\]/g,x=/var\(--status-bar-height\)/gi,E=/var\(--window-top\)/gi,R=/var\(--window-bottom\)/gi,C=/var\(--window-left\)/gi,_=/var\(--window-right\)/gi;function A(e){var t=function(){var e="function"===typeof getApp&&getApp();return e&&e.$route&&e.$route.meta&&e.$route.meta.name||""}();if("undefined"!==typeof uni&&!uni.canIUse("css.var")){var n=function(){var e="function"===typeof getApp&&getApp();if(e&&e.$route&&e.$route.meta&&e.$route.meta.name)return{top:e.$route.meta.windowTop,bottom:e.$route.meta.isTabBar?50:0};return{top:0,bottom:0}}();e=e.replace(x,"0px").replace(E,n.top+"px").replace(R,n.bottom+"px").replace(C,"0px").replace(_,"0px")}return e.replace(k,t).replace(y,"").replace(T,"body."+t+" uni-page-body").replace(/\{[\s\S]+?\}|@media.+?\{/g,(function(e){return"undefined"===typeof uni?e:e.replace(S,(function(e,t){return uni.upx2px(t)+"px"}))}))}},"78ec":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"login-bg"},[i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("v-uni-view",{staticClass:"t-login"},[i("v-uni-form",{staticClass:"cl"},[i("v-uni-view",{staticClass:"t-a"},[i("v-uni-image",{attrs:{src:n("2002")}}),i("v-uni-input",{attrs:{type:"text",name:"user",placeholder:"please input username"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),i("v-uni-view",{staticClass:"t-a"},[i("v-uni-image",{attrs:{src:n("d3ac")}}),i("v-uni-input",{attrs:{type:"password",name:"code",placeholder:"please input passwords"},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}})],1),i("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login()}}},[e._v("Log in")]),i("v-uni-view",{staticClass:"t-c"},[i("v-uni-text",{staticClass:"t-c-txt",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.register.apply(void 0,arguments)}}},[e._v("Sign up")]),i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.forgotPwd()}}},[e._v("forget password")])],1)],1)],1)],1)},o=[]},b062:function(e,t,n){var i=n("24fb"),o=n("1de5"),a=n("cfef");t=i(!1);var r=o(a);t.push([e.i,".img-a[data-v-7d873e0e]{width:100%;position:absolute;bottom:0}.login-bg[data-v-7d873e0e]{height:100vh;background-image:url("+r+')\r\n\t/* background-image: url(https://s2.loli.net/2023/08/13/dh5bfBSjCPvnAcJ.png); */\r\n\t/* background-size: 60%;  */}.t-login[data-v-7d873e0e]{width:%?580?%;padding:%?55?%;margin:0 auto;font-size:%?28?%;background-color:#fff;border-radius:%?20?%;box-shadow:0 5px 7px 0 rgba(0,0,0,.15);z-index:9}.t-login uni-button[data-v-7d873e0e]{font-size:%?28?%;background:linear-gradient(90deg,#8b4513,sienna);color:#fff;height:%?90?%;line-height:%?90?%;border-radius:%?50?%}.t-login uni-input[data-v-7d873e0e]{padding:0 %?20?% 0 %?120?%;height:%?90?%;line-height:%?90?%;margin-bottom:%?50?%;background:#f6f6f6;border:1px solid #f6f6f6;font-size:%?28?%;border-radius:%?50?%}.t-login .t-a[data-v-7d873e0e]{position:relative}.t-login .t-a uni-image[data-v-7d873e0e]{width:%?40?%;height:%?40?%;position:absolute;left:%?40?%;top:%?28?%;padding-right:%?20?%}.t-login .t-b[data-v-7d873e0e]{text-align:left;font-size:%?46?%;color:#000;padding:%?300?% 0 %?120?% 0;font-weight:700}.t-login .t-d[data-v-7d873e0e]{text-align:center;color:#999;margin:%?80?% 0}.t-login .t-c[data-v-7d873e0e]{text-align:right;color:#666;margin:%?30?% %?30?% %?40?% 0}.t-login .t-c .t-c-txt[data-v-7d873e0e]{margin-right:%?300?%}.t-login .t-e[data-v-7d873e0e]{text-align:center;width:%?600?%;margin:%?40?% auto 0}.t-login .t-g[data-v-7d873e0e]{float:left;width:33.33%}.t-login .t-e uni-image[data-v-7d873e0e]{width:%?70?%;height:%?70?%}.t-login .t-f[data-v-7d873e0e]{text-align:center;margin:%?80?% 0 0 0;color:#999}.t-login .t-f uni-text[data-v-7d873e0e]{margin-left:%?20?%;color:#b9b9b9;font-size:%?27?%}.t-login .uni-input-placeholder[data-v-7d873e0e]{color:#aeaeae}.cl[data-v-7d873e0e]{zoom:1}.cl[data-v-7d873e0e]:after{clear:both;display:block;visibility:hidden;height:0;content:"\\20"}',""]),e.exports=t},b0a7:function(e,t,n){"use strict";n.r(t);var i=n("dcd8"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},cfef:function(e,t,n){e.exports=n.p+"static/img/background.a9828f87.png"},d3ac:function(e,t,n){e.exports=n.p+"static/img/pwd.2e77eac6.png"},dcd8:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("c4ef"),o={data:function(){return{user:"",pwd:"",users:[]}},onLoad:function(){var e=uni.getStorageSync("token"),t=uni.getStorageSync("refreshToken"),n=uni.getStorageSync("username"),i=uni.getStorageSync("img"),o=uni.getStorageSync("id");e&&n&&i&&o?this.verifyTokenWithServer(e,n,i,o):t&&this.refreshToken()},methods:{login:function(){var e=this;this.user?this.pwd?uni.request({url:i.BASE_URL+":"+i.SERVER_PORT+"/users/login",method:"POST",data:{username:this.user,password:this.pwd},success:function(t){t.data.token?(uni.setStorageSync("token",t.data.token),uni.setStorageSync("username",t.data.user.username),uni.setStorageSync("img",t.data.user.img),uni.setStorageSync("id",t.data.user.id),uni.setStorageSync("refreshToken",t.data.refreshToken),e.socket.connect(),uni.showToast({title:"login successfully!",icon:"none"}),uni.navigateTo({url:"../creation/roomList?name="+t.data.user.username+"&img="+t.data.user.img+"&id="+t.data.user.id})):uni.showToast({title:"login fail, please check your username and password",icon:"none",duration:1500})},fail:function(e){console.error(e),uni.showToast({title:"Unable to connect to server.",icon:"none",duration:1500})}}):uni.showToast({title:"please input passwords",icon:"none",duration:1500}):uni.showToast({title:"please input username",icon:"none",duration:1500})},forgotPwd:function(){uni.showToast({title:"please contact:longzezhu1@outlook.com",icon:"none",duration:1500})},register:function(){uni.navigateTo({url:"../register/register"})},verifyTokenWithServer:function(e,t,n,o){var a=this;uni.request({url:i.BASE_URL+":"+i.SERVER_PORT+"/verifyToken",method:"POST",header:{Authorization:"Bearer "+e},success:function(e){e.data.isValid?(a.socket.connect(),uni.navigateTo({url:"../creation/roomList?name="+t+"&img="+n+"&id="+o})):a.refreshToken()},fail:function(e){console.error(e),uni.showToast({title:"Error verifying token.",icon:"none",duration:1500})}})},refreshToken:function(){var e=this,t=uni.getStorageSync("refreshToken"),n=uni.getStorageSync("username"),o=uni.getStorageSync("img"),a=uni.getStorageSync("id");uni.request({url:i.BASE_URL+":"+i.SERVER_PORT+"/refreshToken",method:"POST",data:{refreshToken:t},success:function(t){t.data.accessToken?(uni.setStorageSync("token",t.data.accessToken),uni.request({url:i.BASE_URL+":"+i.SERVER_PORT+"/verifyToken",method:"POST",header:{Authorization:"Bearer "+t.data.accessToken},success:function(t){t.data.isValid&&(e.socket.connect(),uni.navigateTo({url:"../creation/roomList?name="+n+"&img="+o+"&id="+a}))}})):(uni.removeStorageSync("token"),uni.removeStorageSync("refreshToken"),uni.showToast({title:"Token is expired, please login again.",icon:"none",duration:1500}))},fail:function(e){console.error(e),uni.showToast({title:"Error refreshing token.",icon:"none",duration:1500})}})}}};t.default=o},f555:function(e,t,n){"use strict";var i=n("2bc3"),o=n.n(i);o.a}}]);