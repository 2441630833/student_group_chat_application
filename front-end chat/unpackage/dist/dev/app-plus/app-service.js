(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/main.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 106));\nvar _uniSocketIo = _interopRequireDefault(__webpack_require__(/*! ./common/uni-socket.io.js */ 109));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 111));\nvar _config = __webpack_require__(/*! ./config.js */ 15);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_vue.default.prototype.socket = (0, _uniSocketIo.default)(_config.BASE_URL + ':8082', {\n  query: {},\n  transports: ['websocket', 'polling'],\n  timeout: 5000\n});\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwicHJvdG90eXBlIiwic29ja2V0IiwiaW8iLCJCQVNFX1VSTCIsInF1ZXJ5IiwidHJhbnNwb3J0cyIsInRpbWVvdXQiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUFtQjtBQUNuQjtBQUVBO0FBQ0E7QUFBdUM7QUFBQTtBQUN2Q0EsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBQ2hDRixZQUFHLENBQUNHLFNBQVMsQ0FBQ0MsTUFBTSxHQUFFLElBQUFDLG9CQUFFLEVBQUNDLGdCQUFRLEdBQUcsT0FBTyxFQUUzQztFQUNFQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ1RDLFVBQVUsRUFBRSxDQUFFLFdBQVcsRUFBRSxTQUFTLENBQUU7RUFDdENDLE9BQU8sRUFBRTtBQUNYLENBQUMsQ0FDQTtBQUNEQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBQ2xCLElBQU1DLEdBQUcsR0FBRyxJQUFJWixZQUFHLG1CQUNaVSxZQUFHLEVBQ1I7QUFDRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5pbXBvcnQgaW8gZnJvbSAnLi9jb21tb24vdW5pLXNvY2tldC5pby5qcydcclxuXHJcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gJy4vY29uZmlnLmpzJztcclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuVnVlLnByb3RvdHlwZS5zb2NrZXQ9IGlvKEJBU0VfVVJMICsgJzo4MDgyJ1xyXG4sXHJcbntcclxuICBxdWVyeToge30sXHJcbiAgdHJhbnNwb3J0czogWyAnd2Vic29ja2V0JywgJ3BvbGxpbmcnIF0sXHJcbiAgdGltZW91dDogNTAwMCxcclxufSxcclxuKVxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!***********************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages.json ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});
__definePage('pages/chatroom/chatroom', function () {
  return Vue.extend(__webpack_require__(/*! pages/chatroom/chatroom.vue?mpType=page */ 17).default);
});
__definePage('pages/upload/upload', function () {
  return Vue.extend(__webpack_require__(/*! pages/upload/upload.vue?mpType=page */ 61).default);
});
__definePage('pages/register/register', function () {
  return Vue.extend(__webpack_require__(/*! pages/register/register.vue?mpType=page */ 69).default);
});
__definePage('pages/creation/roomList', function () {
  return Vue.extend(__webpack_require__(/*! pages/creation/roomList.vue?mpType=page */ 77).default);
});
__definePage('pages/creation/createChat', function () {
  return Vue.extend(__webpack_require__(/*! pages/creation/createChat.vue?mpType=page */ 88).default);
});

/***/ }),
/* 7 */
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/index/index.vue?mpType=page ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 12);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!****************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "login-bg"), attrs: { _i: 0 } },
    [
      _c("br"),
      _c("br"),
      _c("br"),
      _c("br"),
      _c("br"),
      _c("br"),
      _c("br"),
      _c(
        "view",
        { staticClass: _vm._$s(8, "sc", "t-login"), attrs: { _i: 8 } },
        [
          _c(
            "form",
            { staticClass: _vm._$s(9, "sc", "cl"), attrs: { _i: 9 } },
            [
              _c(
                "view",
                { staticClass: _vm._$s(10, "sc", "t-a"), attrs: { _i: 10 } },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(
                        11,
                        "a-src",
                        __webpack_require__(/*! ../../static/login/user.png */ 10)
                      ),
                      _i: 11,
                    },
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user,
                        expression: "user",
                      },
                    ],
                    attrs: { _i: 12 },
                    domProps: { value: _vm._$s(12, "v-model", _vm.user) },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.user = $event.target.value
                      },
                    },
                  }),
                ]
              ),
              _c(
                "view",
                { staticClass: _vm._$s(13, "sc", "t-a"), attrs: { _i: 13 } },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(
                        14,
                        "a-src",
                        __webpack_require__(/*! ../../static/login/pwd.png */ 11)
                      ),
                      _i: 14,
                    },
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.pwd,
                        expression: "pwd",
                      },
                    ],
                    attrs: { _i: 15 },
                    domProps: { value: _vm._$s(15, "v-model", _vm.pwd) },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.pwd = $event.target.value
                      },
                    },
                  }),
                ]
              ),
              _c("button", {
                attrs: { _i: 16 },
                on: {
                  click: function ($event) {
                    return _vm.login()
                  },
                },
              }),
              _c(
                "view",
                { staticClass: _vm._$s(17, "sc", "t-c"), attrs: { _i: 17 } },
                [
                  _c("text", {
                    staticClass: _vm._$s(18, "sc", "t-c-txt"),
                    attrs: { _i: 18 },
                    on: { click: _vm.register },
                  }),
                  _c("text", {
                    attrs: { _i: 19 },
                    on: {
                      click: function ($event) {
                        return _vm.forgotPwd()
                      },
                    },
                  }),
                ]
              ),
            ]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/static/login/user.png ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/login/user.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvbG9naW4vdXNlci5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/static/login/pwd.png ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/login/pwd.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvbG9naW4vcHdkLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 13);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW90QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _config = __webpack_require__(/*! ../../config.js */ 15);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      user: '',\n      //username\n      pwd: '',\n      //password\n      users: []\n    };\n  },\n  onLoad: function onLoad() {\n    var token = uni.getStorageSync('token');\n    var refreshToken = uni.getStorageSync('refreshToken');\n    var username = uni.getStorageSync('username');\n    var img = uni.getStorageSync('img');\n    var id = uni.getStorageSync('id');\n    if (token && username && img && id) {\n      this.verifyTokenWithServer(token, username, img, id);\n    } else if (refreshToken) {\n      // If there's no valid token but a refresh token exists\n      this.refreshToken(); // Try to refresh the token\n    }\n    // else {\n    // \t// If any of the required data is missing, prompt user to login\n    // \tuni.showToast({ title: 'Please login.', icon: 'none' , duration: 1500});\n    // }\n  },\n\n  methods: {\n    login: function login() {\n      var _this = this;\n      // uni.removeStorageSync('token'); \n      if (!this.user) {\n        uni.showToast({\n          title: 'please input username',\n          icon: 'none',\n          duration: 1500\n        });\n        return;\n      }\n      if (!this.pwd) {\n        uni.showToast({\n          title: 'please input passwords',\n          icon: 'none',\n          duration: 1500\n        });\n        return;\n      }\n      // JWT\n      uni.request({\n        url: _config.BASE_URL + ':' + _config.SERVER_PORT + '/users/login',\n        // changed endpoint to login\n        method: 'POST',\n        data: {\n          username: this.user,\n          password: this.pwd\n        },\n        success: function success(response) {\n          if (response.data.token) {\n            // Store the token somewhere in your application for further requests\n            uni.setStorageSync('token', response.data.token);\n            uni.setStorageSync('username', response.data.user.username);\n            uni.setStorageSync('img', response.data.user.img);\n            uni.setStorageSync('id', response.data.user.id);\n            uni.setStorageSync('refreshToken', response.data.refreshToken);\n            _this.socket.connect();\n            uni.showToast({\n              title: 'login successfully!',\n              icon: 'none'\n            });\n            uni.navigateTo({\n              url: '../creation/roomList?name=' + response.data.user.username + '&img=' + response.data.user.img + '&id=' + response.data.user.id\n            });\n          } else {\n            uni.showToast({\n              title: 'login fail, please check your username and password',\n              icon: 'none',\n              duration: 1500\n            });\n          }\n        },\n        fail: function fail(error) {\n          __f__(\"error\", error, \" at pages/index/index.vue:86\");\n          uni.showToast({\n            title: 'Unable to connect to server.',\n            icon: 'none',\n            duration: 1500\n          });\n        }\n      });\n    },\n    //forget password\n    forgotPwd: function forgotPwd() {\n      uni.showToast({\n        title: 'please contact:longzezhu1@outlook.com',\n        icon: 'none',\n        duration: 1500\n      });\n    },\n    //register\n    register: function register() {\n      uni.navigateTo({\n        url: '../register/register'\n      });\n    },\n    verifyTokenWithServer: function verifyTokenWithServer(token, username, img, id) {\n      var _this2 = this;\n      uni.request({\n        url: _config.BASE_URL + ':' + _config.SERVER_PORT + '/verifyToken',\n        method: 'POST',\n        header: {\n          'Authorization': 'Bearer ' + token\n        },\n        success: function success(response) {\n          if (response.data.isValid) {\n            _this2.socket.connect();\n            // Token is valid, navigate the user to the main content or dashboard\n            uni.navigateTo({\n              url: '../creation/roomList?name=' + username + '&img=' + img + '&id=' + id\n            });\n          } else {\n            // Token is invalid or expired, attempt to refresh the token\n            _this2.refreshToken();\n          }\n        },\n        fail: function fail(error) {\n          __f__(\"error\", error, \" at pages/index/index.vue:120\");\n          uni.showToast({\n            title: 'Error verifying token.',\n            icon: 'none',\n            duration: 1500\n          });\n        }\n      });\n    },\n    refreshToken: function refreshToken() {\n      var _this3 = this;\n      var refreshToken = uni.getStorageSync('refreshToken');\n      var username = uni.getStorageSync('username');\n      var img = uni.getStorageSync('img');\n      var id = uni.getStorageSync('id');\n      uni.request({\n        url: _config.BASE_URL + ':' + _config.SERVER_PORT + '/refreshToken',\n        method: 'POST',\n        data: {\n          refreshToken: refreshToken\n        },\n        success: function success(response) {\n          if (response.data.accessToken) {\n            // Store the new access token\n            uni.setStorageSync('token', response.data.accessToken);\n            // console.log(response.data.accessToken);\n            // console.log(response.data.accessToken);\n            // Attempt to verify the new token\n            uni.request({\n              url: _config.BASE_URL + ':' + _config.SERVER_PORT + '/verifyToken',\n              method: 'POST',\n              header: {\n                'Authorization': 'Bearer ' + response.data.accessToken\n              },\n              success: function success(response) {\n                if (response.data.isValid) {\n                  _this3.socket.connect();\n                  // Token is valid, navigate the user to the main content or dashboard\n                  uni.navigateTo({\n                    url: '../creation/roomList?name=' + username + '&img=' + img + '&id=' + id\n                  });\n                }\n              }\n            });\n          } else {\n            // If refreshing was not successful, prompt the user to login again\n            uni.removeStorageSync('token');\n            uni.removeStorageSync('refreshToken');\n            uni.showToast({\n              title: 'Token is expired, please login again.',\n              icon: 'none',\n              duration: 1500\n            });\n          }\n        },\n        fail: function fail(error) {\n          __f__(\"error\", error, \" at pages/index/index.vue:166\");\n          uni.showToast({\n            title: 'Error refreshing token.',\n            icon: 'none',\n            duration: 1500\n          });\n        }\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ1c2VyIiwicHdkIiwidXNlcnMiLCJvbkxvYWQiLCJtZXRob2RzIiwibG9naW4iLCJ1bmkiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInVybCIsIm1ldGhvZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzdWNjZXNzIiwiZmFpbCIsImZvcmdvdFB3ZCIsInJlZ2lzdGVyIiwidmVyaWZ5VG9rZW5XaXRoU2VydmVyIiwiaGVhZGVyIiwicmVmcmVzaFRva2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0E7RUFDQUE7SUFDQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO01BQ0E7SUFDQTtNQUFBO01BQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0E7O0VBQ0FDO0lBQ0FDO01BQUE7TUFDQTtNQUNBO1FBQ0FDO1VBQUFDO1VBQUFDO1VBQUFDO1FBQUE7UUFDQTtNQUNBO01BQ0E7UUFDQUg7VUFBQUM7VUFBQUM7VUFBQUM7UUFBQTtRQUNBO01BQ0E7TUFDQTtNQUNBSDtRQUNBSTtRQUFBO1FBQ0FDO1FBQ0FaO1VBQ0FhO1VBQ0FDO1FBQ0E7UUFDQUM7VUFDQTtZQUNBO1lBQ0FSO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0E7WUFDQUE7Y0FBQUM7Y0FBQUM7WUFBQTtZQUNBRjtjQUNBSTtZQUNBO1VBQ0E7WUFDQUo7Y0FBQUM7Y0FBQUM7Y0FBQUM7WUFBQTtVQUNBO1FBQ0E7UUFDQU07VUFDQTtVQUNBVDtZQUFBQztZQUFBQztZQUFBQztVQUFBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQU87TUFDQVY7UUFBQUM7UUFBQUM7UUFBQUM7TUFBQTtJQUNBO0lBQ0E7SUFDQVE7TUFDQVg7UUFDQUk7TUFDQTtJQUNBO0lBQ0FRO01BQUE7TUFDQVo7UUFDQUk7UUFDQUM7UUFDQVE7VUFDQTtRQUNBO1FBQ0FMO1VBQ0E7WUFDQTtZQUNBO1lBQ0FSO2NBQ0FJO1lBQ0E7VUFDQTtZQUFBO1lBQ0E7VUFDQTtRQUNBO1FBQ0FLO1VBQ0E7VUFDQVQ7WUFBQUM7WUFBQUM7WUFBQUM7VUFBQTtRQUNBO01BQ0E7SUFDQTtJQUNBVztNQUFBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQWQ7UUFDQUk7UUFDQUM7UUFDQVo7VUFBQXFCO1FBQUE7UUFDQU47VUFDQTtZQUNBO1lBQ0FSO1lBQ0E7WUFDQTtZQUNBO1lBQ0FBO2NBQ0FJO2NBQ0FDO2NBQ0FRO2dCQUNBO2NBQ0E7Y0FDQUw7Z0JBQ0E7a0JBQ0E7a0JBQ0E7a0JBQ0FSO29CQUNBSTtrQkFDQTtnQkFDQTtjQUNBO1lBQ0E7VUFDQSxPQUNBO1lBQ0E7WUFDQUo7WUFDQUE7WUFDQUE7Y0FBQUM7Y0FBQUM7Y0FBQUM7WUFBQTtVQUNBO1FBQ0E7UUFDQU07VUFDQTtVQUNBVDtZQUFBQztZQUFBQztZQUFBQztVQUFBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwibG9naW4tYmdcIj5cclxuXHRcdDxiciAvPjxiciAvPjxiciAvPjxiciAvPjxiciAvPjxiciAvPjxiciAvPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0LWxvZ2luXCI+XHJcblx0XHRcdDxmb3JtIGNsYXNzPVwiY2xcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInQtYVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9sb2dpbi91c2VyLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlclwiIHBsYWNlaG9sZGVyPVwicGxlYXNlIGlucHV0IHVzZXJuYW1lXCIgdi1tb2RlbD1cInVzZXJcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInQtYVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9sb2dpbi9wd2QucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwiY29kZVwiIHBsYWNlaG9sZGVyPVwicGxlYXNlIGlucHV0IHBhc3N3b3Jkc1wiIHYtbW9kZWw9XCJwd2RcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8YnV0dG9uIEB0YXA9XCJsb2dpbigpXCI+TG9nIGluPC9idXR0b24+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0LWNcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidC1jLXR4dFwiIEB0YXA9XCJyZWdpc3RlclwiPlNpZ24gdXA8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBAdGFwPVwiZm9yZ290UHdkKClcIj5mb3JnZXQgcGFzc3dvcmQ8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBCQVNFX1VSTCwgU0VSVkVSX1BPUlQgfSBmcm9tICcuLi8uLi9jb25maWcuanMnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHVzZXI6ICcnLCAvL3VzZXJuYW1lXHJcblx0XHRcdHB3ZDogJycsLy9wYXNzd29yZFxyXG5cdFx0XHR1c2VyczogW10sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0Y29uc3QgdG9rZW4gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcblx0XHRjb25zdCByZWZyZXNoVG9rZW4gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3JlZnJlc2hUb2tlbicpO1xyXG5cdFx0Y29uc3QgdXNlcm5hbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJuYW1lJyk7XHJcblx0XHRjb25zdCBpbWcgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2ltZycpO1xyXG5cdFx0Y29uc3QgaWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2lkJyk7XHJcblx0XHRpZiAodG9rZW4gJiYgdXNlcm5hbWUgJiYgaW1nICYmIGlkKSB7XHJcblx0XHRcdHRoaXMudmVyaWZ5VG9rZW5XaXRoU2VydmVyKHRva2VuLCB1c2VybmFtZSwgaW1nLCBpZCk7XHJcblx0XHR9IGVsc2UgaWYgKHJlZnJlc2hUb2tlbikgeyAvLyBJZiB0aGVyZSdzIG5vIHZhbGlkIHRva2VuIGJ1dCBhIHJlZnJlc2ggdG9rZW4gZXhpc3RzXHJcblx0XHRcdHRoaXMucmVmcmVzaFRva2VuKCk7ICAvLyBUcnkgdG8gcmVmcmVzaCB0aGUgdG9rZW5cclxuXHRcdH1cclxuXHRcdC8vIGVsc2Uge1xyXG5cdFx0Ly8gXHQvLyBJZiBhbnkgb2YgdGhlIHJlcXVpcmVkIGRhdGEgaXMgbWlzc2luZywgcHJvbXB0IHVzZXIgdG8gbG9naW5cclxuXHRcdC8vIFx0dW5pLnNob3dUb2FzdCh7IHRpdGxlOiAnUGxlYXNlIGxvZ2luLicsIGljb246ICdub25lJyAsIGR1cmF0aW9uOiAxNTAwfSk7XHJcblx0XHQvLyB9XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRsb2dpbigpIHtcclxuXHRcdFx0Ly8gdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCd0b2tlbicpOyBcclxuXHRcdFx0aWYgKCF0aGlzLnVzZXIpIHtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICdwbGVhc2UgaW5wdXQgdXNlcm5hbWUnLCBpY29uOiAnbm9uZScsIGR1cmF0aW9uOiAxNTAwIH0pO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIXRoaXMucHdkKSB7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7IHRpdGxlOiAncGxlYXNlIGlucHV0IHBhc3N3b3JkcycsIGljb246ICdub25lJyAsIGR1cmF0aW9uOiAxNTAwfSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIEpXVFxyXG5cdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0dXJsOiBCQVNFX1VSTCArICc6JyArIFNFUlZFUl9QT1JUICsgJy91c2Vycy9sb2dpbicsIC8vIGNoYW5nZWQgZW5kcG9pbnQgdG8gbG9naW5cclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHR1c2VybmFtZTogdGhpcy51c2VyLFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IHRoaXMucHdkXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXNwb25zZS5kYXRhLnRva2VuKSB7XHJcblx0XHRcdFx0XHRcdC8vIFN0b3JlIHRoZSB0b2tlbiBzb21ld2hlcmUgaW4geW91ciBhcHBsaWNhdGlvbiBmb3IgZnVydGhlciByZXF1ZXN0c1xyXG5cdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywgcmVzcG9uc2UuZGF0YS50b2tlbik7XHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygndXNlcm5hbWUnLCByZXNwb25zZS5kYXRhLnVzZXIudXNlcm5hbWUpO1xyXG5cdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2ltZycsIHJlc3BvbnNlLmRhdGEudXNlci5pbWcpO1xyXG5cdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2lkJywgcmVzcG9uc2UuZGF0YS51c2VyLmlkKTtcclxuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdyZWZyZXNoVG9rZW4nLCByZXNwb25zZS5kYXRhLnJlZnJlc2hUb2tlbik7XHJcblx0XHRcdFx0XHRcdHRoaXMuc29ja2V0LmNvbm5lY3QoKTtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7IHRpdGxlOiAnbG9naW4gc3VjY2Vzc2Z1bGx5IScsIGljb246ICdub25lJyB9KTtcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJy4uL2NyZWF0aW9uL3Jvb21MaXN0P25hbWU9JyArIHJlc3BvbnNlLmRhdGEudXNlci51c2VybmFtZSArICcmaW1nPScgKyByZXNwb25zZS5kYXRhLnVzZXIuaW1nICsgJyZpZD0nICsgcmVzcG9uc2UuZGF0YS51c2VyLmlkLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ2xvZ2luIGZhaWwsIHBsZWFzZSBjaGVjayB5b3VyIHVzZXJuYW1lIGFuZCBwYXNzd29yZCcsIGljb246ICdub25lJywgZHVyYXRpb246IDE1MDAgfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiAoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7IHRpdGxlOiAnVW5hYmxlIHRvIGNvbm5lY3QgdG8gc2VydmVyLicsIGljb246ICdub25lJywgZHVyYXRpb246IDE1MDAgfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHQvL2ZvcmdldCBwYXNzd29yZFxyXG5cdFx0Zm9yZ290UHdkKCkge1xyXG5cdFx0XHR1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICdwbGVhc2UgY29udGFjdDpsb25nemV6aHUxQG91dGxvb2suY29tJywgaWNvbjogJ25vbmUnLCBkdXJhdGlvbjogMTUwMCB9KTtcclxuXHRcdH0sXHJcblx0XHQvL3JlZ2lzdGVyXHJcblx0XHRyZWdpc3RlcigpIHtcclxuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdHVybDogJy4uL3JlZ2lzdGVyL3JlZ2lzdGVyJyxcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0dmVyaWZ5VG9rZW5XaXRoU2VydmVyKHRva2VuLCB1c2VybmFtZSwgaW1nLCBpZCkge1xyXG5cdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0dXJsOiBCQVNFX1VSTCArICc6JyArIFNFUlZFUl9QT1JUICsgJy92ZXJpZnlUb2tlbicsXHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0aGVhZGVyOiB7XHJcblx0XHRcdFx0XHQnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXNwb25zZS5kYXRhLmlzVmFsaWQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zb2NrZXQuY29ubmVjdCgpO1xyXG5cdFx0XHRcdFx0XHQvLyBUb2tlbiBpcyB2YWxpZCwgbmF2aWdhdGUgdGhlIHVzZXIgdG8gdGhlIG1haW4gY29udGVudCBvciBkYXNoYm9hcmRcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJy4uL2NyZWF0aW9uL3Jvb21MaXN0P25hbWU9JyArIHVzZXJuYW1lICsgJyZpbWc9JyArIGltZyArICcmaWQ9JyArIGlkLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7Ly8gVG9rZW4gaXMgaW52YWxpZCBvciBleHBpcmVkLCBhdHRlbXB0IHRvIHJlZnJlc2ggdGhlIHRva2VuXHJcblx0XHRcdFx0XHRcdHRoaXMucmVmcmVzaFRva2VuKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiAoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7IHRpdGxlOiAnRXJyb3IgdmVyaWZ5aW5nIHRva2VuLicsIGljb246ICdub25lJyAsIGR1cmF0aW9uOiAxNTAwfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRyZWZyZXNoVG9rZW4oKSB7XHJcblx0XHRcdGNvbnN0IHJlZnJlc2hUb2tlbiA9IHVuaS5nZXRTdG9yYWdlU3luYygncmVmcmVzaFRva2VuJyk7XHJcblx0XHRcdGNvbnN0IHVzZXJuYW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VybmFtZScpO1xyXG5cdFx0XHRjb25zdCBpbWcgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2ltZycpO1xyXG5cdFx0XHRjb25zdCBpZCA9IHVuaS5nZXRTdG9yYWdlU3luYygnaWQnKTtcclxuXHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogQkFTRV9VUkwgKyAnOicgKyBTRVJWRVJfUE9SVCArICcvcmVmcmVzaFRva2VuJyxcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRkYXRhOiB7IHJlZnJlc2hUb2tlbjogcmVmcmVzaFRva2VuIH0sXHJcblx0XHRcdFx0c3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UuZGF0YS5hY2Nlc3NUb2tlbikge1xyXG5cdFx0XHRcdFx0XHQvLyBTdG9yZSB0aGUgbmV3IGFjY2VzcyB0b2tlblxyXG5cdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywgcmVzcG9uc2UuZGF0YS5hY2Nlc3NUb2tlbik7XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuYWNjZXNzVG9rZW4pO1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmFjY2Vzc1Rva2VuKTtcclxuXHRcdFx0XHRcdFx0Ly8gQXR0ZW1wdCB0byB2ZXJpZnkgdGhlIG5ldyB0b2tlblxyXG5cdFx0XHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiBCQVNFX1VSTCArICc6JyArIFNFUlZFUl9QT1JUICsgJy92ZXJpZnlUb2tlbicsXHJcblx0XHRcdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyOiB7XHJcblx0XHRcdFx0XHRcdFx0XHQnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHJlc3BvbnNlLmRhdGEuYWNjZXNzVG9rZW5cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3BvbnNlLmRhdGEuaXNWYWxpZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNvY2tldC5jb25uZWN0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFRva2VuIGlzIHZhbGlkLCBuYXZpZ2F0ZSB0aGUgdXNlciB0byB0aGUgbWFpbiBjb250ZW50IG9yIGRhc2hib2FyZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vY3JlYXRpb24vcm9vbUxpc3Q/bmFtZT0nICsgdXNlcm5hbWUgKyAnJmltZz0nICsgaW1nICsgJyZpZD0nICsgaWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vIElmIHJlZnJlc2hpbmcgd2FzIG5vdCBzdWNjZXNzZnVsLCBwcm9tcHQgdGhlIHVzZXIgdG8gbG9naW4gYWdhaW5cclxuXHRcdFx0XHRcdFx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG5cdFx0XHRcdFx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ3JlZnJlc2hUb2tlbicpO1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICdUb2tlbiBpcyBleHBpcmVkLCBwbGVhc2UgbG9naW4gYWdhaW4uJywgaWNvbjogJ25vbmUnICwgZHVyYXRpb246IDE1MDB9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICdFcnJvciByZWZyZXNoaW5nIHRva2VuLicsIGljb246ICdub25lJyAsIGR1cmF0aW9uOiAxNTAwfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG4uaW1nLWEge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDA7XHJcbn1cclxuXHJcbi5sb2dpbi1iZyB7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vc3RhdGljL2JhY2tncm91bmQucG5nKTtcclxuXHQvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMi5sb2xpLm5ldC8yMDIzLzA4LzEzL2RoNWJmQlNqQ1B2bkFjSi5wbmcpOyAqL1xyXG5cdC8qIGJhY2tncm91bmQtc2l6ZTogNjAlOyAgKi9cclxufVxyXG5cclxuLnQtbG9naW4ge1xyXG5cdHdpZHRoOiA1ODBycHg7XHJcblx0cGFkZGluZzogNTVycHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdGJveC1zaGFkb3c6IDAgNXB4IDdweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0ei1pbmRleDogOTtcclxufVxyXG5cclxuLnQtbG9naW4gYnV0dG9uIHtcclxuXHRmb250LXNpemU6IDI4cnB4O1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzhCNDUxMywgI0EwNTIyRCk7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0aGVpZ2h0OiA5MHJweDtcclxuXHRsaW5lLWhlaWdodDogOTBycHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTBycHg7XHJcbn1cclxuXHJcbi50LWxvZ2luIGlucHV0IHtcclxuXHRwYWRkaW5nOiAwIDIwcnB4IDAgMTIwcnB4O1xyXG5cdGhlaWdodDogOTBycHg7XHJcblx0bGluZS1oZWlnaHQ6IDkwcnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDUwcnB4O1xyXG5cdGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y2ZjZmNjtcclxuXHRmb250LXNpemU6IDI4cnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwcnB4O1xyXG59XHJcblxyXG4udC1sb2dpbiAudC1hIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50LWxvZ2luIC50LWEgaW1hZ2Uge1xyXG5cdHdpZHRoOiA0MHJweDtcclxuXHRoZWlnaHQ6IDQwcnB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiA0MHJweDtcclxuXHR0b3A6IDI4cnB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDIwcnB4O1xyXG59XHJcblxyXG4udC1sb2dpbiAudC1iIHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGZvbnQtc2l6ZTogNDZycHg7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0cGFkZGluZzogMzAwcnB4IDAgMTIwcnB4IDA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50LWxvZ2luIC50LWQge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogIzk5OTtcclxuXHRtYXJnaW46IDgwcnB4IDA7XHJcbn1cclxuXHJcbi50LWxvZ2luIC50LWMge1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdGNvbG9yOiAjNjY2NjY2O1xyXG5cdG1hcmdpbjogMzBycHggMzBycHggNDBycHggMDtcclxufVxyXG5cclxuLnQtbG9naW4gLnQtYyAudC1jLXR4dCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAzMDBycHg7XHJcbn1cclxuXHJcbi50LWxvZ2luIC50LWUge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogNjAwcnB4O1xyXG5cdG1hcmdpbjogNDBycHggYXV0byAwO1xyXG59XHJcblxyXG4udC1sb2dpbiAudC1nIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogMzMuMzMlO1xyXG59XHJcblxyXG4udC1sb2dpbiAudC1lIGltYWdlIHtcclxuXHR3aWR0aDogNzBycHg7XHJcblx0aGVpZ2h0OiA3MHJweDtcclxufVxyXG5cclxuLnQtbG9naW4gLnQtZiB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbjogODBycHggMCAwIDA7XHJcblx0Y29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi50LWxvZ2luIC50LWYgdGV4dCB7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdGNvbG9yOiAjYjliOWI5O1xyXG5cdGZvbnQtc2l6ZTogMjdycHg7XHJcbn1cclxuXHJcbi50LWxvZ2luIC51bmktaW5wdXQtcGxhY2Vob2xkZXIge1xyXG5cdGNvbG9yOiAjYWVhZWFlO1xyXG59XHJcblxyXG4uY2wge1xyXG5cdHpvb206IDE7XHJcbn1cclxuXHJcbi5jbDphZnRlciB7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdGhlaWdodDogMDtcclxuXHRjb250ZW50OiAnXFwyMCc7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 15 */
/*!**********************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/config.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SERVER_PORT = exports.BASE_URL = void 0;\n// config.js\n\n// export const BASE_URL = 'http://129.12.211.74';\nvar BASE_URL = 'http://129.12.44.199';\nexports.BASE_URL = BASE_URL;\nvar SERVER_PORT = '30000';\nexports.SERVER_PORT = SERVER_PORT;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29uZmlnLmpzIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiU0VSVkVSX1BPUlQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBO0FBQ08sSUFBTUEsUUFBUSxHQUFHLHNCQUFzQjtBQUFDO0FBQ3hDLElBQU1DLFdBQVcsR0FBRyxPQUFPO0FBQUMiLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25maWcuanNcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vMTI5LjEyLjIxMS43NCc7XHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vMTI5LjEyLjQ0LjE5OSc7XHJcbmV4cG9ydCBjb25zdCBTRVJWRVJfUE9SVCA9ICczMDAwMCc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 17 */
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/chatroom/chatroom.vue?mpType=page ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatroom_vue_vue_type_template_id_35315436_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatroom.vue?vue&type=template&id=35315436&mpType=page */ 18);\n/* harmony import */ var _chatroom_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatroom.vue?vue&type=script&lang=js&mpType=page */ 59);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chatroom_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chatroom_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chatroom_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chatroom_vue_vue_type_template_id_35315436_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chatroom_vue_vue_type_template_id_35315436_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _chatroom_vue_vue_type_template_id_35315436_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/chatroom/chatroom.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDdUU7QUFDTDs7O0FBR2xFO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NoYXRyb29tLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTMxNTQzNiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2hhdHJvb20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NoYXRyb29tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NoYXRyb29tL2NoYXRyb29tLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!**********************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/chatroom/chatroom.vue?vue&type=template&id=35315436&mpType=page ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chatroom_vue_vue_type_template_id_35315436_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chatroom.vue?vue&type=template&id=35315436&mpType=page */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chatroom_vue_vue_type_template_id_35315436_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chatroom_vue_vue_type_template_id_35315436_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chatroom_vue_vue_type_template_id_35315436_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chatroom_vue_vue_type_template_id_35315436_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/chatroom/chatroom.vue?vue&type=template&id=35315436&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 20)
        .default,
    uniPopupDialog:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue */ 39)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "status-bar"), attrs: { _i: 1 } },
        [
          _c(
            "navigator",
            {
              staticClass: _vm._$s(2, "sc", "login-c"),
              attrs: { _i: 2 },
              on: { click: _vm.quitRoom },
            },
            [
              _c("image", {
                staticClass: _vm._$s(3, "sc", "login-back"),
                attrs: {
                  src: _vm._$s(3, "a-src", __webpack_require__(/*! ../../static/back.png */ 55)),
                  _i: 3,
                },
              }),
            ]
          ),
          _c(
            "scroll-view",
            { staticClass: _vm._$s(4, "sc", "scrollv"), attrs: { _i: 4 } },
            [
              _c(
                "view",
                { staticClass: _vm._$s(5, "sc", "users"), attrs: { _i: 5 } },
                _vm._l(
                  _vm._$s(6, "f", { forItems: _vm.users }),
                  function (e, index, $20, $30) {
                    return _vm._$s("6-" + $30, "i", e.roomID == _vm.roomID)
                      ? _c(
                          "view",
                          {
                            key: _vm._$s(6, "f", {
                              forIndex: $20,
                              key: 6 + "-" + $30,
                            }),
                            staticClass: _vm._$s("6-" + $30, "sc", "user-l"),
                            attrs: { _i: "6-" + $30 },
                            on: {
                              click: function ($event) {
                                return _vm.singleChat(index)
                              },
                            },
                          },
                          [
                            _vm._$s("7-" + $30, "i", e.tip)
                              ? _c("view", {
                                  staticClass: _vm._$s("7-" + $30, "sc", "tip"),
                                  attrs: { _i: "7-" + $30 },
                                })
                              : _vm._e(),
                            _c("image", {
                              attrs: {
                                src: _vm._$s(
                                  "8-" + $30,
                                  "a-src",
                                  "../../static/images/" + e.img + ".png"
                                ),
                                _i: "8-" + $30,
                              },
                            }),
                          ]
                        )
                      : _vm._e()
                  }
                ),
                0
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          ref: "chatContainer",
          staticClass: _vm._$s(9, "sc", "main"),
          attrs: { _i: 9 },
        },
        _vm._l(
          _vm._$s(10, "f", { forItems: _vm.groupChatMessages }),
          function (e, index, $21, $31) {
            return _c(
              "view",
              { key: _vm._$s(10, "f", { forIndex: $21, key: index }) },
              [
                _vm._$s("11-" + $31, "i", e.id == 1 && e.senderID != _vm.id)
                  ? _c(
                      "view",
                      {
                        staticClass: _vm._$s("11-" + $31, "sc", "left msg"),
                        attrs: { _i: "11-" + $31 },
                      },
                      [
                        _c("image", {
                          attrs: {
                            src: _vm._$s(
                              "12-" + $31,
                              "a-src",
                              "../../static/images/" + e.img + ".png"
                            ),
                            _i: "12-" + $31,
                          },
                        }),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              "13-" + $31,
                              "sc",
                              "messageOverall"
                            ),
                            attrs: { _i: "13-" + $31 },
                          },
                          [
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "14-" + $31,
                                  "sc",
                                  "messageContent"
                                ),
                                attrs: { _i: "14-" + $31 },
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "14-" + $31,
                                    "t0-0",
                                    _vm._s(e.messageContent)
                                  )
                                ),
                              ]
                            ),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "15-" + $31,
                                  "sc",
                                  "messageTime"
                                ),
                                attrs: { _i: "15-" + $31 },
                              },
                              [
                                _vm._v(
                                  _vm._$s("15-" + $31, "t0-0", _vm._s(e.name)) +
                                    _vm._$s(
                                      "15-" + $31,
                                      "t0-1",
                                      _vm._s(_vm.timeProcess(e.time))
                                    )
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._$s("16-" + $31, "i", e.id == 2 || e.senderID == _vm.id)
                  ? _c(
                      "view",
                      {
                        staticClass: _vm._$s("16-" + $31, "sc", "right msg"),
                        attrs: { _i: "16-" + $31 },
                      },
                      [
                        _c("image", {
                          attrs: {
                            src: _vm._$s(
                              "17-" + $31,
                              "a-src",
                              "../../static/images/" + e.img + ".png"
                            ),
                            _i: "17-" + $31,
                          },
                        }),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              "18-" + $31,
                              "sc",
                              "messageOverall"
                            ),
                            attrs: { _i: "18-" + $31 },
                          },
                          [
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "19-" + $31,
                                  "sc",
                                  "messageContent"
                                ),
                                attrs: { _i: "19-" + $31 },
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "19-" + $31,
                                    "t0-0",
                                    _vm._s(e.messageContent)
                                  )
                                ),
                              ]
                            ),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "20-" + $31,
                                  "sc",
                                  "messageTime"
                                ),
                                attrs: { _i: "20-" + $31 },
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "20-" + $31,
                                    "t0-0",
                                    _vm._s(_vm.timeProcess(e.time))
                                  )
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._$s("21-" + $31, "i", e.id == 3)
                  ? _c(
                      "view",
                      {
                        staticClass: _vm._$s("21-" + $31, "sc", "center"),
                        attrs: { _i: "21-" + $31 },
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s("22-" + $31, "sc", "inner"),
                            attrs: { _i: "22-" + $31 },
                          },
                          [_vm._v(_vm._$s("22-" + $31, "t0-0", _vm._s(e.name)))]
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._$s("23-" + $31, "i", e.id == 4)
                  ? _c(
                      "view",
                      {
                        staticClass: _vm._$s("23-" + $31, "sc", "left msg"),
                        attrs: { _i: "23-" + $31 },
                      },
                      [
                        _c("image", {
                          attrs: {
                            src: _vm._$s(
                              "24-" + $31,
                              "a-src",
                              __webpack_require__(/*! ../../static/chatGPT.png */ 56)
                            ),
                            _i: "24-" + $31,
                          },
                        }),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              "25-" + $31,
                              "sc",
                              "messageOverall"
                            ),
                            attrs: { _i: "25-" + $31 },
                          },
                          [
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "26-" + $31,
                                  "sc",
                                  "messageContent"
                                ),
                                attrs: { _i: "26-" + $31 },
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "26-" + $31,
                                    "t0-0",
                                    _vm._s(e.messageContent)
                                  )
                                ),
                              ]
                            ),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "27-" + $31,
                                  "sc",
                                  "messageTime"
                                ),
                                attrs: { _i: "27-" + $31 },
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "27-" + $31,
                                    "t0-0",
                                    _vm._s(_vm.timeProcess(e.time))
                                  )
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    )
                  : _vm._e(),
              ]
            )
          }
        ),
        0
      ),
      _c(
        "view",
        { staticClass: _vm._$s(28, "sc", "send"), attrs: { _i: 28 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(29, "sc", "send-in"), attrs: { _i: 29 } },
            [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm._$s(30, "v-show", _vm.isShowEmoji),
                      expression: "_$s(30,'v-show',isShowEmoji)",
                    },
                  ],
                  staticClass: _vm._$s(30, "sc", "emoji-display"),
                  attrs: { _i: 30 },
                },
                [
                  _c(
                    "ul",
                    _vm._l(
                      _vm._$s(32, "f", { forItems: _vm.emojis }),
                      function (emoji, $12, $22, $32) {
                        return _c(
                          "li",
                          {
                            key: _vm._$s(32, "f", {
                              forIndex: $22,
                              key: 32 + "-" + $32,
                            }),
                            attrs: { _i: "32-" + $32 },
                            on: {
                              click: function ($event) {
                                return _vm.insertText(emoji)
                              },
                            },
                          },
                          [_vm._v(_vm._$s("32-" + $32, "t0-0", _vm._s(emoji)))]
                        )
                      }
                    ),
                    0
                  ),
                ]
              ),
              _c("image", {
                staticClass: _vm._$s(33, "sc", "emoji-img"),
                attrs: {
                  src: _vm._$s(33, "a-src", __webpack_require__(/*! ../../static/emoji.png */ 57)),
                  _i: 33,
                },
                on: {
                  click: function ($event) {
                    return _vm.showEmoji(_vm.isShowEmoji)
                  },
                },
              }),
              _vm._$s(34, "i", !_vm.friendID)
                ? _c("image", {
                    staticClass: _vm._$s(34, "sc", "gpt-img"),
                    attrs: {
                      src: _vm._$s(
                        34,
                        "a-src",
                        __webpack_require__(/*! ../../static/chatGPT.png */ 56)
                      ),
                      _i: 34,
                    },
                    on: { click: _vm.inputDialogToggle },
                  })
                : _vm._e(),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.chatm,
                    expression: "chatm",
                  },
                ],
                staticClass: _vm._$s(35, "sc", "chat-send"),
                attrs: {
                  focus: _vm._$s(35, "a-focus", _vm.cursorFocus),
                  _i: 35,
                },
                domProps: { value: _vm._$s(35, "v-model", _vm.chatm) },
                on: {
                  keyup: function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.sendMsg($event)
                  },
                  blur: _vm.getCursorFocus,
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.chatm = $event.target.value
                  },
                },
              }),
            ]
          ),
          _c("image", {
            staticClass: _vm._$s(36, "sc", "send-img"),
            attrs: {
              src: _vm._$s(36, "a-src", __webpack_require__(/*! ../../static/send.png */ 58)),
              _i: 36,
            },
            on: { click: _vm.sendMsg },
          }),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(37, "sc", "modify"),
          attrs: {
            animation: _vm._$s(37, "a-animation", _vm.animationData),
            _i: 37,
          },
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(38, "sc", "u-name"), attrs: { _i: 38 } },
            [_vm._v(_vm._$s(38, "t0-0", _vm._s(_vm.uname)))]
          ),
          _c(
            "scroll-view",
            {
              staticClass: _vm._$s(39, "sc", "modfiy-mian"),
              attrs: {
                "scroll-top": _vm._$s(39, "a-scroll-top", _vm.scrollHeight),
                _i: 39,
              },
            },
            _vm._l(
              _vm._$s(40, "f", { forItems: _vm.singlechat }),
              function (e, index, $23, $33) {
                return _c(
                  "view",
                  { key: _vm._$s(40, "f", { forIndex: $23, key: index }) },
                  [
                    _vm._$s(
                      "41-" + $33,
                      "i",
                      (e.fromID == _vm.friendID ||
                        e.fromID2 == _vm.friendID2) &&
                        e.fromID2 != e.toID2
                    )
                      ? _c(
                          "view",
                          {
                            staticClass: _vm._$s("41-" + $33, "sc", "left msg"),
                            attrs: { _i: "41-" + $33 },
                          },
                          [
                            _c("image", {
                              attrs: {
                                src: _vm._$s(
                                  "42-" + $33,
                                  "a-src",
                                  "../../static/images/" + e.img + ".png"
                                ),
                                _i: "42-" + $33,
                              },
                            }),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "43-" + $33,
                                  "sc",
                                  "messageOverall"
                                ),
                                attrs: { _i: "43-" + $33 },
                              },
                              [
                                _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      "44-" + $33,
                                      "sc",
                                      "messageContent"
                                    ),
                                    attrs: { _i: "44-" + $33 },
                                  },
                                  [
                                    _vm._v(
                                      _vm._$s(
                                        "44-" + $33,
                                        "t0-0",
                                        _vm._s(e.messageContent)
                                      )
                                    ),
                                  ]
                                ),
                                _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      "45-" + $33,
                                      "sc",
                                      "messageTime"
                                    ),
                                    attrs: { _i: "45-" + $33 },
                                  },
                                  [
                                    _vm._v(
                                      _vm._$s(
                                        "45-" + $33,
                                        "t0-0",
                                        _vm._s(_vm.timeProcess(e.time))
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        )
                      : _vm._e(),
                    _vm._$s(
                      "46-" + $33,
                      "i",
                      (e.fromID == _vm.userID && e.toID == _vm.friendID) ||
                        (e.fromID2 == _vm.userID2 && e.toID2 == _vm.friendID2)
                    )
                      ? _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              "46-" + $33,
                              "sc",
                              "right msg"
                            ),
                            attrs: { _i: "46-" + $33 },
                          },
                          [
                            _c("image", {
                              attrs: {
                                src: _vm._$s(
                                  "47-" + $33,
                                  "a-src",
                                  "../../static/images/" + e.img + ".png"
                                ),
                                _i: "47-" + $33,
                              },
                            }),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "48-" + $33,
                                  "sc",
                                  "messageOverall"
                                ),
                                attrs: { _i: "48-" + $33 },
                              },
                              [
                                _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      "49-" + $33,
                                      "sc",
                                      "messageContent"
                                    ),
                                    attrs: { _i: "49-" + $33 },
                                  },
                                  [
                                    _vm._v(
                                      _vm._$s(
                                        "49-" + $33,
                                        "t0-0",
                                        _vm._s(e.messageContent)
                                      )
                                    ),
                                  ]
                                ),
                                _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      "50-" + $33,
                                      "sc",
                                      "messageTime"
                                    ),
                                    attrs: { _i: "50-" + $33 },
                                  },
                                  [
                                    _vm._v(
                                      _vm._$s(
                                        "50-" + $33,
                                        "t0-0",
                                        _vm._s(_vm.timeProcess(e.time))
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        )
                      : _vm._e(),
                  ]
                )
              }
            ),
            0
          ),
        ]
      ),
      _c("view", {
        staticClass: _vm._$s(51, "sc", "bg"),
        style: _vm._$s(51, "s", { display: _vm.bg }),
        attrs: { _i: 51 },
        on: { click: _vm.outSingleChat },
      }),
      _c(
        "uni-popup",
        { ref: "inputDialog", attrs: { type: "dialog", _i: 52 } },
        [
          _c("uni-popup-dialog", {
            ref: "inputClose",
            attrs: {
              mode: "input",
              title: "Encryption key",
              value: "",
              placeholder: "please input the encryption key",
              _i: 53,
            },
            on: { confirm: _vm.gptUpload },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/uni-popup.vue ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=template&id=7c43d41b& */ 21);\n/* harmony import */ var _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=script&lang=js& */ 37);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-popup/components/uni-popup/uni-popup.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0g7QUFDdEg7QUFDNkQ7QUFDTDs7O0FBR3hEO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2M0M2Q0MWImXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3VuaS1wb3B1cC9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!****************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=7c43d41b& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=template&id=7c43d41b& */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=7c43d41b& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniTransition:
      __webpack_require__(/*! @/uni_modules/uni-transition/components/uni-transition/uni-transition.vue */ 23)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.showPopup)
    ? _c(
        "view",
        {
          staticClass: _vm._$s(0, "sc", "uni-popup"),
          class: _vm._$s(0, "c", [
            _vm.popupstyle,
            _vm.isDesktop ? "fixforpc-z-index" : "",
          ]),
          attrs: { _i: 0 },
        },
        [
          _c(
            "view",
            { attrs: { _i: 1 }, on: { touchstart: _vm.touchstart } },
            [
              _vm._$s(2, "i", _vm.maskShow)
                ? _c("uni-transition", {
                    key: "1",
                    attrs: {
                      name: "mask",
                      "mode-class": "fade",
                      styles: _vm.maskClass,
                      duration: _vm.duration,
                      show: _vm.showTrans,
                      _i: 2,
                    },
                    on: { click: _vm.onTap },
                  })
                : _vm._e(),
              _c(
                "uni-transition",
                {
                  key: "2",
                  attrs: {
                    "mode-class": _vm.ani,
                    name: "content",
                    styles: _vm.transClass,
                    duration: _vm.duration,
                    show: _vm.showTrans,
                    _i: 3,
                  },
                  on: { click: _vm.onTap },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(4, "sc", "uni-popup__wrapper"),
                      class: _vm._$s(4, "c", [_vm.popupstyle]),
                      style: _vm._$s(4, "s", { backgroundColor: _vm.bg }),
                      attrs: { _i: 4 },
                      on: { click: _vm.clear },
                    },
                    [_vm._t("default", null, { _i: 5 })],
                    2
                  ),
                ]
              ),
            ],
            1
          ),
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-transition/components/uni-transition/uni-transition.vue ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=template&id=6369f8c4& */ 24);\n/* harmony import */ var _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=script&lang=js& */ 26);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-transition/components/uni-transition/uni-transition.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDs7O0FBRzdEO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MzY5ZjhjNCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3VuaS10cmFuc2l0aW9uL2NvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=6369f8c4& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=template&id=6369f8c4& */ 25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 25 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=6369f8c4& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm._$s(0, "v-show", _vm.isShow),
          expression: "_$s(0,'v-show',isShow)",
        },
      ],
      ref: "ani",
      class: _vm._$s(0, "c", _vm.customClass),
      style: _vm._$s(0, "s", _vm.transformStyles),
      attrs: { animation: _vm._$s(0, "a-animation", _vm.animationData), _i: 0 },
      on: { click: _vm.onClick },
    },
    [_vm._t("default", null, { _i: 1 })],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 26 */
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=script&lang=js& */ 27);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTB1QixDQUFnQixvdEJBQUcsRUFBQyIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 28));\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _createAnimation = __webpack_require__(/*! ./createAnimation */ 34);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n/**\n * Transition 过渡动画\n * @description 简单过渡动画组件\n * @tutorial https://ext.dcloud.net.cn/plugin?id=985\n * @property {Boolean} show = [false|true] 控制组件显示或隐藏\n * @property {Array|String} modeClass = [fade|slide-top|slide-right|slide-bottom|slide-left|zoom-in|zoom-out] 过渡动画类型\n *  @value fade 渐隐渐出过渡\n *  @value slide-top 由上至下过渡\n *  @value slide-right 由右至左过渡\n *  @value slide-bottom 由下至上过渡\n *  @value slide-left 由左至右过渡\n *  @value zoom-in 由小到大过渡\n *  @value zoom-out 由大到小过渡\n * @property {Number} duration 过渡动画持续时间\n * @property {Object} styles 组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`\n */\nvar _default2 = {\n  name: 'uniTransition',\n  emits: ['click', 'change'],\n  props: {\n    show: {\n      type: Boolean,\n      default: false\n    },\n    modeClass: {\n      type: [Array, String],\n      default: function _default() {\n        return 'fade';\n      }\n    },\n    duration: {\n      type: Number,\n      default: 300\n    },\n    styles: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    },\n    customClass: {\n      type: String,\n      default: ''\n    },\n    onceRender: {\n      type: Boolean,\n      default: false\n    }\n  },\n  data: function data() {\n    return {\n      isShow: false,\n      transform: '',\n      opacity: 1,\n      animationData: {},\n      durationTime: 300,\n      config: {}\n    };\n  },\n  watch: {\n    show: {\n      handler: function handler(newVal) {\n        if (newVal) {\n          this.open();\n        } else {\n          // 避免上来就执行 close,导致动画错乱\n          if (this.isShow) {\n            this.close();\n          }\n        }\n      },\n      immediate: true\n    }\n  },\n  computed: {\n    // 生成样式数据\n    stylesObject: function stylesObject() {\n      var styles = _objectSpread(_objectSpread({}, this.styles), {}, {\n        'transition-duration': this.duration / 1000 + 's'\n      });\n      var transform = '';\n      for (var i in styles) {\n        var line = this.toLine(i);\n        transform += line + ':' + styles[i] + ';';\n      }\n      return transform;\n    },\n    // 初始化动画条件\n    transformStyles: function transformStyles() {\n      return 'transform:' + this.transform + ';' + 'opacity:' + this.opacity + ';' + this.stylesObject;\n    }\n  },\n  created: function created() {\n    // 动画默认配置\n    this.config = {\n      duration: this.duration,\n      timingFunction: 'ease',\n      transformOrigin: '50% 50%',\n      delay: 0\n    };\n    this.durationTime = this.duration;\n  },\n  methods: {\n    /**\n     *  ref 触发 初始化动画\n     */\n    init: function init() {\n      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      if (obj.duration) {\n        this.durationTime = obj.duration;\n      }\n      this.animation = (0, _createAnimation.createAnimation)(Object.assign(this.config, obj), this);\n    },\n    /**\n     * 点击组件触发回调\n     */\n    onClick: function onClick() {\n      this.$emit('click', {\n        detail: this.isShow\n      });\n    },\n    /**\n     * ref 触发 动画分组\n     * @param {Object} obj\n     */\n    step: function step(obj) {\n      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      if (!this.animation) return;\n      for (var i in obj) {\n        try {\n          if ((0, _typeof2.default)(obj[i]) === 'object') {\n            var _this$animation;\n            (_this$animation = this.animation)[i].apply(_this$animation, (0, _toConsumableArray2.default)(obj[i]));\n          } else {\n            this.animation[i](obj[i]);\n          }\n        } catch (e) {\n          __f__(\"error\", \"\\u65B9\\u6CD5 \".concat(i, \" \\u4E0D\\u5B58\\u5728\"), \" at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148\");\n        }\n      }\n      this.animation.step(config);\n      return this;\n    },\n    /**\n     *  ref 触发 执行动画\n     */\n    run: function run(fn) {\n      if (!this.animation) return;\n      this.animation.run(fn);\n    },\n    // 开始过度动画\n    open: function open() {\n      var _this = this;\n      clearTimeout(this.timer);\n      this.transform = '';\n      this.isShow = true;\n      var _this$styleInit = this.styleInit(false),\n        opacity = _this$styleInit.opacity,\n        transform = _this$styleInit.transform;\n      if (typeof opacity !== 'undefined') {\n        this.opacity = opacity;\n      }\n      this.transform = transform;\n      // 确保动态样式已经生效后，执行动画，如果不加 nextTick ，会导致 wx 动画执行异常\n      this.$nextTick(function () {\n        // TODO 定时器保证动画完全执行，目前有些问题，后面会取消定时器\n        _this.timer = setTimeout(function () {\n          _this.animation = (0, _createAnimation.createAnimation)(_this.config, _this);\n          _this.tranfromInit(false).step();\n          _this.animation.run();\n          _this.$emit('change', {\n            detail: _this.isShow\n          });\n        }, 20);\n      });\n    },\n    // 关闭过度动画\n    close: function close(type) {\n      var _this2 = this;\n      if (!this.animation) return;\n      this.tranfromInit(true).step().run(function () {\n        _this2.isShow = false;\n        _this2.animationData = null;\n        _this2.animation = null;\n        var _this2$styleInit = _this2.styleInit(false),\n          opacity = _this2$styleInit.opacity,\n          transform = _this2$styleInit.transform;\n        _this2.opacity = opacity || 1;\n        _this2.transform = transform;\n        _this2.$emit('change', {\n          detail: _this2.isShow\n        });\n      });\n    },\n    // 处理动画开始前的默认样式\n    styleInit: function styleInit(type) {\n      var _this3 = this;\n      var styles = {\n        transform: ''\n      };\n      var buildStyle = function buildStyle(type, mode) {\n        if (mode === 'fade') {\n          styles.opacity = _this3.animationType(type)[mode];\n        } else {\n          styles.transform += _this3.animationType(type)[mode] + ' ';\n        }\n      };\n      if (typeof this.modeClass === 'string') {\n        buildStyle(type, this.modeClass);\n      } else {\n        this.modeClass.forEach(function (mode) {\n          buildStyle(type, mode);\n        });\n      }\n      return styles;\n    },\n    // 处理内置组合动画\n    tranfromInit: function tranfromInit(type) {\n      var _this4 = this;\n      var buildTranfrom = function buildTranfrom(type, mode) {\n        var aniNum = null;\n        if (mode === 'fade') {\n          aniNum = type ? 0 : 1;\n        } else {\n          aniNum = type ? '-100%' : '0';\n          if (mode === 'zoom-in') {\n            aniNum = type ? 0.8 : 1;\n          }\n          if (mode === 'zoom-out') {\n            aniNum = type ? 1.2 : 1;\n          }\n          if (mode === 'slide-right') {\n            aniNum = type ? '100%' : '0';\n          }\n          if (mode === 'slide-bottom') {\n            aniNum = type ? '100%' : '0';\n          }\n        }\n        _this4.animation[_this4.animationMode()[mode]](aniNum);\n      };\n      if (typeof this.modeClass === 'string') {\n        buildTranfrom(type, this.modeClass);\n      } else {\n        this.modeClass.forEach(function (mode) {\n          buildTranfrom(type, mode);\n        });\n      }\n      return this.animation;\n    },\n    animationType: function animationType(type) {\n      return {\n        fade: type ? 1 : 0,\n        'slide-top': \"translateY(\".concat(type ? '0' : '-100%', \")\"),\n        'slide-right': \"translateX(\".concat(type ? '0' : '100%', \")\"),\n        'slide-bottom': \"translateY(\".concat(type ? '0' : '100%', \")\"),\n        'slide-left': \"translateX(\".concat(type ? '0' : '-100%', \")\"),\n        'zoom-in': \"scaleX(\".concat(type ? 1 : 0.8, \") scaleY(\").concat(type ? 1 : 0.8, \")\"),\n        'zoom-out': \"scaleX(\".concat(type ? 1 : 1.2, \") scaleY(\").concat(type ? 1 : 1.2, \")\")\n      };\n    },\n    // 内置动画类型与实际动画对应字典\n    animationMode: function animationMode() {\n      return {\n        fade: 'opacity',\n        'slide-top': 'translateY',\n        'slide-right': 'translateX',\n        'slide-bottom': 'translateY',\n        'slide-left': 'translateX',\n        'zoom-in': 'scale',\n        'zoom-out': 'scale'\n      };\n    },\n    // 驼峰转中横线\n    toLine: function toLine(name) {\n      return name.replace(/([A-Z])/g, '-$1').toLowerCase();\n    }\n  }\n};\nexports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWUiXSwibmFtZXMiOlsibmFtZSIsImVtaXRzIiwicHJvcHMiLCJzaG93IiwidHlwZSIsImRlZmF1bHQiLCJtb2RlQ2xhc3MiLCJkdXJhdGlvbiIsInN0eWxlcyIsImN1c3RvbUNsYXNzIiwib25jZVJlbmRlciIsImRhdGEiLCJpc1Nob3ciLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5IiwiYW5pbWF0aW9uRGF0YSIsImR1cmF0aW9uVGltZSIsImNvbmZpZyIsIndhdGNoIiwiaGFuZGxlciIsImltbWVkaWF0ZSIsImNvbXB1dGVkIiwic3R5bGVzT2JqZWN0IiwidHJhbnNmb3JtU3R5bGVzIiwiY3JlYXRlZCIsInRpbWluZ0Z1bmN0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwiZGVsYXkiLCJtZXRob2RzIiwiaW5pdCIsIm9uQ2xpY2siLCJkZXRhaWwiLCJzdGVwIiwicnVuIiwib3BlbiIsImNsZWFyVGltZW91dCIsImNsb3NlIiwic3R5bGVJbml0IiwiYnVpbGRTdHlsZSIsInRyYW5mcm9tSW5pdCIsImFuaU51bSIsImJ1aWxkVHJhbmZyb20iLCJhbmltYXRpb25UeXBlIiwiZmFkZSIsImFuaW1hdGlvbk1vZGUiLCJ0b0xpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBLGdCQWdCQTtFQUNBQTtFQUNBQztFQUNBQztJQUNBQztNQUNBQztNQUNBQztJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBQ0FFO01BQ0FIO01BQ0FDO0lBQ0E7SUFDQUc7TUFDQUo7TUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQUk7TUFDQUw7TUFDQUM7SUFDQTtJQUNBSztNQUNBTjtNQUNBQztJQUNBO0VBQ0E7RUFDQU07SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQWY7TUFDQWdCO1FBQ0E7VUFDQTtRQUNBO1VBQ0E7VUFDQTtZQUNBO1VBQ0E7UUFDQTtNQUNBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0FDO01BQ0EsNkNBQ0E7UUFDQTtNQUFBLEVBQ0E7TUFDQTtNQUNBO1FBQ0E7UUFDQVQ7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBVTtNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7TUFDQWpCO01BQ0FrQjtNQUNBQztNQUNBQztJQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUFBO01BQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUNBO1FBQ0FDO01BQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQUE7TUFDQTtNQUNBO1FBQ0E7VUFDQTtZQUFBO1lBQ0E7VUFDQTtZQUNBO1VBQ0E7UUFDQTtVQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQUM7TUFDQTtNQUNBO01BQ0E7UUFBQXJCO1FBQUFEO01BQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7UUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1lBQ0FrQjtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUs7TUFBQTtNQUNBO01BQ0Esd0JBQ0FKLE9BQ0FDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7VUFBQW5CO1VBQUFEO1FBQ0E7UUFDQTtRQUNBO1VBQ0FrQjtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FNO01BQUE7TUFDQTtRQUNBeEI7TUFDQTtNQUNBO1FBQ0E7VUFDQUw7UUFDQTtVQUNBQTtRQUNBO01BQ0E7TUFDQTtRQUNBOEI7TUFDQTtRQUNBO1VBQ0FBO1FBQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7UUFDQTtRQUNBO1VBQ0FDO1FBQ0E7VUFDQUE7VUFDQTtZQUNBQTtVQUNBO1VBQ0E7WUFDQUE7VUFDQTtVQUNBO1lBQ0FBO1VBQ0E7VUFDQTtZQUNBQTtVQUNBO1FBQ0E7UUFDQTtNQUNBO01BQ0E7UUFDQUM7TUFDQTtRQUNBO1VBQ0FBO1FBQ0E7TUFDQTtNQUVBO0lBQ0E7SUFDQUM7TUFDQTtRQUNBQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO1FBQ0FEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FFO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSw0QiIsImZpbGUiOiIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPCEtLSAjaWZuZGVmIEFQUC1OVlVFIC0tPlxuICA8dmlldyB2LXNob3c9XCJpc1Nob3dcIiByZWY9XCJhbmlcIiA6YW5pbWF0aW9uPVwiYW5pbWF0aW9uRGF0YVwiIDpjbGFzcz1cImN1c3RvbUNsYXNzXCIgOnN0eWxlPVwidHJhbnNmb3JtU3R5bGVzXCIgQGNsaWNrPVwib25DbGlja1wiPjxzbG90Pjwvc2xvdD48L3ZpZXc+XG4gIDwhLS0gI2VuZGlmIC0tPlxuICA8IS0tICNpZmRlZiBBUFAtTlZVRSAtLT5cbiAgPHZpZXcgdi1pZj1cImlzU2hvd1wiIHJlZj1cImFuaVwiIDphbmltYXRpb249XCJhbmltYXRpb25EYXRhXCIgOmNsYXNzPVwiY3VzdG9tQ2xhc3NcIiA6c3R5bGU9XCJ0cmFuc2Zvcm1TdHlsZXNcIiBAY2xpY2s9XCJvbkNsaWNrXCI+PHNsb3Q+PC9zbG90Pjwvdmlldz5cbiAgPCEtLSAjZW5kaWYgLS0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9jcmVhdGVBbmltYXRpb24nXG5cbi8qKlxuICogVHJhbnNpdGlvbiDov4fmuKHliqjnlLtcbiAqIEBkZXNjcmlwdGlvbiDnroDljZXov4fmuKHliqjnlLvnu4Tku7ZcbiAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD05ODVcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2hvdyA9IFtmYWxzZXx0cnVlXSDmjqfliLbnu4Tku7bmmL7npLrmiJbpmpDol49cbiAqIEBwcm9wZXJ0eSB7QXJyYXl8U3RyaW5nfSBtb2RlQ2xhc3MgPSBbZmFkZXxzbGlkZS10b3B8c2xpZGUtcmlnaHR8c2xpZGUtYm90dG9tfHNsaWRlLWxlZnR8em9vbS1pbnx6b29tLW91dF0g6L+H5rih5Yqo55S757G75Z6LXG4gKiAgQHZhbHVlIGZhZGUg5riQ6ZqQ5riQ5Ye66L+H5rihXG4gKiAgQHZhbHVlIHNsaWRlLXRvcCDnlLHkuIroh7PkuIvov4fmuKFcbiAqICBAdmFsdWUgc2xpZGUtcmlnaHQg55Sx5Y+z6Iez5bem6L+H5rihXG4gKiAgQHZhbHVlIHNsaWRlLWJvdHRvbSDnlLHkuIvoh7PkuIrov4fmuKFcbiAqICBAdmFsdWUgc2xpZGUtbGVmdCDnlLHlt6boh7Plj7Pov4fmuKFcbiAqICBAdmFsdWUgem9vbS1pbiDnlLHlsI/liLDlpKfov4fmuKFcbiAqICBAdmFsdWUgem9vbS1vdXQg55Sx5aSn5Yiw5bCP6L+H5rihXG4gKiBAcHJvcGVydHkge051bWJlcn0gZHVyYXRpb24g6L+H5rih5Yqo55S75oyB57ut5pe26Ze0XG4gKiBAcHJvcGVydHkge09iamVjdH0gc3R5bGVzIOe7hOS7tuagt+W8j++8jOWQjCBjc3Mg5qC35byP77yM5rOo5oSP5bim4oCZLeKAmOi/nuaOpeespueahOWxnuaAp+mcgOimgeS9v+eUqOWwj+mpvOWzsOWGmeazleWmgu+8mmBiYWNrZ3JvdW5kQ29sb3I6cmVkYFxuICovXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICd1bmlUcmFuc2l0aW9uJyxcblx0ZW1pdHM6WydjbGljaycsJ2NoYW5nZSddLFxuXHRwcm9wczoge1xuXHRcdHNob3c6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdH0sXG5cdFx0bW9kZUNsYXNzOiB7XG5cdFx0XHR0eXBlOiBbQXJyYXksIFN0cmluZ10sXG5cdFx0XHRkZWZhdWx0KCkge1xuXHRcdFx0XHRyZXR1cm4gJ2ZhZGUnXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkdXJhdGlvbjoge1xuXHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0ZGVmYXVsdDogMzAwXG5cdFx0fSxcblx0XHRzdHlsZXM6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQoKSB7XG5cdFx0XHRcdHJldHVybiB7fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3VzdG9tQ2xhc3M6e1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9LFxuXHRcdG9uY2VSZW5kZXI6e1xuXHRcdFx0dHlwZTpCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDpmYWxzZVxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlzU2hvdzogZmFsc2UsXG5cdFx0XHR0cmFuc2Zvcm06ICcnLFxuXHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdGFuaW1hdGlvbkRhdGE6IHt9LFxuXHRcdFx0ZHVyYXRpb25UaW1lOiAzMDAsXG5cdFx0XHRjb25maWc6IHt9XG5cdFx0fVxuXHR9LFxuXHR3YXRjaDoge1xuXHRcdHNob3c6IHtcblx0XHRcdGhhbmRsZXIobmV3VmFsKSB7XG5cdFx0XHRcdGlmIChuZXdWYWwpIHtcblx0XHRcdFx0XHR0aGlzLm9wZW4oKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIOmBv+WFjeS4iuadpeWwseaJp+ihjCBjbG9zZSzlr7zoh7TliqjnlLvplJnkubFcblx0XHRcdFx0XHRpZiAodGhpcy5pc1Nob3cpIHtcblx0XHRcdFx0XHRcdHRoaXMuY2xvc2UoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHQvLyDnlJ/miJDmoLflvI/mlbDmja5cblx0XHRzdHlsZXNPYmplY3QoKSB7XG5cdFx0XHRsZXQgc3R5bGVzID0ge1xuXHRcdFx0XHQuLi50aGlzLnN0eWxlcyxcblx0XHRcdFx0J3RyYW5zaXRpb24tZHVyYXRpb24nOiB0aGlzLmR1cmF0aW9uIC8gMTAwMCArICdzJ1xuXHRcdFx0fVxuXHRcdFx0bGV0IHRyYW5zZm9ybSA9ICcnXG5cdFx0XHRmb3IgKGxldCBpIGluIHN0eWxlcykge1xuXHRcdFx0XHRsZXQgbGluZSA9IHRoaXMudG9MaW5lKGkpXG5cdFx0XHRcdHRyYW5zZm9ybSArPSBsaW5lICsgJzonICsgc3R5bGVzW2ldICsgJzsnXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJhbnNmb3JtXG5cdFx0fSxcblx0XHQvLyDliJ3lp4vljJbliqjnlLvmnaHku7Zcblx0XHR0cmFuc2Zvcm1TdHlsZXMoKSB7XG5cdFx0XHRyZXR1cm4gJ3RyYW5zZm9ybTonICsgdGhpcy50cmFuc2Zvcm0gKyAnOycgKyAnb3BhY2l0eTonICsgdGhpcy5vcGFjaXR5ICsgJzsnICsgdGhpcy5zdHlsZXNPYmplY3Rcblx0XHR9XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0Ly8g5Yqo55S76buY6K6k6YWN572uXG5cdFx0dGhpcy5jb25maWcgPSB7XG5cdFx0XHRkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcblx0XHRcdHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXG5cdFx0XHR0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJyxcblx0XHRcdGRlbGF5OiAwXG5cdFx0fVxuXHRcdHRoaXMuZHVyYXRpb25UaW1lID0gdGhpcy5kdXJhdGlvblxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0LyoqXG5cdFx0ICogIHJlZiDop6blj5Eg5Yid5aeL5YyW5Yqo55S7XG5cdFx0ICovXG5cdFx0aW5pdChvYmogPSB7fSkge1xuXHRcdFx0aWYgKG9iai5kdXJhdGlvbikge1xuXHRcdFx0XHR0aGlzLmR1cmF0aW9uVGltZSA9IG9iai5kdXJhdGlvblxuXHRcdFx0fVxuXHRcdFx0dGhpcy5hbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgb2JqKSx0aGlzKVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICog54K55Ye757uE5Lu26Kem5Y+R5Zue6LCDXG5cdFx0ICovXG5cdFx0b25DbGljaygpIHtcblx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJywge1xuXHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogcmVmIOinpuWPkSDliqjnlLvliIbnu4Rcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gb2JqXG5cdFx0ICovXG5cdFx0c3RlcChvYmosIGNvbmZpZyA9IHt9KSB7XG5cdFx0XHRpZiAoIXRoaXMuYW5pbWF0aW9uKSByZXR1cm5cblx0XHRcdGZvciAobGV0IGkgaW4gb2JqKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYodHlwZW9mIG9ialtpXSA9PT0gJ29iamVjdCcpe1xuXHRcdFx0XHRcdFx0dGhpcy5hbmltYXRpb25baV0oLi4ub2JqW2ldKVxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0dGhpcy5hbmltYXRpb25baV0ob2JqW2ldKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYOaWueazlSAke2l9IOS4jeWtmOWcqGApXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuYW5pbWF0aW9uLnN0ZXAoY29uZmlnKVxuXHRcdFx0cmV0dXJuIHRoaXNcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqICByZWYg6Kem5Y+RIOaJp+ihjOWKqOeUu1xuXHRcdCAqL1xuXHRcdHJ1bihmbikge1xuXHRcdFx0aWYgKCF0aGlzLmFuaW1hdGlvbikgcmV0dXJuXG5cdFx0XHR0aGlzLmFuaW1hdGlvbi5ydW4oZm4pXG5cdFx0fSxcblx0XHQvLyDlvIDlp4vov4fluqbliqjnlLtcblx0XHRvcGVuKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG5cdFx0XHR0aGlzLnRyYW5zZm9ybSA9ICcnXG5cdFx0XHR0aGlzLmlzU2hvdyA9IHRydWVcblx0XHRcdGxldCB7IG9wYWNpdHksIHRyYW5zZm9ybSB9ID0gdGhpcy5zdHlsZUluaXQoZmFsc2UpXG5cdFx0XHRpZiAodHlwZW9mIG9wYWNpdHkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHRoaXMub3BhY2l0eSA9IG9wYWNpdHlcblx0XHRcdH1cblx0XHRcdHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cdFx0XHQvLyDnoa7kv53liqjmgIHmoLflvI/lt7Lnu4/nlJ/mlYjlkI7vvIzmiafooYzliqjnlLvvvIzlpoLmnpzkuI3liqAgbmV4dFRpY2sg77yM5Lya5a+86Ie0IHd4IOWKqOeUu+aJp+ihjOW8guW4uFxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHQvLyBUT0RPIOWumuaXtuWZqOS/neivgeWKqOeUu+WujOWFqOaJp+ihjO+8jOebruWJjeacieS6m+mXrumimO+8jOWQjumdouS8muWPlua2iOWumuaXtuWZqFxuXHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5hbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24odGhpcy5jb25maWcsIHRoaXMpXG5cdFx0XHRcdFx0dGhpcy50cmFuZnJvbUluaXQoZmFsc2UpLnN0ZXAoKVxuXHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uLnJ1bigpXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xuXHRcdFx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlzU2hvd1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0sIDIwKVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOWFs+mXrei/h+W6puWKqOeUu1xuXHRcdGNsb3NlKHR5cGUpIHtcblx0XHRcdGlmICghdGhpcy5hbmltYXRpb24pIHJldHVyblxuXHRcdFx0dGhpcy50cmFuZnJvbUluaXQodHJ1ZSlcblx0XHRcdFx0LnN0ZXAoKVxuXHRcdFx0XHQucnVuKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmlzU2hvdyA9IGZhbHNlXG5cdFx0XHRcdFx0dGhpcy5hbmltYXRpb25EYXRhID0gbnVsbFxuXHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uID0gbnVsbFxuXHRcdFx0XHRcdGxldCB7IG9wYWNpdHksIHRyYW5zZm9ybSB9ID0gdGhpcy5zdHlsZUluaXQoZmFsc2UpXG5cdFx0XHRcdFx0dGhpcy5vcGFjaXR5ID0gb3BhY2l0eSB8fCAxXG5cdFx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOWkhOeQhuWKqOeUu+W8gOWni+WJjeeahOm7mOiupOagt+W8j1xuXHRcdHN0eWxlSW5pdCh0eXBlKSB7XG5cdFx0XHRsZXQgc3R5bGVzID0ge1xuXHRcdFx0XHR0cmFuc2Zvcm06ICcnXG5cdFx0XHR9XG5cdFx0XHRsZXQgYnVpbGRTdHlsZSA9ICh0eXBlLCBtb2RlKSA9PiB7XG5cdFx0XHRcdGlmIChtb2RlID09PSAnZmFkZScpIHtcblx0XHRcdFx0XHRzdHlsZXMub3BhY2l0eSA9IHRoaXMuYW5pbWF0aW9uVHlwZSh0eXBlKVttb2RlXVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN0eWxlcy50cmFuc2Zvcm0gKz0gdGhpcy5hbmltYXRpb25UeXBlKHR5cGUpW21vZGVdICsgJyAnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5tb2RlQ2xhc3MgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGJ1aWxkU3R5bGUodHlwZSwgdGhpcy5tb2RlQ2xhc3MpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1vZGVDbGFzcy5mb3JFYWNoKG1vZGUgPT4ge1xuXHRcdFx0XHRcdGJ1aWxkU3R5bGUodHlwZSwgbW9kZSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHlsZXNcblx0XHR9LFxuXHRcdC8vIOWkhOeQhuWGhee9rue7hOWQiOWKqOeUu1xuXHRcdHRyYW5mcm9tSW5pdCh0eXBlKSB7XG5cdFx0XHRsZXQgYnVpbGRUcmFuZnJvbSA9ICh0eXBlLCBtb2RlKSA9PiB7XG5cdFx0XHRcdGxldCBhbmlOdW0gPSBudWxsXG5cdFx0XHRcdGlmIChtb2RlID09PSAnZmFkZScpIHtcblx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gMCA6IDFcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gJy0xMDAlJyA6ICcwJ1xuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnem9vbS1pbicpIHtcblx0XHRcdFx0XHRcdGFuaU51bSA9IHR5cGUgPyAwLjggOiAxXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnem9vbS1vdXQnKSB7XG5cdFx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gMS4yIDogMVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobW9kZSA9PT0gJ3NsaWRlLXJpZ2h0Jykge1xuXHRcdFx0XHRcdFx0YW5pTnVtID0gdHlwZSA/ICcxMDAlJyA6ICcwJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobW9kZSA9PT0gJ3NsaWRlLWJvdHRvbScpIHtcblx0XHRcdFx0XHRcdGFuaU51bSA9IHR5cGUgPyAnMTAwJScgOiAnMCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5hbmltYXRpb25bdGhpcy5hbmltYXRpb25Nb2RlKClbbW9kZV1dKGFuaU51bSlcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5tb2RlQ2xhc3MgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGJ1aWxkVHJhbmZyb20odHlwZSwgdGhpcy5tb2RlQ2xhc3MpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1vZGVDbGFzcy5mb3JFYWNoKG1vZGUgPT4ge1xuXHRcdFx0XHRcdGJ1aWxkVHJhbmZyb20odHlwZSwgbW9kZSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMuYW5pbWF0aW9uXG5cdFx0fSxcblx0XHRhbmltYXRpb25UeXBlKHR5cGUpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGZhZGU6IHR5cGUgPyAxIDogMCxcblx0XHRcdFx0J3NsaWRlLXRvcCc6IGB0cmFuc2xhdGVZKCR7dHlwZSA/ICcwJyA6ICctMTAwJSd9KWAsXG5cdFx0XHRcdCdzbGlkZS1yaWdodCc6IGB0cmFuc2xhdGVYKCR7dHlwZSA/ICcwJyA6ICcxMDAlJ30pYCxcblx0XHRcdFx0J3NsaWRlLWJvdHRvbSc6IGB0cmFuc2xhdGVZKCR7dHlwZSA/ICcwJyA6ICcxMDAlJ30pYCxcblx0XHRcdFx0J3NsaWRlLWxlZnQnOiBgdHJhbnNsYXRlWCgke3R5cGUgPyAnMCcgOiAnLTEwMCUnfSlgLFxuXHRcdFx0XHQnem9vbS1pbic6IGBzY2FsZVgoJHt0eXBlID8gMSA6IDAuOH0pIHNjYWxlWSgke3R5cGUgPyAxIDogMC44fSlgLFxuXHRcdFx0XHQnem9vbS1vdXQnOiBgc2NhbGVYKCR7dHlwZSA/IDEgOiAxLjJ9KSBzY2FsZVkoJHt0eXBlID8gMSA6IDEuMn0pYFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8g5YaF572u5Yqo55S757G75Z6L5LiO5a6e6ZmF5Yqo55S75a+55bqU5a2X5YW4XG5cdFx0YW5pbWF0aW9uTW9kZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGZhZGU6ICdvcGFjaXR5Jyxcblx0XHRcdFx0J3NsaWRlLXRvcCc6ICd0cmFuc2xhdGVZJyxcblx0XHRcdFx0J3NsaWRlLXJpZ2h0JzogJ3RyYW5zbGF0ZVgnLFxuXHRcdFx0XHQnc2xpZGUtYm90dG9tJzogJ3RyYW5zbGF0ZVknLFxuXHRcdFx0XHQnc2xpZGUtbGVmdCc6ICd0cmFuc2xhdGVYJyxcblx0XHRcdFx0J3pvb20taW4nOiAnc2NhbGUnLFxuXHRcdFx0XHQnem9vbS1vdXQnOiAnc2NhbGUnXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyDpqbzls7DovazkuK3mqKrnur9cblx0XHR0b0xpbmUobmFtZSkge1xuXHRcdFx0cmV0dXJuIG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCAnLSQxJykudG9Mb3dlckNhc2UoKVxuXHRcdH1cblx0fVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 29);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 31);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 32);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 33);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 29 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 30);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 30 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 31 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 32 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 30);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 33 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 34 */
/*!************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createAnimation = createAnimation;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 35));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 36));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n// const defaultOption = {\n// \tduration: 300,\n// \ttimingFunction: 'linear',\n// \tdelay: 0,\n// \ttransformOrigin: '50% 50% 0'\n// }\nvar MPAnimation = /*#__PURE__*/function () {\n  function MPAnimation(options, _this) {\n    (0, _classCallCheck2.default)(this, MPAnimation);\n    this.options = options;\n    // 在iOS10+QQ小程序平台下，传给原生的对象一定是个普通对象而不是Proxy对象，否则会报parameter should be Object instead of ProxyObject的错误\n    this.animation = uni.createAnimation(_objectSpread({}, options));\n    this.currentStepAnimates = {};\n    this.next = 0;\n    this.$ = _this;\n  }\n  (0, _createClass2.default)(MPAnimation, [{\n    key: \"_nvuePushAnimates\",\n    value: function _nvuePushAnimates(type, args) {\n      var aniObj = this.currentStepAnimates[this.next];\n      var styles = {};\n      if (!aniObj) {\n        styles = {\n          styles: {},\n          config: {}\n        };\n      } else {\n        styles = aniObj;\n      }\n      if (animateTypes1.includes(type)) {\n        if (!styles.styles.transform) {\n          styles.styles.transform = '';\n        }\n        var unit = '';\n        if (type === 'rotate') {\n          unit = 'deg';\n        }\n        styles.styles.transform += \"\".concat(type, \"(\").concat(args + unit, \") \");\n      } else {\n        styles.styles[type] = \"\".concat(args);\n      }\n      this.currentStepAnimates[this.next] = styles;\n    }\n  }, {\n    key: \"_animateRun\",\n    value: function _animateRun() {\n      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var ref = this.$.$refs['ani'].ref;\n      if (!ref) return;\n      return new Promise(function (resolve, reject) {\n        nvueAnimation.transition(ref, _objectSpread({\n          styles: styles\n        }, config), function (res) {\n          resolve();\n        });\n      });\n    }\n  }, {\n    key: \"_nvueNextAnimate\",\n    value: function _nvueNextAnimate(animates) {\n      var _this2 = this;\n      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      var fn = arguments.length > 2 ? arguments[2] : undefined;\n      var obj = animates[step];\n      if (obj) {\n        var styles = obj.styles,\n          config = obj.config;\n        this._animateRun(styles, config).then(function () {\n          step += 1;\n          _this2._nvueNextAnimate(animates, step, fn);\n        });\n      } else {\n        this.currentStepAnimates = {};\n        typeof fn === 'function' && fn();\n        this.isEnd = true;\n      }\n    }\n  }, {\n    key: \"step\",\n    value: function step() {\n      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      this.animation.step(config);\n      return this;\n    }\n  }, {\n    key: \"run\",\n    value: function run(fn) {\n      this.$.animationData = this.animation.export();\n      this.$.timer = setTimeout(function () {\n        typeof fn === 'function' && fn();\n      }, this.$.durationTime);\n    }\n  }]);\n  return MPAnimation;\n}();\nvar animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ'];\nvar animateTypes2 = ['opacity', 'backgroundColor'];\nvar animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];\nanimateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {\n  MPAnimation.prototype[type] = function () {\n    var _this$animation;\n    (_this$animation = this.animation)[type].apply(_this$animation, arguments);\n    return this;\n  };\n});\nfunction createAnimation(option, _this) {\n  if (!_this) return;\n  clearTimeout(_this.timer);\n  return new MPAnimation(option, _this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi9jcmVhdGVBbmltYXRpb24uanMiXSwibmFtZXMiOlsiTVBBbmltYXRpb24iLCJvcHRpb25zIiwiX3RoaXMiLCJhbmltYXRpb24iLCJ1bmkiLCJjcmVhdGVBbmltYXRpb24iLCJjdXJyZW50U3RlcEFuaW1hdGVzIiwibmV4dCIsIiQiLCJ0eXBlIiwiYXJncyIsImFuaU9iaiIsInN0eWxlcyIsImNvbmZpZyIsImFuaW1hdGVUeXBlczEiLCJpbmNsdWRlcyIsInRyYW5zZm9ybSIsInVuaXQiLCJyZWYiLCIkcmVmcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibnZ1ZUFuaW1hdGlvbiIsInRyYW5zaXRpb24iLCJyZXMiLCJhbmltYXRlcyIsInN0ZXAiLCJmbiIsIm9iaiIsIl9hbmltYXRlUnVuIiwidGhlbiIsIl9udnVlTmV4dEFuaW1hdGUiLCJpc0VuZCIsImFuaW1hdGlvbkRhdGEiLCJleHBvcnQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJkdXJhdGlvblRpbWUiLCJhbmltYXRlVHlwZXMyIiwiYW5pbWF0ZVR5cGVzMyIsImNvbmNhdCIsImZvckVhY2giLCJwcm90b3R5cGUiLCJvcHRpb24iLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLElBSU1BLFdBQVc7RUFDaEIscUJBQVlDLE9BQU8sRUFBRUMsS0FBSyxFQUFFO0lBQUE7SUFDM0IsSUFBSSxDQUFDRCxPQUFPLEdBQUdBLE9BQU87SUFDdEI7SUFDQSxJQUFJLENBQUNFLFNBQVMsR0FBR0MsR0FBRyxDQUFDQyxlQUFlLG1CQUNoQ0osT0FBTyxFQUNUO0lBQ0YsSUFBSSxDQUFDSyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7SUFDN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUcsQ0FBQztJQUNiLElBQUksQ0FBQ0MsQ0FBQyxHQUFHTixLQUFLO0VBRWY7RUFBQztJQUFBO0lBQUEsT0FFRCwyQkFBa0JPLElBQUksRUFBRUMsSUFBSSxFQUFFO01BQzdCLElBQUlDLE1BQU0sR0FBRyxJQUFJLENBQUNMLG1CQUFtQixDQUFDLElBQUksQ0FBQ0MsSUFBSSxDQUFDO01BQ2hELElBQUlLLE1BQU0sR0FBRyxDQUFDLENBQUM7TUFDZixJQUFJLENBQUNELE1BQU0sRUFBRTtRQUNaQyxNQUFNLEdBQUc7VUFDUkEsTUFBTSxFQUFFLENBQUMsQ0FBQztVQUNWQyxNQUFNLEVBQUUsQ0FBQztRQUNWLENBQUM7TUFDRixDQUFDLE1BQU07UUFDTkQsTUFBTSxHQUFHRCxNQUFNO01BQ2hCO01BQ0EsSUFBSUcsYUFBYSxDQUFDQyxRQUFRLENBQUNOLElBQUksQ0FBQyxFQUFFO1FBQ2pDLElBQUksQ0FBQ0csTUFBTSxDQUFDQSxNQUFNLENBQUNJLFNBQVMsRUFBRTtVQUM3QkosTUFBTSxDQUFDQSxNQUFNLENBQUNJLFNBQVMsR0FBRyxFQUFFO1FBQzdCO1FBQ0EsSUFBSUMsSUFBSSxHQUFHLEVBQUU7UUFDYixJQUFHUixJQUFJLEtBQUssUUFBUSxFQUFDO1VBQ3BCUSxJQUFJLEdBQUcsS0FBSztRQUNiO1FBQ0FMLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDSSxTQUFTLGNBQU9QLElBQUksY0FBSUMsSUFBSSxHQUFDTyxJQUFJLE9BQUk7TUFDcEQsQ0FBQyxNQUFNO1FBQ05MLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDSCxJQUFJLENBQUMsYUFBTUMsSUFBSSxDQUFFO01BQ2hDO01BQ0EsSUFBSSxDQUFDSixtQkFBbUIsQ0FBQyxJQUFJLENBQUNDLElBQUksQ0FBQyxHQUFHSyxNQUFNO0lBQzdDO0VBQUM7SUFBQTtJQUFBLE9BQ0QsdUJBQXNDO01BQUEsSUFBMUJBLE1BQU0sdUVBQUcsQ0FBQyxDQUFDO01BQUEsSUFBRUMsTUFBTSx1RUFBRyxDQUFDLENBQUM7TUFDbkMsSUFBSUssR0FBRyxHQUFHLElBQUksQ0FBQ1YsQ0FBQyxDQUFDVyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUNELEdBQUc7TUFDakMsSUFBSSxDQUFDQSxHQUFHLEVBQUU7TUFDVixPQUFPLElBQUlFLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztRQUN2Q0MsYUFBYSxDQUFDQyxVQUFVLENBQUNOLEdBQUc7VUFDM0JOLE1BQU0sRUFBTkE7UUFBTSxHQUNIQyxNQUFNLEdBQ1AsVUFBQVksR0FBRyxFQUFJO1VBQ1RKLE9BQU8sRUFBRTtRQUNWLENBQUMsQ0FBQztNQUNILENBQUMsQ0FBQztJQUNIO0VBQUM7SUFBQTtJQUFBLE9BRUQsMEJBQWlCSyxRQUFRLEVBQWdCO01BQUE7TUFBQSxJQUFkQyxJQUFJLHVFQUFHLENBQUM7TUFBQSxJQUFFQyxFQUFFO01BQ3RDLElBQUlDLEdBQUcsR0FBR0gsUUFBUSxDQUFDQyxJQUFJLENBQUM7TUFDeEIsSUFBSUUsR0FBRyxFQUFFO1FBQ1IsSUFDQ2pCLE1BQU0sR0FFSGlCLEdBQUcsQ0FGTmpCLE1BQU07VUFDTkMsTUFBTSxHQUNIZ0IsR0FBRyxDQUROaEIsTUFBTTtRQUVQLElBQUksQ0FBQ2lCLFdBQVcsQ0FBQ2xCLE1BQU0sRUFBRUMsTUFBTSxDQUFDLENBQUNrQixJQUFJLENBQUMsWUFBTTtVQUMzQ0osSUFBSSxJQUFJLENBQUM7VUFDVCxNQUFJLENBQUNLLGdCQUFnQixDQUFDTixRQUFRLEVBQUVDLElBQUksRUFBRUMsRUFBRSxDQUFDO1FBQzFDLENBQUMsQ0FBQztNQUNILENBQUMsTUFBTTtRQUNOLElBQUksQ0FBQ3RCLG1CQUFtQixHQUFHLENBQUMsQ0FBQztRQUM3QixPQUFPc0IsRUFBRSxLQUFLLFVBQVUsSUFBSUEsRUFBRSxFQUFFO1FBQ2hDLElBQUksQ0FBQ0ssS0FBSyxHQUFHLElBQUk7TUFDbEI7SUFDRDtFQUFDO0lBQUE7SUFBQSxPQUVELGdCQUFrQjtNQUFBLElBQWJwQixNQUFNLHVFQUFHLENBQUMsQ0FBQztNQUVmLElBQUksQ0FBQ1YsU0FBUyxDQUFDd0IsSUFBSSxDQUFDZCxNQUFNLENBQUM7TUFPM0IsT0FBTyxJQUFJO0lBQ1o7RUFBQztJQUFBO0lBQUEsT0FFRCxhQUFJZSxFQUFFLEVBQUU7TUFFUCxJQUFJLENBQUNwQixDQUFDLENBQUMwQixhQUFhLEdBQUcsSUFBSSxDQUFDL0IsU0FBUyxDQUFDZ0MsTUFBTSxFQUFFO01BQzlDLElBQUksQ0FBQzNCLENBQUMsQ0FBQzRCLEtBQUssR0FBR0MsVUFBVSxDQUFDLFlBQU07UUFDL0IsT0FBT1QsRUFBRSxLQUFLLFVBQVUsSUFBSUEsRUFBRSxFQUFFO01BQ2pDLENBQUMsRUFBRSxJQUFJLENBQUNwQixDQUFDLENBQUM4QixZQUFZLENBQUM7SUFTeEI7RUFBQztFQUFBO0FBQUE7QUFJRixJQUFNeEIsYUFBYSxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQ3JILFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFDOUcsWUFBWSxDQUNaO0FBQ0QsSUFBTXlCLGFBQWEsR0FBRyxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQztBQUNwRCxJQUFNQyxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQztBQUMzRTFCLGFBQWEsQ0FBQzJCLE1BQU0sQ0FBQ0YsYUFBYSxFQUFFQyxhQUFhLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLFVBQUFqQyxJQUFJLEVBQUk7RUFDbEVULFdBQVcsQ0FBQzJDLFNBQVMsQ0FBQ2xDLElBQUksQ0FBQyxHQUFHLFlBQWtCO0lBQUE7SUFFL0MsdUJBQUksQ0FBQ04sU0FBUyxFQUFDTSxJQUFJLENBQUMsa0NBQVM7SUFLN0IsT0FBTyxJQUFJO0VBQ1osQ0FBQztBQUNGLENBQUMsQ0FBQztBQUVLLFNBQVNKLGVBQWUsQ0FBQ3VDLE1BQU0sRUFBRTFDLEtBQUssRUFBRTtFQUM5QyxJQUFHLENBQUNBLEtBQUssRUFBRTtFQUNYMkMsWUFBWSxDQUFDM0MsS0FBSyxDQUFDa0MsS0FBSyxDQUFDO0VBQ3pCLE9BQU8sSUFBSXBDLFdBQVcsQ0FBQzRDLE1BQU0sRUFBRTFDLEtBQUssQ0FBQztBQUN0QyIsImZpbGUiOiIzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGRlZmF1bHRPcHRpb24gPSB7XG4vLyBcdGR1cmF0aW9uOiAzMDAsXG4vLyBcdHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcbi8vIFx0ZGVsYXk6IDAsXG4vLyBcdHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUgMCdcbi8vIH1cblxuXG5cbmNsYXNzIE1QQW5pbWF0aW9uIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgX3RoaXMpIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG5cdFx0Ly8g5ZyoaU9TMTArUVHlsI/nqIvluo/lubPlj7DkuIvvvIzkvKDnu5nljp/nlJ/nmoTlr7nosaHkuIDlrprmmK/kuKrmma7pgJrlr7nosaHogIzkuI3mmK9Qcm94eeWvueixoe+8jOWQpuWImeS8muaKpXBhcmFtZXRlciBzaG91bGQgYmUgT2JqZWN0IGluc3RlYWQgb2YgUHJveHlPYmplY3TnmoTplJnor69cblx0XHR0aGlzLmFuaW1hdGlvbiA9IHVuaS5jcmVhdGVBbmltYXRpb24oe1xuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH0pXG5cdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzID0ge31cblx0XHR0aGlzLm5leHQgPSAwXG5cdFx0dGhpcy4kID0gX3RoaXNcblxuXHR9XG5cblx0X252dWVQdXNoQW5pbWF0ZXModHlwZSwgYXJncykge1xuXHRcdGxldCBhbmlPYmogPSB0aGlzLmN1cnJlbnRTdGVwQW5pbWF0ZXNbdGhpcy5uZXh0XVxuXHRcdGxldCBzdHlsZXMgPSB7fVxuXHRcdGlmICghYW5pT2JqKSB7XG5cdFx0XHRzdHlsZXMgPSB7XG5cdFx0XHRcdHN0eWxlczoge30sXG5cdFx0XHRcdGNvbmZpZzoge31cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVzID0gYW5pT2JqXG5cdFx0fVxuXHRcdGlmIChhbmltYXRlVHlwZXMxLmluY2x1ZGVzKHR5cGUpKSB7XG5cdFx0XHRpZiAoIXN0eWxlcy5zdHlsZXMudHJhbnNmb3JtKSB7XG5cdFx0XHRcdHN0eWxlcy5zdHlsZXMudHJhbnNmb3JtID0gJydcblx0XHRcdH1cblx0XHRcdGxldCB1bml0ID0gJydcblx0XHRcdGlmKHR5cGUgPT09ICdyb3RhdGUnKXtcblx0XHRcdFx0dW5pdCA9ICdkZWcnXG5cdFx0XHR9XG5cdFx0XHRzdHlsZXMuc3R5bGVzLnRyYW5zZm9ybSArPSBgJHt0eXBlfSgke2FyZ3MrdW5pdH0pIGBcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVzLnN0eWxlc1t0eXBlXSA9IGAke2FyZ3N9YFxuXHRcdH1cblx0XHR0aGlzLmN1cnJlbnRTdGVwQW5pbWF0ZXNbdGhpcy5uZXh0XSA9IHN0eWxlc1xuXHR9XG5cdF9hbmltYXRlUnVuKHN0eWxlcyA9IHt9LCBjb25maWcgPSB7fSkge1xuXHRcdGxldCByZWYgPSB0aGlzLiQuJHJlZnNbJ2FuaSddLnJlZlxuXHRcdGlmICghcmVmKSByZXR1cm5cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0bnZ1ZUFuaW1hdGlvbi50cmFuc2l0aW9uKHJlZiwge1xuXHRcdFx0XHRzdHlsZXMsXG5cdFx0XHRcdC4uLmNvbmZpZ1xuXHRcdFx0fSwgcmVzID0+IHtcblx0XHRcdFx0cmVzb2x2ZSgpXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRfbnZ1ZU5leHRBbmltYXRlKGFuaW1hdGVzLCBzdGVwID0gMCwgZm4pIHtcblx0XHRsZXQgb2JqID0gYW5pbWF0ZXNbc3RlcF1cblx0XHRpZiAob2JqKSB7XG5cdFx0XHRsZXQge1xuXHRcdFx0XHRzdHlsZXMsXG5cdFx0XHRcdGNvbmZpZ1xuXHRcdFx0fSA9IG9ialxuXHRcdFx0dGhpcy5fYW5pbWF0ZVJ1bihzdHlsZXMsIGNvbmZpZykudGhlbigoKSA9PiB7XG5cdFx0XHRcdHN0ZXAgKz0gMVxuXHRcdFx0XHR0aGlzLl9udnVlTmV4dEFuaW1hdGUoYW5pbWF0ZXMsIHN0ZXAsIGZuKVxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzID0ge31cblx0XHRcdHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBmbigpXG5cdFx0XHR0aGlzLmlzRW5kID0gdHJ1ZVxuXHRcdH1cblx0fVxuXG5cdHN0ZXAoY29uZmlnID0ge30pIHtcblxuXHRcdHRoaXMuYW5pbWF0aW9uLnN0ZXAoY29uZmlnKVxuXG5cblxuXG5cblxuXHRcdHJldHVybiB0aGlzXG5cdH1cblxuXHRydW4oZm4pIHtcblxuXHRcdHRoaXMuJC5hbmltYXRpb25EYXRhID0gdGhpcy5hbmltYXRpb24uZXhwb3J0KClcblx0XHR0aGlzLiQudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBmbigpXG5cdFx0fSwgdGhpcy4kLmR1cmF0aW9uVGltZSlcblxuXG5cblxuXG5cblxuXG5cdH1cbn1cblxuXG5jb25zdCBhbmltYXRlVHlwZXMxID0gWydtYXRyaXgnLCAnbWF0cml4M2QnLCAncm90YXRlJywgJ3JvdGF0ZTNkJywgJ3JvdGF0ZVgnLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlJywgJ3NjYWxlM2QnLFxuXHQnc2NhbGVYJywgJ3NjYWxlWScsICdzY2FsZVonLCAnc2tldycsICdza2V3WCcsICdza2V3WScsICd0cmFuc2xhdGUnLCAndHJhbnNsYXRlM2QnLCAndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJyxcblx0J3RyYW5zbGF0ZVonXG5dXG5jb25zdCBhbmltYXRlVHlwZXMyID0gWydvcGFjaXR5JywgJ2JhY2tncm91bmRDb2xvciddXG5jb25zdCBhbmltYXRlVHlwZXMzID0gWyd3aWR0aCcsICdoZWlnaHQnLCAnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ11cbmFuaW1hdGVUeXBlczEuY29uY2F0KGFuaW1hdGVUeXBlczIsIGFuaW1hdGVUeXBlczMpLmZvckVhY2godHlwZSA9PiB7XG5cdE1QQW5pbWF0aW9uLnByb3RvdHlwZVt0eXBlXSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcblxuXHRcdHRoaXMuYW5pbWF0aW9uW3R5cGVdKC4uLmFyZ3MpXG5cblxuXG5cblx0XHRyZXR1cm4gdGhpc1xuXHR9XG59KVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5pbWF0aW9uKG9wdGlvbiwgX3RoaXMpIHtcblx0aWYoIV90aGlzKSByZXR1cm5cblx0Y2xlYXJUaW1lb3V0KF90aGlzLnRpbWVyKVxuXHRyZXR1cm4gbmV3IE1QQW5pbWF0aW9uKG9wdGlvbiwgX3RoaXMpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 36 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 37 */
/*!**********************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=script&lang=js& */ 38);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXF1QixDQUFnQiwrc0JBQUcsRUFBQyIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/**\n * PopUp 弹出层\n * @description 弹出层组件，为了解决遮罩弹层的问题\n * @tutorial https://ext.dcloud.net.cn/plugin?id=329\n * @property {String} type = [top|center|bottom|left|right|message|dialog|share] 弹出方式\n * \t@value top 顶部弹出\n * \t@value center 中间弹出\n * \t@value bottom 底部弹出\n * \t@value left\t\t左侧弹出\n * \t@value right  右侧弹出\n * \t@value message 消息提示\n * \t@value dialog 对话框\n * \t@value share 底部分享示例\n * @property {Boolean} animation = [true|false] 是否开启动画\n * @property {Boolean} maskClick = [true|false] 蒙版点击是否关闭弹窗(废弃)\n * @property {Boolean} isMaskClick = [true|false] 蒙版点击是否关闭弹窗\n * @property {String}  backgroundColor 主窗口背景色\n * @property {String}  maskBackgroundColor 蒙版颜色\n * @property {Boolean} safeArea\t\t   是否适配底部安全区\n * @event {Function} change 打开关闭弹窗触发，e={show: false}\n * @event {Function} maskClick 点击遮罩触发\n */\nvar _default = {\n  name: 'uniPopup',\n  components: {},\n  emits: ['change', 'maskClick'],\n  props: {\n    // 开启动画\n    animation: {\n      type: Boolean,\n      default: true\n    },\n    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层\n    // message: 消息提示 ; dialog : 对话框\n    type: {\n      type: String,\n      default: 'center'\n    },\n    // maskClick\n    isMaskClick: {\n      type: Boolean,\n      default: null\n    },\n    // TODO 2 个版本后废弃属性 ，使用 isMaskClick\n    maskClick: {\n      type: Boolean,\n      default: null\n    },\n    backgroundColor: {\n      type: String,\n      default: 'none'\n    },\n    safeArea: {\n      type: Boolean,\n      default: true\n    },\n    maskBackgroundColor: {\n      type: String,\n      default: 'rgba(0, 0, 0, 0.4)'\n    }\n  },\n  watch: {\n    /**\n     * 监听type类型\n     */\n    type: {\n      handler: function handler(type) {\n        if (!this.config[type]) return;\n        this[this.config[type]](true);\n      },\n      immediate: true\n    },\n    isDesktop: {\n      handler: function handler(newVal) {\n        if (!this.config[newVal]) return;\n        this[this.config[this.type]](true);\n      },\n      immediate: true\n    },\n    /**\n     * 监听遮罩是否可点击\n     * @param {Object} val\n     */\n    maskClick: {\n      handler: function handler(val) {\n        this.mkclick = val;\n      },\n      immediate: true\n    },\n    isMaskClick: {\n      handler: function handler(val) {\n        this.mkclick = val;\n      },\n      immediate: true\n    },\n    // H5 下禁止底部滚动\n    showPopup: function showPopup(show) {}\n  },\n  data: function data() {\n    return {\n      duration: 300,\n      ani: [],\n      showPopup: false,\n      showTrans: false,\n      popupWidth: 0,\n      popupHeight: 0,\n      config: {\n        top: 'top',\n        bottom: 'bottom',\n        center: 'center',\n        left: 'left',\n        right: 'right',\n        message: 'top',\n        dialog: 'center',\n        share: 'bottom'\n      },\n      maskClass: {\n        position: 'fixed',\n        bottom: 0,\n        top: 0,\n        left: 0,\n        right: 0,\n        backgroundColor: 'rgba(0, 0, 0, 0.4)'\n      },\n      transClass: {\n        position: 'fixed',\n        left: 0,\n        right: 0\n      },\n      maskShow: true,\n      mkclick: true,\n      popupstyle: this.isDesktop ? 'fixforpc-top' : 'top'\n    };\n  },\n  computed: {\n    isDesktop: function isDesktop() {\n      return this.popupWidth >= 500 && this.popupHeight >= 500;\n    },\n    bg: function bg() {\n      if (this.backgroundColor === '' || this.backgroundColor === 'none') {\n        return 'transparent';\n      }\n      return this.backgroundColor;\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n    var fixSize = function fixSize() {\n      var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),\n        windowWidth = _uni$getSystemInfoSyn.windowWidth,\n        windowHeight = _uni$getSystemInfoSyn.windowHeight,\n        windowTop = _uni$getSystemInfoSyn.windowTop,\n        safeArea = _uni$getSystemInfoSyn.safeArea,\n        screenHeight = _uni$getSystemInfoSyn.screenHeight,\n        safeAreaInsets = _uni$getSystemInfoSyn.safeAreaInsets;\n      _this.popupWidth = windowWidth;\n      _this.popupHeight = windowHeight + (windowTop || 0);\n      // TODO fix by mehaotian 是否适配底部安全区 ,目前微信ios 、和 app ios 计算有差异，需要框架修复\n      if (safeArea && _this.safeArea) {\n        _this.safeAreaInsets = safeAreaInsets.bottom;\n      } else {\n        _this.safeAreaInsets = 0;\n      }\n    };\n    fixSize();\n  },\n  // TODO vue2\n  destroyed: function destroyed() {\n    this.setH5Visible();\n  },\n  created: function created() {\n    // this.mkclick =  this.isMaskClick || this.maskClick\n    if (this.isMaskClick === null && this.maskClick === null) {\n      this.mkclick = true;\n    } else {\n      this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;\n    }\n    if (this.animation) {\n      this.duration = 300;\n    } else {\n      this.duration = 0;\n    }\n    // TODO 处理 message 组件生命周期异常的问题\n    this.messageChild = null;\n    // TODO 解决头条冒泡的问题\n    this.clearPropagation = false;\n    this.maskClass.backgroundColor = this.maskBackgroundColor;\n  },\n  methods: {\n    setH5Visible: function setH5Visible() {},\n    /**\n     * 公用方法，不显示遮罩层\n     */\n    closeMask: function closeMask() {\n      this.maskShow = false;\n    },\n    /**\n     * 公用方法，遮罩层禁止点击\n     */\n    disableMask: function disableMask() {\n      this.mkclick = false;\n    },\n    // TODO nvue 取消冒泡\n    clear: function clear(e) {\n      e.stopPropagation();\n      this.clearPropagation = true;\n    },\n    open: function open(direction) {\n      // fix by mehaotian 处理快速打开关闭的情况\n      if (this.showPopup) {\n        return;\n      }\n      var innerType = ['top', 'center', 'bottom', 'left', 'right', 'message', 'dialog', 'share'];\n      if (!(direction && innerType.indexOf(direction) !== -1)) {\n        direction = this.type;\n      }\n      if (!this.config[direction]) {\n        __f__(\"error\", '缺少类型：', direction, \" at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:279\");\n        return;\n      }\n      this[this.config[direction]]();\n      this.$emit('change', {\n        show: true,\n        type: direction\n      });\n    },\n    close: function close(type) {\n      var _this2 = this;\n      this.showTrans = false;\n      this.$emit('change', {\n        show: false,\n        type: this.type\n      });\n      clearTimeout(this.timer);\n      // // 自定义关闭事件\n      // this.customOpen && this.customClose()\n      this.timer = setTimeout(function () {\n        _this2.showPopup = false;\n      }, 300);\n    },\n    // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容\n    touchstart: function touchstart() {\n      this.clearPropagation = false;\n    },\n    onTap: function onTap() {\n      if (this.clearPropagation) {\n        // fix by mehaotian 兼容 nvue\n        this.clearPropagation = false;\n        return;\n      }\n      this.$emit('maskClick');\n      if (!this.mkclick) return;\n      this.close();\n    },\n    /**\n     * 顶部弹出样式处理\n     */\n    top: function top(type) {\n      var _this3 = this;\n      this.popupstyle = this.isDesktop ? 'fixforpc-top' : 'top';\n      this.ani = ['slide-top'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        right: 0,\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n      this.$nextTick(function () {\n        if (_this3.messageChild && _this3.type === 'message') {\n          _this3.messageChild.timerClose();\n        }\n      });\n    },\n    /**\n     * 底部弹出样式处理\n     */\n    bottom: function bottom(type) {\n      this.popupstyle = 'bottom';\n      this.ani = ['slide-bottom'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        right: 0,\n        bottom: 0,\n        paddingBottom: this.safeAreaInsets + 'px',\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    /**\n     * 中间弹出样式处理\n     */\n    center: function center(type) {\n      this.popupstyle = 'center';\n      this.ani = ['zoom-out', 'fade'];\n      this.transClass = {\n        position: 'fixed',\n        display: 'flex',\n        flexDirection: 'column',\n        bottom: 0,\n        left: 0,\n        right: 0,\n        top: 0,\n        justifyContent: 'center',\n        alignItems: 'center'\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    left: function left(type) {\n      this.popupstyle = 'left';\n      this.ani = ['slide-left'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        bottom: 0,\n        top: 0,\n        backgroundColor: this.bg,\n        display: 'flex',\n        flexDirection: 'column'\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    right: function right(type) {\n      this.popupstyle = 'right';\n      this.ani = ['slide-right'];\n      this.transClass = {\n        position: 'fixed',\n        bottom: 0,\n        right: 0,\n        top: 0,\n        backgroundColor: this.bg,\n        display: 'flex',\n        flexDirection: 'column'\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWUiXSwibmFtZXMiOlsibmFtZSIsImNvbXBvbmVudHMiLCJlbWl0cyIsInByb3BzIiwiYW5pbWF0aW9uIiwidHlwZSIsImRlZmF1bHQiLCJpc01hc2tDbGljayIsIm1hc2tDbGljayIsImJhY2tncm91bmRDb2xvciIsInNhZmVBcmVhIiwibWFza0JhY2tncm91bmRDb2xvciIsIndhdGNoIiwiaGFuZGxlciIsImltbWVkaWF0ZSIsImlzRGVza3RvcCIsInNob3dQb3B1cCIsImRhdGEiLCJkdXJhdGlvbiIsImFuaSIsInNob3dUcmFucyIsInBvcHVwV2lkdGgiLCJwb3B1cEhlaWdodCIsImNvbmZpZyIsInRvcCIsImJvdHRvbSIsImNlbnRlciIsImxlZnQiLCJyaWdodCIsIm1lc3NhZ2UiLCJkaWFsb2ciLCJzaGFyZSIsIm1hc2tDbGFzcyIsInBvc2l0aW9uIiwidHJhbnNDbGFzcyIsIm1hc2tTaG93IiwibWtjbGljayIsInBvcHVwc3R5bGUiLCJjb21wdXRlZCIsImJnIiwibW91bnRlZCIsInVuaSIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0Iiwid2luZG93VG9wIiwic2NyZWVuSGVpZ2h0Iiwic2FmZUFyZWFJbnNldHMiLCJmaXhTaXplIiwiZGVzdHJveWVkIiwiY3JlYXRlZCIsIm1ldGhvZHMiLCJzZXRINVZpc2libGUiLCJjbG9zZU1hc2siLCJkaXNhYmxlTWFzayIsImNsZWFyIiwiZSIsIm9wZW4iLCJkaXJlY3Rpb24iLCJzaG93IiwiY2xvc2UiLCJjbGVhclRpbWVvdXQiLCJ0b3VjaHN0YXJ0Iiwib25UYXAiLCJwYWRkaW5nQm90dG9tIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQSxlQXVCQTtFQUNBQTtFQUNBQyxhQUlBO0VBQ0FDO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQUQ7TUFDQUE7TUFDQUM7SUFDQTtJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO0lBQ0E7SUFDQTtJQUNBRTtNQUNBSDtNQUNBQztJQUNBO0lBQ0FHO01BQ0FKO01BQ0FDO0lBQ0E7SUFDQUk7TUFDQUw7TUFDQUM7SUFDQTtJQUNBSztNQUNBTjtNQUNBQztJQUNBO0VBQ0E7RUFFQU07SUFDQTtBQUNBO0FBQ0E7SUFDQVA7TUFDQVE7UUFDQTtRQUNBO01BQ0E7TUFDQUM7SUFDQTtJQUNBQztNQUNBRjtRQUNBO1FBQ0E7TUFDQTtNQUNBQztJQUNBO0lBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQU47TUFDQUs7UUFDQTtNQUNBO01BQ0FDO0lBQ0E7SUFDQVA7TUFDQU07UUFDQTtNQUNBO01BQ0FDO0lBQ0E7SUFDQTtJQUNBRSxxQ0FLQTtFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUg7TUFDQUk7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBQztRQUNBQztRQUNBUjtRQUNBRDtRQUNBRztRQUNBQztRQUNBbkI7TUFDQTtNQUNBeUI7UUFDQUQ7UUFDQU47UUFDQUM7TUFDQTtNQUNBTztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQXZCO01BQ0E7SUFDQTtJQUNBd0I7TUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFBQTtJQUNBO01BQ0EsNEJBT0FDO1FBTkFDO1FBQ0FDO1FBQ0FDO1FBQ0FsQztRQUNBbUM7UUFDQUM7TUFFQTtNQUNBO01BQ0E7TUFDQTtRQUtBO01BRUE7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7RUFPQTtFQUVBO0VBQ0FDO0lBQ0E7RUFDQTtFQVFBQztJQUNBO0lBQ0E7TUFDQTtJQUNBO01BQ0E7SUFDQTtJQUNBO01BQ0E7SUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUMsdUNBS0E7SUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BRUFDO01BRUE7SUFDQTtJQUVBQztNQUNBO01BQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBQztNQUNBO01BQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0FDO1FBQ0FyRDtNQUNBO0lBQ0E7SUFDQXNEO01BQUE7TUFDQTtNQUNBO1FBQ0FEO1FBQ0FyRDtNQUNBO01BQ0F1RDtNQUNBO01BQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUVBQztNQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBdEM7TUFBQTtNQUNBO01BQ0E7TUFDQTtRQUNBUztRQUNBTjtRQUNBQztRQUNBbkI7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FnQjtNQUNBO01BQ0E7TUFDQTtRQUNBUTtRQUNBTjtRQUNBQztRQUNBSDtRQUNBc0M7UUFDQXREO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FpQjtNQUNBO01BQ0E7TUFDQTtRQUNBTztRQUVBK0I7UUFDQUM7UUFFQXhDO1FBQ0FFO1FBQ0FDO1FBQ0FKO1FBQ0EwQztRQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBeEM7TUFDQTtNQUNBO01BQ0E7UUFDQU07UUFDQU47UUFDQUY7UUFDQUQ7UUFDQWY7UUFFQXVEO1FBQ0FDO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FyQztNQUNBO01BQ0E7TUFDQTtRQUNBSztRQUNBUjtRQUNBRztRQUNBSjtRQUNBZjtRQUVBdUQ7UUFDQUM7TUFFQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiMzguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IHYtaWY9XCJzaG93UG9wdXBcIiBjbGFzcz1cInVuaS1wb3B1cFwiIDpjbGFzcz1cIltwb3B1cHN0eWxlLCBpc0Rlc2t0b3AgPyAnZml4Zm9ycGMtei1pbmRleCcgOiAnJ11cIj5cblx0XHQ8dmlldyBAdG91Y2hzdGFydD1cInRvdWNoc3RhcnRcIj5cblx0XHRcdDx1bmktdHJhbnNpdGlvbiBrZXk9XCIxXCIgdi1pZj1cIm1hc2tTaG93XCIgbmFtZT1cIm1hc2tcIiBtb2RlLWNsYXNzPVwiZmFkZVwiIDpzdHlsZXM9XCJtYXNrQ2xhc3NcIlxuXHRcdFx0XHQ6ZHVyYXRpb249XCJkdXJhdGlvblwiIDpzaG93PVwic2hvd1RyYW5zXCIgQGNsaWNrPVwib25UYXBcIiAvPlxuXHRcdFx0PHVuaS10cmFuc2l0aW9uIGtleT1cIjJcIiA6bW9kZS1jbGFzcz1cImFuaVwiIG5hbWU9XCJjb250ZW50XCIgOnN0eWxlcz1cInRyYW5zQ2xhc3NcIiA6ZHVyYXRpb249XCJkdXJhdGlvblwiXG5cdFx0XHRcdDpzaG93PVwic2hvd1RyYW5zXCIgQGNsaWNrPVwib25UYXBcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktcG9wdXBfX3dyYXBwZXJcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogYmcgfVwiIDpjbGFzcz1cIltwb3B1cHN0eWxlXVwiIEBjbGljaz1cImNsZWFyXCI+XG5cdFx0XHRcdFx0PHNsb3QgLz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC91bmktdHJhbnNpdGlvbj5cblx0XHQ8L3ZpZXc+XG5cdFx0PCEtLSAjaWZkZWYgSDUgLS0+XG5cdFx0PGtleXByZXNzIHYtaWY9XCJtYXNrU2hvd1wiIEBlc2M9XCJvblRhcFwiIC8+XG5cdFx0PCEtLSAjZW5kaWYgLS0+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdC8vICNpZmRlZiBINVxuXHRpbXBvcnQga2V5cHJlc3MgZnJvbSAnLi9rZXlwcmVzcy5qcydcblx0Ly8gI2VuZGlmXG5cblx0LyoqXG5cdCAqIFBvcFVwIOW8ueWHuuWxglxuXHQgKiBAZGVzY3JpcHRpb24g5by55Ye65bGC57uE5Lu277yM5Li65LqG6Kej5Yaz6YGu572p5by55bGC55qE6Zeu6aKYXG5cdCAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD0zMjlcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgPSBbdG9wfGNlbnRlcnxib3R0b218bGVmdHxyaWdodHxtZXNzYWdlfGRpYWxvZ3xzaGFyZV0g5by55Ye65pa55byPXG5cdCAqIFx0QHZhbHVlIHRvcCDpobbpg6jlvLnlh7pcblx0ICogXHRAdmFsdWUgY2VudGVyIOS4remXtOW8ueWHulxuXHQgKiBcdEB2YWx1ZSBib3R0b20g5bqV6YOo5by55Ye6XG5cdCAqIFx0QHZhbHVlIGxlZnRcdFx05bem5L6n5by55Ye6XG5cdCAqIFx0QHZhbHVlIHJpZ2h0ICDlj7PkvqflvLnlh7pcblx0ICogXHRAdmFsdWUgbWVzc2FnZSDmtojmga/mj5DnpLpcblx0ICogXHRAdmFsdWUgZGlhbG9nIOWvueivneahhlxuXHQgKiBcdEB2YWx1ZSBzaGFyZSDlupXpg6jliIbkuqvnpLrkvotcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBhbmltYXRpb24gPSBbdHJ1ZXxmYWxzZV0g5piv5ZCm5byA5ZCv5Yqo55S7XG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbWFza0NsaWNrID0gW3RydWV8ZmFsc2VdIOiSmeeJiOeCueWHu+aYr+WQpuWFs+mXreW8ueeqlyjlup/lvIMpXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gaXNNYXNrQ2xpY2sgPSBbdHJ1ZXxmYWxzZV0g6JKZ54mI54K55Ye75piv5ZCm5YWz6Zet5by556qXXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSAgYmFja2dyb3VuZENvbG9yIOS4u+eql+WPo+iDjOaZr+iJslxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gIG1hc2tCYWNrZ3JvdW5kQ29sb3Ig6JKZ54mI6aKc6ImyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2FmZUFyZWFcdFx0ICAg5piv5ZCm6YCC6YWN5bqV6YOo5a6J5YWo5Yy6XG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGNoYW5nZSDmiZPlvIDlhbPpl63lvLnnqpfop6blj5HvvIxlPXtzaG93OiBmYWxzZX1cblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gbWFza0NsaWNrIOeCueWHu+mBrue9qeinpuWPkVxuXHQgKi9cblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ3VuaVBvcHVwJyxcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHQvLyAjaWZkZWYgSDVcblx0XHRcdGtleXByZXNzXG5cdFx0XHQvLyAjZW5kaWZcblx0XHR9LFxuXHRcdGVtaXRzOiBbJ2NoYW5nZScsICdtYXNrQ2xpY2snXSxcblx0XHRwcm9wczoge1xuXHRcdFx0Ly8g5byA5ZCv5Yqo55S7XG5cdFx0XHRhbmltYXRpb246IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdC8vIOW8ueWHuuWxguexu+Wei++8jOWPr+mAieWAvO+8jHRvcDog6aG26YOo5by55Ye65bGC77ybYm90dG9t77ya5bqV6YOo5by55Ye65bGC77ybY2VudGVy77ya5YWo5bGP5by55Ye65bGCXG5cdFx0XHQvLyBtZXNzYWdlOiDmtojmga/mj5DnpLogOyBkaWFsb2cgOiDlr7nor53moYZcblx0XHRcdHR5cGU6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnY2VudGVyJ1xuXHRcdFx0fSxcblx0XHRcdC8vIG1hc2tDbGlja1xuXHRcdFx0aXNNYXNrQ2xpY2s6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogbnVsbFxuXHRcdFx0fSxcblx0XHRcdC8vIFRPRE8gMiDkuKrniYjmnKzlkI7lup/lvIPlsZ7mgKcg77yM5L2/55SoIGlzTWFza0NsaWNrXG5cdFx0XHRtYXNrQ2xpY2s6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogbnVsbFxuXHRcdFx0fSxcblx0XHRcdGJhY2tncm91bmRDb2xvcjoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICdub25lJ1xuXHRcdFx0fSxcblx0XHRcdHNhZmVBcmVhOiB7XG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRtYXNrQmFja2dyb3VuZENvbG9yOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJ3JnYmEoMCwgMCwgMCwgMC40KSdcblx0XHRcdH0sXG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIOebkeWQrHR5cGXnsbvlnotcblx0XHRcdCAqL1xuXHRcdFx0dHlwZToge1xuXHRcdFx0XHRoYW5kbGVyOiBmdW5jdGlvbih0eXBlKSB7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLmNvbmZpZ1t0eXBlXSkgcmV0dXJuXG5cdFx0XHRcdFx0dGhpc1t0aGlzLmNvbmZpZ1t0eXBlXV0odHJ1ZSlcblx0XHRcdFx0fSxcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0aXNEZXNrdG9wOiB7XG5cdFx0XHRcdGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1ZhbCkge1xuXHRcdFx0XHRcdGlmICghdGhpcy5jb25maWdbbmV3VmFsXSkgcmV0dXJuXG5cdFx0XHRcdFx0dGhpc1t0aGlzLmNvbmZpZ1t0aGlzLnR5cGVdXSh0cnVlKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWVcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIOebkeWQrOmBrue9qeaYr+WQpuWPr+eCueWHu1xuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IHZhbFxuXHRcdFx0ICovXG5cdFx0XHRtYXNrQ2xpY2s6IHtcblx0XHRcdFx0aGFuZGxlcjogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHRcdFx0dGhpcy5ta2NsaWNrID0gdmFsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdGlzTWFza0NsaWNrOiB7XG5cdFx0XHRcdGhhbmRsZXI6IGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0XHRcdHRoaXMubWtjbGljayA9IHZhbFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWVcblx0XHRcdH0sXG5cdFx0XHQvLyBINSDkuIvnpoHmraLlupXpg6jmu5rliqhcblx0XHRcdHNob3dQb3B1cChzaG93KSB7XG5cdFx0XHRcdC8vICNpZmRlZiBINVxuXHRcdFx0XHQvLyBmaXggYnkgbWVoYW90aWFuIOWkhOeQhiBoNSDmu5rliqjnqb/pgI/nmoTpl67pophcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5zdHlsZS5vdmVyZmxvdyA9IHNob3cgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1xuXHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkdXJhdGlvbjogMzAwLFxuXHRcdFx0XHRhbmk6IFtdLFxuXHRcdFx0XHRzaG93UG9wdXA6IGZhbHNlLFxuXHRcdFx0XHRzaG93VHJhbnM6IGZhbHNlLFxuXHRcdFx0XHRwb3B1cFdpZHRoOiAwLFxuXHRcdFx0XHRwb3B1cEhlaWdodDogMCxcblx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0dG9wOiAndG9wJyxcblx0XHRcdFx0XHRib3R0b206ICdib3R0b20nLFxuXHRcdFx0XHRcdGNlbnRlcjogJ2NlbnRlcicsXG5cdFx0XHRcdFx0bGVmdDogJ2xlZnQnLFxuXHRcdFx0XHRcdHJpZ2h0OiAncmlnaHQnLFxuXHRcdFx0XHRcdG1lc3NhZ2U6ICd0b3AnLFxuXHRcdFx0XHRcdGRpYWxvZzogJ2NlbnRlcicsXG5cdFx0XHRcdFx0c2hhcmU6ICdib3R0b20nXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1hc2tDbGFzczoge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdGJvdHRvbTogMCxcblx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHRyaWdodDogMCxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNCknXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRyYW5zQ2xhc3M6IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdHJpZ2h0OiAwXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1hc2tTaG93OiB0cnVlLFxuXHRcdFx0XHRta2NsaWNrOiB0cnVlLFxuXHRcdFx0XHRwb3B1cHN0eWxlOiB0aGlzLmlzRGVza3RvcCA/ICdmaXhmb3JwYy10b3AnIDogJ3RvcCdcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRpc0Rlc2t0b3AoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnBvcHVwV2lkdGggPj0gNTAwICYmIHRoaXMucG9wdXBIZWlnaHQgPj0gNTAwXG5cdFx0XHR9LFxuXHRcdFx0YmcoKSB7XG5cdFx0XHRcdGlmICh0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJycgfHwgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPT09ICdub25lJykge1xuXHRcdFx0XHRcdHJldHVybiAndHJhbnNwYXJlbnQnXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtb3VudGVkKCkge1xuXHRcdFx0Y29uc3QgZml4U2l6ZSA9ICgpID0+IHtcblx0XHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRcdHdpbmRvd1dpZHRoLFxuXHRcdFx0XHRcdHdpbmRvd0hlaWdodCxcblx0XHRcdFx0XHR3aW5kb3dUb3AsXG5cdFx0XHRcdFx0c2FmZUFyZWEsXG5cdFx0XHRcdFx0c2NyZWVuSGVpZ2h0LFxuXHRcdFx0XHRcdHNhZmVBcmVhSW5zZXRzXG5cdFx0XHRcdH0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxuXHRcdFx0XHR0aGlzLnBvcHVwV2lkdGggPSB3aW5kb3dXaWR0aFxuXHRcdFx0XHR0aGlzLnBvcHVwSGVpZ2h0ID0gd2luZG93SGVpZ2h0ICsgKHdpbmRvd1RvcCB8fCAwKVxuXHRcdFx0XHQvLyBUT0RPIGZpeCBieSBtZWhhb3RpYW4g5piv5ZCm6YCC6YWN5bqV6YOo5a6J5YWo5Yy6ICznm67liY3lvq7kv6Fpb3Mg44CB5ZKMIGFwcCBpb3Mg6K6h566X5pyJ5beu5byC77yM6ZyA6KaB5qGG5p625L+u5aSNXG5cdFx0XHRcdGlmIChzYWZlQXJlYSAmJiB0aGlzLnNhZmVBcmVhKSB7XG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxuXHRcdFx0XHRcdHRoaXMuc2FmZUFyZWFJbnNldHMgPSBzY3JlZW5IZWlnaHQgLSBzYWZlQXJlYS5ib3R0b21cblx0XHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdFx0XHQvLyAjaWZuZGVmIE1QLVdFSVhJTlxuXHRcdFx0XHRcdHRoaXMuc2FmZUFyZWFJbnNldHMgPSBzYWZlQXJlYUluc2V0cy5ib3R0b21cblx0XHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNhZmVBcmVhSW5zZXRzID0gMFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmaXhTaXplKClcblx0XHRcdC8vICNpZmRlZiBINVxuXHRcdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeFNpemUpXG5cdFx0XHQvLyB0aGlzLiRvbmNlKCdob29rOmJlZm9yZURlc3Ryb3knLCAoKSA9PiB7XG5cdFx0XHQvLyBcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXhTaXplKVxuXHRcdFx0Ly8gfSlcblx0XHRcdC8vICNlbmRpZlxuXHRcdH0sXG5cdFx0Ly8gI2lmbmRlZiBWVUUzXG5cdFx0Ly8gVE9ETyB2dWUyXG5cdFx0ZGVzdHJveWVkKCkge1xuXHRcdFx0dGhpcy5zZXRINVZpc2libGUoKVxuXHRcdH0sXG5cdFx0Ly8gI2VuZGlmXG5cdFx0Ly8gI2lmZGVmIFZVRTNcblx0XHQvLyBUT0RPIHZ1ZTNcblx0XHR1bm1vdW50ZWQoKSB7XG5cdFx0XHR0aGlzLnNldEg1VmlzaWJsZSgpXG5cdFx0fSxcblx0XHQvLyAjZW5kaWZcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0Ly8gdGhpcy5ta2NsaWNrID0gIHRoaXMuaXNNYXNrQ2xpY2sgfHwgdGhpcy5tYXNrQ2xpY2tcblx0XHRcdGlmICh0aGlzLmlzTWFza0NsaWNrID09PSBudWxsICYmIHRoaXMubWFza0NsaWNrID09PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMubWtjbGljayA9IHRydWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubWtjbGljayA9IHRoaXMuaXNNYXNrQ2xpY2sgIT09IG51bGwgPyB0aGlzLmlzTWFza0NsaWNrIDogdGhpcy5tYXNrQ2xpY2tcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmFuaW1hdGlvbikge1xuXHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gMzAwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gMFxuXHRcdFx0fVxuXHRcdFx0Ly8gVE9ETyDlpITnkIYgbWVzc2FnZSDnu4Tku7bnlJ/lkb3lkajmnJ/lvILluLjnmoTpl67pophcblx0XHRcdHRoaXMubWVzc2FnZUNoaWxkID0gbnVsbFxuXHRcdFx0Ly8gVE9ETyDop6PlhrPlpLTmnaHlhpLms6HnmoTpl67pophcblx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IGZhbHNlXG5cdFx0XHR0aGlzLm1hc2tDbGFzcy5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLm1hc2tCYWNrZ3JvdW5kQ29sb3Jcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHNldEg1VmlzaWJsZSgpIHtcblx0XHRcdFx0Ly8gI2lmZGVmIEg1XG5cdFx0XHRcdC8vIGZpeCBieSBtZWhhb3RpYW4g5aSE55CGIGg1IOa7muWKqOepv+mAj+eahOmXrumimFxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXG5cdFx0XHRcdC8vICNlbmRpZlxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICog5YWs55So5pa55rOV77yM5LiN5pi+56S66YGu572p5bGCXG5cdFx0XHQgKi9cblx0XHRcdGNsb3NlTWFzaygpIHtcblx0XHRcdFx0dGhpcy5tYXNrU2hvdyA9IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiDlhaznlKjmlrnms5XvvIzpga7nvanlsYLnpoHmraLngrnlh7tcblx0XHRcdCAqL1xuXHRcdFx0ZGlzYWJsZU1hc2soKSB7XG5cdFx0XHRcdHRoaXMubWtjbGljayA9IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0Ly8gVE9ETyBudnVlIOWPlua2iOWGkuazoVxuXHRcdFx0Y2xlYXIoZSkge1xuXHRcdFx0XHQvLyAjaWZuZGVmIEFQUC1OVlVFXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IHRydWVcblx0XHRcdH0sXG5cblx0XHRcdG9wZW4oZGlyZWN0aW9uKSB7XG5cdFx0XHRcdC8vIGZpeCBieSBtZWhhb3RpYW4g5aSE55CG5b+r6YCf5omT5byA5YWz6Zet55qE5oOF5Ya1XG5cdFx0XHRcdGlmICh0aGlzLnNob3dQb3B1cCkge1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBpbm5lclR5cGUgPSBbJ3RvcCcsICdjZW50ZXInLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnLCAnbWVzc2FnZScsICdkaWFsb2cnLCAnc2hhcmUnXVxuXHRcdFx0XHRpZiAoIShkaXJlY3Rpb24gJiYgaW5uZXJUeXBlLmluZGV4T2YoZGlyZWN0aW9uKSAhPT0gLTEpKSB7XG5cdFx0XHRcdFx0ZGlyZWN0aW9uID0gdGhpcy50eXBlXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCF0aGlzLmNvbmZpZ1tkaXJlY3Rpb25dKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcign57y65bCR57G75Z6L77yaJywgZGlyZWN0aW9uKVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXNbdGhpcy5jb25maWdbZGlyZWN0aW9uXV0oKVxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0XHR0eXBlOiBkaXJlY3Rpb25cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRjbG9zZSh0eXBlKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1RyYW5zID0gZmFsc2Vcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xuXHRcdFx0XHRcdHNob3c6IGZhbHNlLFxuXHRcdFx0XHRcdHR5cGU6IHRoaXMudHlwZVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcilcblx0XHRcdFx0Ly8gLy8g6Ieq5a6a5LmJ5YWz6Zet5LqL5Lu2XG5cdFx0XHRcdC8vIHRoaXMuY3VzdG9tT3BlbiAmJiB0aGlzLmN1c3RvbUNsb3NlKClcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gZmFsc2Vcblx0XHRcdFx0fSwgMzAwKVxuXHRcdFx0fSxcblx0XHRcdC8vIFRPRE8g5aSE55CG5YaS5rOh5LqL5Lu277yM5aS05p2h55qE5YaS5rOh5LqL5Lu25pyJ6Zeu6aKYIO+8jOWFiOi/meagt+WFvOWuuVxuXHRcdFx0dG91Y2hzdGFydCgpIHtcblx0XHRcdFx0dGhpcy5jbGVhclByb3BhZ2F0aW9uID0gZmFsc2Vcblx0XHRcdH0sXG5cblx0XHRcdG9uVGFwKCkge1xuXHRcdFx0XHRpZiAodGhpcy5jbGVhclByb3BhZ2F0aW9uKSB7XG5cdFx0XHRcdFx0Ly8gZml4IGJ5IG1laGFvdGlhbiDlhbzlrrkgbnZ1ZVxuXHRcdFx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IGZhbHNlXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kZW1pdCgnbWFza0NsaWNrJylcblx0XHRcdFx0aWYgKCF0aGlzLm1rY2xpY2spIHJldHVyblxuXHRcdFx0XHR0aGlzLmNsb3NlKClcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIOmhtumDqOW8ueWHuuagt+W8j+WkhOeQhlxuXHRcdFx0ICovXG5cdFx0XHR0b3AodHlwZSkge1xuXHRcdFx0XHR0aGlzLnBvcHVwc3R5bGUgPSB0aGlzLmlzRGVza3RvcCA/ICdmaXhmb3JwYy10b3AnIDogJ3RvcCdcblx0XHRcdFx0dGhpcy5hbmkgPSBbJ3NsaWRlLXRvcCddXG5cdFx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdHJpZ2h0OiAwLFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5iZ1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xuXHRcdFx0XHRpZiAodHlwZSkgcmV0dXJuXG5cdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLm1lc3NhZ2VDaGlsZCAmJiB0aGlzLnR5cGUgPT09ICdtZXNzYWdlJykge1xuXHRcdFx0XHRcdFx0dGhpcy5tZXNzYWdlQ2hpbGQudGltZXJDbG9zZSgpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICog5bqV6YOo5by55Ye65qC35byP5aSE55CGXG5cdFx0XHQgKi9cblx0XHRcdGJvdHRvbSh0eXBlKSB7XG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdib3R0b20nXG5cdFx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1ib3R0b20nXVxuXHRcdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XG5cdFx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHRyaWdodDogMCxcblx0XHRcdFx0XHRib3R0b206IDAsXG5cdFx0XHRcdFx0cGFkZGluZ0JvdHRvbTogdGhpcy5zYWZlQXJlYUluc2V0cyArICdweCcsXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLmJnXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gVE9ETyDlhbzlrrkgdHlwZSDlsZ7mgKcg77yM5ZCO57ut5Lya5bqf5byDXG5cdFx0XHRcdGlmICh0eXBlKSByZXR1cm5cblx0XHRcdFx0dGhpcy5zaG93UG9wdXAgPSB0cnVlXG5cdFx0XHRcdHRoaXMuc2hvd1RyYW5zID0gdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICog5Lit6Ze05by55Ye65qC35byP5aSE55CGXG5cdFx0XHQgKi9cblx0XHRcdGNlbnRlcih0eXBlKSB7XG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdjZW50ZXInXG5cdFx0XHRcdHRoaXMuYW5pID0gWyd6b29tLW91dCcsICdmYWRlJ11cblx0XHRcdFx0dGhpcy50cmFuc0NsYXNzID0ge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cdFx0XHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHRcdFx0Ym90dG9tOiAwLFxuXHRcdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdFx0cmlnaHQ6IDAsXG5cdFx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xuXHRcdFx0XHRpZiAodHlwZSkgcmV0dXJuXG5cdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcblx0XHRcdH0sXG5cdFx0XHRsZWZ0KHR5cGUpIHtcblx0XHRcdFx0dGhpcy5wb3B1cHN0eWxlID0gJ2xlZnQnXG5cdFx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1sZWZ0J11cblx0XHRcdFx0dGhpcy50cmFuc0NsYXNzID0ge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdFx0Ym90dG9tOiAwLFxuXHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmcsXG5cdFx0XHRcdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuXHRcdFx0XHRcdC8qICNlbmRpZiAqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xuXHRcdFx0XHRpZiAodHlwZSkgcmV0dXJuXG5cdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcblx0XHRcdH0sXG5cdFx0XHRyaWdodCh0eXBlKSB7XG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdyaWdodCdcblx0XHRcdFx0dGhpcy5hbmkgPSBbJ3NsaWRlLXJpZ2h0J11cblx0XHRcdFx0dGhpcy50cmFuc0NsYXNzID0ge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdGJvdHRvbTogMCxcblx0XHRcdFx0XHRyaWdodDogMCxcblx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLmJnLFxuXHRcdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbidcblx0XHRcdFx0XHQvKiAjZW5kaWYgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBUT0RPIOWFvOWuuSB0eXBlIOWxnuaApyDvvIzlkI7nu63kvJrlup/lvINcblx0XHRcdFx0aWYgKHR5cGUpIHJldHVyblxuXHRcdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcblx0XHRcdFx0dGhpcy5zaG93VHJhbnMgPSB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuXHQudW5pLXBvcHVwIHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdHotaW5kZXg6IDk5O1xuXG5cdFx0LyogI2VuZGlmICovXG5cdFx0Ji50b3AsXG5cdFx0Ji5sZWZ0LFxuXHRcdCYucmlnaHQge1xuXHRcdFx0LyogI2lmZGVmIEg1ICovXG5cdFx0XHR0b3A6IHZhcigtLXdpbmRvdy10b3ApO1xuXHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHQvKiAjaWZuZGVmIEg1ICovXG5cdFx0XHR0b3A6IDA7XG5cdFx0XHQvKiAjZW5kaWYgKi9cblx0XHR9XG5cblx0XHQudW5pLXBvcHVwX193cmFwcGVyIHtcblx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdC8qIGlwaG9uZXgg562J5a6J5YWo5Yy66K6+572u77yM5bqV6YOo5a6J5YWo5Yy66YCC6YWNICovXG5cdFx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0XHQvLyBwYWRkaW5nLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG5cdFx0XHQvLyBwYWRkaW5nLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuXHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHQmLmxlZnQsXG5cdFx0XHQmLnJpZ2h0IHtcblx0XHRcdFx0LyogI2lmZGVmIEg1ICovXG5cdFx0XHRcdHBhZGRpbmctdG9wOiB2YXIoLS13aW5kb3ctdG9wKTtcblx0XHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHRcdC8qICNpZm5kZWYgSDUgKi9cblx0XHRcdFx0cGFkZGluZy10b3A6IDA7XG5cdFx0XHRcdC8qICNlbmRpZiAqL1xuXHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5maXhmb3JwYy16LWluZGV4IHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ei1pbmRleDogOTk5O1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XG5cblx0LmZpeGZvcnBjLXRvcCB7XG5cdFx0dG9wOiAwO1xuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!***********************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_popup_dialog_vue_vue_type_template_id_6f54520a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup-dialog.vue?vue&type=template&id=6f54520a& */ 40);\n/* harmony import */ var _uni_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup-dialog.vue?vue&type=script&lang=js& */ 42);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_popup_dialog_vue_vue_type_template_id_6f54520a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_popup_dialog_vue_vue_type_template_id_6f54520a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_popup_dialog_vue_vue_type_template_id_6f54520a___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1wb3B1cC1kaWFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZmNTQ1MjBhJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXBvcHVwLWRpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1wb3B1cC1kaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3VuaS1wb3B1cC9jb21wb25lbnRzL3VuaS1wb3B1cC1kaWFsb2cvdW5pLXBvcHVwLWRpYWxvZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue?vue&type=template&id=6f54520a& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_dialog_vue_vue_type_template_id_6f54520a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-dialog.vue?vue&type=template&id=6f54520a& */ 41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_dialog_vue_vue_type_template_id_6f54520a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_dialog_vue_vue_type_template_id_6f54520a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_dialog_vue_vue_type_template_id_6f54520a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_dialog_vue_vue_type_template_id_6f54520a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 41 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue?vue&type=template&id=6f54520a& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "uni-popup-dialog"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "uni-dialog-title"), attrs: { _i: 1 } },
        [
          _c(
            "text",
            {
              staticClass: _vm._$s(2, "sc", "uni-dialog-title-text"),
              class: _vm._$s(2, "c", ["uni-popup__" + _vm.dialogType]),
              attrs: { _i: 2 },
            },
            [_vm._v(_vm._$s(2, "t0-0", _vm._s(_vm.titleText)))]
          ),
        ]
      ),
      _vm._$s(3, "i", _vm.mode === "base")
        ? _c(
            "view",
            {
              staticClass: _vm._$s(3, "sc", "uni-dialog-content"),
              attrs: { _i: 3 },
            },
            [
              _vm._t(
                "default",
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(5, "sc", "uni-dialog-content-text"),
                      attrs: { _i: 5 },
                    },
                    [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.content)))]
                  ),
                ],
                { _i: 4 }
              ),
            ],
            2
          )
        : _c(
            "view",
            {
              staticClass: _vm._$s(6, "sc", "uni-dialog-content"),
              attrs: { _i: 6 },
            },
            [
              _vm._t(
                "default",
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.val,
                        expression: "val",
                      },
                    ],
                    staticClass: _vm._$s(8, "sc", "uni-dialog-input"),
                    attrs: {
                      type: _vm._$s(8, "a-type", _vm.inputType),
                      placeholder: _vm._$s(
                        8,
                        "a-placeholder",
                        _vm.placeholderText
                      ),
                      focus: _vm._$s(8, "a-focus", _vm.focus),
                      _i: 8,
                    },
                    domProps: { value: _vm._$s(8, "v-model", _vm.val) },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.val = $event.target.value
                      },
                    },
                  }),
                ],
                { _i: 7 }
              ),
            ],
            2
          ),
      _c(
        "view",
        {
          staticClass: _vm._$s(9, "sc", "uni-dialog-button-group"),
          attrs: { _i: 9 },
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(10, "sc", "uni-dialog-button"),
              attrs: { _i: 10 },
              on: { click: _vm.closeDialog },
            },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(11, "sc", "uni-dialog-button-text"),
                  attrs: { _i: 11 },
                },
                [_vm._v(_vm._$s(11, "t0-0", _vm._s(_vm.closeText)))]
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(
                12,
                "sc",
                "uni-dialog-button uni-border-left"
              ),
              attrs: { _i: 12 },
              on: { click: _vm.onOk },
            },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(
                    13,
                    "sc",
                    "uni-dialog-button-text uni-button-color"
                  ),
                  attrs: { _i: 13 },
                },
                [_vm._v(_vm._$s(13, "t0-0", _vm._s(_vm.okText)))]
              ),
            ]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 42 */
/*!************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-dialog.vue?vue&type=script&lang=js& */ 43);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTR1QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC1kaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAtZGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _popup = _interopRequireDefault(__webpack_require__(/*! ../uni-popup/popup.js */ 44));\nvar _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 45);\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../uni-popup/i18n/index.js */ 51));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar _initVueI18n = (0, _uniI18n.initVueI18n)(_index.default),\n  t = _initVueI18n.t;\n/**\n * PopUp 弹出层-对话框样式\n * @description 弹出层-对话框样式\n * @tutorial https://ext.dcloud.net.cn/plugin?id=329\n * @property {String} value input 模式下的默认值\n * @property {String} placeholder input 模式下输入提示\n * @property {String} type = [success|warning|info|error] 主题样式\n *  @value success 成功\n * \t@value warning 提示\n * \t@value info 消息\n * \t@value error 错误\n * @property {String} mode = [base|input] 模式、\n * \t@value base 基础对话框\n * \t@value input 可输入对话框\n * @property {String} content 对话框内容\n * @property {Boolean} beforeClose 是否拦截取消事件\n * @event {Function} confirm 点击确认按钮触发\n * @event {Function} close 点击取消按钮触发\n */\nvar _default = {\n  name: \"uniPopupDialog\",\n  mixins: [_popup.default],\n  emits: ['confirm', 'close'],\n  props: {\n    inputType: {\n      type: String,\n      default: 'text'\n    },\n    value: {\n      type: [String, Number],\n      default: ''\n    },\n    placeholder: {\n      type: [String, Number],\n      default: ''\n    },\n    type: {\n      type: String,\n      default: 'error'\n    },\n    mode: {\n      type: String,\n      default: 'base'\n    },\n    title: {\n      type: String,\n      default: ''\n    },\n    content: {\n      type: String,\n      default: ''\n    },\n    beforeClose: {\n      type: Boolean,\n      default: false\n    },\n    cancelText: {\n      type: String,\n      default: ''\n    },\n    confirmText: {\n      type: String,\n      default: ''\n    }\n  },\n  data: function data() {\n    return {\n      dialogType: 'error',\n      focus: false,\n      val: \"\"\n    };\n  },\n  computed: {\n    okText: function okText() {\n      return this.confirmText || t(\"uni-popup.ok\");\n    },\n    closeText: function closeText() {\n      return this.cancelText || t(\"uni-popup.cancel\");\n    },\n    placeholderText: function placeholderText() {\n      return this.placeholder || t(\"uni-popup.placeholder\");\n    },\n    titleText: function titleText() {\n      return this.title || t(\"uni-popup.title\");\n    }\n  },\n  watch: {\n    type: function type(val) {\n      this.dialogType = val;\n    },\n    mode: function mode(val) {\n      if (val === 'input') {\n        this.dialogType = 'info';\n      }\n    },\n    value: function value(val) {\n      this.val = val;\n    }\n  },\n  created: function created() {\n    // 对话框遮罩不可点击\n    this.popup.disableMask();\n    // this.popup.closeMask()\n    if (this.mode === 'input') {\n      this.dialogType = 'info';\n      this.val = this.value;\n    } else {\n      this.dialogType = this.type;\n    }\n  },\n  mounted: function mounted() {\n    this.focus = true;\n  },\n  methods: {\n    /**\n     * 点击确认按钮\n     */\n    onOk: function onOk() {\n      if (this.mode === 'input') {\n        this.$emit('confirm', this.val);\n      } else {\n        this.$emit('confirm');\n      }\n      if (this.beforeClose) return;\n      this.popup.close();\n    },\n    /**\n     * 点击取消按钮\n     */\n    closeDialog: function closeDialog() {\n      this.$emit('close');\n      if (this.beforeClose) return;\n      this.popup.close();\n    },\n    close: function close() {\n      this.popup.close();\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwLWRpYWxvZy91bmktcG9wdXAtZGlhbG9nLnZ1ZSJdLCJuYW1lcyI6WyJ0IiwibmFtZSIsIm1peGlucyIsImVtaXRzIiwicHJvcHMiLCJpbnB1dFR5cGUiLCJ0eXBlIiwiZGVmYXVsdCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJtb2RlIiwidGl0bGUiLCJjb250ZW50IiwiYmVmb3JlQ2xvc2UiLCJjYW5jZWxUZXh0IiwiY29uZmlybVRleHQiLCJkYXRhIiwiZGlhbG9nVHlwZSIsImZvY3VzIiwidmFsIiwiY29tcHV0ZWQiLCJva1RleHQiLCJjbG9zZVRleHQiLCJwbGFjZWhvbGRlclRleHQiLCJ0aXRsZVRleHQiLCJ3YXRjaCIsImNyZWF0ZWQiLCJtb3VudGVkIiwibWV0aG9kcyIsIm9uT2siLCJjbG9zZURpYWxvZyIsImNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBNEJBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtFQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBLGVBb0JBO0VBQ0FDO0VBQ0FDO0VBQ0FDO0VBQ0FDO0lBQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQUY7TUFDQUM7SUFDQTtJQUNBRTtNQUNBSDtNQUNBQztJQUNBO0lBQ0FEO01BQ0FBO01BQ0FDO0lBQ0E7SUFDQUc7TUFDQUo7TUFDQUM7SUFDQTtJQUNBSTtNQUNBTDtNQUNBQztJQUNBO0lBQ0FLO01BQ0FOO01BQ0FDO0lBQ0E7SUFDQU07TUFDQVA7TUFDQUM7SUFDQTtJQUNBTztNQUNBUjtNQUNBQztJQUNBO0lBQ0FRO01BQ0FUO01BQ0FDO0lBQ0E7RUFDQTtFQUNBUztJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBbkI7TUFDQTtJQUNBO0lBQ0FJO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUY7TUFDQTtJQUNBO0VBQ0E7RUFDQWtCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7TUFDQTtNQUNBO0lBQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiI0My5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVuaS1wb3B1cC1kaWFsb2dcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWRpYWxvZy10aXRsZVwiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1kaWFsb2ctdGl0bGUtdGV4dFwiIDpjbGFzcz1cIlsndW5pLXBvcHVwX18nK2RpYWxvZ1R5cGVdXCI+e3t0aXRsZVRleHR9fTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IHYtaWY9XCJtb2RlID09PSAnYmFzZSdcIiBjbGFzcz1cInVuaS1kaWFsb2ctY29udGVudFwiPlxyXG5cdFx0XHQ8c2xvdD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1kaWFsb2ctY29udGVudC10ZXh0XCI+e3tjb250ZW50fX08L3RleHQ+XHJcblx0XHRcdDwvc2xvdD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IHYtZWxzZSBjbGFzcz1cInVuaS1kaWFsb2ctY29udGVudFwiPlxyXG5cdFx0XHQ8c2xvdD5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJ1bmktZGlhbG9nLWlucHV0XCIgdi1tb2RlbD1cInZhbFwiIDp0eXBlPVwiaW5wdXRUeXBlXCIgOnBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJUZXh0XCIgOmZvY3VzPVwiZm9jdXNcIiA+XHJcblx0XHRcdDwvc2xvdD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWRpYWxvZy1idXR0b24tZ3JvdXBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktZGlhbG9nLWJ1dHRvblwiIEBjbGljaz1cImNsb3NlRGlhbG9nXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktZGlhbG9nLWJ1dHRvbi10ZXh0XCI+e3tjbG9zZVRleHR9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1kaWFsb2ctYnV0dG9uIHVuaS1ib3JkZXItbGVmdFwiIEBjbGljaz1cIm9uT2tcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1kaWFsb2ctYnV0dG9uLXRleHQgdW5pLWJ1dHRvbi1jb2xvclwiPnt7b2tUZXh0fX08L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgcG9wdXAgZnJvbSAnLi4vdW5pLXBvcHVwL3BvcHVwLmpzJ1xyXG5cdGltcG9ydCB7XHJcblx0aW5pdFZ1ZUkxOG5cclxuXHR9IGZyb20gJ0BkY2xvdWRpby91bmktaTE4bidcclxuXHRpbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vdW5pLXBvcHVwL2kxOG4vaW5kZXguanMnXHJcblx0Y29uc3Qge1x0dCB9ID0gaW5pdFZ1ZUkxOG4obWVzc2FnZXMpXHJcblx0LyoqXHJcblx0ICogUG9wVXAg5by55Ye65bGCLeWvueivneahhuagt+W8j1xyXG5cdCAqIEBkZXNjcmlwdGlvbiDlvLnlh7rlsYIt5a+56K+d5qGG5qC35byPXHJcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTMyOVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB2YWx1ZSBpbnB1dCDmqKHlvI/kuIvnmoTpu5jorqTlgLxcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gcGxhY2Vob2xkZXIgaW5wdXQg5qih5byP5LiL6L6T5YWl5o+Q56S6XHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgPSBbc3VjY2Vzc3x3YXJuaW5nfGluZm98ZXJyb3JdIOS4u+mimOagt+W8j1xyXG5cdCAqICBAdmFsdWUgc3VjY2VzcyDmiJDlip9cclxuXHQgKiBcdEB2YWx1ZSB3YXJuaW5nIOaPkOekulxyXG5cdCAqIFx0QHZhbHVlIGluZm8g5raI5oGvXHJcblx0ICogXHRAdmFsdWUgZXJyb3Ig6ZSZ6K+vXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IG1vZGUgPSBbYmFzZXxpbnB1dF0g5qih5byP44CBXHJcblx0ICogXHRAdmFsdWUgYmFzZSDln7rnoYDlr7nor53moYZcclxuXHQgKiBcdEB2YWx1ZSBpbnB1dCDlj6/ovpPlhaXlr7nor53moYZcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gY29udGVudCDlr7nor53moYblhoXlrrlcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGJlZm9yZUNsb3NlIOaYr+WQpuaLpuaIquWPlua2iOS6i+S7tlxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGNvbmZpcm0g54K55Ye756Gu6K6k5oyJ6ZKu6Kem5Y+RXHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gY2xvc2Ug54K55Ye75Y+W5raI5oyJ6ZKu6Kem5Y+RXHJcblx0ICovXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6IFwidW5pUG9wdXBEaWFsb2dcIixcclxuXHRcdG1peGluczogW3BvcHVwXSxcclxuXHRcdGVtaXRzOlsnY29uZmlybScsJ2Nsb3NlJ10sXHJcblx0XHRwcm9wczoge1xuXHRcdFx0aW5wdXRUeXBlOntcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAndGV4dCdcblx0XHRcdH0sXHJcblx0XHRcdHZhbHVlOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwbGFjZWhvbGRlcjoge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnZXJyb3InXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vZGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJ2Jhc2UnXHJcblx0XHRcdH0sXHJcblx0XHRcdHRpdGxlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRlbnQ6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0YmVmb3JlQ2xvc2U6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXG5cdFx0XHRjYW5jZWxUZXh0Ontcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdFx0fSxcblx0XHRcdGNvbmZpcm1UZXh0Ontcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZGlhbG9nVHlwZTogJ2Vycm9yJyxcclxuXHRcdFx0XHRmb2N1czogZmFsc2UsXHJcblx0XHRcdFx0dmFsOiBcIlwiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRva1RleHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29uZmlybVRleHQgfHwgdChcInVuaS1wb3B1cC5va1wiKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZVRleHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2FuY2VsVGV4dCB8fCB0KFwidW5pLXBvcHVwLmNhbmNlbFwiKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwbGFjZWhvbGRlclRleHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMucGxhY2Vob2xkZXIgfHwgdChcInVuaS1wb3B1cC5wbGFjZWhvbGRlclwiKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aXRsZVRleHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudGl0bGUgfHwgdChcInVuaS1wb3B1cC50aXRsZVwiKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0dHlwZSh2YWwpIHtcclxuXHRcdFx0XHR0aGlzLmRpYWxvZ1R5cGUgPSB2YWxcclxuXHRcdFx0fSxcclxuXHRcdFx0bW9kZSh2YWwpIHtcclxuXHRcdFx0XHRpZiAodmFsID09PSAnaW5wdXQnKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRpYWxvZ1R5cGUgPSAnaW5mbydcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHZhbHVlKHZhbCkge1xyXG5cdFx0XHRcdHRoaXMudmFsID0gdmFsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHQvLyDlr7nor53moYbpga7nvankuI3lj6/ngrnlh7tcclxuXHRcdFx0dGhpcy5wb3B1cC5kaXNhYmxlTWFzaygpXHJcblx0XHRcdC8vIHRoaXMucG9wdXAuY2xvc2VNYXNrKClcclxuXHRcdFx0aWYgKHRoaXMubW9kZSA9PT0gJ2lucHV0Jykge1xyXG5cdFx0XHRcdHRoaXMuZGlhbG9nVHlwZSA9ICdpbmZvJ1xyXG5cdFx0XHRcdHRoaXMudmFsID0gdGhpcy52YWx1ZVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZGlhbG9nVHlwZSA9IHRoaXMudHlwZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5mb2N1cyA9IHRydWVcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiDngrnlh7vnoa7orqTmjInpkq5cclxuXHRcdFx0ICovXHJcblx0XHRcdG9uT2soKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMubW9kZSA9PT0gJ2lucHV0Jyl7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjb25maXJtJywgdGhpcy52YWwpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjb25maXJtJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYodGhpcy5iZWZvcmVDbG9zZSkgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5wb3B1cC5jbG9zZSgpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiDngrnlh7vlj5bmtojmjInpkq5cclxuXHRcdFx0ICovXHJcblx0XHRcdGNsb3NlRGlhbG9nKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2Nsb3NlJylcclxuXHRcdFx0XHRpZih0aGlzLmJlZm9yZUNsb3NlKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLnBvcHVwLmNsb3NlKClcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xvc2UoKXtcclxuXHRcdFx0XHR0aGlzLnBvcHVwLmNsb3NlKClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiA+XHJcblx0LnVuaS1wb3B1cC1kaWFsb2cge1xyXG5cdFx0d2lkdGg6IDMwMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTFweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQudW5pLWRpYWxvZy10aXRsZSB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXRvcDogMjVweDtcclxuXHR9XHJcblxyXG5cdC51bmktZGlhbG9nLXRpdGxlLXRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHR9XHJcblxyXG5cdC51bmktZGlhbG9nLWNvbnRlbnQge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWRpYWxvZy1jb250ZW50LXRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Y29sb3I6ICM2QzZDNkM7XHJcblx0fVxyXG5cclxuXHQudW5pLWRpYWxvZy1idXR0b24tZ3JvdXAge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGJvcmRlci10b3AtY29sb3I6ICNmNWY1ZjU7XHJcblx0XHRib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci10b3Atd2lkdGg6IDFweDtcclxuXHR9XHJcblxyXG5cdC51bmktZGlhbG9nLWJ1dHRvbiB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblxyXG5cdFx0ZmxleDogMTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWJvcmRlci1sZWZ0IHtcclxuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiAjZjBmMGYwO1xyXG5cdFx0Ym9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWxlZnQtd2lkdGg6IDFweDtcclxuXHR9XHJcblxyXG5cdC51bmktZGlhbG9nLWJ1dHRvbi10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuXHJcblx0LnVuaS1idXR0b24tY29sb3Ige1xyXG5cdFx0Y29sb3I6ICMwMDdhZmY7XHJcblx0fVxyXG5cclxuXHQudW5pLWRpYWxvZy1pbnB1dCB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Ym9yZGVyOiAxcHggI2VlZSBzb2xpZDtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdHBhZGRpbmc6IDAgMTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdGNvbG9yOiAjNTU1O1xyXG5cdH1cclxuXHJcblx0LnVuaS1wb3B1cF9fc3VjY2VzcyB7XHJcblx0XHRjb2xvcjogIzRjZDk2NDtcclxuXHR9XHJcblxyXG5cdC51bmktcG9wdXBfX3dhcm4ge1xyXG5cdFx0Y29sb3I6ICNmMGFkNGU7XHJcblx0fVxyXG5cclxuXHQudW5pLXBvcHVwX19lcnJvciB7XHJcblx0XHRjb2xvcjogI2RkNTI0ZDtcclxuXHR9XHJcblxyXG5cdC51bmktcG9wdXBfX2luZm8ge1xyXG5cdFx0Y29sb3I6ICM5MDkzOTk7XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/popup.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  data: function data() {\n    return {};\n  },\n  created: function created() {\n    this.popup = this.getParent();\n  },\n  methods: {\n    /**\r\n     * 获取父元素实例\r\n     */\n    getParent: function getParent() {\n      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uniPopup';\n      var parent = this.$parent;\n      var parentName = parent.$options.name;\n      while (parentName !== name) {\n        parent = parent.$parent;\n        if (!parent) return false;\n        parentName = parent.$options.name;\n      }\n      return parent;\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwL3BvcHVwLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJjcmVhdGVkIiwicG9wdXAiLCJnZXRQYXJlbnQiLCJtZXRob2RzIiwibmFtZSIsInBhcmVudCIsIiRwYXJlbnQiLCJwYXJlbnROYW1lIiwiJG9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7OztlQUNlO0VBQ2RBLElBQUksa0JBQUc7SUFDTixPQUFPLENBRVAsQ0FBQztFQUNGLENBQUM7RUFDREMsT0FBTyxxQkFBRTtJQUNSLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQ0MsU0FBUyxFQUFFO0VBQzlCLENBQUM7RUFDREMsT0FBTyxFQUFDO0lBQ1A7QUFDRjtBQUNBO0lBQ0VELFNBQVMsdUJBQW9CO01BQUEsSUFBbkJFLElBQUksdUVBQUcsVUFBVTtNQUMxQixJQUFJQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxPQUFPO01BQ3pCLElBQUlDLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxRQUFRLENBQUNKLElBQUk7TUFDckMsT0FBT0csVUFBVSxLQUFLSCxJQUFJLEVBQUU7UUFDM0JDLE1BQU0sR0FBR0EsTUFBTSxDQUFDQyxPQUFPO1FBQ3ZCLElBQUksQ0FBQ0QsTUFBTSxFQUFFLE9BQU8sS0FBSztRQUN6QkUsVUFBVSxHQUFHRixNQUFNLENBQUNHLFFBQVEsQ0FBQ0osSUFBSTtNQUNsQztNQUNBLE9BQU9DLE1BQU07SUFDZDtFQUNEO0FBQ0QsQ0FBQztBQUFBIiwiZmlsZSI6IjQ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fSxcclxuXHRjcmVhdGVkKCl7XHJcblx0XHR0aGlzLnBvcHVwID0gdGhpcy5nZXRQYXJlbnQoKVxyXG5cdH0sXHJcblx0bWV0aG9kczp7XHJcblx0XHQvKipcclxuXHRcdCAqIOiOt+WPlueItuWFg+e0oOWunuS+i1xyXG5cdFx0ICovXHJcblx0XHRnZXRQYXJlbnQobmFtZSA9ICd1bmlQb3B1cCcpIHtcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMuJHBhcmVudDtcclxuXHRcdFx0bGV0IHBhcmVudE5hbWUgPSBwYXJlbnQuJG9wdGlvbnMubmFtZTtcclxuXHRcdFx0d2hpbGUgKHBhcmVudE5hbWUgIT09IG5hbWUpIHtcclxuXHRcdFx0XHRwYXJlbnQgPSBwYXJlbnQuJHBhcmVudDtcclxuXHRcdFx0XHRpZiAoIXBhcmVudCkgcmV0dXJuIGZhbHNlXHJcblx0XHRcdFx0cGFyZW50TmFtZSA9IHBhcmVudC4kb3B0aW9ucy5uYW1lO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwYXJlbnQ7XHJcblx0XHR9LFxyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///44\n");

/***/ }),
/* 45 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 47));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 35));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 36));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));
var isArray = Array.isArray;
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 46)))

/***/ }),
/* 46 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 47 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 48);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 49);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 32);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 50);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 48 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 49 */
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 50 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 51 */
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/i18n/index.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 52));\nvar _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 53));\nvar _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 54));\nvar _default = {\n  en: _en.default,\n  'zh-Hans': _zhHans.default,\n  'zh-Hant': _zhHant.default\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwL2kxOG4vaW5kZXguanMiXSwibmFtZXMiOlsiZW4iLCJ6aEhhbnMiLCJ6aEhhbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBbUMsZUFDcEI7RUFDZEEsRUFBRSxFQUFGQSxXQUFFO0VBQ0YsU0FBUyxFQUFFQyxlQUFNO0VBQ2pCLFNBQVMsRUFBRUM7QUFDWixDQUFDO0FBQUEiLCJmaWxlIjoiNTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZW4gZnJvbSAnLi9lbi5qc29uJ1xyXG5pbXBvcnQgemhIYW5zIGZyb20gJy4vemgtSGFucy5qc29uJ1xyXG5pbXBvcnQgemhIYW50IGZyb20gJy4vemgtSGFudC5qc29uJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZW4sXHJcblx0J3poLUhhbnMnOiB6aEhhbnMsXHJcblx0J3poLUhhbnQnOiB6aEhhbnRcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///51\n");

/***/ }),
/* 52 */
/*!********************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/i18n/en.json ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"uni-popup.cancel\\\":\\\"cancel\\\",\\\"uni-popup.ok\\\":\\\"ok\\\",\\\"uni-popup.placeholder\\\":\\\"pleace enter\\\",\\\"uni-popup.title\\\":\\\"Hint\\\",\\\"uni-popup.shareTitle\\\":\\\"Share to\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI1Mi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///52\n");

/***/ }),
/* 53 */
/*!*************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hans.json ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"uni-popup.cancel\\\":\\\"取消\\\",\\\"uni-popup.ok\\\":\\\"确定\\\",\\\"uni-popup.placeholder\\\":\\\"请输入\\\",\\\"uni-popup.title\\\":\\\"提示\\\",\\\"uni-popup.shareTitle\\\":\\\"分享到\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI1My5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///53\n");

/***/ }),
/* 54 */
/*!*************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hant.json ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"uni-popup.cancel\\\":\\\"取消\\\",\\\"uni-popup.ok\\\":\\\"確定\\\",\\\"uni-popup.placeholder\\\":\\\"請輸入\\\",\\\"uni-popup.title\\\":\\\"提示\\\",\\\"uni-popup.shareTitle\\\":\\\"分享到\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI1NC5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///54\n");

/***/ }),
/* 55 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/static/back.png ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/back.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvYmFjay5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///55\n");

/***/ }),
/* 56 */
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/static/chatGPT.png ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/chatGPT.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjU2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvY2hhdEdQVC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///56\n");

/***/ }),
/* 57 */
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/static/emoji.png ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/emoji.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvZW1vamkucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///57\n");

/***/ }),
/* 58 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/static/send.png ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/send.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjU4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvc2VuZC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///58\n");

/***/ }),
/* 59 */
/*!****************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/chatroom/chatroom.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chatroom_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chatroom.vue?vue&type=script&lang=js&mpType=page */ 60);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chatroom_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chatroom_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chatroom_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chatroom_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chatroom_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXV0QixDQUFnQix5dEJBQUcsRUFBQyIsImZpbGUiOiI1OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoYXRyb29tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaGF0cm9vbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///59\n");

/***/ }),
/* 60 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/chatroom/chatroom.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _config = __webpack_require__(/*! ../../config.js */ 15);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      roomID: '',\n      //room id\n      chatm: '',\n      //message content\n      name: '',\n      //users name\n      uname: '',\n      id: '',\n      //users id\n      friendID: '',\n      userID: 'a',\n      friendID2: '',\n      userID2: '',\n      img: '',\n      //uses img\n      chat: [],\n      //chat content \n      member: 0,\n      //member number\n      animationData: {},\n      bb: false,\n      bg: 'none',\n      users: '',\n      otochat: [],\n      groupChatMessages: [],\n      singlechat: [],\n      emojis: ['😂', '🙏', '😄', '😏', '😇', '😅', '😌', '😘', '😍', '🤓', '😜', '😎', '😊', '😳', '🙄', '😱', '😒', '😔', '😷', '👿', '🤗', '😩', '😤', '😣', '😰', '😴', '😬', '😭', '👻', '👍', '✌️', '👉', '👀', '🐶', '🐷', '😹', '⚡️', '🔥', '🌈', '🍏', '⚽️', '❤️'],\n      isShowEmoji: false,\n      cursorFocus: true,\n      scrollHeight: 0\n    };\n  },\n  computed: {\n    // filteredMessages() {\n    //   return this.groupChatMessages.filter(message => message.roomID === this.roomID);\n    // }\n  },\n  onLoad: function onLoad(e) {\n    this.name = e.name;\n    this.img = e.img;\n    this.id = e.id;\n    this.roomID = e.roomID;\n    this.join(this.name, this.img, this.id, this.roomID);\n    this.welcome();\n    this.myself();\n    this.receiveGroupMsg();\n    this.receiveAIMsg();\n    this.receiveSingleMsg();\n    this.quit();\n    this.fetchGroupChatMessages();\n    this.fetchSingleChatMessages();\n    this.scrollToBottom();\n  },\n  methods: {\n    getCursorFocus: function getCursorFocus() {\n      this.cursorFocus = false;\n    },\n    inputDialogToggle: function inputDialogToggle() {\n      var _this = this;\n      uni.request({\n        url: _config.BASE_URL + ':' + _config.SERVER_PORT + \"/membershipVerify\",\n        method: 'GET',\n        data: {\n          id: this.id\n        },\n        success: function success(res) {\n          if (res.statusCode === 200) {\n            uni.navigateTo({\n              url: '../upload/upload?roomID=' + _this.roomID\n            });\n          } else {\n            if (res.statusCode === 400 || res.statusCode === 404) {\n              uni.showToast({\n                title: res.data.message,\n                icon: 'none'\n              });\n            } else {\n              _this.$refs.inputDialog.open();\n            }\n          }\n        },\n        fail: function fail(err) {\n          __f__(\"log\", err, \" at pages/chatroom/chatroom.vue:214\");\n        }\n      });\n    },\n    //make page scroll to the bottom\n    scrollToBottom: function scrollToBottom() {\n      this.$nextTick(function () {\n        uni.pageScrollTo({\n          scrollTop: 9999999999999999,\n          duration: 100\n        });\n      });\n    },\n    singleChatScrollToBottom: function singleChatScrollToBottom() {\n      var _this2 = this;\n      this.$nextTick(function () {\n        _this2.scrollHeight += 200;\n      });\n    },\n    singleChatInitializeToBottom: function singleChatInitializeToBottom() {\n      var _this3 = this;\n      this.$nextTick(function () {\n        _this3.scrollHeight += 20000000;\n      });\n    },\n    // insert emoji\n    insertText: function insertText(emoji) {\n      this.chatm += emoji;\n      this.isShowEmoji = false;\n    },\n    // show emoji\n    showEmoji: function showEmoji(flag) {\n      this.isShowEmoji = !flag;\n    },\n    gptUpload: function gptUpload(value) {\n      var _this4 = this;\n      uni.request({\n        url: _config.BASE_URL + ':' + _config.SERVER_PORT + \"/gptVerify\",\n        method: 'POST',\n        data: {\n          id: this.id,\n          key: value\n        },\n        success: function success(res) {\n          if (res.statusCode === 200) {\n            uni.navigateTo({\n              url: '../upload/upload?roomID=' + _this4.roomID\n            });\n          } else {\n            uni.showToast({\n              title: res.data.message,\n              icon: 'none'\n            });\n          }\n        },\n        fail: function fail(err) {\n          __f__(\"log\", err, \" at pages/chatroom/chatroom.vue:268\");\n        }\n      });\n    },\n    quitRoom: function quitRoom() {\n      this.socket.emit('quitRoom', {\n        id: this.id,\n        name: this.name,\n        roomID: this.roomID\n      });\n      this.socket.emit('updateTipStatus', this.roomID);\n    },\n    disconnect: function disconnect() {\n      this.socket.disconnect();\n    },\n    timeProcess: function timeProcess(date) {\n      var time;\n      var d = new Date(date);\n      var n = new Date();\n      //get time\n      var dd = d.getTime();\n      var h = d.getHours();\n      var m = d.getMinutes();\n      var Y = d.getFullYear();\n      var M = d.getMonth() + 1;\n      var D = d.getDate();\n      //current time\n      var nn = n.getTime();\n      var hh = n.getHours();\n      var mm = n.getMinutes();\n      var YY = n.getFullYear();\n      var MM = n.getMonth() + 1;\n      var DD = n.getDate();\n      if (D == DD && M == MM && Y == YY) {\n        if (h < 10) {\n          h = '0' + h;\n        }\n        if (m < 10) {\n          m = '0' + m;\n        }\n        time = h + ':' + m;\n        return time;\n      } else if (D + 1 == DD && M == MM && Y == YY) {\n        if (h < 10) {\n          h = '0' + h;\n        }\n        if (m < 10) {\n          m = '0' + m;\n        }\n        time = 'yesterday' + ' ' + h + ':' + m;\n        return time;\n      } else {\n        if (M < 10) {\n          M = '0' + M;\n        }\n        if (D < 10) {\n          D = '0' + D;\n        }\n        if (h < 10) {\n          h = '0' + h;\n        }\n        if (m < 10) {\n          m = '0' + m;\n        }\n        time = Y + '/' + M + '/' + D + ' ' + h + ':' + m;\n        return time;\n      }\n    },\n    //send message\n    sendMsg: function sendMsg() {\n      if (this.chatm.length > 0 && this.friendID == '') {\n        var onemsg = {\n          roomID: this.roomID,\n          messageContent: this.chatm,\n          img: this.img,\n          time: new Date(),\n          id: 2,\n          senderID: this.id\n        };\n        var data = {\n          roomID: this.roomID,\n          messageContent: this.chatm,\n          img: this.img,\n          name: this.name,\n          time: new Date(),\n          id: 1,\n          senderID: this.id\n        };\n        // this.chat.push(onemsg);\n        this.groupChatMessages.push(onemsg);\n        this.chatm = ''; //clear\n        this.cursorFocus = true;\n        this.socket.emit('message', data);\n        // storage in MongoDB\n        this.saveChatToDB(data, '/groupchat'); // saving to MongoDB\n      } else if (this.chatm.length > 0 && this.friendID != '') {\n        //one to one chat\n        var _onemsg = {\n          roomID: this.roomID,\n          messageContent: this.chatm,\n          img: this.img,\n          time: new Date(),\n          fromID: this.userID,\n          toID: this.friendID,\n          fromID2: this.userID2,\n          toID2: this.friendID2\n        };\n        var _data = {\n          roomID: this.roomID,\n          messageContent: this.chatm,\n          img: this.img,\n          name: this.name,\n          time: new Date(),\n          fromID: this.userID,\n          toID: this.friendID,\n          fromID2: this.userID2,\n          toID2: this.friendID2\n        };\n        // this.otochat.push(onemsg);\n        this.singlechat.push(_onemsg);\n        this.chatm = ''; //clear chat message\n        this.cursorFocus = true;\n        this.socket.emit('msg', _data);\n        // storage in MongoDB\n        this.saveChatToDB(_data, '/singlechat');\n        this.singleChatScrollToBottom();\n      }\n      this.scrollToBottom();\n    },\n    // save chat data to MongoDB\n    saveChatToDB: function saveChatToDB(chatData, url) {\n      uni.request({\n        url: _config.BASE_URL + ':' + _config.SERVER_PORT + url,\n        // replace with your backend server url\n        data: chatData,\n        method: 'POST',\n        success: function success(res) {\n          if (res.statusCode == 200) {\n            // console.log('Chat data saved successfully!');\n          }\n        },\n        fail: function fail(err) {\n          __f__(\"error\", 'Failed to save chat data: ' + err, \" at pages/chatroom/chatroom.vue:407\");\n        }\n      });\n    },\n    //join the group\n    join: function join(name, img, id, roomID) {\n      this.socket.emit('join', name, img, id, roomID);\n    },\n    //welcome joining\n    welcome: function welcome() {\n      var _this5 = this;\n      //get the instant message socket\n      this.socket.on('welcome', function (name, users) {\n        // console.log(data)\n        // console.log('num'+len)\n        //insert the welcome message\n        var wel = {\n          name: 'welcome ' + name + ' join the group chat',\n          id: 3\n        };\n        // this.chat.push(wel);\n        _this5.groupChatMessages.push(wel);\n        for (var i = 0; i < users.length; i++) {\n          if (users[i].id == _this5.userID) {\n            users.splice(i, 1);\n          }\n        }\n        _this5.users = users;\n        // scroll to bottom automatically\n        _this5.scrollToBottom();\n        // console.log(this.users)\n      });\n    },\n    //get the message from myself\n    myself: function myself() {\n      var _this6 = this;\n      //get the instant message\n      this.socket.on('myself', function (name, users, id, userID2) {\n        // console.log(data)\n        // console.log('num'+len)\n        //insert the welcome message\n        _this6.userID = id;\n        _this6.userID2 = userID2;\n        // console.log(this.userID);\n        var myWel = {\n          name: 'welcome ' + name + ' join the group chat',\n          id: 3\n        };\n        // this.chat.push(myWel);\n        _this6.groupChatMessages.push(myWel);\n        for (var i = 0; i < users.length; i++) {\n          if (users[i].id == _this6.userID) {\n            users.splice(i, 1);\n          }\n        }\n        _this6.users = users;\n        // scroll to bottom automatically\n        _this6.scrollToBottom();\n        // console.log(this.users)\n      });\n    },\n    //quit the group message\n    quit: function quit() {\n      var _this7 = this;\n      //get the instant message from socket\n      this.socket.on('quit', function (data) {\n        //insert the quit message\n        var quit = {\n          name: data.name + ' quit the group chat',\n          id: 3\n        };\n        // this.chat.push(quit);\n        _this7.groupChatMessages.push(quit);\n\n        //this.member = len;\n        _this7.users = data.users;\n        // console.log(data.users)\n      });\n    },\n    //\n    receiveGroupMsg: function receiveGroupMsg() {\n      var _this8 = this;\n      //get the instant message from socket\n      this.socket.on('sendMsg', function (data) {\n        // this.chat.push(data);\n        _this8.groupChatMessages.push(data);\n        // scroll to bottom automatically\n        _this8.scrollToBottom();\n      });\n    },\n    // recieve the AI message\n    receiveAIMsg: function receiveAIMsg() {\n      var _this9 = this;\n      this.socket.on(\"sumbitAIMsg\", function (AIMsg) {\n        // this.chat.push(AIMsg);\n        _this9.groupChatMessages.push(AIMsg);\n        // scroll to bottom automatically\n        _this9.scrollToBottom();\n      });\n    },\n    //receive the one to one message\n    receiveSingleMsg: function receiveSingleMsg() {\n      var _this10 = this;\n      this.socket.on('sMsg', function (data) {\n        var fromID = data.fromID;\n        if (_this10.friendID != fromID) {\n          for (var i = 0; i < _this10.users.length; i++) {\n            if (_this10.users[i].id == fromID) {\n              _this10.users[i].tip = true;\n            }\n          }\n        }\n        //console.log(data);\n        // this.otochat.push(data);\n        _this10.singlechat.push(data);\n        _this10.singleChatScrollToBottom();\n      });\n    },\n    //come into the one to one chatroom\n    singleChat: function singleChat(e) {\n      this.uname = this.users[e].name;\n      this.friendID = this.users[e].id;\n      this.friendID2 = this.users[e].userID2;\n      this.users[e].tip = false;\n      this.modify();\n      this.singleChatInitializeToBottom();\n    },\n    //quit the one to one chatroom\n    outSingleChat: function outSingleChat() {\n      this.uname = '';\n      this.friendID = '';\n      this.friendID2 = '';\n      this.modify();\n    },\n    //one to one animation effect\n    modify: function modify() {\n      this.bb = !this.bb;\n      if (this.bb) {\n        this.bg = 'block';\n      } else {\n        this.bg = 'none';\n      }\n      var animation = uni.createAnimation({\n        duration: 400,\n        timingFunction: 'ease'\n      });\n      this.animation = animation;\n      if (this.bb) {\n        animation.bottom(0).step();\n      } else {\n        animation.bottom().step();\n      }\n      this.animationData = animation.export();\n    },\n    // fetch the group chat messages from the server database\n    fetchGroupChatMessages: function fetchGroupChatMessages() {\n      var _this11 = this;\n      uni.request({\n        url: _config.BASE_URL + ':' + _config.SERVER_PORT + \"/groupchat?roomID=\".concat(this.roomID),\n        method: 'GET',\n        success: function success(res) {\n          _this11.groupChatMessages = res.data;\n          // console.log(res.data);\n        },\n\n        fail: function fail(err) {\n          __f__(\"error\", 'Error fetching group chat messages:', err, \" at pages/chatroom/chatroom.vue:569\");\n        }\n      });\n    },\n    fetchSingleChatMessages: function fetchSingleChatMessages() {\n      var _this12 = this;\n      uni.request({\n        url: _config.BASE_URL + ':' + _config.SERVER_PORT + \"/singlechat?roomID=\".concat(this.roomID),\n        method: 'GET',\n        success: function success(res) {\n          _this12.singlechat = res.data;\n        },\n        fail: function fail(err) {\n          __f__(\"error\", 'Error fetching group chat messages:', err, \" at pages/chatroom/chatroom.vue:581\");\n        }\n      });\n    } // fetchGroupChatMessages() {\n    // \taxios.get(`http://129.12.211.74:30000/groupchat?roomID=${this.roomID}`)\n    // \t\t.then((res) => {\n    // \t\t\tthis.groupChatMessages = res.data;\n    // \t\t})\n    // \t\t.catch((err) => {\n    // \t\t\tconsole.error('Error fetching group chat messages:', err);\n    // \t\t});\n    // },\n    // fetchSingleChatMessages() {\n    // \taxios.get(`http://129.12.211.74:30000/singlechat?roomID=${this.roomID}`)\n    // \t\t.then((res) => {\n    // \t\t\tthis.singlechat = res.data;\n    // \t\t})\n    // \t\t.catch((err) => {\n    // \t\t\tconsole.error('Error fetching group chat messages:', err);\n    // \t\t});\n    // },\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2hhdHJvb20vY2hhdHJvb20udnVlIl0sIm5hbWVzIjpbImRhdGEiLCJyb29tSUQiLCJjaGF0bSIsIm5hbWUiLCJ1bmFtZSIsImlkIiwiZnJpZW5kSUQiLCJ1c2VySUQiLCJmcmllbmRJRDIiLCJ1c2VySUQyIiwiaW1nIiwiY2hhdCIsIm1lbWJlciIsImFuaW1hdGlvbkRhdGEiLCJiYiIsImJnIiwidXNlcnMiLCJvdG9jaGF0IiwiZ3JvdXBDaGF0TWVzc2FnZXMiLCJzaW5nbGVjaGF0IiwiZW1vamlzIiwiaXNTaG93RW1vamkiLCJjdXJzb3JGb2N1cyIsInNjcm9sbEhlaWdodCIsImNvbXB1dGVkIiwib25Mb2FkIiwibWV0aG9kcyIsImdldEN1cnNvckZvY3VzIiwiaW5wdXREaWFsb2dUb2dnbGUiLCJ1bmkiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwidGl0bGUiLCJpY29uIiwiZmFpbCIsInNjcm9sbFRvQm90dG9tIiwic2Nyb2xsVG9wIiwiZHVyYXRpb24iLCJzaW5nbGVDaGF0U2Nyb2xsVG9Cb3R0b20iLCJzaW5nbGVDaGF0SW5pdGlhbGl6ZVRvQm90dG9tIiwiaW5zZXJ0VGV4dCIsInNob3dFbW9qaSIsImdwdFVwbG9hZCIsImtleSIsInF1aXRSb29tIiwiZGlzY29ubmVjdCIsInRpbWVQcm9jZXNzIiwiaCIsIm0iLCJ0aW1lIiwiTSIsIkQiLCJzZW5kTXNnIiwibWVzc2FnZUNvbnRlbnQiLCJzZW5kZXJJRCIsImZyb21JRCIsInRvSUQiLCJmcm9tSUQyIiwidG9JRDIiLCJzYXZlQ2hhdFRvREIiLCJqb2luIiwid2VsY29tZSIsIm15c2VsZiIsInF1aXQiLCJyZWNlaXZlR3JvdXBNc2ciLCJyZWNlaXZlQUlNc2ciLCJyZWNlaXZlU2luZ2xlTXNnIiwic2luZ2xlQ2hhdCIsIm91dFNpbmdsZUNoYXQiLCJtb2RpZnkiLCJ0aW1pbmdGdW5jdGlvbiIsImFuaW1hdGlvbiIsImZldGNoR3JvdXBDaGF0TWVzc2FnZXMiLCJmZXRjaFNpbmdsZUNoYXRNZXNzYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBcUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0E7RUFDQUE7SUFDQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUNBQztNQUFBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7SUFDQTtFQUFBLENBQ0E7RUFFQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQS9CO1VBQ0FLO1FBQ0E7UUFDQTJCO1VBQ0E7WUFDQUg7Y0FDQUM7WUFDQTtVQUNBO1lBQ0E7Y0FDQUQ7Z0JBQ0FJO2dCQUNBQztjQUNBO1lBQ0EsT0FDQTtjQUNBO1lBQ0E7VUFDQTtRQUNBO1FBQ0FDO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO1FBQ0FQO1VBQ0FRO1VBQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0FkO1FBQ0FDO1FBQ0FDO1FBQ0EvQjtVQUNBSztVQUNBdUM7UUFDQTtRQUNBWjtVQUNBO1lBQ0FIO2NBQ0FDO1lBQ0E7VUFDQTtZQUVBRDtjQUNBSTtjQUNBQztZQUNBO1VBQ0E7UUFDQTtRQUNBQztVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FVO01BQ0E7UUFBQXhDO1FBQUFGO1FBQUFGO01BQUE7TUFDQTtJQUNBO0lBQ0E2QztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BRUE7UUFDQTtVQUNBQztRQUNBO1FBQ0E7VUFDQUM7UUFDQTtRQUNBQztRQUNBO01BQ0E7UUFDQTtVQUNBRjtRQUNBO1FBQ0E7VUFDQUM7UUFDQTtRQUNBQztRQUNBO01BQ0E7UUFDQTtVQUNBQztRQUNBO1FBQ0E7VUFDQUM7UUFDQTtRQUNBO1VBQ0FKO1FBQ0E7UUFDQTtVQUNBQztRQUNBO1FBQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUc7TUFDQTtRQUNBO1VBQ0FwRDtVQUNBcUQ7VUFDQTVDO1VBQ0F3QztVQUNBN0M7VUFDQWtEO1FBQ0E7UUFDQTtVQUNBdEQ7VUFDQXFEO1VBQ0E1QztVQUNBUDtVQUNBK0M7VUFDQTdDO1VBQ0FrRDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFFQTtRQUNBO1FBQ0E7VUFDQXREO1VBQ0FxRDtVQUNBNUM7VUFDQXdDO1VBQ0FNO1VBQ0FDO1VBQ0FDO1VBQ0FDO1FBQ0E7UUFDQTtVQUNBMUQ7VUFDQXFEO1VBQ0E1QztVQUNBUDtVQUNBK0M7VUFDQU07VUFDQUM7VUFDQUM7VUFDQUM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBL0I7UUFDQUM7UUFBQTtRQUNBOUI7UUFDQStCO1FBQ0FDO1VBQ0E7WUFDQTtVQUFBO1FBRUE7UUFDQUc7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0EwQjtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7TUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1VBQ0EzRDtVQUNBRTtRQUNBO1FBQ0E7UUFDQTtRQUVBO1VBQ0E7WUFDQVc7VUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQStDO01BQUE7TUFDQTtNQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7VUFDQTVEO1VBQ0FFO1FBQ0E7UUFDQTtRQUNBO1FBRUE7VUFDQTtZQUNBVztVQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBZ0Q7TUFBQTtNQUNBO01BQ0E7UUFDQTtRQUNBO1VBQ0E3RDtVQUNBRTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQTREO01BQUE7TUFDQTtNQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUVBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBO1FBQ0E7UUFDQTtVQUNBO1lBQ0E7Y0FDQTtZQUNBO1VBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0FoQztRQUNBaUM7TUFDQTtNQUNBO01BQ0E7UUFDQUM7TUFFQTtRQUNBQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTVDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1VBQ0E7VUFDQTtRQUNBOztRQUNBRztVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0F1QztNQUFBO01BQ0E3QztRQUNBQztRQUNBQztRQUNBQztVQUNBO1FBQ0E7UUFDQUc7VUFDQTtRQUNBO01BQ0E7SUFDQSxFQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiI2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDwhLS0gc3RhdHVzIGp1ZGdlbWVudCAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwic3RhdHVzLWJhclwiPlxyXG5cdFx0XHQ8IS0tIHF1aXQgZ3JvdXAgY2hhdCBhbmQgYmFjayB0byBpbmRleCBwYWdlIC0tPlxyXG5cdFx0XHQ8bmF2aWdhdG9yIG9wZW4tdHlwZT1cIm5hdmlnYXRlQmFja1wiIGNsYXNzPVwibG9naW4tY1wiIGhvdmVyLWNsYXNzPVwibm9uZVwiIEB0YXA9XCJxdWl0Um9vbVwiPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvYmFjay5wbmdcIiBjbGFzcz1cImxvZ2luLWJhY2tcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L25hdmlnYXRvcj5cclxuXHRcdFx0PCEtLSBxdWl0IHRoZSBjaGF0cm9vbSAtLT5cclxuXHRcdFx0PCEtLSA8dmlldyBjbGFzcz1cImxvZ2luLWNcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2JhY2sucG5nXCIgY2xhc3M9XCJsb2dpbi1iYWNrXCIgQHRhcD1cImJhY2tUb0luZGV4XCI+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PiAtLT5cclxuXHRcdFx0PCEtLSBzY3JvbGwgYmFyIC0tPlxyXG5cdFx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXg9XCJ0cnVlXCIgY2xhc3M9XCJzY3JvbGx2XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2Vyc1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgdi1mb3I9XCIoZSwgaW5kZXgpIGluIHVzZXJzXCIgdi1pZj1cImUucm9vbUlEID09IHJvb21JRFwiIGNsYXNzPVwidXNlci1sXCIgQHRhcD1cInNpbmdsZUNoYXQoaW5kZXgpXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlwXCIgdi1pZj1cImUudGlwXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIicuLi8uLi9zdGF0aWMvaW1hZ2VzLycgKyBlLmltZyArICcucG5nJ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSBtYWluIGNvbnRlbnQgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm1haW5cIiByZWY9XCJjaGF0Q29udGFpbmVyXCI+XHJcblx0XHRcdDx2aWV3IHYtZm9yPVwiKGUsIGluZGV4KSBpbiBncm91cENoYXRNZXNzYWdlc1wiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdDwhLS0gbGVmdCBtZXNzYWdlIC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdCBtc2dcIiB2LWlmPVwiZS5pZCA9PSAxICYmIGUuc2VuZGVySUQgIT0gaWRcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiJy4uLy4uL3N0YXRpYy9pbWFnZXMvJyArIGUuaW1nICsgJy5wbmcnXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVzc2FnZU92ZXJhbGxcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXNzYWdlQ29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdHt7IGUubWVzc2FnZUNvbnRlbnQgfX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lc3NhZ2VUaW1lXCI+e3sgZS5uYW1lIH19IHt7IHRpbWVQcm9jZXNzKGUudGltZSkgfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0gcmlnaHQgbWVzc2FnZSAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0IG1zZ1wiIHYtaWY9XCJlLmlkID09IDIgfHwgZS5zZW5kZXJJRCA9PSBpZFwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCInLi4vLi4vc3RhdGljL2ltYWdlcy8nICsgZS5pbWcgKyAnLnBuZydcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXNzYWdlT3ZlcmFsbFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lc3NhZ2VDb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0e3sgZS5tZXNzYWdlQ29udGVudCB9fVxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVzc2FnZVRpbWVcIj57eyB0aW1lUHJvY2VzcyhlLnRpbWUpIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIGNlbnRlciB3ZWxjb21lIG1lc3NhZ2UgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjZW50ZXJcIiB2LWlmPVwiZS5pZCA9PSAzXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlubmVyXCI+e3sgZS5uYW1lIH19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PCEtLSBBSSBtZXNzYWdlIC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdCBtc2dcIiB2LWlmPVwiZS5pZCA9PSA0XCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2NoYXRHUFQucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVzc2FnZU92ZXJhbGxcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXNzYWdlQ29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdHt7IGUubWVzc2FnZUNvbnRlbnQgfX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lc3NhZ2VUaW1lXCI+IHt7IHRpbWVQcm9jZXNzKGUudGltZSkgfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0gQUkgbWVzc2FnZSAtLT5cclxuXHRcdFx0PCEtLSA8dmlldyB2LWZvcj1cImVsZW1lbnQgaW4gY2hhdEdQVG1zZ1wiIDprZXk9XCJlbGVtZW50XCIgY2xhc3M9XCJsZWZ0IG1zZ1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVzc2FnZU92ZXJhbGxcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVzc2FnZUNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0e3sgZWxlbWVudCB9fVxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PiAtLT5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8dmlldyBjbGFzcz1cInNlbmRcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzZW5kLWluXCI+XHJcblx0XHRcdFx0PCEtLSBlbW9qaSAtLT5cclxuXHRcdFx0XHQ8ZGl2IHYtc2hvdz1cImlzU2hvd0Vtb2ppXCIgY2xhc3M9XCJlbW9qaS1kaXNwbGF5XCI+XHJcblx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdDxsaSBAY2xpY2s9XCJpbnNlcnRUZXh0KGVtb2ppKVwiIHYtZm9yPVwiZW1vamkgb2YgZW1vamlzXCI+e3sgZW1vamkgfX08L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8IS0tIDxkaXYgY2xhc3M9XCJlbW9qaVwiPlxyXG5cdFx0XHRcdFx0PGkgQGNsaWNrPVwic2hvd0Vtb2ppKGlzU2hvd0Vtb2ppID0gIWlzU2hvd0Vtb2ppKTtcIiBjbGFzcz1cImljb24tZW1vamlcIj48L2k+XHJcblx0XHRcdFx0PC9kaXY+IC0tPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvZW1vamkucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiIEB0YXA9XCJzaG93RW1vamkoaXNTaG93RW1vamkpXCIgY2xhc3M9XCJlbW9qaS1pbWdcIj5cclxuXHRcdFx0XHQ8L2ltYWdlPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvY2hhdEdQVC5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCIgQGNsaWNrPVwiaW5wdXREaWFsb2dUb2dnbGVcIiBjbGFzcz1cImdwdC1pbWdcIlxyXG5cdFx0XHRcdFx0di1pZj0nIWZyaWVuZElEJz48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIGNvbmZpcm0tdHlwZT1cInNlbmRcIiBjbGFzcz1cImNoYXQtc2VuZFwiIHYtbW9kZWw9XCJjaGF0bVwiIGF1dG8taGVpZ2h0PVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRzaG93LWNvbmZpcm0tYmFyPVwiZmFsc2VcIiBtYXhsZW5ndGg9XCItMVwiIDpmb2N1cz1jdXJzb3JGb2N1cyBAa2V5dXAuZW50ZXI9XCJzZW5kTXNnXCJcclxuXHRcdFx0XHRcdEBibHVyPVwiZ2V0Q3Vyc29yRm9jdXNcIj48L3RleHRhcmVhPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3NlbmQucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiIEB0YXA9XCJzZW5kTXNnXCIgY2xhc3M9XCJzZW5kLWltZ1wiPjwvaW1hZ2U+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIG9uZSB0byBvbmUgY2hhdCAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwibW9kaWZ5XCIgOmFuaW1hdGlvbj1cImFuaW1hdGlvbkRhdGFcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1LW5hbWVcIj5cclxuXHRcdFx0XHR7eyB1bmFtZSB9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDxzY3JvbGwtdmlldyBjbGFzcz1cIm1vZGZpeS1taWFuXCIgc2Nyb2xsLXk9XCJ0cnVlXCIgOnNjcm9sbC10b3AgPSBcInNjcm9sbEhlaWdodFwiPlxyXG5cdFx0XHRcdDx2aWV3IHYtZm9yPVwiKGUsIGluZGV4KSBpbiBzaW5nbGVjaGF0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxlZnQgbXNnXCIgdi1pZj1cIihlLmZyb21JRCA9PSBmcmllbmRJRCB8fCBlLmZyb21JRDIgPT0gZnJpZW5kSUQyKSAmJiBlLmZyb21JRDIgIT0gZS50b0lEMlwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIicuLi8uLi9zdGF0aWMvaW1hZ2VzLycgKyBlLmltZyArICcucG5nJ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVzc2FnZU92ZXJhbGxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lc3NhZ2VDb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7eyBlLm1lc3NhZ2VDb250ZW50IH19XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVzc2FnZVRpbWVcIj57eyB0aW1lUHJvY2VzcyhlLnRpbWUpIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJpZ2h0IG1zZ1wiIHYtaWY9XCIoZS5mcm9tSUQgPT0gdXNlcklEICYmIGUudG9JRCA9PSBmcmllbmRJRCkgfHwgKGUuZnJvbUlEMiA9PSB1c2VySUQyICYmIGUudG9JRDIgPT0gZnJpZW5kSUQyKVwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIicuLi8uLi9zdGF0aWMvaW1hZ2VzLycgKyBlLmltZyArICcucG5nJ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVzc2FnZU92ZXJhbGxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lc3NhZ2VDb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7eyBlLm1lc3NhZ2VDb250ZW50IH19XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVzc2FnZVRpbWVcIj57eyB0aW1lUHJvY2VzcyhlLnRpbWUpIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwiY2VudGVyXCIgdi1pZj1cImUuaWQgPT0gM1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlubmVyXCI+e3sgZS5uYW1lIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PiAtLT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJnXCIgQHRhcD1cIm91dFNpbmdsZUNoYXRcIiA6c3R5bGU9XCJ7IGRpc3BsYXk6IGJnIH1cIj48L3ZpZXc+XHJcblx0XHQ8dW5pLXBvcHVwIHJlZj1cImlucHV0RGlhbG9nXCIgdHlwZT1cImRpYWxvZ1wiPlxyXG5cdFx0XHQ8dW5pLXBvcHVwLWRpYWxvZyByZWY9XCJpbnB1dENsb3NlXCIgbW9kZT1cImlucHV0XCIgdGl0bGU9XCJFbmNyeXB0aW9uIGtleVwiIHZhbHVlPVwiXCJcclxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cInBsZWFzZSBpbnB1dCB0aGUgZW5jcnlwdGlvbiBrZXlcIiBAY29uZmlybT1cImdwdFVwbG9hZFwiPjwvdW5pLXBvcHVwLWRpYWxvZz5cclxuXHRcdDwvdW5pLXBvcHVwPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IEJBU0VfVVJMLCBTRVJWRVJfUE9SVCB9IGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cm9vbUlEOiAnJyxcdCAvL3Jvb20gaWRcclxuXHRcdFx0Y2hhdG06ICcnLFx0XHRcdC8vbWVzc2FnZSBjb250ZW50XHJcblx0XHRcdG5hbWU6ICcnLFx0XHRcdC8vdXNlcnMgbmFtZVxyXG5cdFx0XHR1bmFtZTogJycsXHJcblx0XHRcdGlkOiAnJyxcdFx0XHRcdC8vdXNlcnMgaWRcclxuXHRcdFx0ZnJpZW5kSUQ6ICcnLFxyXG5cdFx0XHR1c2VySUQ6ICdhJyxcclxuXHRcdFx0ZnJpZW5kSUQyOiAnJyxcclxuXHRcdFx0dXNlcklEMjogJycsXHJcblx0XHRcdGltZzogJycsXHRcdFx0XHQvL3VzZXMgaW1nXHJcblx0XHRcdGNoYXQ6IFtdLFx0XHRcdC8vY2hhdCBjb250ZW50IFxyXG5cdFx0XHRtZW1iZXI6IDAsXHRcdFx0Ly9tZW1iZXIgbnVtYmVyXHJcblx0XHRcdGFuaW1hdGlvbkRhdGE6IHt9LFxyXG5cdFx0XHRiYjogZmFsc2UsXHJcblx0XHRcdGJnOiAnbm9uZScsXHJcblx0XHRcdHVzZXJzOiAnJyxcclxuXHRcdFx0b3RvY2hhdDogW10sXHJcblx0XHRcdGdyb3VwQ2hhdE1lc3NhZ2VzOiBbXSxcclxuXHRcdFx0c2luZ2xlY2hhdDogW10sXHJcblx0XHRcdGVtb2ppczogWyfwn5iCJywgJ/CfmY8nLCAn8J+YhCcsICfwn5iPJywgJ/CfmIcnLCAn8J+YhScsICfwn5iMJywgJ/CfmJgnLCAn8J+YjScsICfwn6STJywgJ/CfmJwnLCAn8J+YjicsICfwn5iKJywgJ/CfmLMnLCAn8J+ZhCcsICfwn5ixJywgJ/CfmJInLCAn8J+YlCcsICfwn5i3JywgJ/Cfkb8nLCAn8J+klycsICfwn5ipJywgJ/CfmKQnLCAn8J+YoycsICfwn5iwJywgJ/CfmLQnLCAn8J+YrCcsICfwn5itJywgJ/CfkbsnLCAn8J+RjScsICfinIzvuI8nLCAn8J+RiScsICfwn5GAJywgJ/CfkLYnLCAn8J+QtycsICfwn5i5JywgJ+Kaoe+4jycsICfwn5SlJywgJ/CfjIgnLCAn8J+NjycsICfimr3vuI8nLCAn4p2k77iPJ10sXHJcblx0XHRcdGlzU2hvd0Vtb2ppOiBmYWxzZSxcclxuXHRcdFx0Y3Vyc29yRm9jdXM6IHRydWUsXHJcblx0XHRcdHNjcm9sbEhlaWdodDogMCxcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHQvLyBmaWx0ZXJlZE1lc3NhZ2VzKCkge1xyXG5cdFx0Ly8gICByZXR1cm4gdGhpcy5ncm91cENoYXRNZXNzYWdlcy5maWx0ZXIobWVzc2FnZSA9PiBtZXNzYWdlLnJvb21JRCA9PT0gdGhpcy5yb29tSUQpO1xyXG5cdFx0Ly8gfVxyXG5cdH0sXHJcblxyXG5cdG9uTG9hZChlKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBlLm5hbWU7XHJcblx0XHR0aGlzLmltZyA9IGUuaW1nO1xyXG5cdFx0dGhpcy5pZCA9IGUuaWQ7XHJcblx0XHR0aGlzLnJvb21JRCA9IGUucm9vbUlEO1xyXG5cdFx0dGhpcy5qb2luKHRoaXMubmFtZSwgdGhpcy5pbWcsIHRoaXMuaWQsIHRoaXMucm9vbUlEKTtcclxuXHRcdHRoaXMud2VsY29tZSgpO1xyXG5cdFx0dGhpcy5teXNlbGYoKTtcclxuXHRcdHRoaXMucmVjZWl2ZUdyb3VwTXNnKCk7XHJcblx0XHR0aGlzLnJlY2VpdmVBSU1zZygpO1xyXG5cdFx0dGhpcy5yZWNlaXZlU2luZ2xlTXNnKCk7XHJcblx0XHR0aGlzLnF1aXQoKTtcclxuXHRcdHRoaXMuZmV0Y2hHcm91cENoYXRNZXNzYWdlcygpO1xyXG5cdFx0dGhpcy5mZXRjaFNpbmdsZUNoYXRNZXNzYWdlcygpO1xyXG5cdFx0dGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0Q3Vyc29yRm9jdXMoKSB7XHJcblx0XHRcdHRoaXMuY3Vyc29yRm9jdXMgPSBmYWxzZTtcclxuXHRcdH0sXHJcblx0XHRpbnB1dERpYWxvZ1RvZ2dsZSgpIHtcclxuXHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogQkFTRV9VUkwgKyAnOicgKyBTRVJWRVJfUE9SVCArIGAvbWVtYmVyc2hpcFZlcmlmeWAsXHJcblx0XHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRpZDogdGhpcy5pZFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJy4uL3VwbG9hZC91cGxvYWQ/cm9vbUlEPScgKyB0aGlzLnJvb21JRCxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT09IDQwMCB8fCByZXMuc3RhdHVzQ29kZSA9PT0gNDA0KSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzLmRhdGEubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJHJlZnMuaW5wdXREaWFsb2cub3BlbigpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0Ly9tYWtlIHBhZ2Ugc2Nyb2xsIHRvIHRoZSBib3R0b21cclxuXHRcdHNjcm9sbFRvQm90dG9tKCkge1xyXG5cdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0dW5pLnBhZ2VTY3JvbGxUbyh7XHJcblx0XHRcdFx0XHRzY3JvbGxUb3A6IDk5OTk5OTk5OTk5OTk5OTksXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMTAwXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdHNpbmdsZUNoYXRTY3JvbGxUb0JvdHRvbSgpIHtcclxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2Nyb2xsSGVpZ2h0ICArPSAyMDA7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdHNpbmdsZUNoYXRJbml0aWFsaXplVG9Cb3R0b20oKSB7XHJcblx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNjcm9sbEhlaWdodCAgKz0gMjAwMDAwMDA7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8vIGluc2VydCBlbW9qaVxyXG5cdFx0aW5zZXJ0VGV4dChlbW9qaSkge1xyXG5cdFx0XHR0aGlzLmNoYXRtICs9IGVtb2ppO1xyXG5cdFx0XHR0aGlzLmlzU2hvd0Vtb2ppID0gZmFsc2U7XHJcblx0XHR9LFxyXG5cdFx0Ly8gc2hvdyBlbW9qaVxyXG5cdFx0c2hvd0Vtb2ppKGZsYWcpIHtcclxuXHRcdFx0dGhpcy5pc1Nob3dFbW9qaSA9ICFmbGFnO1xyXG5cdFx0fSxcclxuXHRcdGdwdFVwbG9hZCh2YWx1ZSkge1xyXG5cdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0dXJsOiBCQVNFX1VSTCArICc6JyArIFNFUlZFUl9QT1JUICsgYC9ncHRWZXJpZnlgLFxyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGlkOiB0aGlzLmlkLFxyXG5cdFx0XHRcdFx0a2V5OiB2YWx1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6ICcuLi91cGxvYWQvdXBsb2FkP3Jvb21JRD0nICsgdGhpcy5yb29tSUQsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiByZXMuZGF0YS5tZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IChlcnIpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRxdWl0Um9vbSgpIHtcclxuXHRcdFx0dGhpcy5zb2NrZXQuZW1pdCgncXVpdFJvb20nLCB7IGlkOiB0aGlzLmlkLCBuYW1lOiB0aGlzLm5hbWUsIHJvb21JRDogdGhpcy5yb29tSUQgfSk7XHJcblx0XHRcdHRoaXMuc29ja2V0LmVtaXQoJ3VwZGF0ZVRpcFN0YXR1cycsIHRoaXMucm9vbUlEKTtcclxuXHRcdH0sXHJcblx0XHRkaXNjb25uZWN0KCkge1xyXG5cdFx0XHR0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XHJcblx0XHR9LFxyXG5cdFx0dGltZVByb2Nlc3MoZGF0ZSkge1xyXG5cdFx0XHR2YXIgdGltZTtcclxuXHRcdFx0dmFyIGQgPSBuZXcgRGF0ZShkYXRlKTtcclxuXHRcdFx0dmFyIG4gPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHQvL2dldCB0aW1lXHJcblx0XHRcdHZhciBkZCA9IGQuZ2V0VGltZSgpO1xyXG5cdFx0XHR2YXIgaCA9IGQuZ2V0SG91cnMoKTtcclxuXHRcdFx0dmFyIG0gPSBkLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0dmFyIFkgPSBkLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRcdHZhciBNID0gZC5nZXRNb250aCgpICsgMTtcclxuXHRcdFx0dmFyIEQgPSBkLmdldERhdGUoKTtcclxuXHRcdFx0Ly9jdXJyZW50IHRpbWVcclxuXHRcdFx0dmFyIG5uID0gbi5nZXRUaW1lKCk7XHJcblx0XHRcdHZhciBoaCA9IG4uZ2V0SG91cnMoKTtcclxuXHRcdFx0dmFyIG1tID0gbi5nZXRNaW51dGVzKCk7XHJcblx0XHRcdHZhciBZWSA9IG4uZ2V0RnVsbFllYXIoKTtcclxuXHRcdFx0dmFyIE1NID0gbi5nZXRNb250aCgpICsgMTtcclxuXHRcdFx0dmFyIEREID0gbi5nZXREYXRlKCk7XHJcblxyXG5cdFx0XHRpZiAoRCA9PSBERCAmJiBNID09IE1NICYmIFkgPT0gWVkpIHtcclxuXHRcdFx0XHRpZiAoaCA8IDEwKSB7XHJcblx0XHRcdFx0XHRoID0gJzAnICsgaDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG0gPCAxMCkge1xyXG5cdFx0XHRcdFx0bSA9ICcwJyArIG07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRpbWUgPSBoICsgJzonICsgbTtcclxuXHRcdFx0XHRyZXR1cm4gdGltZTtcclxuXHRcdFx0fSBlbHNlIGlmIChEICsgMSA9PSBERCAmJiBNID09IE1NICYmIFkgPT0gWVkpIHtcclxuXHRcdFx0XHRpZiAoaCA8IDEwKSB7XHJcblx0XHRcdFx0XHRoID0gJzAnICsgaDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG0gPCAxMCkge1xyXG5cdFx0XHRcdFx0bSA9ICcwJyArIG07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRpbWUgPSAneWVzdGVyZGF5JyArICcgJyArIGggKyAnOicgKyBtO1xyXG5cdFx0XHRcdHJldHVybiB0aW1lO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChNIDwgMTApIHtcclxuXHRcdFx0XHRcdE0gPSAnMCcgKyBNO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoRCA8IDEwKSB7XHJcblx0XHRcdFx0XHREID0gJzAnICsgRDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGggPCAxMCkge1xyXG5cdFx0XHRcdFx0aCA9ICcwJyArIGg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChtIDwgMTApIHtcclxuXHRcdFx0XHRcdG0gPSAnMCcgKyBtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aW1lID0gWSArICcvJyArIE0gKyAnLycgKyBEICsgJyAnICsgaCArICc6JyArIG07XHJcblx0XHRcdFx0cmV0dXJuIHRpbWU7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvL3NlbmQgbWVzc2FnZVxyXG5cdFx0c2VuZE1zZygpIHtcclxuXHRcdFx0aWYgKHRoaXMuY2hhdG0ubGVuZ3RoID4gMCAmJiB0aGlzLmZyaWVuZElEID09ICcnKSB7XHJcblx0XHRcdFx0bGV0IG9uZW1zZyA9IHtcclxuXHRcdFx0XHRcdHJvb21JRDogdGhpcy5yb29tSUQsXHJcblx0XHRcdFx0XHRtZXNzYWdlQ29udGVudDogdGhpcy5jaGF0bSxcclxuXHRcdFx0XHRcdGltZzogdGhpcy5pbWcsXHJcblx0XHRcdFx0XHR0aW1lOiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdFx0aWQ6IDIsXHJcblx0XHRcdFx0XHRzZW5kZXJJRDogdGhpcy5pZCxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHRyb29tSUQ6IHRoaXMucm9vbUlELFxyXG5cdFx0XHRcdFx0bWVzc2FnZUNvbnRlbnQ6IHRoaXMuY2hhdG0sXHJcblx0XHRcdFx0XHRpbWc6IHRoaXMuaW1nLFxyXG5cdFx0XHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRcdFx0dGltZTogbmV3IERhdGUoKSxcclxuXHRcdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdFx0c2VuZGVySUQ6IHRoaXMuaWQsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHRoaXMuY2hhdC5wdXNoKG9uZW1zZyk7XHJcblx0XHRcdFx0dGhpcy5ncm91cENoYXRNZXNzYWdlcy5wdXNoKG9uZW1zZyk7XHJcblx0XHRcdFx0dGhpcy5jaGF0bSA9ICcnOy8vY2xlYXJcclxuXHRcdFx0XHR0aGlzLmN1cnNvckZvY3VzID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLnNvY2tldC5lbWl0KCdtZXNzYWdlJywgZGF0YSk7XHJcblx0XHRcdFx0Ly8gc3RvcmFnZSBpbiBNb25nb0RCXHJcblx0XHRcdFx0dGhpcy5zYXZlQ2hhdFRvREIoZGF0YSwgJy9ncm91cGNoYXQnKTsgLy8gc2F2aW5nIHRvIE1vbmdvREJcclxuXHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5jaGF0bS5sZW5ndGggPiAwICYmIHRoaXMuZnJpZW5kSUQgIT0gJycpIHtcclxuXHRcdFx0XHQvL29uZSB0byBvbmUgY2hhdFxyXG5cdFx0XHRcdGxldCBvbmVtc2cgPSB7XHJcblx0XHRcdFx0XHRyb29tSUQ6IHRoaXMucm9vbUlELFxyXG5cdFx0XHRcdFx0bWVzc2FnZUNvbnRlbnQ6IHRoaXMuY2hhdG0sXHJcblx0XHRcdFx0XHRpbWc6IHRoaXMuaW1nLFxyXG5cdFx0XHRcdFx0dGltZTogbmV3IERhdGUoKSxcclxuXHRcdFx0XHRcdGZyb21JRDogdGhpcy51c2VySUQsXHJcblx0XHRcdFx0XHR0b0lEOiB0aGlzLmZyaWVuZElELFxyXG5cdFx0XHRcdFx0ZnJvbUlEMjogdGhpcy51c2VySUQyLFxyXG5cdFx0XHRcdFx0dG9JRDI6IHRoaXMuZnJpZW5kSUQyLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdHJvb21JRDogdGhpcy5yb29tSUQsXHJcblx0XHRcdFx0XHRtZXNzYWdlQ29udGVudDogdGhpcy5jaGF0bSxcclxuXHRcdFx0XHRcdGltZzogdGhpcy5pbWcsXHJcblx0XHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUsXHJcblx0XHRcdFx0XHR0aW1lOiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdFx0ZnJvbUlEOiB0aGlzLnVzZXJJRCxcclxuXHRcdFx0XHRcdHRvSUQ6IHRoaXMuZnJpZW5kSUQsXHJcblx0XHRcdFx0XHRmcm9tSUQyOiB0aGlzLnVzZXJJRDIsXHJcblx0XHRcdFx0XHR0b0lEMjogdGhpcy5mcmllbmRJRDIsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHRoaXMub3RvY2hhdC5wdXNoKG9uZW1zZyk7XHJcblx0XHRcdFx0dGhpcy5zaW5nbGVjaGF0LnB1c2gob25lbXNnKTtcclxuXHRcdFx0XHR0aGlzLmNoYXRtID0gJyc7Ly9jbGVhciBjaGF0IG1lc3NhZ2VcclxuXHRcdFx0XHR0aGlzLmN1cnNvckZvY3VzID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLnNvY2tldC5lbWl0KCdtc2cnLCBkYXRhKTtcclxuXHRcdFx0XHQvLyBzdG9yYWdlIGluIE1vbmdvREJcclxuXHRcdFx0XHR0aGlzLnNhdmVDaGF0VG9EQihkYXRhLCAnL3NpbmdsZWNoYXQnKTtcclxuXHRcdFx0XHR0aGlzLnNpbmdsZUNoYXRTY3JvbGxUb0JvdHRvbSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcclxuXHRcdH0sXHJcblx0XHQvLyBzYXZlIGNoYXQgZGF0YSB0byBNb25nb0RCXHJcblx0XHRzYXZlQ2hhdFRvREIoY2hhdERhdGEsIHVybCkge1xyXG5cdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0dXJsOiBCQVNFX1VSTCArICc6JyArIFNFUlZFUl9QT1JUICsgdXJsLCAvLyByZXBsYWNlIHdpdGggeW91ciBiYWNrZW5kIHNlcnZlciB1cmxcclxuXHRcdFx0XHRkYXRhOiBjaGF0RGF0YSxcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdDaGF0IGRhdGEgc2F2ZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmFpbDogKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgY2hhdCBkYXRhOiAnICsgZXJyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8vam9pbiB0aGUgZ3JvdXBcclxuXHRcdGpvaW46IGZ1bmN0aW9uIChuYW1lLCBpbWcsIGlkLCByb29tSUQpIHtcclxuXHRcdFx0dGhpcy5zb2NrZXQuZW1pdCgnam9pbicsIG5hbWUsIGltZywgaWQsIHJvb21JRCk7XHJcblx0XHR9LFxyXG5cdFx0Ly93ZWxjb21lIGpvaW5pbmdcclxuXHRcdHdlbGNvbWUoKSB7XHJcblx0XHRcdC8vZ2V0IHRoZSBpbnN0YW50IG1lc3NhZ2Ugc29ja2V0XHJcblx0XHRcdHRoaXMuc29ja2V0Lm9uKCd3ZWxjb21lJywgKG5hbWUsIHVzZXJzKSA9PiB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YSlcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbnVtJytsZW4pXHJcblx0XHRcdFx0Ly9pbnNlcnQgdGhlIHdlbGNvbWUgbWVzc2FnZVxyXG5cdFx0XHRcdGxldCB3ZWwgPSB7XHJcblx0XHRcdFx0XHRuYW1lOiAnd2VsY29tZSAnICsgbmFtZSArICcgam9pbiB0aGUgZ3JvdXAgY2hhdCcsXHJcblx0XHRcdFx0XHRpZDogMyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gdGhpcy5jaGF0LnB1c2god2VsKTtcclxuXHRcdFx0XHR0aGlzLmdyb3VwQ2hhdE1lc3NhZ2VzLnB1c2god2VsKTtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKHVzZXJzW2ldLmlkID09IHRoaXMudXNlcklEKSB7XHJcblx0XHRcdFx0XHRcdHVzZXJzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy51c2VycyA9IHVzZXJzO1xyXG5cdFx0XHRcdC8vIHNjcm9sbCB0byBib3R0b20gYXV0b21hdGljYWxseVxyXG5cdFx0XHRcdHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnVzZXJzKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdC8vZ2V0IHRoZSBtZXNzYWdlIGZyb20gbXlzZWxmXHJcblx0XHRteXNlbGYoKSB7XHJcblx0XHRcdC8vZ2V0IHRoZSBpbnN0YW50IG1lc3NhZ2VcclxuXHRcdFx0dGhpcy5zb2NrZXQub24oJ215c2VsZicsIChuYW1lLCB1c2VycywgaWQsIHVzZXJJRDIpID0+IHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdudW0nK2xlbilcclxuXHRcdFx0XHQvL2luc2VydCB0aGUgd2VsY29tZSBtZXNzYWdlXHJcblx0XHRcdFx0dGhpcy51c2VySUQgPSBpZDtcclxuXHRcdFx0XHR0aGlzLnVzZXJJRDIgPSB1c2VySUQyO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMudXNlcklEKTtcclxuXHRcdFx0XHRsZXQgbXlXZWwgPSB7XHJcblx0XHRcdFx0XHRuYW1lOiAnd2VsY29tZSAnICsgbmFtZSArICcgam9pbiB0aGUgZ3JvdXAgY2hhdCcsXHJcblx0XHRcdFx0XHRpZDogMyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gdGhpcy5jaGF0LnB1c2gobXlXZWwpO1xyXG5cdFx0XHRcdHRoaXMuZ3JvdXBDaGF0TWVzc2FnZXMucHVzaChteVdlbCk7XHJcblxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmICh1c2Vyc1tpXS5pZCA9PSB0aGlzLnVzZXJJRCkge1xyXG5cdFx0XHRcdFx0XHR1c2Vycy5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudXNlcnMgPSB1c2VycztcclxuXHRcdFx0XHQvLyBzY3JvbGwgdG8gYm90dG9tIGF1dG9tYXRpY2FsbHlcclxuXHRcdFx0XHR0aGlzLnNjcm9sbFRvQm90dG9tKCk7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy51c2VycylcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHQvL3F1aXQgdGhlIGdyb3VwIG1lc3NhZ2VcclxuXHRcdHF1aXQoKSB7XHJcblx0XHRcdC8vZ2V0IHRoZSBpbnN0YW50IG1lc3NhZ2UgZnJvbSBzb2NrZXRcclxuXHRcdFx0dGhpcy5zb2NrZXQub24oJ3F1aXQnLCAoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdC8vaW5zZXJ0IHRoZSBxdWl0IG1lc3NhZ2VcclxuXHRcdFx0XHRsZXQgcXVpdCA9IHtcclxuXHRcdFx0XHRcdG5hbWU6IGRhdGEubmFtZSArICcgcXVpdCB0aGUgZ3JvdXAgY2hhdCcsXHJcblx0XHRcdFx0XHRpZDogMyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gdGhpcy5jaGF0LnB1c2gocXVpdCk7XHJcblx0XHRcdFx0dGhpcy5ncm91cENoYXRNZXNzYWdlcy5wdXNoKHF1aXQpO1xyXG5cclxuXHRcdFx0XHQvL3RoaXMubWVtYmVyID0gbGVuO1xyXG5cdFx0XHRcdHRoaXMudXNlcnMgPSBkYXRhLnVzZXJzO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEudXNlcnMpXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0Ly9cclxuXHRcdHJlY2VpdmVHcm91cE1zZygpIHtcclxuXHRcdFx0Ly9nZXQgdGhlIGluc3RhbnQgbWVzc2FnZSBmcm9tIHNvY2tldFxyXG5cdFx0XHR0aGlzLnNvY2tldC5vbignc2VuZE1zZycsIGRhdGEgPT4ge1xyXG5cdFx0XHRcdC8vIHRoaXMuY2hhdC5wdXNoKGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMuZ3JvdXBDaGF0TWVzc2FnZXMucHVzaChkYXRhKTtcclxuXHRcdFx0XHQvLyBzY3JvbGwgdG8gYm90dG9tIGF1dG9tYXRpY2FsbHlcclxuXHRcdFx0XHR0aGlzLnNjcm9sbFRvQm90dG9tKCk7XHJcblx0XHRcdH0pXHJcblxyXG5cdFx0fSxcclxuXHRcdC8vIHJlY2lldmUgdGhlIEFJIG1lc3NhZ2VcclxuXHRcdHJlY2VpdmVBSU1zZygpIHtcclxuXHRcdFx0dGhpcy5zb2NrZXQub24oXCJzdW1iaXRBSU1zZ1wiLCAoQUlNc2cpID0+IHtcclxuXHRcdFx0XHQvLyB0aGlzLmNoYXQucHVzaChBSU1zZyk7XHJcblx0XHRcdFx0dGhpcy5ncm91cENoYXRNZXNzYWdlcy5wdXNoKEFJTXNnKTtcclxuXHRcdFx0XHQvLyBzY3JvbGwgdG8gYm90dG9tIGF1dG9tYXRpY2FsbHlcclxuXHRcdFx0XHR0aGlzLnNjcm9sbFRvQm90dG9tKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8vcmVjZWl2ZSB0aGUgb25lIHRvIG9uZSBtZXNzYWdlXHJcblx0XHRyZWNlaXZlU2luZ2xlTXNnKCkge1xyXG5cdFx0XHR0aGlzLnNvY2tldC5vbignc01zZycsIGRhdGEgPT4ge1xyXG5cdFx0XHRcdGxldCBmcm9tSUQgPSBkYXRhLmZyb21JRDtcclxuXHRcdFx0XHRpZiAodGhpcy5mcmllbmRJRCAhPSBmcm9tSUQpIHtcclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy51c2Vycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy51c2Vyc1tpXS5pZCA9PSBmcm9tSUQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJzW2ldLnRpcCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHQvLyB0aGlzLm90b2NoYXQucHVzaChkYXRhKTtcclxuXHRcdFx0XHR0aGlzLnNpbmdsZWNoYXQucHVzaChkYXRhKTtcclxuXHRcdFx0XHR0aGlzLnNpbmdsZUNoYXRTY3JvbGxUb0JvdHRvbSgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdC8vY29tZSBpbnRvIHRoZSBvbmUgdG8gb25lIGNoYXRyb29tXHJcblx0XHRzaW5nbGVDaGF0KGUpIHtcclxuXHRcdFx0dGhpcy51bmFtZSA9IHRoaXMudXNlcnNbZV0ubmFtZTtcclxuXHRcdFx0dGhpcy5mcmllbmRJRCA9IHRoaXMudXNlcnNbZV0uaWQ7XHJcblx0XHRcdHRoaXMuZnJpZW5kSUQyID0gdGhpcy51c2Vyc1tlXS51c2VySUQyO1xyXG5cdFx0XHR0aGlzLnVzZXJzW2VdLnRpcCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLm1vZGlmeSgpO1xyXG5cdFx0XHR0aGlzLnNpbmdsZUNoYXRJbml0aWFsaXplVG9Cb3R0b20oKTtcclxuXHRcdH0sXHJcblx0XHQvL3F1aXQgdGhlIG9uZSB0byBvbmUgY2hhdHJvb21cclxuXHRcdG91dFNpbmdsZUNoYXQoKSB7XHJcblx0XHRcdHRoaXMudW5hbWUgPSAnJztcclxuXHRcdFx0dGhpcy5mcmllbmRJRCA9ICcnO1xyXG5cdFx0XHR0aGlzLmZyaWVuZElEMiA9ICcnO1xyXG5cdFx0XHR0aGlzLm1vZGlmeSgpO1xyXG5cdFx0fSxcclxuXHRcdC8vb25lIHRvIG9uZSBhbmltYXRpb24gZWZmZWN0XHJcblx0XHRtb2RpZnkoKSB7XHJcblx0XHRcdHRoaXMuYmIgPSAhdGhpcy5iYjtcclxuXHRcdFx0aWYgKHRoaXMuYmIpIHtcclxuXHRcdFx0XHR0aGlzLmJnID0gJ2Jsb2NrJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmJnID0gJ25vbmUnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBhbmltYXRpb24gPSB1bmkuY3JlYXRlQW5pbWF0aW9uKHtcclxuXHRcdFx0XHRkdXJhdGlvbjogNDAwLFxyXG5cdFx0XHRcdHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXHJcblx0XHRcdH0pXHJcblx0XHRcdHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXHJcblx0XHRcdGlmICh0aGlzLmJiKSB7XHJcblx0XHRcdFx0YW5pbWF0aW9uLmJvdHRvbSgwKS5zdGVwKClcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YW5pbWF0aW9uLmJvdHRvbSgpLnN0ZXAoKVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKVxyXG5cdFx0fSxcclxuXHRcdC8vIGZldGNoIHRoZSBncm91cCBjaGF0IG1lc3NhZ2VzIGZyb20gdGhlIHNlcnZlciBkYXRhYmFzZVxyXG5cdFx0ZmV0Y2hHcm91cENoYXRNZXNzYWdlcygpIHtcclxuXHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogQkFTRV9VUkwgKyAnOicgKyBTRVJWRVJfUE9SVCArIGAvZ3JvdXBjaGF0P3Jvb21JRD0ke3RoaXMucm9vbUlEfWAsXHJcblx0XHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmdyb3VwQ2hhdE1lc3NhZ2VzID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBncm91cCBjaGF0IG1lc3NhZ2VzOicsIGVycik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRmZXRjaFNpbmdsZUNoYXRNZXNzYWdlcygpIHtcclxuXHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogQkFTRV9VUkwgKyAnOicgKyBTRVJWRVJfUE9SVCArIGAvc2luZ2xlY2hhdD9yb29tSUQ9JHt0aGlzLnJvb21JRH1gLFxyXG5cdFx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zaW5nbGVjaGF0ID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBncm91cCBjaGF0IG1lc3NhZ2VzOicsIGVycik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHQvLyBmZXRjaEdyb3VwQ2hhdE1lc3NhZ2VzKCkge1xyXG5cdFx0Ly8gXHRheGlvcy5nZXQoYGh0dHA6Ly8xMjkuMTIuMjExLjc0OjMwMDAwL2dyb3VwY2hhdD9yb29tSUQ9JHt0aGlzLnJvb21JRH1gKVxyXG5cdFx0Ly8gXHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdC8vIFx0XHRcdHRoaXMuZ3JvdXBDaGF0TWVzc2FnZXMgPSByZXMuZGF0YTtcclxuXHRcdC8vIFx0XHR9KVxyXG5cdFx0Ly8gXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHQvLyBcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBncm91cCBjaGF0IG1lc3NhZ2VzOicsIGVycik7XHJcblx0XHQvLyBcdFx0fSk7XHJcblx0XHQvLyB9LFxyXG5cdFx0Ly8gZmV0Y2hTaW5nbGVDaGF0TWVzc2FnZXMoKSB7XHJcblx0XHQvLyBcdGF4aW9zLmdldChgaHR0cDovLzEyOS4xMi4yMTEuNzQ6MzAwMDAvc2luZ2xlY2hhdD9yb29tSUQ9JHt0aGlzLnJvb21JRH1gKVxyXG5cdFx0Ly8gXHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdC8vIFx0XHRcdHRoaXMuc2luZ2xlY2hhdCA9IHJlcy5kYXRhO1xyXG5cdFx0Ly8gXHRcdH0pXHJcblx0XHQvLyBcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdC8vIFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGdyb3VwIGNoYXQgbWVzc2FnZXM6JywgZXJyKTtcclxuXHRcdC8vIFx0XHR9KTtcclxuXHRcdC8vIH0sXHJcblx0fVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbi5zdGF0dXMtYmFyIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDg4cnB4O1xyXG5cdHBhZGRpbmctdG9wOiB2YXIoLS1zdGF0dXMtYmFyLWhlaWdodCk7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG5cdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR6LWluZGV4OiA5OTg7XHJcblx0Y29sb3I6ICMyNzI4MzI7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Nik7XHJcblxyXG5cdC5sb2dpbi1jIHtcclxuXHRcdHdpZHRoOiA2MHJweDtcclxuXHRcdGhlaWdodDogNjBycHg7XHJcblx0XHRwYWRkaW5nLXRvcDogMjJycHg7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDMycnB4O1xyXG5cdH1cclxuXHJcblx0LmxvZ2luLWJhY2sge1xyXG5cdFx0d2lkdGg6IDIwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzNHJweDtcclxuXHR9XHJcblxyXG5cdC5zY3JvbGx2IHtcclxuXHRcdHdpZHRoOiA4NCU7XHJcblxyXG5cdFx0LnVzZXJzIHtcclxuXHRcdFx0Ly9iYWNrZ3JvdW5kOiAjZWVlO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHRcdFx0LnVzZXItbCB7XHJcblx0XHRcdFx0cGFkZGluZzogMTJycHggOHJweDtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA2NHJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogNjRycHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQudGlwIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxNHJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogMTRycHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNzcsIDYwLCAxKTtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHRvcDogMTJycHg7XHJcblx0XHRcdFx0XHRyaWdodDogMTBycHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHR6LWluZGV4OiAxMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ubWFpbiB7XHJcblx0cGFkZGluZzogMTYwcnB4IDI4cnB4IDE2MHJweDtcclxufVxyXG5cclxuLm1haW4sXHJcbi5tb2RmaXktbWlhbiB7XHJcblxyXG5cdC5tc2cge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHRwYWRkaW5nOiA0MHJweCAwO1xyXG5cclxuXHRcdGltYWdlIHtcclxuXHRcdFx0ZmxleDogbm9uZTtcclxuXHRcdFx0d2lkdGg6IDY0cnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDY0cnB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxOHJweDtcclxuXHRcdFx0bWFyZ2luOiAwIDIwcnB4O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQubWVzc2FnZU92ZXJhbGwge1xyXG5cdFx0XHQubWVzc2FnZUNvbnRlbnQge1xyXG5cdFx0XHRcdG1heC13aWR0aDogMzgwcnB4O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDI2cnB4IDMycnB4O1xyXG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDQ4cnB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRcdFx0Y29sb3I6IHJnYmEoMjUsIDI5LCAzNSwgMSk7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubWVzc2FnZVRpbWUge1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOiA4cnB4O1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0XHRcdGNvbG9yOiByZ2JhKDI1LCAyOSwgMzUsIDAuNSk7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDM0cnB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQubGVmdCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuXHRcdC5tZXNzYWdlQ29udGVudCB7XHJcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjQ0LCAyNDQsIDI0NCwgMSk7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4IDI0cnB4IDI0cnB4IDBweDtcclxuXHRcdFx0b3ZlcmZsb3c6IGF1dG87XHJcblx0XHRcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5yaWdodCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcblxyXG5cdFx0Lm1lc3NhZ2VDb250ZW50IHtcclxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgyMDAsIDI1NSwgMjAwLCAxKTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMjRycHggMjRycHggMHB4IDI0cnB4O1xyXG5cdFx0XHRvdmVyZmxvdzogYXV0bztcclxuXHRcdFx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5tZXNzYWdlVGltZSB7XHJcblx0XHRcdHJpZ2h0OiAxMzJycHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuY2VudGVyIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDMycnB4IDAgMjBycHg7XHJcblxyXG5cdFx0LmlubmVyIHtcclxuXHRcdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRjb2xvcjogcmdiYSgyNSwgMjksIDM1LCAwLjUpO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMzRycHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uc2VuZCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHotaW5kZXg6IDEwMDI7XHJcblx0Ym90dG9tOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3RhdHVzLWJhci1oZWlnaHQpO1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHJweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTYpO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblxyXG5cdC5jaGF0LXNlbmQge1xyXG5cdFx0bWFyZ2luOiAxMnJweCA0OHJweCAxMnJweCAwcnB4O1xyXG5cclxuXHRcdGZsZXg6IDE7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1pbi1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiByZ2JhKDI1LCAyOSwgMzUsIDEpO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwcnB4O1xyXG5cdFx0cGFkZGluZzogMjRycHggODBycHggMjRycHggMjRycHg7XHJcblx0fVxyXG5cclxuXHQuc2VuZC1pbWcge1xyXG5cdFx0d2lkdGg6IDQ4cnB4O1xyXG5cdFx0aGVpZ2h0OiA0OHJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiA2OHJweDtcclxuXHRcdHRvcDogMzJycHg7XHJcblx0fVxyXG5cclxuXHQuc2VuZC1pbiB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDQ4cnB4O1xyXG5cclxuXHRcdC5lbW9qaS1pbWcge1xyXG5cdFx0XHR3aWR0aDogNDhycHg7XHJcblx0XHRcdGhlaWdodDogNDhycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0XHRtYXJnaW46IDEycnB4IDE2cnB4IDEycnB4IDBycHg7XHJcblx0XHRcdC8vIGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmdwdC1pbWcge1xyXG5cdFx0XHR3aWR0aDogNDhycHg7XHJcblx0XHRcdGhlaWdodDogNDhycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0XHRtYXJnaW46IDEycnB4IDE2cnB4IDEycnB4IDBycHg7XHJcblx0XHRcdC8vIGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ubW9kaWZ5IHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRsZWZ0OiAwO1xyXG5cdGJvdHRvbTogLTkwJTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDkwJTtcclxuXHR6LWluZGV4OiAxMDAwO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogNDhycHggNDhycHggMHB4IDBweDtcclxufVxyXG5cclxuLnUtbmFtZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGhlaWdodDogODBycHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxufVxyXG5cclxuLm1vZGZpeS1taWFuIHtcclxuXHRwYWRkaW5nOiA4OHJweCAyOHJweCAxMjBycHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5iZyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR6LWluZGV4OiA5OTk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4uam9pbiB7XHJcblx0bWFyZ2luLXRvcDogMTgwcnB4O1xyXG5cdHdpZHRoOiAyMDBycHg7XHJcblx0aGVpZ2h0OiAyMDBycHg7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDEzMSwgNjAsIDEpO1xyXG5cdGJveC1zaGFkb3c6IDBweCAzNnJweCA2OHJweCAtOHJweCByZ2JhKDI1NSwgMTMxLCA2MCwgMC41KTtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRsaW5lLWhlaWdodDogMjAwcnB4O1xyXG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG59XHJcblxyXG4uZW1vamktZGlzcGxheSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMjEwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0dG9wOiAtMjEwcHg7XHJcblx0bGVmdDogMDtcclxuXHRvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuXHR1bCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHJcblx0XHRsaSB7XHJcblx0XHRcdHBhZGRpbmc6IDJweCAzcHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMi4ycmVtO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///60\n");

/***/ }),
/* 61 */
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/upload/upload.vue?mpType=page ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _upload_vue_vue_type_template_id_494feef6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.vue?vue&type=template&id=494feef6&mpType=page */ 62);\n/* harmony import */ var _upload_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.vue?vue&type=script&lang=js&mpType=page */ 64);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _upload_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _upload_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _upload_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _upload_vue_vue_type_template_id_494feef6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _upload_vue_vue_type_template_id_494feef6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _upload_vue_vue_type_template_id_494feef6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/upload/upload.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VwbG9hZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDk0ZmVlZjYmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VwbG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3VwbG9hZC91cGxvYWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///61\n");

/***/ }),
/* 62 */
/*!******************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/upload/upload.vue?vue&type=template&id=494feef6&mpType=page ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_494feef6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./upload.vue?vue&type=template&id=494feef6&mpType=page */ 63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_494feef6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_494feef6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_494feef6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_494feef6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 63 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/upload/upload.vue?vue&type=template&id=494feef6&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      { staticClass: _vm._$s(1, "sc", "status-bar"), attrs: { _i: 1 } },
      [
        _c(
          "navigator",
          { staticClass: _vm._$s(2, "sc", "login-c"), attrs: { _i: 2 } },
          [
            _c("image", {
              staticClass: _vm._$s(3, "sc", "login-back"),
              attrs: {
                src: _vm._$s(3, "a-src", __webpack_require__(/*! ../../static/back.png */ 55)),
                _i: 3,
              },
            }),
          ]
        ),
      ]
    ),
    _c("view", { staticClass: _vm._$s(4, "sc", "content"), attrs: { _i: 4 } }, [
      _c("button", { attrs: { _i: 5 }, on: { click: _vm.chooseFile } }),
      _c("button", {
        attrs: { disabled: _vm._$s(6, "a-disabled", !_vm.file), _i: 6 },
        on: { click: _vm.uploadFile },
      }),
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.query,
            expression: "query",
          },
        ],
        staticClass: _vm._$s(7, "sc", "input"),
        attrs: { _i: 7 },
        domProps: { value: _vm._$s(7, "v-model", _vm.query) },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.query = $event.target.value
          },
        },
      }),
    ]),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 64 */
/*!************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/upload/upload.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./upload.vue?vue&type=script&lang=js&mpType=page */ 65);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXF0QixDQUFnQix1dEJBQUcsRUFBQyIsImZpbGUiOiI2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VwbG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///64\n");

/***/ }),
/* 65 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/upload/upload.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 66));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 68));\nvar _config = __webpack_require__(/*! ../../config.js */ 15);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      // query: '',\n      query: localStorage.getItem('userInput') || '',\n      file: '',\n      roomID: ''\n    };\n  },\n  onLoad: function onLoad(e) {\n    this.roomID = e.roomID;\n  },\n  watch: {\n    query: function query(newVal) {\n      localStorage.setItem('userInput', newVal);\n    }\n  },\n  methods: {\n    backToIndex: function backToIndex() {\n      uni.reLaunch({\n        url: '../chatroom/chatroom'\n      });\n    },\n    chooseFile: function chooseFile() {\n      var _this = this;\n      uni.chooseFile({\n        type: 'file',\n        success: function () {\n          var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(chooseFileRes) {\n            var file, response, blob, arrayBuffer, pdfSignature;\n            return _regenerator.default.wrap(function _callee$(_context) {\n              while (1) {\n                switch (_context.prev = _context.next) {\n                  case 0:\n                    file = chooseFileRes.tempFiles[0]; // Fetch the Blob from the Blob URL\n                    _context.next = 3;\n                    return fetch(file.path);\n                  case 3:\n                    response = _context.sent;\n                    _context.next = 6;\n                    return response.blob();\n                  case 6:\n                    blob = _context.sent;\n                    _context.next = 9;\n                    return blob.slice(0, 5).arrayBuffer();\n                  case 9:\n                    arrayBuffer = _context.sent;\n                    pdfSignature = new TextDecoder(\"utf-8\").decode(arrayBuffer); // Check the PDF signature\n                    if (pdfSignature === '%PDF-') {\n                      _this.file = file.path;\n                      uni.showToast({\n                        title: 'File selected successfully',\n                        icon: 'none',\n                        duration: 2000\n                      });\n                    } else {\n                      uni.showToast({\n                        title: 'Only PDF files are allowed',\n                        icon: 'none',\n                        duration: 2000\n                      });\n                    }\n                  case 12:\n                  case \"end\":\n                    return _context.stop();\n                }\n              }\n            }, _callee);\n          }));\n          function success(_x) {\n            return _success.apply(this, arguments);\n          }\n          return success;\n        }(),\n        fail: function fail(chooseFileError) {\n          uni.showToast({\n            title: 'File selection failed',\n            icon: 'none',\n            duration: 2000\n          });\n        }\n      });\n    },\n    uploadFile: function uploadFile() {\n      var _this2 = this;\n      if (!this.file) {\n        return;\n      }\n      uni.uploadFile({\n        url: _config.BASE_URL + ':' + _config.SERVER_PORT + '/file-upload',\n        // your upload api url\n        filePath: this.file,\n        name: 'file',\n        formData: {\n          'query': this.query\n        },\n        success: function success(uploadFileRes) {\n          var responseData = uploadFileRes.data;\n          uni.showToast({\n            title: 'File uploaded successfully',\n            icon: 'none',\n            duration: 2000\n          });\n          var AIMsg = {\n            roomID: _this2.roomID,\n            messageContent: responseData,\n            time: new Date(),\n            id: 4\n          };\n          _this2.socket.emit('gptOutputText', AIMsg);\n          uni.request({\n            url: _config.BASE_URL + ':' + _config.SERVER_PORT + '/groupchat',\n            // replace with your backend server url\n            data: AIMsg,\n            method: 'POST',\n            success: function success(res) {\n              if (res.statusCode == 200) {\n                // console.log('AI Chat data saved successfully!');\n              }\n            },\n            fail: function fail(err) {\n              __f__(\"error\", 'Failed to save chat data: ' + err, \" at pages/upload/upload.vue:122\");\n            }\n          });\n        },\n        fail: function fail(uploadFileError) {\n          uni.showToast({\n            title: 'File upload failed',\n            icon: 'none',\n            duration: 2000\n          });\n        }\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdXBsb2FkL3VwbG9hZC52dWUiXSwibmFtZXMiOlsiZGF0YSIsInF1ZXJ5IiwiZmlsZSIsInJvb21JRCIsIm9uTG9hZCIsIndhdGNoIiwibG9jYWxTdG9yYWdlIiwibWV0aG9kcyIsImJhY2tUb0luZGV4IiwidW5pIiwidXJsIiwiY2hvb3NlRmlsZSIsInR5cGUiLCJzdWNjZXNzIiwiZmV0Y2giLCJyZXNwb25zZSIsImJsb2IiLCJhcnJheUJ1ZmZlciIsInBkZlNpZ25hdHVyZSIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiZmFpbCIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsIm5hbWUiLCJmb3JtRGF0YSIsIm1lc3NhZ2VDb250ZW50IiwidGltZSIsImlkIiwibWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFDQTtFQUNBQTtJQUNBO01BQ0E7TUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBSjtNQUNBSztJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQUM7UUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQUY7UUFDQUc7UUFDQUM7VUFBQTtZQUFBO1lBQUE7Y0FBQTtnQkFBQTtrQkFBQTtvQkFDQVgsbUNBRUE7b0JBQUE7b0JBQUEsT0FDQVk7a0JBQUE7b0JBQUFDO29CQUFBO29CQUFBLE9BQ0FBO2tCQUFBO29CQUFBQztvQkFBQTtvQkFBQSxPQUdBQTtrQkFBQTtvQkFBQUM7b0JBQ0FDLDZEQUVBO29CQUNBO3NCQUNBO3NCQUNBVDt3QkFDQVU7d0JBQ0FDO3dCQUNBQztzQkFDQTtvQkFDQSxPQUNBO3NCQUNBWjt3QkFDQVU7d0JBQ0FDO3dCQUNBQztzQkFDQTtvQkFDQTtrQkFBQTtrQkFBQTtvQkFBQTtnQkFBQTtjQUFBO1lBQUE7VUFBQSxDQUNBO1VBQUE7WUFBQTtVQUFBO1VBQUE7UUFBQTtRQUNBQztVQUNBYjtZQUNBVTtZQUNBQztZQUNBQztVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FFO01BQUE7TUFDQTtRQUNBO01BQ0E7TUFDQWQ7UUFDQUM7UUFBQTtRQUNBYztRQUNBQztRQUNBQztVQUNBO1FBQ0E7UUFDQWI7VUFDQTtVQUNBSjtZQUNBVTtZQUNBQztZQUNBQztVQUNBO1VBQ0E7WUFDQWxCO1lBQ0F3QjtZQUNBQztZQUNBQztVQUNBO1VBQ0E7VUFDQXBCO1lBQ0FDO1lBQUE7WUFDQVY7WUFDQThCO1lBQ0FqQjtjQUNBO2dCQUNBO2NBQUE7WUFFQTtZQUNBUztjQUNBO1lBQ0E7VUFDQTtRQUNBO1FBQ0FBO1VBQ0FiO1lBQ0FVO1lBQ0FDO1lBQ0FDO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiNjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8dmlldz5cclxuXHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJzdGF0dXMtYmFyXCI+XHJcbiAgICAgICAgICAgIDxuYXZpZ2F0b3Igb3Blbi10eXBlPVwibmF2aWdhdGVCYWNrXCIgY2xhc3M9XCJsb2dpbi1jXCIgaG92ZXItY2xhc3M9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2JhY2sucG5nXCIgY2xhc3M9XCJsb2dpbi1iYWNrXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPC9uYXZpZ2F0b3I+XHJcbiAgICAgICAgICAgIDwhLS0gPHZpZXcgY2xhc3M9XCJsb2dpbi1jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9iYWNrLnBuZ1wiIGNsYXNzPVwibG9naW4tYmFja1wiIEB0YXA9XCJiYWNrVG9JbmRleFwiPjwvaW1hZ2U+IFxyXG4gICAgPC92aWV3PiAtLT5cclxuICAgICAgICA8L3ZpZXc+XHJcblxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEB0YXA9XCJjaG9vc2VGaWxlXCI+Q2hvb3NlIEZpbGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBAdGFwPVwidXBsb2FkRmlsZVwiIDpkaXNhYmxlZD1cIiFmaWxlXCI+VXBsb2FkIEZpbGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiaW5wdXRcIiB2LW1vZGVsPVwicXVlcnlcIiBtYXhsZW5ndGg9XCItMVwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwcm9tcHQgaGVyZSxmb3IgZXhhbXBsZTogcHJvdmlkZSB0d28gcXVlc3Rpb25zIGJhc2VkIG9uIHRoaXMgZG9jdW1lbnRcIj48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IEJBU0VfVVJMLCBTRVJWRVJfUE9SVCB9IGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gcXVlcnk6ICcnLFxyXG4gICAgICAgICAgICBxdWVyeTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJbnB1dCcpIHx8ICcnLFxyXG4gICAgICAgICAgICBmaWxlOiAnJyxcclxuICAgICAgICAgICAgcm9vbUlEOiAnJyxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKGUpIHtcclxuICAgICAgICB0aGlzLnJvb21JRCA9IGUucm9vbUlEO1xyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgcXVlcnkobmV3VmFsKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySW5wdXQnLCBuZXdWYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYmFja1RvSW5kZXgoKSB7XHJcbiAgICAgICAgICAgIHVuaS5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi9jaGF0cm9vbS9jaGF0cm9vbSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaG9vc2VGaWxlKCkge1xyXG4gICAgICAgICAgICB1bmkuY2hvb3NlRmlsZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZmlsZScsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBhc3luYyAoY2hvb3NlRmlsZVJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBjaG9vc2VGaWxlUmVzLnRlbXBGaWxlc1swXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRmV0Y2ggdGhlIEJsb2IgZnJvbSB0aGUgQmxvYiBVUkxcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZpbGUucGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVhZCB0aGUgZmlyc3QgZmV3IGJ5dGVzIG9mIHRoZSBCbG9iXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLnNsaWNlKDAsIDUpLmFycmF5QnVmZmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGRmU2lnbmF0dXJlID0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKGFycmF5QnVmZmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIFBERiBzaWduYXR1cmVcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGRmU2lnbmF0dXJlID09PSAnJVBERi0nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IGZpbGUucGF0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0ZpbGUgc2VsZWN0ZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ09ubHkgUERGIGZpbGVzIGFyZSBhbGxvd2VkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiAoY2hvb3NlRmlsZUVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRmlsZSBzZWxlY3Rpb24gZmFpbGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwbG9hZEZpbGUoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5maWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdW5pLnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBCQVNFX1VSTCArICc6JyArIFNFUlZFUl9QT1JUICsgJy9maWxlLXVwbG9hZCcsIC8vIHlvdXIgdXBsb2FkIGFwaSB1cmxcclxuICAgICAgICAgICAgICAgIGZpbGVQYXRoOiB0aGlzLmZpbGUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmlsZScsXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICdxdWVyeSc6IHRoaXMucXVlcnksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdXBsb2FkRmlsZVJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gdXBsb2FkRmlsZVJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0ZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBBSU1zZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vbUlEOiB0aGlzLnJvb21JRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUNvbnRlbnQ6IHJlc3BvbnNlRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2dwdE91dHB1dFRleHQnLCBBSU1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IEJBU0VfVVJMICsgJzonICsgU0VSVkVSX1BPUlQgKyAnL2dyb3VwY2hhdCcsIC8vIHJlcGxhY2Ugd2l0aCB5b3VyIGJhY2tlbmQgc2VydmVyIHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBBSU1zZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQUkgQ2hhdCBkYXRhIHNhdmVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgY2hhdCBkYXRhOiAnICsgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6ICh1cGxvYWRGaWxlRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdGaWxlIHVwbG9hZCBmYWlsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuLnN0YXR1cy1iYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4OHJweDtcclxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zdGF0dXMtYmFyLWhlaWdodCk7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgei1pbmRleDogOTk4O1xyXG4gICAgY29sb3I6ICMyNzI4MzI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Nik7XHJcblxyXG4gICAgLmxvZ2luLWMge1xyXG4gICAgICAgIHdpZHRoOiA2MHJweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcnB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMnJweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMycnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxNjBycHggMjhycHggMTYwcnB4O1xyXG59XHJcblxyXG4ubG9naW4tYmFjayB7XHJcbiAgICB3aWR0aDogMjBycHg7XHJcbiAgICBoZWlnaHQ6IDM0cnB4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDU0cnB4O1xyXG4gICAgcGFkZGluZzogMCAyNHJweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDE1MHJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzZycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHJnYmEoMjUsIDI5LCAzNSwgMSk7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///65\n");

/***/ }),
/* 66 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 67)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 67 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 68 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 69 */
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/register/register.vue?mpType=page ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=6f6d9236&mpType=page */ 70);\n/* harmony import */ var _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js&mpType=page */ 75);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/register/register.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDdUU7QUFDTDs7O0FBR2xFO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZjZkOTIzNiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///69\n");

/***/ }),
/* 70 */
/*!**********************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/register/register.vue?vue&type=template&id=6f6d9236&mpType=page ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=6f6d9236&mpType=page */ 71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_6f6d9236_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 71 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/register/register.vue?vue&type=template&id=6f6d9236&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "login-bg"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "container"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "login-c"),
              attrs: { _i: 2 },
              on: { click: _vm.backToIndex },
            },
            [
              _c("image", {
                staticClass: _vm._$s(3, "sc", "login-back"),
                attrs: {
                  src: _vm._$s(3, "a-src", __webpack_require__(/*! ../../static/back.png */ 55)),
                  _i: 3,
                },
              }),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(4, "sc", "content"), attrs: { _i: 4 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(5, "sc", "head"),
                  attrs: { _i: 5 },
                  on: { click: _vm.modify },
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(6, "sc", "head-img"),
                    attrs: {
                      src: _vm._$s(
                        6,
                        "a-src",
                        "../../static/images/" + _vm.nowimg + ".png"
                      ),
                      _i: 6,
                    },
                  }),
                  _c("image", {
                    staticClass: _vm._$s(7, "sc", "down"),
                    attrs: {
                      src: _vm._$s(
                        7,
                        "a-src",
                        __webpack_require__(/*! ../../static/down.png */ 72)
                      ),
                      _i: 7,
                    },
                  }),
                ]
              ),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.name,
                    expression: "name",
                  },
                ],
                staticClass: _vm._$s(8, "sc", "user"),
                attrs: { _i: 8 },
                domProps: { value: _vm._$s(8, "v-model", _vm.name) },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.name = $event.target.value
                  },
                },
              }),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password,
                    expression: "password",
                  },
                ],
                staticClass: _vm._$s(9, "sc", "user"),
                attrs: { _i: 9 },
                domProps: { value: _vm._$s(9, "v-model", _vm.password) },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password = $event.target.value
                  },
                },
              }),
              _c("view", {
                staticClass: _vm._$s(10, "sc", "join"),
                attrs: { _i: 10 },
                on: { click: _vm.register },
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(11, "sc", "modify"),
                  attrs: {
                    animation: _vm._$s(11, "a-animation", _vm.animationData),
                    _i: 11,
                  },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(12, "sc", "modfiy-mian"),
                      attrs: { _i: 12 },
                    },
                    _vm._l(
                      _vm._$s(13, "f", { forItems: _vm.img }),
                      function (e, index, $20, $30) {
                        return _c(
                          "view",
                          {
                            key: _vm._$s(13, "f", {
                              forIndex: $20,
                              key: index,
                            }),
                            staticClass: _vm._$s("13-" + $30, "sc", "us-img"),
                            attrs: { _i: "13-" + $30 },
                            on: {
                              click: function ($event) {
                                return _vm.selected(index)
                              },
                            },
                          },
                          [
                            _c("image", {
                              attrs: {
                                src: _vm._$s(
                                  "14-" + $30,
                                  "a-src",
                                  "../../static/images/" + e.i + ".png"
                                ),
                                _i: "14-" + $30,
                              },
                            }),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s("15-" + $30, "sc", "dd"),
                                attrs: { _i: "15-" + $30 },
                              },
                              [
                                _c("view", {
                                  staticClass: _vm._$s(
                                    "16-" + $30,
                                    "sc",
                                    "ddd"
                                  ),
                                  style: _vm._$s("16-" + $30, "s", {
                                    opacity: e.x,
                                  }),
                                  attrs: { _i: "16-" + $30 },
                                }),
                              ]
                            ),
                          ]
                        )
                      }
                    ),
                    0
                  ),
                ]
              ),
              _c("view", {
                staticClass: _vm._$s(17, "sc", "bg"),
                style: _vm._$s(17, "s", { display: _vm.bg }),
                attrs: { _i: 17 },
                on: { click: _vm.modify },
              }),
            ]
          ),
          _vm._$s(18, "i", _vm.showSuccessToast)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(18, "sc", "custom-toast"),
                  attrs: { _i: 18 },
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(19, "sc", "toast-image"),
                    attrs: {
                      src: _vm._$s(
                        19,
                        "a-src",
                        __webpack_require__(/*! ../../static/submit.png */ 73)
                      ),
                      _i: 19,
                    },
                  }),
                ]
              )
            : _vm._e(),
          _vm._$s(20, "i", _vm.showFailureToast)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(20, "sc", "custom-toast"),
                  attrs: { _i: 20 },
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(21, "sc", "toast-image"),
                    attrs: {
                      src: _vm._$s(
                        21,
                        "a-src",
                        __webpack_require__(/*! ../../static/error.png */ 74)
                      ),
                      _i: 21,
                    },
                  }),
                ]
              )
            : _vm._e(),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 72 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/static/down.png ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/down.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjcyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvZG93bi5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///72\n");

/***/ }),
/* 73 */
/*!******************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/static/submit.png ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/submit.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjczLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvc3VibWl0LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///73\n");

/***/ }),
/* 74 */
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/static/error.png ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/error.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijc0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvZXJyb3IucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///74\n");

/***/ }),
/* 75 */
/*!****************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/register/register.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js&mpType=page */ 76);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXV0QixDQUFnQix5dEJBQUcsRUFBQyIsImZpbGUiOiI3NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///75\n");

/***/ }),
/* 76 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/register/register.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 66));\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 47));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 68));\nvar _config = __webpack_require__(/*! ../../config.js */ 15);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      // cont: \"\",\n      // arr: ['1', '2, 3, 4, 5'],\n      // \n      name: '',\n      password: '',\n      nowimg: 'a',\n      animationData: {},\n      bb: false,\n      showSuccessToast: false,\n      showFailureToast: false,\n      bg: 'none',\n      img: [{\n        i: 'a',\n        x: 1\n      }, {\n        i: 'b',\n        x: 0\n      }, {\n        i: 'c',\n        x: 0\n      }, {\n        i: 'd',\n        x: 0\n      }, {\n        i: 'e',\n        x: 0\n      }, {\n        i: 'f',\n        x: 0\n      }, {\n        i: 'g',\n        x: 0\n      }, {\n        i: 'h',\n        x: 0\n      }, {\n        i: 'i',\n        x: 0\n      }, {\n        i: 'j',\n        x: 0\n      }, {\n        i: 'k',\n        x: 0\n      }, {\n        i: 'l',\n        x: 0\n      }, {\n        i: 'm',\n        x: 0\n      }, {\n        i: 'n',\n        x: 0\n      }, {\n        i: 'o',\n        x: 0\n      }, {\n        i: 'p',\n        x: 0\n      }, {\n        i: 'q',\n        x: 0\n      }, {\n        i: 'r',\n        x: 0\n      }, {\n        i: 's',\n        x: 0\n      }, {\n        i: 't',\n        x: 0\n      }],\n      nameList: []\n    };\n  },\n  methods: {\n    backToIndex: function backToIndex() {\n      uni.navigateTo({\n        url: '../index/index'\n      });\n    },\n    checkIfUserExists: function checkIfUserExists() {\n      var _this = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var _yield$uni$request, _yield$uni$request2, error, res;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return uni.request({\n                  url: _config.BASE_URL + ':' + _config.SERVER_PORT + \"/users/\".concat(_this.name),\n                  method: 'GET'\n                });\n              case 2:\n                _yield$uni$request = _context.sent;\n                _yield$uni$request2 = (0, _slicedToArray2.default)(_yield$uni$request, 2);\n                error = _yield$uni$request2[0];\n                res = _yield$uni$request2[1];\n                if (!(res.statusCode === 201)) {\n                  _context.next = 10;\n                  break;\n                }\n                return _context.abrupt(\"return\", false);\n              case 10:\n                return _context.abrupt(\"return\", true);\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    // async checkIfUserExists() {\n    // \ttry {\n    // \t\tconst res = await axios.get(`http://129.12.211.74:30000/users/${this.name}`);\n    // \t\treturn res.status === 200;\n    // \t} catch (error) {\n    // \t\treturn false;  // User does not exist\n    // \t}\n    // },\n    // async checkIfUserExists() {\n    // \tconst res = await uni.request({\n    // \t\turl: `http://129.12.211.74:30000/users?username=${this.name}`,\n    // \t\tmethod: 'GET'\n    // \t});\n    // \treturn res.data.length > 0;  // If the user exists, the length will be more than 0\n    // },\n    // send data to server(test version for connect the socket.io)\n    // send() {\n    // \t// if the input is not empty\n    // \tif (this.cont.length > 0) {\n    // \t\t// create a temp variable to store the input\n    // \t\tlet temp = this.cont;\n    // \t\t// send the data to server\n    // \t\tthis.socket.emit('message', temp);\n    // \t\t// clear the input\n    // \t\tthis.cont = \"\";\n    // \t}\n    // },\n    // receive data from server(test version for connect the socket.io)\n    // receive() {\n    // \tthis.socket.on('bdmsg', (data) => {\n    // \t\t// console.log(data);\n    // \t\tthis.arr.push(data);\n    // \t});\n    // },\n    //modify the head image\n    modify: function modify() {\n      this.bb = !this.bb;\n      if (this.bb) {\n        this.bg = 'block';\n      } else {\n        this.bg = 'none';\n      }\n      var animation = uni.createAnimation({\n        duration: 400,\n        timingFunction: 'ease'\n      });\n      this.animation = animation;\n      if (this.bb) {\n        animation.bottom(0).step();\n      } else {\n        animation.bottom().step();\n      }\n      this.animationData = animation.export();\n    },\n    //select the head image\n    selected: function selected(index) {\n      this.nowimg = this.img[index].i;\n      this.img.forEach(function (e) {\n        e.x = 0;\n      });\n      this.img[index].x = 1;\n    },\n    // register\n    register: function register() {\n      var _this2 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var userExists;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (!(_this2.name.length > 0 && _this2.password.length > 0)) {\n                  _context2.next = 7;\n                  break;\n                }\n                _context2.next = 3;\n                return _this2.checkIfUserExists();\n              case 3:\n                userExists = _context2.sent;\n                if (userExists) {\n                  uni.showToast({\n                    title: 'Username already exists, please choose another name!',\n                    icon: 'none',\n                    duration: 2000\n                  });\n                } else {\n                  uni.request({\n                    url: _config.BASE_URL + ':' + _config.SERVER_PORT + '/users',\n                    // replace with your server's URL\n                    method: 'POST',\n                    data: {\n                      username: _this2.name,\n                      password: _this2.password,\n                      img: _this2.nowimg\n                    },\n                    success: function success(res) {\n                      if (res.statusCode === 200) {\n                        _this2.showSuccessToast = true;\n                        // uni.showToast({\n                        //     title: 'Registration successful!',\n                        //     icon: '../../static/submit.png',\n                        //     duration: 2000\n                        // });\n                        setTimeout(function () {\n                          uni.navigateTo({\n                            url: '../index/index'\n                          });\n                        }, 1200);\n                      } else {\n                        _this2.showFailureToast = true;\n                        setTimeout(function () {\n                          _this2.showFailureToast = false;\n                        }, 1200);\n\n                        // uni.showToast({\n                        //     title: 'Registration failed, please try again!',\n                        //     icon: 'none',\n                        //     duration: 2000\n                        // });\n                      }\n                    },\n\n                    fail: function fail(error) {\n                      __f__(\"error\", error, \" at pages/register/register.vue:242\");\n                      uni.showToast({\n                        title: 'Unable to connect to server.please contact the author longze!',\n                        icon: 'none',\n                        duration: 2000\n                      });\n                    }\n                  });\n                }\n                _context2.next = 8;\n                break;\n              case 7:\n                uni.showToast({\n                  title: 'Please input your name and password',\n                  icon: 'none',\n                  duration: 2000\n                });\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJuYW1lIiwicGFzc3dvcmQiLCJub3dpbWciLCJhbmltYXRpb25EYXRhIiwiYmIiLCJzaG93U3VjY2Vzc1RvYXN0Iiwic2hvd0ZhaWx1cmVUb2FzdCIsImJnIiwiaW1nIiwiaSIsIngiLCJuYW1lTGlzdCIsIm1ldGhvZHMiLCJiYWNrVG9JbmRleCIsInVuaSIsInVybCIsImNoZWNrSWZVc2VyRXhpc3RzIiwibWV0aG9kIiwiZXJyb3IiLCJyZXMiLCJtb2RpZnkiLCJkdXJhdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwiYW5pbWF0aW9uIiwic2VsZWN0ZWQiLCJlIiwicmVnaXN0ZXIiLCJ1c2VyRXhpc3RzIiwidGl0bGUiLCJpY29uIiwidXNlcm5hbWUiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsImZhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUF1RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0E7RUFDQUE7SUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQyxNQUNBO1FBQUFDO1FBQUFDO01BQUEsR0FDQTtRQUFBRDtRQUFBQztNQUFBLEdBQ0E7UUFBQUQ7UUFBQUM7TUFBQSxHQUNBO1FBQUFEO1FBQUFDO01BQUEsR0FDQTtRQUFBRDtRQUFBQztNQUFBLEdBQ0E7UUFBQUQ7UUFBQUM7TUFBQSxHQUNBO1FBQUFEO1FBQUFDO01BQUEsR0FDQTtRQUFBRDtRQUFBQztNQUFBLEdBQ0E7UUFBQUQ7UUFBQUM7TUFBQSxHQUNBO1FBQUFEO1FBQUFDO01BQUEsR0FDQTtRQUFBRDtRQUFBQztNQUFBLEdBQ0E7UUFBQUQ7UUFBQUM7TUFBQSxHQUNBO1FBQUFEO1FBQUFDO01BQUEsR0FDQTtRQUFBRDtRQUFBQztNQUFBLEdBQ0E7UUFBQUQ7UUFBQUM7TUFBQSxHQUNBO1FBQUFEO1FBQUFDO01BQUEsR0FDQTtRQUFBRDtRQUFBQztNQUFBLEdBQ0E7UUFBQUQ7UUFBQUM7TUFBQSxHQUNBO1FBQUFEO1FBQUFDO01BQUEsR0FDQTtRQUFBRDtRQUFBQztNQUFBLEVBQ0E7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0FDO1FBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBLE9BQ0FGO2tCQUNBQztrQkFDQUU7Z0JBQ0E7Y0FBQTtnQkFBQTtnQkFBQTtnQkFIQUM7Z0JBQUFDO2dCQUFBLE1BSUFBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBLGlDQUNBO2NBQUE7Z0JBQUEsaUNBR0E7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7TUFDQTtRQUNBQztRQUNBQztNQUNBO01BQ0E7TUFDQTtRQUNBQztNQUVBO1FBQ0FBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO1FBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQSxNQUNBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2dCQUFBLE9BQ0E7Y0FBQTtnQkFBQUM7Z0JBRUE7a0JBQ0FiO29CQUNBYztvQkFDQUM7b0JBQ0FSO2tCQUNBO2dCQUNBO2tCQUVBUDtvQkFDQUM7b0JBQUE7b0JBQ0FFO29CQUNBbEI7c0JBQ0ErQjtzQkFDQTdCO3NCQUNBTztvQkFDQTtvQkFDQXVCO3NCQUNBO3dCQUNBO3dCQUNBO3dCQUNBO3dCQUNBO3dCQUNBO3dCQUNBO3dCQUNBQzswQkFDQWxCOzRCQUNBQzswQkFDQTt3QkFDQTtzQkFDQTt3QkFDQTt3QkFDQWlCOzBCQUNBO3dCQUNBOzt3QkFFQTt3QkFDQTt3QkFDQTt3QkFDQTt3QkFDQTtzQkFDQTtvQkFDQTs7b0JBQ0FDO3NCQUNBO3NCQUNBbkI7d0JBQ0FjO3dCQUNBQzt3QkFDQVI7c0JBQ0E7b0JBQ0E7a0JBQ0E7Z0JBRUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFHQVA7a0JBQ0FjO2tCQUNBQztrQkFDQVI7Z0JBQ0E7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFHQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiI3Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImxvZ2luLWJnXCI+XHJcblxyXG5cclxuXHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsb2dpbi1jXCIgaG92ZXItY2xhc3M9XCJub25lXCIgQHRhcD1cImJhY2tUb0luZGV4XCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9iYWNrLnBuZ1wiIGNsYXNzPVwibG9naW4tYmFja1wiPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblxyXG5cdFx0XHRcdDwhLS0gPG5hdmlnYXRvciBvcGVuLXR5cGU9XCJuYXZpZ2F0ZUJhY2tcIiBjbGFzcz1cImxvZ2luLWNcIiBob3Zlci1jbGFzcz1cIm5vbmVcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvYmFjay5wbmdcIiBjbGFzcz1cImxvZ2luLWJhY2tcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L25hdmlnYXRvcj4gLS0+XHJcblxyXG5cclxuXHRcdFx0XHQ8IS0tIGZpcnN0IHRlc2luZyBjb2RlIGZvciBjb25uZWN0aW9uIG9mIHNvY2tldC5pbyAgLS0+XHJcblx0XHRcdFx0PCEtLSBtYWluIHZpZXcgLS0+XHJcblx0XHRcdFx0PCEtLSA8dmlldyBjbGFzcz1cIm1haW5cIj5cclxuICAgICAgPHZpZXcgdi1mb3I9XCJlbGVtZW50IGluIGFyclwiIDprZXk9XCJlbGVtZW50XCIgY2xhc3M9XCJ0ZXh0LWFyZWFcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInRpdGxlXCI+e3sgZWxlbWVudCB9fTwvdGV4dD5cclxuICAgICAgPC92aWV3PlxyXG4gICAgPC92aWV3PiAtLT5cclxuXHJcblx0XHRcdFx0PCEtLXB1dCBhdCB0aGUgYm90dG9tICAtLT5cclxuXHRcdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwiZm9vdFwiPiAtLT5cclxuXHRcdFx0XHQ8IS0tIGlucHV0IC0tPlxyXG5cdFx0XHRcdDwhLS0gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJjb250XCIgdi1tb2RlbD1cImNvbnRcIj4gLS0+XHJcblx0XHRcdFx0PCEtLSBzdW1iaXQgYnV0dG9uIC0tPlxyXG5cdFx0XHRcdDwhLS0gPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdFwiIGZvcm0tdHlwZT1cInN1Ym1pdFwiIGJpbmR0YXA9XCJzdWJtaXRcIiBAdGFwPVwic2VuZFwiPnN1Ym1pdDwvYnV0dG9uPlxyXG5cdFx0PC92aWV3PiAtLT5cclxuXHRcdFx0XHQ8IS0tICAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRcIiBAY2xpY2s9XCJtb2RpZnlcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiJy4uLy4uL3N0YXRpYy9pbWFnZXMvJyArIG5vd2ltZyArICcucG5nJ1wiIG1vZGU9XCJhc3BlY3RGaWxsXCIgY2xhc3M9XCJoZWFkLWltZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2Rvd24ucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiIGNsYXNzPVwiZG93blwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidXNlclwiIHBsYWNlaG9sZGVyPVwiZ2l2ZSBhIG5ldyBuYW1lXCIgdi1tb2RlbD1cIm5hbWVcIlxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXItc3R5bGU9XCJjb2xvcjojOTk5O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MzJycHhcIiAvPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidXNlclwiIHBsYWNlaG9sZGVyPVwiZ2l2ZSBhIG5ldyBwYXNzd29yZFwiIHYtbW9kZWw9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlci1zdHlsZT1cImNvbG9yOiM5OTk7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZTozMnJweFwiIC8+XHJcblx0XHRcdFx0PCEtLSBqb2luIHRoZSBjaGF0IHJvb20sIGp1bXAgdG8gYW5vdGhlciBwYWdlIC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiam9pblwiIEB0YXA9XCJyZWdpc3RlclwiPnJlZ2lzdGVyPC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1vZGlmeVwiIDphbmltYXRpb249XCJhbmltYXRpb25EYXRhXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1vZGZpeS1taWFuXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHYtZm9yPVwiKGUsIGluZGV4KSBpbiBpbWdcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInVzLWltZ1wiIEB0YXA9XCJzZWxlY3RlZChpbmRleClcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIicuLi8uLi9zdGF0aWMvaW1hZ2VzLycgKyBlLmkgKyAnLnBuZydcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRkZFwiIDpzdHlsZT1cInsgb3BhY2l0eTogZS54IH1cIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmdcIiBAdGFwPVwibW9kaWZ5XCIgOnN0eWxlPVwieyBkaXNwbGF5OiBiZyB9XCI+PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0gdXNlciByZWdpc3RlciBzdWNjdXNzIHRvYXN0IC0tPlxyXG5cdFx0XHQ8dmlldyB2LWlmPVwic2hvd1N1Y2Nlc3NUb2FzdFwiIGNsYXNzPVwiY3VzdG9tLXRvYXN0XCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9zdWJtaXQucG5nXCIgY2xhc3M9XCJ0b2FzdC1pbWFnZVwiIC8+XHJcblx0XHRcdFx0UmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwhXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgdi1pZj1cInNob3dGYWlsdXJlVG9hc3RcIiBjbGFzcz1cImN1c3RvbS10b2FzdFwiPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvZXJyb3IucG5nXCIgY2xhc3M9XCJ0b2FzdC1pbWFnZVwiIC8+XHJcblx0XHRcdFx0UmVnaXN0cmF0aW9uIGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2FpbiFcclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBCQVNFX1VSTCwgU0VSVkVSX1BPUlQgfSBmcm9tICcuLi8uLi9jb25maWcuanMnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdC8vIGNvbnQ6IFwiXCIsXHJcblx0XHRcdC8vIGFycjogWycxJywgJzIsIDMsIDQsIDUnXSxcclxuXHRcdFx0Ly8gXHJcblx0XHRcdG5hbWU6ICcnLFxyXG5cdFx0XHRwYXNzd29yZDogJycsXHJcblx0XHRcdG5vd2ltZzogJ2EnLFxyXG5cdFx0XHRhbmltYXRpb25EYXRhOiB7fSxcclxuXHRcdFx0YmI6IGZhbHNlLFxyXG5cdFx0XHRzaG93U3VjY2Vzc1RvYXN0OiBmYWxzZSxcclxuXHRcdFx0c2hvd0ZhaWx1cmVUb2FzdDogZmFsc2UsXHJcblx0XHRcdGJnOiAnbm9uZScsXHJcblx0XHRcdGltZzogW1xyXG5cdFx0XHRcdHsgaTogJ2EnLCB4OiAxIH0sXHJcblx0XHRcdFx0eyBpOiAnYicsIHg6IDAgfSxcclxuXHRcdFx0XHR7IGk6ICdjJywgeDogMCB9LFxyXG5cdFx0XHRcdHsgaTogJ2QnLCB4OiAwIH0sXHJcblx0XHRcdFx0eyBpOiAnZScsIHg6IDAgfSxcclxuXHRcdFx0XHR7IGk6ICdmJywgeDogMCB9LFxyXG5cdFx0XHRcdHsgaTogJ2cnLCB4OiAwIH0sXHJcblx0XHRcdFx0eyBpOiAnaCcsIHg6IDAgfSxcclxuXHRcdFx0XHR7IGk6ICdpJywgeDogMCB9LFxyXG5cdFx0XHRcdHsgaTogJ2onLCB4OiAwIH0sXHJcblx0XHRcdFx0eyBpOiAnaycsIHg6IDAgfSxcclxuXHRcdFx0XHR7IGk6ICdsJywgeDogMCB9LFxyXG5cdFx0XHRcdHsgaTogJ20nLCB4OiAwIH0sXHJcblx0XHRcdFx0eyBpOiAnbicsIHg6IDAgfSxcclxuXHRcdFx0XHR7IGk6ICdvJywgeDogMCB9LFxyXG5cdFx0XHRcdHsgaTogJ3AnLCB4OiAwIH0sXHJcblx0XHRcdFx0eyBpOiAncScsIHg6IDAgfSxcclxuXHRcdFx0XHR7IGk6ICdyJywgeDogMCB9LFxyXG5cdFx0XHRcdHsgaTogJ3MnLCB4OiAwIH0sXHJcblx0XHRcdFx0eyBpOiAndCcsIHg6IDAgfSxcclxuXHRcdFx0XSxcclxuXHRcdFx0bmFtZUxpc3Q6IFtdLFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0YmFja1RvSW5kZXgoKSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICcuLi9pbmRleC9pbmRleCcsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGFzeW5jIGNoZWNrSWZVc2VyRXhpc3RzKCkge1xyXG5cdFx0XHRcdGNvbnN0IFtlcnJvcixyZXNdID0gYXdhaXQgdW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiBCQVNFX1VSTCArICc6JyArIFNFUlZFUl9QT1JUICsgYC91c2Vycy8ke3RoaXMubmFtZX1gLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiAnR0VUJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMjAxKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly8gYXN5bmMgY2hlY2tJZlVzZXJFeGlzdHMoKSB7XHJcblx0XHQvLyBcdHRyeSB7XHJcblx0XHQvLyBcdFx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vMTI5LjEyLjIxMS43NDozMDAwMC91c2Vycy8ke3RoaXMubmFtZX1gKTtcclxuXHRcdC8vIFx0XHRyZXR1cm4gcmVzLnN0YXR1cyA9PT0gMjAwO1xyXG5cdFx0Ly8gXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Ly8gXHRcdHJldHVybiBmYWxzZTsgIC8vIFVzZXIgZG9lcyBub3QgZXhpc3RcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfSxcclxuXHRcdC8vIGFzeW5jIGNoZWNrSWZVc2VyRXhpc3RzKCkge1xyXG5cdFx0Ly8gXHRjb25zdCByZXMgPSBhd2FpdCB1bmkucmVxdWVzdCh7XHJcblx0XHQvLyBcdFx0dXJsOiBgaHR0cDovLzEyOS4xMi4yMTEuNzQ6MzAwMDAvdXNlcnM/dXNlcm5hbWU9JHt0aGlzLm5hbWV9YCxcclxuXHRcdC8vIFx0XHRtZXRob2Q6ICdHRVQnXHJcblx0XHQvLyBcdH0pO1xyXG5cclxuXHRcdC8vIFx0cmV0dXJuIHJlcy5kYXRhLmxlbmd0aCA+IDA7ICAvLyBJZiB0aGUgdXNlciBleGlzdHMsIHRoZSBsZW5ndGggd2lsbCBiZSBtb3JlIHRoYW4gMFxyXG5cdFx0Ly8gfSxcclxuXHRcdC8vIHNlbmQgZGF0YSB0byBzZXJ2ZXIodGVzdCB2ZXJzaW9uIGZvciBjb25uZWN0IHRoZSBzb2NrZXQuaW8pXHJcblx0XHQvLyBzZW5kKCkge1xyXG5cdFx0Ly8gXHQvLyBpZiB0aGUgaW5wdXQgaXMgbm90IGVtcHR5XHJcblx0XHQvLyBcdGlmICh0aGlzLmNvbnQubGVuZ3RoID4gMCkge1xyXG5cdFx0Ly8gXHRcdC8vIGNyZWF0ZSBhIHRlbXAgdmFyaWFibGUgdG8gc3RvcmUgdGhlIGlucHV0XHJcblx0XHQvLyBcdFx0bGV0IHRlbXAgPSB0aGlzLmNvbnQ7XHJcblx0XHQvLyBcdFx0Ly8gc2VuZCB0aGUgZGF0YSB0byBzZXJ2ZXJcclxuXHRcdC8vIFx0XHR0aGlzLnNvY2tldC5lbWl0KCdtZXNzYWdlJywgdGVtcCk7XHJcblx0XHQvLyBcdFx0Ly8gY2xlYXIgdGhlIGlucHV0XHJcblx0XHQvLyBcdFx0dGhpcy5jb250ID0gXCJcIjtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfSxcclxuXHRcdC8vIHJlY2VpdmUgZGF0YSBmcm9tIHNlcnZlcih0ZXN0IHZlcnNpb24gZm9yIGNvbm5lY3QgdGhlIHNvY2tldC5pbylcclxuXHRcdC8vIHJlY2VpdmUoKSB7XHJcblx0XHQvLyBcdHRoaXMuc29ja2V0Lm9uKCdiZG1zZycsIChkYXRhKSA9PiB7XHJcblx0XHQvLyBcdFx0Ly8gY29uc29sZS5sb2coZGF0YSk7XHJcblx0XHQvLyBcdFx0dGhpcy5hcnIucHVzaChkYXRhKTtcclxuXHRcdC8vIFx0fSk7XHJcblx0XHQvLyB9LFxyXG5cdFx0Ly9tb2RpZnkgdGhlIGhlYWQgaW1hZ2VcclxuXHRcdG1vZGlmeSgpIHtcclxuXHRcdFx0dGhpcy5iYiA9ICF0aGlzLmJiO1xyXG5cdFx0XHRpZiAodGhpcy5iYikge1xyXG5cdFx0XHRcdHRoaXMuYmcgPSAnYmxvY2snO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuYmcgPSAnbm9uZSc7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIGFuaW1hdGlvbiA9IHVuaS5jcmVhdGVBbmltYXRpb24oe1xyXG5cdFx0XHRcdGR1cmF0aW9uOiA0MDAsXHJcblx0XHRcdFx0dGltaW5nRnVuY3Rpb246ICdlYXNlJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0dGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cclxuXHRcdFx0aWYgKHRoaXMuYmIpIHtcclxuXHRcdFx0XHRhbmltYXRpb24uYm90dG9tKDApLnN0ZXAoKVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhbmltYXRpb24uYm90dG9tKCkuc3RlcCgpXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5hbmltYXRpb25EYXRhID0gYW5pbWF0aW9uLmV4cG9ydCgpXHJcblx0XHR9LFxyXG5cdFx0Ly9zZWxlY3QgdGhlIGhlYWQgaW1hZ2VcclxuXHRcdHNlbGVjdGVkKGluZGV4KSB7XHJcblx0XHRcdHRoaXMubm93aW1nID0gdGhpcy5pbWdbaW5kZXhdLmk7XHJcblx0XHRcdHRoaXMuaW1nLmZvckVhY2goKGUpID0+IHtcclxuXHRcdFx0XHRlLnggPSAwO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHR0aGlzLmltZ1tpbmRleF0ueCA9IDE7XHJcblx0XHR9LFxyXG5cdFx0Ly8gcmVnaXN0ZXJcclxuXHRcdGFzeW5jIHJlZ2lzdGVyKCkge1xyXG5cdFx0XHRpZiAodGhpcy5uYW1lLmxlbmd0aCA+IDAgJiYgdGhpcy5wYXNzd29yZC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0Y29uc3QgdXNlckV4aXN0cyA9IGF3YWl0IHRoaXMuY2hlY2tJZlVzZXJFeGlzdHMoKTtcclxuXHJcblx0XHRcdFx0aWYgKHVzZXJFeGlzdHMpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ1VzZXJuYW1lIGFscmVhZHkgZXhpc3RzLCBwbGVhc2UgY2hvb3NlIGFub3RoZXIgbmFtZSEnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0dXJsOiBCQVNFX1VSTCArICc6JyArIFNFUlZFUl9QT1JUICsgJy91c2VycycsIC8vIHJlcGxhY2Ugd2l0aCB5b3VyIHNlcnZlcidzIFVSTFxyXG5cdFx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdHVzZXJuYW1lOiB0aGlzLm5hbWUsXHJcblx0XHRcdFx0XHRcdFx0cGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcblx0XHRcdFx0XHRcdFx0aW1nOiB0aGlzLm5vd2ltZ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd1N1Y2Nlc3NUb2FzdCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vICAgICB0aXRsZTogJ1JlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIScsXHJcblx0XHRcdFx0XHRcdFx0XHQvLyAgICAgaWNvbjogJy4uLy4uL3N0YXRpYy9zdWJtaXQucG5nJyxcclxuXHRcdFx0XHRcdFx0XHRcdC8vICAgICBkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogJy4uL2luZGV4L2luZGV4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9LCAxMjAwKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93RmFpbHVyZVRvYXN0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dGYWlsdXJlVG9hc3QgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdH0sIDEyMDApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gICAgIHRpdGxlOiAnUmVnaXN0cmF0aW9uIGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2FpbiEnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gICAgIGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdC8vICAgICBkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRmYWlsOiAoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAnVW5hYmxlIHRvIGNvbm5lY3QgdG8gc2VydmVyLnBsZWFzZSBjb250YWN0IHRoZSBhdXRob3IgbG9uZ3plIScsXHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICdQbGVhc2UgaW5wdXQgeW91ciBuYW1lIGFuZCBwYXNzd29yZCcsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbi5sb2dpbi1iZyB7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vc3RhdGljL2JhY2tncm91bmQucG5nKTtcclxuXHQvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMi5sb2xpLm5ldC8yMDIzLzA4LzEzL2RoNWJmQlNqQ1B2bkFjSi5wbmcpO1xyXG59XHJcblxyXG4uY3VzdG9tLXRvYXN0IHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiA0MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRmb250LXNpemU6IDEuNWVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udG9hc3QtaW1hZ2Uge1xyXG5cdHdpZHRoOiA1MHB4O1xyXG5cdGhlaWdodDogNTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4ubG9naW4tYyB7XHJcblx0d2lkdGg6IDYwcnB4O1xyXG5cdGhlaWdodDogNjBycHg7XHJcblx0cGFkZGluZy10b3A6IDIycnB4O1xyXG5cdHBhZGRpbmctbGVmdDogMjNycHg7XHJcbn1cclxuXHJcbi5sb2dpbi1iYWNrIHtcclxuXHR3aWR0aDogMjBycHg7XHJcblx0aGVpZ2h0OiAzNHJweDtcclxuXHQvLyBBcHAgcGFnZSBhZGFwdGF0aW9uXHJcblx0bWFyZ2luLXRvcDogNzBycHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ28ge1xyXG5cdGhlaWdodDogMjAwcnB4O1xyXG5cdHdpZHRoOiAyMDBycHg7XHJcblx0bWFyZ2luLXRvcDogMjAwcnB4O1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxuXHRtYXJnaW4tYm90dG9tOiA1MHJweDtcclxufVxyXG5cclxuLnRleHQtYXJlYSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuXHRmb250LXNpemU6IDM2cnB4O1xyXG5cdGNvbG9yOiAjOGY4Zjk0O1xyXG59XHJcblxyXG4uZm9vdCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGJvdHRvbTogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMHJweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuXHQuY29udCB7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdFx0aGVpZ2h0OiA4MCU7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjOGY4Zjk0O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBycHg7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDEwcnB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMTBycHg7XHJcblx0fVxyXG59XHJcblxyXG4uaGVhZCB7XHJcblx0d2lkdGg6IDE0NHJweDtcclxuXHRoZWlnaHQ6IDE0NHJweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdC5oZWFkLWltZyB7XHJcblx0XHR3aWR0aDogMTQ0cnB4O1xyXG5cdFx0aGVpZ2h0OiAxNDRycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0fVxyXG5cclxuXHQuZG93biB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRvcGFjaXR5OiAwLjY7XHJcblx0XHRyaWdodDogLTQ4cnB4O1xyXG5cdFx0dG9wOiA0OHJweDtcclxuXHRcdHdpZHRoOiA0OHJweDtcclxuXHRcdGhlaWdodDogNDhycHg7XHJcblx0fVxyXG59XHJcblxyXG4udXNlciB7XHJcblx0bWFyZ2luLXRvcDogNTRycHg7XHJcblx0cGFkZGluZzogMCAyNHJweDtcclxuXHR3aWR0aDogNDQwcnB4O1xyXG5cdGhlaWdodDogOTZycHg7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNDIsIDI0MiwgMjQyLCAxKTtcclxuXHRib3JkZXItcmFkaXVzOiAyNHJweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGNvbG9yOiByZ2JhKDI1LCAyOSwgMzUsIDEpO1xyXG59XHJcblxyXG4uam9pbiB7XHJcblx0bWFyZ2luLXRvcDogMTgwcnB4O1xyXG5cdHdpZHRoOiAyMDBycHg7XHJcblx0aGVpZ2h0OiAyMDBycHg7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOEI0NTEzLCAjQTA1MjJEKTtcclxuXHRib3gtc2hhZG93OiAwcHggMzZycHggNjhycHggLThycHggcmdiYSgyNTUsIDEzMSwgNjAsIDAuNSk7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bGluZS1oZWlnaHQ6IDIwMHJweDtcclxuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxufVxyXG5cclxuLm1vZGlmeSB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGxlZnQ6IDA7XHJcblx0Ym90dG9tOiAtODAwcnB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogODAwcnB4O1xyXG5cdHotaW5kZXg6IDEwMDA7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA0OHJweCA0OHJweCAwcHggMHB4O1xyXG59XHJcblxyXG4ubW9kZml5LW1pYW4ge1xyXG5cdHBhZGRpbmc6IDgwcnB4IDM2cnB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG5cdC51cy1pbWcge1xyXG5cdFx0ZmxleDogYXV0bztcclxuXHRcdHdpZHRoOiAyMCU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cdFx0aW1hZ2Uge1xyXG5cdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDE4cnB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5kZGQge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiA0MHJweDtcclxuXHRcdFx0d2lkdGg6IDE2cnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDE2cnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTMxLCA2MCwgMSk7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5iZyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///76\n");

/***/ }),
/* 77 */
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/creation/roomList.vue?mpType=page ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _roomList_vue_vue_type_template_id_5ef5b2f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roomList.vue?vue&type=template&id=5ef5b2f0&mpType=page */ 78);\n/* harmony import */ var _roomList_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roomList.vue?vue&type=script&lang=js&mpType=page */ 86);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _roomList_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _roomList_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _roomList_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _roomList_vue_vue_type_template_id_5ef5b2f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _roomList_vue_vue_type_template_id_5ef5b2f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _roomList_vue_vue_type_template_id_5ef5b2f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/creation/roomList.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDdUU7QUFDTDs7O0FBR2xFO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3Jvb21MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZWY1YjJmMCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcm9vbUxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Jvb21MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NyZWF0aW9uL3Jvb21MaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///77\n");

/***/ }),
/* 78 */
/*!**********************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/creation/roomList.vue?vue&type=template&id=5ef5b2f0&mpType=page ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_roomList_vue_vue_type_template_id_5ef5b2f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./roomList.vue?vue&type=template&id=5ef5b2f0&mpType=page */ 79);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_roomList_vue_vue_type_template_id_5ef5b2f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_roomList_vue_vue_type_template_id_5ef5b2f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_roomList_vue_vue_type_template_id_5ef5b2f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_roomList_vue_vue_type_template_id_5ef5b2f0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 79 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/creation/roomList.vue?vue&type=template&id=5ef5b2f0&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    lzPopupDialog:
      __webpack_require__(/*! @/uni_modules/lz-popup-dialog/components/lz-popup-dialog/lz-popup-dialog.vue */ 80)
        .default,
    uniPopup:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 20)
        .default,
    uniPopupDialog:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue */ 39)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "status-bar"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "login-c"),
              attrs: { _i: 2 },
              on: { click: _vm.dialogToggle },
            },
            [
              _c("image", {
                staticClass: _vm._$s(3, "sc", "login-back"),
                attrs: {
                  src: _vm._$s(3, "a-src", __webpack_require__(/*! ../../static/back.png */ 55)),
                  _i: 3,
                },
              }),
            ]
          ),
          _c("image", {
            staticClass: _vm._$s(4, "sc", "add"),
            attrs: {
              src: _vm._$s(4, "a-src", __webpack_require__(/*! ../../static/add.png */ 85)),
              _i: 4,
            },
            on: { click: _vm.togglePopList },
          }),
        ]
      ),
      _c(
        "scroll-view",
        { staticClass: _vm._$s(5, "sc", "scroll-Y"), attrs: { _i: 5 } },
        _vm._l(
          _vm._$s(6, "f", { forItems: _vm.reversedRooms }),
          function (room, i, $20, $30) {
            return _c(
              "view",
              {
                key: _vm._$s(6, "f", { forIndex: $20, key: 6 + "-" + $30 }),
                staticClass: _vm._$s("6-" + $30, "sc", "room-item"),
                attrs: { _i: "6-" + $30 },
                on: {
                  click: function ($event) {
                    return _vm.jump(room.roomID)
                  },
                },
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("7-" + $30, "sc", "avatar"),
                    attrs: { _i: "7-" + $30 },
                  },
                  [
                    _vm._$s("8-" + $30, "i", room.tip)
                      ? _c("view", {
                          staticClass: _vm._$s("8-" + $30, "sc", "tip"),
                          attrs: { _i: "8-" + $30 },
                        })
                      : _vm._e(),
                    _vm._l(
                      _vm._$s(9 + "-" + $30, "f", {
                        forItems: _vm.getDisplayImages(room.img),
                      }),
                      function (img, index, $21, $31) {
                        return _c("image", {
                          key: _vm._$s(9 + "-" + $30, "f", {
                            forIndex: $21,
                            key: index,
                          }),
                          staticClass: _vm._$s(
                            "9-" + $30 + "-" + $31,
                            "sc",
                            "avatar-image"
                          ),
                          class: _vm._$s("9-" + $30 + "-" + $31, "c", {
                            "single-image":
                              _vm.getDisplayImages(room.img).length === 1,
                          }),
                          attrs: {
                            src: _vm._$s(
                              "9-" + $30 + "-" + $31,
                              "a-src",
                              _vm.getDisplayImages(room.img).length === 1 &&
                                _vm.id != room.ownerID
                                ? room.ownerImg
                                : "" + img
                            ),
                            _i: "9-" + $30 + "-" + $31,
                          },
                        })
                      }
                    ),
                  ],
                  2
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("10-" + $30, "sc", "infos"),
                    attrs: { _i: "10-" + $30 },
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s("11-" + $30, "sc", "line"),
                        attrs: { _i: "11-" + $30 },
                      },
                      [
                        _vm._$s(
                          "12-" + $30,
                          "i",
                          room.ownerID != _vm.id && room.ownerName
                        )
                          ? _c(
                              "view",
                              {
                                staticClass: _vm._$s("12-" + $30, "sc", "name"),
                                attrs: { _i: "12-" + $30 },
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "12-" + $30,
                                    "t0-0",
                                    _vm._s(room.ownerName)
                                  )
                                ),
                              ]
                            )
                          : _c(
                              "view",
                              {
                                staticClass: _vm._$s("13-" + $30, "sc", "name"),
                                attrs: { _i: "13-" + $30 },
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "13-" + $30,
                                    "t0-0",
                                    _vm._s(room.roomName)
                                  )
                                ),
                              ]
                            ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s("14-" + $30, "sc", "time"),
                            attrs: { _i: "14-" + $30 },
                          },
                          [
                            _vm._v(
                              _vm._$s(
                                "14-" + $30,
                                "t0-0",
                                _vm._s(room.roomMsgTime)
                              )
                            ),
                          ]
                        ),
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s("15-" + $30, "sc", "line"),
                        attrs: { _i: "15-" + $30 },
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s("16-" + $30, "sc", "descript"),
                            attrs: { _i: "16-" + $30 },
                          },
                          [
                            _vm._v(
                              _vm._$s("16-" + $30, "t0-0", _vm._s(room.roomMsg))
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            )
          }
        ),
        0
      ),
      _c("lz-popup-dialog", {
        attrs: {
          isShow: _vm.showMenuPop,
          top: 400,
          right: 0,
          list: _vm.popList,
          name: _vm.name,
          img: _vm.img,
          currentUserID: _vm.id,
          _i: 17,
        },
        on: {
          close: function ($event) {
            _vm.showMenuPop = false
          },
        },
      }),
      _c(
        "uni-popup",
        { ref: "alertDialog", attrs: { type: "dialog", _i: 18 } },
        [
          _c("uni-popup-dialog", {
            attrs: {
              type: "error",
              cancelText: "close",
              confirmText: "confirm",
              title: "Notification",
              content: "Quit will need log in again!",
              _i: 19,
            },
            on: { confirm: _vm.backToIndex },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 80 */
/*!***************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-popup-dialog/components/lz-popup-dialog/lz-popup-dialog.vue ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lz_popup_dialog_vue_vue_type_template_id_41611bd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lz-popup-dialog.vue?vue&type=template&id=41611bd8& */ 81);\n/* harmony import */ var _lz_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lz-popup-dialog.vue?vue&type=script&lang=js& */ 83);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lz_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lz_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _lz_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _lz_popup_dialog_vue_vue_type_template_id_41611bd8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _lz_popup_dialog_vue_vue_type_template_id_41611bd8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _lz_popup_dialog_vue_vue_type_template_id_41611bd8___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/lz-popup-dialog/components/lz-popup-dialog/lz-popup-dialog.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiODAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2x6LXBvcHVwLWRpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDE2MTFiZDgmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sei1wb3B1cC1kaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9sei1wb3B1cC1kaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL2x6LXBvcHVwLWRpYWxvZy9jb21wb25lbnRzL2x6LXBvcHVwLWRpYWxvZy9sei1wb3B1cC1kaWFsb2cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///80\n");

/***/ }),
/* 81 */
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-popup-dialog/components/lz-popup-dialog/lz-popup-dialog.vue?vue&type=template&id=41611bd8& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_popup_dialog_vue_vue_type_template_id_41611bd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./lz-popup-dialog.vue?vue&type=template&id=41611bd8& */ 82);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_popup_dialog_vue_vue_type_template_id_41611bd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_popup_dialog_vue_vue_type_template_id_41611bd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_popup_dialog_vue_vue_type_template_id_41611bd8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_popup_dialog_vue_vue_type_template_id_41611bd8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 82 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-popup-dialog/components/lz-popup-dialog/lz-popup-dialog.vue?vue&type=template&id=41611bd8& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.showDialog)
    ? _c(
        "view",
        {
          staticClass: _vm._$s(0, "sc", "pop-dialog"),
          style: _vm._$s(
            0,
            "s",
            "top:" + _vm.topPosition + ";right:" + _vm.rightPosition
          ),
          attrs: { _i: 0 },
        },
        [
          _c("view", {
            staticClass: _vm._$s(1, "sc", "triangle"),
            style: _vm._$s(
              1,
              "s",
              "margin-right:" +
                _vm.triangleMarginRight +
                "rpx;border-bottom: 25rpx solid " +
                _vm.bgColor +
                ";"
            ),
            attrs: { _i: 1 },
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "pop-body"),
              style: _vm._$s(2, "s", "background-color:" + _vm.bgColor + ";"),
              attrs: { _i: 2 },
            },
            _vm._l(
              _vm._$s(3, "f", { forItems: _vm.menuList }),
              function (item, index, $20, $30) {
                return _c(
                  "view",
                  {
                    key: _vm._$s(3, "f", { forIndex: $20, key: index }),
                    staticClass: _vm._$s("3-" + $30, "sc", "pop-item"),
                    attrs: { _i: "3-" + $30 },
                    on: {
                      click: function ($event) {
                        return _vm.onClickPopMenu(item)
                      },
                    },
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(
                          "4-" + $30,
                          "sc",
                          "uni_flex_row_align_left"
                        ),
                        attrs: { _i: "4-" + $30 },
                      },
                      [
                        _vm._$s("5-" + $30, "i", item.icon)
                          ? _c("image", {
                              staticClass: _vm._$s("5-" + $30, "sc", "pop-img"),
                              attrs: {
                                src: _vm._$s("5-" + $30, "a-src", item.icon),
                                _i: "5-" + $30,
                              },
                            })
                          : _vm._e(),
                        _c(
                          "text",
                          {
                            staticClass: _vm._$s(
                              "6-" + $30,
                              "sc",
                              "uni_16px_400_colorfff"
                            ),
                            style: _vm._$s(
                              "6-" + $30,
                              "s",
                              "color:" + _vm.textColor + ";"
                            ),
                            attrs: { _i: "6-" + $30 },
                          },
                          [
                            _vm._v(
                              _vm._$s("6-" + $30, "t0-0", _vm._s(item.name))
                            ),
                          ]
                        ),
                      ]
                    ),
                    _vm._$s("7-" + $30, "i", index < _vm.menuList.length - 1)
                      ? _c("view", {
                          class: _vm._$s(
                            "7-" + $30,
                            "c",
                            item.icon ? "pop-line" : "pop-line-full"
                          ),
                          style: _vm._$s(
                            "7-" + $30,
                            "s",
                            "background-color:" + _vm.lineColor + ";"
                          ),
                          attrs: { _i: "7-" + $30 },
                        })
                      : _vm._e(),
                  ]
                )
              }
            ),
            0
          ),
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 83 */
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-popup-dialog/components/lz-popup-dialog/lz-popup-dialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./lz-popup-dialog.vue?vue&type=script&lang=js& */ 84);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_popup_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJ1QixDQUFnQixxdEJBQUcsRUFBQyIsImZpbGUiOiI4My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2x6LXBvcHVwLWRpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2x6LXBvcHVwLWRpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///83\n");

/***/ }),
/* 84 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-popup-dialog/components/lz-popup-dialog/lz-popup-dialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 66));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 68));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 = {\n  props: {\n    textColor: {\n      type: String,\n      default: '#ffffff'\n    },\n    bgColor: {\n      type: String,\n      default: '#4B4B4B'\n    },\n    lineColor: {\n      type: String,\n      default: '#6C6C6C'\n    },\n    isShow: {\n      type: Boolean,\n      default: false\n    },\n    list: {\n      type: Array,\n      default: function _default() {\n        return [];\n      }\n    },\n    top: {\n      type: Number,\n      default: 0\n    },\n    left: {\n      type: Number,\n      default: 0\n    },\n    right: {\n      type: Number,\n      default: 0\n    },\n    triangleMarginRight: {\n      type: Number,\n      default: 24\n    },\n    name: {\n      type: String,\n      default: ''\n    },\n    img: {\n      type: String,\n      default: ''\n    },\n    currentUserID: {\n      type: String,\n      default: ''\n    }\n  },\n  data: function data() {\n    return {\n      showDialog: false,\n      menuList: [],\n      topPosition: 0,\n      rightPosition: 0,\n      leftPosition: 0\n    };\n  },\n  watch: {\n    isShow: {\n      immediate: true,\n      handler: function () {\n        var _handler = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(newVal, oldVal) {\n          return _regenerator.default.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  this.showDialog = newVal;\n                case 1:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee, this);\n        }));\n        function handler(_x, _x2) {\n          return _handler.apply(this, arguments);\n        }\n        return handler;\n      }()\n    },\n    list: {\n      immediate: true,\n      handler: function () {\n        var _handler2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(newVal, oldVal) {\n          return _regenerator.default.wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  this.menuList = newVal;\n                case 1:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2, this);\n        }));\n        function handler(_x3, _x4) {\n          return _handler2.apply(this, arguments);\n        }\n        return handler;\n      }()\n    },\n    top: {\n      immediate: true,\n      handler: function () {\n        var _handler3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(newVal, oldVal) {\n          return _regenerator.default.wrap(function _callee3$(_context3) {\n            while (1) {\n              switch (_context3.prev = _context3.next) {\n                case 0:\n                  this.topPosition = newVal;\n                case 1:\n                case \"end\":\n                  return _context3.stop();\n              }\n            }\n          }, _callee3, this);\n        }));\n        function handler(_x5, _x6) {\n          return _handler3.apply(this, arguments);\n        }\n        return handler;\n      }()\n    },\n    left: {\n      immediate: true,\n      handler: function () {\n        var _handler4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(newVal, oldVal) {\n          return _regenerator.default.wrap(function _callee4$(_context4) {\n            while (1) {\n              switch (_context4.prev = _context4.next) {\n                case 0:\n                  this.leftPosition = newVal;\n                case 1:\n                case \"end\":\n                  return _context4.stop();\n              }\n            }\n          }, _callee4, this);\n        }));\n        function handler(_x7, _x8) {\n          return _handler4.apply(this, arguments);\n        }\n        return handler;\n      }()\n    },\n    right: {\n      immediate: true,\n      handler: function () {\n        var _handler5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(newVal, oldVal) {\n          return _regenerator.default.wrap(function _callee5$(_context5) {\n            while (1) {\n              switch (_context5.prev = _context5.next) {\n                case 0:\n                  this.rightPosition = newVal;\n                case 1:\n                case \"end\":\n                  return _context5.stop();\n              }\n            }\n          }, _callee5, this);\n        }));\n        function handler(_x9, _x10) {\n          return _handler5.apply(this, arguments);\n        }\n        return handler;\n      }()\n    }\n  },\n  methods: {\n    onClickPopMenu: function onClickPopMenu(item) {\n      this.$emit('close');\n      uni.navigateTo({\n        url: '../../../../creation/createChat?name=' + this.name + '&img=' + this.img + '&id=' + this.currentUserID\n      });\n      this.$emit('onClickPopupItem', item);\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvbHotcG9wdXAtZGlhbG9nL2NvbXBvbmVudHMvbHotcG9wdXAtZGlhbG9nL2x6LXBvcHVwLWRpYWxvZy52dWUiXSwibmFtZXMiOlsicHJvcHMiLCJ0ZXh0Q29sb3IiLCJ0eXBlIiwiZGVmYXVsdCIsImJnQ29sb3IiLCJsaW5lQ29sb3IiLCJpc1Nob3ciLCJsaXN0IiwidG9wIiwibGVmdCIsInJpZ2h0IiwidHJpYW5nbGVNYXJnaW5SaWdodCIsIm5hbWUiLCJpbWciLCJjdXJyZW50VXNlcklEIiwiZGF0YSIsInNob3dEaWFsb2ciLCJtZW51TGlzdCIsInRvcFBvc2l0aW9uIiwicmlnaHRQb3NpdGlvbiIsImxlZnRQb3NpdGlvbiIsIndhdGNoIiwiaW1tZWRpYXRlIiwiaGFuZGxlciIsIm1ldGhvZHMiLCJvbkNsaWNrUG9wTWVudSIsInVuaSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQWdCQTtFQUNBQTtJQUNBQztNQUNBQztNQUNBQztJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztJQUNBO0lBQ0FJO01BQ0FMO01BQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBQ0FLO01BQ0FOO01BQ0FDO0lBQ0E7SUFDQU07TUFDQVA7TUFDQUM7SUFDQTtJQUNBTztNQUNBUjtNQUNBQztJQUNBO0lBQ0FRO01BQ0FUO01BQ0FDO0lBQ0E7SUFDQVM7TUFDQVY7TUFDQUM7SUFDQTtJQUNBVTtNQUNBWDtNQUNBQztJQUNBO0lBQ0FXO01BQ0FaO01BQ0FDO0lBQ0E7RUFDQTtFQUNBWTtJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBZjtNQUNBZ0I7TUFDQUM7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtrQkFDQTtnQkFBQTtnQkFBQTtrQkFBQTtjQUFBO1lBQUE7VUFBQTtRQUFBLENBQ0E7UUFBQTtVQUFBO1FBQUE7UUFBQTtNQUFBO0lBQ0E7SUFDQWhCO01BQ0FlO01BQ0FDO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7a0JBQ0E7Z0JBQUE7Z0JBQUE7a0JBQUE7Y0FBQTtZQUFBO1VBQUE7UUFBQSxDQUNBO1FBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQTtJQUNBO0lBQ0FmO01BQ0FjO01BQ0FDO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7a0JBQ0E7Z0JBQUE7Z0JBQUE7a0JBQUE7Y0FBQTtZQUFBO1VBQUE7UUFBQSxDQUNBO1FBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQTtJQUNBO0lBQ0FkO01BQ0FhO01BQ0FDO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7a0JBQ0E7Z0JBQUE7Z0JBQUE7a0JBQUE7Y0FBQTtZQUFBO1VBQUE7UUFBQSxDQUNBO1FBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQTtJQUNBO0lBQ0FiO01BQ0FZO01BQ0FDO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7a0JBQ0E7Z0JBQUE7Z0JBQUE7a0JBQUE7Y0FBQTtZQUFBO1VBQUE7UUFBQSxDQUNBO1FBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtNQUNBQztRQUNBQztNQUNBO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiI4NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJwb3AtZGlhbG9nXCIgdi1pZj1cInNob3dEaWFsb2dcIiA6c3R5bGU9XCIndG9wOicrdG9wUG9zaXRpb24rJztyaWdodDonK3JpZ2h0UG9zaXRpb25cIj5cblx0XHQ8dmlldyBjbGFzcz1cInRyaWFuZ2xlXCIgOnN0eWxlPVwiJ21hcmdpbi1yaWdodDonK3RyaWFuZ2xlTWFyZ2luUmlnaHQrJ3JweDtib3JkZXItYm90dG9tOiAyNXJweCBzb2xpZCAnK2JnQ29sb3IrJzsnXCI+PC92aWV3PlxuXHRcdDx2aWV3IGNsYXNzPVwicG9wLWJvZHlcIiA6c3R5bGU9XCInYmFja2dyb3VuZC1jb2xvcjonK2JnQ29sb3IrJzsnXCI+XG5cdFx0XHQ8dmlldyB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBtZW51TGlzdFwiIHYtYmluZDprZXk9XCJpbmRleFwiIGNsYXNzPVwicG9wLWl0ZW1cIiBAY2xpY2s9XCJvbkNsaWNrUG9wTWVudShpdGVtKVwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaV9mbGV4X3Jvd19hbGlnbl9sZWZ0XCIgc3R5bGU9XCJoZWlnaHQ6IDEwMHJweDt3aWR0aDogMTAwJTtcIj5cblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJwb3AtaW1nXCIgOnNyYz1cIml0ZW0uaWNvblwiICB2LWlmPVwiaXRlbS5pY29uXCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaV8xNnB4XzQwMF9jb2xvcmZmZlwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDI3cnB4O1wiIDpzdHlsZT1cIidjb2xvcjonK3RleHRDb2xvcisnOydcIj57e2l0ZW0ubmFtZX19PC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IDpjbGFzcz1cIml0ZW0uaWNvbj8ncG9wLWxpbmUnOidwb3AtbGluZS1mdWxsJ1wiIDpzdHlsZT1cIidiYWNrZ3JvdW5kLWNvbG9yOicrbGluZUNvbG9yKyc7J1wiIHYtaWY9XCJpbmRleCA8IG1lbnVMaXN0Lmxlbmd0aCAtIDFcIj48L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+ICBcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0e1xuXHRcdHByb3BzOntcblx0XHRcdHRleHRDb2xvcjp7XG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnI2ZmZmZmZidcblx0XHRcdH0sXG5cdFx0XHRiZ0NvbG9yOntcblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcjNEI0QjRCJ1xuXHRcdFx0fSxcblx0XHRcdGxpbmVDb2xvcjp7XG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnIzZDNkM2Qydcblx0XHRcdH0sXG5cdFx0XHRpc1Nob3c6e1xuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdGxpc3Q6e1xuXHRcdFx0XHR0eXBlOkFycmF5LFxuXHRcdFx0XHRkZWZhdWx0OiAoKT0+e1xuXHRcdFx0XHRcdHJldHVybiBbXVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dG9wOntcblx0XHRcdFx0dHlwZTpOdW1iZXIsXG5cdFx0XHRcdGRlZmF1bHQ6MFxuXHRcdFx0fSxcblx0XHRcdGxlZnQ6e1xuXHRcdFx0XHR0eXBlOk51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDowXG5cdFx0XHR9LFxuXHRcdFx0cmlnaHQ6e1xuXHRcdFx0XHR0eXBlOk51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDowXG5cdFx0XHR9LFxuXHRcdFx0dHJpYW5nbGVNYXJnaW5SaWdodDp7XG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxuXHRcdFx0XHRkZWZhdWx0OiAyNFxuXHRcdFx0fSxcblx0XHRcdG5hbWU6e1xuXHRcdFx0XHR0eXBlOlN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJydcblx0XHRcdH0sXG5cdFx0XHRpbWc6e1xuXHRcdFx0XHR0eXBlOlN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJydcblx0XHRcdH0sXG5cdFx0XHRjdXJyZW50VXNlcklEOntcblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzaG93RGlhbG9nOmZhbHNlLFxuXHRcdFx0XHRtZW51TGlzdDpbXSxcblx0XHRcdFx0dG9wUG9zaXRpb246MCxcblx0XHRcdFx0cmlnaHRQb3NpdGlvbjowLFxuXHRcdFx0XHRsZWZ0UG9zaXRpb246MFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0d2F0Y2g6e1xuXHRcdFx0aXNTaG93Ontcblx0XHRcdFx0aW1tZWRpYXRlOnRydWUsXG5cdFx0XHRcdGhhbmRsZXI6YXN5bmMgZnVuY3Rpb24gKG5ld1ZhbCxvbGRWYWwpe1xuXHRcdFx0XHRcdHRoaXMuc2hvd0RpYWxvZyA9IG5ld1ZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGxpc3Q6e1xuXHRcdFx0XHRpbW1lZGlhdGU6dHJ1ZSxcblx0XHRcdFx0aGFuZGxlcjphc3luYyBmdW5jdGlvbiAobmV3VmFsLG9sZFZhbCl7XG5cdFx0XHRcdFx0dGhpcy5tZW51TGlzdCA9IG5ld1ZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHRvcDp7XG5cdFx0XHRcdGltbWVkaWF0ZTp0cnVlLFxuXHRcdFx0XHRoYW5kbGVyOmFzeW5jIGZ1bmN0aW9uIChuZXdWYWwsb2xkVmFsKXtcblx0XHRcdFx0XHR0aGlzLnRvcFBvc2l0aW9uID0gbmV3VmFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0bGVmdDp7XG5cdFx0XHRcdGltbWVkaWF0ZTp0cnVlLFxuXHRcdFx0XHRoYW5kbGVyOmFzeW5jIGZ1bmN0aW9uIChuZXdWYWwsb2xkVmFsKXtcblx0XHRcdFx0XHR0aGlzLmxlZnRQb3NpdGlvbiA9IG5ld1ZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHJpZ2h0Ontcblx0XHRcdFx0aW1tZWRpYXRlOnRydWUsXG5cdFx0XHRcdGhhbmRsZXI6YXN5bmMgZnVuY3Rpb24gKG5ld1ZhbCxvbGRWYWwpe1xuXHRcdFx0XHRcdHRoaXMucmlnaHRQb3NpdGlvbiA9IG5ld1ZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdG1ldGhvZHM6e1xuXHRcdFx0b25DbGlja1BvcE1lbnUoaXRlbSl7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6ICcuLi8uLi8uLi8uLi9jcmVhdGlvbi9jcmVhdGVDaGF0P25hbWU9JyArIHRoaXMubmFtZSArICcmaW1nPScgKyB0aGlzLmltZyArICcmaWQ9JyArIHRoaXMuY3VycmVudFVzZXJJRCAsXG4gICAgICAgICAgICB9KTtcblx0XHRcdFx0dGhpcy4kZW1pdCgnb25DbGlja1BvcHVwSXRlbScsaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRcbi5wb3AtZGlhbG9ne1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR6LWluZGV4OiA5OTk7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0LyogQXBwIHBhZ2UgYWRhcHRhdGlvbiAqL1xuXHQvKiB0b3A6MTUwcnB4OyAqL1xuXHQvKiBINSBXZWIgcGFnZSBhZGFwdGF0aW9uICovXG5cdHRvcDogMTAwcnB4O1xufVxuXG4udHJpYW5nbGUge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcblx0Ym9yZGVyLXJpZ2h0OiAxOHJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMThycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMThycHggc29saWQgeW91ckNvbG9yOyAvKiByZXBsYWNlICd5b3VyQ29sb3InIHdpdGggdGhlIGNvbG9yIHlvdSB3YW50ICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE4cnB4O1xuXHRyaWdodDogMjBycHg7XG59XG5cbi5wb3AtYm9keXtcblx0Ym9yZGVyLXJhZGl1czogMjVweDtcblx0d2lkdGg6IDMwMHJweDtcblx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcbn1cblxuLnBvcC1pdGVte1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucG9wLWxpbmUtZnVsbHtcblx0d2lkdGg6IDMwMHJweDtcblx0aGVpZ2h0OiAxcnB4O1xufVxuLnBvcC1saW5le1xuXHR3aWR0aDogMzAwcnB4O1xuXHRoZWlnaHQ6IDFycHg7XG59XG5cbi5wb3AtaW1ne1xuXHR3aWR0aDogNDhycHg7XG5cdGhlaWdodDogNDhycHg7XG5cdG1hcmdpbi1sZWZ0OiA0MHJweDtcblx0bWFyZ2luLXRvcDogMjBycHg7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///84\n");

/***/ }),
/* 85 */
/*!***************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/static/add.png ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/add.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijg1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvYWRkLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///85\n");

/***/ }),
/* 86 */
/*!****************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/creation/roomList.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_roomList_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./roomList.vue?vue&type=script&lang=js&mpType=page */ 87);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_roomList_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_roomList_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_roomList_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_roomList_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_roomList_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXV0QixDQUFnQix5dEJBQUcsRUFBQyIsImZpbGUiOiI4Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jvb21MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb29tTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///86\n");

/***/ }),
/* 87 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/creation/roomList.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 47));\nvar _config = __webpack_require__(/*! ../../config.js */ 15);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      name: '',\n      img: '',\n      id: '',\n      isPopListVisible: false,\n      searchText: '',\n      users: [],\n      rooms: [],\n      selectedUsers: [],\n      roomName: '',\n      showMenuPop: false,\n      popList: [{\n        name: 'new chat',\n        icon: '../../static/message.png'\n      }],\n      arrayListOfRooms: []\n    };\n  },\n  computed: {\n    reversedRooms: function reversedRooms() {\n      return this.rooms.slice().reverse();\n    }\n  },\n  onLoad: function onLoad(e) {\n    this.name = e.name;\n    this.img = e.img;\n    this.id = e.id;\n    this.fetchRooms();\n    this.receiveNewRoomSocket();\n    this.receiveGroupMsg();\n    this.listenForTipUpdate();\n  },\n  methods: {\n    dialogToggle: function dialogToggle() {\n      this.$refs.alertDialog.open();\n    },\n    receiveNewRoomSocket: function receiveNewRoomSocket() {\n      var _this = this;\n      this.socket.on('newRoom', function (room) {\n        // console.log('new room', room);\n        var roomExists = _this.rooms.some(function (existingRoom) {\n          return existingRoom.roomID === room.roomID;\n        });\n        var userIsInRoom = room.usersID.includes(_this.id) || room.ownerID === _this.id;\n        if (!roomExists && userIsInRoom) {\n          _this.rooms.push(room);\n          // Push the new roomID to arrayListOfRooms\n          _this.arrayListOfRooms.push(room.roomID);\n\n          // Emit the updated list of rooms to the server\n          _this.socket.emit('joinMultipleRooms', _this.arrayListOfRooms);\n        }\n      });\n    },\n    backToIndex: function backToIndex() {\n      uni.removeStorageSync('token');\n      uni.removeStorageSync('refreshToken');\n      uni.removeStorageSync('username');\n      uni.removeStorageSync('img');\n      uni.removeStorageSync('id');\n      this.socket.disconnect();\n      uni.navigateTo({\n        url: '../index/index'\n      });\n    },\n    togglePopList: function togglePopList() {\n      this.showMenuPop = !this.showMenuPop;\n    },\n    disconnect: function disconnect() {\n      this.socket.disconnect();\n    },\n    jump: function jump(roomID) {\n      this.socket.connect();\n      this.socket.emit('updateTipStatus', roomID);\n      uni.navigateTo({\n        url: '../chatroom/chatroom?name=' + this.name + '&img=' + this.img + '&id=' + this.id + '&roomID=' + roomID\n      });\n    },\n    listenForTipUpdate: function listenForTipUpdate() {\n      var _this2 = this;\n      this.socket.on('tipStatusUpdate', function (data) {\n        // console.log('tipStatusUpdate', data);\n        var roomToUpdate = _this2.rooms.find(function (room) {\n          return room.roomID === data.roomID;\n        });\n        if (roomToUpdate) {\n          roomToUpdate.tip = data.tip; // Update the tip status\n          _this2.$set(_this2.rooms, _this2.rooms.indexOf(roomToUpdate), roomToUpdate);\n        }\n      });\n    },\n    getDisplayImages: function getDisplayImages(imgArray) {\n      if (imgArray.length === 1) {\n        return imgArray;\n      } else {\n        return imgArray.slice(0, 4); // Only show the first 4 images\n      }\n    },\n    fetchRooms: function fetchRooms() {\n      var _this3 = this;\n      uni.request({\n        url: _config.BASE_URL + ':' + _config.SERVER_PORT + '/roomcreation',\n        method: 'GET'\n      }).then(function (response) {\n        var _response = (0, _slicedToArray2.default)(response, 2),\n          error = _response[0],\n          res = _response[1];\n        if (res) {\n          // filter rooms where this.id is included in the users\n          _this3.rooms = res.data.filter(function (room) {\n            return room.ownerID === _this3.id || room.usersID.includes(_this3.id);\n          });\n          if (_this3.rooms.length > 0) {\n            _this3.arrayListOfRooms = _this3.rooms.map(function (room) {\n              return room.roomID;\n            });\n            _this3.socket.emit('joinMultipleRooms', _this3.arrayListOfRooms);\n          }\n        } else {\n          __f__(\"error\", 'Error fetching single chat messages:', error, \" at pages/creation/roomList.vue:166\");\n        }\n      });\n    },\n    timeProcess: function timeProcess(date) {\n      var time;\n      var d = new Date(date);\n      var n = new Date();\n      //get time\n      var dd = d.getTime();\n      var h = d.getHours();\n      var m = d.getMinutes();\n      var Y = d.getFullYear();\n      var M = d.getMonth() + 1;\n      var D = d.getDate();\n      //current time\n      var nn = n.getTime();\n      var hh = n.getHours();\n      var mm = n.getMinutes();\n      var YY = n.getFullYear();\n      var MM = n.getMonth() + 1;\n      var DD = n.getDate();\n      if (D == DD && M == MM && Y == YY) {\n        if (h < 10) {\n          h = '0' + h;\n        }\n        if (m < 10) {\n          m = '0' + m;\n        }\n        time = h + ':' + m;\n        return time;\n      } else if (D + 1 == DD && M == MM && Y == YY) {\n        if (h < 10) {\n          h = '0' + h;\n        }\n        if (m < 10) {\n          m = '0' + m;\n        }\n        time = 'yesterday' + ' ' + h + ':' + m;\n        return time;\n      } else {\n        if (M < 10) {\n          M = '0' + M;\n        }\n        if (D < 10) {\n          D = '0' + D;\n        }\n        if (h < 10) {\n          h = '0' + h;\n        }\n        if (m < 10) {\n          m = '0' + m;\n        }\n        time = Y + '/' + M + '/' + D + ' ' + h + ':' + m;\n        return time;\n      }\n    },\n    receiveGroupMsg: function receiveGroupMsg() {\n      var _this4 = this;\n      //get the instant message from socket\n      this.socket.on('roomListMsg', function (data) {\n        // console.log('roomListMsg', data);\n        // Find the room with the matching roomID\n        var roomToUpdate = _this4.rooms.find(function (room) {\n          return room.roomID === data.roomID;\n        });\n        if (roomToUpdate) {\n          roomToUpdate.roomMsg = data.messageContent;\n          roomToUpdate.roomMsgTime = _this4.timeProcess(data.time);\n          roomToUpdate.tip = true;\n          _this4.$set(_this4.rooms, _this4.rooms.indexOf(roomToUpdate), roomToUpdate);\n        }\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY3JlYXRpb24vcm9vbUxpc3QudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJuYW1lIiwiaW1nIiwiaWQiLCJpc1BvcExpc3RWaXNpYmxlIiwic2VhcmNoVGV4dCIsInVzZXJzIiwicm9vbXMiLCJzZWxlY3RlZFVzZXJzIiwicm9vbU5hbWUiLCJzaG93TWVudVBvcCIsInBvcExpc3QiLCJpY29uIiwiYXJyYXlMaXN0T2ZSb29tcyIsImNvbXB1dGVkIiwicmV2ZXJzZWRSb29tcyIsIm9uTG9hZCIsIm1ldGhvZHMiLCJkaWFsb2dUb2dnbGUiLCJyZWNlaXZlTmV3Um9vbVNvY2tldCIsImJhY2tUb0luZGV4IiwidW5pIiwidXJsIiwidG9nZ2xlUG9wTGlzdCIsImRpc2Nvbm5lY3QiLCJqdW1wIiwibGlzdGVuRm9yVGlwVXBkYXRlIiwicm9vbVRvVXBkYXRlIiwiZ2V0RGlzcGxheUltYWdlcyIsImZldGNoUm9vbXMiLCJtZXRob2QiLCJlcnJvciIsInJlcyIsInRpbWVQcm9jZXNzIiwiaCIsIm0iLCJ0aW1lIiwiTSIsIkQiLCJyZWNlaXZlR3JvdXBNc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBb0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0E7RUFDQUE7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQyxVQUNBO1FBQ0FWO1FBQ0FXO01BQ0EsRUFDQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7SUFDQTtJQUVBQztNQUFBO01BQ0E7UUFDQTtRQUNBO1VBQUE7UUFBQTtRQUNBO1FBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBQztNQUNBQTtNQUNBQTtNQUNBQTtNQUNBQTtNQUNBO01BQ0FBO1FBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBSjtRQUNBQztNQUNBO0lBQ0E7SUFDQUk7TUFBQTtNQUNBO1FBQ0E7UUFDQTtVQUFBO1FBQUE7UUFDQTtVQUNBQztVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQVI7UUFDQUM7UUFDQVE7TUFDQTtRQUNBO1VBQUFDO1VBQUFDO1FBQ0E7VUFDQTtVQUNBO1lBQUE7VUFBQTtVQUNBO1lBQ0E7Y0FBQTtZQUFBO1lBQ0E7VUFDQTtRQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BRUE7UUFDQTtVQUNBQztRQUNBO1FBQ0E7VUFDQUM7UUFDQTtRQUNBQztRQUNBO01BQ0E7UUFDQTtVQUNBRjtRQUNBO1FBQ0E7VUFDQUM7UUFDQTtRQUNBQztRQUNBO01BQ0E7UUFDQTtVQUNBQztRQUNBO1FBQ0E7VUFDQUM7UUFDQTtRQUNBO1VBQ0FKO1FBQ0E7UUFDQTtVQUNBQztRQUNBO1FBQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBQ0FHO01BQUE7TUFDQTtNQUNBO1FBQ0E7UUFDQTtRQUNBO1VBQUE7UUFBQTtRQUNBO1VBQ0FaO1VBQ0FBO1VBQ0FBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiODcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwic3RhdHVzLWJhclwiPlxyXG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImxvZ2luLWNcIiBob3Zlci1jbGFzcz1cIm5vbmVcIiBAdGFwPVwiZGlhbG9nVG9nZ2xlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2JhY2sucG5nXCIgY2xhc3M9XCJsb2dpbi1iYWNrXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2FkZC5wbmdcIiBjbGFzcz1cImFkZFwiIEBjbGljaz1cInRvZ2dsZVBvcExpc3RcIj48L2ltYWdlPlxyXG4gICAgICAgIDwvdmlldz5cclxuXHJcbiAgICAgICAgPHNjcm9sbC12aWV3IDpzY3JvbGwteT1cInRydWVcIiA6c2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiIGNsYXNzPVwic2Nyb2xsLVlcIj5cclxuICAgICAgICAgICAgPHZpZXcgdi1mb3I9XCIocm9vbSwgaSkgaW4gcmV2ZXJzZWRSb29tc1wiIGNsYXNzPVwicm9vbS1pdGVtXCIgQGNsaWNrPVwianVtcChyb29tLnJvb21JRClcIj5cclxuICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJ0aXBcIiB2LWlmPVwicm9vbS50aXBcIj48L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltYWdlIHYtZm9yPVwiKGltZywgaW5kZXgpIGluIGdldERpc3BsYXlJbWFnZXMocm9vbS5pbWcpXCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJhdmF0YXItaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdzaW5nbGUtaW1hZ2UnOiBnZXREaXNwbGF5SW1hZ2VzKHJvb20uaW1nKS5sZW5ndGggPT09IDEgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJnZXREaXNwbGF5SW1hZ2VzKHJvb20uaW1nKS5sZW5ndGggPT09IDEgJiYgaWQgIT0gcm9vbS5vd25lcklEID8gcm9vbS5vd25lckltZyA6IGAke2ltZ31gXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxpbWFnZSA6c3JjID0gXCJyb29tLm93bmVySW1nXCIgIHYtaWY9XCJpZCAhPSByb29tLm93bmVySURcIj48L2ltYWdlPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDx2aWV3IHYtZm9yPVwiKGltZywgaW5kZXgpIGluIHJvb20uaW1nXCIgOmtleT1cImluZGV4XCI+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGltYWdlIDpzcmM9XCInLi4vLi4vc3RhdGljL2ltYWdlcy8nICsgaW1nICsgJy5wbmcnXCI+PC9pbWFnZT4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8L3ZpZXc+IC0tPlxyXG4gICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8dmlldyBjbGFzcz1cImF2YXRhclwiPiAtLT5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGltYWdlIDpzcmM9XCInLi4vLi4vc3RhdGljL2ltYWdlcy8nICsgcm9vbS5pbWcgKyAnLnBuZydcIj48L2ltYWdlPiAtLT5cclxuICAgICAgICAgICAgICAgIDwhLS0gPC92aWV3PiAtLT5cclxuICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaW5mb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJuYW1lXCIgdi1pZj1cInJvb20ub3duZXJJRCAhPSBpZCAmJiByb29tLm93bmVyTmFtZVwiPnt7IHJvb20ub3duZXJOYW1lIH19PC92aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cIm5hbWVcIiB2LWVsc2U+e3sgcm9vbS5yb29tTmFtZSB9fTwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJ0aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyByb29tLnJvb21Nc2dUaW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZGVzY3JpcHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHJvb20ucm9vbU1zZyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPC9zY3JvbGwtdmlldz5cclxuXHJcbiAgICAgICAgPGx6LXBvcHVwLWRpYWxvZyBAY2xvc2U9XCJzaG93TWVudVBvcCA9IGZhbHNlXCIgOmlzU2hvdz1cInNob3dNZW51UG9wXCIgOnRvcD1cIjQwMFwiIDpyaWdodD1cIjBcIiA6bGlzdD1cInBvcExpc3RcIlxyXG4gICAgICAgICAgICA6bmFtZT1cIm5hbWVcIiA6aW1nPVwiaW1nXCIgOmN1cnJlbnRVc2VySUQ9XCJpZFwiPlxyXG4gICAgICAgIDwvbHotcG9wdXAtZGlhbG9nPlxyXG4gICAgICAgIDx1bmktcG9wdXAgcmVmPVwiYWxlcnREaWFsb2dcIiB0eXBlPVwiZGlhbG9nXCI+XHJcbiAgICAgICAgICAgIDx1bmktcG9wdXAtZGlhbG9nIHR5cGU9XCJlcnJvclwiIGNhbmNlbFRleHQ9XCJjbG9zZVwiIGNvbmZpcm1UZXh0PVwiY29uZmlybVwiIHRpdGxlPVwiTm90aWZpY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJRdWl0IHdpbGwgbmVlZCBsb2cgaW4gYWdhaW4hXCIgQGNvbmZpcm09XCJiYWNrVG9JbmRleFwiPjwvdW5pLXBvcHVwLWRpYWxvZz5cclxuICAgICAgICA8L3VuaS1wb3B1cD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG4gIFxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBCQVNFX1VSTCwgU0VSVkVSX1BPUlQgfSBmcm9tICcuLi8uLi9jb25maWcuanMnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBpbWc6ICcnLFxyXG4gICAgICAgICAgICBpZDogJycsXHJcbiAgICAgICAgICAgIGlzUG9wTGlzdFZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWFyY2hUZXh0OiAnJyxcclxuICAgICAgICAgICAgdXNlcnM6IFtdLFxyXG4gICAgICAgICAgICByb29tczogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkVXNlcnM6IFtdLFxyXG4gICAgICAgICAgICByb29tTmFtZTogJycsXHJcbiAgICAgICAgICAgIHNob3dNZW51UG9wOiBmYWxzZSxcclxuICAgICAgICAgICAgcG9wTGlzdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICduZXcgY2hhdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJy4uLy4uL3N0YXRpYy9tZXNzYWdlLnBuZydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGFycmF5TGlzdE9mUm9vbXM6IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICByZXZlcnNlZFJvb21zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb29tcy5zbGljZSgpLnJldmVyc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKGUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5pbWcgPSBlLmltZztcclxuICAgICAgICB0aGlzLmlkID0gZS5pZDtcclxuICAgICAgICB0aGlzLmZldGNoUm9vbXMoKTtcclxuICAgICAgICB0aGlzLnJlY2VpdmVOZXdSb29tU29ja2V0KCk7XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlR3JvdXBNc2coKTtcclxuICAgICAgICB0aGlzLmxpc3RlbkZvclRpcFVwZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBkaWFsb2dUb2dnbGUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuYWxlcnREaWFsb2cub3BlbigpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVjZWl2ZU5ld1Jvb21Tb2NrZXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKCduZXdSb29tJywgKHJvb20pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCduZXcgcm9vbScsIHJvb20pO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vbUV4aXN0cyA9IHRoaXMucm9vbXMuc29tZSgoZXhpc3RpbmdSb29tKSA9PiBleGlzdGluZ1Jvb20ucm9vbUlEID09PSByb29tLnJvb21JRCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VySXNJblJvb20gPSByb29tLnVzZXJzSUQuaW5jbHVkZXModGhpcy5pZCkgfHwgcm9vbS5vd25lcklEID09PSB0aGlzLmlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyb29tRXhpc3RzICYmIHVzZXJJc0luUm9vbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vbXMucHVzaChyb29tKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBQdXNoIHRoZSBuZXcgcm9vbUlEIHRvIGFycmF5TGlzdE9mUm9vbXNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5TGlzdE9mUm9vbXMucHVzaChyb29tLnJvb21JRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVtaXQgdGhlIHVwZGF0ZWQgbGlzdCBvZiByb29tcyB0byB0aGUgc2VydmVyXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnam9pbk11bHRpcGxlUm9vbXMnLCB0aGlzLmFycmF5TGlzdE9mUm9vbXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhY2tUb0luZGV4KCkge1xyXG4gICAgICAgICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygncmVmcmVzaFRva2VuJyk7XHJcbiAgICAgICAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygndXNlcm5hbWUnKTtcclxuICAgICAgICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdpbWcnKTtcclxuICAgICAgICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdpZCcpO1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2luZGV4L2luZGV4JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b2dnbGVQb3BMaXN0KCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dNZW51UG9wID0gIXRoaXMuc2hvd01lbnVQb3A7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNjb25uZWN0KCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBqdW1wKHJvb21JRCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5jb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3VwZGF0ZVRpcFN0YXR1cycsIHJvb21JRCk7XHJcbiAgICAgICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL2NoYXRyb29tL2NoYXRyb29tP25hbWU9JyArIHRoaXMubmFtZSArICcmaW1nPScgKyB0aGlzLmltZyArICcmaWQ9JyArIHRoaXMuaWQgKyAnJnJvb21JRD0nICsgcm9vbUlELFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpc3RlbkZvclRpcFVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oJ3RpcFN0YXR1c1VwZGF0ZScsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RpcFN0YXR1c1VwZGF0ZScsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vbVRvVXBkYXRlID0gdGhpcy5yb29tcy5maW5kKHJvb20gPT4gcm9vbS5yb29tSUQgPT09IGRhdGEucm9vbUlEKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb29tVG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByb29tVG9VcGRhdGUudGlwID0gZGF0YS50aXA7IC8vIFVwZGF0ZSB0aGUgdGlwIHN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnJvb21zLCB0aGlzLnJvb21zLmluZGV4T2Yocm9vbVRvVXBkYXRlKSwgcm9vbVRvVXBkYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0RGlzcGxheUltYWdlcyhpbWdBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAoaW1nQXJyYXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW1nQXJyYXk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW1nQXJyYXkuc2xpY2UoMCwgNCk7IC8vIE9ubHkgc2hvdyB0aGUgZmlyc3QgNCBpbWFnZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmV0Y2hSb29tcygpIHtcclxuICAgICAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBCQVNFX1VSTCArICc6JyArIFNFUlZFUl9QT1JUICsgJy9yb29tY3JlYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtlcnJvciwgcmVzXSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbHRlciByb29tcyB3aGVyZSB0aGlzLmlkIGlzIGluY2x1ZGVkIGluIHRoZSB1c2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vbXMgPSByZXMuZGF0YS5maWx0ZXIocm9vbSA9PiByb29tLm93bmVySUQgPT09IHRoaXMuaWQgfHwgcm9vbS51c2Vyc0lELmluY2x1ZGVzKHRoaXMuaWQpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb29tcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlMaXN0T2ZSb29tcyA9IHRoaXMucm9vbXMubWFwKHJvb20gPT4gcm9vbS5yb29tSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdqb2luTXVsdGlwbGVSb29tcycsIHRoaXMuYXJyYXlMaXN0T2ZSb29tcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzaW5nbGUgY2hhdCBtZXNzYWdlczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGltZVByb2Nlc3MoZGF0ZSkge1xyXG4gICAgICAgICAgICB2YXIgdGltZTtcclxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAvL2dldCB0aW1lXHJcbiAgICAgICAgICAgIHZhciBkZCA9IGQuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB2YXIgaCA9IGQuZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgdmFyIG0gPSBkLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICAgICAgdmFyIFkgPSBkLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIHZhciBNID0gZC5nZXRNb250aCgpICsgMTtcclxuICAgICAgICAgICAgdmFyIEQgPSBkLmdldERhdGUoKTtcclxuICAgICAgICAgICAgLy9jdXJyZW50IHRpbWVcclxuICAgICAgICAgICAgdmFyIG5uID0gbi5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHZhciBoaCA9IG4uZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgdmFyIG1tID0gbi5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgICAgIHZhciBZWSA9IG4uZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgdmFyIE1NID0gbi5nZXRNb250aCgpICsgMTtcclxuICAgICAgICAgICAgdmFyIEREID0gbi5nZXREYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoRCA9PSBERCAmJiBNID09IE1NICYmIFkgPT0gWVkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBoID0gJzAnICsgaDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBtID0gJzAnICsgbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRpbWUgPSBoICsgJzonICsgbTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aW1lO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEQgKyAxID09IEREICYmIE0gPT0gTU0gJiYgWSA9PSBZWSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGggPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGggPSAnMCcgKyBoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG0gPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG0gPSAnMCcgKyBtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGltZSA9ICd5ZXN0ZXJkYXknICsgJyAnICsgaCArICc6JyArIG07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGltZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChNIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBNID0gJzAnICsgTTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChEIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBEID0gJzAnICsgRDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChoIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBoID0gJzAnICsgaDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBtID0gJzAnICsgbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRpbWUgPSBZICsgJy8nICsgTSArICcvJyArIEQgKyAnICcgKyBoICsgJzonICsgbTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWNlaXZlR3JvdXBNc2coKSB7XHJcbiAgICAgICAgICAgIC8vZ2V0IHRoZSBpbnN0YW50IG1lc3NhZ2UgZnJvbSBzb2NrZXRcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oJ3Jvb21MaXN0TXNnJywgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncm9vbUxpc3RNc2cnLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIHJvb20gd2l0aCB0aGUgbWF0Y2hpbmcgcm9vbUlEXHJcbiAgICAgICAgICAgICAgICBjb25zdCByb29tVG9VcGRhdGUgPSB0aGlzLnJvb21zLmZpbmQocm9vbSA9PiByb29tLnJvb21JRCA9PT0gZGF0YS5yb29tSUQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvb21Ub1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb21Ub1VwZGF0ZS5yb29tTXNnID0gZGF0YS5tZXNzYWdlQ29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICByb29tVG9VcGRhdGUucm9vbU1zZ1RpbWUgPSB0aGlzLnRpbWVQcm9jZXNzKGRhdGEudGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vbVRvVXBkYXRlLnRpcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucm9vbXMsIHRoaXMucm9vbXMuaW5kZXhPZihyb29tVG9VcGRhdGUpLCByb29tVG9VcGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbi5zdGF0dXMtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODhycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3RhdHVzLWJhci1oZWlnaHQpO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC8vIHotaW5kZXg6IDk5ODtcclxuICAgIGNvbG9yOiAjMjcyODMyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgMjMxLCAyMzEsIDAuOTYpO1xyXG4gICAgbWFyZ2luLXRvcDogMXJweDtcclxuXHJcbiAgICAubG9naW4tYyB7XHJcbiAgICAgICAgd2lkdGg6IDYwcnB4O1xyXG4gICAgICAgIGhlaWdodDogNjBycHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIzcnB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjNycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLWJhY2sge1xyXG4gICAgICAgIHdpZHRoOiAyMHJweDtcclxuICAgICAgICBoZWlnaHQ6IDM0cnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGQge1xyXG4gICAgICAgIHdpZHRoOiA0MHJweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcnB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyM3JweDtcclxuICAgICAgICByaWdodDogMzZycHg7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uc2Nyb2xsLVkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLy8gQXBwIEFwcCBwYWdlIGFkYXB0YXRpb25cclxuICAgIC8vIHRvcDogMTUwcnB4O1xyXG4gICAgdG9wOiAxMDBycHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDBycHg7XHJcbn1cclxuXHJcbi5yb29tLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBoZWlnaHQ6IDE0MHJweDtcclxuXHJcblxyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMzBycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBycHg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgICAgIC8qIDIgY29sdW1ucyBncmlkLCBhZGp1c3QgYXMgbmVlZGVkICovXHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgICAvKiAyIHJvd3MgZ3JpZCwgYWRqdXN0IGFzIG5lZWRlZCAqL1xyXG4gICAgfVxyXG5cclxuICAgIC50aXAge1xyXG4gICAgICAgIHdpZHRoOiAxOHJweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA3NywgNjAsIDEpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDVycHg7XHJcbiAgICAgICAgcmlnaHQ6IDBycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFRoaXMgd2lsbCBtYWtlIHN1cmUgdGhlIGVudGlyZSBncmlkIGNlbGwgaXMgZmlsbGVkICovXHJcbiAgICAuYXZhdGFyLWltYWdlIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI0MywgMjQwLCAyNDApO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cnB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuc2luZ2xlLWltYWdlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXJweDtcclxuICAgICAgICBwYWRkaW5nOiA0LjdweDtcclxuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gICAgICAgIGdyaWQtcm93OiBzcGFuIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm9zIHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG5cclxuICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcnB4O1xyXG5cclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjA2MDYwO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHJweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2ZjZmNmY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHJweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRlc2NyaXB0IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2ZjZmNmY7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBycHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDU4MHJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///87\n");

/***/ }),
/* 88 */
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/creation/createChat.vue?mpType=page ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createChat_vue_vue_type_template_id_4d7a278b_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createChat.vue?vue&type=template&id=4d7a278b&mpType=page */ 89);\n/* harmony import */ var _createChat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createChat.vue?vue&type=script&lang=js&mpType=page */ 104);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _createChat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _createChat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _createChat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _createChat_vue_vue_type_template_id_4d7a278b_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _createChat_vue_vue_type_template_id_4d7a278b_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _createChat_vue_vue_type_template_id_4d7a278b_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/creation/createChat.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDeUU7QUFDTDs7O0FBR3BFO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiODguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NyZWF0ZUNoYXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkN2EyNzhiJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jcmVhdGVDaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9jcmVhdGVDaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NyZWF0aW9uL2NyZWF0ZUNoYXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///88\n");

/***/ }),
/* 89 */
/*!************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/creation/createChat.vue?vue&type=template&id=4d7a278b&mpType=page ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_createChat_vue_vue_type_template_id_4d7a278b_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./createChat.vue?vue&type=template&id=4d7a278b&mpType=page */ 90);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_createChat_vue_vue_type_template_id_4d7a278b_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_createChat_vue_vue_type_template_id_4d7a278b_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_createChat_vue_vue_type_template_id_4d7a278b_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_createChat_vue_vue_type_template_id_4d7a278b_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 90 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/creation/createChat.vue?vue&type=template&id=4d7a278b&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    lzIndexedList:
      __webpack_require__(/*! @/uni_modules/lz-indexed-list/components/lz-indexed-list/lz-indexed-list.vue */ 91)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "page-main"), attrs: { _i: 0 } },
    [
      _c("lz-indexed-list", {
        attrs: {
          dataList: _vm.users,
          name: _vm.name,
          img: _vm.img,
          currentUserID: _vm.id,
          _i: 1,
        },
      }),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 91 */
/*!***************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/components/lz-indexed-list/lz-indexed-list.vue ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lz_indexed_list_vue_vue_type_template_id_de048536_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lz-indexed-list.vue?vue&type=template&id=de048536&scoped=true& */ 92);\n/* harmony import */ var _lz_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lz-indexed-list.vue?vue&type=script&lang=js& */ 101);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lz_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lz_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _lz_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _lz_indexed_list_vue_vue_type_template_id_de048536_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _lz_indexed_list_vue_vue_type_template_id_de048536_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"de048536\",\n  null,\n  false,\n  _lz_indexed_list_vue_vue_type_template_id_de048536_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/lz-indexed-list/components/lz-indexed-list/lz-indexed-list.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2x6LWluZGV4ZWQtbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGUwNDg1MzYmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sei1pbmRleGVkLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9sei1pbmRleGVkLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZGUwNDg1MzZcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvbHotaW5kZXhlZC1saXN0L2NvbXBvbmVudHMvbHotaW5kZXhlZC1saXN0L2x6LWluZGV4ZWQtbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///91\n");

/***/ }),
/* 92 */
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/components/lz-indexed-list/lz-indexed-list.vue?vue&type=template&id=de048536&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_indexed_list_vue_vue_type_template_id_de048536_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./lz-indexed-list.vue?vue&type=template&id=de048536&scoped=true& */ 93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_indexed_list_vue_vue_type_template_id_de048536_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_indexed_list_vue_vue_type_template_id_de048536_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_indexed_list_vue_vue_type_template_id_de048536_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_indexed_list_vue_vue_type_template_id_de048536_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 93 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/components/lz-indexed-list/lz-indexed-list.vue?vue&type=template&id=de048536&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 20)
        .default,
    uniPopupDialog:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue */ 39)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "lz-list"), attrs: { _i: 0 } },
    [
      _c(
        "scroll-view",
        {
          staticClass: _vm._$s(1, "sc", "lz-scroll-left"),
          attrs: {
            "scroll-into-view": _vm._$s(
              1,
              "a-scroll-into-view",
              _vm.scrollIntoView
            ),
            _i: 1,
          },
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "lz-search"),
              attrs: { id: "TOP", _i: 2 },
            },
            [
              _c(
                "navigator",
                { staticClass: _vm._$s(3, "sc", "login-c"), attrs: { _i: 3 } },
                [
                  _c("image", {
                    staticClass: _vm._$s(4, "sc", "login-back"),
                    attrs: {
                      src: _vm._$s(
                        4,
                        "a-src",
                        __webpack_require__(/*! ../../static/back.png */ 94)
                      ),
                      _i: 4,
                    },
                  }),
                ]
              ),
              _c("image", {
                staticClass: _vm._$s(5, "sc", "lz-search-img"),
                attrs: {
                  src: _vm._$s(5, "a-src", __webpack_require__(/*! ../../static/search.png */ 95)),
                  _i: 5,
                },
              }),
              _vm._l(
                _vm._$s(6, "f", { forItems: _vm.selectedImg }),
                function (img, index, $20, $30) {
                  return _c(
                    "div",
                    {
                      key: _vm._$s(6, "f", { forIndex: $20, key: index }),
                      staticClass: _vm._$s("6-" + $30, "sc", "img-wrapper"),
                      attrs: { _i: "6-" + $30 },
                    },
                    [
                      _c("image", {
                        staticClass: _vm._$s(
                          "7-" + $30,
                          "sc",
                          "lz-search-img-selected"
                        ),
                        attrs: {
                          src: _vm._$s("7-" + $30, "a-src", img.img),
                          _i: "7-" + $30,
                        },
                      }),
                      _c("image", {
                        staticClass: _vm._$s("8-" + $30, "sc", "cancel-icon"),
                        attrs: {
                          src: _vm._$s(
                            "8-" + $30,
                            "a-src",
                            __webpack_require__(/*! ../../static/cancel.png */ 96)
                          ),
                          _i: "8-" + $30,
                        },
                        on: {
                          click: function ($event) {
                            return _vm.chooseItem(img)
                          },
                        },
                      }),
                    ]
                  )
                }
              ),
              _vm._$s(9, "i", _vm.selectedImg.length)
                ? _c("image", {
                    staticClass: _vm._$s(9, "sc", "lz-search-img-submit"),
                    attrs: {
                      src: _vm._$s(
                        9,
                        "a-src",
                        __webpack_require__(/*! ../../static/submit.png */ 97)
                      ),
                      _i: 9,
                    },
                    on: { click: _vm.inputDialogToggle },
                  })
                : _vm._e(),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.searchStr,
                    expression: "searchStr",
                  },
                ],
                staticClass: _vm._$s(10, "sc", "lz-input"),
                attrs: { _i: 10 },
                domProps: { value: _vm._$s(10, "v-model", _vm.searchStr) },
                on: {
                  input: [
                    function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchStr = $event.target.value
                    },
                    _vm.search,
                  ],
                },
              }),
            ],
            2
          ),
          _vm._l(
            _vm._$s(11, "f", { forItems: _vm.scrollLeftObj }),
            function (item, index, $21, $31) {
              return _c(
                "view",
                {
                  key: _vm._$s(11, "f", { forIndex: $21, key: index }),
                  staticClass: _vm._$s("11-" + $31, "sc", "left-list"),
                  attrs: {
                    id: _vm._$s(
                      "11-" + $31,
                      "a-id",
                      index != "#" ? index : "BOTTOM"
                    ),
                    _i: "11-" + $31,
                  },
                },
                [
                  _vm._$s("12-" + $31, "i", item && item.length)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            "12-" + $31,
                            "sc",
                            "left-item-title"
                          ),
                          attrs: { _i: "12-" + $31 },
                        },
                        [_vm._v(_vm._$s("12-" + $31, "t0-0", _vm._s(index)))]
                      )
                    : _vm._e(),
                  _vm._l(
                    _vm._$s(13 + "-" + $31, "f", { forItems: item }),
                    function (mess, inx, $22, $32) {
                      return _c(
                        "view",
                        {
                          key: _vm._$s(13 + "-" + $31, "f", {
                            forIndex: $22,
                            key: 13 + "-" + $31 + "-" + $32,
                          }),
                          staticClass: _vm._$s(
                            "13-" + $31 + "-" + $32,
                            "sc",
                            "left-item-card"
                          ),
                          attrs: { _i: "13-" + $31 + "-" + $32 },
                          on: {
                            click: function ($event) {
                              $event.stopPropagation()
                              return _vm.chooseItem(mess)
                            },
                          },
                        },
                        [
                          _vm._$s(
                            "14-" + $31 + "-" + $32,
                            "i",
                            _vm.isSelected(mess)
                          )
                            ? _c("image", {
                                staticClass: _vm._$s(
                                  "14-" + $31 + "-" + $32,
                                  "sc",
                                  "left-item-card-circle-img img-info"
                                ),
                                attrs: {
                                  src: _vm._$s(
                                    "14-" + $31 + "-" + $32,
                                    "a-src",
                                    __webpack_require__(/*! ../../static/submit.png */ 97)
                                  ),
                                  _i: "14-" + $31 + "-" + $32,
                                },
                              })
                            : _c("image", {
                                staticClass: _vm._$s(
                                  "15-" + $31 + "-" + $32,
                                  "sc",
                                  "left-item-card-circle-img img-info"
                                ),
                                attrs: {
                                  src: _vm._$s(
                                    "15-" + $31 + "-" + $32,
                                    "a-src",
                                    __webpack_require__(/*! ../../static/circle.png */ 98)
                                  ),
                                  _i: "15-" + $31 + "-" + $32,
                                },
                              }),
                          _vm._$s(
                            "16-" + $31 + "-" + $32,
                            "i",
                            mess[_vm.imgKey]
                          )
                            ? _c("image", {
                                staticClass: _vm._$s(
                                  "16-" + $31 + "-" + $32,
                                  "sc",
                                  "left-item-card-img img-info"
                                ),
                                style: _vm._$s(
                                  "16-" + $31 + "-" + $32,
                                  "s",
                                  "border-radius:" + _vm.radius
                                ),
                                attrs: {
                                  src: _vm._$s(
                                    "16-" + $31 + "-" + $32,
                                    "a-src",
                                    mess[_vm.imgKey]
                                  ),
                                  _i: "16-" + $31 + "-" + $32,
                                },
                                on: {
                                  click: function ($event) {
                                    $event.stopPropagation()
                                    return _vm.preview(mess[_vm.imgKey])
                                  },
                                },
                              })
                            : _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "17-" + $31 + "-" + $32,
                                    "sc",
                                    "left-item-card-img"
                                  ),
                                  style: _vm._$s(
                                    "17-" + $31 + "-" + $32,
                                    "s",
                                    "border-radius:" + _vm.radius
                                  ),
                                  attrs: { _i: "17-" + $31 + "-" + $32 },
                                },
                                [
                                  _vm._v(
                                    _vm._$s(
                                      "17-" + $31 + "-" + $32,
                                      "t0-0",
                                      _vm._s(
                                        (mess[_vm.nameKey] &&
                                          mess[_vm.nameKey].slice(0, 1)) ||
                                          ""
                                      )
                                    )
                                  ),
                                ]
                              ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "18-" + $31 + "-" + $32,
                                "sc",
                                "left-item-card-info"
                              ),
                              style: _vm._$s(
                                "18-" + $31 + "-" + $32,
                                "s",
                                inx < item.length - 1
                                  ? "border-bottom: solid #F4F4F4 1rpx;"
                                  : ""
                              ),
                              attrs: { _i: "18-" + $31 + "-" + $32 },
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "19-" + $31 + "-" + $32,
                                    "sc",
                                    "left-item-card-name"
                                  ),
                                  attrs: { _i: "19-" + $31 + "-" + $32 },
                                },
                                [
                                  _vm._v(
                                    _vm._$s(
                                      "19-" + $31 + "-" + $32,
                                      "t0-0",
                                      _vm._s(mess[_vm.nameKey] || "")
                                    )
                                  ),
                                ]
                              ),
                              _vm._$s(
                                "20-" + $31 + "-" + $32,
                                "i",
                                mess[_vm.phoneKey]
                              )
                                ? _c(
                                    "view",
                                    {
                                      staticClass: _vm._$s(
                                        "20-" + $31 + "-" + $32,
                                        "sc",
                                        "left-item-card-phone"
                                      ),
                                      attrs: { _i: "20-" + $31 + "-" + $32 },
                                    },
                                    [
                                      _vm._v(
                                        _vm._$s(
                                          "20-" + $31 + "-" + $32,
                                          "t0-0",
                                          _vm._s(mess[_vm.phoneKey])
                                        )
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]
                          ),
                        ]
                      )
                    }
                  ),
                ],
                2
              )
            }
          ),
          _vm._$s(21, "i", !_vm.hasData)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(21, "sc", "no-data"),
                  attrs: { _i: 21 },
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(22, "sc", "no-data-img"),
                    attrs: {
                      src: _vm._$s(
                        22,
                        "a-src",
                        __webpack_require__(/*! ../../static/noData.png */ 99)
                      ),
                      _i: 22,
                    },
                  }),
                  _c("view", {
                    staticClass: _vm._$s(23, "sc", "no-data-name"),
                    attrs: { _i: 23 },
                  }),
                ]
              )
            : _vm._e(),
        ],
        2
      ),
      _vm._$s(24, "i", _vm.hasData)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(24, "sc", "lz-scroll-right"),
              attrs: { _i: 24 },
            },
            [
              _c("image", {
                staticClass: _vm._$s(25, "sc", "lz-scroll-right-top"),
                attrs: {
                  src: _vm._$s(25, "a-src", __webpack_require__(/*! ../../static/top.png */ 100)),
                  _i: 25,
                },
                on: {
                  click: function ($event) {
                    $event.stopPropagation()
                    _vm.scrollIntoView = "TOP"
                  },
                },
              }),
              _vm._l(
                _vm._$s(26, "f", { forItems: _vm.scrollRightList }),
                function (item, index, $23, $33) {
                  return _c(
                    "view",
                    {
                      key: _vm._$s(26, "f", { forIndex: $23, key: index }),
                      class: _vm._$s("26-" + $33, "c", {
                        "lz-scroll-right-name": true,
                        "lz-scroll-right-select": item == _vm.scrollIntoView,
                      }),
                      attrs: { _i: "26-" + $33 },
                      on: {
                        click: function ($event) {
                          $event.stopPropagation()
                          return _vm.chooseType(item)
                        },
                      },
                    },
                    [_vm._v(_vm._$s("26-" + $33, "t0-0", _vm._s(item)))]
                  )
                }
              ),
            ],
            2
          )
        : _vm._e(),
      _c(
        "uni-popup",
        { ref: "inputDialog", attrs: { type: "dialog", _i: 27 } },
        [
          _c("uni-popup-dialog", {
            ref: "inputClose",
            attrs: {
              mode: "input",
              title: "Room Name",
              value: "",
              placeholder: "please input the room name",
              _i: 28,
            },
            on: { confirm: _vm.dialogInputConfirm },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 94 */
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/static/back.png ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/uni_modules/lz-indexed-list/static/back.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijk0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi91bmlfbW9kdWxlcy9sei1pbmRleGVkLWxpc3Qvc3RhdGljL2JhY2sucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///94\n");

/***/ }),
/* 95 */
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/static/search.png ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/uni_modules/lz-indexed-list/static/search.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijk1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi91bmlfbW9kdWxlcy9sei1pbmRleGVkLWxpc3Qvc3RhdGljL3NlYXJjaC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///95\n");

/***/ }),
/* 96 */
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/static/cancel.png ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/uni_modules/lz-indexed-list/static/cancel.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijk2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi91bmlfbW9kdWxlcy9sei1pbmRleGVkLWxpc3Qvc3RhdGljL2NhbmNlbC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///96\n");

/***/ }),
/* 97 */
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/static/submit.png ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/uni_modules/lz-indexed-list/static/submit.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijk3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi91bmlfbW9kdWxlcy9sei1pbmRleGVkLWxpc3Qvc3RhdGljL3N1Ym1pdC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///97\n");

/***/ }),
/* 98 */
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/static/circle.png ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/uni_modules/lz-indexed-list/static/circle.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijk4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi91bmlfbW9kdWxlcy9sei1pbmRleGVkLWxpc3Qvc3RhdGljL2NpcmNsZS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///98\n");

/***/ }),
/* 99 */
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/static/noData.png ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/uni_modules/lz-indexed-list/static/noData.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ijk5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi91bmlfbW9kdWxlcy9sei1pbmRleGVkLWxpc3Qvc3RhdGljL25vRGF0YS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///99\n");

/***/ }),
/* 100 */
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/static/top.png ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/uni_modules/lz-indexed-list/static/top.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEwMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvdW5pX21vZHVsZXMvbHotaW5kZXhlZC1saXN0L3N0YXRpYy90b3AucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///100\n");

/***/ }),
/* 101 */
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/components/lz-indexed-list/lz-indexed-list.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./lz-indexed-list.vue?vue&type=script&lang=js& */ 102);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_lz_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJ1QixDQUFnQixxdEJBQUcsRUFBQyIsImZpbGUiOiIxMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sei1pbmRleGVkLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sei1pbmRleGVkLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///101\n");

/***/ }),
/* 102 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/components/lz-indexed-list/lz-indexed-list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _pinyinUtil = __webpack_require__(/*! ./pinyinUtil.js */ 103);\nvar _config = __webpack_require__(/*! ../../../../config.js */ 15);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 = {\n  props: {\n    //data source\n    dataList: {\n      type: Array,\n      required: true,\n      default: function _default() {\n        return [];\n      }\n    },\n    //IDkey\n    idKey: {\n      type: String,\n      default: 'id'\n    },\n    //Namekey\n    nameKey: {\n      type: String,\n      default: 'name'\n    },\n    //Phonekey\n    phoneKey: {\n      type: String,\n      default: 'phone'\n    },\n    //Avatarkey\n    imgKey: {\n      type: String,\n      default: 'img'\n    },\n    //AvatarRadius(rpx、px、%)\n    radius: {\n      type: String,\n      default: '50rpx'\n    },\n    name: {\n      type: String,\n      default: ''\n    },\n    img: {\n      type: String,\n      default: ''\n    },\n    currentUserID: {\n      type: String,\n      default: ''\n    }\n  },\n  data: function data() {\n    return {\n      searchStr: '',\n      scrollIntoView: '',\n      scrollLeftObj: {},\n      oldObj: {},\n      scrollRightList: [],\n      hasData: true,\n      selectedImg: [],\n      roomName: ''\n    };\n  },\n  watch: {\n    dataList: {\n      immediate: true,\n      deep: true,\n      handler: function handler(newList) {\n        if (newList && newList.length) this.cleanData(newList);\n      }\n    }\n  },\n  methods: {\n    isSelected: function isSelected(mess) {\n      var _this = this;\n      var found = this.selectedImg.find(function (img) {\n        return img.id === mess[_this.idKey];\n      });\n      if (found) {\n        return true;\n      } else {\n        return false;\n      }\n    },\n    search: function search() {\n      var _this2 = this;\n      if (this.searchStr) {\n        var has = false;\n        this.scrollLeftObj = JSON.parse(JSON.stringify(this.oldObj));\n        for (var i in this.scrollLeftObj) {\n          this.scrollLeftObj[i] = this.scrollLeftObj[i].filter(function (item) {\n            return item[_this2.nameKey].indexOf(_this2.searchStr) != -1 || item[_this2.phoneKey].indexOf(_this2.searchStr) != -1;\n          });\n          if (this.scrollLeftObj[i].length) has = true;\n        }\n        if (has) this.hasData = true;else this.hasData = false;\n      } else {\n        this.hasData = true;\n        this.scrollLeftObj = JSON.parse(JSON.stringify(this.oldObj));\n      }\n    },\n    cleanData: function cleanData(list) {\n      var _this3 = this;\n      this.scrollRightList = this.getLetter();\n      var newList = [];\n      list.forEach(function (res) {\n        var _newList$firsfirs$pus;\n        var initial = _pinyinUtil.pinyinUtil.getFirstLetter(res.name.trim());\n        var firsfirs = initial ? initial.substring(0, 1) : '';\n        if (!newList[firsfirs]) newList[firsfirs] = [];\n        newList[firsfirs].push((_newList$firsfirs$pus = {}, (0, _defineProperty2.default)(_newList$firsfirs$pus, _this3.idKey, res[_this3.idKey] || ''), (0, _defineProperty2.default)(_newList$firsfirs$pus, _this3.nameKey, res[_this3.nameKey].trim() || ''), (0, _defineProperty2.default)(_newList$firsfirs$pus, _this3.phoneKey, res[_this3.phoneKey] || ''), (0, _defineProperty2.default)(_newList$firsfirs$pus, _this3.imgKey, res[_this3.imgKey] || ''), _newList$firsfirs$pus));\n      });\n      this.scrollRightList.forEach(function (t) {\n        if (newList[t]) {\n          _this3.$set(_this3.scrollLeftObj, t, newList[t]);\n        } else {\n          _this3.$set(_this3.scrollLeftObj, t, []);\n        }\n      });\n      var surplusList = [];\n      for (var i in newList) {\n        var han = this.scrollRightList.find(function (v) {\n          return v == i;\n        });\n        if (!han) surplusList.push(newList[i]);\n      }\n      surplusList.forEach(function (item) {\n        _this3.scrollLeftObj['#'] = _this3.scrollLeftObj['#'].concat(item);\n      });\n      this.oldObj = JSON.parse(JSON.stringify(this.scrollLeftObj));\n    },\n    getLetter: function getLetter() {\n      var list = [];\n      for (var i = 0; i < 26; i++) {\n        list.push(String.fromCharCode(65 + i));\n      }\n      list.push('#');\n      return list;\n    },\n    chooseType: function chooseType(item) {\n      if (item == '#') item = 'BOTTOM';\n      this.scrollIntoView = item;\n    },\n    preview: function preview(img) {\n      uni.previewImage({\n        current: 0,\n        urls: [img]\n      });\n    },\n    chooseItem: function chooseItem(item) {\n      var _this4 = this;\n      var found = this.selectedImg.find(function (img) {\n        return img.id === item[_this4.idKey];\n      });\n      if (!found) {\n        this.selectedImg.push({\n          id: item[this.idKey],\n          img: item[this.imgKey],\n          name: item[this.nameKey]\n        });\n      } else {\n        var index = this.selectedImg.indexOf(found);\n        this.selectedImg.splice(index, 1);\n      }\n      this.$emit('click', item);\n    },\n    postRoom: function postRoom(roomData) {\n      var _this5 = this;\n      uni.request({\n        url: _config.BASE_URL + ':' + _config.SERVER_PORT + \"/roomcreation\",\n        method: 'POST',\n        data: roomData,\n        success: function success(res) {\n          if (res.statusCode === 200) {\n            // Access the newGroupChat data\n            var newGroupChat = res.data;\n            _this5.socket.emit('createNewRoom', newGroupChat);\n            uni.navigateBack({\n              delta: 1\n            });\n            // show success toast\n            // uni.showToast({\n            // \ttitle: 'Creation success!',\n            // \ticon: 'success',\n            // \tduration: 800\n            // });\n            // setTimeout(() => {\n            // \tuni.navigateTo({\n            // \t\turl: '../../../../creation/roomList?name=' + this.name + '&img=' + this.img + '&id=' + this.currentUserID,\n            // \t});\n            // }, 1500);\n          } else {\n            uni.showToast({\n              title: 'Creation failed!',\n              icon: 'none',\n              duration: 2000\n            });\n            setTimeout(function () {\n              _this5.showFailureToast = false;\n            }, 1200);\n          }\n        }\n      });\n    },\n    dialogInputConfirm: function dialogInputConfirm(value) {\n      if (value.length > 0) {\n        var roomData = {\n          roomName: value,\n          ownerID: this.currentUserID,\n          ownerImg: '../../static/images/' + this.img + '.png',\n          usersID: this.selectedImg.map(function (img) {\n            return img.id;\n          }),\n          img: this.selectedImg.map(function (img) {\n            return img.img;\n          })\n        };\n        this.postRoom(roomData);\n      } else {\n        uni.showToast({\n          title: 'Room name cannot be empty',\n          icon: 'none'\n        });\n      }\n    },\n    inputDialogToggle: function inputDialogToggle() {\n      // if the length of selectedImg is over 1, show toast\n      if (this.selectedImg.length > 1) {\n        this.$refs.inputDialog.open();\n      } else {\n        var roomData = {\n          roomName: this.selectedImg.map(function (img) {\n            return img.name;\n          }).join(\",\"),\n          ownerID: this.currentUserID,\n          ownerName: this.name,\n          ownerImg: '../../static/images/' + this.img + '.png',\n          usersID: this.selectedImg.map(function (img) {\n            return img.id;\n          }),\n          img: this.selectedImg.map(function (img) {\n            return img.img;\n          })\n        };\n        this.postRoom(roomData);\n      }\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvbHotaW5kZXhlZC1saXN0L2NvbXBvbmVudHMvbHotaW5kZXhlZC1saXN0L2x6LWluZGV4ZWQtbGlzdC52dWUiXSwibmFtZXMiOlsicHJvcHMiLCJkYXRhTGlzdCIsInR5cGUiLCJyZXF1aXJlZCIsImRlZmF1bHQiLCJpZEtleSIsIm5hbWVLZXkiLCJwaG9uZUtleSIsImltZ0tleSIsInJhZGl1cyIsIm5hbWUiLCJpbWciLCJjdXJyZW50VXNlcklEIiwiZGF0YSIsInNlYXJjaFN0ciIsInNjcm9sbEludG9WaWV3Iiwic2Nyb2xsTGVmdE9iaiIsIm9sZE9iaiIsInNjcm9sbFJpZ2h0TGlzdCIsImhhc0RhdGEiLCJzZWxlY3RlZEltZyIsInJvb21OYW1lIiwid2F0Y2giLCJpbW1lZGlhdGUiLCJkZWVwIiwiaGFuZGxlciIsIm1ldGhvZHMiLCJpc1NlbGVjdGVkIiwic2VhcmNoIiwiaW5kZXhPZiIsImNsZWFuRGF0YSIsImxpc3QiLCJuZXdMaXN0Iiwic3VycGx1c0xpc3QiLCJnZXRMZXR0ZXIiLCJjaG9vc2VUeXBlIiwicHJldmlldyIsInVuaSIsImN1cnJlbnQiLCJ1cmxzIiwiY2hvb3NlSXRlbSIsImlkIiwicG9zdFJvb20iLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwiZGVsdGEiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJkaWFsb2dJbnB1dENvbmZpcm0iLCJvd25lcklEIiwib3duZXJJbWciLCJ1c2Vyc0lEIiwiaW5wdXREaWFsb2dUb2dnbGUiLCJvd25lck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBa0VBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFDQTtFQUNBQTtJQUNBO0lBQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQUg7TUFDQUU7SUFDQTtJQUNBO0lBQ0FFO01BQ0FKO01BQ0FFO0lBQ0E7SUFDQTtJQUNBRztNQUNBTDtNQUNBRTtJQUNBO0lBQ0E7SUFDQUk7TUFDQU47TUFDQUU7SUFDQTtJQUNBO0lBQ0FLO01BQ0FQO01BQ0FFO0lBQ0E7SUFDQU07TUFDQVI7TUFDQUU7SUFDQTtJQUNBTztNQUNBVDtNQUNBRTtJQUNBO0lBQ0FRO01BQ0FWO01BQ0FFO0lBQ0E7RUFDQTtFQUNBUztJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBckI7TUFDQXNCO01BQ0FDO01BQ0FDO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFBQTtNQUNBO1FBQUE7TUFBQTtNQUNBO1FBQ0E7TUFDQSxPQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtRQUNBO1FBQ0E7UUFDQTtVQUNBO1lBQ0EscUZBQ0FDO1VBQ0E7VUFDQTtRQUNBO1FBQ0Esa0NBQ0E7TUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtNQUNBO01BQ0FDO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQUMseUdBQ0EsNkZBQ0Esd0dBQ0EsbUdBQ0EsaUVBQ0E7TUFDQTtNQUNBO1FBQ0E7VUFDQTtRQUNBO1VBQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBO1VBQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQUM7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQUg7TUFDQTtNQUNBQTtNQUNBO0lBQ0E7SUFDQUk7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtRQUFBO01BQUE7TUFFQTtRQUNBO1VBQ0FDO1VBQ0E5QjtVQUNBRDtRQUNBO01BQ0EsT0FDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQWdDO01BQUE7TUFDQUw7UUFDQU07UUFDQUM7UUFDQS9CO1FBQ0FnQztVQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0FSO2NBQ0FTO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1VBQ0EsT0FDQTtZQUNBVDtjQUNBVTtjQUNBQztjQUNBQztZQUNBO1lBQ0FDO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7UUFDQTtVQUNBOUI7VUFDQStCO1VBQ0FDO1VBQ0FDO1lBQUE7VUFBQTtVQUNBM0M7WUFBQTtVQUFBO1FBQ0E7UUFDQTtNQUNBO1FBQ0EwQjtVQUNBVTtVQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBTztNQUNBO01BQ0E7UUFDQTtNQUNBLE9BQ0E7UUFDQTtVQUNBbEM7WUFBQTtVQUFBO1VBQ0ErQjtVQUNBSTtVQUNBSDtVQUNBQztZQUFBO1VBQUE7VUFDQTNDO1lBQUE7VUFBQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0VBRUE7QUFDQTtBQUFBIiwiZmlsZSI6IjEwMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImx6LWxpc3RcIj5cclxuXHRcdDxzY3JvbGwtdmlldyBjbGFzcz1cImx6LXNjcm9sbC1sZWZ0XCIgc2Nyb2xsLXk9XCJ0cnVlXCIgOnNjcm9sbC13aXRoLWFuaW1hdGlvbj1cInRydWVcIlxyXG5cdFx0XHQ6c2Nyb2xsLWludG8tdmlldz1cInNjcm9sbEludG9WaWV3XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibHotc2VhcmNoXCIgaWQ9XCJUT1BcIj5cclxuXHRcdFx0XHQ8bmF2aWdhdG9yIG9wZW4tdHlwZT1cIm5hdmlnYXRlQmFja1wiIGNsYXNzPVwibG9naW4tY1wiIGhvdmVyLWNsYXNzPVwibm9uZVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9iYWNrLnBuZ1wiIGNsYXNzPVwibG9naW4tYmFja1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC9uYXZpZ2F0b3I+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwibHotc2VhcmNoLWltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9zZWFyY2gucG5nXCI+PC9pbWFnZT5cclxuXHJcblxyXG5cdFx0XHRcdDwhLS0gPGltYWdlIHYtZm9yPVwiKGltZywgaW5kZXgpIGluIHNlbGVjdGVkSW1nXCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJsei1zZWFyY2gtaW1nLXNlbGVjdGVkXCIgOnNyYz1cImltZy5pbWdcIlxyXG5cdFx0XHRcdFx0QGNsaWNrPVwiY2hvb3NlSXRlbShpbWcpXCI+XHJcblx0XHRcdFx0PC9pbWFnZT5cclxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwiY2FuY2VsLWljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvY2FuY2VsLnBuZ1wiPiAtLT5cclxuXHRcdFx0XHQ8ZGl2IHYtZm9yPVwiKGltZywgaW5kZXgpIGluIHNlbGVjdGVkSW1nXCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJpbWctd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwibHotc2VhcmNoLWltZy1zZWxlY3RlZFwiIDpzcmM9XCJpbWcuaW1nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImNhbmNlbC1pY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL2NhbmNlbC5wbmdcIiBAY2xpY2s9XCJjaG9vc2VJdGVtKGltZylcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8IS0tIGNvcnJlY3QgaW1hZ2UgLS0+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwibHotc2VhcmNoLWltZy1zdWJtaXRcIiBzcmM9XCIuLi8uLi9zdGF0aWMvc3VibWl0LnBuZ1wiIHYtaWY9XCJzZWxlY3RlZEltZy5sZW5ndGhcIlxyXG5cdFx0XHRcdFx0QGNsaWNrPVwiaW5wdXREaWFsb2dUb2dnbGVcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cImx6LWlucHV0XCIgQGlucHV0PVwic2VhcmNoXCIgdi1tb2RlbD1cInNlYXJjaFN0clwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgbWF4bGVuZ3RoPVwiNTBcIlxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXItY2xhc3M9XCJsei1wbGFjZWhvbGRlclwiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0LWxpc3RcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgb2Ygc2Nyb2xsTGVmdE9ialwiIDprZXk9XCJpbmRleFwiXHJcblx0XHRcdFx0OmlkPVwiaW5kZXggIT0gJyMnID8gaW5kZXggOiAnQk9UVE9NJ1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdC1pdGVtLXRpdGxlXCIgdi1pZj1cIml0ZW0gJiYgaXRlbS5sZW5ndGhcIj57eyBpbmRleCB9fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImxlZnQtaXRlbS1jYXJkXCIgdi1mb3I9XCIobWVzcywgaW54KSBpbiBpdGVtXCIgQGNsaWNrLnN0b3A9XCJjaG9vc2VJdGVtKG1lc3MpXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cImlzU2VsZWN0ZWQobWVzcylcIiBzcmM9XCIuLi8uLi9zdGF0aWMvc3VibWl0LnBuZ1wiIGNsYXNzPVwibGVmdC1pdGVtLWNhcmQtY2lyY2xlLWltZyBpbWctaW5mb1wiPlxyXG5cdFx0XHRcdFx0PC9pbWFnZT5cclxuXHRcdFx0XHRcdDxpbWFnZSB2LWVsc2Ugc3JjPVwiLi4vLi4vc3RhdGljL2NpcmNsZS5wbmdcIiBjbGFzcz1cImxlZnQtaXRlbS1jYXJkLWNpcmNsZS1pbWcgaW1nLWluZm9cIj5cclxuXHRcdFx0XHRcdDwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgOnN0eWxlPVwiJ2JvcmRlci1yYWRpdXM6JyArIHJhZGl1c1wiIGNsYXNzPVwibGVmdC1pdGVtLWNhcmQtaW1nIGltZy1pbmZvXCIgOnNyYz1cIm1lc3NbaW1nS2V5XVwiXHJcblx0XHRcdFx0XHRcdHYtaWY9XCJtZXNzW2ltZ0tleV1cIiBAY2xpY2suc3RvcD1cInByZXZpZXcobWVzc1tpbWdLZXldKVwiPjwvaW1hZ2U+XHJcblxyXG5cdFx0XHRcdFx0PHZpZXcgOnN0eWxlPVwiJ2JvcmRlci1yYWRpdXM6JyArIHJhZGl1c1wiIGNsYXNzPVwibGVmdC1pdGVtLWNhcmQtaW1nXCIgdi1lbHNlPlxyXG5cdFx0XHRcdFx0XHR7eyBtZXNzW25hbWVLZXldICYmIG1lc3NbbmFtZUtleV0uc2xpY2UoMCwgMSkgfHwgJycgfX1cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdC1pdGVtLWNhcmQtaW5mb1wiXHJcblx0XHRcdFx0XHRcdDpzdHlsZT1cImlueCA8IGl0ZW0ubGVuZ3RoIC0gMSA/ICdib3JkZXItYm90dG9tOiBzb2xpZCAjRjRGNEY0IDFycHg7JyA6ICcnXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdC1pdGVtLWNhcmQtbmFtZVwiPnt7IG1lc3NbbmFtZUtleV0gfHwgJycgfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdC1pdGVtLWNhcmQtcGhvbmVcIiB2LWlmPVwibWVzc1twaG9uZUtleV1cIj57eyBtZXNzW3Bob25lS2V5XSB9fTwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJuby1kYXRhXCIgdi1pZj1cIiFoYXNEYXRhXCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwibm8tZGF0YS1pbWdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvbm9EYXRhLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJuby1kYXRhLW5hbWVcIj5UaGUgdXNlciBpcyBub3QgZm91bmQgYXQgdGhlIG1vbWVudDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwibHotc2Nyb2xsLXJpZ2h0XCIgdi1pZj1cImhhc0RhdGFcIj5cclxuXHRcdFx0PGltYWdlIGNsYXNzPVwibHotc2Nyb2xsLXJpZ2h0LXRvcFwiIHNyYz1cIi4uLy4uL3N0YXRpYy90b3AucG5nXCIgQGNsaWNrLnN0b3A9XCJzY3JvbGxJbnRvVmlldyA9ICdUT1AnXCI+PC9pbWFnZT5cclxuXHRcdFx0PHZpZXcgOmNsYXNzPVwieyAnbHotc2Nyb2xsLXJpZ2h0LW5hbWUnOiB0cnVlLCAnbHotc2Nyb2xsLXJpZ2h0LXNlbGVjdCc6IGl0ZW0gPT0gc2Nyb2xsSW50b1ZpZXcgfVwiXHJcblx0XHRcdFx0di1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHNjcm9sbFJpZ2h0TGlzdFwiIDprZXk9XCJpbmRleFwiIEBjbGljay5zdG9wPVwiY2hvb3NlVHlwZShpdGVtKVwiPnt7IGl0ZW0gfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHVuaS1wb3B1cCByZWY9XCJpbnB1dERpYWxvZ1wiIHR5cGU9XCJkaWFsb2dcIj5cclxuXHRcdFx0PHVuaS1wb3B1cC1kaWFsb2cgcmVmPVwiaW5wdXRDbG9zZVwiIG1vZGU9XCJpbnB1dFwiIHRpdGxlPVwiUm9vbSBOYW1lXCIgdmFsdWU9XCJcIlxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwicGxlYXNlIGlucHV0IHRoZSByb29tIG5hbWVcIiBAY29uZmlybT1cImRpYWxvZ0lucHV0Q29uZmlybVwiPjwvdW5pLXBvcHVwLWRpYWxvZz5cclxuXHRcdDwvdW5pLXBvcHVwPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcblx0cGlueWluVXRpbFxyXG59IGZyb20gJy4vcGlueWluVXRpbC5qcyc7XHJcbmltcG9ydCB7IEJBU0VfVVJMLCBTRVJWRVJfUE9SVCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZy5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRwcm9wczoge1xyXG5cdFx0Ly9kYXRhIHNvdXJjZVxyXG5cdFx0ZGF0YUxpc3Q6IHtcclxuXHRcdFx0dHlwZTogQXJyYXksXHJcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRkZWZhdWx0OiAoKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIFtdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvL0lEa2V5XHJcblx0XHRpZEtleToge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICdpZCdcclxuXHRcdH0sXHJcblx0XHQvL05hbWVrZXlcclxuXHRcdG5hbWVLZXk6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnbmFtZSdcclxuXHRcdH0sXHJcblx0XHQvL1Bob25la2V5XHJcblx0XHRwaG9uZUtleToge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICdwaG9uZSdcclxuXHRcdH0sXHJcblx0XHQvL0F2YXRhcmtleVxyXG5cdFx0aW1nS2V5OiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJ2ltZydcclxuXHRcdH0sXHJcblx0XHQvL0F2YXRhclJhZGl1cyhycHjjgIFweOOAgSUpXHJcblx0XHRyYWRpdXM6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnNTBycHgnXHJcblx0XHR9LFxyXG5cdFx0bmFtZToge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHR9LFxyXG5cdFx0aW1nOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdH0sXHJcblx0XHRjdXJyZW50VXNlcklEOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdH0sXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c2VhcmNoU3RyOiAnJyxcclxuXHRcdFx0c2Nyb2xsSW50b1ZpZXc6ICcnLFxyXG5cdFx0XHRzY3JvbGxMZWZ0T2JqOiB7fSxcclxuXHRcdFx0b2xkT2JqOiB7fSxcclxuXHRcdFx0c2Nyb2xsUmlnaHRMaXN0OiBbXSxcclxuXHRcdFx0aGFzRGF0YTogdHJ1ZSxcclxuXHRcdFx0c2VsZWN0ZWRJbWc6IFtdLFxyXG5cdFx0XHRyb29tTmFtZTogJycsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0d2F0Y2g6IHtcclxuXHRcdGRhdGFMaXN0OiB7XHJcblx0XHRcdGltbWVkaWF0ZTogdHJ1ZSxcclxuXHRcdFx0ZGVlcDogdHJ1ZSxcclxuXHRcdFx0aGFuZGxlcihuZXdMaXN0KSB7XHJcblx0XHRcdFx0aWYgKG5ld0xpc3QgJiYgbmV3TGlzdC5sZW5ndGgpIHRoaXMuY2xlYW5EYXRhKG5ld0xpc3QpXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0aXNTZWxlY3RlZChtZXNzKSB7XHJcblx0XHRcdGxldCBmb3VuZCA9IHRoaXMuc2VsZWN0ZWRJbWcuZmluZChpbWcgPT4gaW1nLmlkID09PSBtZXNzW3RoaXMuaWRLZXldKTtcclxuXHRcdFx0aWYgKGZvdW5kKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0c2VhcmNoKCkge1xyXG5cdFx0XHRpZiAodGhpcy5zZWFyY2hTdHIpIHtcclxuXHRcdFx0XHRsZXQgaGFzID0gZmFsc2VcclxuXHRcdFx0XHR0aGlzLnNjcm9sbExlZnRPYmogPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMub2xkT2JqKSlcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMuc2Nyb2xsTGVmdE9iaikge1xyXG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxMZWZ0T2JqW2ldID0gdGhpcy5zY3JvbGxMZWZ0T2JqW2ldLmZpbHRlcihpdGVtID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIChpdGVtW3RoaXMubmFtZUtleV0uaW5kZXhPZih0aGlzLnNlYXJjaFN0cikgIT0gLTEpIHx8IGl0ZW1bdGhpcy5waG9uZUtleV1cclxuXHRcdFx0XHRcdFx0XHQuaW5kZXhPZih0aGlzLnNlYXJjaFN0cikgIT0gLTFcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRpZiAodGhpcy5zY3JvbGxMZWZ0T2JqW2ldLmxlbmd0aCkgaGFzID0gdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoaGFzKSB0aGlzLmhhc0RhdGEgPSB0cnVlXHJcblx0XHRcdFx0ZWxzZSB0aGlzLmhhc0RhdGEgPSBmYWxzZVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuaGFzRGF0YSA9IHRydWVcclxuXHRcdFx0XHR0aGlzLnNjcm9sbExlZnRPYmogPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMub2xkT2JqKSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNsZWFuRGF0YShsaXN0KSB7XHJcblx0XHRcdHRoaXMuc2Nyb2xsUmlnaHRMaXN0ID0gdGhpcy5nZXRMZXR0ZXIoKVxyXG5cdFx0XHRsZXQgbmV3TGlzdCA9IFtdXHJcblx0XHRcdGxpc3QuZm9yRWFjaChyZXMgPT4ge1xyXG5cdFx0XHRcdGxldCBpbml0aWFsID0gcGlueWluVXRpbC5nZXRGaXJzdExldHRlcihyZXMubmFtZS50cmltKCkpXHJcblx0XHRcdFx0bGV0IGZpcnNmaXJzID0gaW5pdGlhbCA/IGluaXRpYWwuc3Vic3RyaW5nKDAsIDEpIDogJydcclxuXHRcdFx0XHRpZiAoIW5ld0xpc3RbZmlyc2ZpcnNdKSBuZXdMaXN0W2ZpcnNmaXJzXSA9IFtdXHJcblx0XHRcdFx0bmV3TGlzdFtmaXJzZmlyc10ucHVzaCh7XHJcblx0XHRcdFx0XHRbdGhpcy5pZEtleV06IHJlc1t0aGlzLmlkS2V5XSB8fCAnJyxcclxuXHRcdFx0XHRcdFt0aGlzLm5hbWVLZXldOiByZXNbdGhpcy5uYW1lS2V5XS50cmltKCkgfHwgJycsXHJcblx0XHRcdFx0XHRbdGhpcy5waG9uZUtleV06IHJlc1t0aGlzLnBob25lS2V5XSB8fCAnJyxcclxuXHRcdFx0XHRcdFt0aGlzLmltZ0tleV06IHJlc1t0aGlzLmltZ0tleV0gfHwgJydcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KVxyXG5cdFx0XHR0aGlzLnNjcm9sbFJpZ2h0TGlzdC5mb3JFYWNoKHQgPT4ge1xyXG5cdFx0XHRcdGlmIChuZXdMaXN0W3RdKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5zY3JvbGxMZWZ0T2JqLCB0LCBuZXdMaXN0W3RdKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5zY3JvbGxMZWZ0T2JqLCB0LCBbXSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdGxldCBzdXJwbHVzTGlzdCA9IFtdXHJcblx0XHRcdGZvciAodmFyIGkgaW4gbmV3TGlzdCkge1xyXG5cdFx0XHRcdGxldCBoYW4gPSB0aGlzLnNjcm9sbFJpZ2h0TGlzdC5maW5kKHYgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHYgPT0gaVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYgKCFoYW4pIHN1cnBsdXNMaXN0LnB1c2gobmV3TGlzdFtpXSlcclxuXHRcdFx0fVxyXG5cdFx0XHRzdXJwbHVzTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2Nyb2xsTGVmdE9ialsnIyddID0gdGhpcy5zY3JvbGxMZWZ0T2JqWycjJ10uY29uY2F0KGl0ZW0pXHJcblx0XHRcdH0pXHJcblx0XHRcdHRoaXMub2xkT2JqID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjcm9sbExlZnRPYmopKVxyXG5cdFx0fSxcclxuXHRcdGdldExldHRlcigpIHtcclxuXHRcdFx0bGV0IGxpc3QgPSBbXVxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDI2OyBpKyspIHtcclxuXHRcdFx0XHRsaXN0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpKVxyXG5cdFx0XHR9XHJcblx0XHRcdGxpc3QucHVzaCgnIycpXHJcblx0XHRcdHJldHVybiBsaXN0XHJcblx0XHR9LFxyXG5cdFx0Y2hvb3NlVHlwZShpdGVtKSB7XHJcblx0XHRcdGlmIChpdGVtID09ICcjJykgaXRlbSA9ICdCT1RUT00nXHJcblx0XHRcdHRoaXMuc2Nyb2xsSW50b1ZpZXcgPSBpdGVtXHJcblx0XHR9LFxyXG5cdFx0cHJldmlldyhpbWcpIHtcclxuXHRcdFx0dW5pLnByZXZpZXdJbWFnZSh7XHJcblx0XHRcdFx0Y3VycmVudDogMCxcclxuXHRcdFx0XHR1cmxzOiBbaW1nXVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdGNob29zZUl0ZW0oaXRlbSkge1xyXG5cdFx0XHRsZXQgZm91bmQgPSB0aGlzLnNlbGVjdGVkSW1nLmZpbmQoaW1nID0+IGltZy5pZCA9PT0gaXRlbVt0aGlzLmlkS2V5XSk7XHJcblxyXG5cdFx0XHRpZiAoIWZvdW5kKSB7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZEltZy5wdXNoKHtcclxuXHRcdFx0XHRcdGlkOiBpdGVtW3RoaXMuaWRLZXldLFxyXG5cdFx0XHRcdFx0aW1nOiBpdGVtW3RoaXMuaW1nS2V5XSxcclxuXHRcdFx0XHRcdG5hbWU6IGl0ZW1bdGhpcy5uYW1lS2V5XSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRsZXQgaW5kZXggPSB0aGlzLnNlbGVjdGVkSW1nLmluZGV4T2YoZm91bmQpO1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRJbWcuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLiRlbWl0KCdjbGljaycsIGl0ZW0pO1xyXG5cdFx0fSxcclxuXHRcdHBvc3RSb29tKHJvb21EYXRhKSB7XHJcblx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHR1cmw6IEJBU0VfVVJMICsgJzonICsgU0VSVkVSX1BPUlQgKyBgL3Jvb21jcmVhdGlvbmAsXHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0ZGF0YTogcm9vbURhdGEsXHJcblx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0Ly8gQWNjZXNzIHRoZSBuZXdHcm91cENoYXQgZGF0YVxyXG5cdFx0XHRcdFx0XHRjb25zdCBuZXdHcm91cENoYXQgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zb2NrZXQuZW1pdCgnY3JlYXRlTmV3Um9vbScsIG5ld0dyb3VwQ2hhdCk7XHJcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0XHRcdGRlbHRhOiAxXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHQvLyBzaG93IHN1Y2Nlc3MgdG9hc3RcclxuXHRcdFx0XHRcdFx0Ly8gdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdC8vIFx0dGl0bGU6ICdDcmVhdGlvbiBzdWNjZXNzIScsXHJcblx0XHRcdFx0XHRcdC8vIFx0aWNvbjogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0XHQvLyBcdGR1cmF0aW9uOiA4MDBcclxuXHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyBcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0Ly8gXHRcdHVybDogJy4uLy4uLy4uLy4uL2NyZWF0aW9uL3Jvb21MaXN0P25hbWU9JyArIHRoaXMubmFtZSArICcmaW1nPScgKyB0aGlzLmltZyArICcmaWQ9JyArIHRoaXMuY3VycmVudFVzZXJJRCxcclxuXHRcdFx0XHRcdFx0Ly8gXHR9KTtcclxuXHRcdFx0XHRcdFx0Ly8gfSwgMTUwMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICdDcmVhdGlvbiBmYWlsZWQhJyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0ZhaWx1cmVUb2FzdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9LCAxMjAwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRkaWFsb2dJbnB1dENvbmZpcm0odmFsdWUpIHtcclxuXHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRjb25zdCByb29tRGF0YSA9IHtcclxuXHRcdFx0XHRcdHJvb21OYW1lOiB2YWx1ZSxcclxuXHRcdFx0XHRcdG93bmVySUQ6IHRoaXMuY3VycmVudFVzZXJJRCxcclxuXHRcdFx0XHRcdG93bmVySW1nOiAnLi4vLi4vc3RhdGljL2ltYWdlcy8nICsgdGhpcy5pbWcgKyAnLnBuZycsXHJcblx0XHRcdFx0XHR1c2Vyc0lEOiB0aGlzLnNlbGVjdGVkSW1nLm1hcChpbWcgPT4gaW1nLmlkKSxcclxuXHRcdFx0XHRcdGltZzogdGhpcy5zZWxlY3RlZEltZy5tYXAoaW1nID0+IGltZy5pbWcpLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy5wb3N0Um9vbShyb29tRGF0YSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ1Jvb20gbmFtZSBjYW5ub3QgYmUgZW1wdHknLFxyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRpbnB1dERpYWxvZ1RvZ2dsZSgpIHtcclxuXHRcdFx0Ly8gaWYgdGhlIGxlbmd0aCBvZiBzZWxlY3RlZEltZyBpcyBvdmVyIDEsIHNob3cgdG9hc3RcclxuXHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRJbWcubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMuaW5wdXREaWFsb2cub3BlbigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGNvbnN0IHJvb21EYXRhID0ge1xyXG5cdFx0XHRcdFx0cm9vbU5hbWU6IHRoaXMuc2VsZWN0ZWRJbWcubWFwKGltZyA9PiBpbWcubmFtZSkuam9pbihcIixcIiksXHJcblx0XHRcdFx0XHRvd25lcklEOiB0aGlzLmN1cnJlbnRVc2VySUQsXHJcblx0XHRcdFx0XHRvd25lck5hbWU6IHRoaXMubmFtZSxcclxuXHRcdFx0XHRcdG93bmVySW1nOiAnLi4vLi4vc3RhdGljL2ltYWdlcy8nICsgdGhpcy5pbWcgKyAnLnBuZycsXHJcblx0XHRcdFx0XHR1c2Vyc0lEOiB0aGlzLnNlbGVjdGVkSW1nLm1hcChpbWcgPT4gaW1nLmlkKSxcclxuXHRcdFx0XHRcdGltZzogdGhpcy5zZWxlY3RlZEltZy5tYXAoaW1nID0+IGltZy5pbWcpLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy5wb3N0Um9vbShyb29tRGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcbjo6di1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxuXHRjb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG48L3N0eWxlPlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5sei1saXN0IHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQvLyBBcHAgcGFnZSBhZGFwdGF0aW9uXHJcblx0Ly8gcGFkZGluZy10b3A6IDM1cHg7XHJcblx0Ly8gSDUgV2ViIHBhZ2UgYWRhcHRhdGlvblxyXG5cdHBhZGRpbmctdG9wOiAxcHg7XHJcblxyXG5cdC5sei1zY3JvbGwtbGVmdCB7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblxyXG5cdFx0Lmx6LXNlYXJjaCB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDEwNnJweDtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblxyXG5cclxuXHRcdFx0Lmx6LXNlYXJjaC1pbWcge1xyXG5cdFx0XHRcdHdpZHRoOiAzMnJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdFx0XHRcdGxlZnQ6IDY0cnB4O1xyXG5cdFx0XHRcdG9yZGVyOiAxO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuaW1nLXdyYXBwZXIge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0d2lkdGg6IDcwcnB4O1xyXG5cdFx0XHRcdGhlaWdodDogNjRycHg7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA4cnB4O1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiA4cnB4O1xyXG5cdFx0XHRcdG9yZGVyOiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubHotc2VhcmNoLWltZy1zZWxlY3RlZCB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuY2FuY2VsLWljb24ge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR0b3A6IC01cnB4O1xyXG5cdFx0XHRcdC8qIGFkanVzdCBmb3IgcG9zaXRpb25pbmcgKi9cclxuXHRcdFx0XHRyaWdodDogLTVycHg7XHJcblx0XHRcdFx0LyogYWRqdXN0IGZvciBwb3NpdGlvbmluZyAqL1xyXG5cdFx0XHRcdHdpZHRoOiAyMHJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDIwcnB4O1xyXG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIC5sei1zZWFyY2gtaW1nLXNlbGVjdGVkIHtcclxuXHRcdFx0Ly8gXHR3aWR0aDogNzBycHg7XHJcblx0XHRcdC8vIFx0aGVpZ2h0OiA2NHJweDtcclxuXHRcdFx0Ly8gXHRsZWZ0OiAxOHJweDtcclxuXHRcdFx0Ly8gXHRtYXJnaW4tcmlnaHQ6IDhycHg7XHJcblx0XHRcdC8vIFx0bWFyZ2luLWxlZnQ6IDhycHg7XHJcblx0XHRcdC8vIFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0XHRcdC8vIFx0b3JkZXI6IDA7XHJcblx0XHRcdC8vIH1cclxuXHJcblx0XHRcdC5sb2dpbi1jIHtcclxuXHRcdFx0XHR3aWR0aDogNjBycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA2MHJweDtcclxuXHRcdFx0XHRwYWRkaW5nLXRvcDogMjJycHg7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAyM3JweDtcclxuXHRcdFx0XHRvcmRlcjogMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmxvZ2luLWJhY2sge1xyXG5cdFx0XHRcdHdpZHRoOiAyMHJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDM0cnB4O1xyXG5cdFx0XHRcdG9yZGVyOiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubHotc2VhcmNoLWltZy1zdWJtaXQge1xyXG5cdFx0XHRcdHdpZHRoOiA2NHJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDY0cnB4O1xyXG5cdFx0XHRcdGxlZnQ6IDE2IHJweDtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogNDBycHg7XHJcblx0XHRcdFx0b3JkZXI6IDA7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubHotaW5wdXQge1xyXG5cdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSA2NHJweCk7XHJcblx0XHRcdFx0aGVpZ2h0OiA3MnJweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjRUVFRUVFO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDM2cnB4O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDAgMzJycHggMCA4MHJweDtcclxuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTZycHg7XHJcblx0XHRcdFx0Ly8gbWFyZ2luLWxlZnQ6IDEwMDBycHg7XHJcblx0XHRcdFx0b3JkZXI6IDI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5sei1wbGFjZWhvbGRlciB7XHJcblx0XHRcdFx0Y29sb3I6ICM3Nzc3Nzc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQubGVmdC1saXN0IHtcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cclxuXHRcdFx0LmxlZnQtaXRlbS10aXRsZSB7XHJcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDI0cnB4KTtcclxuXHRcdFx0XHRoZWlnaHQ6IDYwcnB4O1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMjRycHg7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogNjBycHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdFx0XHRjb2xvcjogIzY2NjY2NjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmxlZnQtaXRlbS1jYXJkIHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRoZWlnaHQ6IDExMnJweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAyNHJweDtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuXHRcdFx0XHQubGVmdC1pdGVtLWNhcmQtY2lyY2xlLWltZyB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDBycHg7XHJcblx0XHRcdFx0XHRtaW4td2lkdGg6IDQwcnB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNDRkNGQ0Y7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmxlZnQtaXRlbS1jYXJkLWltZyB7XHJcblx0XHRcdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdFx0XHRtaW4td2lkdGg6IDgwcnB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNDRkNGQ0Y7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuaW1nLWluZm8ge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRcdFx0XHRcdGJvcmRlcjogc29saWQgI2YwZjBmMCAwcnB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmxlZnQtaXRlbS1jYXJkLWluZm8ge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMzJycHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG5cdFx0XHRcdFx0LmxlZnQtaXRlbS1jYXJkLW5hbWUge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMzBycHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5sZWZ0LWl0ZW0tY2FyZC1waG9uZSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDE0cnB4O1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjhycHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjOTk5OTk5O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5uby1kYXRhIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0bWFyZ2luLXRvcDogMjUlO1xyXG5cclxuXHRcdFx0Lm5vLWRhdGEtaW1nIHtcclxuXHRcdFx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0XHRcdGhlaWdodDogMjAwcnB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubm8tZGF0YS1uYW1lIHtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjNjY2NjY2O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQubHotc2Nyb2xsLXJpZ2h0IHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHJpZ2h0OiAwcnB4O1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ3JSk7XHJcblx0XHR6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuXHRcdC5sei1zY3JvbGwtcmlnaHQtdG9wIHtcclxuXHRcdFx0d2lkdGg6IDMycnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDMycnB4O1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDE0cnB4O1xyXG5cdFx0XHR6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHJcblx0XHQubHotc2Nyb2xsLXJpZ2h0LW5hbWUge1xyXG5cdFx0XHR3aWR0aDogMzJycHg7XHJcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDE0cnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDI4cnB4O1xyXG5cdFx0XHRmb250LXNpemU6IDIycnB4O1xyXG5cdFx0XHRjb2xvcjogIzMzMzMzMztcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDIycnB4O1xyXG5cdFx0XHRtYXJnaW4tdG9wOiA4cnB4O1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcblx0XHQubHotc2Nyb2xsLXJpZ2h0LXNlbGVjdCB7XHJcblx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMTRycHg7XHJcblx0XHRcdHdpZHRoOiAyOHJweDtcclxuXHRcdFx0aGVpZ2h0OiAyOHJweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjMjk5MUZGO1xyXG5cdFx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///102\n");

/***/ }),
/* 103 */
/*!*********************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/components/lz-indexed-list/pinyinUtil.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.pinyin_dict_notone = exports.pinyinUtil = void 0;\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _polyphone;\nvar dict = {};\n\n//拼音首字母字典文件\nvar pinyin_dict_firstletter = {\n  all: \"YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY\",\n  polyphone: (_polyphone = {\n    \"19969\": \"DZ\",\n    \"19975\": \"WM\",\n    \"19988\": \"QJ\",\n    \"20048\": \"YL\",\n    \"20056\": \"SC\",\n    \"20060\": \"NM\",\n    \"20094\": \"QG\",\n    \"20127\": \"QJ\",\n    \"20167\": \"QC\",\n    \"20193\": \"YG\",\n    \"20250\": \"KH\",\n    \"20256\": \"ZC\",\n    \"20282\": \"SC\",\n    \"20285\": \"QJG\",\n    \"20291\": \"TD\",\n    \"20314\": \"YD\",\n    \"20340\": \"NE\",\n    \"20375\": \"TD\",\n    \"20389\": \"YJ\",\n    \"20391\": \"CZ\",\n    \"20415\": \"PB\",\n    \"20446\": \"YS\",\n    \"20447\": \"SQ\",\n    \"20504\": \"TC\",\n    \"20608\": \"KG\",\n    \"20854\": \"QJ\",\n    \"20857\": \"ZC\",\n    \"20911\": \"PF\"\n  }, (0, _defineProperty2.default)(_polyphone, \"20504\", \"TC\"), (0, _defineProperty2.default)(_polyphone, \"20608\", \"KG\"), (0, _defineProperty2.default)(_polyphone, \"20854\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"20857\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"20911\", \"PF\"), (0, _defineProperty2.default)(_polyphone, \"20985\", \"AW\"), (0, _defineProperty2.default)(_polyphone, \"21032\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"21048\", \"XQ\"), (0, _defineProperty2.default)(_polyphone, \"21049\", \"SC\"), (0, _defineProperty2.default)(_polyphone, \"21089\", \"YS\"), (0, _defineProperty2.default)(_polyphone, \"21119\", \"JC\"), (0, _defineProperty2.default)(_polyphone, \"21242\", \"SB\"), (0, _defineProperty2.default)(_polyphone, \"21273\", \"SC\"), (0, _defineProperty2.default)(_polyphone, \"21305\", \"YP\"), (0, _defineProperty2.default)(_polyphone, \"21306\", \"QO\"), (0, _defineProperty2.default)(_polyphone, \"21330\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"21333\", \"SDC\"), (0, _defineProperty2.default)(_polyphone, \"21345\", \"QK\"), (0, _defineProperty2.default)(_polyphone, \"21378\", \"CA\"), (0, _defineProperty2.default)(_polyphone, \"21397\", \"SC\"), (0, _defineProperty2.default)(_polyphone, \"21414\", \"XS\"), (0, _defineProperty2.default)(_polyphone, \"21442\", \"SC\"), (0, _defineProperty2.default)(_polyphone, \"21477\", \"JG\"), (0, _defineProperty2.default)(_polyphone, \"21480\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"21484\", \"ZS\"), (0, _defineProperty2.default)(_polyphone, \"21494\", \"YX\"), (0, _defineProperty2.default)(_polyphone, \"21505\", \"YX\"), (0, _defineProperty2.default)(_polyphone, \"21512\", \"HG\"), (0, _defineProperty2.default)(_polyphone, \"21523\", \"XH\"), (0, _defineProperty2.default)(_polyphone, \"21537\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"21542\", \"PF\"), (0, _defineProperty2.default)(_polyphone, \"21549\", \"KH\"), (0, _defineProperty2.default)(_polyphone, \"21571\", \"E\"), (0, _defineProperty2.default)(_polyphone, \"21574\", \"DA\"), (0, _defineProperty2.default)(_polyphone, \"21588\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"21589\", \"O\"), (0, _defineProperty2.default)(_polyphone, \"21618\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"21621\", \"KHA\"), (0, _defineProperty2.default)(_polyphone, \"21632\", \"ZJ\"), (0, _defineProperty2.default)(_polyphone, \"21654\", \"KG\"), (0, _defineProperty2.default)(_polyphone, \"21679\", \"LKG\"), (0, _defineProperty2.default)(_polyphone, \"21683\", \"KH\"), (0, _defineProperty2.default)(_polyphone, \"21710\", \"A\"), (0, _defineProperty2.default)(_polyphone, \"21719\", \"YH\"), (0, _defineProperty2.default)(_polyphone, \"21734\", \"WOE\"), (0, _defineProperty2.default)(_polyphone, \"21769\", \"A\"), (0, _defineProperty2.default)(_polyphone, \"21780\", \"WN\"), (0, _defineProperty2.default)(_polyphone, \"21804\", \"XH\"), (0, _defineProperty2.default)(_polyphone, \"21834\", \"A\"), (0, _defineProperty2.default)(_polyphone, \"21899\", \"ZD\"), (0, _defineProperty2.default)(_polyphone, \"21903\", \"RN\"), (0, _defineProperty2.default)(_polyphone, \"21908\", \"WO\"), (0, _defineProperty2.default)(_polyphone, \"21939\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"21956\", \"SA\"), (0, _defineProperty2.default)(_polyphone, \"21964\", \"YA\"), (0, _defineProperty2.default)(_polyphone, \"21970\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"22003\", \"A\"), (0, _defineProperty2.default)(_polyphone, \"22031\", \"JG\"), (0, _defineProperty2.default)(_polyphone, \"22040\", \"XS\"), (0, _defineProperty2.default)(_polyphone, \"22060\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"22066\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"22079\", \"MH\"), (0, _defineProperty2.default)(_polyphone, \"22129\", \"XJ\"), (0, _defineProperty2.default)(_polyphone, \"22179\", \"XA\"), (0, _defineProperty2.default)(_polyphone, \"22237\", \"NJ\"), (0, _defineProperty2.default)(_polyphone, \"22244\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"22280\", \"JQ\"), (0, _defineProperty2.default)(_polyphone, \"22300\", \"YH\"), (0, _defineProperty2.default)(_polyphone, \"22313\", \"XW\"), (0, _defineProperty2.default)(_polyphone, \"22331\", \"YQ\"), (0, _defineProperty2.default)(_polyphone, \"22343\", \"YJ\"), (0, _defineProperty2.default)(_polyphone, \"22351\", \"PH\"), (0, _defineProperty2.default)(_polyphone, \"22395\", \"DC\"), (0, _defineProperty2.default)(_polyphone, \"22412\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"22484\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"22500\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"22534\", \"ZD\"), (0, _defineProperty2.default)(_polyphone, \"22549\", \"DH\"), (0, _defineProperty2.default)(_polyphone, \"22561\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"22612\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"22771\", \"KQ\"), (0, _defineProperty2.default)(_polyphone, \"22831\", \"HB\"), (0, _defineProperty2.default)(_polyphone, \"22841\", \"JG\"), (0, _defineProperty2.default)(_polyphone, \"22855\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"22865\", \"XQ\"), (0, _defineProperty2.default)(_polyphone, \"23013\", \"ML\"), (0, _defineProperty2.default)(_polyphone, \"23081\", \"WM\"), (0, _defineProperty2.default)(_polyphone, \"23487\", \"SX\"), (0, _defineProperty2.default)(_polyphone, \"23558\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"23561\", \"YW\"), (0, _defineProperty2.default)(_polyphone, \"23586\", \"YW\"), (0, _defineProperty2.default)(_polyphone, \"23614\", \"YW\"), (0, _defineProperty2.default)(_polyphone, \"23615\", \"SN\"), (0, _defineProperty2.default)(_polyphone, \"23631\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"23646\", \"ZS\"), (0, _defineProperty2.default)(_polyphone, \"23663\", \"ZT\"), (0, _defineProperty2.default)(_polyphone, \"23673\", \"YG\"), (0, _defineProperty2.default)(_polyphone, \"23762\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"23769\", \"ZS\"), (0, _defineProperty2.default)(_polyphone, \"23780\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"23884\", \"QK\"), (0, _defineProperty2.default)(_polyphone, \"24055\", \"XH\"), (0, _defineProperty2.default)(_polyphone, \"24113\", \"DC\"), (0, _defineProperty2.default)(_polyphone, \"24162\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"24191\", \"GA\"), (0, _defineProperty2.default)(_polyphone, \"24273\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"24324\", \"NL\"), (0, _defineProperty2.default)(_polyphone, \"24377\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"24378\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"24439\", \"PF\"), (0, _defineProperty2.default)(_polyphone, \"24554\", \"ZS\"), (0, _defineProperty2.default)(_polyphone, \"24683\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"24694\", \"WE\"), (0, _defineProperty2.default)(_polyphone, \"24733\", \"LK\"), (0, _defineProperty2.default)(_polyphone, \"24925\", \"TN\"), (0, _defineProperty2.default)(_polyphone, \"25094\", \"ZG\"), (0, _defineProperty2.default)(_polyphone, \"25100\", \"XQ\"), (0, _defineProperty2.default)(_polyphone, \"25103\", \"XH\"), (0, _defineProperty2.default)(_polyphone, \"25153\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"25170\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"25179\", \"KG\"), (0, _defineProperty2.default)(_polyphone, \"25203\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"25240\", \"ZS\"), (0, _defineProperty2.default)(_polyphone, \"25282\", \"FB\"), (0, _defineProperty2.default)(_polyphone, \"25303\", \"NA\"), (0, _defineProperty2.default)(_polyphone, \"25324\", \"KG\"), (0, _defineProperty2.default)(_polyphone, \"25341\", \"ZY\"), (0, _defineProperty2.default)(_polyphone, \"25373\", \"WZ\"), (0, _defineProperty2.default)(_polyphone, \"25375\", \"XJ\"), (0, _defineProperty2.default)(_polyphone, \"25384\", \"A\"), (0, _defineProperty2.default)(_polyphone, \"25457\", \"A\"), (0, _defineProperty2.default)(_polyphone, \"25528\", \"SD\"), (0, _defineProperty2.default)(_polyphone, \"25530\", \"SC\"), (0, _defineProperty2.default)(_polyphone, \"25552\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"25774\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"25874\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"26044\", \"YW\"), (0, _defineProperty2.default)(_polyphone, \"26080\", \"WM\"), (0, _defineProperty2.default)(_polyphone, \"26292\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"26333\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"26355\", \"ZY\"), (0, _defineProperty2.default)(_polyphone, \"26366\", \"CZ\"), (0, _defineProperty2.default)(_polyphone, \"26397\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"26399\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"26415\", \"ZS\"), (0, _defineProperty2.default)(_polyphone, \"26451\", \"SB\"), (0, _defineProperty2.default)(_polyphone, \"26526\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"26552\", \"JG\"), (0, _defineProperty2.default)(_polyphone, \"26561\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"26588\", \"JG\"), (0, _defineProperty2.default)(_polyphone, \"26597\", \"CZ\"), (0, _defineProperty2.default)(_polyphone, \"26629\", \"ZS\"), (0, _defineProperty2.default)(_polyphone, \"26638\", \"YL\"), (0, _defineProperty2.default)(_polyphone, \"26646\", \"XQ\"), (0, _defineProperty2.default)(_polyphone, \"26653\", \"KG\"), (0, _defineProperty2.default)(_polyphone, \"26657\", \"XJ\"), (0, _defineProperty2.default)(_polyphone, \"26727\", \"HG\"), (0, _defineProperty2.default)(_polyphone, \"26894\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"26937\", \"ZS\"), (0, _defineProperty2.default)(_polyphone, \"26946\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"26999\", \"KJ\"), (0, _defineProperty2.default)(_polyphone, \"27099\", \"KJ\"), (0, _defineProperty2.default)(_polyphone, \"27449\", \"YQ\"), (0, _defineProperty2.default)(_polyphone, \"27481\", \"XS\"), (0, _defineProperty2.default)(_polyphone, \"27542\", \"ZS\"), (0, _defineProperty2.default)(_polyphone, \"27663\", \"ZS\"), (0, _defineProperty2.default)(_polyphone, \"27748\", \"TS\"), (0, _defineProperty2.default)(_polyphone, \"27784\", \"SC\"), (0, _defineProperty2.default)(_polyphone, \"27788\", \"ZD\"), (0, _defineProperty2.default)(_polyphone, \"27795\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"27812\", \"O\"), (0, _defineProperty2.default)(_polyphone, \"27850\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"27852\", \"MB\"), (0, _defineProperty2.default)(_polyphone, \"27895\", \"SL\"), (0, _defineProperty2.default)(_polyphone, \"27898\", \"PL\"), (0, _defineProperty2.default)(_polyphone, \"27973\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"27981\", \"KH\"), (0, _defineProperty2.default)(_polyphone, \"27986\", \"HX\"), (0, _defineProperty2.default)(_polyphone, \"27994\", \"XJ\"), (0, _defineProperty2.default)(_polyphone, \"28044\", \"YC\"), (0, _defineProperty2.default)(_polyphone, \"28065\", \"WG\"), (0, _defineProperty2.default)(_polyphone, \"28177\", \"SM\"), (0, _defineProperty2.default)(_polyphone, \"28267\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"28291\", \"KH\"), (0, _defineProperty2.default)(_polyphone, \"28337\", \"ZQ\"), (0, _defineProperty2.default)(_polyphone, \"28463\", \"TL\"), (0, _defineProperty2.default)(_polyphone, \"28548\", \"DC\"), (0, _defineProperty2.default)(_polyphone, \"28601\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"28689\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"28805\", \"JG\"), (0, _defineProperty2.default)(_polyphone, \"28820\", \"QG\"), (0, _defineProperty2.default)(_polyphone, \"28846\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"28952\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"28975\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"29100\", \"A\"), (0, _defineProperty2.default)(_polyphone, \"29325\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"29575\", \"SL\"), (0, _defineProperty2.default)(_polyphone, \"29602\", \"FB\"), (0, _defineProperty2.default)(_polyphone, \"30010\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"30044\", \"CX\"), (0, _defineProperty2.default)(_polyphone, \"30058\", \"PF\"), (0, _defineProperty2.default)(_polyphone, \"30091\", \"YSP\"), (0, _defineProperty2.default)(_polyphone, \"30111\", \"YN\"), (0, _defineProperty2.default)(_polyphone, \"30229\", \"XJ\"), (0, _defineProperty2.default)(_polyphone, \"30427\", \"SC\"), (0, _defineProperty2.default)(_polyphone, \"30465\", \"SX\"), (0, _defineProperty2.default)(_polyphone, \"30631\", \"YQ\"), (0, _defineProperty2.default)(_polyphone, \"30655\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"30684\", \"QJG\"), (0, _defineProperty2.default)(_polyphone, \"30707\", \"SD\"), (0, _defineProperty2.default)(_polyphone, \"30729\", \"XH\"), (0, _defineProperty2.default)(_polyphone, \"30796\", \"LG\"), (0, _defineProperty2.default)(_polyphone, \"30917\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"31074\", \"NM\"), (0, _defineProperty2.default)(_polyphone, \"31085\", \"JZ\"), (0, _defineProperty2.default)(_polyphone, \"31109\", \"SC\"), (0, _defineProperty2.default)(_polyphone, \"31181\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"31192\", \"MLB\"), (0, _defineProperty2.default)(_polyphone, \"31293\", \"JQ\"), (0, _defineProperty2.default)(_polyphone, \"31400\", \"YX\"), (0, _defineProperty2.default)(_polyphone, \"31584\", \"YJ\"), (0, _defineProperty2.default)(_polyphone, \"31896\", \"ZN\"), (0, _defineProperty2.default)(_polyphone, \"31909\", \"ZY\"), (0, _defineProperty2.default)(_polyphone, \"31995\", \"XJ\"), (0, _defineProperty2.default)(_polyphone, \"32321\", \"PF\"), (0, _defineProperty2.default)(_polyphone, \"32327\", \"ZY\"), (0, _defineProperty2.default)(_polyphone, \"32418\", \"HG\"), (0, _defineProperty2.default)(_polyphone, \"32420\", \"XQ\"), (0, _defineProperty2.default)(_polyphone, \"32421\", \"HG\"), (0, _defineProperty2.default)(_polyphone, \"32438\", \"LG\"), (0, _defineProperty2.default)(_polyphone, \"32473\", \"GJ\"), (0, _defineProperty2.default)(_polyphone, \"32488\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"32521\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"32527\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"32562\", \"ZSQ\"), (0, _defineProperty2.default)(_polyphone, \"32564\", \"JZ\"), (0, _defineProperty2.default)(_polyphone, \"32735\", \"ZD\"), (0, _defineProperty2.default)(_polyphone, \"32793\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"33071\", \"PF\"), (0, _defineProperty2.default)(_polyphone, \"33098\", \"XL\"), (0, _defineProperty2.default)(_polyphone, \"33100\", \"YA\"), (0, _defineProperty2.default)(_polyphone, \"33152\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"33261\", \"CX\"), (0, _defineProperty2.default)(_polyphone, \"33324\", \"BP\"), (0, _defineProperty2.default)(_polyphone, \"33333\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"33406\", \"YA\"), (0, _defineProperty2.default)(_polyphone, \"33426\", \"WM\"), (0, _defineProperty2.default)(_polyphone, \"33432\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"33445\", \"JG\"), (0, _defineProperty2.default)(_polyphone, \"33486\", \"ZN\"), (0, _defineProperty2.default)(_polyphone, \"33493\", \"TS\"), (0, _defineProperty2.default)(_polyphone, \"33507\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"33540\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"33544\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"33564\", \"XQ\"), (0, _defineProperty2.default)(_polyphone, \"33617\", \"YT\"), (0, _defineProperty2.default)(_polyphone, \"33632\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"33636\", \"XH\"), (0, _defineProperty2.default)(_polyphone, \"33637\", \"YX\"), (0, _defineProperty2.default)(_polyphone, \"33694\", \"WG\"), (0, _defineProperty2.default)(_polyphone, \"33705\", \"PF\"), (0, _defineProperty2.default)(_polyphone, \"33728\", \"YW\"), (0, _defineProperty2.default)(_polyphone, \"33882\", \"SR\"), (0, _defineProperty2.default)(_polyphone, \"34067\", \"WM\"), (0, _defineProperty2.default)(_polyphone, \"34074\", \"YW\"), (0, _defineProperty2.default)(_polyphone, \"34121\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"34255\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"34259\", \"XL\"), (0, _defineProperty2.default)(_polyphone, \"34425\", \"JH\"), (0, _defineProperty2.default)(_polyphone, \"34430\", \"XH\"), (0, _defineProperty2.default)(_polyphone, \"34485\", \"KH\"), (0, _defineProperty2.default)(_polyphone, \"34503\", \"YS\"), (0, _defineProperty2.default)(_polyphone, \"34532\", \"HG\"), (0, _defineProperty2.default)(_polyphone, \"34552\", \"XS\"), (0, _defineProperty2.default)(_polyphone, \"34558\", \"YE\"), (0, _defineProperty2.default)(_polyphone, \"34593\", \"ZL\"), (0, _defineProperty2.default)(_polyphone, \"34660\", \"YQ\"), (0, _defineProperty2.default)(_polyphone, \"34892\", \"XH\"), (0, _defineProperty2.default)(_polyphone, \"34928\", \"SC\"), (0, _defineProperty2.default)(_polyphone, \"34999\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"35048\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"35059\", \"SC\"), (0, _defineProperty2.default)(_polyphone, \"35098\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"35203\", \"TQ\"), (0, _defineProperty2.default)(_polyphone, \"35265\", \"JX\"), (0, _defineProperty2.default)(_polyphone, \"35299\", \"JX\"), (0, _defineProperty2.default)(_polyphone, \"35782\", \"SZ\"), (0, _defineProperty2.default)(_polyphone, \"35828\", \"YS\"), (0, _defineProperty2.default)(_polyphone, \"35830\", \"E\"), (0, _defineProperty2.default)(_polyphone, \"35843\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"35895\", \"YG\"), (0, _defineProperty2.default)(_polyphone, \"35977\", \"MH\"), (0, _defineProperty2.default)(_polyphone, \"36158\", \"JG\"), (0, _defineProperty2.default)(_polyphone, \"36228\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"36426\", \"XQ\"), (0, _defineProperty2.default)(_polyphone, \"36466\", \"DC\"), (0, _defineProperty2.default)(_polyphone, \"36710\", \"JC\"), (0, _defineProperty2.default)(_polyphone, \"36711\", \"ZYG\"), (0, _defineProperty2.default)(_polyphone, \"36767\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"36866\", \"SK\"), (0, _defineProperty2.default)(_polyphone, \"36951\", \"YW\"), (0, _defineProperty2.default)(_polyphone, \"37034\", \"YX\"), (0, _defineProperty2.default)(_polyphone, \"37063\", \"XH\"), (0, _defineProperty2.default)(_polyphone, \"37218\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"37325\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"38063\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"38079\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"38085\", \"QY\"), (0, _defineProperty2.default)(_polyphone, \"38107\", \"DC\"), (0, _defineProperty2.default)(_polyphone, \"38116\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"38123\", \"YD\"), (0, _defineProperty2.default)(_polyphone, \"38224\", \"HG\"), (0, _defineProperty2.default)(_polyphone, \"38241\", \"XTC\"), (0, _defineProperty2.default)(_polyphone, \"38271\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"38415\", \"YE\"), (0, _defineProperty2.default)(_polyphone, \"38426\", \"KH\"), (0, _defineProperty2.default)(_polyphone, \"38461\", \"YD\"), (0, _defineProperty2.default)(_polyphone, \"38463\", \"AE\"), (0, _defineProperty2.default)(_polyphone, \"38466\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"38477\", \"XJ\"), (0, _defineProperty2.default)(_polyphone, \"38518\", \"YT\"), (0, _defineProperty2.default)(_polyphone, \"38551\", \"WK\"), (0, _defineProperty2.default)(_polyphone, \"38585\", \"ZC\"), (0, _defineProperty2.default)(_polyphone, \"38704\", \"XS\"), (0, _defineProperty2.default)(_polyphone, \"38739\", \"LJ\"), (0, _defineProperty2.default)(_polyphone, \"38761\", \"GJ\"), (0, _defineProperty2.default)(_polyphone, \"38808\", \"SQ\"), (0, _defineProperty2.default)(_polyphone, \"39048\", \"JG\"), (0, _defineProperty2.default)(_polyphone, \"39049\", \"XJ\"), (0, _defineProperty2.default)(_polyphone, \"39052\", \"HG\"), (0, _defineProperty2.default)(_polyphone, \"39076\", \"CZ\"), (0, _defineProperty2.default)(_polyphone, \"39271\", \"XT\"), (0, _defineProperty2.default)(_polyphone, \"39534\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"39552\", \"TD\"), (0, _defineProperty2.default)(_polyphone, \"39584\", \"PB\"), (0, _defineProperty2.default)(_polyphone, \"39647\", \"SB\"), (0, _defineProperty2.default)(_polyphone, \"39730\", \"LG\"), (0, _defineProperty2.default)(_polyphone, \"39748\", \"TPB\"), (0, _defineProperty2.default)(_polyphone, \"40109\", \"ZQ\"), (0, _defineProperty2.default)(_polyphone, \"40479\", \"ND\"), (0, _defineProperty2.default)(_polyphone, \"40516\", \"HG\"), (0, _defineProperty2.default)(_polyphone, \"40536\", \"HG\"), (0, _defineProperty2.default)(_polyphone, \"40583\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"40765\", \"YQ\"), (0, _defineProperty2.default)(_polyphone, \"40784\", \"QJ\"), (0, _defineProperty2.default)(_polyphone, \"40840\", \"YK\"), (0, _defineProperty2.default)(_polyphone, \"40863\", \"QJG\"), _polyphone)\n};\n\n//常用汉字按照汉字使用频率由低到高排序\nvar pinyin_dict_notone = {\n  \"a\": \"阿啊呵腌嗄吖锕\",\n  \"e\": \"额阿俄恶鹅遏鄂厄饿峨扼娥鳄哦蛾噩愕讹锷垩婀鹗萼谔莪腭锇颚呃阏屙苊轭\",\n  \"ai\": \"爱埃艾碍癌哀挨矮隘蔼唉皑哎霭捱暧嫒嗳瑷嗌锿砹\",\n  \"ei\": \"诶\",\n  \"xi\": \"系西席息希习吸喜细析戏洗悉锡溪惜稀袭夕洒晰昔牺腊烯熙媳栖膝隙犀蹊硒兮熄曦禧嬉玺奚汐徙羲铣淅嘻歙熹矽蟋郗唏皙隰樨浠忾蜥檄郄翕阋鳃舾屣葸螅咭粞觋欷僖醯鼷裼穸饩舄禊诶菥蓰\",\n  \"yi\": \"一以已意议义益亿易医艺食依移衣异伊仪宜射遗疑毅谊亦疫役忆抑尾乙译翼蛇溢椅沂泄逸蚁夷邑怡绎彝裔姨熠贻矣屹颐倚诣胰奕翌疙弈轶蛾驿壹猗臆弋铱旖漪迤佚翊诒怿痍懿饴峄揖眙镒仡黟肄咿翳挹缢呓刈咦嶷羿钇殪荑薏蜴镱噫癔苡悒嗌瘗衤佾埸圯舣酏劓\",\n  \"an\": \"安案按岸暗鞍氨俺胺铵谙庵黯鹌桉埯犴揞厂广\",\n  \"han\": \"厂汉韩含旱寒汗涵函喊憾罕焊翰邯撼瀚憨捍酣悍鼾邗颔蚶晗菡旰顸犴焓撖\",\n  \"ang\": \"昂仰盎肮\",\n  \"ao\": \"奥澳傲熬凹鳌敖遨鏖袄坳翱嗷拗懊岙螯骜獒鏊艹媪廒聱\",\n  \"wa\": \"瓦挖娃洼袜蛙凹哇佤娲呙腽\",\n  \"yu\": \"于与育余预域予遇奥语誉玉鱼雨渔裕愈娱欲吁舆宇羽逾豫郁寓吾狱喻御浴愉禹俞邪榆愚渝尉淤虞屿峪粥驭瑜禺毓钰隅芋熨瘀迂煜昱汩於臾盂聿竽萸妪腴圄谕觎揄龉谀俣馀庾妤瘐鬻欤鹬阈嵛雩鹆圉蜮伛纡窬窳饫蓣狳肀舁蝓燠\",\n  \"niu\": \"牛纽扭钮拗妞忸狃\",\n  \"o\": \"哦噢喔\",\n  \"ba\": \"把八巴拔伯吧坝爸霸罢芭跋扒叭靶疤笆耙鲅粑岜灞钯捌菝魃茇\",\n  \"pa\": \"怕帕爬扒趴琶啪葩耙杷钯筢\",\n  \"pi\": \"被批副否皮坏辟啤匹披疲罢僻毗坯脾譬劈媲屁琵邳裨痞癖陂丕枇噼霹吡纰砒铍淠郫埤濞睥芘蚍圮鼙罴蜱疋貔仳庀擗甓陴\",\n  \"bi\": \"比必币笔毕秘避闭佛辟壁弊彼逼碧鼻臂蔽拂泌璧庇痹毙弼匕鄙陛裨贲敝蓖吡篦纰俾铋毖筚荸薜婢哔跸濞秕荜愎睥妣芘箅髀畀滗狴萆嬖襞舭\",\n  \"bai\": \"百白败摆伯拜柏佰掰呗擘捭稗\",\n  \"bo\": \"波博播勃拨薄佛伯玻搏柏泊舶剥渤卜驳簿脖膊簸菠礴箔铂亳钵帛擘饽跛钹趵檗啵鹁擗踣\",\n  \"bei\": \"北被备倍背杯勃贝辈悲碑臂卑悖惫蓓陂钡狈呗焙碚褙庳鞴孛鹎邶鐾\",\n  \"ban\": \"办版半班般板颁伴搬斑扮拌扳瓣坂阪绊钣瘢舨癍\",\n  \"pan\": \"判盘番潘攀盼拚畔胖叛拌蹒磐爿蟠泮袢襻丬\",\n  \"bin\": \"份宾频滨斌彬濒殡缤鬓槟摈膑玢镔豳髌傧\",\n  \"bang\": \"帮邦彭旁榜棒膀镑绑傍磅蚌谤梆浜蒡\",\n  \"pang\": \"旁庞乓磅螃彷滂逄耪\",\n  \"beng\": \"泵崩蚌蹦迸绷甭嘣甏堋\",\n  \"bao\": \"报保包宝暴胞薄爆炮饱抱堡剥鲍曝葆瀑豹刨褒雹孢苞煲褓趵鸨龅勹\",\n  \"bu\": \"不部步布补捕堡埔卜埠簿哺怖钚卟瓿逋晡醭钸\",\n  \"pu\": \"普暴铺浦朴堡葡谱埔扑仆蒲曝瀑溥莆圃璞濮菩蹼匍噗氆攵镨攴镤\",\n  \"mian\": \"面棉免绵缅勉眠冕娩腼渑湎沔黾宀眄\",\n  \"po\": \"破繁坡迫颇朴泊婆泼魄粕鄱珀陂叵笸泺皤钋钷\",\n  \"fan\": \"反范犯繁饭泛翻凡返番贩烦拚帆樊藩矾梵蕃钒幡畈蘩蹯燔\",\n  \"fu\": \"府服副负富复福夫妇幅付扶父符附腐赴佛浮覆辅傅伏抚赋辐腹弗肤阜袱缚甫氟斧孚敷俯拂俘咐腑孵芙涪釜脯茯馥宓绂讣呋罘麸蝠匐芾蜉跗凫滏蝮驸绋蚨砩桴赙菔呒趺苻拊阝鲋怫稃郛莩幞祓艴黻黼鳆\",\n  \"ben\": \"本体奔苯笨夯贲锛畚坌\",\n  \"feng\": \"风丰封峰奉凤锋冯逢缝蜂枫疯讽烽俸沣酆砜葑唪\",\n  \"bian\": \"变便边编遍辩鞭辨贬匾扁卞汴辫砭苄蝙鳊弁窆笾煸褊碥忭缏\",\n  \"pian\": \"便片篇偏骗翩扁骈胼蹁谝犏缏\",\n  \"zhen\": \"镇真针圳振震珍阵诊填侦臻贞枕桢赈祯帧甄斟缜箴疹砧榛鸩轸稹溱蓁胗椹朕畛浈\",\n  \"biao\": \"表标彪镖裱飚膘飙镳婊骠飑杓髟鳔灬瘭\",\n  \"piao\": \"票朴漂飘嫖瓢剽缥殍瞟骠嘌莩螵\",\n  \"huo\": \"和活或货获火伙惑霍祸豁嚯藿锪蠖钬耠镬夥灬劐攉\",\n  \"bie\": \"别鳖憋瘪蹩\",\n  \"min\": \"民敏闽闵皿泯岷悯珉抿黾缗玟愍苠鳘\",\n  \"fen\": \"分份纷奋粉氛芬愤粪坟汾焚酚吩忿棼玢鼢瀵偾鲼\",\n  \"bing\": \"并病兵冰屏饼炳秉丙摒柄槟禀枋邴冫\",\n  \"geng\": \"更耕颈庚耿梗埂羹哽赓绠鲠\",\n  \"fang\": \"方放房防访纺芳仿坊妨肪邡舫彷枋鲂匚钫\",\n  \"xian\": \"现先县见线限显险献鲜洗宪纤陷闲贤仙衔掀咸嫌掺羡弦腺痫娴舷馅酰铣冼涎暹籼锨苋蚬跹岘藓燹鹇氙莶霰跣猃彡祆筅\",\n  \"fou\": \"不否缶\",\n  \"ca\": \"拆擦嚓礤\",\n  \"cha\": \"查察差茶插叉刹茬楂岔诧碴嚓喳姹杈汊衩搽槎镲苴檫馇锸猹\",\n  \"cai\": \"才采财材菜彩裁蔡猜踩睬\",\n  \"can\": \"参残餐灿惨蚕掺璨惭粲孱骖黪\",\n  \"shen\": \"信深参身神什审申甚沈伸慎渗肾绅莘呻婶娠砷蜃哂椹葚吲糁渖诜谂矧胂\",\n  \"cen\": \"参岑涔\",\n  \"san\": \"三参散伞叁糁馓毵\",\n  \"cang\": \"藏仓苍沧舱臧伧\",\n  \"zang\": \"藏脏葬赃臧奘驵\",\n  \"chen\": \"称陈沈沉晨琛臣尘辰衬趁忱郴宸谌碜嗔抻榇伧谶龀肜\",\n  \"cao\": \"草操曹槽糙嘈漕螬艚屮\",\n  \"ce\": \"策测册侧厕栅恻\",\n  \"ze\": \"责则泽择侧咋啧仄箦赜笮舴昃迮帻\",\n  \"zhai\": \"债择齐宅寨侧摘窄斋祭翟砦瘵哜\",\n  \"dao\": \"到道导岛倒刀盗稻蹈悼捣叨祷焘氘纛刂帱忉\",\n  \"ceng\": \"层曾蹭噌\",\n  \"zha\": \"查扎炸诈闸渣咋乍榨楂札栅眨咤柞喳喋铡蚱吒怍砟揸痄哳齄\",\n  \"chai\": \"差拆柴钗豺侪虿瘥\",\n  \"ci\": \"次此差词辞刺瓷磁兹慈茨赐祠伺雌疵鹚糍呲粢\",\n  \"zi\": \"资自子字齐咨滋仔姿紫兹孜淄籽梓鲻渍姊吱秭恣甾孳訾滓锱辎趑龇赀眦缁呲笫谘嵫髭茈粢觜耔\",\n  \"cuo\": \"措错磋挫搓撮蹉锉厝嵯痤矬瘥脞鹾\",\n  \"chan\": \"产单阐崭缠掺禅颤铲蝉搀潺蟾馋忏婵孱觇廛谄谗澶骣羼躔蒇冁\",\n  \"shan\": \"山单善陕闪衫擅汕扇掺珊禅删膳缮赡鄯栅煽姗跚鳝嬗潸讪舢苫疝掸膻钐剡蟮芟埏彡骟\",\n  \"zhan\": \"展战占站崭粘湛沾瞻颤詹斩盏辗绽毡栈蘸旃谵搌\",\n  \"xin\": \"新心信辛欣薪馨鑫芯锌忻莘昕衅歆囟忄镡\",\n  \"lian\": \"联连练廉炼脸莲恋链帘怜涟敛琏镰濂楝鲢殓潋裢裣臁奁莶蠊蔹\",\n  \"chang\": \"场长厂常偿昌唱畅倡尝肠敞倘猖娼淌裳徜昶怅嫦菖鲳阊伥苌氅惝鬯\",\n  \"zhang\": \"长张章障涨掌帐胀彰丈仗漳樟账杖璋嶂仉瘴蟑獐幛鄣嫜\",\n  \"chao\": \"超朝潮炒钞抄巢吵剿绰嘲晁焯耖怊\",\n  \"zhao\": \"着照招找召朝赵兆昭肇罩钊沼嘲爪诏濯啁棹笊\",\n  \"zhou\": \"调州周洲舟骤轴昼宙粥皱肘咒帚胄绉纣妯啁诌繇碡籀酎荮\",\n  \"che\": \"车彻撤尺扯澈掣坼砗屮\",\n  \"ju\": \"车局据具举且居剧巨聚渠距句拒俱柜菊拘炬桔惧矩鞠驹锯踞咀瞿枸掬沮莒橘飓疽钜趄踽遽琚龃椐苣裾榘狙倨榉苴讵雎锔窭鞫犋屦醵\",\n  \"cheng\": \"成程城承称盛抢乘诚呈净惩撑澄秤橙骋逞瞠丞晟铛埕塍蛏柽铖酲裎枨\",\n  \"rong\": \"容荣融绒溶蓉熔戎榕茸冗嵘肜狨蝾\",\n  \"sheng\": \"生声升胜盛乘圣剩牲甸省绳笙甥嵊晟渑眚\",\n  \"deng\": \"等登邓灯澄凳瞪蹬噔磴嶝镫簦戥\",\n  \"zhi\": \"制之治质职只志至指织支值知识直致执置止植纸拓智殖秩旨址滞氏枝芝脂帜汁肢挚稚酯掷峙炙栉侄芷窒咫吱趾痔蜘郅桎雉祉郦陟痣蛭帙枳踯徵胝栀贽祗豸鸷摭轵卮轾彘觯絷跖埴夂黹忮骘膣踬\",\n  \"zheng\": \"政正证争整征郑丁症挣蒸睁铮筝拯峥怔诤狰徵钲\",\n  \"tang\": \"堂唐糖汤塘躺趟倘棠烫淌膛搪镗傥螳溏帑羰樘醣螗耥铴瑭\",\n  \"chi\": \"持吃池迟赤驰尺斥齿翅匙痴耻炽侈弛叱啻坻眙嗤墀哧茌豉敕笞饬踟蚩柢媸魑篪褫彳鸱螭瘛眵傺\",\n  \"shi\": \"是时实事市十使世施式势视识师史示石食始士失适试什泽室似诗饰殖释驶氏硕逝湿蚀狮誓拾尸匙仕柿矢峙侍噬嗜栅拭嘘屎恃轼虱耆舐莳铈谥炻豕鲥饣螫酾筮埘弑礻蓍鲺贳\",\n  \"qi\": \"企其起期气七器汽奇齐启旗棋妻弃揭枝歧欺骑契迄亟漆戚岂稽岐琦栖缉琪泣乞砌祁崎绮祺祈凄淇杞脐麒圻憩芪伎俟畦耆葺沏萋骐鳍綦讫蕲屺颀亓碛柒啐汔綮萁嘁蛴槭欹芑桤丌蜞\",\n  \"chuai\": \"揣踹啜搋膪\",\n  \"tuo\": \"托脱拓拖妥驼陀沱鸵驮唾椭坨佗砣跎庹柁橐乇铊沲酡鼍箨柝\",\n  \"duo\": \"多度夺朵躲铎隋咄堕舵垛惰哆踱跺掇剁柁缍沲裰哚隳\",\n  \"xue\": \"学血雪削薛穴靴谑噱鳕踅泶彐\",\n  \"chong\": \"重种充冲涌崇虫宠忡憧舂茺铳艟\",\n  \"chou\": \"筹抽绸酬愁丑臭仇畴稠瞅踌惆俦瘳雠帱\",\n  \"qiu\": \"求球秋丘邱仇酋裘龟囚遒鳅虬蚯泅楸湫犰逑巯艽俅蝤赇鼽糗\",\n  \"xiu\": \"修秀休宿袖绣臭朽锈羞嗅岫溴庥馐咻髹鸺貅\",\n  \"chu\": \"出处础初助除储畜触楚厨雏矗橱锄滁躇怵绌搐刍蜍黜杵蹰亍樗憷楮\",\n  \"tuan\": \"团揣湍疃抟彖\",\n  \"zhui\": \"追坠缀揣椎锥赘惴隹骓缒\",\n  \"chuan\": \"传川船穿串喘椽舛钏遄氚巛舡\",\n  \"zhuan\": \"专转传赚砖撰篆馔啭颛\",\n  \"yuan\": \"元员院原源远愿园援圆缘袁怨渊苑宛冤媛猿垣沅塬垸鸳辕鸢瑗圜爰芫鼋橼螈眢箢掾\",\n  \"cuan\": \"窜攒篡蹿撺爨汆镩\",\n  \"chuang\": \"创床窗闯幢疮怆\",\n  \"zhuang\": \"装状庄壮撞妆幢桩奘僮戆\",\n  \"chui\": \"吹垂锤炊椎陲槌捶棰\",\n  \"chun\": \"春纯醇淳唇椿蠢鹑朐莼肫蝽\",\n  \"zhun\": \"准屯淳谆肫窀\",\n  \"cu\": \"促趋趣粗簇醋卒蹴猝蹙蔟殂徂\",\n  \"dun\": \"吨顿盾敦蹲墩囤沌钝炖盹遁趸砘礅\",\n  \"qu\": \"区去取曲趋渠趣驱屈躯衢娶祛瞿岖龋觑朐蛐癯蛆苣阒诎劬蕖蘧氍黢蠼璩麴鸲磲\",\n  \"xu\": \"需许续须序徐休蓄畜虚吁绪叙旭邪恤墟栩絮圩婿戌胥嘘浒煦酗诩朐盱蓿溆洫顼勖糈砉醑\",\n  \"chuo\": \"辍绰戳淖啜龊踔辶\",\n  \"zu\": \"组族足祖租阻卒俎诅镞菹\",\n  \"ji\": \"济机其技基记计系期际及集级几给积极己纪即继击既激绩急奇吉季齐疾迹鸡剂辑籍寄挤圾冀亟寂暨脊跻肌稽忌饥祭缉棘矶汲畸姬藉瘠骥羁妓讥稷蓟悸嫉岌叽伎鲫诘楫荠戟箕霁嵇觊麂畿玑笈犄芨唧屐髻戢佶偈笄跽蒺乩咭赍嵴虮掎齑殛鲚剞洎丌墼蕺彐芰哜\",\n  \"cong\": \"从丛匆聪葱囱琮淙枞骢苁璁\",\n  \"zong\": \"总从综宗纵踪棕粽鬃偬枞腙\",\n  \"cou\": \"凑辏腠楱\",\n  \"cui\": \"衰催崔脆翠萃粹摧璀瘁悴淬啐隹毳榱\",\n  \"wei\": \"为位委未维卫围违威伟危味微唯谓伪慰尾魏韦胃畏帷喂巍萎蔚纬潍尉渭惟薇苇炜圩娓诿玮崴桅偎逶倭猥囗葳隗痿猬涠嵬韪煨艉隹帏闱洧沩隈鲔軎\",\n  \"cun\": \"村存寸忖皴\",\n  \"zuo\": \"作做座左坐昨佐琢撮祚柞唑嘬酢怍笮阼胙\",\n  \"zuan\": \"钻纂攥缵躜\",\n  \"da\": \"大达打答搭沓瘩惮嗒哒耷鞑靼褡笪怛妲\",\n  \"dai\": \"大代带待贷毒戴袋歹呆隶逮岱傣棣怠殆黛甙埭诒绐玳呔迨\",\n  \"tai\": \"大台太态泰抬胎汰钛苔薹肽跆邰鲐酞骀炱\",\n  \"ta\": \"他它她拓塔踏塌榻沓漯獭嗒挞蹋趿遢铊鳎溻闼\",\n  \"dan\": \"但单石担丹胆旦弹蛋淡诞氮郸耽殚惮儋眈疸澹掸膻啖箪聃萏瘅赕\",\n  \"lu\": \"路六陆录绿露鲁卢炉鹿禄赂芦庐碌麓颅泸卤潞鹭辘虏璐漉噜戮鲈掳橹轳逯渌蓼撸鸬栌氇胪镥簏舻辂垆\",\n  \"tan\": \"谈探坦摊弹炭坛滩贪叹谭潭碳毯瘫檀痰袒坍覃忐昙郯澹钽锬\",\n  \"ren\": \"人任认仁忍韧刃纫饪妊荏稔壬仞轫亻衽\",\n  \"jie\": \"家结解价界接节她届介阶街借杰洁截姐揭捷劫戒皆竭桔诫楷秸睫藉拮芥诘碣嗟颉蚧孑婕疖桀讦疥偈羯袷哜喈卩鲒骱\",\n  \"yan\": \"研严验演言眼烟沿延盐炎燕岩宴艳颜殷彦掩淹阎衍铅雁咽厌焰堰砚唁焉晏檐蜒奄俨腌妍谚兖筵焱偃闫嫣鄢湮赝胭琰滟阉魇酽郾恹崦芫剡鼹菸餍埏谳讠厣罨\",\n  \"dang\": \"当党档荡挡宕砀铛裆凼菪谠\",\n  \"tao\": \"套讨跳陶涛逃桃萄淘掏滔韬叨洮啕绦饕鼗\",\n  \"tiao\": \"条调挑跳迢眺苕窕笤佻啁粜髫铫祧龆蜩鲦\",\n  \"te\": \"特忑忒铽慝\",\n  \"de\": \"的地得德底锝\",\n  \"dei\": \"得\",\n  \"di\": \"的地第提低底抵弟迪递帝敌堤蒂缔滴涤翟娣笛棣荻谛狄邸嘀砥坻诋嫡镝碲骶氐柢籴羝睇觌\",\n  \"ti\": \"体提题弟替梯踢惕剔蹄棣啼屉剃涕锑倜悌逖嚏荑醍绨鹈缇裼\",\n  \"tui\": \"推退弟腿褪颓蜕忒煺\",\n  \"you\": \"有由又优游油友右邮尤忧幼犹诱悠幽佑釉柚铀鱿囿酉攸黝莠猷蝣疣呦蚴莸莜铕宥繇卣牖鼬尢蚰侑\",\n  \"dian\": \"电点店典奠甸碘淀殿垫颠滇癫巅惦掂癜玷佃踮靛钿簟坫阽\",\n  \"tian\": \"天田添填甜甸恬腆佃舔钿阗忝殄畋栝掭\",\n  \"zhu\": \"主术住注助属逐宁著筑驻朱珠祝猪诸柱竹铸株瞩嘱贮煮烛苎褚蛛拄铢洙竺蛀渚伫杼侏澍诛茱箸炷躅翥潴邾槠舳橥丶瘃麈疰\",\n  \"nian\": \"年念酿辗碾廿捻撵拈蔫鲶埝鲇辇黏\",\n  \"diao\": \"调掉雕吊钓刁貂凋碉鲷叼铫铞\",\n  \"yao\": \"要么约药邀摇耀腰遥姚窑瑶咬尧钥谣肴夭侥吆疟妖幺杳舀窕窈曜鹞爻繇徭轺铫鳐崾珧\",\n  \"die\": \"跌叠蝶迭碟爹谍牒耋佚喋堞瓞鲽垤揲蹀\",\n  \"she\": \"设社摄涉射折舍蛇拾舌奢慑赦赊佘麝歙畲厍猞揲滠\",\n  \"ye\": \"业也夜叶射野液冶喝页爷耶邪咽椰烨掖拽曳晔谒腋噎揶靥邺铘揲\",\n  \"xie\": \"些解协写血叶谢械鞋胁斜携懈契卸谐泄蟹邪歇泻屑挟燮榭蝎撷偕亵楔颉缬邂鲑瀣勰榍薤绁渫廨獬躞\",\n  \"zhe\": \"这者着著浙折哲蔗遮辙辄柘锗褶蜇蛰鹧谪赭摺乇磔螫\",\n  \"ding\": \"定订顶丁鼎盯钉锭叮仃铤町酊啶碇腚疔玎耵\",\n  \"diu\": \"丢铥\",\n  \"ting\": \"听庭停厅廷挺亭艇婷汀铤烃霆町蜓葶梃莛\",\n  \"dong\": \"动东董冬洞懂冻栋侗咚峒氡恫胴硐垌鸫岽胨\",\n  \"tong\": \"同通统童痛铜桶桐筒彤侗佟潼捅酮砼瞳恸峒仝嗵僮垌茼\",\n  \"zhong\": \"中重种众终钟忠仲衷肿踵冢盅蚣忪锺舯螽夂\",\n  \"dou\": \"都斗读豆抖兜陡逗窦渎蚪痘蔸钭篼\",\n  \"du\": \"度都独督读毒渡杜堵赌睹肚镀渎笃竺嘟犊妒牍蠹椟黩芏髑\",\n  \"duan\": \"断段短端锻缎煅椴簖\",\n  \"dui\": \"对队追敦兑堆碓镦怼憝\",\n  \"rui\": \"瑞兑锐睿芮蕊蕤蚋枘\",\n  \"yue\": \"月说约越乐跃兑阅岳粤悦曰钥栎钺樾瀹龠哕刖\",\n  \"tun\": \"吞屯囤褪豚臀饨暾氽\",\n  \"hui\": \"会回挥汇惠辉恢徽绘毁慧灰贿卉悔秽溃荟晖彗讳诲珲堕诙蕙晦睢麾烩茴喙桧蛔洄浍虺恚蟪咴隳缋哕\",\n  \"wu\": \"务物无五武午吴舞伍污乌误亡恶屋晤悟吾雾芜梧勿巫侮坞毋诬呜钨邬捂鹜兀婺妩於戊鹉浯蜈唔骛仵焐芴鋈庑鼯牾怃圬忤痦迕杌寤阢\",\n  \"ya\": \"亚压雅牙押鸭呀轧涯崖邪芽哑讶鸦娅衙丫蚜碣垭伢氩桠琊揠吖睚痖疋迓岈砑\",\n  \"he\": \"和合河何核盖贺喝赫荷盒鹤吓呵苛禾菏壑褐涸阂阖劾诃颌嗬貉曷翮纥盍\",\n  \"wo\": \"我握窝沃卧挝涡斡渥幄蜗喔倭莴龌肟硪\",\n  \"en\": \"恩摁蒽\",\n  \"n\": \"嗯唔\",\n  \"er\": \"而二尔儿耳迩饵洱贰铒珥佴鸸鲕\",\n  \"fa\": \"发法罚乏伐阀筏砝垡珐\",\n  \"quan\": \"全权券泉圈拳劝犬铨痊诠荃醛蜷颧绻犭筌鬈悛辁畎\",\n  \"fei\": \"费非飞肥废菲肺啡沸匪斐蜚妃诽扉翡霏吠绯腓痱芾淝悱狒榧砩鲱篚镄\",\n  \"pei\": \"配培坏赔佩陪沛裴胚妃霈淠旆帔呸醅辔锫\",\n  \"ping\": \"平评凭瓶冯屏萍苹乒坪枰娉俜鲆\",\n  \"fo\": \"佛\",\n  \"hu\": \"和护许户核湖互乎呼胡戏忽虎沪糊壶葫狐蝴弧瑚浒鹄琥扈唬滹惚祜囫斛笏芴醐猢怙唿戽槲觳煳鹕冱瓠虍岵鹱烀轷\",\n  \"ga\": \"夹咖嘎尬噶旮伽尕钆尜\",\n  \"ge\": \"个合各革格歌哥盖隔割阁戈葛鸽搁胳舸疙铬骼蛤咯圪镉颌仡硌嗝鬲膈纥袼搿塥哿虼\",\n  \"ha\": \"哈蛤铪\",\n  \"xia\": \"下夏峡厦辖霞夹虾狭吓侠暇遐瞎匣瑕唬呷黠硖罅狎瘕柙\",\n  \"gai\": \"改该盖概溉钙丐芥赅垓陔戤\",\n  \"hai\": \"海还害孩亥咳骸骇氦嗨胲醢\",\n  \"gan\": \"干感赶敢甘肝杆赣乾柑尴竿秆橄矸淦苷擀酐绀泔坩旰疳澉\",\n  \"gang\": \"港钢刚岗纲冈杠缸扛肛罡戆筻\",\n  \"jiang\": \"将强江港奖讲降疆蒋姜浆匠酱僵桨绛缰犟豇礓洚茳糨耩\",\n  \"hang\": \"行航杭巷夯吭桁沆绗颃\",\n  \"gong\": \"工公共供功红贡攻宫巩龚恭拱躬弓汞蚣珙觥肱廾\",\n  \"hong\": \"红宏洪轰虹鸿弘哄烘泓訇蕻闳讧荭黉薨\",\n  \"guang\": \"广光逛潢犷胱咣桄\",\n  \"qiong\": \"穷琼穹邛茕筇跫蛩銎\",\n  \"gao\": \"高告搞稿膏糕镐皋羔锆杲郜睾诰藁篙缟槁槔\",\n  \"hao\": \"好号毫豪耗浩郝皓昊皋蒿壕灏嚎濠蚝貉颢嗥薅嚆\",\n  \"li\": \"理力利立里李历例离励礼丽黎璃厉厘粒莉梨隶栗荔沥犁漓哩狸藜罹篱鲤砺吏澧俐骊溧砾莅锂笠蠡蛎痢雳俪傈醴栎郦俚枥喱逦娌鹂戾砬唳坜疠蜊黧猁鬲粝蓠呖跞疬缡鲡鳢嫠詈悝苈篥轹\",\n  \"jia\": \"家加价假佳架甲嘉贾驾嫁夹稼钾挟拮迦伽颊浃枷戛荚痂颉镓笳珈岬胛袈郏葭袷瘕铗跏蛱恝哿\",\n  \"luo\": \"落罗络洛逻螺锣骆萝裸漯烙摞骡咯箩珞捋荦硌雒椤镙跞瘰泺脶猡倮蠃\",\n  \"ke\": \"可科克客刻课颗渴壳柯棵呵坷恪苛咳磕珂稞瞌溘轲窠嗑疴蝌岢铪颏髁蚵缂氪骒钶锞\",\n  \"qia\": \"卡恰洽掐髂袷咭葜\",\n  \"gei\": \"给\",\n  \"gen\": \"根跟亘艮哏茛\",\n  \"hen\": \"很狠恨痕哏\",\n  \"gou\": \"构购够句沟狗钩拘勾苟垢枸篝佝媾诟岣彀缑笱鞲觏遘\",\n  \"kou\": \"口扣寇叩抠佝蔻芤眍筘\",\n  \"gu\": \"股古顾故固鼓骨估谷贾姑孤雇辜菇沽咕呱锢钴箍汩梏痼崮轱鸪牯蛊诂毂鹘菰罟嘏臌觚瞽蛄酤牿鲴\",\n  \"pai\": \"牌排派拍迫徘湃俳哌蒎\",\n  \"gua\": \"括挂瓜刮寡卦呱褂剐胍诖鸹栝呙\",\n  \"tou\": \"投头透偷愉骰亠\",\n  \"guai\": \"怪拐乖\",\n  \"kuai\": \"会快块筷脍蒯侩浍郐蒉狯哙\",\n  \"guan\": \"关管观馆官贯冠惯灌罐莞纶棺斡矜倌鹳鳏盥掼涫\",\n  \"wan\": \"万完晚湾玩碗顽挽弯蔓丸莞皖宛婉腕蜿惋烷琬畹豌剜纨绾脘菀芄箢\",\n  \"ne\": \"呢哪呐讷疒\",\n  \"gui\": \"规贵归轨桂柜圭鬼硅瑰跪龟匮闺诡癸鳜桧皈鲑刽晷傀眭妫炅庋簋刿宄匦\",\n  \"jun\": \"军均俊君峻菌竣钧骏龟浚隽郡筠皲麇捃\",\n  \"jiong\": \"窘炯迥炅冂扃\",\n  \"jue\": \"决绝角觉掘崛诀獗抉爵嚼倔厥蕨攫珏矍蹶谲镢鳜噱桷噘撅橛孓觖劂爝\",\n  \"gun\": \"滚棍辊衮磙鲧绲丨\",\n  \"hun\": \"婚混魂浑昏棍珲荤馄诨溷阍\",\n  \"guo\": \"国过果郭锅裹帼涡椁囗蝈虢聒埚掴猓崞蜾呙馘\",\n  \"hei\": \"黑嘿嗨\",\n  \"kan\": \"看刊勘堪坎砍侃嵌槛瞰阚龛戡凵莰\",\n  \"heng\": \"衡横恒亨哼珩桁蘅\",\n  \"mo\": \"万没么模末冒莫摩墨默磨摸漠脉膜魔沫陌抹寞蘑摹蓦馍茉嘿谟秣蟆貉嫫镆殁耱嬷麽瘼貊貘\",\n  \"peng\": \"鹏朋彭膨蓬碰苹棚捧亨烹篷澎抨硼怦砰嘭蟛堋\",\n  \"hou\": \"后候厚侯猴喉吼逅篌糇骺後鲎瘊堠\",\n  \"hua\": \"化华划话花画滑哗豁骅桦猾铧砉\",\n  \"huai\": \"怀坏淮徊槐踝\",\n  \"huan\": \"还环换欢患缓唤焕幻痪桓寰涣宦垸洹浣豢奂郇圜獾鲩鬟萑逭漶锾缳擐\",\n  \"xun\": \"讯训迅孙寻询循旬巡汛勋逊熏徇浚殉驯鲟薰荀浔洵峋埙巽郇醺恂荨窨蕈曛獯\",\n  \"huang\": \"黄荒煌皇凰慌晃潢谎惶簧璜恍幌湟蝗磺隍徨遑肓篁鳇蟥癀\",\n  \"nai\": \"能乃奶耐奈鼐萘氖柰佴艿\",\n  \"luan\": \"乱卵滦峦鸾栾銮挛孪脔娈\",\n  \"qie\": \"切且契窃茄砌锲怯伽惬妾趄挈郄箧慊\",\n  \"jian\": \"建间件见坚检健监减简艰践兼鉴键渐柬剑尖肩舰荐箭浅剪俭碱茧奸歼拣捡煎贱溅槛涧堑笺谏饯锏缄睑謇蹇腱菅翦戬毽笕犍硷鞯牮枧湔鲣囝裥踺搛缣鹣蒹谫僭戋趼楗\",\n  \"nan\": \"南难男楠喃囡赧腩囝蝻\",\n  \"qian\": \"前千钱签潜迁欠纤牵浅遣谦乾铅歉黔谴嵌倩钳茜虔堑钎骞阡掮钤扦芊犍荨仟芡悭缱佥愆褰凵肷岍搴箝慊椠\",\n  \"qiang\": \"强抢疆墙枪腔锵呛羌蔷襁羟跄樯戕嫱戗炝镪锖蜣\",\n  \"xiang\": \"向项相想乡象响香降像享箱羊祥湘详橡巷翔襄厢镶飨饷缃骧芗庠鲞葙蟓\",\n  \"jiao\": \"教交较校角觉叫脚缴胶轿郊焦骄浇椒礁佼蕉娇矫搅绞酵剿嚼饺窖跤蛟侥狡姣皎茭峤铰醮鲛湫徼鹪僬噍艽挢敫\",\n  \"zhuo\": \"着著缴桌卓捉琢灼浊酌拙茁涿镯淖啄濯焯倬擢斫棹诼浞禚\",\n  \"qiao\": \"桥乔侨巧悄敲俏壳雀瞧翘窍峭锹撬荞跷樵憔鞘橇峤诮谯愀鞒硗劁缲\",\n  \"xiao\": \"小效销消校晓笑肖削孝萧俏潇硝宵啸嚣霄淆哮筱逍姣箫骁枭哓绡蛸崤枵魈\",\n  \"si\": \"司四思斯食私死似丝饲寺肆撕泗伺嗣祀厮驷嘶锶俟巳蛳咝耜笥纟糸鸶缌澌姒汜厶兕\",\n  \"kai\": \"开凯慨岂楷恺揩锴铠忾垲剀锎蒈\",\n  \"jin\": \"进金今近仅紧尽津斤禁锦劲晋谨筋巾浸襟靳瑾烬缙钅矜觐堇馑荩噤廑妗槿赆衿卺\",\n  \"qin\": \"亲勤侵秦钦琴禽芹沁寝擒覃噙矜嗪揿溱芩衾廑锓吣檎螓\",\n  \"jing\": \"经京精境竞景警竟井惊径静劲敬净镜睛晶颈荆兢靖泾憬鲸茎腈菁胫阱旌粳靓痉箐儆迳婧肼刭弪獍\",\n  \"ying\": \"应营影英景迎映硬盈赢颖婴鹰荧莹樱瑛蝇萦莺颍膺缨瀛楹罂荥萤鹦滢蓥郢茔嘤璎嬴瘿媵撄潆\",\n  \"jiu\": \"就究九酒久救旧纠舅灸疚揪咎韭玖臼柩赳鸠鹫厩啾阄桕僦鬏\",\n  \"zui\": \"最罪嘴醉咀蕞觜\",\n  \"juan\": \"卷捐圈眷娟倦绢隽镌涓鹃鄄蠲狷锩桊\",\n  \"suan\": \"算酸蒜狻\",\n  \"yun\": \"员运云允孕蕴韵酝耘晕匀芸陨纭郧筠恽韫郓氲殒愠昀菀狁\",\n  \"qun\": \"群裙逡麇\",\n  \"ka\": \"卡喀咖咔咯佧胩\",\n  \"kang\": \"康抗扛慷炕亢糠伉钪闶\",\n  \"keng\": \"坑铿吭\",\n  \"kao\": \"考靠烤拷铐栲尻犒\",\n  \"ken\": \"肯垦恳啃龈裉\",\n  \"yin\": \"因引银印音饮阴隐姻殷淫尹荫吟瘾寅茵圻垠鄞湮蚓氤胤龈窨喑铟洇狺夤廴吲霪茚堙\",\n  \"kong\": \"空控孔恐倥崆箜\",\n  \"ku\": \"苦库哭酷裤枯窟挎骷堀绔刳喾\",\n  \"kua\": \"跨夸垮挎胯侉\",\n  \"kui\": \"亏奎愧魁馈溃匮葵窥盔逵睽馗聩喟夔篑岿喹揆隗傀暌跬蒉愦悝蝰\",\n  \"kuan\": \"款宽髋\",\n  \"kuang\": \"况矿框狂旷眶匡筐邝圹哐贶夼诳诓纩\",\n  \"que\": \"确却缺雀鹊阙瘸榷炔阕悫\",\n  \"kun\": \"困昆坤捆琨锟鲲醌髡悃阃\",\n  \"kuo\": \"扩括阔廓蛞\",\n  \"la\": \"拉落垃腊啦辣蜡喇剌旯砬邋瘌\",\n  \"lai\": \"来莱赖睐徕籁涞赉濑癞崃疠铼\",\n  \"lan\": \"兰览蓝篮栏岚烂滥缆揽澜拦懒榄斓婪阑褴罱啉谰镧漤\",\n  \"lin\": \"林临邻赁琳磷淋麟霖鳞凛拎遴蔺吝粼嶙躏廪檩啉辚膦瞵懔\",\n  \"lang\": \"浪朗郎廊狼琅榔螂阆锒莨啷蒗稂\",\n  \"liang\": \"量两粮良辆亮梁凉谅粱晾靓踉莨椋魉墚\",\n  \"lao\": \"老劳落络牢捞涝烙姥佬崂唠酪潦痨醪铑铹栳耢\",\n  \"mu\": \"目模木亩幕母牧莫穆姆墓慕牟牡募睦缪沐暮拇姥钼苜仫毪坶\",\n  \"le\": \"了乐勒肋叻鳓嘞仂泐\",\n  \"lei\": \"类累雷勒泪蕾垒磊擂镭肋羸耒儡嫘缧酹嘞诔檑\",\n  \"sui\": \"随岁虽碎尿隧遂髓穗绥隋邃睢祟濉燧谇眭荽\",\n  \"lie\": \"列烈劣裂猎冽咧趔洌鬣埒捩躐\",\n  \"leng\": \"冷愣棱楞塄\",\n  \"ling\": \"领令另零灵龄陵岭凌玲铃菱棱伶羚苓聆翎泠瓴囹绫呤棂蛉酃鲮柃\",\n  \"lia\": \"俩\",\n  \"liao\": \"了料疗辽廖聊寥缪僚燎缭撂撩嘹潦镣寮蓼獠钌尥鹩\",\n  \"liu\": \"流刘六留柳瘤硫溜碌浏榴琉馏遛鎏骝绺镏旒熘鹨锍\",\n  \"lun\": \"论轮伦仑纶沦抡囵\",\n  \"lv\": \"率律旅绿虑履吕铝屡氯缕滤侣驴榈闾偻褛捋膂稆\",\n  \"lou\": \"楼露漏陋娄搂篓喽镂偻瘘髅耧蝼嵝蒌\",\n  \"mao\": \"贸毛矛冒貌茂茅帽猫髦锚懋袤牦卯铆耄峁瑁蟊茆蝥旄泖昴瞀\",\n  \"long\": \"龙隆弄垄笼拢聋陇胧珑窿茏咙砻垅泷栊癃\",\n  \"nong\": \"农浓弄脓侬哝\",\n  \"shuang\": \"双爽霜孀泷\",\n  \"shu\": \"术书数属树输束述署朱熟殊蔬舒疏鼠淑叔暑枢墅俞曙抒竖蜀薯梳戍恕孰沭赎庶漱塾倏澍纾姝菽黍腧秫毹殳疋摅\",\n  \"shuai\": \"率衰帅摔甩蟀\",\n  \"lve\": \"略掠锊\",\n  \"ma\": \"么马吗摩麻码妈玛嘛骂抹蚂唛蟆犸杩\",\n  \"me\": \"么麽\",\n  \"mai\": \"买卖麦迈脉埋霾荬劢\",\n  \"man\": \"满慢曼漫埋蔓瞒蛮鳗馒幔谩螨熳缦镘颟墁鞔\",\n  \"mi\": \"米密秘迷弥蜜谜觅靡泌眯麋猕谧咪糜宓汨醚嘧弭脒冖幂祢縻蘼芈糸敉\",\n  \"men\": \"们门闷瞒汶扪焖懑鞔钔\",\n  \"mang\": \"忙盲茫芒氓莽蟒邙硭漭\",\n  \"meng\": \"蒙盟梦猛孟萌氓朦锰檬勐懵蟒蜢虻黾蠓艨甍艋瞢礞\",\n  \"miao\": \"苗秒妙描庙瞄缪渺淼藐缈邈鹋杪眇喵\",\n  \"mou\": \"某谋牟缪眸哞鍪蛑侔厶\",\n  \"miu\": \"缪谬\",\n  \"mei\": \"美没每煤梅媒枚妹眉魅霉昧媚玫酶镁湄寐莓袂楣糜嵋镅浼猸鹛\",\n  \"wen\": \"文问闻稳温纹吻蚊雯紊瘟汶韫刎璺玟阌\",\n  \"mie\": \"灭蔑篾乜咩蠛\",\n  \"ming\": \"明名命鸣铭冥茗溟酩瞑螟暝\",\n  \"na\": \"内南那纳拿哪娜钠呐捺衲镎肭\",\n  \"nei\": \"内那哪馁\",\n  \"nuo\": \"难诺挪娜糯懦傩喏搦锘\",\n  \"ruo\": \"若弱偌箬\",\n  \"nang\": \"囊馕囔曩攮\",\n  \"nao\": \"脑闹恼挠瑙淖孬垴铙桡呶硇猱蛲\",\n  \"ni\": \"你尼呢泥疑拟逆倪妮腻匿霓溺旎昵坭铌鲵伲怩睨猊\",\n  \"nen\": \"嫩恁\",\n  \"neng\": \"能\",\n  \"nin\": \"您恁\",\n  \"niao\": \"鸟尿溺袅脲茑嬲\",\n  \"nie\": \"摄聂捏涅镍孽捻蘖啮蹑嗫臬镊颞乜陧\",\n  \"niang\": \"娘酿\",\n  \"ning\": \"宁凝拧泞柠咛狞佞聍甯\",\n  \"nu\": \"努怒奴弩驽帑孥胬\",\n  \"nv\": \"女钕衄恧\",\n  \"ru\": \"入如女乳儒辱汝茹褥孺濡蠕嚅缛溽铷洳薷襦颥蓐\",\n  \"nuan\": \"暖\",\n  \"nve\": \"虐疟\",\n  \"re\": \"热若惹喏\",\n  \"ou\": \"区欧偶殴呕禺藕讴鸥瓯沤耦怄\",\n  \"pao\": \"跑炮泡抛刨袍咆疱庖狍匏脬\",\n  \"pou\": \"剖掊裒\",\n  \"pen\": \"喷盆湓\",\n  \"pie\": \"瞥撇苤氕丿\",\n  \"pin\": \"品贫聘频拼拚颦姘嫔榀牝\",\n  \"se\": \"色塞瑟涩啬穑铯槭\",\n  \"qing\": \"情青清请亲轻庆倾顷卿晴氢擎氰罄磬蜻箐鲭綮苘黥圊檠謦\",\n  \"zan\": \"赞暂攒堑昝簪糌瓒錾趱拶\",\n  \"shao\": \"少绍召烧稍邵哨韶捎勺梢鞘芍苕劭艄筲杓潲\",\n  \"sao\": \"扫骚嫂梢缫搔瘙臊埽缲鳋\",\n  \"sha\": \"沙厦杀纱砂啥莎刹杉傻煞鲨霎嗄痧裟挲铩唼歃\",\n  \"xuan\": \"县选宣券旋悬轩喧玄绚渲璇炫萱癣漩眩暄煊铉楦泫谖痃碹揎镟儇\",\n  \"ran\": \"然染燃冉苒髯蚺\",\n  \"rang\": \"让壤攘嚷瓤穰禳\",\n  \"rao\": \"绕扰饶娆桡荛\",\n  \"reng\": \"仍扔\",\n  \"ri\": \"日\",\n  \"rou\": \"肉柔揉糅鞣蹂\",\n  \"ruan\": \"软阮朊\",\n  \"run\": \"润闰\",\n  \"sa\": \"萨洒撒飒卅仨脎\",\n  \"suo\": \"所些索缩锁莎梭琐嗦唆唢娑蓑羧挲桫嗍睃\",\n  \"sai\": \"思赛塞腮噻鳃\",\n  \"shui\": \"说水税谁睡氵\",\n  \"sang\": \"桑丧嗓搡颡磉\",\n  \"sen\": \"森\",\n  \"seng\": \"僧\",\n  \"shai\": \"筛晒\",\n  \"shang\": \"上商尚伤赏汤裳墒晌垧觞殇熵绱\",\n  \"xing\": \"行省星腥猩惺兴刑型形邢饧醒幸杏性姓陉荇荥擤悻硎\",\n  \"shou\": \"收手受首售授守寿瘦兽狩绶艏扌\",\n  \"shuo\": \"说数硕烁朔铄妁槊蒴搠\",\n  \"su\": \"速素苏诉缩塑肃俗宿粟溯酥夙愫簌稣僳谡涑蔌嗉觫\",\n  \"shua\": \"刷耍唰\",\n  \"shuan\": \"栓拴涮闩\",\n  \"shun\": \"顺瞬舜吮\",\n  \"song\": \"送松宋讼颂耸诵嵩淞怂悚崧凇忪竦菘\",\n  \"sou\": \"艘搜擞嗽嗖叟馊薮飕嗾溲锼螋瞍\",\n  \"sun\": \"损孙笋荪榫隼狲飧\",\n  \"teng\": \"腾疼藤滕誊\",\n  \"tie\": \"铁贴帖餮萜\",\n  \"tu\": \"土突图途徒涂吐屠兔秃凸荼钍菟堍酴\",\n  \"wai\": \"外歪崴\",\n  \"wang\": \"王望往网忘亡旺汪枉妄惘罔辋魍\",\n  \"weng\": \"翁嗡瓮蓊蕹\",\n  \"zhua\": \"抓挝爪\",\n  \"yang\": \"样养央阳洋扬杨羊详氧仰秧痒漾疡泱殃恙鸯徉佯怏炀烊鞅蛘\",\n  \"xiong\": \"雄兄熊胸凶匈汹芎\",\n  \"yo\": \"哟唷\",\n  \"yong\": \"用永拥勇涌泳庸俑踊佣咏雍甬镛臃邕蛹恿慵壅痈鳙墉饔喁\",\n  \"za\": \"杂扎咱砸咋匝咂拶\",\n  \"zai\": \"在再灾载栽仔宰哉崽甾\",\n  \"zao\": \"造早遭枣噪灶燥糟凿躁藻皂澡蚤唣\",\n  \"zei\": \"贼\",\n  \"zen\": \"怎谮\",\n  \"zeng\": \"增曾综赠憎锃甑罾缯\",\n  \"zhei\": \"这\",\n  \"zou\": \"走邹奏揍诹驺陬楱鄹鲰\",\n  \"zhuai\": \"转拽\",\n  \"zun\": \"尊遵鳟樽撙\",\n  \"dia\": \"嗲\",\n  \"nou\": \"耨\"\n};\nexports.pinyin_dict_notone = pinyin_dict_notone;\nvar pinyinUtil = {\n  //加载字典\n  parseDict: function parseDict() {\n    dict.firstletter = pinyin_dict_firstletter;\n    dict.notone = {};\n    dict.py2hz = pinyin_dict_notone;\n    for (var i in pinyin_dict_notone) {\n      var temp = pinyin_dict_notone[i];\n      for (var j = 0, len = temp.length; j < len; j++) {\n        dict.notone[temp[j]] = i;\n      }\n    }\n  },\n  //根据汉字获取拼音，如果不是汉字直接返回原字符\n  getPinyin: function getPinyin(chinese, splitter, withtone, polyphone) {\n    if (!chinese || /^ +$/g.test(chinese)) return '';\n    splitter = splitter == undefined ? '' : splitter;\n    withtone = withtone == undefined ? false : withtone;\n    polyphone = polyphone == undefined ? false : polyphone;\n    var result = [];\n    if (dict.withtone) {\n      // 优先使用带声调的字典文件\n      for (var i = 0, len = chinese.length; i < len; i++) {\n        var pinyin = dict.withtone[chinese[i]];\n        if (pinyin) {\n          if (!polyphone) pinyin = pinyin.replace(/ .*$/g, ''); // 如果不需要多音字\n          if (!withtone) pinyin = this.removeTone(pinyin); // 如果不需要声调\n        }\n\n        result.push(pinyin || chinese[i]);\n      }\n    } else if (dict.notone) {\n      // 使用没有声调的字典文件\n      if (withtone) __f__(\"warn\", 'pinyin_dict_notone Dictionary files do not support tones!', \" at uni_modules/lz-indexed-list/components/lz-indexed-list/pinyinUtil.js:823\");\n      if (polyphone) __f__(\"warn\", 'pinyin_dict_notone Dictionary files do not support polyphony!', \" at uni_modules/lz-indexed-list/components/lz-indexed-list/pinyinUtil.js:824\");\n      for (var i = 0, len = chinese.length; i < len; i++) {\n        var temp = chinese.charAt(i);\n        if (dict.notone[temp]) dict.notone[temp] = dict.notone[temp].substring(0, 1).toUpperCase() + dict.notone[temp].substring(1);\n        result.push(dict.notone[temp] || temp);\n      }\n    } else {\n      throw 'Sorry, no suitable dictionary files were found!';\n    }\n    if (!polyphone) return result.join(splitter);else {\n      if (window.pinyin_dict_polyphone) return parsePolyphone(chinese, result, splitter, withtone);else return handlePolyphone(result, ' ', splitter);\n    }\n  },\n  //获取汉字的拼音首字母\n  getFirstLetter: function getFirstLetter(str, polyphone) {\n    polyphone = polyphone == undefined ? false : polyphone;\n    if (!str || /^ +$/g.test(str)) return '';\n    if (dict.firstletter)\n      // 使用首字母字典文件\n      {\n        var result = [];\n        for (var i = 0; i < str.length; i++) {\n          var unicode = str.charCodeAt(i);\n          var ch = str.charAt(i);\n          if (unicode >= 19968 && unicode <= 40869) {\n            ch = dict.firstletter.all.charAt(unicode - 19968);\n            if (polyphone) ch = dict.firstletter.polyphone[unicode] || ch;\n          }\n          result.push(ch);\n        }\n        if (!polyphone) return result.join(''); // 如果不用管多音字，直接将数组拼接成字符串\n        else return handlePolyphone(result, '', ''); // 处理多音字，此时的result类似于：['D', 'ZC', 'F']\n      } else {\n      var py = this.getPinyin(str, ' ', false, polyphone);\n      py = py instanceof Array ? py : [py];\n      var result = [];\n      for (var i = 0; i < py.length; i++) {\n        result.push(py[i].replace(/(^| )(\\w)\\w*/g, function (m, $1, $2) {\n          return $2.toUpperCase();\n        }));\n      }\n      if (!polyphone) return result[0];else return simpleUnique(result);\n    }\n  },\n  //拼音转汉字，只支持单个汉字，返回所有匹配的汉字组合\n  getHanzi: function getHanzi(pinyin) {\n    if (!dict.py2hz) {\n      throw 'Sorry, no suitable dictionary files were found!';\n    }\n    return dict.py2hz[pinyin] || '';\n  },\n  //去除拼音中的声调，比如将 xiǎo míng tóng xué 转换成 xiao ming tong xue\n  removeTone: function removeTone(pinyin) {\n    var toneMap = {\n      \"ā\": \"a1\",\n      \"á\": \"a2\",\n      \"ǎ\": \"a3\",\n      \"à\": \"a4\",\n      \"ō\": \"o1\",\n      \"ó\": \"o2\",\n      \"ǒ\": \"o3\",\n      \"ò\": \"o4\",\n      \"ē\": \"e1\",\n      \"é\": \"e2\",\n      \"ě\": \"e3\",\n      \"è\": \"e4\",\n      \"ī\": \"i1\",\n      \"í\": \"i2\",\n      \"ǐ\": \"i3\",\n      \"ì\": \"i4\",\n      \"ū\": \"u1\",\n      \"ú\": \"u2\",\n      \"ǔ\": \"u3\",\n      \"ù\": \"u4\",\n      \"ü\": \"v0\",\n      \"ǖ\": \"v1\",\n      \"ǘ\": \"v2\",\n      \"ǚ\": \"v3\",\n      \"ǜ\": \"v4\",\n      \"ń\": \"n2\",\n      \"ň\": \"n3\",\n      \"\": \"m2\"\n    };\n    return pinyin.replace(/[āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńň]/g, function (m) {\n      return toneMap[m][0];\n    });\n  }\n};\n\n//处理多音字， 将类似['D', 'ZC', 'F'] 转换成['DZF', 'DCF']\nexports.pinyinUtil = pinyinUtil;\nfunction handlePolyphone(array, splitter, joinChar) {\n  splitter = splitter || '';\n  var result = [''],\n    temp = [];\n  for (var i = 0; i < array.length; i++) {\n    temp = [];\n    var t = array[i].split(splitter);\n    for (var j = 0; j < t.length; j++) {\n      for (var k = 0; k < result.length; k++) {\n        temp.push(result[k] + (result[k] ? joinChar : '') + t[j]);\n      }\n    }\n    result = temp;\n  }\n  return simpleUnique(result);\n}\n\n//根据词库找出多音字正确的读音\nfunction parsePolyphone(chinese, result, splitter, withtone) {\n  var poly = window.pinyin_dict_polyphone;\n  var max = 7; // 最多只考虑7个汉字的多音字词，虽然词库里面有10个字的，但是数量非常少，为了整体效率暂时忽略之\n  var temp = poly[chinese];\n  if (temp)\n    // 如果直接找到了结果\n    {\n      temp = temp.split(' ');\n      for (var i = 0; i < temp.length; i++) {\n        result[i] = temp[i] || result[i];\n        if (!withtone) result[i] = pinyinUtil.removeTone(result[i]);\n      }\n      return result.join(splitter);\n    }\n  for (var i = 0; i < chinese.length; i++) {\n    temp = '';\n    for (var j = 0; j < max && i + j < chinese.length; j++) {\n      if (!/^[\\u2E80-\\u9FFF]+$/.test(chinese[i + j])) break; // 如果碰到非汉字直接停止本次查找\n      temp += chinese[i + j];\n      var res = poly[temp];\n      if (res)\n        // 如果找到了多音字词语\n        {\n          res = res.split(' ');\n          for (var k = 0; k <= j; k++) {\n            if (res[k]) result[i + k] = withtone ? res[k] : pinyinUtil.removeTone(res[k]);\n          }\n          break;\n        }\n    }\n  }\n  // 最后这一步是为了防止出现词库里面也没有包含的多音字词语\n  for (var i = 0; i < result.length; i++) {\n    result[i] = result[i].replace(/ .*$/g, '');\n  }\n  return result.join(splitter);\n}\n\n// 数组去重\nfunction simpleUnique(array) {\n  var result = [];\n  var hash = {};\n  for (var i = 0; i < array.length; i++) {\n    var key = (0, _typeof2.default)(array[i]) + array[i];\n    if (!hash[key]) {\n      result.push(array[i]);\n      hash[key] = true;\n    }\n  }\n  return result;\n}\npinyinUtil.parseDict();\npinyinUtil.dict = dict;\nmodule.exports = {\n  pinyinUtil: pinyinUtil\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvbHotaW5kZXhlZC1saXN0L2NvbXBvbmVudHMvbHotaW5kZXhlZC1saXN0L3BpbnlpblV0aWwuanMiXSwibmFtZXMiOlsiZGljdCIsInBpbnlpbl9kaWN0X2ZpcnN0bGV0dGVyIiwiYWxsIiwicG9seXBob25lIiwicGlueWluX2RpY3Rfbm90b25lIiwicGlueWluVXRpbCIsInBhcnNlRGljdCIsImZpcnN0bGV0dGVyIiwibm90b25lIiwicHkyaHoiLCJpIiwidGVtcCIsImoiLCJsZW4iLCJsZW5ndGgiLCJnZXRQaW55aW4iLCJjaGluZXNlIiwic3BsaXR0ZXIiLCJ3aXRodG9uZSIsInRlc3QiLCJ1bmRlZmluZWQiLCJyZXN1bHQiLCJwaW55aW4iLCJyZXBsYWNlIiwicmVtb3ZlVG9uZSIsInB1c2giLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJ3aW5kb3ciLCJwaW55aW5fZGljdF9wb2x5cGhvbmUiLCJwYXJzZVBvbHlwaG9uZSIsImhhbmRsZVBvbHlwaG9uZSIsImdldEZpcnN0TGV0dGVyIiwic3RyIiwidW5pY29kZSIsImNoYXJDb2RlQXQiLCJjaCIsInB5IiwiQXJyYXkiLCJtIiwiJDEiLCIkMiIsInNpbXBsZVVuaXF1ZSIsImdldEhhbnppIiwidG9uZU1hcCIsImFycmF5Iiwiam9pbkNoYXIiLCJ0Iiwic3BsaXQiLCJrIiwicG9seSIsIm1heCIsInJlcyIsImhhc2giLCJrZXkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBSUEsSUFBSSxHQUFHLENBQUMsQ0FBQzs7QUFFYjtBQUNBLElBQU1DLHVCQUF1QixHQUFHO0VBQy9CQyxHQUFHLEVBQUUsdzZvQkFBdzZvQjtFQUM3Nm9CQyxTQUFTO0lBQ1IsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsSUFBSTtJQUNiLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsSUFBSTtJQUNiLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsSUFBSTtJQUNiLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsSUFBSTtJQUNiLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsS0FBSztJQUNkLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsSUFBSTtJQUNiLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsSUFBSTtJQUNiLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsSUFBSTtJQUNiLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsSUFBSTtJQUNiLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFO0VBQUksc0RBQ0osSUFBSSxzREFDSixJQUFJLHNEQUNKLElBQUksc0RBQ0osSUFBSSxzREFDSixJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxLQUFLLDZDQUNkLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxHQUFHLDZDQUNaLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxHQUFHLDZDQUNaLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxLQUFLLDZDQUNkLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxLQUFLLDZDQUNkLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxHQUFHLDZDQUNaLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxLQUFLLDZDQUNkLE9BQU8sRUFBRSxHQUFHLDZDQUNaLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxHQUFHLDZDQUNaLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxHQUFHLDZDQUNaLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxHQUFHLDZDQUNaLE9BQU8sRUFBRSxHQUFHLDZDQUNaLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxHQUFHLDZDQUNaLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxHQUFHLDZDQUNaLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxLQUFLLDZDQUNkLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxLQUFLLDZDQUNkLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxLQUFLLDZDQUNkLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxLQUFLLDZDQUNkLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxHQUFHLDZDQUNaLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxLQUFLLDZDQUNkLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxLQUFLLDZDQUNkLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxLQUFLLDZDQUNkLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxJQUFJLDZDQUNiLE9BQU8sRUFBRSxLQUFLO0FBRWhCLENBQUM7O0FBRUQ7QUFDTyxJQUFNQyxrQkFBa0IsR0FBRztFQUNqQyxHQUFHLEVBQUUsU0FBUztFQUNkLEdBQUcsRUFBRSxtQ0FBbUM7RUFDeEMsSUFBSSxFQUFFLHdCQUF3QjtFQUM5QixJQUFJLEVBQUUsR0FBRztFQUNULElBQUksRUFBRSxvRkFBb0Y7RUFDMUYsSUFBSSxFQUFFLGtIQUFrSDtFQUN4SCxJQUFJLEVBQUUsc0JBQXNCO0VBQzVCLEtBQUssRUFBRSxrQ0FBa0M7RUFDekMsS0FBSyxFQUFFLE1BQU07RUFDYixJQUFJLEVBQUUsMEJBQTBCO0VBQ2hDLElBQUksRUFBRSxjQUFjO0VBQ3BCLElBQUksRUFBRSxtR0FBbUc7RUFDekcsS0FBSyxFQUFFLFVBQVU7RUFDakIsR0FBRyxFQUFFLEtBQUs7RUFDVixJQUFJLEVBQUUsNkJBQTZCO0VBQ25DLElBQUksRUFBRSxjQUFjO0VBQ3BCLElBQUksRUFBRSxzREFBc0Q7RUFDNUQsSUFBSSxFQUFFLDhEQUE4RDtFQUNwRSxLQUFLLEVBQUUsZUFBZTtFQUN0QixJQUFJLEVBQUUsd0NBQXdDO0VBQzlDLEtBQUssRUFBRSwrQkFBK0I7RUFDdEMsS0FBSyxFQUFFLHVCQUF1QjtFQUM5QixLQUFLLEVBQUUscUJBQXFCO0VBQzVCLEtBQUssRUFBRSxvQkFBb0I7RUFDM0IsTUFBTSxFQUFFLGtCQUFrQjtFQUMxQixNQUFNLEVBQUUsV0FBVztFQUNuQixNQUFNLEVBQUUsWUFBWTtFQUNwQixLQUFLLEVBQUUsK0JBQStCO0VBQ3RDLElBQUksRUFBRSxzQkFBc0I7RUFDNUIsSUFBSSxFQUFFLDhCQUE4QjtFQUNwQyxNQUFNLEVBQUUsa0JBQWtCO0VBQzFCLElBQUksRUFBRSxzQkFBc0I7RUFDNUIsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQyxJQUFJLEVBQUUsd0ZBQXdGO0VBQzlGLEtBQUssRUFBRSxZQUFZO0VBQ25CLE1BQU0sRUFBRSx1QkFBdUI7RUFDL0IsTUFBTSxFQUFFLDRCQUE0QjtFQUNwQyxNQUFNLEVBQUUsZUFBZTtFQUN2QixNQUFNLEVBQUUscUNBQXFDO0VBQzdDLE1BQU0sRUFBRSxtQkFBbUI7RUFDM0IsTUFBTSxFQUFFLGdCQUFnQjtFQUN4QixLQUFLLEVBQUUsd0JBQXdCO0VBQy9CLEtBQUssRUFBRSxPQUFPO0VBQ2QsS0FBSyxFQUFFLGtCQUFrQjtFQUN6QixLQUFLLEVBQUUsdUJBQXVCO0VBQzlCLE1BQU0sRUFBRSxrQkFBa0I7RUFDMUIsTUFBTSxFQUFFLGNBQWM7RUFDdEIsTUFBTSxFQUFFLG9CQUFvQjtFQUM1QixNQUFNLEVBQUUscURBQXFEO0VBQzdELEtBQUssRUFBRSxLQUFLO0VBQ1osSUFBSSxFQUFFLE1BQU07RUFDWixLQUFLLEVBQUUsNEJBQTRCO0VBQ25DLEtBQUssRUFBRSxhQUFhO0VBQ3BCLEtBQUssRUFBRSxlQUFlO0VBQ3RCLE1BQU0sRUFBRSxpQ0FBaUM7RUFDekMsS0FBSyxFQUFFLEtBQUs7RUFDWixLQUFLLEVBQUUsVUFBVTtFQUNqQixNQUFNLEVBQUUsU0FBUztFQUNqQixNQUFNLEVBQUUsU0FBUztFQUNqQixNQUFNLEVBQUUseUJBQXlCO0VBQ2pDLEtBQUssRUFBRSxZQUFZO0VBQ25CLElBQUksRUFBRSxTQUFTO0VBQ2YsSUFBSSxFQUFFLGlCQUFpQjtFQUN2QixNQUFNLEVBQUUsZ0JBQWdCO0VBQ3hCLEtBQUssRUFBRSxxQkFBcUI7RUFDNUIsTUFBTSxFQUFFLE1BQU07RUFDZCxLQUFLLEVBQUUsNEJBQTRCO0VBQ25DLE1BQU0sRUFBRSxVQUFVO0VBQ2xCLElBQUksRUFBRSxzQkFBc0I7RUFDNUIsSUFBSSxFQUFFLDJDQUEyQztFQUNqRCxLQUFLLEVBQUUsaUJBQWlCO0VBQ3hCLE1BQU0sRUFBRSw2QkFBNkI7RUFDckMsTUFBTSxFQUFFLHVDQUF1QztFQUMvQyxNQUFNLEVBQUUsdUJBQXVCO0VBQy9CLEtBQUssRUFBRSxvQkFBb0I7RUFDM0IsTUFBTSxFQUFFLDZCQUE2QjtFQUNyQyxPQUFPLEVBQUUsK0JBQStCO0VBQ3hDLE9BQU8sRUFBRSwwQkFBMEI7RUFDbkMsTUFBTSxFQUFFLGlCQUFpQjtFQUN6QixNQUFNLEVBQUUsc0JBQXNCO0VBQzlCLE1BQU0sRUFBRSwyQkFBMkI7RUFDbkMsS0FBSyxFQUFFLFlBQVk7RUFDbkIsSUFBSSxFQUFFLDJEQUEyRDtFQUNqRSxPQUFPLEVBQUUsZ0NBQWdDO0VBQ3pDLE1BQU0sRUFBRSxpQkFBaUI7RUFDekIsT0FBTyxFQUFFLG9CQUFvQjtFQUM3QixNQUFNLEVBQUUsZ0JBQWdCO0VBQ3hCLEtBQUssRUFBRSxxRkFBcUY7RUFDNUYsT0FBTyxFQUFFLHVCQUF1QjtFQUNoQyxNQUFNLEVBQUUsMkJBQTJCO0VBQ25DLEtBQUssRUFBRSwyQ0FBMkM7RUFDbEQsS0FBSyxFQUFFLDRFQUE0RTtFQUNuRixJQUFJLEVBQUUsK0VBQStFO0VBQ3JGLE9BQU8sRUFBRSxPQUFPO0VBQ2hCLEtBQUssRUFBRSw0QkFBNEI7RUFDbkMsS0FBSyxFQUFFLHlCQUF5QjtFQUNoQyxLQUFLLEVBQUUsZUFBZTtFQUN0QixPQUFPLEVBQUUsZ0JBQWdCO0VBQ3pCLE1BQU0sRUFBRSxtQkFBbUI7RUFDM0IsS0FBSyxFQUFFLDRCQUE0QjtFQUNuQyxLQUFLLEVBQUUscUJBQXFCO0VBQzVCLEtBQUssRUFBRSwrQkFBK0I7RUFDdEMsTUFBTSxFQUFFLFFBQVE7RUFDaEIsTUFBTSxFQUFFLGFBQWE7RUFDckIsT0FBTyxFQUFFLGVBQWU7RUFDeEIsT0FBTyxFQUFFLFlBQVk7RUFDckIsTUFBTSxFQUFFLHNDQUFzQztFQUM5QyxNQUFNLEVBQUUsVUFBVTtFQUNsQixRQUFRLEVBQUUsU0FBUztFQUNuQixRQUFRLEVBQUUsYUFBYTtFQUN2QixNQUFNLEVBQUUsV0FBVztFQUNuQixNQUFNLEVBQUUsY0FBYztFQUN0QixNQUFNLEVBQUUsUUFBUTtFQUNoQixJQUFJLEVBQUUsZUFBZTtFQUNyQixLQUFLLEVBQUUsaUJBQWlCO0VBQ3hCLElBQUksRUFBRSxvQ0FBb0M7RUFDMUMsSUFBSSxFQUFFLHdDQUF3QztFQUM5QyxNQUFNLEVBQUUsVUFBVTtFQUNsQixJQUFJLEVBQUUsYUFBYTtFQUNuQixJQUFJLEVBQUUsZ0hBQWdIO0VBQ3RILE1BQU0sRUFBRSxjQUFjO0VBQ3RCLE1BQU0sRUFBRSxjQUFjO0VBQ3RCLEtBQUssRUFBRSxNQUFNO0VBQ2IsS0FBSyxFQUFFLGtCQUFrQjtFQUN6QixLQUFLLEVBQUUsaUVBQWlFO0VBQ3hFLEtBQUssRUFBRSxPQUFPO0VBQ2QsS0FBSyxFQUFFLG9CQUFvQjtFQUMzQixNQUFNLEVBQUUsT0FBTztFQUNmLElBQUksRUFBRSxtQkFBbUI7RUFDekIsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQyxLQUFLLEVBQUUsb0JBQW9CO0VBQzNCLElBQUksRUFBRSxzQkFBc0I7RUFDNUIsS0FBSyxFQUFFLDhCQUE4QjtFQUNyQyxJQUFJLEVBQUUsOENBQThDO0VBQ3BELEtBQUssRUFBRSw0QkFBNEI7RUFDbkMsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQixLQUFLLEVBQUUsb0RBQW9EO0VBQzNELEtBQUssRUFBRSxxRUFBcUU7RUFDNUUsTUFBTSxFQUFFLGNBQWM7RUFDdEIsS0FBSyxFQUFFLG9CQUFvQjtFQUMzQixNQUFNLEVBQUUsb0JBQW9CO0VBQzVCLElBQUksRUFBRSxPQUFPO0VBQ2IsSUFBSSxFQUFFLFFBQVE7RUFDZCxLQUFLLEVBQUUsR0FBRztFQUNWLElBQUksRUFBRSx5Q0FBeUM7RUFDL0MsSUFBSSxFQUFFLDRCQUE0QjtFQUNsQyxLQUFLLEVBQUUsV0FBVztFQUNsQixLQUFLLEVBQUUsNENBQTRDO0VBQ25ELE1BQU0sRUFBRSwyQkFBMkI7RUFDbkMsTUFBTSxFQUFFLG1CQUFtQjtFQUMzQixLQUFLLEVBQUUsdURBQXVEO0VBQzlELE1BQU0sRUFBRSxpQkFBaUI7RUFDekIsTUFBTSxFQUFFLGVBQWU7RUFDdkIsS0FBSyxFQUFFLHVDQUF1QztFQUM5QyxLQUFLLEVBQUUsbUJBQW1CO0VBQzFCLEtBQUssRUFBRSx3QkFBd0I7RUFDL0IsSUFBSSxFQUFFLDhCQUE4QjtFQUNwQyxLQUFLLEVBQUUsNkNBQTZDO0VBQ3BELEtBQUssRUFBRSx5QkFBeUI7RUFDaEMsTUFBTSxFQUFFLHFCQUFxQjtFQUM3QixLQUFLLEVBQUUsSUFBSTtFQUNYLE1BQU0sRUFBRSxvQkFBb0I7RUFDNUIsTUFBTSxFQUFFLHFCQUFxQjtFQUM3QixNQUFNLEVBQUUsMEJBQTBCO0VBQ2xDLE9BQU8sRUFBRSxxQkFBcUI7RUFDOUIsS0FBSyxFQUFFLGlCQUFpQjtFQUN4QixJQUFJLEVBQUUsMkJBQTJCO0VBQ2pDLE1BQU0sRUFBRSxXQUFXO0VBQ25CLEtBQUssRUFBRSxZQUFZO0VBQ25CLEtBQUssRUFBRSxXQUFXO0VBQ2xCLEtBQUssRUFBRSxzQkFBc0I7RUFDN0IsS0FBSyxFQUFFLFdBQVc7RUFDbEIsS0FBSyxFQUFFLDZDQUE2QztFQUNwRCxJQUFJLEVBQUUsMkRBQTJEO0VBQ2pFLElBQUksRUFBRSxtQ0FBbUM7RUFDekMsSUFBSSxFQUFFLGlDQUFpQztFQUN2QyxJQUFJLEVBQUUsbUJBQW1CO0VBQ3pCLElBQUksRUFBRSxLQUFLO0VBQ1gsR0FBRyxFQUFFLElBQUk7RUFDVCxJQUFJLEVBQUUsZ0JBQWdCO0VBQ3RCLElBQUksRUFBRSxZQUFZO0VBQ2xCLE1BQU0sRUFBRSx3QkFBd0I7RUFDaEMsS0FBSyxFQUFFLGdDQUFnQztFQUN2QyxLQUFLLEVBQUUsb0JBQW9CO0VBQzNCLE1BQU0sRUFBRSxnQkFBZ0I7RUFDeEIsSUFBSSxFQUFFLEdBQUc7RUFDVCxJQUFJLEVBQUUsbURBQW1EO0VBQ3pELElBQUksRUFBRSxZQUFZO0VBQ2xCLElBQUksRUFBRSxzQ0FBc0M7RUFDNUMsSUFBSSxFQUFFLEtBQUs7RUFDWCxLQUFLLEVBQUUsMEJBQTBCO0VBQ2pDLEtBQUssRUFBRSxjQUFjO0VBQ3JCLEtBQUssRUFBRSxjQUFjO0VBQ3JCLEtBQUssRUFBRSwyQkFBMkI7RUFDbEMsTUFBTSxFQUFFLGVBQWU7RUFDdkIsT0FBTyxFQUFFLDBCQUEwQjtFQUNuQyxNQUFNLEVBQUUsWUFBWTtFQUNwQixNQUFNLEVBQUUsdUJBQXVCO0VBQy9CLE1BQU0sRUFBRSxtQkFBbUI7RUFDM0IsT0FBTyxFQUFFLFVBQVU7RUFDbkIsT0FBTyxFQUFFLFdBQVc7RUFDcEIsS0FBSyxFQUFFLHFCQUFxQjtFQUM1QixLQUFLLEVBQUUsdUJBQXVCO0VBQzlCLElBQUksRUFBRSxpRkFBaUY7RUFDdkYsS0FBSyxFQUFFLDBDQUEwQztFQUNqRCxLQUFLLEVBQUUsZ0NBQWdDO0VBQ3ZDLElBQUksRUFBRSxzQ0FBc0M7RUFDNUMsS0FBSyxFQUFFLFVBQVU7RUFDakIsS0FBSyxFQUFFLEdBQUc7RUFDVixLQUFLLEVBQUUsUUFBUTtFQUNmLEtBQUssRUFBRSxPQUFPO0VBQ2QsS0FBSyxFQUFFLHlCQUF5QjtFQUNoQyxLQUFLLEVBQUUsWUFBWTtFQUNuQixJQUFJLEVBQUUsNENBQTRDO0VBQ2xELEtBQUssRUFBRSxZQUFZO0VBQ25CLEtBQUssRUFBRSxnQkFBZ0I7RUFDdkIsS0FBSyxFQUFFLFNBQVM7RUFDaEIsTUFBTSxFQUFFLEtBQUs7RUFDYixNQUFNLEVBQUUsY0FBYztFQUN0QixNQUFNLEVBQUUsdUJBQXVCO0VBQy9CLEtBQUssRUFBRSwrQkFBK0I7RUFDdEMsSUFBSSxFQUFFLE9BQU87RUFDYixLQUFLLEVBQUUsaUNBQWlDO0VBQ3hDLEtBQUssRUFBRSxtQkFBbUI7RUFDMUIsT0FBTyxFQUFFLFFBQVE7RUFDakIsS0FBSyxFQUFFLGdDQUFnQztFQUN2QyxLQUFLLEVBQUUsVUFBVTtFQUNqQixLQUFLLEVBQUUsY0FBYztFQUNyQixLQUFLLEVBQUUsc0JBQXNCO0VBQzdCLEtBQUssRUFBRSxLQUFLO0VBQ1osS0FBSyxFQUFFLGlCQUFpQjtFQUN4QixNQUFNLEVBQUUsVUFBVTtFQUNsQixJQUFJLEVBQUUseUNBQXlDO0VBQy9DLE1BQU0sRUFBRSxzQkFBc0I7RUFDOUIsS0FBSyxFQUFFLGlCQUFpQjtFQUN4QixLQUFLLEVBQUUsZ0JBQWdCO0VBQ3ZCLE1BQU0sRUFBRSxRQUFRO0VBQ2hCLE1BQU0sRUFBRSxnQ0FBZ0M7RUFDeEMsS0FBSyxFQUFFLG1DQUFtQztFQUMxQyxPQUFPLEVBQUUsMkJBQTJCO0VBQ3BDLEtBQUssRUFBRSxhQUFhO0VBQ3BCLE1BQU0sRUFBRSxhQUFhO0VBQ3JCLEtBQUssRUFBRSxrQkFBa0I7RUFDekIsTUFBTSxFQUFFLHlFQUF5RTtFQUNqRixLQUFLLEVBQUUsWUFBWTtFQUNuQixNQUFNLEVBQUUsZ0RBQWdEO0VBQ3hELE9BQU8sRUFBRSx1QkFBdUI7RUFDaEMsT0FBTyxFQUFFLGlDQUFpQztFQUMxQyxNQUFNLEVBQUUsaURBQWlEO0VBQ3pELE1BQU0sRUFBRSwyQkFBMkI7RUFDbkMsTUFBTSxFQUFFLCtCQUErQjtFQUN2QyxNQUFNLEVBQUUsa0NBQWtDO0VBQzFDLElBQUksRUFBRSxzQ0FBc0M7RUFDNUMsS0FBSyxFQUFFLGdCQUFnQjtFQUN2QixLQUFLLEVBQUUscUNBQXFDO0VBQzVDLEtBQUssRUFBRSwwQkFBMEI7RUFDakMsTUFBTSxFQUFFLDRDQUE0QztFQUNwRCxNQUFNLEVBQUUsMENBQTBDO0VBQ2xELEtBQUssRUFBRSw0QkFBNEI7RUFDbkMsS0FBSyxFQUFFLFNBQVM7RUFDaEIsTUFBTSxFQUFFLGtCQUFrQjtFQUMxQixNQUFNLEVBQUUsTUFBTTtFQUNkLEtBQUssRUFBRSwyQkFBMkI7RUFDbEMsS0FBSyxFQUFFLE1BQU07RUFDYixJQUFJLEVBQUUsU0FBUztFQUNmLE1BQU0sRUFBRSxZQUFZO0VBQ3BCLE1BQU0sRUFBRSxLQUFLO0VBQ2IsS0FBSyxFQUFFLFVBQVU7RUFDakIsS0FBSyxFQUFFLFFBQVE7RUFDZixLQUFLLEVBQUUsc0NBQXNDO0VBQzdDLE1BQU0sRUFBRSxTQUFTO0VBQ2pCLElBQUksRUFBRSxlQUFlO0VBQ3JCLEtBQUssRUFBRSxRQUFRO0VBQ2YsS0FBSyxFQUFFLDhCQUE4QjtFQUNyQyxNQUFNLEVBQUUsS0FBSztFQUNiLE9BQU8sRUFBRSxrQkFBa0I7RUFDM0IsS0FBSyxFQUFFLGFBQWE7RUFDcEIsS0FBSyxFQUFFLGFBQWE7RUFDcEIsS0FBSyxFQUFFLE9BQU87RUFDZCxJQUFJLEVBQUUsZUFBZTtFQUNyQixLQUFLLEVBQUUsZUFBZTtFQUN0QixLQUFLLEVBQUUseUJBQXlCO0VBQ2hDLEtBQUssRUFBRSwyQkFBMkI7RUFDbEMsTUFBTSxFQUFFLGdCQUFnQjtFQUN4QixPQUFPLEVBQUUsbUJBQW1CO0VBQzVCLEtBQUssRUFBRSxzQkFBc0I7RUFDN0IsSUFBSSxFQUFFLDRCQUE0QjtFQUNsQyxJQUFJLEVBQUUsV0FBVztFQUNqQixLQUFLLEVBQUUsc0JBQXNCO0VBQzdCLEtBQUssRUFBRSxxQkFBcUI7RUFDNUIsS0FBSyxFQUFFLGVBQWU7RUFDdEIsTUFBTSxFQUFFLE9BQU87RUFDZixNQUFNLEVBQUUsOEJBQThCO0VBQ3RDLEtBQUssRUFBRSxHQUFHO0VBQ1YsTUFBTSxFQUFFLHdCQUF3QjtFQUNoQyxLQUFLLEVBQUUsd0JBQXdCO0VBQy9CLEtBQUssRUFBRSxVQUFVO0VBQ2pCLElBQUksRUFBRSx1QkFBdUI7RUFDN0IsS0FBSyxFQUFFLGtCQUFrQjtFQUN6QixLQUFLLEVBQUUsNEJBQTRCO0VBQ25DLE1BQU0sRUFBRSxvQkFBb0I7RUFDNUIsTUFBTSxFQUFFLFFBQVE7RUFDaEIsUUFBUSxFQUFFLE9BQU87RUFDakIsS0FBSyxFQUFFLGtEQUFrRDtFQUN6RCxPQUFPLEVBQUUsUUFBUTtFQUNqQixLQUFLLEVBQUUsS0FBSztFQUNaLElBQUksRUFBRSxrQkFBa0I7RUFDeEIsSUFBSSxFQUFFLElBQUk7RUFDVixLQUFLLEVBQUUsV0FBVztFQUNsQixLQUFLLEVBQUUscUJBQXFCO0VBQzVCLElBQUksRUFBRSxnQ0FBZ0M7RUFDdEMsS0FBSyxFQUFFLFlBQVk7RUFDbkIsTUFBTSxFQUFFLFlBQVk7RUFDcEIsTUFBTSxFQUFFLHdCQUF3QjtFQUNoQyxNQUFNLEVBQUUsa0JBQWtCO0VBQzFCLEtBQUssRUFBRSxZQUFZO0VBQ25CLEtBQUssRUFBRSxJQUFJO0VBQ1gsS0FBSyxFQUFFLDZCQUE2QjtFQUNwQyxLQUFLLEVBQUUsbUJBQW1CO0VBQzFCLEtBQUssRUFBRSxRQUFRO0VBQ2YsTUFBTSxFQUFFLGNBQWM7RUFDdEIsSUFBSSxFQUFFLGVBQWU7RUFDckIsS0FBSyxFQUFFLE1BQU07RUFDYixLQUFLLEVBQUUsWUFBWTtFQUNuQixLQUFLLEVBQUUsTUFBTTtFQUNiLE1BQU0sRUFBRSxPQUFPO0VBQ2YsS0FBSyxFQUFFLGdCQUFnQjtFQUN2QixJQUFJLEVBQUUsd0JBQXdCO0VBQzlCLEtBQUssRUFBRSxJQUFJO0VBQ1gsTUFBTSxFQUFFLEdBQUc7RUFDWCxLQUFLLEVBQUUsSUFBSTtFQUNYLE1BQU0sRUFBRSxTQUFTO0VBQ2pCLEtBQUssRUFBRSxrQkFBa0I7RUFDekIsT0FBTyxFQUFFLElBQUk7RUFDYixNQUFNLEVBQUUsWUFBWTtFQUNwQixJQUFJLEVBQUUsVUFBVTtFQUNoQixJQUFJLEVBQUUsTUFBTTtFQUNaLElBQUksRUFBRSx1QkFBdUI7RUFDN0IsTUFBTSxFQUFFLEdBQUc7RUFDWCxLQUFLLEVBQUUsSUFBSTtFQUNYLElBQUksRUFBRSxNQUFNO0VBQ1osSUFBSSxFQUFFLGVBQWU7RUFDckIsS0FBSyxFQUFFLGNBQWM7RUFDckIsS0FBSyxFQUFFLEtBQUs7RUFDWixLQUFLLEVBQUUsS0FBSztFQUNaLEtBQUssRUFBRSxPQUFPO0VBQ2QsS0FBSyxFQUFFLGFBQWE7RUFDcEIsSUFBSSxFQUFFLFVBQVU7RUFDaEIsTUFBTSxFQUFFLDJCQUEyQjtFQUNuQyxLQUFLLEVBQUUsYUFBYTtFQUNwQixNQUFNLEVBQUUscUJBQXFCO0VBQzdCLEtBQUssRUFBRSxhQUFhO0VBQ3BCLEtBQUssRUFBRSxzQkFBc0I7RUFDN0IsTUFBTSxFQUFFLDhCQUE4QjtFQUN0QyxLQUFLLEVBQUUsU0FBUztFQUNoQixNQUFNLEVBQUUsU0FBUztFQUNqQixLQUFLLEVBQUUsUUFBUTtFQUNmLE1BQU0sRUFBRSxJQUFJO0VBQ1osSUFBSSxFQUFFLEdBQUc7RUFDVCxLQUFLLEVBQUUsUUFBUTtFQUNmLE1BQU0sRUFBRSxLQUFLO0VBQ2IsS0FBSyxFQUFFLElBQUk7RUFDWCxJQUFJLEVBQUUsU0FBUztFQUNmLEtBQUssRUFBRSxvQkFBb0I7RUFDM0IsS0FBSyxFQUFFLFFBQVE7RUFDZixNQUFNLEVBQUUsUUFBUTtFQUNoQixNQUFNLEVBQUUsUUFBUTtFQUNoQixLQUFLLEVBQUUsR0FBRztFQUNWLE1BQU0sRUFBRSxHQUFHO0VBQ1gsTUFBTSxFQUFFLElBQUk7RUFDWixPQUFPLEVBQUUsZ0JBQWdCO0VBQ3pCLE1BQU0sRUFBRSx5QkFBeUI7RUFDakMsTUFBTSxFQUFFLGdCQUFnQjtFQUN4QixNQUFNLEVBQUUsWUFBWTtFQUNwQixJQUFJLEVBQUUsd0JBQXdCO0VBQzlCLE1BQU0sRUFBRSxLQUFLO0VBQ2IsT0FBTyxFQUFFLE1BQU07RUFDZixNQUFNLEVBQUUsTUFBTTtFQUNkLE1BQU0sRUFBRSxrQkFBa0I7RUFDMUIsS0FBSyxFQUFFLGdCQUFnQjtFQUN2QixLQUFLLEVBQUUsVUFBVTtFQUNqQixNQUFNLEVBQUUsT0FBTztFQUNmLEtBQUssRUFBRSxPQUFPO0VBQ2QsSUFBSSxFQUFFLGtCQUFrQjtFQUN4QixLQUFLLEVBQUUsS0FBSztFQUNaLE1BQU0sRUFBRSxnQkFBZ0I7RUFDeEIsTUFBTSxFQUFFLE9BQU87RUFDZixNQUFNLEVBQUUsS0FBSztFQUNiLE1BQU0sRUFBRSw0QkFBNEI7RUFDcEMsT0FBTyxFQUFFLFVBQVU7RUFDbkIsSUFBSSxFQUFFLElBQUk7RUFDVixNQUFNLEVBQUUsMkJBQTJCO0VBQ25DLElBQUksRUFBRSxVQUFVO0VBQ2hCLEtBQUssRUFBRSxZQUFZO0VBQ25CLEtBQUssRUFBRSxpQkFBaUI7RUFDeEIsS0FBSyxFQUFFLEdBQUc7RUFDVixLQUFLLEVBQUUsSUFBSTtFQUNYLE1BQU0sRUFBRSxXQUFXO0VBQ25CLE1BQU0sRUFBRSxHQUFHO0VBQ1gsS0FBSyxFQUFFLFlBQVk7RUFDbkIsT0FBTyxFQUFFLElBQUk7RUFDYixLQUFLLEVBQUUsT0FBTztFQUNkLEtBQUssRUFBRSxHQUFHO0VBQ1YsS0FBSyxFQUFFO0FBQ1IsQ0FBQztBQUFBO0FBRU0sSUFBTUMsVUFBVSxHQUFHO0VBQ3pCO0VBQ0FDLFNBQVMsdUJBQUc7SUFDWE4sSUFBSSxDQUFDTyxXQUFXLEdBQUdOLHVCQUF1QjtJQUMxQ0QsSUFBSSxDQUFDUSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCUixJQUFJLENBQUNTLEtBQUssR0FBR0wsa0JBQWtCO0lBQy9CLEtBQUssSUFBSU0sQ0FBQyxJQUFJTixrQkFBa0IsRUFBRTtNQUNqQyxJQUFJTyxJQUFJLEdBQUdQLGtCQUFrQixDQUFDTSxDQUFDLENBQUM7TUFDaEMsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxHQUFHLEdBQUdGLElBQUksQ0FBQ0csTUFBTSxFQUFFRixDQUFDLEdBQUdDLEdBQUcsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7UUFDaERaLElBQUksQ0FBQ1EsTUFBTSxDQUFDRyxJQUFJLENBQUNDLENBQUMsQ0FBQyxDQUFDLEdBQUdGLENBQUM7TUFDekI7SUFDRDtFQUNELENBQUM7RUFDRDtFQUNBSyxTQUFTLHFCQUFDQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFZixTQUFTLEVBQUU7SUFDakQsSUFBSSxDQUFDYSxPQUFPLElBQUksT0FBTyxDQUFDRyxJQUFJLENBQUNILE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRTtJQUNoREMsUUFBUSxHQUFHQSxRQUFRLElBQUlHLFNBQVMsR0FBRyxFQUFFLEdBQUdILFFBQVE7SUFDaERDLFFBQVEsR0FBR0EsUUFBUSxJQUFJRSxTQUFTLEdBQUcsS0FBSyxHQUFHRixRQUFRO0lBQ25EZixTQUFTLEdBQUdBLFNBQVMsSUFBSWlCLFNBQVMsR0FBRyxLQUFLLEdBQUdqQixTQUFTO0lBQ3RELElBQUlrQixNQUFNLEdBQUcsRUFBRTtJQUNmLElBQUlyQixJQUFJLENBQUNrQixRQUFRLEVBQUU7TUFBRTtNQUNwQixLQUFLLElBQUlSLENBQUMsR0FBRyxDQUFDLEVBQUVHLEdBQUcsR0FBR0csT0FBTyxDQUFDRixNQUFNLEVBQUVKLENBQUMsR0FBR0csR0FBRyxFQUFFSCxDQUFDLEVBQUUsRUFBRTtRQUNuRCxJQUFJWSxNQUFNLEdBQUd0QixJQUFJLENBQUNrQixRQUFRLENBQUNGLE9BQU8sQ0FBQ04sQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSVksTUFBTSxFQUFFO1VBQ1gsSUFBSSxDQUFDbkIsU0FBUyxFQUFFbUIsTUFBTSxHQUFHQSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUN0RCxJQUFJLENBQUNMLFFBQVEsRUFBRUksTUFBTSxHQUFHLElBQUksQ0FBQ0UsVUFBVSxDQUFDRixNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xEOztRQUNBRCxNQUFNLENBQUNJLElBQUksQ0FBQ0gsTUFBTSxJQUFJTixPQUFPLENBQUNOLENBQUMsQ0FBQyxDQUFDO01BQ2xDO0lBQ0QsQ0FBQyxNQUFNLElBQUlWLElBQUksQ0FBQ1EsTUFBTSxFQUFFO01BQUU7TUFDekIsSUFBSVUsUUFBUSxFQUFFLGNBQWEsMkRBQTJEO01BQ3RGLElBQUlmLFNBQVMsRUFBRSxjQUFhLCtEQUErRDtNQUMzRixLQUFLLElBQUlPLENBQUMsR0FBRyxDQUFDLEVBQUVHLEdBQUcsR0FBR0csT0FBTyxDQUFDRixNQUFNLEVBQUVKLENBQUMsR0FBR0csR0FBRyxFQUFFSCxDQUFDLEVBQUUsRUFBRTtRQUNuRCxJQUFJQyxJQUFJLEdBQUdLLE9BQU8sQ0FBQ1UsTUFBTSxDQUFDaEIsQ0FBQyxDQUFDO1FBQzVCLElBQUlWLElBQUksQ0FBQ1EsTUFBTSxDQUFDRyxJQUFJLENBQUMsRUFDcEJYLElBQUksQ0FBQ1EsTUFBTSxDQUFDRyxJQUFJLENBQUMsR0FBR1gsSUFBSSxDQUFDUSxNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFDZ0IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxFQUFFLEdBQUc1QixJQUFJLENBQUNRLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLENBQ3RGZ0IsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNkTixNQUFNLENBQUNJLElBQUksQ0FBQ3pCLElBQUksQ0FBQ1EsTUFBTSxDQUFDRyxJQUFJLENBQUMsSUFBSUEsSUFBSSxDQUFDO01BQ3ZDO0lBQ0QsQ0FBQyxNQUFNO01BQ04sTUFBTSxpREFBaUQ7SUFDeEQ7SUFDQSxJQUFJLENBQUNSLFNBQVMsRUFBRSxPQUFPa0IsTUFBTSxDQUFDUSxJQUFJLENBQUNaLFFBQVEsQ0FBQyxDQUFDLEtBQ3hDO01BQ0osSUFBSWEsTUFBTSxDQUFDQyxxQkFBcUIsRUFBRSxPQUFPQyxjQUFjLENBQUNoQixPQUFPLEVBQUVLLE1BQU0sRUFBRUosUUFBUSxFQUFFQyxRQUFRLENBQUMsQ0FBQyxLQUN4RixPQUFPZSxlQUFlLENBQUNaLE1BQU0sRUFBRSxHQUFHLEVBQUVKLFFBQVEsQ0FBQztJQUNuRDtFQUNELENBQUM7RUFDRDtFQUNBaUIsY0FBYywwQkFBQ0MsR0FBRyxFQUFFaEMsU0FBUyxFQUFFO0lBQzlCQSxTQUFTLEdBQUdBLFNBQVMsSUFBSWlCLFNBQVMsR0FBRyxLQUFLLEdBQUdqQixTQUFTO0lBQ3RELElBQUksQ0FBQ2dDLEdBQUcsSUFBSSxPQUFPLENBQUNoQixJQUFJLENBQUNnQixHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUU7SUFDeEMsSUFBSW5DLElBQUksQ0FBQ08sV0FBVztNQUFFO01BQ3RCO1FBQ0MsSUFBSWMsTUFBTSxHQUFHLEVBQUU7UUFDZixLQUFLLElBQUlYLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3lCLEdBQUcsQ0FBQ3JCLE1BQU0sRUFBRUosQ0FBQyxFQUFFLEVBQUU7VUFDcEMsSUFBSTBCLE9BQU8sR0FBR0QsR0FBRyxDQUFDRSxVQUFVLENBQUMzQixDQUFDLENBQUM7VUFDL0IsSUFBSTRCLEVBQUUsR0FBR0gsR0FBRyxDQUFDVCxNQUFNLENBQUNoQixDQUFDLENBQUM7VUFDdEIsSUFBSTBCLE9BQU8sSUFBSSxLQUFLLElBQUlBLE9BQU8sSUFBSSxLQUFLLEVBQUU7WUFDekNFLEVBQUUsR0FBR3RDLElBQUksQ0FBQ08sV0FBVyxDQUFDTCxHQUFHLENBQUN3QixNQUFNLENBQUNVLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDakQsSUFBSWpDLFNBQVMsRUFBRW1DLEVBQUUsR0FBR3RDLElBQUksQ0FBQ08sV0FBVyxDQUFDSixTQUFTLENBQUNpQyxPQUFPLENBQUMsSUFBSUUsRUFBRTtVQUM5RDtVQUNBakIsTUFBTSxDQUFDSSxJQUFJLENBQUNhLEVBQUUsQ0FBQztRQUNoQjtRQUNBLElBQUksQ0FBQ25DLFNBQVMsRUFBRSxPQUFPa0IsTUFBTSxDQUFDUSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUFBLEtBQ25DLE9BQU9JLGVBQWUsQ0FBQ1osTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO01BQzlDLENBQUMsTUFBTTtNQUNOLElBQUlrQixFQUFFLEdBQUcsSUFBSSxDQUFDeEIsU0FBUyxDQUFDb0IsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUVoQyxTQUFTLENBQUM7TUFDbkRvQyxFQUFFLEdBQUdBLEVBQUUsWUFBWUMsS0FBSyxHQUFHRCxFQUFFLEdBQUcsQ0FBQ0EsRUFBRSxDQUFDO01BQ3BDLElBQUlsQixNQUFNLEdBQUcsRUFBRTtNQUNmLEtBQUssSUFBSVgsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHNkIsRUFBRSxDQUFDekIsTUFBTSxFQUFFSixDQUFDLEVBQUUsRUFBRTtRQUNuQ1csTUFBTSxDQUFDSSxJQUFJLENBQUNjLEVBQUUsQ0FBQzdCLENBQUMsQ0FBQyxDQUFDYSxPQUFPLENBQUMsZUFBZSxFQUFFLFVBQVNrQixDQUFDLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFO1VBQzlELE9BQU9BLEVBQUUsQ0FBQ2YsV0FBVyxFQUFFO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO01BQ0o7TUFDQSxJQUFJLENBQUN6QixTQUFTLEVBQUUsT0FBT2tCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUM1QixPQUFPdUIsWUFBWSxDQUFDdkIsTUFBTSxDQUFDO0lBQ2pDO0VBQ0QsQ0FBQztFQUNEO0VBQ0F3QixRQUFRLG9CQUFDdkIsTUFBTSxFQUFFO0lBQ2hCLElBQUksQ0FBQ3RCLElBQUksQ0FBQ1MsS0FBSyxFQUFFO01BQ2hCLE1BQU0saURBQWlEO0lBQ3hEO0lBQ0EsT0FBT1QsSUFBSSxDQUFDUyxLQUFLLENBQUNhLE1BQU0sQ0FBQyxJQUFJLEVBQUU7RUFDaEMsQ0FBQztFQUNEO0VBQ0FFLFVBQVUsc0JBQUNGLE1BQU0sRUFBRTtJQUNsQixJQUFJd0IsT0FBTyxHQUFHO01BQ2IsR0FBRyxFQUFFLElBQUk7TUFDVCxHQUFHLEVBQUUsSUFBSTtNQUNULEdBQUcsRUFBRSxJQUFJO01BQ1QsR0FBRyxFQUFFLElBQUk7TUFDVCxHQUFHLEVBQUUsSUFBSTtNQUNULEdBQUcsRUFBRSxJQUFJO01BQ1QsR0FBRyxFQUFFLElBQUk7TUFDVCxHQUFHLEVBQUUsSUFBSTtNQUNULEdBQUcsRUFBRSxJQUFJO01BQ1QsR0FBRyxFQUFFLElBQUk7TUFDVCxHQUFHLEVBQUUsSUFBSTtNQUNULEdBQUcsRUFBRSxJQUFJO01BQ1QsR0FBRyxFQUFFLElBQUk7TUFDVCxHQUFHLEVBQUUsSUFBSTtNQUNULEdBQUcsRUFBRSxJQUFJO01BQ1QsR0FBRyxFQUFFLElBQUk7TUFDVCxHQUFHLEVBQUUsSUFBSTtNQUNULEdBQUcsRUFBRSxJQUFJO01BQ1QsR0FBRyxFQUFFLElBQUk7TUFDVCxHQUFHLEVBQUUsSUFBSTtNQUNULEdBQUcsRUFBRSxJQUFJO01BQ1QsR0FBRyxFQUFFLElBQUk7TUFDVCxHQUFHLEVBQUUsSUFBSTtNQUNULEdBQUcsRUFBRSxJQUFJO01BQ1QsR0FBRyxFQUFFLElBQUk7TUFDVCxHQUFHLEVBQUUsSUFBSTtNQUNULEdBQUcsRUFBRSxJQUFJO01BQ1QsR0FBRyxFQUFFO0lBQ04sQ0FBQztJQUNELE9BQU94QixNQUFNLENBQUNDLE9BQU8sQ0FBQyxpQ0FBaUMsRUFBRSxVQUFTa0IsQ0FBQyxFQUFFO01BQ3BFLE9BQU9LLE9BQU8sQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQztFQUNIO0FBQ0QsQ0FBQzs7QUFFRDtBQUFBO0FBQ0EsU0FBU1IsZUFBZSxDQUFDYyxLQUFLLEVBQUU5QixRQUFRLEVBQUUrQixRQUFRLEVBQUU7RUFDbkQvQixRQUFRLEdBQUdBLFFBQVEsSUFBSSxFQUFFO0VBQ3pCLElBQUlJLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNoQlYsSUFBSSxHQUFHLEVBQUU7RUFDVixLQUFLLElBQUlELENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3FDLEtBQUssQ0FBQ2pDLE1BQU0sRUFBRUosQ0FBQyxFQUFFLEVBQUU7SUFDdENDLElBQUksR0FBRyxFQUFFO0lBQ1QsSUFBSXNDLENBQUMsR0FBR0YsS0FBSyxDQUFDckMsQ0FBQyxDQUFDLENBQUN3QyxLQUFLLENBQUNqQyxRQUFRLENBQUM7SUFDaEMsS0FBSyxJQUFJTCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdxQyxDQUFDLENBQUNuQyxNQUFNLEVBQUVGLENBQUMsRUFBRSxFQUFFO01BQ2xDLEtBQUssSUFBSXVDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzlCLE1BQU0sQ0FBQ1AsTUFBTSxFQUFFcUMsQ0FBQyxFQUFFO1FBQ3JDeEMsSUFBSSxDQUFDYyxJQUFJLENBQUNKLE1BQU0sQ0FBQzhCLENBQUMsQ0FBQyxJQUFJOUIsTUFBTSxDQUFDOEIsQ0FBQyxDQUFDLEdBQUdILFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBR0MsQ0FBQyxDQUFDckMsQ0FBQyxDQUFDLENBQUM7TUFBQztJQUM1RDtJQUNBUyxNQUFNLEdBQUdWLElBQUk7RUFDZDtFQUNBLE9BQU9pQyxZQUFZLENBQUN2QixNQUFNLENBQUM7QUFDNUI7O0FBRUE7QUFDQSxTQUFTVyxjQUFjLENBQUNoQixPQUFPLEVBQUVLLE1BQU0sRUFBRUosUUFBUSxFQUFFQyxRQUFRLEVBQUU7RUFDNUQsSUFBSWtDLElBQUksR0FBR3RCLE1BQU0sQ0FBQ0MscUJBQXFCO0VBQ3ZDLElBQUlzQixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDYixJQUFJMUMsSUFBSSxHQUFHeUMsSUFBSSxDQUFDcEMsT0FBTyxDQUFDO0VBQ3hCLElBQUlMLElBQUk7SUFBRTtJQUNWO01BQ0NBLElBQUksR0FBR0EsSUFBSSxDQUFDdUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztNQUN0QixLQUFLLElBQUl4QyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdDLElBQUksQ0FBQ0csTUFBTSxFQUFFSixDQUFDLEVBQUUsRUFBRTtRQUNyQ1csTUFBTSxDQUFDWCxDQUFDLENBQUMsR0FBR0MsSUFBSSxDQUFDRCxDQUFDLENBQUMsSUFBSVcsTUFBTSxDQUFDWCxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDUSxRQUFRLEVBQUVHLE1BQU0sQ0FBQ1gsQ0FBQyxDQUFDLEdBQUdMLFVBQVUsQ0FBQ21CLFVBQVUsQ0FBQ0gsTUFBTSxDQUFDWCxDQUFDLENBQUMsQ0FBQztNQUM1RDtNQUNBLE9BQU9XLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDWixRQUFRLENBQUM7SUFDN0I7RUFDQSxLQUFLLElBQUlQLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR00sT0FBTyxDQUFDRixNQUFNLEVBQUVKLENBQUMsRUFBRSxFQUFFO0lBQ3hDQyxJQUFJLEdBQUcsRUFBRTtJQUNULEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHeUMsR0FBRyxJQUFLM0MsQ0FBQyxHQUFHRSxDQUFDLEdBQUlJLE9BQU8sQ0FBQ0YsTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtNQUN6RCxJQUFJLENBQUMsb0JBQW9CLENBQUNPLElBQUksQ0FBQ0gsT0FBTyxDQUFDTixDQUFDLEdBQUdFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO01BQ3ZERCxJQUFJLElBQUlLLE9BQU8sQ0FBQ04sQ0FBQyxHQUFHRSxDQUFDLENBQUM7TUFDdEIsSUFBSTBDLEdBQUcsR0FBR0YsSUFBSSxDQUFDekMsSUFBSSxDQUFDO01BQ3BCLElBQUkyQyxHQUFHO1FBQUU7UUFDVDtVQUNDQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0osS0FBSyxDQUFDLEdBQUcsQ0FBQztVQUNwQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSXZDLENBQUMsRUFBRXVDLENBQUMsRUFBRSxFQUFFO1lBQzVCLElBQUlHLEdBQUcsQ0FBQ0gsQ0FBQyxDQUFDLEVBQUU5QixNQUFNLENBQUNYLENBQUMsR0FBR3lDLENBQUMsQ0FBQyxHQUFHakMsUUFBUSxHQUFHb0MsR0FBRyxDQUFDSCxDQUFDLENBQUMsR0FBRzlDLFVBQVUsQ0FBQ21CLFVBQVUsQ0FBQzhCLEdBQUcsQ0FBQ0gsQ0FBQyxDQUFDLENBQUM7VUFDOUU7VUFDQTtRQUNEO0lBQ0Q7RUFDRDtFQUNBO0VBQ0EsS0FBSyxJQUFJekMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHVyxNQUFNLENBQUNQLE1BQU0sRUFBRUosQ0FBQyxFQUFFLEVBQUU7SUFDdkNXLE1BQU0sQ0FBQ1gsQ0FBQyxDQUFDLEdBQUdXLE1BQU0sQ0FBQ1gsQ0FBQyxDQUFDLENBQUNhLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO0VBQzNDO0VBQ0EsT0FBT0YsTUFBTSxDQUFDUSxJQUFJLENBQUNaLFFBQVEsQ0FBQztBQUM3Qjs7QUFFQTtBQUNBLFNBQVMyQixZQUFZLENBQUNHLEtBQUssRUFBRTtFQUM1QixJQUFJMUIsTUFBTSxHQUFHLEVBQUU7RUFDZixJQUFJa0MsSUFBSSxHQUFHLENBQUMsQ0FBQztFQUNiLEtBQUssSUFBSTdDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3FDLEtBQUssQ0FBQ2pDLE1BQU0sRUFBRUosQ0FBQyxFQUFFLEVBQUU7SUFDdEMsSUFBSThDLEdBQUcsR0FBRyxzQkFBUVQsS0FBSyxDQUFDckMsQ0FBQyxDQUFDLElBQUlxQyxLQUFLLENBQUNyQyxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDNkMsSUFBSSxDQUFDQyxHQUFHLENBQUMsRUFBRTtNQUNmbkMsTUFBTSxDQUFDSSxJQUFJLENBQUNzQixLQUFLLENBQUNyQyxDQUFDLENBQUMsQ0FBQztNQUNyQjZDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsSUFBSTtJQUNqQjtFQUNEO0VBQ0EsT0FBT25DLE1BQU07QUFDZDtBQUVBaEIsVUFBVSxDQUFDQyxTQUFTLEVBQUU7QUFDdEJELFVBQVUsQ0FBQ0wsSUFBSSxHQUFHQSxJQUFJO0FBQ3RCeUQsTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFDaEJyRCxVQUFVLEVBQUVBO0FBQ2IsQ0FBQyxDIiwiZmlsZSI6IjEwMy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaWN0ID0ge31cclxuXHJcbi8v5ou86Z+z6aaW5a2X5q+N5a2X5YW45paH5Lu2XHJcbmNvbnN0IHBpbnlpbl9kaWN0X2ZpcnN0bGV0dGVyID0ge1xyXG5cdGFsbDogXCJZRFlRU1hNV1pTU1hKQllNR0NDWlFQU1NRQllDRFNDRFFMRFlMWUJTU0pHWVpaSkpGS0NDTFpESFdEV1pKTEpQRllZTldKSlRNWUhaV1pIRkxaUFBRSEdTQ1lZWU5KUVlYWEdKSEhTRFNKTktLVE1PTUxDUlhZUFNOUVNFQ0NRWkdHTExZSkxNWVpaU0VDWUtZWUhRV0pTU0dHWVhZWllKV1dLREpIWUNITVlYSlRMWEpZUUJZWFpMRFdSREpSV1lTUkxEWkpQQ0JaSkpCUkNGVExFQ1pTVFpGWFhaSFRSUUhZQkRMWUNaU1NZTU1SRk1ZUVpQV1dKSllGQ1JXRkRGWlFQWUREV1lYS1lKQVdKRkZYWVBTRlRaWUhIWVpZU1dDSllYU0NMQ1hYV1paWE5CR05OWEJYTFpTWlNCU0dQWVNZWkRITURaQlFCWkNXRFpaWVlUWkhCVFNZWUJaR05UTlhRWVdRU0tCUEhITFhHWUJGTUpFQkpISEdRVEpDWVNYU1RLWkhMWUNLR0xZU01aWFlBTE1FTERDQ1hHWllSSlhTRExUWVpDUUtDTk5KV0hKVFpaQ1FMSlNUU1RCTlhCVFlYQ0VRWEdLV0pZRkxaUUxZSFlYU1BTRlhMTVBCWVNYWFhZREpDWllMTExTSlhGSEpYUEpCVEZGWUFCWVhCSFpaQkpZWkxXTENaR0dCVFNTTURUSlpYUFRIWVFUR0xKU0NRRlpLSlpKUU5MWldMU0xIRFpCV0pOQ0paWVpTUVFZQ1FZUlpDSkpXWUJSVFdQWUZUV0VYQ1NLRFpDVEJaSFlaWllZSlhaQ0ZGWlpNSllYWFNEWlpPVFRCWkxRV0ZDS1NaU1hGWVJMTllKTUJEVEhKWFNRUUNDU0JYWVlUU1lGQlhEWlRHQkNOU0xDWVpaUFNBWllaWlNDSkNTSFpRWURYTEJQSkxMTVFYVFlEWlhTUUpUWlBYTENHTFFUWldKQkhDVFNZSlNGWFlFSkpUTEJHWFNYSk1ZSlFRUEZaQVNZSk5UWURKWEtKQ0RKU1pDQkFSVERDTFlKUU1XTlFOQ0xMTEtCWUJaWlNZSFFRTFRXTENDWFRYTExaTlRZTE5FV1laWVhDWlhYR1JLUk1UQ05ETkpUU1lZU1NEUURHSFNEQkpHSFJXUlFMWUJHTFhITEdUR1hCUUpEWlBZSlNKWUpDVE1STllNR1JaSkNaR0pNWk1HWE1QUllYS0pOWU1TR01aSllNS01GWE1MRFRHRkJIQ0pIS1lMUEZNRFhMUUpKU01UUUdaU0pMUURMREdKWUNBTENNWkNTREpMTE5YREpGRkZGSkNaRk1aRkZQRktIS0dEUFNYS1RBQ0pESEhaRERDUlJDRlFZSktRQ0NXSkRYSFdKTFlMTFpHQ0ZDUURTTUxaUEJKSlBMU0JDSkdHRENLS0RFWlNRQ0NLSkdDR0tESlRKRExaWUNYS0xRU0NHSkNMVEZQQ1FDWkdXUEpEUVlaSkpCWUpIU0pEWldHRlNKR1pLUUNDWkxMUFNQS0pHUUpIWlpMSlBMR0pHSkpUSEpKWUpaQ1pNTFpMWVFCR0pXTUxKS1haRFpOSlFTWVpNTEpMTEpLWVdYTUtKTEhTS0pHQk1DTFlZTUtYSlFMQk1MTEtNRFhYS1dZWFlTTE1MUFNKUVFKUVhZWEZKVEpEWE1YWExMQ1hRQlNZSkJHV1lNQkdHQkNZWFBKWUdQRVBGR0RKR0JIQk5TUUpZWkpLSktIWFFGR1FaS0ZIWUdLSERLTExTREpRWFBRWUtZQk5RU1hRTlNaU1dIQlNYV0hYV0JaWlhETU5TSkJTQktCQlpLTFlMWEdXWERSV1lRWk1ZV1NKUUxDSlhYSlhLSkVRWFNDWUVUTFpITFlZWVNEWlBBUVlaQ01UTFNIVFpDRllaWVhZTEpTRENKUUFHWVNMQ1FMWVlZU0hNUlFRS0xEWFpTQ1NTU1lEWUNKWVNGU0pCRlJTU1pRU0JYWFBYSllTRFJDS0dKTEdES1pKWkJES1RDU1lRUFlIU1RDTERKREhNWE1DR1hZWkhKRERUTUhMVFhaWFlMWU1PSFlKQ0xUWUZCUVFYUEZCREZISFRLU1FIWllZV0NOWFhDUldIT1dHWUpMRUdXRFFDV0dGSllDU05UTVlUT0xCWUdXUVdFU0pQV05NTFJZRFpTWlRYWVFQWkdDV1hITkdQWVhTSE1ZUUpYWlREUFBCRllIWkhUSllGRFpXS0dLWkJMRE5UU1hIUUVFR1paWUxaTU1aWUpaR1haWEtIS1NUWE5YWFdZTFlBUFNUSFhEV0haWU1QWEFHS1lEWEJITkhYS0RQSk5NWUhZTFBNR09DU0xOWkhLWFhMUFpaTEJNTFNGQkhIR1lHWVlHR0JIU0NZQVFUWVdMWFRaUUNFWllEUURRTU1IVEtMTFNaSExTSlpXRllIUVNXU0NXTFFBWllOWVRMU1hUSEFaTktaWlNaWkxBWFhaV1dDVEdRUVRERFlaVENDSFlRWkZMWFBTTFpZR1BaU1pOR0xORFFUQkRMWEdUQ1RBSkRLWVdOU1laTEpISFpaQ1dOWVlaWVdNSFlDSEhZWEhKS1pXU1hIWllYTFlTS1FZU1BTTFlaV01ZUFBLQllHTEtaSFRZWEFYUVNZU0hYQVNNQ0hLRFNDUlNXSlBXWFNHWkpMV1dTQ0hTSkhTUU5IQ1NFR05EQVFUQkFBTFpaTVNTVERRSkNKS1RTQ0pBWFBMR0dYSEhHWFhaQ1hQRE1NSExER1RZQllTSk1YSE1SQ1BYWEpaQ0taWFNITUxRWFhUVEhYV1pGS0hDQ1pEWVRDSllYUUhMWERIWVBKUVhZTFNZWURaT1pKTllYUUVaWVNRWUFZWFdZUERHWEREWFNQUFlaTkRMVFdSSFhZRFhaWkpIVENYTUNaTEhQWVlZWU1IWkxMSE5YTVlMTExNRENQUFhITVhES1lDWVJETFRYSkNISFpaWFpMQ0NMWUxOWlNIWkpaWkxOTlJMV0hZUVNOSkhYWU5UVFRLWUpQWUNISFlFR0tDVFRXTEdRUkxHR1RHVFlHWUhQWUhZTFFZUUdDV1lRS1BZWVlUVFRUTEhZSExMVFlUVFNQTEtZWlhHWldHUFlEU1NaWkRRWFNLQ1FOTUpKWlpCWFlRTUpSVEZGQlRLSFpLQlhMSkpLRFhKVExCV0ZaUFBUS1FUWlRHUERHTlRQSllGQUxRTUtHWEJEQ0xaRkhaQ0xMTExBRFBNWERKSExDQ0xHWUhEWkZHWURER0NZWUZHWURYS1NTRUJESFlLREtES0hOQVhYWUJQQllZSFhaUUdBRkZRWUpYRE1MSkNTUVpMTFBDSEJTWEdKWU5EWUJZUVNQWldKTFpLU0REVEFDVEJYWkRZWllQSlpRU0pOS0tUS05KREpHWVlQR1RMRllRS0FTRE5UQ1lIQkxXRFpIQkJZRFdKUllHS1pZSEVZWUZKTVNEVFlGWkpKSEdDWFBMWEhMRFdYWEpLWVRDWUtTU1NNVFdDVFRRWkxQQlNaRFpXWlhHWkFHWUtUWVdYTEhMU1BCQ0xMT1FNTVpTU0xDTUJKQ1NaWktZRENaSkdRUURTTUNZVFpRUUxXWlFaWFNTRlBUVEZRTUREWkRTSERURFdGSFREWVpKWVFKUUtZUEJESllZWFRMSkhEUlFYWFhIQVlESFJKTEtMWVRXSExMUkxMUkNYWUxCV1NSU1paU1lNS1paSEhLWUhYS1NNRFNZRFlDSlBCWkJTUUxGQ1hYWE5YS1hXWVdTRFpZUU9HR1FNTVlIQ0RaVFRGSllZQkdTVFRUWUJZS0pESEtZWEJFTEhUWVBKUU5GWEZEWUtaSFFLWkJZSlRaQlhIRkRYS0RBU1dUQVdBSkxEWUpTRkhCTEROTlROUUpUSk5DSFhGSlNSRldIWkZNRFJZSllKV1pQREpLWllKWU1QQ1laTllOWEZCWVRGWUZXWUdEQk5aWlpETllUWFpFTU1RQlNRRUhYRlpNQk1GTFpaU1JYWU1KR1NYV1pKU1BSWURKU0pHWEhKSkdMSkpZTlpaSlhIR1hLWU1MUFlZWUNYWVRXUVpTV0hXTFlSSkxQWFNMU1hNRlNXV0tMQ1ROWE5ZTlBTSlNaSERaRVBUWE1ZWVdYWVlTWVdMWEpRWlFYWkRDTEVFRUxNQ1BKUENMV0JYU1FIRldXVEZGSlROUUpISlFEWEhXTEJZWk5GSkxBTEtZWUpMRFhISFlDU1RZWVdOUkpZWFlXVFJNRFJRSFdRQ01GSkRZWk1ITVlZWEpXTVlaUVpYVExNUlNQV1dDSEFRQlhZR1pZUFhZWVJSQ0xNUFlNR0tTSlNaWVNSTVlKU05YVFBMTkJBUFBZUFlMWFlZWktZTkxEWllKWkNaTk5MTVpISEFSUU1QR1dRVFpNWFhNTExIR0RaWFlIWEtZWFlDSk1GRllZSEpGU0JTU1FMWFhORFlDQU5OTVRDSkNZUFJSTllUWVFOWVlNQk1TWE5ETFlMWVNMSlJMWFlTWFFNTExZWkxaSkpKS1laWkNTRkJaWFhNU1RCSkdOWFlaSExYTk1DV1NDWVpZRlpMWEJSTk5OWUxCTlJUR1pRWVNBVFNXUllIWUpaTVpESFpHWkRXWUJTU0NTS1hTWUhZVFhYR0NRR1haWlNIWVhKU0NSSE1LS0JYQ1pKWUpZTUtRSFpKRk5CSE1RSFlTTkpOWllCS05RTUNMR1FIV0xaTlpTV1hLSExKSFlZQlFMQkZDRFNYRExEU1BGWlBTS0pZWldaWFpERFhKU01NRUdKU0NTU01HQ0xYWEtZWVlMTllQV1dXR1lES1pKR0dHWkdHU1lDS05KV05KUENYQkpKVFFUSldEU1NQSlhaWE5aWFVNRUxQWEZTWFRMTFhDTEpYSkpMSlpYQ1RQU1dYTFlESExZUVJXSFNZQ1NRWVlCWUFZV0pKSlFGV1FDUVFDSlFHWEFMREJaWllKR0tHWFBMVFpZRlhKTFRQQURLWVFIUE1BVExDUERDS0JNVFhZQkhLTEVOWERMRUVHUURZTVNBV0haTUxKVFdZR1hMWVFaTEpFRVlZQlFRRkZOTFlYUkRTQ1RHSkdYWVlOS0xMWVFLQ0NUTEhKTFFNS0taR0NZWUdMTExKRFpHWURIWldYUFlTSkJaS0RaR1laWkhZV1lGUVlUWVpTWllFWlpMWU1ISkpIVFNNUVdZWkxLWVlXWkNTUktRWVRMVERYV0NUWUpLTFdTUVpXQkRDUVlOQ0pTUlNaSkxLQ0RDRFRMWlpaQUNRUVpaRERYWVBMWFpCUUpZTFpMTExRRERaUUpZSllKWllYTllZWU5ZSlhLWERBWldZUkRMSllZWVJKTFhMTERZWEpDWVdZV05RQ0NMREROWVlZTllDS0NaSFhYQ0NMR1pRSkdLV1BQQ1FRSllTQlpaWFlKU1FQWEpQWkJTQkRTRk5TRlBaWEhEV1pURFdQUFRGTFpaQlpETVlZUFFKUlNEWlNRWlNRWEJER0NQWlNXRFdDU1FaR01ESFpYTVdXRllCUERHUEhUTUpUSFpTTU1CR1pNQlpKQ0ZaV0ZaQkJaTVFDRk1CRE1DSlhMR1BOSkJCWEdZSFlZSkdQVFpHWk1RQlFUQ0dZWEpYTFdaS1lEUERZTUdDRlRQRlhZWlRaWERaWFRHS01UWUJCQ0xCSkFTS1lUU1NRWVlNU1pYRkpFV0xYTExTWkJRSkpKQUtMWUxYTFlDQ1RTWE1DV0ZLS0tCU1hMTExMSllYVFlMVEpZWVREUEpITkhOTktCWVFORlFZWVpCWVlFU1NFU1NHRFlIRkhXVENKQlNEWlpURkRNWEhDTkpaWU1RV1NSWUpEWkpRUERRQkJTVEpHR0ZCS0pCWFRHUUhOR1dKWEpHRExMVEhaSEhZWVlZWVlTWFdUWVlZQ0NCREJQWVBaWUNDWllKUFpZV0NCRExGV1pDV0pEWFhIWUhMSFdaWlhKVENaTENEUFhVSkNaWlpMWVhKSlRYUEhGWFdQWVdYWlBURFpaQkRaQ1lISkhNTFhCUVhTQllMUkRUR0pSUkNUVFRIWVRDWldNWEZZVFdXWkNXSldYSllXQ1NLWUJaU0NDVFpRTkhYTldYWEtIS0ZIVFNXT0NDSllCQ01QWlpZS0JOTlpQQlpISFpETFNZRERZVFlGSlBYWU5HRlhCWVFYQ0JIWENQU1hUWVpETUtZU05YU1hMSEtNWlhMWUhESEtXSFhYU1NLUVlISENKWVhHTEhaWENTTkhFS0RUR1pYUVlQS0RIRVhUWUtDTllNWVlZUEtRWVlZS1haTFRISlFUQllRSFhCTVlIU1FDS1dXWUxMSENZWUxOTkVRWFFXTUNGQkRDQ01MSkdHWERRS1RMWEtHTlFDREdaSldZSkpMWUhIUVRUVE5XQ0hNWENYV0hXU1pKWURKQ0NEQlFDREdETllYWlRIQ1FSWENCSFpUUUNCWFdHUVdZWUJYSE1CWU1ZUVRZRVhNUUtZQVFZUkdZWlNMRllLS1FIWVNTUVlTSEpHSkNOWEtaWUNYU0JYWVhIWVlMU1RZQ1hRVEhZU01HU0NQTU1HQ0NDQ0NNVFpUQVNNR1FaSkhLTE9TUVlMU1dUTVhTWVFLRFpMSlFRWVBMU1lDWlRDUVFQQkJRSlpDTFBLSFFaWVlYWERURERUU0pDWEZGTExDSFFYTUpMV0NKQ1hUU1BZQ1hORFRKU0hKV1hEUVFKU0tYWUFNWUxTSkhNTEFMWUtYQ1lZRE1OTURRTVhNQ1pOTkNZQlpLS1lGTE1DSENNTEhYUkNKSkhTWUxOTVRKWkdaR1lXSlhTUlhDV0pHSlFIUVpEUUpEQ0pKWktKS0dEWlFHSkpZSllMWFpYWENEUUhISEVZVE1ITEZTQkRKU1lZU0hGWVNUQ1pRTFBCRFJGUlpUWllLWVdIU1pZUUtXRFFaUktNU1lOQkNSWFFCSllGQVpQWlpFRFpDSllXQkNKV0hZSkJRU1pZV1JZU1pQVERLWlBGUEJOWlRLTFFZSEJCWlBOUFBUWVpaWUJRTllEQ1BKTU1DWUNRTUNZRlpaRENNTkxGUEJQTE5HUUpUQlRUTkpaUFpCQlpOSktMSlFZTE5CWlFIS1NKWk5HR1FTWlpLWVhTSFBaU05CQ0daS0REWlFBTlpISktEUlRMWkxTV0pMSlpMWVdUSk5ESlpKSFhZQVlOQ0JHVFpDU1NRTU5KUEpZVFlTV1haRktXSlFUS0hUWlBMQkhTTkpaU1laQldaWlpaTFNZTFNCSkhEV1dRUFNMTU1GQkpEV0FRWVpUQ0pUQk5OV1pYUVhDRFNMUUdEU0RQRFpISlRRUVBTV0xZWUpaTEdZWFlaTENUQ0JKVEtUWUNaSlRRS0JTSkxHTUdaRE1DU0dQWU5KWllRWVlLTlhSUFdTWlhNVE5DU1paWVhZQllIWVpBWFlXUUNKVExMQ0tKSlRKSEdEWERYWVFZWlpCWVdETFdRQ0dMWkdKR1FSUVpDWlNTQkNSUENTS1lEWk5YSlNRR1hTU0pNWUROU1RaVFBCRExUS1pXWFFXUVRaRVhOUUNaR1dFWktTU0JZQlJUU1NTTENDR0JQU1pRU1pMQ0NHTExMWlhIWlFUSENaTVFHWVpRWk5NQ09DU1pKTU1aU1FQSllHUUxKWUpQUExEWFJHWllYQ0NTWEhTSEdUWk5MWldaS0pDWFRDRkNKWExCTVFCQ1paV1BRRE5IWExKQ1RIWVpMR1lMTkxTWlpQQ1hEU0NRUUhKUUtTWFpQQkFKWUVNU01KVFpEWExDSllSWVlOV0pCTkdaWlRNSlhMVEJTTFlSWlBZTFNTQ05YUEhMTEhZTExRUVpRTFhZTVJTWUNYWkxNTUNaTFRaU0RXVEpKTExOWkdHUVhQRlNLWUdZR0hCRlpQREtNV0dIQ1hNU0dEWEpNQ0paRFlDQUJYSkRMTkJDRFFZR1NLWURRVFhESkpZWE1TWlFBWkRaRlNMUVhZSlNKWllMQlRYWFdYUVFaQkpaVUZCQkxZTFdEU0xKSFhKWVpKV1RESkNaRlFaUVpaRFpTWFpaUUxaQ0RaRkpIWVNQWU1QUVpNTFBQTEZGWEpKTlpaWUxTSkVZUVpGUEZaS1NZV0pKSkhSREpaWlhUWFhHTEdIWURYQ1NLWVNXTU1aQ1dZQkFaQkpLU0hGSEpDWE1IRlFIWVhYWVpGVFNKWVpGWFlYUFpMQ0hNWk1CWEhaWlNYWUZZTU5DV0RBQkFaTFhLVENTSEhYS1hKSlpKU1RIWUdYU1hZWUhISEpXWEtaWFNTQlpaV0hISENXVFpaWlBKWFNOWFFRSkdaWVpZV0xMQ1dYWkZYWFlYWUhYTUtZWVNXU1FNTkxOQVlDWVNQTUpLSFdDUUhZTEFKSk1aWEhNTUNOWkhCSFhDTFhUSlBMVFhZSkhEWVlMVFRYRlNaSFlYWFNKQkpZQVlSU01YWVBMQ0tEVVlITFhSTE5MTFNUWVpZWVFZR1lISFNDQ1NNWkNUWlFYS1lRRlBZWVJQRkZMS1FVTlRTWkxMWk1XV1RDUVFZWldUTExNTE1QV01CWlNTVFpSQlBERFRMUUpKQlhaQ1NSWlFRWUdXQ1NYRldaTFhDQ1JTWkRaTUNZR0dEWlFTR1RKU1dMSk1ZTU1aWUhGQkpER1lYQ0NQU0hYTlpDU0JTSllKR0pNUFBXQUZGWUZOWEhZWlhaWUxSRU1aR1pDWVpTU1pETExKQ1NRRk5YWktQVFhaR1hKSkdGTVlZWVNOQlRZTEJOTEhQRlpEQ1lGQk1HUVJSU1NTWlhZU0dUWlJOWURaWkNER1BKQUZKRlpLTlpCTENaU1pQU0dDWUNKU1pMTUxSU1pCWlpMRExTTExZU1hTUVpRTFlYWkxTS0tCUlhCUkJaQ1lDWFpaWkVFWUZHS0xaTFlZSEdaU0daTEZKSEdUR1dLUkFBSllaS1pRVFNTSEpKWERDWVpVWUpMWllSWkRRUUhHSlpYU1NaQllLSlBCRlJUSlhMTEZRV0pIWUxRVFlNQkxQWkRYVFpZR0JESFpaUkJHWEhXTkpUSlhMS1NDRlNNV0xTRFFZU0pUWEtaU0NGV0pMQlhGVFpMTEpaTExRQkxTUU1RUUNHQ1pGUEJQSFpDWkpMUFlZR0dEVEdXRENGQ1pRWVlZUVlTU0NMWFpTS0xaWlpHRkZDUU5XR0xIUVlaSkpDWkxRWlpZSlBKWlpCUERDQ01ISkdYRFFER0RMWlFNRkdQU1lUU0RZRldXREpaSllTWFlZQ1pDWUhaV1BCWUtYUllMWUJIS0pLU0ZYVFpKTU1DS0hMTFROWVlNU1lYWVpQWUpRWUNTWUNXTVRKSktRWVJITExRWFBTR1RMWVlDTEpTQ1BYSllaRk5NTFJHSkpUWVpCWFlaTVNKWUpISEZaUU1TWVhSU1pDV1RMUlRRWlNTVEtYR1FLR1NQVEdDWk5KU0pDUUNYSE1YR0daVFFZREpLWkRMQlpTWEpMSFlRR0dHVEhRU1pQWUhKSEhHWVlHS0dHQ1dKWlpZTENaTFhRU0ZUR1pTTExMTUxKU0tDVEJMTFpaU1pNTU5ZVFBaU1hRSEpDSllRWFlaWFpRWkNQU0hLWlpZU1hDREZHTVdRUkxMUVhSRlpUTFlTVENUTUpDWEpKWEhKTlhUTlJaVFpGUVlIUUdMTEdDWFNaU0pESkxKQ1lEU0pUTE5ZWEhTWlhDR0paWVFQWUxGSERKU0JQQ0NaSEpKSlFaSlFEWUJTU0xMQ01ZVFRNUVRCSEpRTk5ZR0tZUlFZUU1aR0NKS1BEQ0dNWVpIUUxMU0xMQ0xNSE9MWkdEWVlGWlNMSkNRWkxZTFpRSkVTSE5ZTExKWEdKWExZU1lZWVhOQlpMSlNTWkNRUUNKWUxMWkxUSllMTFpMTEJOWUxHUUNIWFlZWE9YQ1hRS1lKWFhYWUtMWFNYWFlRWENZS1FYUUNTR1lYWFlRWFlHWVRRT0hYSFhQWVhYWFVMQ1lFWUNIWlpDQldRQkJXSlFaU0NTWlNTTFpZTEtERVNKWldNWU1DWVRTRFNYWFNDSlBRUVNRWUxZWVpZQ01ESkRaWVdDQlRKU1lESktDWURESkxCREpKU09EWllTWVhRUVlYREhIR1FRWVFIRFlYV0dNTU1BSkRZQkJCUFBCQ01VVVBMSlpTTVRYRVJYSk1IUU5VVFBKRENCU1NNU1NTVEtKVFNTTU1UUkNQTFpTWk1MUURTRE1KTVFQTlFEWENGWU5CRlNEUVhZWEhZQVlLUVlERExRWVlZU1NaQllEU0xOVEZRVFpRUFpNQ0hESENaQ1dGRFhUTVlRU1BIUVlZWFNSR0pDV1RKVFpaUU1HV0pKVEpIVFFKQkJIV1pQWFhIWVFGWFhRWVdZWUhZU0NEWURISFFNTk1UTVdDUEJTWlBQWlpHTE1aRk9MTENGV0hNTVNKWlRUREhaWllGRllUWlpHWllTS1lKWFFZSlpRQkhNQlpaTFlHSEdGTVNIUFpGWlNOQ0xQQlFTTkpYWlNMWFhGUE1UWUpZR0JYTExETFhQWkpZWkpZSEhaQ1lXSEpZTFNKRVhGU1paWVdYS1pKTFVZRFRNTFlNUUpQV1hZSFhTS1RRSkVaUlBYWFpISE1IV1FQV1FMWUpKUUpKWlNaQ1BISkxDSEhOWEpMUVdaSkhCTVpZWEJESEhZUFpMSExITEdGV0xDSFlZVExISlhDSk1TQ1BYU1RLUE5IUVhTUlRZWFhURVNZSkNUTFNTTFNURExMTFdXWUhESFJKWlNGR1hUU1lDWllOWUhUREhXSlNMSFRaRFFESlpYWFFIR1lMVFpQSENTUUZDTE5KVENMWlBGU1RQRFlOWUxHTUpMTFlDUUhZU1NIQ0hZTEhRWVFUTVpZUEJZV1JGUVlLUVNZU0xaRFFKTVBYWVlTU1JIWkpOWVdUUURGWkJXV1RXV1JYQ1dIR1lIWE1LTVlZWVFNU01aSE5HQ0VQTUxRUU1UQ1dDVE1NUFhKUEpKSEZYWVlaU1haSFRZQk1TVFNZSlRUUVFRWVlMSFlOUFlRWkxDWVpIWldTTVlMS0ZKWExXR1hZUEpZVFlTWVhZTVpDS1RUV0xLU01aU1lMTVBXTFpXWFdRWlNTQVFTWVhZUkhTU05UU1JBUFhDUFdDTUdEWEhYWkRaWUZKSEdaVFRTQkpIR1laU1pZU01ZQ0xMTFhCVFlYSEJCWkpLU1NETUFMWEhZQ0ZZR01RWVBKWUNRWEpMTExKR1NMWkdRTFlDSkNDWk9UWVhNVE1UVExMV1RHUFhZTVpNS0xQU1paWlhIS1FZU1hDVFlKWllIWFNIWVhaS1hMWldQU1FQWUhKV1BKUFdYUVFZTFhTREhNUlNMWlpZWldUVENZWFlTWlpTSEJTQ0NTVFBMV1NTQ0pDSE5MQ0dDSFNTUEhZTEhGSEhYSlNYWUxMTllMU1pESFpYWUxTWExXWllLQ0xEWUFYWkNNRERZU1BKVFFKWkxOV1FQU1NTV0NUU1RTWkxCTE5YU01OWVlNSlFCUUhSWldUWVlEQ0hRTFhLUFpXQkdRWUJLRkNNWldQWkxMWVlMU1pZRFdIWFBTQkNNTEpCU0NHQkhYTFFIWVJMSlhZU1dYV1haU0xERkhMU0xZTkpMWllGTFlKWUNEUkpMRlNZWkZTTExDUVlRRkdKWUhZWFpMWUxNU1RESkNZSEJaTExOV0xYWFlHWVlIU01HREhYWEhITFpaSlpYQ1paWkNZUVpGTkdXUFlMQ1BLUFlZUE1DTFFLREdYWkdHV1FCRFhaWktaRkJYWExaWEpUUEpQVFRCWVRTWlpEV1NMQ0haSFNMVFlYSFFMSFlYWFhZWVpZU1dUWFpLSExYWlhaUFlIR0NIS0NGU1lIVVRKUkxYRkpYUFRaVFdIUExZWEZDUkhYU0hYS1lYWFlIWlFEWFFXVUxIWUhNSlRCRkxLSFRYQ1dISkZXSkNGUFFSWVFYQ1lZWVFZR1JQWVdTR1NVTkdXQ0hLWkRYWUZMWFhISkpCWVpXVFNYWE5DWUpKWU1TV1pKUVJNSFhaV0ZRU1lMWkpaR0JIWU5TTEJHVFRDU1lCWVhYV1hZSFhZWVhOU1FZWE1RWVdSR1lRTFhCQlpMSlNZTFBTWVRKWllIWVpBV0xST1JKTUtTQ1pKWFhYWVhDSERZWFJZWFhKRFRTUUZYTFlMVFNGRllYTE1UWUpNSlVZWVlYTFRaQ1NYUVpRSFpYTFlZWFpIRE5CUlhYWEpDVFlITEJSTE1CUkxMQVhLWUxMTEpMWVhYTFlDUllMQ0pUR0pDTVRMWkxMQ1laWlBaUENZQVdISkpGWUJEWVlaU01QQ0taRFFZUVBCUENKUERDWVpNRFBCQ1lZRFlDTk5QTE1UTUxSTUZNTUdXWVpCU0pHWUdTTVpRUVFaVFhNS1FXR1hMTFBKR1pCUUNESkpKRlBLSktDWEJMSk1TV01EVFFKWExETFBQQlhDV1JDUUZCRlFKQ1pBSFpHTVlLUEhZWUhaWUtOREtaTUJQSllYUFhZSExGUE5ZWUdYSkRCS1hOWEhKTVpKWFNUUlNUTERYU0taWVNZQlpYSkxYWVNMQlpZU0xIWEpQRlhQUU5CWUxMSlFLWUdaTUNZWlpZTUNDU0xDTEhaRldGV1lYWk1XU1hUWU5YSkhQWVlNQ1lTUE1IWVNNWURZU0hRWVpDSE1KSk1aQ0FBR0NGSkJCSFBMWVpZTFhYU0RKR1hESEtYWFRYWE5CSFJNTFlKU0xUWE1SSE5MWFFKWFlaTExZU1dRR0RMQkpIRENHSllRWUNNSFdGTUpZQk1CWUpZSldZTURQV0hYUUxEWUdQREZYWEJDR0pTUENLUlNTWVpKTVNMQlpaSkZMSkpKTEdYWkdZWFlYTFNaUVlYQkVYWVhIR0NYQlBMRFlIV0VUVFdXQ0pNQlRYQ0hYWVFYTExYRkxZWExMSkxTU0ZXRFBaU01ZSkNMTVdZVENaUENIUUVLQ1FCV0xDUVlEUExRUFBRWlFGSlFESkhZTU1DWFRYRFJNSldSSFhDSlpZTFFYRFlZTkhZWUhSU0xTUlNZV1daSllNVExUTExHVFFDSlpZQUJUQ0taQ0pZQ0NRTEpaUVhBTE1aWUhZV0xXRFhaWFFETExRU0hHUEpGSkxKSEpBQkNRWkRKR1RLSFNTVENZSkxQU1daTFhaWFJXR0xETFpSTFpYVEdTTExMTFpMWVhYV0dEWllHQkRQSFpQQlJMV1NYUUJQRkRXT0ZNV0hMWVBDQkpDQ0xETUJaUEJaWkxDWVFYTERPTVpCTFpXUERXWVlHRFNUVEhDU1FTQ0NSU1NTWVNMRllCRk5UWUpTWkRGTkRQREhEWlpNQkJMU0xDTVlGRkdUSkpRV0ZUTVRQSldGTkxCWkNNTUpUR0JEWkxRTFBZRkhZWU1KWUxTRENIRFpKV0pDQ1RMSkNMRFRMSkpDUEREU1FEU1NaWUJOREJKTEdHSlpYU1hOTFlDWUJKWFFZQ0JZTFpDRlpQUEdLQ1haRFpGWlRKSkZKU0pYWkJOWllKUVRUWUpZSFRZQ1pIWU1ESlhUVE1QWFNQTFpDRFdTTFNIWFlQWkdURk1MQ0pUWUNCUE1HREtXWUNZWkNEU1paWUhGTFlDVFlHV0hLSllZTFNKQ1hHWVdKQ0JMTENTTkREQlRaQlNDTFlaQ1paU1NRRExMTVFZWUhGU0xRTExYRlRZSEFCWEdXTllXWVlQTExTRExETExCSkNZWEpaTUxITEpEWFlZUVlURExMTEJVR0JGREZCQlFKWlpNRFBKSEdDTEdNSkpQR0FFSEhCV0NRWEFYSEhIWkNIWFlQSEpBWEhMUEhKUEdQWkpRQ1FaR0pKWlpVWkRNUVlZQlpaUEhZSFlCV0hBWllKSFlLRkdEUEZRU0RMWk1MSlhLWEdBTFhaREFHTE1ER1hNV1pRWVhYRFhYUEZETU1TU1lNUEZNRE1NS1hLU1laWVNIRFpLWFNZU01NWlpaTVNZRE5aWkNaWEZQTFNUTVpETk1YQ0tKTVpUWVlNWk1aWk1TWEhIRENaSkVNWFhLTEpTVExXTFNRTFlKWkxMWkpTU0RQUE1ITkxaSkNaWUhNWFhIR1pDSk1ESFhUS0dSTVhGV01DR01XS0RUS1NYUU1NTUZaWllES01TQ0xDTVBDR01IU1BYUVBaRFNTTENYS1lYVFdMV0pZQUhaSkdaUU1DU05YWVlNTVBNTEtKWE1ITE1MUU1YQ1RLWk1KUVlTWkpTWVNaSFNZSlpKQ0RBSlpZQlNEUUpaR1daUVFYRktETVNESkxGV0VIS1pRS0pQRVlQWllTWkNEV1lKRkZNWlpZTFRURFpaRUZNWkxCTlBQTFBMUEVQU1pBTExUWUxLQ0tRWktHRU5RTFdBR1lYWURQWExIU1hRUVdRQ1FYUUNMSFlYWE1MWUNDV0xZTVFZU0tHQ0hMQ0pOU1pLUFlaS0NRWlFMSlBETURaSExBU1hMQllEV1FMV0ROQlFDUllERFpUSllCS0JXU1pEWERUTlBKRFRDVFFERlhRUU1HTlhFQ0xUVEJLUFdTTENUWVFMUFdZWlpLTFBZR1pDUVFQTExLQ0NZTFBRTVpDWlFDTEpTTFFaREpYTERESFBaUURMSkpYWlFEWFlaUUtaTEpDWVFEWUpQUFlQUVlLSllSTVBDQllNQ1hLTExaTExGUVBZTExMTUJTR0xDWVNTTFJTWVNRVE1YWVhaUVpGRFpVWVNZWlRGRk1aWlNNWlFIWlNTQ0NNTFlYV1RQWkdYWkpHWkdTSlNHS0RESFRRR0daTExCSkRaTENCQ0hZWFlaSFpGWVdYWVpZTVNEQlpaWUpHVFNNVEZYUVlYUVNUREdTTE5YRExSWVpaTFJZWUxYUUhUWFNSVFpOR1pYQk5RUVpGTVlLTVpKQlpZTUtCUE5MWVpQQkxNQ05RWVpaWlNKWkhKQ1RaS0hZWlpKUkRZWkhOUFhHTEZaVExLR0pUQ1RTU1lMTEdaUlpCQlFaWktMUEtMQ1pZU1NVWVhCSkZQTkpaWlhDRFdYWllKWFpaREpKS0dHUlNSSktNU01aSkxTSllXUVNLWUhRSlNYUEpaWlpMU05TSFJOWVBaVFdDSEtMUFNSWkxaWFlKUVhRS1lTSllDWlRMUVpZQkJZQldaUFFEV1dZWkNZVEpDSlhDS0NXREtLWlhTR0tEWlhXV1lZSlFZWVRDWVRETExYV0tDWktLTENDTFpDUVFEWkxRTENTRlFDSFFIU0ZTTVFaWkxOQkpKWkJTSkhUU1pEWVNKUUpQRExaQ0RDV0pLSlpaTFBZQ0dNWldESkpCU0pRWlNZWllISFhKUEJKWURTU1hEWk5DR0xRTUJUU0ZTQlBEWkRMWk5GR0ZKR0ZTTVBYSlFMTUJMR1FDWVlYQlFLREpKUVlSRktaVEpESENaS0xCU0RaQ0ZKVFBMTEpHWEhZWFpDU1NaWlhTVEpZR0tHQ0tHWU9RWEpQTFpQQlBHVEdZSlpHSFpRWlpMQkpMU1FGWkdLUVFKWkdZQ1pCWlFUTERYUkpYQlNYWFBaWEhZWllDTFdEWEpKSFhNRkRaUEZaSFFIUU1RR0tTTFlIVFlDR0ZSWkdOUVhDTFBETEJaQ1NDWlFMTEpCTEhCWkNZUFpaUFBEWU1aWlNHWUhDS0NQWkpHU0xKTE5TQ0RTTERMWEJNU1RMRERGSk1LREpESFpMWlhMU1pRUFFQR0pMTFlCRFNaR1FMQlpMU0xLWVlIWlRUTlRKWVFUWlpQU1pRWlRMTEpUWVlMTFFMTFFZWlFMQkRaTFNMWVlaWU1ERlNaU05ITFhaTkNaUVpQQldTS1JGQlNZWk1USEJMR0pQTUNaWkxTVExYU0hUQ1NZWkxaQkxGRVFITFhGTENKTFlMSlFDQlpMWkpISFNTVEJSTUhYWkhKWkNMWEZOQkdYR1RRSkNaVE1TRlpLSk1TU05YTEpLQkhTSlhOVE5MWkROVExNU0pYR1pKWUpDWlhZSllKV1JXV1FOWlRORkpTWlBaU0haSkZZUkRKU0ZTWkpaQkpGWlFaWkhaTFhGWVNCWlFMWlNHWUZUWkRDU1pYWkpCUU1TWktKUkhZSlpDS01KS0hDSEdUWEtYUUdMWFBYRlhUUlRZTFhKWEhEVFNKWEhKWkpYWldaTENRU0JUWFdYR1hUWFhIWEZUU0RLRkpIWllKRkpYUlpTRExMTFRRU1FRWlFXWlhTWVFUV0dXQlpDR1pMTFlaQkNMTVFRVFpIWlhaWExKRlJNWVpGTFhZU1FYWEpLWFJNUURaRE1NWVlCU1FCSEdaTVdGV1hHTVhMWlBZWVRHWllDQ0RYWVpYWVdHU1lKWVpOQkhQWkpTUVNZWFNYUlRGWVpHUkhaVFhTWlpUSENCRkNMU1lYWkxaUU1aTE1QTE1YWkpYU0ZMQllaTVlRSFhKU1hSWFNRWlpaU1NMWUZSQ1pKUkNSWEhIWlhRWURZSFhTSkpIWkNYWkJUWU5TWVNYSkJRTFBYWlFQWU1MWFpLWVhMWENKTENZU1hYWlpMWERMTExKSllIWlhHWUpXS0pSV1lIQ1BTR05SWkxGWldGWlpOU1hHWEZMWlNYWlpaQkZDU1lKREJSSktSREhIR1hKTEpKVEdYSlhYU1RKVEpYTFlYUUZDU0dTV01TQkNUTFFaWldMWlpLWEpNTFRNSllIU0REQlhHWkhETEJNWUpGUlpGU0dDTFlKQlBNTFlTTVNYTFNaSlFRSEpaRlhHRlFGUUJQWFpHWVlRWEdaVENRV1lMVExHV1NHV0hSTEZTRkdaSk1HTUdCR1RKRlNZWlpHWllaQUZMU1NQTUxQRkxDV0JKWkNMSkpNWkxQSkpMWU1RRE1ZWVlGQkdZR1laTUxZWkRYUVlYUlFRUUhTWVlZUVhZTEpUWVhGU0ZTTExHTlFDWUhZQ1dGSENDQ0ZYUFlMWVBMTFpZWFhYWFhLUUhIWFNISlpDRlpTQ1pKWENQWldISEhISEFQWUxRQUxQUUFGWUhYRFlMVUtNWlFHR0dEREVTUk5OWkxUWkdDSFlQUFlTUUpKSENMTEpUT0xOSlBaTEpMSFlNSEVZRFlEU1FZQ0RESEdaVU5EWkNMWllaTExaTlROWVpHU0xIU0xQSkpCREdXWFBDRFVUSkNLTEtDTFdLTExDQVNTVEtaWkROUU5UVExZWVpTU1lTU1paUllMSlFLQ1FESEhDUlhSWllER1JHQ1dDR1pRRkZGUFBKRlpZTkFLUkdZV1lRUFFYWEZLSlRTWlpYU1daRERGQkJYVEJHVFpLWk5QWlpQWlhaUEpTWkJNUUhLQ1lYWUxES0xKTllQS1lHSEdEWkpYWEVBSFBOWktaVFpDTVhDWE1NSlhOS1NaUU5NTkxXQldXWEpLWUhDUFNUTUNTUVRaSllYVFBDVFBEVE5OUEdMTExaU0pMU1BCTFBMUUhEVE5KTkxZWVJTWkZGSkZRV0RQSFpEV01SWkNDTE9EQVhOU1NOWVpSRVNUWUpXSllKREJDRlhOTVdUVEJZTFdTVFNaR1lCTEpQWEdMQk9DTEhQQ0JKTFRNWFpMSllMWlhDTFRQTkNMQ0tYVFBaSlNXQ1lYU0ZZU1pES05UTEJZSkNZSkxMU1RHUUNCWFJZWlhCWEtMWUxIWkxRWkxOWkNYV0paTEpaSk5DSkhYTU5aWkdKWlpYVFpKWFlDWVlDWFhKWVlYSkpYU1NTSlNUU1NUVFBQR1FUQ1NYV1pEQ1NZRlBURkJGSEZCQkxaSkNMWlpEQlhHQ1hMUVBYS0ZaRkxTWUxUVVdCTVFKSFNaQk1EREJDWVNDQ0xEWFlDRERRTFlKSldNUUxMQ1NHTEpKU1lGUFlZQ0NZTFRKQU5USkpQV1lDTU1HUVlZU1hEWFFNWkhTWlhQRlRXV1pRU1dRUkZLSkxaSlFRWUZCUlhKSEhGV0pKWllRQVpNWUZSSENZWUJZUVdMUEVYQ0NaU1RZUkxUVERNUUxZS01CQkdNWVlKUFJLWk5QQlNYWVhCSFlaREpETkdIUE1GU0dNV0ZaTUZRTU1CQ01aWkNKSkxDTlVYWVFMTUxSWUdRWkNZWFpMV0pHQ0pDR0dNQ0pORllaWkpIWUNQUlJDTVRaUVpYSEZRR1RKWENDSkVBUUNSSllIUExRTFNaREpSQkNRSFFEWVJIWUxZWEpTWU1IWllEV0xERlJZSEJQWURUU1NDTldCWEdMUFpNTFpaVFFTU0NQSk1YWFlDU0pZVFlDR0hZQ0pXWVJYWExGRU1XSk5NS0xMU1dUWEhZWVlOQ01NQ1dKRFFESlpHTExKV0pSS0hQWkdHRkxDQ1NDWk1DQkxUQkhCUUpYUURTUERKWlpHS0dMRlFZV0JaWVpKTFRTVERIUUhDVENCQ0hGTFFNUFdEU0hZWVRRV0NOWlpKVExCWU1CUERZWVlYU1FLWFdZWUZMWFhOQ1dDWFlQTUFFTFlLS0pNWlpaQlJYWVlRSkZMSlBGSEhIWVRaWlhTR1FRTUhTUEdEWlFXQldQSkhaSkRZU0NRV1pLVFhYU1FMWllZTVlTRFpHUlhDS0tVSkxXUFlTWVNDU1laTFJNTFFTWUxKWEJDWFRMV0RRWlBDWUNZS1BQUE5TWEZZWkpKUkNFTUhTWk1TWExYR0xSV0dDU1RMUlNYQlpHQlpHWlRDUExVSkxTTFlMWU1UWE1UWlBBTFpYUFhKVEpXVENZWVpMQkxYQlpMUU1ZTFhQR0hEU0xTU0RNWE1CRFpaU1hXSEFNTENaQ1BKTUNOSEpZU05TWUdDSFNLUU1aWlFETExLQUJMV0pYU0ZNT0NEWEpSUkxZUVpLSk1ZQllRTFlIRVRGSlpGUkZLU1JZWEZKVFdEU1hYU1lTUUpZU0xZWFdKSFNOTFhZWVhIQkhBV0hISlpYV01ZTEpDU1NMS1lEWlRYQlpTWUZEWEdYWkpLSFNYWFlCU1NYRFBZTlpXUlBUUVpDWkVOWUdDWFFGSllLSkJaTUxKQ01RUVhVT1hTTFlYWExZTExKRFpCVFlNSFBGU1RUUVFXTEhPS1lCTFpaQUxaWFFMSFpXUlJRSExTVE1ZUFlYSkpYTVFTSkZOQlhZWFlKWFhZUVlMVEhZTFFZRk1MS0xKVE1MTEhTWldLWkhMSk1MSExKS0xKU1RMUVhZTE1CSEhMTkxaWFFKSFhDRlhYTEhZSEpKR0JZWlpLQlhTQ1FESlFEU1VKWllZSFpISE1HU1hDU1lNWEZFQkNRV1dSQlBZWUpRVFlaQ1lRWVFRWllITVdGRkhHWkZSSkZDRFBYTlRRWVpQRFlLSEpMRlJaWFBQWFpEQkJHWlFTVExHREdZTENRTUxDSEhNRllXTFpZWEtKTFlQUUhTWVdNUVFHUVpNTFpKTlNRWEpRU1lKWUNCRUhTWEZTWlBYWldGTExCQ1lZSkRZVERUSFdaU0ZKTVFRWUpMTVFYWExMRFRUS0hIWUJGUFdUWVlTUVFXTlFXTEdXREVCWldDTVlHQ1VMS0pYVE1YTVlKU1hIWUJSV0ZZTVdGUlhZUU1YWVNaVFpaVEZZS01MREhRRFhXWVlOTENSWUpCTFBTWENYWVdMU1BSUkpXWEhRWVBIVFlETlhISE1NWVdZVFpDU1FNVFNTQ0NEQUxXWlRDUFFQWUpMTFFaWUpTV1hNWlpNTVlMTVhDTE1YQ1pNWE1aU1FUWlBQUVFCTFBHWFFaSEZMSkpIWVRKU1JYV1pYU0NDRExYVFlKRENRSlhTTFFZQ0xaWExaWlhNWFFSSk1IUkhaSkJITUZMSkxNTENMUU5MRFhaTExMUFlQU1lKWVNYQ1FRRENNUUpaWlhITlBOWFpNRUtNWEhZS1lRTFhTWFRYSllZSFdEQ1dEWkhRWVlCR1lCQ1lTQ0ZHUFNKTlpEWVpaSlpYUlpSUUpKWU1DQU5ZUkpUTERQUFlaQlNUSktYWFpZUEZEV0ZHWlpSUFlNVE5HWFpRQllYTkJVRk5RS1JKUVpNSkVHUlpHWUNMS1haRFNLS05TWEtDTEpTUEpZWVpMUVFKWUJaU1NRTExMS0pYVEJLVFlMQ0NEREJMU1BQRllMR1lEVFpKWVFHR0tRVFRGWlhCREtUWVlIWUJCRllUWVlCQ0xQRFlUR0RIUllSTkpTUFRDU05ZSlFIS0xMTFpTTFlEWFhXQkNKUVNQWEJQSlpKQ0pEWkZGWFhCUk1MQVpIQ1NORExCSkRTWkJMUFJaVFNXU0JYQkNMTFhYTFpESlpTSlBZTFlYWFlGVEZGRkJISkpYR0JZWEpQTU1NUFNTSlpKTVRMWVpKWFNXWFRZTEVEUVBKTVlHUVpKR0RKTFFKV0pRTExTSkdKR1lHTVNDTEpKWERUWUdKUUpRSkNKWkNKR0RaWlNYUUdTSkdHQ1hIUVhTTlFMWlpCWEhTR1pYQ1hZTEpYWVhZWURGUVFKSEpGWERIQ1RYSllSWFlTUVRKWFlFRllZU1NZWUpYTkNZWlhGWE1TWVNaWFlZU0NIU0hYWlpaR1paWkdGSkRMVFlMTlBaR1lKWVpZWVFaUEJYUUJEWlRaQ1pZWFhZSEhTUVhTSERIR1FISkhHWVdTWlRNWk1MSFlYR0VCVFlMWktRV1lUSlpSQ0xFS1lTVERCQ1lLUVFTQVlYQ0pYV1dHU0JISllaWURIQ1NKS1FDWFNXWEZMVFlOWVpQWkNDWkpRVFpXSlFEWlpaUVpMSkpYTFNCSFBZWFhQU1hTSEhFWlRYRlBUTFFZWlpYSFlUWE5DRlpZWUhYR05YTVlXWFRaU0pQVEhIR1lNWE1YUVpYVFNCQ1pZSllYWFRZWVpZUENRTE1NU1pNSlpaTExaWEdYWkFBSlpZWEpNWlhXRFhaU1haRFpYTEVZSkpaUUJIWldaWlpRVFpQU1haVERTWEpKSlpOWUFaUEhYWVlTUk5RRFRIWkhZWUtZSkhEWlhaTFNXQ0xZQlpZRUNXQ1lDUllMQ1hOSFpZRFpZRFlKREZSSkpIVFJTUVRYWVhKUkpIT0pZTlhFTFhTRlNGSlpHSFBaU1haU1pEWkNRWkJZWUtMU0dTSkhDWlNIREdRR1hZWkdYQ0hYWkpXWVFXR1lIS1NTRVFaWk5EWkZLV1lTU1RDTFpTVFNZTUNESEpYWFlXRVlYQ1pBWURNUFhNRFNYWUJTUU1KTVpKTVRaUUxQSllRWkNHUUhYSkhITFhYSExIRExESlFDTERXQlNYRlpaWVlTQ0hUWVRZWUJIRUNYSFlLR0pQWEhIWVpKRlhIV0hCRFpGWVpCQ0FQTlBHTllETVNYSE1NTU1BTVlOQllKVE1QWFlZTUNUSEpCWllGQ0dUWUhXUEhGVFdaWkVaU0JaRUdQRk1UU0tGVFlDTUhGTExIR1BaSlhaSkdaSllYWlNCQlFTQ1paTFpDQ1NUUEdYTUpTRlRDQ1pKWkRKWENZQlpMRkNKU1laRkdTWkxZQkNXWlpCWVpEWllQU1dZSlpYWkJEU1lVWExaWkJaRllHQ1pYQlpIWkZUUEJHWkdFSkJTVEdLRE1GSFlaWkpIWkxMWlpHSlFaTFNGREpTU0NCWkdQRExGWkZaU1pZWllaU1lHQ1hTTlhYQ0hDWlhUWlpMSkZaR1FTUVlYWkpRRENDWlRRQ0RYWkpZUUpRQ0hYWlRETEdTQ1haU1lRSlFUWldMUURRWlRRQ0hRUUpaWUVaWlpQQldLREpGQ0pQWlRZUFFZUVRUWU5MTUJES1RKWlBRWlFaWkZQWlNCTkpMR1lKRFhKRFpaS1pHUUtYRExQWkpUQ0pEUUJYREpRSlNUQ0tOWEJYWk1TTFlKQ1FNVEpRV1dDSlFOSk5MTExISkNXUVRCWlFZRFpDWlBaWkRaWUREQ1laWlpDQ0pUVEpGWkRQUlJUWlRKRENRVFFaRFRKTlBMWkJDTExDVFpTWEtKWlFaUFpMQlpSQlRKRENYRkNaREJDQ0pKTFRRUVBMRENHWkRCQlpKQ1FEQ0pXWU5MTFpZWkNDRFdMTFhXWkxYUlhOVFFRQ1pYS1FMU0dERlFURERHTFJMQUpKVEtVWU1LUUxMVFpZVERZWUNaR0pXWVhEWEZSU0tTVFFURU5RTVJLUVpISFFLRExEQVpGS1lQQkdHUFpSRUJaWllLWlpTUEVHSlhHWUtRWlpaU0xZU1lZWVpXRlFaWUxaWkxaSFdDSEtZUFFHTlBHQkxQTFJSSllYQ0NTWVlIU0ZaRllCWllZVEdaWFlMWENaV1hYWkpaQkxGRkxHU0tIWUpaRVlKSExQTExMTENaR1hEUlpFTFJIR0tMWlpZSFpMWVFTWlpKWlFMSlpGTE5CSEdXTENaQ0ZKWVNQWVhaTFpMWEdDQ1BaQkxMQ1lCQkJCVUJCQ0JQQ1JOTlpDWllSQkZTUkxEQ0dRWVlRWFlHTVFaV1RaWVRZSlhZRldURUhaWkpZV0xDQ05UWllKSlpERURQWkRaVFNZUUpIRFlNQkpOWUpaTFhUU1NUUEhOREpYWEJZWFFUWlFERFRKVERZWVRHV1NDU1pRRkxTSExHTEJDWlBIRExZWkpZQ0tXVFlUWUxCTllUU0RTWUNDVFlTWllZRUJIRVhIUURUV05ZR1lDTFhUU1pZU1RRTVlHWkFaQ0NTWlpEU0xaQ0xaUlFYWVlFTEpTQllNWFNYWlRFTUJCTExZWUxMWVREUVlTSFlNUlFXS0ZLQkZYTlhTQllDSFhCV0pZSFRRQlBCU0JXRFpZTEtHWlNLWUhYUVpKWEhYSlhHTkxKS1pMWVlDRFhMRllGR0hMSkdKWUJYUUxZQlhRUFFHWlRaUExOQ1lQWERKWVFZRFlNUkJFU0pZWUhLWFhTVE1YUkNaWllXWFlRWUJNQ0xMWVpIUVlaV1FYREJYQlpXWk1TTFBETVlTS0ZNWktMWkNZUVlDWkxRWEZaWllEUVpQWllHWUpZWk1aWERaRllGWVRUUVRaSEdTUENaTUxDQ1lUWlhKQ1lUSk1LU0xQWkhZU05aTExZVFBaQ1RaWkNLVFhESFhYVFFDWUZLU01RQ0NZWUFaSFRKUENZTFpMWUpCSlhUUE5ZTEpZWU5SWFNZTE1NTlhKU01ZQkNTWVNZTFpZTFhKSlFZTERaTFBRQkZaWkJMRk5EWFFLQ1pGWVdIR1FNUkRTWFlDWVRYTlFRSlpZWVBGWlhEWVpGUFJYRUpER1lRQlhSQ05GWVlRUEdIWUpEWVpYR1JIVEtZTE5XRFpOVFNNUEtMQlRIQlBZU1pCWlRKWlNaWkpUWVlYWlBIU1NaWkJaQ1pQVFFGWk1ZRkxZUFlCQkpRWFpNWFhESk1UU1lTS0tCSlpYSEpDS0xQU01LWUpaQ1hUTUxKWVhSWlpRU0xYWFFQWVpYTUtZWFhYSkNMSlBSTVlZR0FEWVNLUUxTTkRIWVpLUVhaWVpUQ0dIWlRMTUxXWllCV1NZQ1RCSEpISkZDV1pUWFdZVEtaTFhRU0hMWUpaSlhUTVBMUFlDR0xUQlpaVExaSkNZSkdEVENMS0xQTExRUEpNWlBBUFhZWkxLS1RLRFpDWlpCTlpEWURZUVpKWUpHTUNUWExUR1hTWkxNTEhCR0xLRldOV1pIRFhVSExGTUtZU0xHWERUV1dGUkpFSlpUWkhZRFhZS1NIV0ZaQ1FTSEtUTVFRSFRaSFlNSkRKU0tIWFpKWkJaWlhZTVBBR1FNU1RQWExTS0xaWU5XUlRTUUxTWkJQU1BTR1pXWUhUTEtTU1NXSFpaTFlZVE5YSkdNSlNaU1VGV05MU09aVFhHWExTQU1NTEJXTERTWllMQUtRQ1FDVE1ZQ0ZKQlNMWENMWlpDTFhYS1NCWlFDTEhKUFNRUExTWFhDS1NMTkhQU0ZRUVlUWFlKWkxRTERYWlFKWkRZWURKTlpQVFVaRFNLSkZTTEpIWUxaU1FaTEJUWFlER1RRRkRCWUFaWERaSFpKTkhIUUJZS05YSkpRQ1pNTExKWktTUExEWUNMQkJMWEtMRUxYSkxCUVlDWEpYR0NOTENRUExaTFpZSlRaTEpHWVpEWlBMVFFDU1hGRE1OWUNYR0JUSkRDWk5CR0JRWVFKV0dLRkhUTlBZUVpRR0JLUEJCWVpNVEpEWVRCTFNRTVBTWFRCTlBEWEtMRU1ZWUNKWU5aQ1RMRFlLWlpYRERYSFFTSERHTVpTSllDQ1RBWVJaTFBZTFRMS1hTTFpDR0dFWENMRlhMS0pSVExRSkFRWk5DTUJZREtLQ1hHTENaSlpYSkhQVERKSk1aUVlLUVNFQ1FaRFNISEFETUxaRk1NWkJHTlRKTk5MR0JZSkJSQlRNTEJZSkRaWExDSkxQTERMUENRREhMWFpMWUNCTENYWlpKQURKTE5aTU1TU1NNWUJIQlNRS0JIUlNYWEpNWFNEWk5aUFhMR0JSSFdHR0ZDWEdNU0tMTFRTSllZQ1FMVFNLWVdZWUhZV1hCWFFZV1BZV1lLUUxTUVBUTlRLSFFDV0RRS1RXUFhYSENQVEhUV1VNU1NZSEJXQ1JXWEhKTUtNWk5HV1RNTEtGR0hLSllMU1lZQ1hXSFlFQ0xRSEtRSFRUUUtIRlpMRFhRV1laWVlERVNCUEtZUlpQSkZZWVpKQ0VRRFpaRExBVFpCQkZKTExDWERMTUpTU1hFR1lHU0pRWENXQlhTU1pQRFlaQ1hETllYUFBaWURMWUpDWlBMVFhMU1hZWllSWENZWVlEWUxXV05aU0FISlNZUVlIR1lXV0FYVEpaREFYWVNSTFREUFNTWVlGTkVKRFhZWkhMWExMTFpRWlNKTllRWVFRWFlKR0haR1pDWUpDSFpMWUNEU0hXU0hKWllKWENMTE5YWkpKWVlYTkZYTVdGUFlMQ1lMTEFCV0RESFdEWEpNQ1haVFpQTUxRWkhTRkhaWU5aVExMRFlXTFNMWEhZTU1ZTE1CV1dLWVhZQURUWFlMTERKUFlCUFdVWEpNV01MTFNBRkRMTFlGTEJISEhCUVFMVFpKQ1FKTERKVEZGS01NTUJZVEhZR0RDUVJERFdSUUpYTkJZU05XWkRCWVlUQkpIUFlCWVRUSlhBQUhHUURRVE1ZU1RRWEtCVFpQS0pMWlJCRVFRU1NNSkpCREpPVEdUQlhQR0JLVExIUVhKSkpDVEhYUURXSkxXUkZXUUdXU0hDS1JZU1dHRlRHWUdCWFNEV0RXUkZIV1lUSkpYWFhKWVpZU0xQWVlZUEFZWEhZRFFLWFNIWFlYR1NLUUhZV0ZERERQUExDSkxRUUVFV1hLU1lZS0RZUExUSlRIS0pMVENZWUhISlRUUExUWlpDRExUSFFLWlhRWVNURUVZV1lZWllYWFlZU1RUSktMTFBaTUNZSFFHWFlIU1JNQlhQTExOUVlEUUhYU1hYV0dEUUJTSFlMTFBKSkpUSFlKS1lQUFRIWVlLVFlFWllFTk1EU0hMQ1JQUUZER0ZYWlBTRlRMSlhYSkJTV1lZU0tTRkxYTFBQTEJCQkxCU0ZYRllaQlNKU1NZTFBCQkZGRkZTU0NKRFNUWlNYWlJZWVNZRkZTWVpZWkJKVEJDVFNCU0RIUlRKSkJZVENYWUpFWUxYQ0JORUJKRFNZWFlLR1NKWkJYQllURlpXR0VOWUhIVEhaSEhYRldHQ1NUQkdYS0xTWFlXTVRNQllYSlNUWlNDRFlRUkNZVFdYWkZITVlNQ1hMWk5TREpUVFRYUllDRllKU0JTRFlFUlhKTEpYQkJERVlOSkdIWEdDS0dTQ1lNQkxYSk1TWk5TS0dYRkJOQlBUSEZKQUFGWFlYRlBYTVlQUURUWkNYWlpQWFJTWVdaRExZQkJLVFlRUFFKUFpZUFpKWk5KUFpKTFpaRllTQlRUU0xNUFRaUlREWFFTSkVIQlpZTFpESExKU1FNTEhUWFRKRUNYU0xaWlNQS1RMWktRUVlGU1lHWVdQQ1BRRkhRSFlUUVhaS1JTR1RUU1FDWkxQVFhDRFlZWlhTUVpTTFhMWk1ZQ1BDUUJaWVhIQlNYTFpETFRDRFhUWUxaSllZWlBaWVpMVFhKU0pYSExQTVlUWENRUkJMWlNTRkpaWlROSllUWE1ZSkhMSFBQTENZWFFKUVFLWlpTQ1BaS1NXQUxRU0JMQ0NaSlNYR1dXV1lHWUtUSkJCWlRES0hYSEtHVEdQQktRWVNMUFhQSkNLQk1MTFhEWlNUQktMR0dRS1FMU0JLS1RGWFJNREtCRlRQWkZSVEJCUkZFUlFHWFlKUFpTU1RMQlpUUFNaUVpTSkRITEpRTFpCUE1TTU1TWExRUU5IS05CTFJERE5YWERIRERKQ1lZR1lMWEdaTFhTWUdNUVFHS0hCUE1YWVhMWVRRV0xXR0NQQk1RWENZWllEUkpCSFRESllIUVNIVE1KU0JZUExXSExaRkZOWVBNSFhYSFBMVEJRUEZCSldRREJZR1BOWlRQRlpKR1NERFRRU0haRUFXWlpZTExUWVlCV0pLWFhHSExGS1hESlRNU1pTUVlOWkdHU1dRU1BIVExTU0tNQ0xaWFlTWlFaWE5DSkRRR1pETEZOWUtMSkNKTExaTE1aWk5IWURTU0hUSFpaTFpaQkJIUVpXV1lDUlpITFlRUUpCRVlGWFhYV0hTUlhXUUhXUFNMTVNTS1pUVFlHWVFRV1JTTEFMSE1KVFFKU01YUUJKSlpKWFpZWktYQllRWEJKWFNIWlRTRkpMWE1YWlhGR0hLWlNaR0dZTENMU0FSSllIU0xMTE1aWEVMR0xYWURKWVRMRkJIQlBOTFlaRkJCSFBUR0pLV0VUWkhLSkpYWlhYR0xMSkxTVEdTSEpKWVFMUVpGS0NHTk5ESlNTWkZEQkNUV1dTRVFGSFFKQlNBUVRHWVBRTEJYQk1NWVdYR1NMWkhHTFpHUVlGTFpCWUZaSkZSWVNGTUJZWkhRR0ZXWlNZRllKSlBIWkJZWVpGRldPREdSTE1GVFdMQlpHWUNRWENESllHWllZWVlUWVRZRFdFR0FaWUhYSkxaWVlITFJNR1JYWFpDTEhORUxKSlRKVFBXSllCSkpCWEpKVEpURUVLSFdTTEpQTFBTRllaUFFRQkRMUUpKVFlZUUxZWktES1NRSllZUVpMRFFUR0pRWVpKU1VDTVJZUVRIVEVKTUZDVFlIWVBLTUhZWldKRFFGSFlZWFdTSENUWFJMSkhRWEhDQ1lZWUpMVEtUVFlUTVhHVENKVFpBWVlPQ1pMWUxCU1pZV0pZVFNKWUhCWVNIRkpMWUdKWFhUTVpZWUxUWFhZUFpMWFlKWllaWVlQTkhNWU1EWVlMQkxITFNZWVFRTExOSkpZTVNPWVFCWkdETFlYWUxDUVlYVFNaRUdYSFpHTEhXQkxKSEVZWFRXUU1BS0JQUUNHWVNISEVHUUNNV1lZV0xKWUpIWVlaTExKSllMSFpZSE1HU0xKTEpYQ0pKWUNMWUNKUENQWkpaSk1NWUxDUUxOUUxKUUpTWFlKTUxTWkxKUUxZQ01NSENGTU1GUFFRTUZZTFFNQ0ZGUU1NTU1ITVpORkhISkdUVEhIS0hTTE5DSEhZUURYVE1NUURDWVpZWFlRTVlRWUxURENZWVlaQVpaQ1lNWllETFpGRkZNTVlDUVpXWlpNQUJUQllaVERNTlpaR0dERlRZUENHUVlUVFNTRkZXRkRUWlFTU1lTVFdYSkhYWVRTWFhZTEJZUUhXV0tYSFpYV1pOTlpaSlpKSlFKQ0NDSFlZWEJaWFpDWVpUTExDUVhZTkpZQ1lZQ1lOWlpRWVlZRVdZQ1pEQ0pZQ0NIWUpMQlRaWVlDUVdNUFdQWU1MR0tETERMR0tRUUJHWUNISlhZXCIsXHJcblx0cG9seXBob25lOiB7XHJcblx0XHRcIjE5OTY5XCI6IFwiRFpcIixcclxuXHRcdFwiMTk5NzVcIjogXCJXTVwiLFxyXG5cdFx0XCIxOTk4OFwiOiBcIlFKXCIsXHJcblx0XHRcIjIwMDQ4XCI6IFwiWUxcIixcclxuXHRcdFwiMjAwNTZcIjogXCJTQ1wiLFxyXG5cdFx0XCIyMDA2MFwiOiBcIk5NXCIsXHJcblx0XHRcIjIwMDk0XCI6IFwiUUdcIixcclxuXHRcdFwiMjAxMjdcIjogXCJRSlwiLFxyXG5cdFx0XCIyMDE2N1wiOiBcIlFDXCIsXHJcblx0XHRcIjIwMTkzXCI6IFwiWUdcIixcclxuXHRcdFwiMjAyNTBcIjogXCJLSFwiLFxyXG5cdFx0XCIyMDI1NlwiOiBcIlpDXCIsXHJcblx0XHRcIjIwMjgyXCI6IFwiU0NcIixcclxuXHRcdFwiMjAyODVcIjogXCJRSkdcIixcclxuXHRcdFwiMjAyOTFcIjogXCJURFwiLFxyXG5cdFx0XCIyMDMxNFwiOiBcIllEXCIsXHJcblx0XHRcIjIwMzQwXCI6IFwiTkVcIixcclxuXHRcdFwiMjAzNzVcIjogXCJURFwiLFxyXG5cdFx0XCIyMDM4OVwiOiBcIllKXCIsXHJcblx0XHRcIjIwMzkxXCI6IFwiQ1pcIixcclxuXHRcdFwiMjA0MTVcIjogXCJQQlwiLFxyXG5cdFx0XCIyMDQ0NlwiOiBcIllTXCIsXHJcblx0XHRcIjIwNDQ3XCI6IFwiU1FcIixcclxuXHRcdFwiMjA1MDRcIjogXCJUQ1wiLFxyXG5cdFx0XCIyMDYwOFwiOiBcIktHXCIsXHJcblx0XHRcIjIwODU0XCI6IFwiUUpcIixcclxuXHRcdFwiMjA4NTdcIjogXCJaQ1wiLFxyXG5cdFx0XCIyMDkxMVwiOiBcIlBGXCIsXHJcblx0XHRcIjIwNTA0XCI6IFwiVENcIixcclxuXHRcdFwiMjA2MDhcIjogXCJLR1wiLFxyXG5cdFx0XCIyMDg1NFwiOiBcIlFKXCIsXHJcblx0XHRcIjIwODU3XCI6IFwiWkNcIixcclxuXHRcdFwiMjA5MTFcIjogXCJQRlwiLFxyXG5cdFx0XCIyMDk4NVwiOiBcIkFXXCIsXHJcblx0XHRcIjIxMDMyXCI6IFwiUEJcIixcclxuXHRcdFwiMjEwNDhcIjogXCJYUVwiLFxyXG5cdFx0XCIyMTA0OVwiOiBcIlNDXCIsXHJcblx0XHRcIjIxMDg5XCI6IFwiWVNcIixcclxuXHRcdFwiMjExMTlcIjogXCJKQ1wiLFxyXG5cdFx0XCIyMTI0MlwiOiBcIlNCXCIsXHJcblx0XHRcIjIxMjczXCI6IFwiU0NcIixcclxuXHRcdFwiMjEzMDVcIjogXCJZUFwiLFxyXG5cdFx0XCIyMTMwNlwiOiBcIlFPXCIsXHJcblx0XHRcIjIxMzMwXCI6IFwiWkNcIixcclxuXHRcdFwiMjEzMzNcIjogXCJTRENcIixcclxuXHRcdFwiMjEzNDVcIjogXCJRS1wiLFxyXG5cdFx0XCIyMTM3OFwiOiBcIkNBXCIsXHJcblx0XHRcIjIxMzk3XCI6IFwiU0NcIixcclxuXHRcdFwiMjE0MTRcIjogXCJYU1wiLFxyXG5cdFx0XCIyMTQ0MlwiOiBcIlNDXCIsXHJcblx0XHRcIjIxNDc3XCI6IFwiSkdcIixcclxuXHRcdFwiMjE0ODBcIjogXCJURFwiLFxyXG5cdFx0XCIyMTQ4NFwiOiBcIlpTXCIsXHJcblx0XHRcIjIxNDk0XCI6IFwiWVhcIixcclxuXHRcdFwiMjE1MDVcIjogXCJZWFwiLFxyXG5cdFx0XCIyMTUxMlwiOiBcIkhHXCIsXHJcblx0XHRcIjIxNTIzXCI6IFwiWEhcIixcclxuXHRcdFwiMjE1MzdcIjogXCJQQlwiLFxyXG5cdFx0XCIyMTU0MlwiOiBcIlBGXCIsXHJcblx0XHRcIjIxNTQ5XCI6IFwiS0hcIixcclxuXHRcdFwiMjE1NzFcIjogXCJFXCIsXHJcblx0XHRcIjIxNTc0XCI6IFwiREFcIixcclxuXHRcdFwiMjE1ODhcIjogXCJURFwiLFxyXG5cdFx0XCIyMTU4OVwiOiBcIk9cIixcclxuXHRcdFwiMjE2MThcIjogXCJaQ1wiLFxyXG5cdFx0XCIyMTYyMVwiOiBcIktIQVwiLFxyXG5cdFx0XCIyMTYzMlwiOiBcIlpKXCIsXHJcblx0XHRcIjIxNjU0XCI6IFwiS0dcIixcclxuXHRcdFwiMjE2NzlcIjogXCJMS0dcIixcclxuXHRcdFwiMjE2ODNcIjogXCJLSFwiLFxyXG5cdFx0XCIyMTcxMFwiOiBcIkFcIixcclxuXHRcdFwiMjE3MTlcIjogXCJZSFwiLFxyXG5cdFx0XCIyMTczNFwiOiBcIldPRVwiLFxyXG5cdFx0XCIyMTc2OVwiOiBcIkFcIixcclxuXHRcdFwiMjE3ODBcIjogXCJXTlwiLFxyXG5cdFx0XCIyMTgwNFwiOiBcIlhIXCIsXHJcblx0XHRcIjIxODM0XCI6IFwiQVwiLFxyXG5cdFx0XCIyMTg5OVwiOiBcIlpEXCIsXHJcblx0XHRcIjIxOTAzXCI6IFwiUk5cIixcclxuXHRcdFwiMjE5MDhcIjogXCJXT1wiLFxyXG5cdFx0XCIyMTkzOVwiOiBcIlpDXCIsXHJcblx0XHRcIjIxOTU2XCI6IFwiU0FcIixcclxuXHRcdFwiMjE5NjRcIjogXCJZQVwiLFxyXG5cdFx0XCIyMTk3MFwiOiBcIlREXCIsXHJcblx0XHRcIjIyMDAzXCI6IFwiQVwiLFxyXG5cdFx0XCIyMjAzMVwiOiBcIkpHXCIsXHJcblx0XHRcIjIyMDQwXCI6IFwiWFNcIixcclxuXHRcdFwiMjIwNjBcIjogXCJaQ1wiLFxyXG5cdFx0XCIyMjA2NlwiOiBcIlpDXCIsXHJcblx0XHRcIjIyMDc5XCI6IFwiTUhcIixcclxuXHRcdFwiMjIxMjlcIjogXCJYSlwiLFxyXG5cdFx0XCIyMjE3OVwiOiBcIlhBXCIsXHJcblx0XHRcIjIyMjM3XCI6IFwiTkpcIixcclxuXHRcdFwiMjIyNDRcIjogXCJURFwiLFxyXG5cdFx0XCIyMjI4MFwiOiBcIkpRXCIsXHJcblx0XHRcIjIyMzAwXCI6IFwiWUhcIixcclxuXHRcdFwiMjIzMTNcIjogXCJYV1wiLFxyXG5cdFx0XCIyMjMzMVwiOiBcIllRXCIsXHJcblx0XHRcIjIyMzQzXCI6IFwiWUpcIixcclxuXHRcdFwiMjIzNTFcIjogXCJQSFwiLFxyXG5cdFx0XCIyMjM5NVwiOiBcIkRDXCIsXHJcblx0XHRcIjIyNDEyXCI6IFwiVERcIixcclxuXHRcdFwiMjI0ODRcIjogXCJQQlwiLFxyXG5cdFx0XCIyMjUwMFwiOiBcIlBCXCIsXHJcblx0XHRcIjIyNTM0XCI6IFwiWkRcIixcclxuXHRcdFwiMjI1NDlcIjogXCJESFwiLFxyXG5cdFx0XCIyMjU2MVwiOiBcIlBCXCIsXHJcblx0XHRcIjIyNjEyXCI6IFwiVERcIixcclxuXHRcdFwiMjI3NzFcIjogXCJLUVwiLFxyXG5cdFx0XCIyMjgzMVwiOiBcIkhCXCIsXHJcblx0XHRcIjIyODQxXCI6IFwiSkdcIixcclxuXHRcdFwiMjI4NTVcIjogXCJRSlwiLFxyXG5cdFx0XCIyMjg2NVwiOiBcIlhRXCIsXHJcblx0XHRcIjIzMDEzXCI6IFwiTUxcIixcclxuXHRcdFwiMjMwODFcIjogXCJXTVwiLFxyXG5cdFx0XCIyMzQ4N1wiOiBcIlNYXCIsXHJcblx0XHRcIjIzNTU4XCI6IFwiUUpcIixcclxuXHRcdFwiMjM1NjFcIjogXCJZV1wiLFxyXG5cdFx0XCIyMzU4NlwiOiBcIllXXCIsXHJcblx0XHRcIjIzNjE0XCI6IFwiWVdcIixcclxuXHRcdFwiMjM2MTVcIjogXCJTTlwiLFxyXG5cdFx0XCIyMzYzMVwiOiBcIlBCXCIsXHJcblx0XHRcIjIzNjQ2XCI6IFwiWlNcIixcclxuXHRcdFwiMjM2NjNcIjogXCJaVFwiLFxyXG5cdFx0XCIyMzY3M1wiOiBcIllHXCIsXHJcblx0XHRcIjIzNzYyXCI6IFwiVERcIixcclxuXHRcdFwiMjM3NjlcIjogXCJaU1wiLFxyXG5cdFx0XCIyMzc4MFwiOiBcIlFKXCIsXHJcblx0XHRcIjIzODg0XCI6IFwiUUtcIixcclxuXHRcdFwiMjQwNTVcIjogXCJYSFwiLFxyXG5cdFx0XCIyNDExM1wiOiBcIkRDXCIsXHJcblx0XHRcIjI0MTYyXCI6IFwiWkNcIixcclxuXHRcdFwiMjQxOTFcIjogXCJHQVwiLFxyXG5cdFx0XCIyNDI3M1wiOiBcIlFKXCIsXHJcblx0XHRcIjI0MzI0XCI6IFwiTkxcIixcclxuXHRcdFwiMjQzNzdcIjogXCJURFwiLFxyXG5cdFx0XCIyNDM3OFwiOiBcIlFKXCIsXHJcblx0XHRcIjI0NDM5XCI6IFwiUEZcIixcclxuXHRcdFwiMjQ1NTRcIjogXCJaU1wiLFxyXG5cdFx0XCIyNDY4M1wiOiBcIlREXCIsXHJcblx0XHRcIjI0Njk0XCI6IFwiV0VcIixcclxuXHRcdFwiMjQ3MzNcIjogXCJMS1wiLFxyXG5cdFx0XCIyNDkyNVwiOiBcIlROXCIsXHJcblx0XHRcIjI1MDk0XCI6IFwiWkdcIixcclxuXHRcdFwiMjUxMDBcIjogXCJYUVwiLFxyXG5cdFx0XCIyNTEwM1wiOiBcIlhIXCIsXHJcblx0XHRcIjI1MTUzXCI6IFwiUEJcIixcclxuXHRcdFwiMjUxNzBcIjogXCJQQlwiLFxyXG5cdFx0XCIyNTE3OVwiOiBcIktHXCIsXHJcblx0XHRcIjI1MjAzXCI6IFwiUEJcIixcclxuXHRcdFwiMjUyNDBcIjogXCJaU1wiLFxyXG5cdFx0XCIyNTI4MlwiOiBcIkZCXCIsXHJcblx0XHRcIjI1MzAzXCI6IFwiTkFcIixcclxuXHRcdFwiMjUzMjRcIjogXCJLR1wiLFxyXG5cdFx0XCIyNTM0MVwiOiBcIlpZXCIsXHJcblx0XHRcIjI1MzczXCI6IFwiV1pcIixcclxuXHRcdFwiMjUzNzVcIjogXCJYSlwiLFxyXG5cdFx0XCIyNTM4NFwiOiBcIkFcIixcclxuXHRcdFwiMjU0NTdcIjogXCJBXCIsXHJcblx0XHRcIjI1NTI4XCI6IFwiU0RcIixcclxuXHRcdFwiMjU1MzBcIjogXCJTQ1wiLFxyXG5cdFx0XCIyNTU1MlwiOiBcIlREXCIsXHJcblx0XHRcIjI1Nzc0XCI6IFwiWkNcIixcclxuXHRcdFwiMjU4NzRcIjogXCJaQ1wiLFxyXG5cdFx0XCIyNjA0NFwiOiBcIllXXCIsXHJcblx0XHRcIjI2MDgwXCI6IFwiV01cIixcclxuXHRcdFwiMjYyOTJcIjogXCJQQlwiLFxyXG5cdFx0XCIyNjMzM1wiOiBcIlBCXCIsXHJcblx0XHRcIjI2MzU1XCI6IFwiWllcIixcclxuXHRcdFwiMjYzNjZcIjogXCJDWlwiLFxyXG5cdFx0XCIyNjM5N1wiOiBcIlpDXCIsXHJcblx0XHRcIjI2Mzk5XCI6IFwiUUpcIixcclxuXHRcdFwiMjY0MTVcIjogXCJaU1wiLFxyXG5cdFx0XCIyNjQ1MVwiOiBcIlNCXCIsXHJcblx0XHRcIjI2NTI2XCI6IFwiWkNcIixcclxuXHRcdFwiMjY1NTJcIjogXCJKR1wiLFxyXG5cdFx0XCIyNjU2MVwiOiBcIlREXCIsXHJcblx0XHRcIjI2NTg4XCI6IFwiSkdcIixcclxuXHRcdFwiMjY1OTdcIjogXCJDWlwiLFxyXG5cdFx0XCIyNjYyOVwiOiBcIlpTXCIsXHJcblx0XHRcIjI2NjM4XCI6IFwiWUxcIixcclxuXHRcdFwiMjY2NDZcIjogXCJYUVwiLFxyXG5cdFx0XCIyNjY1M1wiOiBcIktHXCIsXHJcblx0XHRcIjI2NjU3XCI6IFwiWEpcIixcclxuXHRcdFwiMjY3MjdcIjogXCJIR1wiLFxyXG5cdFx0XCIyNjg5NFwiOiBcIlpDXCIsXHJcblx0XHRcIjI2OTM3XCI6IFwiWlNcIixcclxuXHRcdFwiMjY5NDZcIjogXCJaQ1wiLFxyXG5cdFx0XCIyNjk5OVwiOiBcIktKXCIsXHJcblx0XHRcIjI3MDk5XCI6IFwiS0pcIixcclxuXHRcdFwiMjc0NDlcIjogXCJZUVwiLFxyXG5cdFx0XCIyNzQ4MVwiOiBcIlhTXCIsXHJcblx0XHRcIjI3NTQyXCI6IFwiWlNcIixcclxuXHRcdFwiMjc2NjNcIjogXCJaU1wiLFxyXG5cdFx0XCIyNzc0OFwiOiBcIlRTXCIsXHJcblx0XHRcIjI3Nzg0XCI6IFwiU0NcIixcclxuXHRcdFwiMjc3ODhcIjogXCJaRFwiLFxyXG5cdFx0XCIyNzc5NVwiOiBcIlREXCIsXHJcblx0XHRcIjI3ODEyXCI6IFwiT1wiLFxyXG5cdFx0XCIyNzg1MFwiOiBcIlBCXCIsXHJcblx0XHRcIjI3ODUyXCI6IFwiTUJcIixcclxuXHRcdFwiMjc4OTVcIjogXCJTTFwiLFxyXG5cdFx0XCIyNzg5OFwiOiBcIlBMXCIsXHJcblx0XHRcIjI3OTczXCI6IFwiUUpcIixcclxuXHRcdFwiMjc5ODFcIjogXCJLSFwiLFxyXG5cdFx0XCIyNzk4NlwiOiBcIkhYXCIsXHJcblx0XHRcIjI3OTk0XCI6IFwiWEpcIixcclxuXHRcdFwiMjgwNDRcIjogXCJZQ1wiLFxyXG5cdFx0XCIyODA2NVwiOiBcIldHXCIsXHJcblx0XHRcIjI4MTc3XCI6IFwiU01cIixcclxuXHRcdFwiMjgyNjdcIjogXCJRSlwiLFxyXG5cdFx0XCIyODI5MVwiOiBcIktIXCIsXHJcblx0XHRcIjI4MzM3XCI6IFwiWlFcIixcclxuXHRcdFwiMjg0NjNcIjogXCJUTFwiLFxyXG5cdFx0XCIyODU0OFwiOiBcIkRDXCIsXHJcblx0XHRcIjI4NjAxXCI6IFwiVERcIixcclxuXHRcdFwiMjg2ODlcIjogXCJQQlwiLFxyXG5cdFx0XCIyODgwNVwiOiBcIkpHXCIsXHJcblx0XHRcIjI4ODIwXCI6IFwiUUdcIixcclxuXHRcdFwiMjg4NDZcIjogXCJQQlwiLFxyXG5cdFx0XCIyODk1MlwiOiBcIlREXCIsXHJcblx0XHRcIjI4OTc1XCI6IFwiWkNcIixcclxuXHRcdFwiMjkxMDBcIjogXCJBXCIsXHJcblx0XHRcIjI5MzI1XCI6IFwiUUpcIixcclxuXHRcdFwiMjk1NzVcIjogXCJTTFwiLFxyXG5cdFx0XCIyOTYwMlwiOiBcIkZCXCIsXHJcblx0XHRcIjMwMDEwXCI6IFwiVERcIixcclxuXHRcdFwiMzAwNDRcIjogXCJDWFwiLFxyXG5cdFx0XCIzMDA1OFwiOiBcIlBGXCIsXHJcblx0XHRcIjMwMDkxXCI6IFwiWVNQXCIsXHJcblx0XHRcIjMwMTExXCI6IFwiWU5cIixcclxuXHRcdFwiMzAyMjlcIjogXCJYSlwiLFxyXG5cdFx0XCIzMDQyN1wiOiBcIlNDXCIsXHJcblx0XHRcIjMwNDY1XCI6IFwiU1hcIixcclxuXHRcdFwiMzA2MzFcIjogXCJZUVwiLFxyXG5cdFx0XCIzMDY1NVwiOiBcIlFKXCIsXHJcblx0XHRcIjMwNjg0XCI6IFwiUUpHXCIsXHJcblx0XHRcIjMwNzA3XCI6IFwiU0RcIixcclxuXHRcdFwiMzA3MjlcIjogXCJYSFwiLFxyXG5cdFx0XCIzMDc5NlwiOiBcIkxHXCIsXHJcblx0XHRcIjMwOTE3XCI6IFwiUEJcIixcclxuXHRcdFwiMzEwNzRcIjogXCJOTVwiLFxyXG5cdFx0XCIzMTA4NVwiOiBcIkpaXCIsXHJcblx0XHRcIjMxMTA5XCI6IFwiU0NcIixcclxuXHRcdFwiMzExODFcIjogXCJaQ1wiLFxyXG5cdFx0XCIzMTE5MlwiOiBcIk1MQlwiLFxyXG5cdFx0XCIzMTI5M1wiOiBcIkpRXCIsXHJcblx0XHRcIjMxNDAwXCI6IFwiWVhcIixcclxuXHRcdFwiMzE1ODRcIjogXCJZSlwiLFxyXG5cdFx0XCIzMTg5NlwiOiBcIlpOXCIsXHJcblx0XHRcIjMxOTA5XCI6IFwiWllcIixcclxuXHRcdFwiMzE5OTVcIjogXCJYSlwiLFxyXG5cdFx0XCIzMjMyMVwiOiBcIlBGXCIsXHJcblx0XHRcIjMyMzI3XCI6IFwiWllcIixcclxuXHRcdFwiMzI0MThcIjogXCJIR1wiLFxyXG5cdFx0XCIzMjQyMFwiOiBcIlhRXCIsXHJcblx0XHRcIjMyNDIxXCI6IFwiSEdcIixcclxuXHRcdFwiMzI0MzhcIjogXCJMR1wiLFxyXG5cdFx0XCIzMjQ3M1wiOiBcIkdKXCIsXHJcblx0XHRcIjMyNDg4XCI6IFwiVERcIixcclxuXHRcdFwiMzI1MjFcIjogXCJRSlwiLFxyXG5cdFx0XCIzMjUyN1wiOiBcIlBCXCIsXHJcblx0XHRcIjMyNTYyXCI6IFwiWlNRXCIsXHJcblx0XHRcIjMyNTY0XCI6IFwiSlpcIixcclxuXHRcdFwiMzI3MzVcIjogXCJaRFwiLFxyXG5cdFx0XCIzMjc5M1wiOiBcIlBCXCIsXHJcblx0XHRcIjMzMDcxXCI6IFwiUEZcIixcclxuXHRcdFwiMzMwOThcIjogXCJYTFwiLFxyXG5cdFx0XCIzMzEwMFwiOiBcIllBXCIsXHJcblx0XHRcIjMzMTUyXCI6IFwiUEJcIixcclxuXHRcdFwiMzMyNjFcIjogXCJDWFwiLFxyXG5cdFx0XCIzMzMyNFwiOiBcIkJQXCIsXHJcblx0XHRcIjMzMzMzXCI6IFwiVERcIixcclxuXHRcdFwiMzM0MDZcIjogXCJZQVwiLFxyXG5cdFx0XCIzMzQyNlwiOiBcIldNXCIsXHJcblx0XHRcIjMzNDMyXCI6IFwiUEJcIixcclxuXHRcdFwiMzM0NDVcIjogXCJKR1wiLFxyXG5cdFx0XCIzMzQ4NlwiOiBcIlpOXCIsXHJcblx0XHRcIjMzNDkzXCI6IFwiVFNcIixcclxuXHRcdFwiMzM1MDdcIjogXCJRSlwiLFxyXG5cdFx0XCIzMzU0MFwiOiBcIlFKXCIsXHJcblx0XHRcIjMzNTQ0XCI6IFwiWkNcIixcclxuXHRcdFwiMzM1NjRcIjogXCJYUVwiLFxyXG5cdFx0XCIzMzYxN1wiOiBcIllUXCIsXHJcblx0XHRcIjMzNjMyXCI6IFwiUUpcIixcclxuXHRcdFwiMzM2MzZcIjogXCJYSFwiLFxyXG5cdFx0XCIzMzYzN1wiOiBcIllYXCIsXHJcblx0XHRcIjMzNjk0XCI6IFwiV0dcIixcclxuXHRcdFwiMzM3MDVcIjogXCJQRlwiLFxyXG5cdFx0XCIzMzcyOFwiOiBcIllXXCIsXHJcblx0XHRcIjMzODgyXCI6IFwiU1JcIixcclxuXHRcdFwiMzQwNjdcIjogXCJXTVwiLFxyXG5cdFx0XCIzNDA3NFwiOiBcIllXXCIsXHJcblx0XHRcIjM0MTIxXCI6IFwiUUpcIixcclxuXHRcdFwiMzQyNTVcIjogXCJaQ1wiLFxyXG5cdFx0XCIzNDI1OVwiOiBcIlhMXCIsXHJcblx0XHRcIjM0NDI1XCI6IFwiSkhcIixcclxuXHRcdFwiMzQ0MzBcIjogXCJYSFwiLFxyXG5cdFx0XCIzNDQ4NVwiOiBcIktIXCIsXHJcblx0XHRcIjM0NTAzXCI6IFwiWVNcIixcclxuXHRcdFwiMzQ1MzJcIjogXCJIR1wiLFxyXG5cdFx0XCIzNDU1MlwiOiBcIlhTXCIsXHJcblx0XHRcIjM0NTU4XCI6IFwiWUVcIixcclxuXHRcdFwiMzQ1OTNcIjogXCJaTFwiLFxyXG5cdFx0XCIzNDY2MFwiOiBcIllRXCIsXHJcblx0XHRcIjM0ODkyXCI6IFwiWEhcIixcclxuXHRcdFwiMzQ5MjhcIjogXCJTQ1wiLFxyXG5cdFx0XCIzNDk5OVwiOiBcIlFKXCIsXHJcblx0XHRcIjM1MDQ4XCI6IFwiUEJcIixcclxuXHRcdFwiMzUwNTlcIjogXCJTQ1wiLFxyXG5cdFx0XCIzNTA5OFwiOiBcIlpDXCIsXHJcblx0XHRcIjM1MjAzXCI6IFwiVFFcIixcclxuXHRcdFwiMzUyNjVcIjogXCJKWFwiLFxyXG5cdFx0XCIzNTI5OVwiOiBcIkpYXCIsXHJcblx0XHRcIjM1NzgyXCI6IFwiU1pcIixcclxuXHRcdFwiMzU4MjhcIjogXCJZU1wiLFxyXG5cdFx0XCIzNTgzMFwiOiBcIkVcIixcclxuXHRcdFwiMzU4NDNcIjogXCJURFwiLFxyXG5cdFx0XCIzNTg5NVwiOiBcIllHXCIsXHJcblx0XHRcIjM1OTc3XCI6IFwiTUhcIixcclxuXHRcdFwiMzYxNThcIjogXCJKR1wiLFxyXG5cdFx0XCIzNjIyOFwiOiBcIlFKXCIsXHJcblx0XHRcIjM2NDI2XCI6IFwiWFFcIixcclxuXHRcdFwiMzY0NjZcIjogXCJEQ1wiLFxyXG5cdFx0XCIzNjcxMFwiOiBcIkpDXCIsXHJcblx0XHRcIjM2NzExXCI6IFwiWllHXCIsXHJcblx0XHRcIjM2NzY3XCI6IFwiUEJcIixcclxuXHRcdFwiMzY4NjZcIjogXCJTS1wiLFxyXG5cdFx0XCIzNjk1MVwiOiBcIllXXCIsXHJcblx0XHRcIjM3MDM0XCI6IFwiWVhcIixcclxuXHRcdFwiMzcwNjNcIjogXCJYSFwiLFxyXG5cdFx0XCIzNzIxOFwiOiBcIlpDXCIsXHJcblx0XHRcIjM3MzI1XCI6IFwiWkNcIixcclxuXHRcdFwiMzgwNjNcIjogXCJQQlwiLFxyXG5cdFx0XCIzODA3OVwiOiBcIlREXCIsXHJcblx0XHRcIjM4MDg1XCI6IFwiUVlcIixcclxuXHRcdFwiMzgxMDdcIjogXCJEQ1wiLFxyXG5cdFx0XCIzODExNlwiOiBcIlREXCIsXHJcblx0XHRcIjM4MTIzXCI6IFwiWURcIixcclxuXHRcdFwiMzgyMjRcIjogXCJIR1wiLFxyXG5cdFx0XCIzODI0MVwiOiBcIlhUQ1wiLFxyXG5cdFx0XCIzODI3MVwiOiBcIlpDXCIsXHJcblx0XHRcIjM4NDE1XCI6IFwiWUVcIixcclxuXHRcdFwiMzg0MjZcIjogXCJLSFwiLFxyXG5cdFx0XCIzODQ2MVwiOiBcIllEXCIsXHJcblx0XHRcIjM4NDYzXCI6IFwiQUVcIixcclxuXHRcdFwiMzg0NjZcIjogXCJQQlwiLFxyXG5cdFx0XCIzODQ3N1wiOiBcIlhKXCIsXHJcblx0XHRcIjM4NTE4XCI6IFwiWVRcIixcclxuXHRcdFwiMzg1NTFcIjogXCJXS1wiLFxyXG5cdFx0XCIzODU4NVwiOiBcIlpDXCIsXHJcblx0XHRcIjM4NzA0XCI6IFwiWFNcIixcclxuXHRcdFwiMzg3MzlcIjogXCJMSlwiLFxyXG5cdFx0XCIzODc2MVwiOiBcIkdKXCIsXHJcblx0XHRcIjM4ODA4XCI6IFwiU1FcIixcclxuXHRcdFwiMzkwNDhcIjogXCJKR1wiLFxyXG5cdFx0XCIzOTA0OVwiOiBcIlhKXCIsXHJcblx0XHRcIjM5MDUyXCI6IFwiSEdcIixcclxuXHRcdFwiMzkwNzZcIjogXCJDWlwiLFxyXG5cdFx0XCIzOTI3MVwiOiBcIlhUXCIsXHJcblx0XHRcIjM5NTM0XCI6IFwiVERcIixcclxuXHRcdFwiMzk1NTJcIjogXCJURFwiLFxyXG5cdFx0XCIzOTU4NFwiOiBcIlBCXCIsXHJcblx0XHRcIjM5NjQ3XCI6IFwiU0JcIixcclxuXHRcdFwiMzk3MzBcIjogXCJMR1wiLFxyXG5cdFx0XCIzOTc0OFwiOiBcIlRQQlwiLFxyXG5cdFx0XCI0MDEwOVwiOiBcIlpRXCIsXHJcblx0XHRcIjQwNDc5XCI6IFwiTkRcIixcclxuXHRcdFwiNDA1MTZcIjogXCJIR1wiLFxyXG5cdFx0XCI0MDUzNlwiOiBcIkhHXCIsXHJcblx0XHRcIjQwNTgzXCI6IFwiUUpcIixcclxuXHRcdFwiNDA3NjVcIjogXCJZUVwiLFxyXG5cdFx0XCI0MDc4NFwiOiBcIlFKXCIsXHJcblx0XHRcIjQwODQwXCI6IFwiWUtcIixcclxuXHRcdFwiNDA4NjNcIjogXCJRSkdcIlxyXG5cdH1cclxufVxyXG5cclxuLy/luLjnlKjmsYnlrZfmjInnhafmsYnlrZfkvb/nlKjpopHnjofnlLHkvY7liLDpq5jmjpLluo9cclxuZXhwb3J0IGNvbnN0IHBpbnlpbl9kaWN0X25vdG9uZSA9IHtcclxuXHRcImFcIjogXCLpmL/llYrlkbXohYzll4TlkJbplJVcIixcclxuXHRcImVcIjogXCLpop3pmL/kv4TmgbbpuYXpgY/phILljoTppb/ls6jmibzlqKXps4Tlk6bom77lmanmhJXorrnplLflnqnlqYDpuZfokLzosJTojqroha3plIfpoprlkYPpmI/lsZnoi4rova1cIixcclxuXHRcImFpXCI6IFwi54ix5Z+D6Im+56KN55mM5ZOA5oyo55+u6ZqY6JS85ZSJ55qR5ZOO6Zyt5o2x5pqn5auS5Zez55G35ZeM6ZS/56C5XCIsXHJcblx0XCJlaVwiOiBcIuivtlwiLFxyXG5cdFwieGlcIjogXCLns7vopb/luK3mga/luIzkuaDlkLjllpznu4bmnpDmiI/mtJfmgonplKHmuqrmg5znqIDooq3lpJXmtJLmmbDmmJTnibrohYrng6/nhpnlqrPmoJbohp3pmpnnioDouYrnoZLlha7nhoTmm6bnpqflrInnjrrlpZrmsZDlvpnnvrLpk6Pmt4XlmLvmrZnnhrnnn73on4vpg5fllI/nmpnpmrDmqKjmtaDlv77onKXmqoTpg4Tnv5XpmIvps4PoiL7lsaPokbjonoXlkq3nsp7op4vmrLflg5bphq/pvLfoo7znqbjppanoiITnporor7boj6Xok7BcIixcclxuXHRcInlpXCI6IFwi5LiA5Lul5bey5oSP6K6u5LmJ55uK5Lq/5piT5Yy76Im66aOf5L6d56e76KGj5byC5LyK5Luq5a6c5bCE6YGX55aR5q+F6LCK5Lqm55ar5b255b+G5oqR5bC+5LmZ6K+R57+86JuH5rqi5qSF5rKC5rOE6YC46JqB5aS36YKR5oCh57uO5b2d6KOU5aeo54ag6LS755+j5bG56aKQ5YCa6K+j6IOw5aWV57+M55aZ5byI6L226Ju+6am/5aO554yX6IeG5byL6ZOx5peW5ryq6L+k5L2a57+K6K+S5oC/55eN5oe/6aW05bOE5o+W55yZ6ZWS5Luh6buf6IKE5ZK/57+z5oy557yi5ZGT5YiI5ZKm5ba3576/6ZKH5q6q6I2R6JaP6Jy06ZWx5Zmr55mU6Iuh5oKS5ZeM55iX6KGk5L2+5Z+45Zyv6Iij6YWP5YqTXCIsXHJcblx0XCJhblwiOiBcIuWuieahiOaMieWyuOaal+mejeawqOS/uuiDuumTteiwmeW6tem7r+m5jOahieWfr+eKtOaPnuWOguW5v1wiLFxyXG5cdFwiaGFuXCI6IFwi5Y6C5rGJ6Z+p5ZCr5pex5a+S5rGX5ra15Ye95ZaK5oa+572V54SK57+w6YKv5pK854Ca5oao5o2N6YWj5oKN6by+6YKX6aKU6Jq25pmX6I+h5pew6aG454q054ST5pKWXCIsXHJcblx0XCJhbmdcIjogXCLmmILku7Dnm47ogq5cIixcclxuXHRcImFvXCI6IFwi5aWl5r6z5YKy54as5Ye56bOM5pWW6YGo6Y+W6KKE5Z2z57+x5Ze35ouX5oeK5bKZ6J6v6aqc542S6Y+K6Im55aqq5buS6IGxXCIsXHJcblx0XCJ3YVwiOiBcIueTpuaMluWog+a0vOiinOibmeWHueWTh+S9pOWosuWRmeiFvVwiLFxyXG5cdFwieXVcIjogXCLkuo7kuI7ogrLkvZnpooTln5/kuojpgYflpaXor63oqonnjonpsbzpm6jmuJToo5XmhIjlqLHmrLLlkIHoiIblrofnvr3pgL7osavpg4Hlr5PlkL7ni7HllrvlvqHmtbTmhInnprnkv57pgqrmpobmhJrmuJ3lsInmt6TomZ7lsb/ls6rnsqXpqa3nkZznprrmr5PpkrDpmoXoiovnhqjnmIDov4LnhZzmmLHmsanmlrzoh77nm4Logb/nq73okLjlpqrohbTlnITosJXop47mj4TpvonosIDkv6PppoDlur7lpqTnmJDprLvmrKTpuazpmIjltZvpm6npuYblnInonK7kvJvnuqHnqqznqrPppavok6Pni7PogoDoiIHonZPnh6BcIixcclxuXHRcIm5pdVwiOiBcIueJm+e6veaJremSruaLl+WmnuW/uOeLg1wiLFxyXG5cdFwib1wiOiBcIuWTpuWZouWWlFwiLFxyXG5cdFwiYmFcIjogXCLmiorlhavlt7Tmi5TkvK/lkKflnZ3niLjpnLjnvaLoiq3ot4vmiZLlj63pnbbnlqTnrIbogJnpsoXnspHlspzngZ7pkq/mjYzoj53prYPojIdcIixcclxuXHRcInBhXCI6IFwi5oCV5biV54is5omS6La055C25ZWq6JGp6ICZ5p236ZKv562iXCIsXHJcblx0XCJwaVwiOiBcIuiiq+aJueWJr+WQpuearuWdj+i+n+WVpOWMueaKq+eWsue9ouWDu+avl+Wdr+iEvuitrOWKiOWqsuWxgeeQtemCs+ijqOeXnueZlumZguS4leaeh+WZvOmcueWQoee6sOegkumTjea3oOmDq+WfpOa/nuedpeiKmOiajeWcrum8mee9tOicseeWi+iylOS7s+W6gOaTl+eUk+mZtFwiLFxyXG5cdFwiYmlcIjogXCLmr5Tlv4XluIHnrJTmr5Xnp5jpgb/pl63kvZvovp/lo4HlvIrlvbzpgLznoqfpvLvoh4LolL3mi4Lms4znkqfluofnl7nmr5nlvLzljJXphJnpmZvoo6jotLLmlZ3ok5blkKHnr6bnurDkv77pk4vmr5bnrZrojbjolpzlqaLlk5Tot7jmv57np5XojZzmhI7nnaXlpqPoipjnroXpq4DnlYDmu5fni7TokIblrJbopZ7oiK1cIixcclxuXHRcImJhaVwiOiBcIueZvueZvei0peaRhuS8r+aLnOafj+S9sOaOsOWRl+aTmOaNreeol1wiLFxyXG5cdFwiYm9cIjogXCLms6LljZrmkq3li4Pmi6joloTkvZvkvK/njrvmkI/mn4/ms4roiLbliaXmuKTljZzpqbPnsL/ohJbohornsLjoj6DnpLTnrpTpk4LkurPpkrXluJvmk5jppb3ot5vpkrnotrXmqpfllbXpuYHmk5fouKNcIixcclxuXHRcImJlaVwiOiBcIuWMl+iiq+Wkh+WAjeiDjOadr+WLg+i0nei+iOaCsueikeiHguWNkeaCluaDq+iTk+mZgumSoeeLiOWRl+eEmeeimuikmeW6s+metOWtm+m5jumCtumQvlwiLFxyXG5cdFwiYmFuXCI6IFwi5Yqe54mI5Y2K54+t6Iis5p2/6aKB5Ly05pCs5paR5omu5ouM5omz55Oj5Z2C6Ziq57uK6ZKj55ii6Iio55mNXCIsXHJcblx0XCJwYW5cIjogXCLliKTnm5jnlarmvZjmlIDnm7zmi5rnlZTog5blj5vmi4zouZLno5DniL/on6Dms67ooqLopbvkuKxcIixcclxuXHRcImJpblwiOiBcIuS7veWuvumikea7qOaWjOW9rOa/kuauoee8pOmsk+ann+aRiOiGkeeOoumVlOixs+mrjOWCp1wiLFxyXG5cdFwiYmFuZ1wiOiBcIuW4rumCpuW9reaXgeamnOajkuiGgOmVkee7keWCjeejheiajOiwpOaihua1nOiSoVwiLFxyXG5cdFwicGFuZ1wiOiBcIuaXgeW6nuS5k+ejheieg+W9t+a7gumAhOiAqlwiLFxyXG5cdFwiYmVuZ1wiOiBcIuazteW0qeiajOi5pui/uOe7t+eUreWYo+eUj+Wgi1wiLFxyXG5cdFwiYmFvXCI6IFwi5oql5L+d5YyF5a6d5pq06IOe6JaE54iG54Ku6aWx5oqx5aCh5Yml6bKN5pud6JGG54CR6LG55Yio6KSS6Zu55a2i6Iue54Wy6KST6La16bio6b6F5Yu5XCIsXHJcblx0XCJidVwiOiBcIuS4jemDqOatpeW4g+ihpeaNleWgoeWflOWNnOWfoOewv+WTuuaAlumSmuWNn+eTv+mAi+aZoemGremSuFwiLFxyXG5cdFwicHVcIjogXCLmma7mmrTpk7rmtabmnLTloKHokaHosLHln5TmiZHku4bokrLmm53ngJHmuqXojoblnIPnkp7mv67oj6noubzljI3lmZfmsIbmlLXplajmlLTplaRcIixcclxuXHRcIm1pYW5cIjogXCLpnaLmo4nlhY3nu7XnvIXli4nnnKDlhpXlqKnohbzmuJHmuY7mspTpu77lroDnnIRcIixcclxuXHRcInBvXCI6IFwi56C057mB5Z2h6L+r6aKH5py05rOK5amG5rO86a2E57KV6YSx54+A6ZmC5Y+156y45rO655qk6ZKL6ZK3XCIsXHJcblx0XCJmYW5cIjogXCLlj43ojIPniq/nuYHppa3ms5vnv7vlh6Hov5TnlarotKnng6bmi5rluIbmqIrol6nnn77morXolYPpkpLluaHnlYjomKnoua/nh5RcIixcclxuXHRcImZ1XCI6IFwi5bqc5pyN5Ymv6LSf5a+M5aSN56aP5aSr5aaH5bmF5LuY5om254i256ym6ZmE6IWQ6LW05L2b5rWu6KaG6L6F5YKF5LyP5oqa6LWL6L6Q6IW55byX6IKk6Zic6KKx57ya55Sr5rCf5pan5a2a5pW35L+v5ouC5L+Y5ZKQ6IWR5a216IqZ5raq6Yec6ISv6Iyv6aal5a6T57uC6K6j5ZGL572Y6bq46J2g5YyQ6Iq+6JyJ6LeX5Yer5ruP6J2u6am457uL6Jqo56Cp5qG06LWZ6I+U5ZGS6La66Iu75ouK6Zid6bKL5oCr56iD6YOb6I6p5bme56WT6Im06bu76bu86bOGXCIsXHJcblx0XCJiZW5cIjogXCLmnKzkvZPlpZToi6/nrKjlpK/otLLplJvnlZrlnYxcIixcclxuXHRcImZlbmdcIjogXCLpo47kuLDlsIHls7DlpYnlh6TplIvlhq/pgKLnvJ3onILmnqvnlq/orr3ng73kv7jmsqPphYbnoJzokZHllKpcIixcclxuXHRcImJpYW5cIjogXCLlj5jkvr/ovrnnvJbpgY3ovqnpnq3ovqjotKzljL7miYHljZ7msbTovqvnoK3oi4TonZnps4rlvIHnqobnrL7nhbjopIrnoqXlv63nvI9cIixcclxuXHRcInBpYW5cIjogXCLkvr/niYfnr4flgY/pqpfnv6nmiYHpqojog7zouYHosJ3nio/nvI9cIixcclxuXHRcInpoZW5cIjogXCLplYfnnJ/pkojlnLPmjK/pnIfnj43pmLXor4rloavkvqboh7votJ7mnpXmoaLotYjnpa/luKfnlITmlp/nvJznrrTnlrnnoKfmppvpuKnovbjnqLnmurHok4Hog5fmpLnmnJXnlZvmtYhcIixcclxuXHRcImJpYW9cIjogXCLooajmoIflvarplZboo7Hpo5rohpjpo5nplbPlqYrpqqDpo5HmnZPpq5/ps5TngaznmK1cIixcclxuXHRcInBpYW9cIjogXCLnpajmnLTmvILpo5jlq5bnk6Llib3nvKXmro3nnp/pqqDlmIzojqnonrVcIixcclxuXHRcImh1b1wiOiBcIuWSjOa0u+aIlui0p+iOt+eBq+S8meaDkemcjeeluOixgeWar+iXv+mUquiglumSrOiAoOmVrOWkpeeBrOWKkOaUiVwiLFxyXG5cdFwiYmllXCI6IFwi5Yir6bOW5oaL55iq6LmpXCIsXHJcblx0XCJtaW5cIjogXCLmsJHmlY/pl73pl7Xnmr/ms6/lsrfmgq/nj4nmir/pu77nvJfnjp/mhI3oi6Dps5hcIixcclxuXHRcImZlblwiOiBcIuWIhuS7vee6t+Wli+eyieawm+iKrOaEpOeyquWdn+axvueEmumFmuWQqeW/v+ajvOeOoum8oueAteWBvumyvFwiLFxyXG5cdFwiYmluZ1wiOiBcIuW5tueXheWFteWGsOWxj+mlvOeCs+enieS4meaRkuafhOann+emgOaei+mCtOWGq1wiLFxyXG5cdFwiZ2VuZ1wiOiBcIuabtOiAlemiiOW6muiAv+ail+Wfgue+ueWTvei1k+e7oOmyoFwiLFxyXG5cdFwiZmFuZ1wiOiBcIuaWueaUvuaIv+mYsuiuv+e6uuiKs+S7v+WdiuWmqOiCqumCoeiIq+W9t+aei+myguWMmumSq1wiLFxyXG5cdFwieGlhblwiOiBcIueOsOWFiOWOv+ingee6v+mZkOaYvumZqeeMrumynOa0l+Wuque6pOmZt+mXsui0pOS7meihlOaOgOWSuOWrjOaOuue+oeW8puiFuueXq+WotOiIt+mmhemFsOmTo+WGvOa2juaaueexvOmUqOiLi+iarOi3ueWymOiXk+eHuem5h+awmeiOtumcsOi3o+eMg+W9oeelhuethVwiLFxyXG5cdFwiZm91XCI6IFwi5LiN5ZCm57y2XCIsXHJcblx0XCJjYVwiOiBcIuaLhuaTpuWak+ekpFwiLFxyXG5cdFwiY2hhXCI6IFwi5p+l5a+f5beu6Iy25o+S5Y+J5Yi56Iys5qWC5bKU6K+n56K05ZqT5Zaz5ae55p2I5rGK6KGp5pC95qeO6ZWy6Iu05qqr6aaH6ZS454y5XCIsXHJcblx0XCJjYWlcIjogXCLmiY3ph4fotKLmnZDoj5zlvanoo4HolKHnjJzouKnnnaxcIixcclxuXHRcImNhblwiOiBcIuWPguaui+mkkOeBv+aDqOialeaOuueSqOaDreeysuWtsemqlum7qlwiLFxyXG5cdFwic2hlblwiOiBcIuS/oea3seWPgui6q+elnuS7gOWuoeeUs+eUmuayiOS8uOaFjua4l+iCvue7heiOmOWRu+WptuWooOegt+icg+WTguakueiRmuWQsuezgea4luivnOiwguefp+iDglwiLFxyXG5cdFwiY2VuXCI6IFwi5Y+C5bKR5raUXCIsXHJcblx0XCJzYW5cIjogXCLkuInlj4LmlaPkvJ7lj4Hns4HpppPmr7VcIixcclxuXHRcImNhbmdcIjogXCLol4/ku5Poi43msqfoiLHoh6fkvKdcIixcclxuXHRcInphbmdcIjogXCLol4/ohI/okazotYPoh6flpZjpqbVcIixcclxuXHRcImNoZW5cIjogXCLnp7DpmYjmsojmsonmmajnkJvoh6PlsJjovrDooazotoHlv7Hpg7TlrrjosIznopzll5TmirvmpofkvKfosLbpvoDogpxcIixcclxuXHRcImNhb1wiOiBcIuiNieaTjeabueanveezmeWYiOa8leierOiJmuWxrlwiLFxyXG5cdFwiY2VcIjogXCLnrZbmtYvlhozkvqfljpXmoIXmgbtcIixcclxuXHRcInplXCI6IFwi6LSj5YiZ5rO95oup5L6n5ZKL5ZWn5LuE566m6LWc56yu6Ii05piD6L+u5bi7XCIsXHJcblx0XCJ6aGFpXCI6IFwi5YC65oup6b2Q5a6F5a+o5L6n5pGY56qE5paL56Wt57+f56Cm55i15ZOcXCIsXHJcblx0XCJkYW9cIjogXCLliLDpgZPlr7zlspvlgJLliIDnm5fnqLvouYjmgrzmjaPlj6jnpbfnhJjmsJjnupvliILluLHlv4lcIixcclxuXHRcImNlbmdcIjogXCLlsYLmm77oua3lmYxcIixcclxuXHRcInpoYVwiOiBcIuafpeaJjueCuOiviOmXuOa4o+WSi+S5jeamqOalguacreagheecqOWSpOafnuWWs+WWi+mToeiaseWQkuaAjeegn+aPuOeXhOWTs+m9hFwiLFxyXG5cdFwiY2hhaVwiOiBcIuW3ruaLhuaftOmSl+ixuuS+quiZv+eYpVwiLFxyXG5cdFwiY2lcIjogXCLmrKHmraTlt67or43ovp7liLrnk7fno4HlhbnmhYjojKjotZDnpaDkvLrpm4znlrXpuZrns43lkbLnsqJcIixcclxuXHRcInppXCI6IFwi6LWE6Ieq5a2Q5a2X6b2Q5ZKo5ruL5LuU5ae/57Sr5YW55a2c5reE57G95qKT6bK75riN5aeK5ZCx56et5oGj55S+5a2z6Ki+5ruT6ZSx6L6O6LaR6b6H6LWA55ym57yB5ZGy56yr6LCY5bWr6aut6IyI57Ki6Kec6ICUXCIsXHJcblx0XCJjdW9cIjogXCLmjqrplJnno4vmjKvmkJPmkq7ouYnplInljp3lta/nl6Tnn6znmKXohJ7pub5cIixcclxuXHRcImNoYW5cIjogXCLkuqfljZXpmJDltK3nvKDmjrrnpoXpoqTpk7LonYnmkIDmvbron77ppovlv4/lqbXlrbHop4flu5vosITosJfmvrbpqqPnvrzoupTokoflhoFcIixcclxuXHRcInNoYW5cIjogXCLlsbHljZXlloTpmZXpl6rooavmk4XmsZXmiYfmjrrnj4rnpoXliKDohrPnvK7otaHphK/moIXnhb3lp5fot5rps53lrJfmvbjorqroiKLoi6vnlp3mjrjohrvpkpDliaHon67oip/ln4/lvaHpqp9cIixcclxuXHRcInpoYW5cIjogXCLlsZXmiJjljaDnq5nltK3nspjmuZvmsr7nnrvpoqToqbnmlqnnm4/ovpfnu73mr6HmoIjomLjml4PosLXmkIxcIixcclxuXHRcInhpblwiOiBcIuaWsOW/g+S/oei+m+aso+iWqummqOmRq+iKr+mUjOW/u+iOmOaYleihheathuWbn+W/hOmVoVwiLFxyXG5cdFwibGlhblwiOiBcIuiBlOi/nue7g+W7ieeCvOiEuOiOsuaBi+mTvuW4mOaAnOa2n+aVm+eQj+mVsOa/gualnemyouauk+a9i+ijouijo+iHgeWlgeiOtuigiuiUuVwiLFxyXG5cdFwiY2hhbmdcIjogXCLlnLrplb/ljoLluLjlgb/mmIzllLHnlYXlgKHlsJ3ogqDmlZ7lgJjnjJblqLzmt4zoo7PlvpzmmLbmgIXlq6boj5bpsrPpmIrkvKXoi4zmsIXmg53prK9cIixcclxuXHRcInpoYW5nXCI6IFwi6ZW/5byg56ug6Zqc5rao5o6M5biQ6IOA5b2w5LiI5LuX5ryz5qif6LSm5p2W55KL5baC5LuJ55i06J+R542Q5bmb6YSj5aucXCIsXHJcblx0XCJjaGFvXCI6IFwi6LaF5pyd5r2u54KS6ZKe5oqE5bei5ZC15Ym/57uw5Ziy5pmB54Sv6ICW5oCKXCIsXHJcblx0XCJ6aGFvXCI6IFwi552A54Wn5oub5om+5Y+s5pyd6LW15YWG5pit6IKH572p6ZKK5rK85Ziy54iq6K+P5r+v5ZWB5qO556yKXCIsXHJcblx0XCJ6aG91XCI6IFwi6LCD5bee5ZGo5rSy6Iif6aqk6L205pi85a6Z57Kl55qx6IKY5ZKS5bia6IOE57uJ57qj5aav5ZWB6K+M57mH56Kh57GA6YWO6I2uXCIsXHJcblx0XCJjaGVcIjogXCLovablvbvmkqTlsLrmia/mvojmjqPlnbznoJflsa5cIixcclxuXHRcImp1XCI6IFwi6L2m5bGA5o2u5YW35Li+5LiU5bGF5Ymn5beo6IGa5rig6Led5Y+l5ouS5L+x5p+c6I+K5ouY54Ks5qGU5oOn55+p6Z6g6am56ZSv6Lie5ZKA556/5p645o6s5rKu6I6S5qmY6aOT55a96ZKc6LaE6Li96YG955Ca6b6D5qSQ6Iuj6KO+5qaY54uZ5YCo5qaJ6Iu06K616ZuO6ZSU56qt6Z6r54qL5bGm6Ya1XCIsXHJcblx0XCJjaGVuZ1wiOiBcIuaIkOeoi+WfjuaJv+ensOebm+aKouS5mOivmuWRiOWHgOaDqeaSkea+hOenpOapmemqi+mAnueeoOS4nuaZn+mTm+WfleWhjeibj+afvemTlumFsuijjuaeqFwiLFxyXG5cdFwicm9uZ1wiOiBcIuWuueiNo+iejee7kua6tuiTieeGlOaIjuamleiMuOWGl+W1mOiCnOeLqOidvlwiLFxyXG5cdFwic2hlbmdcIjogXCLnlJ/lo7DljYfog5znm5vkuZjlnKPliannibLnlLjnnIHnu7PnrJnnlKXltYrmmZ/muJHnnJpcIixcclxuXHRcImRlbmdcIjogXCLnrYnnmbvpgpPnga/mvoTlh7PnnqrouazlmZTno7Tltp3plavnsKbmiKVcIixcclxuXHRcInpoaVwiOiBcIuWItuS5i+ayu+i0qOiBjOWPquW/l+iHs+aMh+e7h+aUr+WAvOefpeivhuebtOiHtOaJp+e9ruatouakjee6uOaLk+aZuuauluenqeaXqOWdgOa7nuawj+aeneiKneiEguW4nOaxgeiCouaMmueomumFr+aOt+WzmeeCmeagieS+hOiKt+eqkuWSq+WQsei2vueXlOicmOmDheahjumbieeliemDpumZn+eXo+ibreW4meaes+i4r+W+teiDneaggOi0veell+ixuOm4t+aRrei9teWNrui9vuW9mOinr+e1t+i3luWftOWkgum7ueW/rumqmOiGo+i4rFwiLFxyXG5cdFwiemhlbmdcIjogXCLmlL/mraPor4HkuonmlbTlvoHpg5HkuIHnl4fmjKPokrjnnYHpk67nrZ3mi6/ls6XmgJTor6Tni7DlvrXpkrJcIixcclxuXHRcInRhbmdcIjogXCLloILllJDns5bmsaTloZjourrotp/lgJjmo6Dng6vmt4zohpvmkKrplZflgqXonrPmuo/luJHnvrDmqJjphqPonpfogKXpk7Tnka1cIixcclxuXHRcImNoaVwiOiBcIuaMgeWQg+axoOi/n+i1pOmpsOWwuuaWpem9v+e/heWMmeeXtOiAu+eCveS+iOW8m+WPseWVu+Wdu+ecmeWXpOWigOWTp+iMjOixieaVleesnumlrOi4n+iaqeafouWquOmtkeevquikq+W9s+m4seiereeYm+ecteWCulwiLFxyXG5cdFwic2hpXCI6IFwi5piv5pe25a6e5LqL5biC5Y2B5L2/5LiW5pa95byP5Yq/6KeG6K+G5biI5Y+y56S655+z6aOf5aeL5aOr5aSx6YCC6K+V5LuA5rO95a6k5Ly86K+X6aWw5q6W6YeK6am25rCP56GV6YCd5rm/6JqA54uu6KqT5ou+5bC45YyZ5LuV5p+/55+i5bOZ5L6N5Zms5Zec5qCF5out5ZiY5bGO5oGD6L286Jmx6ICG6IiQ6I6z6ZOI6LCl54K76LGV6bKl6aWj6J6r6YW+562u5Z+Y5byR56S76JON6bK66LSzXCIsXHJcblx0XCJxaVwiOiBcIuS8geWFtui1t+acn+awlOS4g+WZqOaxveWlh+m9kOWQr+aXl+aji+Wmu+W8g+aPreaeneatp+asuumqkeWlkei/hOS6n+a8huaImuWygueoveWykOeQpuaglue8ieeQquazo+S5nuegjOelgeW0jue7rueluueliOWHhOa3h+adnuiEkOm6kuWcu+aGqeiKquS8juS/n+eVpuiAhuiRuuayj+iQi+mqkOmzjee2puiuq+iVsuWxuumigOS6k+eim+afkuWVkOaxlOe2ruiQgeWYgeibtOanreasueiKkeahpOS4jOicnlwiLFxyXG5cdFwiY2h1YWlcIjogXCLmj6PouLnllZzmkIvohqpcIixcclxuXHRcInR1b1wiOiBcIuaJmOiEseaLk+aLluWmpempvOmZgOaysem4tempruWUvuakreWdqOS9l+ego+i3juW6ueafgeapkOS5h+mTiuaysumFoem8jeeuqOafnVwiLFxyXG5cdFwiZHVvXCI6IFwi5aSa5bqm5aS65py16Lqy6ZOO6ZqL5ZKE5aCV6Ii15Z6b5oOw5ZOG6Lix6Le65o6H5YmB5p+B57yN5rKy6KOw5ZOa6ZqzXCIsXHJcblx0XCJ4dWVcIjogXCLlrabooYDpm6rliYrolpvnqbTpnbTosJHlmbHps5XouIXms7blvZBcIixcclxuXHRcImNob25nXCI6IFwi6YeN56eN5YWF5Yay5raM5bSH6Jmr5a6g5b+h5oan6IiC6Iy66ZOz6ImfXCIsXHJcblx0XCJjaG91XCI6IFwi56255oq957u46YWs5oSB5LiR6Iet5LuH55W056ig556F6LiM5oOG5L+m55iz6Zug5bixXCIsXHJcblx0XCJxaXVcIjogXCLmsYLnkIPnp4vkuJjpgrHku4fphYvoo5jpvp/lm5rpgZLps4Xomazomq/ms4XmpbjmuavnirDpgJHlt6/oib3kv4XonaTotYfpvL3ns5dcIixcclxuXHRcInhpdVwiOiBcIuS/ruengOS8keWuv+iilue7o+iHreacvemUiOe+nuWXheWyq+a6tOW6pemmkOWSu+mruem4uuiyhVwiLFxyXG5cdFwiY2h1XCI6IFwi5Ye65aSE56GA5Yid5Yqp6Zmk5YKo55Wc6Kem5qWa5Y6o6ZuP55+X5qmx6ZSE5ruB6LqH5oC157uM5pCQ5YiN6JyN6buc5p216Lmw5LqN5qiX5oa35qWuXCIsXHJcblx0XCJ0dWFuXCI6IFwi5Zui5o+j5rmN55aD5oqf5b2WXCIsXHJcblx0XCJ6aHVpXCI6IFwi6L+95Z2g57yA5o+j5qSO6ZSl6LWY5oO06Zq56aqT57ySXCIsXHJcblx0XCJjaHVhblwiOiBcIuS8oOW3neiIueepv+S4suWWmOakveiIm+mSj+mBhOawmuW3m+iIoVwiLFxyXG5cdFwiemh1YW5cIjogXCLkuJPovazkvKDotZrnoJbmkrDnr4bpppTlla3poptcIixcclxuXHRcInl1YW5cIjogXCLlhYPlkZjpmaLljp/mupDov5zmhL/lm63mj7TlnIbnvJjoooHmgKjmuIroi5HlrpvlhqTlqpvnjL/lnqPmsoXloazlnrjpuLPovpXpuKLnkZflnJzniLDoiqvpvIvmqbzonojnnKLnrqLmjr5cIixcclxuXHRcImN1YW5cIjogXCLnqpzmlJLnr6Houb/mkrrniKjmsYbplalcIixcclxuXHRcImNodWFuZ1wiOiBcIuWIm+W6iueql+mXr+W5oueWruaAhlwiLFxyXG5cdFwiemh1YW5nXCI6IFwi6KOF54q25bqE5aOu5pKe5aaG5bmi5qGp5aWY5YOu5oiGXCIsXHJcblx0XCJjaHVpXCI6IFwi5ZC55Z6C6ZSk54KK5qSO6Zmy5qeM5o225qOwXCIsXHJcblx0XCJjaHVuXCI6IFwi5pil57qv6YaH5rez5ZSH5qS/6KCi6bmR5pyQ6I686IKr6J29XCIsXHJcblx0XCJ6aHVuXCI6IFwi5YeG5bGv5rez6LCG6IKr56qAXCIsXHJcblx0XCJjdVwiOiBcIuS/g+i2i+i2o+eyl+ewh+mGi+WNkui5tOeMnei5meiUn+auguW+glwiLFxyXG5cdFwiZHVuXCI6IFwi5ZCo6aG/55u+5pWm6Lmy5aKp5Zuk5rKM6ZKd54KW55u56YGB6La456CY56SFXCIsXHJcblx0XCJxdVwiOiBcIuWMuuWOu+WPluabsui2i+a4oOi2o+mpseWxiOi6r+ihouWotuelm+eev+Wylum+i+inkeackOibkOeZr+ibhuiLo+mYkuivjuWKrOiVluiYp+awjem7ouigvOeSqem6tOm4suejslwiLFxyXG5cdFwieHVcIjogXCLpnIDorrjnu63pobvluo/lvpDkvJHok4TnlZzomZrlkIHnu6rlj5nml63pgqrmgaTlop/moKnnta7lnKnlqb/miIzog6XlmJjmtZLnhabphZfor6nmnJDnm7Hok7/muobmtKvpobzli5bns4jnoInphpFcIixcclxuXHRcImNodW9cIjogXCLovo3nu7DmiLPmt5bllZzpvorouJTovrZcIixcclxuXHRcInp1XCI6IFwi57uE5peP6Laz56WW56ef6Zi75Y2S5L+O6K+F6ZWe6I+5XCIsXHJcblx0XCJqaVwiOiBcIua1juacuuWFtuaKgOWfuuiusOiuoeezu+acn+mZheWPiumbhue6p+WHoOe7meenr+aegeW3see6quWNs+e7p+WHu+aXoua/gOe7qeaApeWlh+WQieWto+m9kOeWvui/uem4oeWJgui+keexjeWvhOaMpOWcvuWGgOS6n+WvguaaqOiEiui3u+iCjOeoveW/jOmlpeelree8ieajmOeftuaxsueVuOWnrOiXieeYoOmqpee+geWmk+iupeeot+iTn+aCuOWrieWyjOWPveS8jumyq+ivmOalq+iNoOaIn+eulemcgeW1h+inium6gueVv+eOkeesiOeKhOiKqOWUp+WxkOmru+aIouS9tuWBiOeshOi3veiSuuS5qeWSrei1jeW1tOiZruaOjum9keaum+mymuWJnua0juS4jOWivOiVuuW9kOiKsOWTnFwiLFxyXG5cdFwiY29uZ1wiOiBcIuS7juS4m+WMhuiBquiRseWbseeQrua3meaenumqouiLgeeSgVwiLFxyXG5cdFwiem9uZ1wiOiBcIuaAu+S7jue7vOWul+e6tei4quajleeyvemsg+WBrOaenuiFmVwiLFxyXG5cdFwiY291XCI6IFwi5YeR6L6P6IWg5qWxXCIsXHJcblx0XCJjdWlcIjogXCLoobDlgqzltJTohIbnv6DokIPnsrnmkafnkoDnmIHmgrTmt6zllZDpmrnmr7PmprFcIixcclxuXHRcIndlaVwiOiBcIuS4uuS9jeWnlOacque7tOWNq+WbtOi/neWogeS8n+WNseWRs+W+ruWUr+iwk+S8quaFsOWwvumtj+mfpuiDg+eVj+W4t+WWguW3jeiQjuiUmue6rOa9jeWwiea4reaDn+iWh+iLh+eCnOWcqeWok+ivv+eOruW0tOahheWBjumAtuWAreeMpeWbl+iRs+mal+eXv+eMrOa2oOW1rOmfqueFqOiJiemaueW4j+mXsea0p+ayqemaiOmylOi7jlwiLFxyXG5cdFwiY3VuXCI6IFwi5p2R5a2Y5a+45b+W55q0XCIsXHJcblx0XCJ6dW9cIjogXCLkvZzlgZrluqflt6blnZDmmKjkvZDnkKLmkq7npZrmn57llJHlmKzphaLmgI3nrK7pmLzog5lcIixcclxuXHRcInp1YW5cIjogXCLpkrvnuoLmlKXnvLXoupxcIixcclxuXHRcImRhXCI6IFwi5aSn6L6+5omT562U5pCt5rKT55ip5oOu5ZeS5ZOS6IC36Z6R6Z286KSh56yq5oCb5aayXCIsXHJcblx0XCJkYWlcIjogXCLlpKfku6PluKblvoXotLfmr5LmiLTooovmrbnlkYbpmrbpgK7lsrHlgqPmo6PmgKDmrobpu5vnlJnln63or5Lnu5DnjrPlkZTov6hcIixcclxuXHRcInRhaVwiOiBcIuWkp+WPsOWkquaAgeazsOaKrOiDjuaxsOmSm+iLlOiWueiCvei3humCsOmykOmFnumqgOeCsVwiLFxyXG5cdFwidGFcIjogXCLku5blroPlpbnmi5PloZTouI/loYzmprvmspPmvK/nja3ll5LmjJ7ouYvotr/pgaLpk4rps47murvpl7xcIixcclxuXHRcImRhblwiOiBcIuS9huWNleefs+aLheS4ueiDhuaXpuW8ueibi+a3oeivnuawrumDuOiAveaumuaDruWEi+eciOeWuOa+ueaOuOiGu+WVlueuquiBg+iQj+eYhei1lVwiLFxyXG5cdFwibHVcIjogXCLot6/lha3pmYblvZXnu7/pnLLpsoHljaLngonpub/npoTotYLoiqblupDnoozpupPpooXms7jljaTmvZ7pua3ovpjomY/nkpDmvInlmZzmiK7psojmjrPmqbnovbPpgK/muIzok7zmkrjpuKzmoIzmsIfog6rplaXnsI/oiLvovoLlnoZcIixcclxuXHRcInRhblwiOiBcIuiwiOaOouWdpuaRiuW8ueeCreWdm+a7qei0quWPueiwrea9reeis+avr+eYq+aqgOeXsOiikuWdjeimg+W/kOaYmemDr+a+uemSvemUrFwiLFxyXG5cdFwicmVuXCI6IFwi5Lq65Lu76K6k5LuB5b+N6Z+n5YiD57qr6aWq5aaK6I2P56iU5aOs5Lue6L2r5Lq76KG9XCIsXHJcblx0XCJqaWVcIjogXCLlrrbnu5Pop6Pku7fnlYzmjqXoioLlpbnlsYrku4vpmLbooZflgJ/mnbDmtIHmiKrlp5Dmj63mjbfliqvmiJLnmobnq63moZTor6vmpbfnp7jnnavol4nmi67oiqXor5jnoqPll5/poonomqflrZHlqZXnlpbmoYDorqbnlqXlgYjnvq/oorflk5zllojljanpspLpqrFcIixcclxuXHRcInlhblwiOiBcIueglOS4pemqjOa8lOiogOecvOeDn+ayv+W7tuebkOeCjueHleWyqeWutOiJs+minOaut+W9puaOqea3uemYjuihjemThembgeWSveWOjOeEsOWgsOegmuWUgeeEieaZj+aqkOickuWlhOS/qOiFjOWmjeiwmuWFluetteeEseWBg+mXq+Wro+mEoua5rui1neiDreeQsOa7n+mYiemth+mFvemDvuaBueW0puiKq+WJoem8ueiPuOmkjeWfj+iws+iuoOWOo+e9qFwiLFxyXG5cdFwiZGFuZ1wiOiBcIuW9k+WFmuaho+iNoeaMoeWuleeggOmTm+ijhuWHvOiPquiwoFwiLFxyXG5cdFwidGFvXCI6IFwi5aWX6K6o6Lez6Zm25rab6YCD5qGD6JCE5reY5o6P5ruU6Z+s5Y+o5rSu5ZWV57um6aWV6byXXCIsXHJcblx0XCJ0aWFvXCI6IFwi5p2h6LCD5oyR6Lez6L+i55y66IuV56qV56yk5L275ZWB57Kc6aur6ZOr56Wn6b6G6Jyp6bKmXCIsXHJcblx0XCJ0ZVwiOiBcIueJueW/keW/kumTveaFnVwiLFxyXG5cdFwiZGVcIjogXCLnmoTlnLDlvpflvrflupXplJ1cIixcclxuXHRcImRlaVwiOiBcIuW+l1wiLFxyXG5cdFwiZGlcIjogXCLnmoTlnLDnrKzmj5DkvY7lupXmirXlvJ/ov6rpgJLluJ3mlYzloKTokoLnvJTmu7TmtqTnv5/lqKPnrJvmo6PojbvosJvni4TpgrjlmIDnoKXlnbvor4vlq6HplZ3norLpqrbmsJDmn6LnsbTnvp3nnYfop4xcIixcclxuXHRcInRpXCI6IFwi5L2T5o+Q6aKY5byf5pu/5qKv6Lii5oOV5YmU6LmE5qOj5ZW85bGJ5YmD5raV6ZSR5YCc5oKM6YCW5ZqP6I2R6YaN57uo6bmI57yH6KO8XCIsXHJcblx0XCJ0dWlcIjogXCLmjqjpgIDlvJ/ohb/opKrpopPonJXlv5LnhbpcIixcclxuXHRcInlvdVwiOiBcIuacieeUseWPiOS8mOa4uOayueWPi+WPs+mCruWwpOW/p+W5vOeKueivseaCoOW5veS9kemHieafmumTgOmxv+Wbv+mFieaUuOm7neiOoOeMt+ido+eWo+WRpuiatOiOuOiOnOmTleWupee5h+WNo+eJlum8rOWwouiasOS+kVwiLFxyXG5cdFwiZGlhblwiOiBcIueUteeCueW6l+WFuOWloOeUuOeimOa3gOauv+Weq+mioOa7h+eZq+W3heaDpuaOgueZnOeOt+S9g+i4rumdm+mSv+ewn+Wdq+mYvVwiLFxyXG5cdFwidGlhblwiOiBcIuWkqeeUsOa3u+Whq+eUnOeUuOaBrOiFhuS9g+iIlOmSv+mYl+W/neauhOeVi+agneaOrVwiLFxyXG5cdFwiemh1XCI6IFwi5Li75pyv5L2P5rOo5Yqp5bGe6YCQ5a6B6JGX562R6am75pyx54+g56Wd54yq6K+45p+x56u56ZO45qCq556p5Zix6LSu54Wu54Ob6IuO6KSa6Jub5ouE6ZOi5rSZ56u66JuA5ria5Lyr5p285L6P5r6N6K+b6Iyx566454K36LqF57+l5r206YK+5qeg6Iiz5qml5Li255iD6bqI55awXCIsXHJcblx0XCJuaWFuXCI6IFwi5bm05b+16YW/6L6X56K+5bu/5o275pK15ouI6JSr6bK25Z+d6bKH6L6H6buPXCIsXHJcblx0XCJkaWFvXCI6IFwi6LCD5o6J6ZuV5ZCK6ZKT5YiB6LKC5YeL56KJ6bK35Y+86ZOr6ZOeXCIsXHJcblx0XCJ5YW9cIjogXCLopoHkuYjnuqboja/pgoDmkYfogIDohbDpgaXlp5rnqpHnkbblkqzlsKfpkqXosKPogrTlpK3kvqXlkIbnlp/lppblubrmnbPoiIDnqpXnqojmm5zpuZ7niLvnuYflvq3ovbrpk6vps5DltL7nj6dcIixcclxuXHRcImRpZVwiOiBcIui3jOWPoOidtui/reein+eIueiwjeeJkuiAi+S9muWWi+WgnueTnumyveWepOaPsui5gFwiLFxyXG5cdFwic2hlXCI6IFwi6K6+56S+5pGE5raJ5bCE5oqY6IiN6JuH5ou+6IiM5aWi5oWR6LWm6LWK5L2Y6bqd5q2Z55Wy5Y6N54ye5o+y5rugXCIsXHJcblx0XCJ5ZVwiOiBcIuS4muS5n+WknOWPtuWwhOmHjua2suWGtuWWnemhteeIt+iAtumCquWSveaksOeDqOaOluaLveabs+aZlOiwkuiFi+WZjuaPtumdpemCuumTmOaPslwiLFxyXG5cdFwieGllXCI6IFwi5Lqb6Kej5Y2P5YaZ6KGA5Y+26LCi5qKw6Z6L6IOB5pac5pC65oeI5aWR5Y246LCQ5rOE6J+56YKq5q2H5rO75bGR5oyf54eu5qat6J2O5pK35YGV5Lq15qWU6aKJ57ys6YKC6bKR54Cj5Yuw5qaN6Jak57uB5rir5buo542s6LqeXCIsXHJcblx0XCJ6aGVcIjogXCLov5nogIXnnYDokZfmtZnmipjlk7LolJfpga7ovpnovoTmn5jplJfopLbonIfom7DpuafosKrota3mkbrkuYfno5TonqtcIixcclxuXHRcImRpbmdcIjogXCLlrprorqLpobbkuIHpvI7nm6/pkonplK3lj67ku4Ppk6TnlLrphYrllbbnoofohZrnlpTnjo7ogLVcIixcclxuXHRcImRpdVwiOiBcIuS4oumTpVwiLFxyXG5cdFwidGluZ1wiOiBcIuWQrOW6reWBnOWOheW7t+aMuuS6reiJh+Wpt+axgOmTpOeDg+mchueUuuick+iRtuaig+iOm1wiLFxyXG5cdFwiZG9uZ1wiOiBcIuWKqOS4nOiRo+WGrOa0nuaHguWGu+agi+S+l+WSmuWzkuawoeaBq+iDtOehkOWejOm4q+WyveiDqFwiLFxyXG5cdFwidG9uZ1wiOiBcIuWQjOmAmue7n+erpeeXm+mTnOahtuahkOetkuW9pOS+l+S9n+a9vOaNhemFruegvOees+aBuOWzkuS7neWXteWDruWejOiMvFwiLFxyXG5cdFwiemhvbmdcIjogXCLkuK3ph43np43kvJfnu4jpkp/lv6Dku7Loobfogr/ouLXlhqLnm4XomqPlv6rplLroiK/onr3lpIJcIixcclxuXHRcImRvdVwiOiBcIumDveaWl+ivu+ixhuaKluWFnOmZoemAl+eqpua4juiaqueXmOiUuOmSreevvFwiLFxyXG5cdFwiZHVcIjogXCLluqbpg73ni6znnaPor7vmr5LmuKHmnZzloLXotYznnbnogprplYDmuI7nrIPnq7rlmJ/niorlppLniY3ooLnmpJ/pu6noio/pq5FcIixcclxuXHRcImR1YW5cIjogXCLmlq3mrrXnn63nq6/plLvnvI7nhYXmpLTnsJZcIixcclxuXHRcImR1aVwiOiBcIuWvuemYn+i/veaVpuWFkeWghueik+mVpuaAvOaGnVwiLFxyXG5cdFwicnVpXCI6IFwi55Ge5YWR6ZSQ552/6Iqu6JWK6JWk6JqL5p6YXCIsXHJcblx0XCJ5dWVcIjogXCLmnIjor7TnuqbotorkuZDot4PlhZHpmIXlsrPnsqTmgqbmm7DpkqXmoI7pkrrmqL7ngLnpvqDlk5XliJZcIixcclxuXHRcInR1blwiOiBcIuWQnuWxr+WbpOikquixmuiHgOmlqOaavuawvVwiLFxyXG5cdFwiaHVpXCI6IFwi5Lya5Zue5oyl5rGH5oOg6L6J5oGi5b6957uY5q+B5oWn54Gw6LS/5Y2J5oKU56e95rqD6I2f5pmW5b2X6K6z6K+y54+y5aCV6K+Z6JWZ5pmm552i6bq+54Op6Iy05ZaZ5qGn6JuU5rSE5rWN6Jm65oGa6J+q5ZK06Zqz57yL5ZOVXCIsXHJcblx0XCJ3dVwiOiBcIuWKoeeJqeaXoOS6lOatpuWNiOWQtOiInuS8jeaxoeS5jOivr+S6oeaBtuWxi+aZpOaCn+WQvumbvuiKnOaip+WLv+W3q+S+ruWdnuavi+ivrOWRnOmSqOmCrOaNgum5nOWFgOWpuuWmqeaWvOaIium5iea1r+iciOWUlOmqm+S7teeEkOiKtOmLiOW6kem8r+eJvuaAg+WcrOW/pOeXpui/leadjOWvpOmYolwiLFxyXG5cdFwieWFcIjogXCLkuprljovpm4XniZnmirzpuK3lkYDovafmtq/ltJbpgqroir3lk5HorrbpuKblqIXooZnkuKvompznoqPlnq3kvKLmsKnmoaDnkIrmj6DlkJbnnZrnl5bnlovov5PlsojnoJFcIixcclxuXHRcImhlXCI6IFwi5ZKM5ZCI5rKz5L2V5qC455uW6LS65Zad6LWr6I2355uS6bmk5ZCT5ZG16Iub56a+6I+P5aOR6KSQ5ra46ZiC6ZiW5Yq+6K+D6aKM5Zes6LKJ5pu357+u57ql55uNXCIsXHJcblx0XCJ3b1wiOiBcIuaIkeaPoeeqneayg+WNp+aMnea2oeaWoea4peW5hOicl+WWlOWAreiOtOm+jOiCn+ehqlwiLFxyXG5cdFwiZW5cIjogXCLmganmkYHokr1cIixcclxuXHRcIm5cIjogXCLll6/llJRcIixcclxuXHRcImVyXCI6IFwi6ICM5LqM5bCU5YS/6ICz6L+p6aW15rSx6LSw6ZOS54+l5L206bi46bKVXCIsXHJcblx0XCJmYVwiOiBcIuWPkeazlee9muS5j+S8kOmYgOetj+egneWeoeePkFwiLFxyXG5cdFwicXVhblwiOiBcIuWFqOadg+WIuOazieWciOaLs+WKneeKrOmTqOeXiuivoOiNg+mGm+ict+mip+e7u+eKreetjOmsiOaCm+i+geeVjlwiLFxyXG5cdFwiZmVpXCI6IFwi6LS56Z2e6aOe6IKl5bqf6I+y6IK65ZWh5rK45Yyq5paQ6Jya5aaD6K+95omJ57+h6ZyP5ZCg57uv6IWT55ex6Iq+5red5oKx54uS5qan56Cp6bKx56+a6ZWEXCIsXHJcblx0XCJwZWlcIjogXCLphY3ln7nlnY/otZTkvanpmarmspvoo7Tog5rlpoPpnIjmt6Dml4bluJTlkbjphoXovpTplKtcIixcclxuXHRcInBpbmdcIjogXCLlubPor4Tlh63nk7blhq/lsY/okI3oi7nkuZLlnarmnrDlqInkv5zpsoZcIixcclxuXHRcImZvXCI6IFwi5L2bXCIsXHJcblx0XCJodVwiOiBcIuWSjOaKpOiuuOaIt+aguOa5luS6kuS5juWRvOiDoeaIj+W/veiZjuayqueziuWjtuiRq+eLkOidtOW8p+eRmua1kum5hOeQpeaJiOWUrOa7ueaDmuelnOWbq+aWm+esj+iKtOmGkOeMouaAmeWUv+aIveansuins+eFs+m5leWGseeToOiZjeWytem5seeDgOi9t1wiLFxyXG5cdFwiZ2FcIjogXCLlpLnlkpblmI7lsKzlmbbml67kvL3lsJXpkoblsJxcIixcclxuXHRcImdlXCI6IFwi5Liq5ZCI5ZCE6Z2p5qC85q2M5ZOl55uW6ZqU5Ymy6ZiB5oiI6JGb6bi95pCB6IOz6Ii455aZ6ZOs6aq86Juk5ZKv5Zyq6ZWJ6aKM5Luh56GM5Zed6ayy6IaI57ql6KK85pC/5aGl5ZO/6Jm8XCIsXHJcblx0XCJoYVwiOiBcIuWTiOibpOmTqlwiLFxyXG5cdFwieGlhXCI6IFwi5LiL5aSP5bOh5Y6m6L6W6Zye5aS56Jm+54ut5ZCT5L6g5pqH6YGQ556O5Yyj55GV5ZSs5ZG36bug56GW572F54uO55iV5p+ZXCIsXHJcblx0XCJnYWlcIjogXCLmlLnor6Xnm5bmpoLmuonpkpnkuJDoiqXotYXlnpPpmZTmiKRcIixcclxuXHRcImhhaVwiOiBcIua1t+i/mOWus+WtqeS6peWSs+mquOmqh+awpuWXqOiDsumGolwiLFxyXG5cdFwiZ2FuXCI6IFwi5bmy5oSf6LW25pWi55SY6IKd5p2G6LWj5Lm+5p+R5bC056u/56eG5qmE55+45rem6Iu35pOA6YWQ57uA5rOU5Z2p5pew55az5r6JXCIsXHJcblx0XCJnYW5nXCI6IFwi5riv6ZKi5Yia5bKX57qy5YaI5p2g57y45omb6IKb572h5oiG5627XCIsXHJcblx0XCJqaWFuZ1wiOiBcIuWwhuW8uuaxn+a4r+WlluiusumZjeeWhuiSi+WnnOa1huWMoOmFseWDteahqOe7m+e8sOeKn+ixh+ekk+a0muiMs+ezqOiAqVwiLFxyXG5cdFwiaGFuZ1wiOiBcIuihjOiIquadreW3t+Wkr+WQreahgeayhue7l+mig1wiLFxyXG5cdFwiZ29uZ1wiOiBcIuW3peWFrOWFseS+m+WKn+e6oui0oeaUu+Wuq+W3qem+muaBreaLsei6rOW8k+axnuiao+ePmeinpeiCseW7vlwiLFxyXG5cdFwiaG9uZ1wiOiBcIue6ouWuj+a0qui9sOiZuem4v+W8mOWThOeDmOazk+ioh+iVu+mXs+iup+iNrem7ieiWqFwiLFxyXG5cdFwiZ3VhbmdcIjogXCLlub/lhYnpgJvmvaLnirfog7HlkqPmoYRcIixcclxuXHRcInFpb25nXCI6IFwi56m355C856m56YKb6IyV562H6Ler6Jup6YqOXCIsXHJcblx0XCJnYW9cIjogXCLpq5jlkYrmkJ7nqL/oho/ns5XplZDnmovnvpTplIbmnbLpg5znnb7or7Dol4Hnr5nnvJ/mp4Hmp5RcIixcclxuXHRcImhhb1wiOiBcIuWlveWPt+avq+ixquiAl+a1qemDneeak+aYiueai+iSv+WjleeBj+Wajua/oOianeiyiemiouWXpeiWheWahlwiLFxyXG5cdFwibGlcIjogXCLnkIblipvliKnnq4vph4zmnY7ljobkvovnprvlirHnpLzkuL3pu47nkoPljonljpjnspLojonmoqjpmrbmoJfojZTmsqXnioHmvJPlk6nni7jol5znvbnnr7HpsqTnoLrlkI/mvqfkv5DpqormuqfnoL7ojoXplILnrKDooKHom47nl6Lpm7Pkv6rlgojphrTmoI7pg6bkv5rmnqXllrHpgKblqIzpuYLmiL7noKzllLPlnZznlqDonIrpu6fnjIHprLLnsp3ok6DlkZbot57nlqznvKHpsqHps6Llq6DoqYjmgp3oi4jnr6XovblcIixcclxuXHRcImppYVwiOiBcIuWutuWKoOS7t+WBh+S9s+aetueUsuWYiei0vumpvuWrgeWkueeovOmSvuaMn+aLrui/puS8vemiiua1g+aet+aIm+iNmueXgumiiemVk+ess+ePiOWyrOiDm+iiiOmDj+iRreiit+eYlemTl+i3j+ibseaBneWTv1wiLFxyXG5cdFwibHVvXCI6IFwi6JC9572X57uc5rSb6YC76J666ZSj6aqG6JCd6KO45ryv54OZ5pGe6aqh5ZKv566p54+e5o2L6I2m56GM6ZuS5qSk6ZWZ6Lee55iw5rO66IS254yh5YCu6KCDXCIsXHJcblx0XCJrZVwiOiBcIuWPr+enkeWFi+WuouWIu+ivvumil+a4tOWjs+afr+ajteWRteWdt+aBquiLm+WSs+ejleePgueonueejOa6mOi9sueqoOWXkeeWtOidjOWyoumTqumij+mrgeiatee8guawqumqkumStumUnlwiLFxyXG5cdFwicWlhXCI6IFwi5Y2h5oGw5rS95o6Q6auC6KK35ZKt6JGcXCIsXHJcblx0XCJnZWlcIjogXCLnu5lcIixcclxuXHRcImdlblwiOiBcIuaguei3n+S6mOiJruWTj+iMm1wiLFxyXG5cdFwiaGVuXCI6IFwi5b6I54ug5oGo55eV5ZOPXCIsXHJcblx0XCJnb3VcIjogXCLmnoTotK3lpJ/lj6Xmsp/ni5fpkqnmi5jli77oi5/lnqLmnrjnr53kvZ3lqr7or5/lsqPlvYDnvJHnrLHpnrLop4/pgZhcIixcclxuXHRcImtvdVwiOiBcIuWPo+aJo+Wvh+WPqeaKoOS9neiUu+iKpOecjeetmFwiLFxyXG5cdFwiZ3VcIjogXCLogqHlj6Tpob7mlYXlm7rpvJPpqqjkvLDosLfotL7lp5HlraTpm4fovpzoj4fmsr3lkpXlkbHplKLpkrTnro3msanmoo/nl7zltK7ovbHpuKrnia/om4ror4Lmr4LpuZjoj7DnvZ/lmI/oh4zop5rnnr3om4TphaTnib/psrRcIixcclxuXHRcInBhaVwiOiBcIueJjOaOkua0vuaLjei/q+W+mOa5g+S/s+WTjOiSjlwiLFxyXG5cdFwiZ3VhXCI6IFwi5ous5oyC55Oc5Yiu5a+h5Y2m5ZGx6KSC5YmQ6ION6K+W6bi55qCd5ZGZXCIsXHJcblx0XCJ0b3VcIjogXCLmipXlpLTpgI/lgbfmhInpqrDkuqBcIixcclxuXHRcImd1YWlcIjogXCLmgKrmi5DkuZZcIixcclxuXHRcImt1YWlcIjogXCLkvJrlv6vlnZfnrbfohI3okq/kvqnmtY3pg5Dokonni6/lk5lcIixcclxuXHRcImd1YW5cIjogXCLlhbPnrqHop4LppoblrpjotK/lhqDmg6/ngYznvZDojp7nurbmo7rmlqHnn5zlgIzpubPps4/nm6XmjrzmtqtcIixcclxuXHRcIndhblwiOiBcIuS4h+WujOaZmua5vueOqeeil+mhveaMveW8r+iUk+S4uOiOnuealuWum+WpieiFleicv+aDi+eDt+eQrOeVueixjOWJnOe6qOe7vuiEmOiPgOiKhOeuolwiLFxyXG5cdFwibmVcIjogXCLlkaLlk6rlkZDorrfnlpJcIixcclxuXHRcImd1aVwiOiBcIuinhOi0teW9kui9qOahguafnOWcremsvOehheeRsOi3qum+n+WMrumXuuivoeeZuOmznOahp+eaiOmykeWIveaZt+WCgOecreWmq+eCheW6i+ewi+WIv+WuhOWMplwiLFxyXG5cdFwianVuXCI6IFwi5Yab5Z2H5L+K5ZCb5bO76I+M56uj6ZKn6aqP6b6f5rWa6Zq96YOh562g55qy6bqH5o2DXCIsXHJcblx0XCJqaW9uZ1wiOiBcIueqmOeCr+i/peeCheWGguaJg1wiLFxyXG5cdFwianVlXCI6IFwi5Yaz57ud6KeS6KeJ5o6Y5bSb6K+A542X5oqJ54i15Zq85YCU5Y6l6JWo5pSr54+P55+N6Lm26LCy6ZWi6bOc5Zmx5qG35ZmY5pKF5qmb5a2T6KeW5YqC54idXCIsXHJcblx0XCJndW5cIjogXCLmu5rmo43ovorooa7no5npsqfnu7LkuKhcIixcclxuXHRcImh1blwiOiBcIuWpmua3t+mtgua1keaYj+ajjeePsuiNpOmmhOivqOa6t+mYjVwiLFxyXG5cdFwiZ3VvXCI6IFwi5Zu96L+H5p6c6YOt6ZSF6KO55bi85rah5qSB5ZuX6J2I6Jmi6IGS5Z+a5o6054yT5bSe6Jy+5ZGZ6aaYXCIsXHJcblx0XCJoZWlcIjogXCLpu5HlmL/ll6hcIixcclxuXHRcImthblwiOiBcIueci+WIiuWLmOWgquWdjuegjeS+g+W1jOanm+eesOmYmum+m+aIoeWHteiOsFwiLFxyXG5cdFwiaGVuZ1wiOiBcIuihoeaoquaBkuS6qOWTvOePqeahgeiYhVwiLFxyXG5cdFwibW9cIjogXCLkuIfmsqHkuYjmqKHmnKvlhpLojqvmkanloqjpu5jno6jmkbjmvKDohInohpzprZTmsqvpmYzmirnlr57omJHmkbnok6bppo3ojInlmL/osJ/np6Pon4bosonlq6vplYbmroHogLHlrLfpur3nmLzosorosphcIixcclxuXHRcInBlbmdcIjogXCLpuY/mnIvlva3ohqjok6znorDoi7nmo5rmjafkuqjng7nnr7fmvo7miqjnobzmgKbnoLDlmK3on5vloItcIixcclxuXHRcImhvdVwiOiBcIuWQjuWAmeWOmuS+r+eMtOWWieWQvOmAheevjOezh+mquuW+jOmyjueYiuWgoFwiLFxyXG5cdFwiaHVhXCI6IFwi5YyW5Y2O5YiS6K+d6Iqx55S75ruR5ZOX6LGB6aqF5qGm54y+6ZOn56CJXCIsXHJcblx0XCJodWFpXCI6IFwi5oCA5Z2P5reu5b6K5qeQ6LidXCIsXHJcblx0XCJodWFuXCI6IFwi6L+Y546v5o2i5qyi5oKj57yT5ZSk54SV5bm755eq5qGT5a+w5raj5a6m5Z645rS55rWj6LGi5aWC6YOH5Zyc542+6bKp6ayf6JCR6YCt5ry26ZS+57yz5pOQXCIsXHJcblx0XCJ4dW5cIjogXCLorq/orq3ov4XlrZnlr7vor6Llvqrml6zlt6HmsZvli4vpgIrnho/lvofmtZrmronpqa/psp/olrDojYDmtZTmtLXls4vln5nlt73pg4fphrrmgYLojajnqqjolYjmm5vnja9cIixcclxuXHRcImh1YW5nXCI6IFwi6buE6I2S54WM55qH5Yew5oWM5pmD5r2i6LCO5oO257Cn55Kc5oGN5bmM5rmf6J2X56O66ZqN5b6o6YGR6IKT56+B6bOH6J+l55mAXCIsXHJcblx0XCJuYWlcIjogXCLog73kuYPlpbbogJDlpYjpvJDokJjmsJbmn7DkvbToib9cIixcclxuXHRcImx1YW5cIjogXCLkubHljbXmu6bls6bpuL7moL7piq7mjJvlrarohJTlqIhcIixcclxuXHRcInFpZVwiOiBcIuWIh+S4lOWlkeeqg+iMhOegjOmUsuaAr+S8veaDrOWmvui2hOaMiOmDhOeup+aFilwiLFxyXG5cdFwiamlhblwiOiBcIuW7uumXtOS7tuingeWdmuajgOWBpeebkeWHj+eugOiJsOi3teWFvOmJtOmUrua4kOafrOWJkeWwluiCqeiIsOiNkOeurea1heWJquS/reeiseiMp+WluOatvOaLo+aNoeeFjui0sea6heanm+a2p+Wgkeesuuiwj+mlr+mUj+e8hOedkeish+i5h+iFseiPhee/puaIrOavveesleeKjeeht+mer+eJruaep+a5lOmyo+Wbneijpei4uuaQm+e8o+m5o+iSueiwq+WDreaIi+i2vOall1wiLFxyXG5cdFwibmFuXCI6IFwi5Y2X6Zq+55S35qWg5ZaD5Zuh6LWn6IWp5Zud6J27XCIsXHJcblx0XCJxaWFuXCI6IFwi5YmN5Y2D6ZKx562+5r2c6L+B5qyg57qk54m15rWF6YGj6LCm5Lm+6ZOF5q2J6buU6LC05bWM5YCp6ZKz6Iyc6JmU5aCR6ZKO6aqe6Zih5o6u6ZKk5omm6IqK54qN6I2o5Luf6Iqh5oKt57yx5L2l5oSG6KSw5Ye16IK35bKN5pC0566d5oWK5qSgXCIsXHJcblx0XCJxaWFuZ1wiOiBcIuW8uuaKoueWhuWimeaequiFlOmUteWRm+e+jOiUt+ilgee+n+i3hOaor+aIleWrseaIl+eCnemVqumUluico1wiLFxyXG5cdFwieGlhbmdcIjogXCLlkJHpobnnm7jmg7PkuaHosaHlk43pppnpmY3lg4/kuqvnrrHnvornpaXmuZjor6bmqaHlt7fnv5TopYTljqLplbbpo6jppbfnvIPpqqfoipfluqDpsp7okZnon5NcIixcclxuXHRcImppYW9cIjogXCLmlZnkuqTovoPmoKHop5Lop4nlj6vohJrnvLTog7bovb/pg4rnhKbpqoTmtYfmpJLnpIHkvbzolYnlqIfnn6vmkIXnu57phbXlib/lmrzppbrnqpbot6Tom5/kvqXni6Hlp6Pnmo7ojK3ls6Tpk7Dphq7pspvmuavlvrzpuarlg6zlmY3oib3mjKLmlatcIixcclxuXHRcInpodW9cIjogXCLnnYDokZfnvLTmoYzljZPmjYnnkKLngbzmtYrphYzmi5nojIHmtr/pla/mt5bllYTmv6/nhK/lgKzmk6Lmlqvmo7nor7zmtZ7npppcIixcclxuXHRcInFpYW9cIjogXCLmoaXkuZTkvqjlt6fmgoTmlbLkv4/lo7Ppm4Dnnqfnv5jnqo3ls63plLnmkqzojZ7ot7fmqLXmhpTpnpjmqYfls6Tor67osK/mhIDpnpLnoZflioHnvLJcIixcclxuXHRcInhpYW9cIjogXCLlsI/mlYjplIDmtojmoKHmmZPnrJHogpbliYrlrZ3okKfkv4/mvYfnoZ3lrrXllbjlmqPpnITmt4blk67nrbHpgI3lp6PnrqvpqoHmnq3lk5Pnu6Hom7jltKTmnrXprYhcIixcclxuXHRcInNpXCI6IFwi5Y+45Zub5oCd5pav6aOf56eB5q275Ly85Lid6aWy5a+66IKG5pKV5rOX5Ly65Zej56WA5Y6u6am35Zi26ZS25L+f5bez6Juz5ZKd6ICc56yl57qf57O46bi257yM5r6M5aeS5rGc5Y625YWVXCIsXHJcblx0XCJrYWlcIjogXCLlvIDlh6/mhajlsoLmpbfmgbrmj6nplLTpk6Dlv77lnrLliYDplI7okohcIixcclxuXHRcImppblwiOiBcIui/m+mHkeS7iui/keS7hee0p+Wwvea0peaWpOemgemUpuWKsuaZi+iwqOeti+W3vua1uOiln+mds+eRvueDrOe8memSheefnOinkOWgh+mmkeiNqeWZpOW7keWml+anv+i1huihv+WNulwiLFxyXG5cdFwicWluXCI6IFwi5Lqy5Yuk5L6156em6ZKm55C056a96Iq55rKB5a+d5pOS6KaD5ZmZ55+c5Zeq5o+/5rqx6Iqp6KG+5buR6ZST5ZCj5qqO6J6TXCIsXHJcblx0XCJqaW5nXCI6IFwi57uP5Lqs57K+5aKD56ue5pmv6K2m56uf5LqV5oOK5b6E6Z2Z5Yqy5pWs5YeA6ZWc552b5pm26aKI6I2G5YWi6Z2W5rO+5oas6bK46IyO6IWI6I+B6IOr6Zix5peM57Kz6Z2T55eJ566Q5YSG6L+z5amn6IK85Yit5byq542NXCIsXHJcblx0XCJ5aW5nXCI6IFwi5bqU6JCl5b2x6Iux5pmv6L+O5pig56Gs55uI6LWi6aKW5am06bmw6I2n6I655qix55Gb6J2H6JCm6I666aKN6Ia657yo54Cb5qW5572C6I2l6JCk6bmm5rui6JOl6YOi6IyU5Zik55KO5ay055i/5aq15pKE5r2GXCIsXHJcblx0XCJqaXVcIjogXCLlsLHnqbbkuZ3phZLkuYXmlZHml6fnuqDoiIXngbjnlprmj6rlko7pn63njpboh7zmn6notbPpuKDpuavljqnllb7pmITmoZXlg6bprI9cIixcclxuXHRcInp1aVwiOiBcIuacgOe9quWYtOmGieWSgOiVnuinnFwiLFxyXG5cdFwianVhblwiOiBcIuWNt+aNkOWciOect+Won+WApue7oumavemVjOa2k+m5g+mEhOigsueLt+mUqeahilwiLFxyXG5cdFwic3VhblwiOiBcIueul+mFuOiSnOeLu1wiLFxyXG5cdFwieXVuXCI6IFwi5ZGY6L+Q5LqR5YWB5a2V6JW06Z+16YWd6ICY5pmV5YyA6Iq46Zmo57qt6YOn562g5oG96Z+r6YOT5rCy5q6S5oSg5piA6I+A54uBXCIsXHJcblx0XCJxdW5cIjogXCLnvqToo5npgKHpuodcIixcclxuXHRcImthXCI6IFwi5Y2h5ZaA5ZKW5ZKU5ZKv5L2n6IOpXCIsXHJcblx0XCJrYW5nXCI6IFwi5bq35oqX5omb5oW354KV5Lqi57Og5LyJ6ZKq6Ze2XCIsXHJcblx0XCJrZW5nXCI6IFwi5Z2R6ZO/5ZCtXCIsXHJcblx0XCJrYW9cIjogXCLogIPpnaDng6Tmi7fpk5DmoLLlsLvnipJcIixcclxuXHRcImtlblwiOiBcIuiCr+WepuaBs+WVg+m+iOijiVwiLFxyXG5cdFwieWluXCI6IFwi5Zug5byV6ZO25Y2w6Z+z6aWu6Zi06ZqQ5ae75q635rer5bC56I2r5ZCf55i+5a+F6Iy15Zy75Z6g6YSe5rmu6JqT5rCk6IOk6b6I56qo5ZaR6ZOf5rSH54u65aSk5bu05ZCy6Zyq6Iya5aCZXCIsXHJcblx0XCJrb25nXCI6IFwi56m65o6n5a2U5oGQ5YCl5bSG566cXCIsXHJcblx0XCJrdVwiOiBcIuiLpuW6k+WTremFt+ijpOaer+eqn+aMjumqt+WggOe7lOWIs+WWvlwiLFxyXG5cdFwia3VhXCI6IFwi6Leo5aS45Z6u5oyO6IOv5L6JXCIsXHJcblx0XCJrdWlcIjogXCLkuo/lpY7mhKfprYHppojmuoPljK7okbXnqqXnm5TpgLXnnb3pppfoganllp/lpJTnr5Hlsr/llrnmj4bpmpflgoDmmozot6zokonmhKbmgp3onbBcIixcclxuXHRcImt1YW5cIjogXCLmrL7lrr3pq4tcIixcclxuXHRcImt1YW5nXCI6IFwi5Ya155+/5qGG54uC5pe355y25Yyh562Q6YKd5Zy55ZOQ6LS25aS86K+z6K+T57qpXCIsXHJcblx0XCJxdWVcIjogXCLnoa7ljbTnvLrpm4DpuYrpmJnnmLjmprfngpTpmJXmgqtcIixcclxuXHRcImt1blwiOiBcIuWbsOaYhuWdpOaNhueQqOmUn+mysumGjOmroeaCg+mYg1wiLFxyXG5cdFwia3VvXCI6IFwi5omp5ous6ZiU5buT6JueXCIsXHJcblx0XCJsYVwiOiBcIuaLieiQveWeg+iFiuWVpui+o+icoeWWh+WJjOaXr+egrOmCi+eYjFwiLFxyXG5cdFwibGFpXCI6IFwi5p2l6I6x6LWW552Q5b6V57GB5rae6LWJ5r+R55me5bSD55ag6ZO8XCIsXHJcblx0XCJsYW5cIjogXCLlhbDop4jok53nr67moI/lsprng4Lmu6XnvIbmj73mvpzmi6bmh5LmpoTmlpPlqarpmJHopLTnvbHllYnosLDplafmvKRcIixcclxuXHRcImxpblwiOiBcIuael+S4tOmCu+i1geeQs+ejt+a3i+m6n+mclumznuWHm+aLjumBtOiUuuWQneeyvOW2mei6j+W7quaqqeWViei+muiGpueeteaHlFwiLFxyXG5cdFwibGFuZ1wiOiBcIua1quacl+mDjuW7iueLvOeQheamlOiegumYhumUkuiOqOWVt+iSl+eoglwiLFxyXG5cdFwibGlhbmdcIjogXCLph4/kuKTnsq7oia/ovobkuq7mooHlh4nosIXnsrHmmb7pnZPouInojqjmpIvprYnloppcIixcclxuXHRcImxhb1wiOiBcIuiAgeWKs+iQvee7nOeJouaNnua2neeDmeWnpeS9rOW0guWUoOmFqua9pueXqOmGqumTkemTueags+iAolwiLFxyXG5cdFwibXVcIjogXCLnm67mqKHmnKjkuqnluZXmr43niafojqvnqYblp4blopPmhZXniZ/niaHli5/nnabnvKrmspDmmq7mi4flp6Xpkrzoi5zku6vmr6rlnbZcIixcclxuXHRcImxlXCI6IFwi5LqG5LmQ5YuS6IKL5Y+76bOT5Zie5LuC5rOQXCIsXHJcblx0XCJsZWlcIjogXCLnsbvntK/pm7fli5Lms6rolb7lnpLno4rmk4Lpla3ogovnvrjogJLlhKHlq5jnvKfphbnlmJ7or5TmqpFcIixcclxuXHRcInN1aVwiOiBcIumaj+WygeiZveeijuWwv+map+mBgumrk+epl+e7pemai+mCg+edoueln+a/ieeHp+iwh+ecreiNvVwiLFxyXG5cdFwibGllXCI6IFwi5YiX54OI5Yqj6KOC54yO5Ya95ZKn6LaU5rSM6ayj5Z+S5o2p6LqQXCIsXHJcblx0XCJsZW5nXCI6IFwi5Ya35oSj5qOx5qWe5aGEXCIsXHJcblx0XCJsaW5nXCI6IFwi6aKG5Luk5Y+m6Zu254G16b6E6Zm15bKt5YeM546y6ZOD6I+x5qOx5Ly2576a6IuT6IGG57+O5rOg55O05Zu557ur5ZGk5qOC6JuJ6YWD6bKu5p+DXCIsXHJcblx0XCJsaWFcIjogXCLkv6lcIixcclxuXHRcImxpYW9cIjogXCLkuobmlpnnlpfovr3lu5bogYrlr6XnvKrlg5rnh47nvK3mkoLmkqnlmLnmvabplaPlr67ok7znjaDpkozlsKXpualcIixcclxuXHRcImxpdVwiOiBcIua1geWImOWFreeVmeafs+eYpOehq+a6nOeijOa1j+amtOeQiemmj+mBm+mOj+mqnee7uumVj+aXkueGmOm5qOmUjVwiLFxyXG5cdFwibHVuXCI6IFwi6K666L2u5Lym5LuR57q25rKm5oqh5Zu1XCIsXHJcblx0XCJsdlwiOiBcIueOh+W+i+aXhee7v+iZkeWxpeWQlemTneWxoeawr+e8lea7pOS+o+mptOamiOmXvuWBu+ikm+aNi+iGgueohlwiLFxyXG5cdFwibG91XCI6IFwi5qW86Zyy5ryP6ZmL5aiE5pCC56+T5Za96ZWC5YG755iY6auF6ICn6J285bWd6JKMXCIsXHJcblx0XCJtYW9cIjogXCLotLjmr5vnn5vlhpLosozojILojIXluL3njKvpq6bplJrmh4vooqTniablja/pk4bogITls4HnkYHon4rojIbonaXml4Tms5bmmLTnnoBcIixcclxuXHRcImxvbmdcIjogXCLpvpnpmoblvITlnoTnrLzmi6LogYvpmYfog6fnj5Hnqr/ojI/lkpnnoLvlnoXms7fmoIrnmYNcIixcclxuXHRcIm5vbmdcIjogXCLlhpzmtZPlvITohJPkvqzlk51cIixcclxuXHRcInNodWFuZ1wiOiBcIuWPjOeIvemcnOWtgOazt1wiLFxyXG5cdFwic2h1XCI6IFwi5pyv5Lmm5pWw5bGe5qCR6L6T5p2f6L+w572y5pyx54af5q6K6JSs6IiS55aP6byg5reR5Y+U5pqR5p6i5aKF5L+e5puZ5oqS56uW6JyA6Jav5qKz5oiN5oGV5a2w5rKt6LWO5bq25ryx5aG+5YCP5r6N57q+5aed6I+96buN6IWn56er5q+55q6z55aL5pGFXCIsXHJcblx0XCJzaHVhaVwiOiBcIueOh+ihsOW4heaRlOeUqeifgFwiLFxyXG5cdFwibHZlXCI6IFwi55Wl5o6g6ZSKXCIsXHJcblx0XCJtYVwiOiBcIuS5iOmprOWQl+aRqem6u+eggeWmiOeOm+WYm+mqguaKueiaguWUm+ifhueKuOadqVwiLFxyXG5cdFwibWVcIjogXCLkuYjpur1cIixcclxuXHRcIm1haVwiOiBcIuS5sOWNlum6pui/iOiEieWfi+mcvuiNrOWKolwiLFxyXG5cdFwibWFuXCI6IFwi5ruh5oWi5pu85ryr5Z+L6JST556S6Juu6bOX6aaS5bmU6LCp6J6o54az57ym6ZWY6aKf5aKB6Z6UXCIsXHJcblx0XCJtaVwiOiBcIuexs+WvhuenmOi/t+W8peicnOiwnOinhemdoeazjOecr+m6i+eMleiwp+WSqueznOWuk+axqOmGmuWYp+W8reiEkuWGluW5gueloue4u+iYvOiKiOezuOaViVwiLFxyXG5cdFwibWVuXCI6IFwi5Lus6Zeo6Ze3556S5rG25omq54SW5oeR6Z6U6ZKUXCIsXHJcblx0XCJtYW5nXCI6IFwi5b+Z55uy6Iyr6IqS5rCT6I696J+S6YKZ56Gt5rytXCIsXHJcblx0XCJtZW5nXCI6IFwi6JKZ55uf5qKm54yb5a2f6JCM5rCT5pym6ZSw5qqs5YuQ5oe16J+S6Jyi6Jm76bu+6KCT6Imo55SN6ImL556i56SeXCIsXHJcblx0XCJtaWFvXCI6IFwi6IuX56eS5aaZ5o+P5bqZ556E57yq5ri65re86JeQ57yI6YKI6bmL5p2q55yH5Za1XCIsXHJcblx0XCJtb3VcIjogXCLmn5DosIvniZ/nvKrnnLjlk57pjarom5HkvpTljrZcIixcclxuXHRcIm1pdVwiOiBcIue8quiwrFwiLFxyXG5cdFwibWVpXCI6IFwi576O5rKh5q+P54Wk5qKF5aqS5p6a5aa555yJ6a2F6ZyJ5pin5aqa546r6YW26ZWB5rmE5a+Q6I6T6KKC5qWj57Oc5bWL6ZWF5rW854y46bmbXCIsXHJcblx0XCJ3ZW5cIjogXCLmlofpl67pl7vnqLPmuKnnurnlkLvomorpm6/ntIrnmJ/msbbpn6vliI7nkrrnjp/pmIxcIixcclxuXHRcIm1pZVwiOiBcIueBreiUkeevvuS5nOWSqeigm1wiLFxyXG5cdFwibWluZ1wiOiBcIuaYjuWQjeWRvem4o+mTreWGpeiMl+a6n+mFqeeekeien+aanVwiLFxyXG5cdFwibmFcIjogXCLlhoXljZfpgqPnurPmi7/lk6rlqJzpkqDlkZDmjbroobLplY7ogq1cIixcclxuXHRcIm5laVwiOiBcIuWGhemCo+WTqummgVwiLFxyXG5cdFwibnVvXCI6IFwi6Zq+6K+65oyq5aic57Ov5oem5YKp5ZaP5pCm6ZSYXCIsXHJcblx0XCJydW9cIjogXCLoi6XlvLHlgYznrqxcIixcclxuXHRcIm5hbmdcIjogXCLlm4rpppXlm5Tmm6nmlK5cIixcclxuXHRcIm5hb1wiOiBcIuiEkemXueaBvOaMoOeRmea3luWtrOWetOmTmeahoeWRtuehh+eMseibslwiLFxyXG5cdFwibmlcIjogXCLkvaDlsLzlkaLms6XnlpHmi5/pgIblgKrlpq7ohbvljL/pnJPmurrml47mmLXlna3pk4zpsrXkvLLmgKnnnajnjIpcIixcclxuXHRcIm5lblwiOiBcIuWrqeaBgVwiLFxyXG5cdFwibmVuZ1wiOiBcIuiDvVwiLFxyXG5cdFwibmluXCI6IFwi5oKo5oGBXCIsXHJcblx0XCJuaWFvXCI6IFwi6bif5bC/5rq66KKF6ISy6IyR5ayyXCIsXHJcblx0XCJuaWVcIjogXCLmkYTogYLmjY/mtoXplY3lrb3mjbvomJblla7ouZHll6voh6zplYrpop7kuZzpmadcIixcclxuXHRcIm5pYW5nXCI6IFwi5aiY6YW/XCIsXHJcblx0XCJuaW5nXCI6IFwi5a6B5Yed5oun5rOe5p+g5ZKb54ue5L2e6IGN55SvXCIsXHJcblx0XCJudVwiOiBcIuWKquaAkuWltOW8qempveW4keWtpeiDrFwiLFxyXG5cdFwibnZcIjogXCLlpbPpkpXooYTmgadcIixcclxuXHRcInJ1XCI6IFwi5YWl5aaC5aWz5Lmz5YSS6L6x5rGd6Iy56KSl5a265r+h6KCV5ZqF57yb5rq96ZO35rSz6Ja36KWm6aKl6JOQXCIsXHJcblx0XCJudWFuXCI6IFwi5pqWXCIsXHJcblx0XCJudmVcIjogXCLomZDnlp9cIixcclxuXHRcInJlXCI6IFwi54Ot6Iul5oO55ZaPXCIsXHJcblx0XCJvdVwiOiBcIuWMuuasp+WBtuautOWRleemuuiXleiutOm4peeTr+aypOiApuaAhFwiLFxyXG5cdFwicGFvXCI6IFwi6LeR54Ku5rOh5oqb5Yio6KKN5ZKG55ax5bqW54uN5YyP6ISsXCIsXHJcblx0XCJwb3VcIjogXCLliZbmjoroo5JcIixcclxuXHRcInBlblwiOiBcIuWWt+ebhua5k1wiLFxyXG5cdFwicGllXCI6IFwi556l5pKH6Iuk5rCV5Li/XCIsXHJcblx0XCJwaW5cIjogXCLlk4HotKvogZjpopHmi7zmi5rpoqblp5jlq5TmpoDniZ1cIixcclxuXHRcInNlXCI6IFwi6Imy5aGe55Gf5rap5ZWs56mR6ZOv5qetXCIsXHJcblx0XCJxaW5nXCI6IFwi5oOF6Z2S5riF6K+35Lqy6L275bqG5YC+6aG35Y2/5pm05rCi5pOO5rCw572E56Os6Jy7566Q6bKt57au6IuY6bul5ZyK5qqg6KymXCIsXHJcblx0XCJ6YW5cIjogXCLotZ7mmoLmlJLloJHmmJ3nsKrns4znk5LpjL7otrHmi7ZcIixcclxuXHRcInNoYW9cIjogXCLlsJHnu43lj6zng6fnqI3pgrXlk6jpn7bmjY7li7rmoqLpnpjoio3oi5Xliq3oiYTnrbLmnZPmvbJcIixcclxuXHRcInNhb1wiOiBcIuaJq+mqmuWrguaioue8q+aQlOeYmeiHiuWfvee8sumzi1wiLFxyXG5cdFwic2hhXCI6IFwi5rKZ5Y6m5p2A57qx56CC5ZWl6I6O5Yi55p2J5YK754We6bKo6ZyO5ZeE55en6KOf5oyy6ZOp5ZS85q2DXCIsXHJcblx0XCJ4dWFuXCI6IFwi5Y6/6YCJ5a6j5Yi45peL5oKs6L2p5Zan546E57ua5riy55KH54Kr6JCx55mj5ryp55yp5pqE54WK6ZOJ5qWm5rOr6LCW55eD56K55o+O6ZWf5YSHXCIsXHJcblx0XCJyYW5cIjogXCLnhLbmn5Pnh4Plhonoi5Lpq6/omrpcIixcclxuXHRcInJhbmdcIjogXCLorqnlo6TmlJjlmrfnk6TnqbDnprNcIixcclxuXHRcInJhb1wiOiBcIue7leaJsOmltuWohuahoeiNm1wiLFxyXG5cdFwicmVuZ1wiOiBcIuS7jeaJlFwiLFxyXG5cdFwicmlcIjogXCLml6VcIixcclxuXHRcInJvdVwiOiBcIuiCieaflOaPieezhemeo+i5glwiLFxyXG5cdFwicnVhblwiOiBcIui9r+mYruacilwiLFxyXG5cdFwicnVuXCI6IFwi5ram6ZewXCIsXHJcblx0XCJzYVwiOiBcIuiQqOa0kuaSkumjkuWNheS7qOiEjlwiLFxyXG5cdFwic3VvXCI6IFwi5omA5Lqb57Si57yp6ZSB6I6O5qKt55CQ5Zem5ZSG5ZSi5aiR6JOR576n5oyy5qGr5ZeN552DXCIsXHJcblx0XCJzYWlcIjogXCLmgJ3otZvloZ7oha7lmbvps4NcIixcclxuXHRcInNodWlcIjogXCLor7TmsLTnqI7osIHnnaHmsLVcIixcclxuXHRcInNhbmdcIjogXCLmoZHkuKfll5PmkKHpoqHno4lcIixcclxuXHRcInNlblwiOiBcIuajrlwiLFxyXG5cdFwic2VuZ1wiOiBcIuWDp1wiLFxyXG5cdFwic2hhaVwiOiBcIuetm+aZklwiLFxyXG5cdFwic2hhbmdcIjogXCLkuIrllYblsJrkvKTotY/msaToo7PlopLmmYzlnqfop57mrofnhrXnu7FcIixcclxuXHRcInhpbmdcIjogXCLooYznnIHmmJ/ohaXnjKnmg7rlhbTliJHlnovlvaLpgqLppafphpLlubjmnY/mgKflp5PpmYnojYfojaXmk6TmgrvnoY5cIixcclxuXHRcInNob3VcIjogXCLmlLbmiYvlj5fpppbllK7mjojlrojlr7/nmKblhb3ni6nnu7boiY/miYxcIixcclxuXHRcInNodW9cIjogXCLor7TmlbDnoZXng4HmnJTpk4TlpoHmp4rokrTmkKBcIixcclxuXHRcInN1XCI6IFwi6YCf57Sg6IuP6K+J57yp5aGR6IKD5L+X5a6/57Kf5rqv6YWl5aSZ5oSr57CM56ij5YOz6LCh5raR6JSM5ZeJ6KerXCIsXHJcblx0XCJzaHVhXCI6IFwi5Yi36ICN5ZSwXCIsXHJcblx0XCJzaHVhblwiOiBcIuagk+aLtOa2rumXqVwiLFxyXG5cdFwic2h1blwiOiBcIumhuueerOiInOWQrlwiLFxyXG5cdFwic29uZ1wiOiBcIumAgeadvuWui+iuvOmiguiAuOivteW1qea3nuaAguaCmuW0p+WHh+W/querpuiPmFwiLFxyXG5cdFwic291XCI6IFwi6ImY5pCc5pOe5Ze95ZeW5Y+f6aaK6Jau6aOV5Ze+5rqy6ZS86J6L556NXCIsXHJcblx0XCJzdW5cIjogXCLmjZ/lrZnnrIvojarmpqvpmrzni7Lpo6dcIixcclxuXHRcInRlbmdcIjogXCLohb7nlrzol6Tmu5XoqopcIixcclxuXHRcInRpZVwiOiBcIumTgei0tOW4lumkruiQnFwiLFxyXG5cdFwidHVcIjogXCLlnJ/nqoHlm77pgJTlvpLmtoLlkJDlsaDlhZTnp4Plh7jojbzpko3oj5/loI3phbRcIixcclxuXHRcIndhaVwiOiBcIuWkluatquW0tFwiLFxyXG5cdFwid2FuZ1wiOiBcIueOi+acm+W+gOe9keW/mOS6oeaXuuaxquaeieWmhOaDmOe9lOi+i+mtjVwiLFxyXG5cdFwid2VuZ1wiOiBcIue/geWXoeeTruiTiuiVuVwiLFxyXG5cdFwiemh1YVwiOiBcIuaKk+aMneeIqlwiLFxyXG5cdFwieWFuZ1wiOiBcIuagt+WFu+WkrumYs+a0i+aJrOadqOe+iuivpuawp+S7sOenp+eXkua8vueWoeazseaug+aBmem4r+W+ieS9r+aAj+eCgOeDiumeheibmFwiLFxyXG5cdFwieGlvbmdcIjogXCLpm4TlhYTnhorog7jlh7bljIjmsbnoio5cIixcclxuXHRcInlvXCI6IFwi5ZOf5ZS3XCIsXHJcblx0XCJ5b25nXCI6IFwi55So5rC45oul5YuH5raM5rOz5bq45L+R6LiK5L2j5ZKP6ZuN55Ss6ZWb6IeD6YKV6Ju55oG/5oW15aOF55eI6bOZ5aKJ6aWU5ZaBXCIsXHJcblx0XCJ6YVwiOiBcIuadguaJjuWSseeguOWSi+WMneWSguaLtlwiLFxyXG5cdFwiemFpXCI6IFwi5Zyo5YaN54G+6L295qC95LuU5a6w5ZOJ5bS955S+XCIsXHJcblx0XCJ6YW9cIjogXCLpgKDml6npga3mnqPlmarngbbnh6Xns5/lh7/ouoHol7vnmoLmvqHomqTllKNcIixcclxuXHRcInplaVwiOiBcIui0vFwiLFxyXG5cdFwiemVuXCI6IFwi5oCO6LCuXCIsXHJcblx0XCJ6ZW5nXCI6IFwi5aKe5pu+57u86LWg5oaO6ZSD55SR572+57yvXCIsXHJcblx0XCJ6aGVpXCI6IFwi6L+ZXCIsXHJcblx0XCJ6b3VcIjogXCLotbDpgrnlpY/mj43or7npqbrpmazmpbHphLnpsrBcIixcclxuXHRcInpodWFpXCI6IFwi6L2s5ou9XCIsXHJcblx0XCJ6dW5cIjogXCLlsIrpgbXps5/mqL3mkplcIixcclxuXHRcImRpYVwiOiBcIuWXslwiLFxyXG5cdFwibm91XCI6IFwi6ICoXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBpbnlpblV0aWwgPSB7XHJcblx0Ly/liqDovb3lrZflhbhcclxuXHRwYXJzZURpY3QoKSB7XHJcblx0XHRkaWN0LmZpcnN0bGV0dGVyID0gcGlueWluX2RpY3RfZmlyc3RsZXR0ZXJcclxuXHRcdGRpY3Qubm90b25lID0ge31cclxuXHRcdGRpY3QucHkyaHogPSBwaW55aW5fZGljdF9ub3RvbmVcclxuXHRcdGZvciAodmFyIGkgaW4gcGlueWluX2RpY3Rfbm90b25lKSB7XHJcblx0XHRcdHZhciB0ZW1wID0gcGlueWluX2RpY3Rfbm90b25lW2ldXHJcblx0XHRcdGZvciAodmFyIGogPSAwLCBsZW4gPSB0ZW1wLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XHJcblx0XHRcdFx0ZGljdC5ub3RvbmVbdGVtcFtqXV0gPSBpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdC8v5qC55o2u5rGJ5a2X6I635Y+W5ou86Z+z77yM5aaC5p6c5LiN5piv5rGJ5a2X55u05o6l6L+U5Zue5Y6f5a2X56ymXHJcblx0Z2V0UGlueWluKGNoaW5lc2UsIHNwbGl0dGVyLCB3aXRodG9uZSwgcG9seXBob25lKSB7XHJcblx0XHRpZiAoIWNoaW5lc2UgfHwgL14gKyQvZy50ZXN0KGNoaW5lc2UpKSByZXR1cm4gJyc7XHJcblx0XHRzcGxpdHRlciA9IHNwbGl0dGVyID09IHVuZGVmaW5lZCA/ICcnIDogc3BsaXR0ZXI7XHJcblx0XHR3aXRodG9uZSA9IHdpdGh0b25lID09IHVuZGVmaW5lZCA/IGZhbHNlIDogd2l0aHRvbmU7XHJcblx0XHRwb2x5cGhvbmUgPSBwb2x5cGhvbmUgPT0gdW5kZWZpbmVkID8gZmFsc2UgOiBwb2x5cGhvbmU7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRpZiAoZGljdC53aXRodG9uZSkgeyAvLyDkvJjlhYjkvb/nlKjluKblo7DosIPnmoTlrZflhbjmlofku7ZcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGNoaW5lc2UubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHR2YXIgcGlueWluID0gZGljdC53aXRodG9uZVtjaGluZXNlW2ldXTtcclxuXHRcdFx0XHRpZiAocGlueWluKSB7XHJcblx0XHRcdFx0XHRpZiAoIXBvbHlwaG9uZSkgcGlueWluID0gcGlueWluLnJlcGxhY2UoLyAuKiQvZywgJycpOyAvLyDlpoLmnpzkuI3pnIDopoHlpJrpn7PlrZdcclxuXHRcdFx0XHRcdGlmICghd2l0aHRvbmUpIHBpbnlpbiA9IHRoaXMucmVtb3ZlVG9uZShwaW55aW4pOyAvLyDlpoLmnpzkuI3pnIDopoHlo7DosINcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVzdWx0LnB1c2gocGlueWluIHx8IGNoaW5lc2VbaV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKGRpY3Qubm90b25lKSB7IC8vIOS9v+eUqOayoeacieWjsOiwg+eahOWtl+WFuOaWh+S7tlxyXG5cdFx0XHRpZiAod2l0aHRvbmUpIGNvbnNvbGUud2FybigncGlueWluX2RpY3Rfbm90b25lIERpY3Rpb25hcnkgZmlsZXMgZG8gbm90IHN1cHBvcnQgdG9uZXMhJyk7XHJcblx0XHRcdGlmIChwb2x5cGhvbmUpIGNvbnNvbGUud2FybigncGlueWluX2RpY3Rfbm90b25lIERpY3Rpb25hcnkgZmlsZXMgZG8gbm90IHN1cHBvcnQgcG9seXBob255IScpO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gY2hpbmVzZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdHZhciB0ZW1wID0gY2hpbmVzZS5jaGFyQXQoaSk7XHJcblx0XHRcdFx0aWYgKGRpY3Qubm90b25lW3RlbXBdKVxyXG5cdFx0XHRcdFx0ZGljdC5ub3RvbmVbdGVtcF0gPSBkaWN0Lm5vdG9uZVt0ZW1wXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIGRpY3Qubm90b25lW3RlbXBdXHJcblx0XHRcdFx0XHQuc3Vic3RyaW5nKDEpO1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGRpY3Qubm90b25lW3RlbXBdIHx8IHRlbXApO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyAnU29ycnksIG5vIHN1aXRhYmxlIGRpY3Rpb25hcnkgZmlsZXMgd2VyZSBmb3VuZCEnO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFwb2x5cGhvbmUpIHJldHVybiByZXN1bHQuam9pbihzcGxpdHRlcik7XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWYgKHdpbmRvdy5waW55aW5fZGljdF9wb2x5cGhvbmUpIHJldHVybiBwYXJzZVBvbHlwaG9uZShjaGluZXNlLCByZXN1bHQsIHNwbGl0dGVyLCB3aXRodG9uZSk7XHJcblx0XHRcdGVsc2UgcmV0dXJuIGhhbmRsZVBvbHlwaG9uZShyZXN1bHQsICcgJywgc3BsaXR0ZXIpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Ly/ojrflj5bmsYnlrZfnmoTmi7zpn7PpppblrZfmr41cclxuXHRnZXRGaXJzdExldHRlcihzdHIsIHBvbHlwaG9uZSkge1xyXG5cdFx0cG9seXBob25lID0gcG9seXBob25lID09IHVuZGVmaW5lZCA/IGZhbHNlIDogcG9seXBob25lO1xyXG5cdFx0aWYgKCFzdHIgfHwgL14gKyQvZy50ZXN0KHN0cikpIHJldHVybiAnJztcclxuXHRcdGlmIChkaWN0LmZpcnN0bGV0dGVyKSAvLyDkvb/nlKjpppblrZfmr43lrZflhbjmlofku7ZcclxuXHRcdHtcclxuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciB1bmljb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcblx0XHRcdFx0dmFyIGNoID0gc3RyLmNoYXJBdChpKTtcclxuXHRcdFx0XHRpZiAodW5pY29kZSA+PSAxOTk2OCAmJiB1bmljb2RlIDw9IDQwODY5KSB7XHJcblx0XHRcdFx0XHRjaCA9IGRpY3QuZmlyc3RsZXR0ZXIuYWxsLmNoYXJBdCh1bmljb2RlIC0gMTk5NjgpO1xyXG5cdFx0XHRcdFx0aWYgKHBvbHlwaG9uZSkgY2ggPSBkaWN0LmZpcnN0bGV0dGVyLnBvbHlwaG9uZVt1bmljb2RlXSB8fCBjaDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goY2gpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghcG9seXBob25lKSByZXR1cm4gcmVzdWx0LmpvaW4oJycpOyAvLyDlpoLmnpzkuI3nlKjnrqHlpJrpn7PlrZfvvIznm7TmjqXlsIbmlbDnu4Tmi7zmjqXmiJDlrZfnrKbkuLJcclxuXHRcdFx0ZWxzZSByZXR1cm4gaGFuZGxlUG9seXBob25lKHJlc3VsdCwgJycsICcnKTsgLy8g5aSE55CG5aSa6Z+z5a2X77yM5q2k5pe255qEcmVzdWx057G75Ly85LqO77yaWydEJywgJ1pDJywgJ0YnXVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHB5ID0gdGhpcy5nZXRQaW55aW4oc3RyLCAnICcsIGZhbHNlLCBwb2x5cGhvbmUpO1xyXG5cdFx0XHRweSA9IHB5IGluc3RhbmNlb2YgQXJyYXkgPyBweSA6IFtweV07XHJcblx0XHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBweS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKHB5W2ldLnJlcGxhY2UoLyhefCApKFxcdylcXHcqL2csIGZ1bmN0aW9uKG0sICQxLCAkMikge1xyXG5cdFx0XHRcdFx0cmV0dXJuICQyLnRvVXBwZXJDYXNlKCk7XHJcblx0XHRcdFx0fSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghcG9seXBob25lKSByZXR1cm4gcmVzdWx0WzBdO1xyXG5cdFx0XHRlbHNlIHJldHVybiBzaW1wbGVVbmlxdWUocmVzdWx0KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8v5ou86Z+z6L2s5rGJ5a2X77yM5Y+q5pSv5oyB5Y2V5Liq5rGJ5a2X77yM6L+U5Zue5omA5pyJ5Yy56YWN55qE5rGJ5a2X57uE5ZCIXHJcblx0Z2V0SGFuemkocGlueWluKSB7XHJcblx0XHRpZiAoIWRpY3QucHkyaHopIHtcclxuXHRcdFx0dGhyb3cgJ1NvcnJ5LCBubyBzdWl0YWJsZSBkaWN0aW9uYXJ5IGZpbGVzIHdlcmUgZm91bmQhJztcclxuXHRcdH1cclxuXHRcdHJldHVybiBkaWN0LnB5Mmh6W3Bpbnlpbl0gfHwgJyc7XHJcblx0fSxcclxuXHQvL+WOu+mZpOaLvOmfs+S4reeahOWjsOiwg++8jOavlOWmguWwhiB4aceObyBtw61uZyB0w7NuZyB4dcOpIOi9rOaNouaIkCB4aWFvIG1pbmcgdG9uZyB4dWVcclxuXHRyZW1vdmVUb25lKHBpbnlpbikge1xyXG5cdFx0dmFyIHRvbmVNYXAgPSB7XHJcblx0XHRcdFwixIFcIjogXCJhMVwiLFxyXG5cdFx0XHRcIsOhXCI6IFwiYTJcIixcclxuXHRcdFx0XCLHjlwiOiBcImEzXCIsXHJcblx0XHRcdFwiw6BcIjogXCJhNFwiLFxyXG5cdFx0XHRcIsWNXCI6IFwibzFcIixcclxuXHRcdFx0XCLDs1wiOiBcIm8yXCIsXHJcblx0XHRcdFwix5JcIjogXCJvM1wiLFxyXG5cdFx0XHRcIsOyXCI6IFwibzRcIixcclxuXHRcdFx0XCLEk1wiOiBcImUxXCIsXHJcblx0XHRcdFwiw6lcIjogXCJlMlwiLFxyXG5cdFx0XHRcIsSbXCI6IFwiZTNcIixcclxuXHRcdFx0XCLDqFwiOiBcImU0XCIsXHJcblx0XHRcdFwixKtcIjogXCJpMVwiLFxyXG5cdFx0XHRcIsOtXCI6IFwiaTJcIixcclxuXHRcdFx0XCLHkFwiOiBcImkzXCIsXHJcblx0XHRcdFwiw6xcIjogXCJpNFwiLFxyXG5cdFx0XHRcIsWrXCI6IFwidTFcIixcclxuXHRcdFx0XCLDulwiOiBcInUyXCIsXHJcblx0XHRcdFwix5RcIjogXCJ1M1wiLFxyXG5cdFx0XHRcIsO5XCI6IFwidTRcIixcclxuXHRcdFx0XCLDvFwiOiBcInYwXCIsXHJcblx0XHRcdFwix5ZcIjogXCJ2MVwiLFxyXG5cdFx0XHRcIseYXCI6IFwidjJcIixcclxuXHRcdFx0XCLHmlwiOiBcInYzXCIsXHJcblx0XHRcdFwix5xcIjogXCJ2NFwiLFxyXG5cdFx0XHRcIsWEXCI6IFwibjJcIixcclxuXHRcdFx0XCLFiFwiOiBcIm4zXCIsXHJcblx0XHRcdFwi7p+HXCI6IFwibTJcIlxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBwaW55aW4ucmVwbGFjZSgvW8SBw6HHjsOgxY3Ds8eSw7LEk8OpxJvDqMSrw63HkMOsxavDuseUw7nDvMeWx5jHmsecxYTFiO6fh10vZywgZnVuY3Rpb24obSkge1xyXG5cdFx0XHRyZXR1cm4gdG9uZU1hcFttXVswXTtcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbi8v5aSE55CG5aSa6Z+z5a2X77yMIOWwhuexu+S8vFsnRCcsICdaQycsICdGJ10g6L2s5o2i5oiQWydEWkYnLCAnRENGJ11cclxuZnVuY3Rpb24gaGFuZGxlUG9seXBob25lKGFycmF5LCBzcGxpdHRlciwgam9pbkNoYXIpIHtcclxuXHRzcGxpdHRlciA9IHNwbGl0dGVyIHx8ICcnO1xyXG5cdHZhciByZXN1bHQgPSBbJyddLFxyXG5cdFx0dGVtcCA9IFtdO1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHRcdHRlbXAgPSBbXTtcclxuXHRcdHZhciB0ID0gYXJyYXlbaV0uc3BsaXQoc3BsaXR0ZXIpO1xyXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCB0Lmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgcmVzdWx0Lmxlbmd0aDsgaysrKVxyXG5cdFx0XHRcdHRlbXAucHVzaChyZXN1bHRba10gKyAocmVzdWx0W2tdID8gam9pbkNoYXIgOiAnJykgKyB0W2pdKTtcclxuXHRcdH1cclxuXHRcdHJlc3VsdCA9IHRlbXA7XHJcblx0fVxyXG5cdHJldHVybiBzaW1wbGVVbmlxdWUocmVzdWx0KTtcclxufVxyXG5cclxuLy/moLnmja7or43lupPmib7lh7rlpJrpn7PlrZfmraPnoa7nmoTor7vpn7NcclxuZnVuY3Rpb24gcGFyc2VQb2x5cGhvbmUoY2hpbmVzZSwgcmVzdWx0LCBzcGxpdHRlciwgd2l0aHRvbmUpIHtcclxuXHR2YXIgcG9seSA9IHdpbmRvdy5waW55aW5fZGljdF9wb2x5cGhvbmU7XHJcblx0dmFyIG1heCA9IDc7IC8vIOacgOWkmuWPquiAg+iZkTfkuKrmsYnlrZfnmoTlpJrpn7PlrZfor43vvIzomb3nhLbor43lupPph4zpnaLmnIkxMOS4quWtl+eahO+8jOS9huaYr+aVsOmHj+mdnuW4uOWwke+8jOS4uuS6huaVtOS9k+aViOeOh+aaguaXtuW/veeVpeS5i1xyXG5cdHZhciB0ZW1wID0gcG9seVtjaGluZXNlXTtcclxuXHRpZiAodGVtcCkgLy8g5aaC5p6c55u05o6l5om+5Yiw5LqG57uT5p6cXHJcblx0e1xyXG5cdFx0dGVtcCA9IHRlbXAuc3BsaXQoJyAnKTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRyZXN1bHRbaV0gPSB0ZW1wW2ldIHx8IHJlc3VsdFtpXTtcclxuXHRcdFx0aWYgKCF3aXRodG9uZSkgcmVzdWx0W2ldID0gcGlueWluVXRpbC5yZW1vdmVUb25lKHJlc3VsdFtpXSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oc3BsaXR0ZXIpO1xyXG5cdH1cclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaW5lc2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdHRlbXAgPSAnJztcclxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgbWF4ICYmIChpICsgaikgPCBjaGluZXNlLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdGlmICghL15bXFx1MkU4MC1cXHU5RkZGXSskLy50ZXN0KGNoaW5lc2VbaSArIGpdKSkgYnJlYWs7IC8vIOWmguaenOeisOWIsOmdnuaxieWtl+ebtOaOpeWBnOatouacrOasoeafpeaJvlxyXG5cdFx0XHR0ZW1wICs9IGNoaW5lc2VbaSArIGpdO1xyXG5cdFx0XHR2YXIgcmVzID0gcG9seVt0ZW1wXTtcclxuXHRcdFx0aWYgKHJlcykgLy8g5aaC5p6c5om+5Yiw5LqG5aSa6Z+z5a2X6K+N6K+tXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZXMgPSByZXMuc3BsaXQoJyAnKTtcclxuXHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8PSBqOyBrKyspIHtcclxuXHRcdFx0XHRcdGlmIChyZXNba10pIHJlc3VsdFtpICsga10gPSB3aXRodG9uZSA/IHJlc1trXSA6IHBpbnlpblV0aWwucmVtb3ZlVG9uZShyZXNba10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIOacgOWQjui/meS4gOatpeaYr+S4uuS6humYsuatouWHuueOsOivjeW6k+mHjOmdouS5n+ayoeacieWMheWQq+eahOWkmumfs+Wtl+ivjeivrVxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRyZXN1bHRbaV0gPSByZXN1bHRbaV0ucmVwbGFjZSgvIC4qJC9nLCAnJylcclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdC5qb2luKHNwbGl0dGVyKVxyXG59XHJcblxyXG4vLyDmlbDnu4Tljrvph41cclxuZnVuY3Rpb24gc2ltcGxlVW5pcXVlKGFycmF5KSB7XHJcblx0dmFyIHJlc3VsdCA9IFtdXHJcblx0dmFyIGhhc2ggPSB7fVxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBrZXkgPSAodHlwZW9mIGFycmF5W2ldKSArIGFycmF5W2ldO1xyXG5cdFx0aWYgKCFoYXNoW2tleV0pIHtcclxuXHRcdFx0cmVzdWx0LnB1c2goYXJyYXlbaV0pXHJcblx0XHRcdGhhc2hba2V5XSA9IHRydWVcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5waW55aW5VdGlsLnBhcnNlRGljdCgpXHJcbnBpbnlpblV0aWwuZGljdCA9IGRpY3RcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0cGlueWluVXRpbDogcGlueWluVXRpbFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///103\n");

/***/ }),
/* 104 */
/*!******************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/creation/createChat.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_createChat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./createChat.vue?vue&type=script&lang=js&mpType=page */ 105);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_createChat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_createChat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_createChat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_createChat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_createChat_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXl0QixDQUFnQiwydEJBQUcsRUFBQyIsImZpbGUiOiIxMDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jcmVhdGVDaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jcmVhdGVDaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///104\n");

/***/ }),
/* 105 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/creation/createChat.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 47));\nvar _config = __webpack_require__(/*! ../../config.js */ 15);\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      users: [],\n      name: '',\n      img: '',\n      id: ''\n    };\n  },\n  onLoad: function onLoad(e) {\n    // this.name = this.$route.query.name;\n    // this.img = this.$route.query.img;\n    // this.id = this.$route.query.id;\n    this.name = e.name;\n    this.img = e.img;\n    this.id = e.id;\n    this.searchUsers();\n  },\n  methods: {\n    // click(e) {\n    // \tif (!this.selectedUsers.includes(e)) {\n    // \tthis.selectedUsers.push(e);\n    // \t} \n    // \telse {\n    // \t\tthis.selectedUsers.splice(this.selectedUsers.indexOf(e), 1);\n    // \t}\n    // \tconsole.log(this.selectedUsers);\n    // },\n    searchUsers: function searchUsers() {\n      var _this = this;\n      uni.request({\n        url: _config.BASE_URL + ':' + _config.SERVER_PORT + \"/users\",\n        method: 'GET'\n      }).then(function (response) {\n        var _response = (0, _slicedToArray2.default)(response, 2),\n          error = _response[0],\n          res = _response[1];\n        if (res && res.data) {\n          _this.users = res.data;\n          // console.log(this.users);\n        } else {\n          __f__(\"error\", 'No data in response', \" at pages/creation/createChat.vue:48\");\n        }\n      }).catch(function (error) {\n        __f__(\"error\", error, \" at pages/creation/createChat.vue:51\");\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY3JlYXRpb24vY3JlYXRlQ2hhdC52dWUiXSwibmFtZXMiOlsiZGF0YSIsInVzZXJzIiwibmFtZSIsImltZyIsImlkIiwib25Mb2FkIiwibWV0aG9kcyIsInNlYXJjaFVzZXJzIiwidW5pIiwidXJsIiwibWV0aG9kIiwiZXJyb3IiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBUUE7Ozs7Ozs7O2VBQ0E7RUFDQUE7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtRQUNBO1VBQUFDO1VBQUFDO1FBQ0E7VUFDQTtVQUNBO1FBQ0E7VUFDQTtRQUNBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiMTA1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwicGFnZS1tYWluXCI+XHJcblx0XHQ8bHotaW5kZXhlZC1saXN0IDpkYXRhTGlzdD1cInVzZXJzXCIgOm5hbWU9XCJuYW1lXCIgOmltZz1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICA6Y3VycmVudFVzZXJJRD1cImlkXCI+PC9sei1pbmRleGVkLWxpc3Q+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgQkFTRV9VUkwsIFNFUlZFUl9QT1JUIH0gZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR1c2VyczogW10sXHJcblx0XHRcdG5hbWU6ICcnLFxyXG5cdFx0XHRpbWc6ICcnLFxyXG5cdFx0XHRpZDogJycsXHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkxvYWQoZSkge1xyXG5cdFx0Ly8gdGhpcy5uYW1lID0gdGhpcy4kcm91dGUucXVlcnkubmFtZTtcclxuXHRcdC8vIHRoaXMuaW1nID0gdGhpcy4kcm91dGUucXVlcnkuaW1nO1xyXG5cdFx0Ly8gdGhpcy5pZCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LmlkO1xyXG5cdFx0dGhpcy5uYW1lID0gZS5uYW1lO1xyXG5cdFx0dGhpcy5pbWcgPSBlLmltZztcclxuXHRcdHRoaXMuaWQgPSBlLmlkO1xyXG5cdFx0dGhpcy5zZWFyY2hVc2VycygpO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Ly8gY2xpY2soZSkge1xyXG5cdFx0Ly8gXHRpZiAoIXRoaXMuc2VsZWN0ZWRVc2Vycy5pbmNsdWRlcyhlKSkge1xyXG5cdFx0Ly8gXHR0aGlzLnNlbGVjdGVkVXNlcnMucHVzaChlKTtcclxuXHRcdC8vIFx0fSBcclxuXHRcdC8vIFx0ZWxzZSB7XHJcblx0XHQvLyBcdFx0dGhpcy5zZWxlY3RlZFVzZXJzLnNwbGljZSh0aGlzLnNlbGVjdGVkVXNlcnMuaW5kZXhPZihlKSwgMSk7XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIFx0Y29uc29sZS5sb2codGhpcy5zZWxlY3RlZFVzZXJzKTtcclxuXHRcdC8vIH0sXHJcblx0XHRzZWFyY2hVc2VycygpIHtcclxuXHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogQkFTRV9VUkwgKyAnOicgKyBTRVJWRVJfUE9SVCArIGAvdXNlcnNgLFxyXG5cdFx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgW2Vycm9yLCByZXNdID0gcmVzcG9uc2U7XHJcblx0XHRcdFx0aWYgKHJlcyAmJiByZXMuZGF0YSkge1xyXG5cdFx0XHRcdFx0dGhpcy51c2VycyA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy51c2Vycyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ05vIGRhdGEgaW4gcmVzcG9uc2UnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0fVxyXG59XHJcbjwvc2NyaXB0PiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///105\n");

/***/ }),
/* 106 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/App.vue ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 107);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDdU07QUFDdk0sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjEwNi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50c1xudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///106\n");

/***/ }),
/* 107 */
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 108);\n/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStxQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIxMDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0RvY3VtZW50cy9IQnVpbGRlclguMy42LjE4LjIwMjMwMTE3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0hCdWlsZGVyWC4zLjYuMTguMjAyMzAxMTcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi9Eb2N1bWVudHMvSEJ1aWxkZXJYLjMuNi4xOC4yMDIzMDExNy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///107\n");

/***/ }),
/* 108 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ0E7RUFDQUE7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjEwOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXHJcblx0XHR9LFxyXG5cdFx0b25TaG93OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93JylcclxuXHRcdH0sXHJcblx0XHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///108\n");

/***/ }),
/* 109 */
/*!************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/common/uni-socket.io.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),
/* 110 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Behavior = Behavior;
exports.Component = Component;
exports.Page = Page;
exports.nextTick = exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 47));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 111));
var _PROP_DEFAULT_VALUES;
function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}
function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var SOURCE_KEY = '__data__';
var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed'
};
var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);
var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize'
};
var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);
var PAGE_LIFECYCLE = ['onLoad', 'onShow', 'onReady', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}
function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}
function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {}
  };
  parseComponents(vueComponentOptions);
  parseData(mpComponentOptions.data, vueComponentOptions);
  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);
  return vueComponentOptions;
}
function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}
function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}
function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}
function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).push(mpComponentOptions[name]);
    }
  });
}
var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {}
};
function callDefinitionFilter(mpComponentOptions) {
  var behaviors = mpComponentOptions.behaviors,
    definitionFilter = mpComponentOptions.definitionFilter;
  var behaviorDefinitionFilters = [];
  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }
  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}
function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}
function parseBehavior(behavior) {
  var data = behavior.data,
    methods = behavior.methods,
    behaviors = behavior.behaviors,
    properties = behavior.properties;
  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: []
    }
  };
  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);
  return vueComponentOptions;
}
var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }
      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String
        };
      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    }
  }
};

function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}
function parseSinglePath(path) {
  return path.split('.');
}
function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {
    return parseSinglePath(path);
  });
}
function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }
  var mpObservers = vueComponentOptions.mpOptions.mpObservers;
  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path]
    });
  });
}
function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}
function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}
function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: ''
    };
  });
}
function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}
function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}
function parseComponent(mpComponentOptions) {
  var data = mpComponentOptions.data,
    options = mpComponentOptions.options,
    methods = mpComponentOptions.methods,
    behaviors = mpComponentOptions.behaviors,
    lifetimes = mpComponentOptions.lifetimes,
    observers = mpComponentOptions.observers,
    relations = mpComponentOptions.relations,
    properties = mpComponentOptions.properties,
    pageLifetimes = mpComponentOptions.pageLifetimes,
    externalClasses = mpComponentOptions.externalClasses;
  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: []
    }
  };
  parseComponents(vueComponentOptions);
  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);
  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);
  return vueComponentOptions;
}
function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}
function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}
function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}
function findParentRelation(parentVm, target, type) {
  var relations = parentVm && parentVm.$options.mpOptions && parentVm.$options.mpOptions.relations;
  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}
function initParentRelation(vm, childRelation, match) {
  var _match = match(vm, vm.$options.mpOptions.path),
    _match2 = (0, _slicedToArray2.default)(_match, 2),
    parentRelation = _match2[0],
    parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }
  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);
  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}
function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}
function initRelations(vm) {
  var _ref = vm.$options.mpOptions || {},
    relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}
function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {
    return handler();
  });
}
var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};
function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}
function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}
function setData(data, callback) {
  var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
 * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
 */

var _toString$1 = Object.prototype.toString;
/**
 * 深度assign的函数
 * @param {Object} targetObject 要被拷贝的目标对象
 * @param {Object} originObject 拷贝的源对象
 * @return {Object} merge后的对象
 */
var deepAssign = function deepAssign() {
  var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
 * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
 * @param {*} [originObj] 原对象
 * @return {Object|Array} 拷贝结果
 */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};
var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, String, ''), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Number, 0), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Boolean, false), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Object, null), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Array, []), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, null, null), _PROP_DEFAULT_VALUES);
function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}
function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}
function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}
function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}
function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}
function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' && typeof vm[observer] === 'function') {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}
function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }
  var propsData = deepClone(vm.$options.propsData) || {};
  var _loop = function _loop(key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      }
    });
  };
  for (var key in properties) {
    _loop(key);
  }
}
function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}
function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));
  vm[SOURCE_KEY] = instanceData;
  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    }
  };
  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition
  });
  vm.setData = setData;
  initProperties(vm, instanceData);
  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}
function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset
    };
    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop
    };
    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {
      return !vm._isDestroyed;
    });
  };
  vm._$updateProperties = updateProperties;
}
function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}
var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;
    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {
    // properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  }
};
global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);
function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}
function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}
function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}
function Behavior(options) {
  return options;
}
var nextTick = _vue.default.nextTick;
exports.nextTick = nextTick;
var index = uni.__$wx__;
var _default = index;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 46)))

/***/ }),
/* 111 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 112 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 113 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 114 */
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ 115);
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _get.apply(this, arguments);
}
module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 115 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 116);
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 116 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 117 */
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 118);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 118 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 119 */
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 113);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })
],[[0,"app-config"]]]);