(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chatroom/chatroom"],{

/***/ 48:
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/main.js?{"page":"pages%2Fchatroom%2Fchatroom"} ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _chatroom = _interopRequireDefault(__webpack_require__(/*! ./pages/chatroom/chatroom.vue */ 49));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_chatroom.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 49:
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/chatroom/chatroom.vue ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chatroom_vue_vue_type_template_id_4748afe6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatroom.vue?vue&type=template&id=4748afe6& */ 50);
/* harmony import */ var _chatroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatroom.vue?vue&type=script&lang=js& */ 52);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chatroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chatroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chatroom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatroom.vue?vue&type=style&index=0&lang=scss& */ 54);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 30);

var renderjs





/* normalize component */

var component = Object(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chatroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chatroom_vue_vue_type_template_id_4748afe6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chatroom_vue_vue_type_template_id_4748afe6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _chatroom_vue_vue_type_template_id_4748afe6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chatroom/chatroom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 50:
/*!***********************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/chatroom/chatroom.vue?vue&type=template&id=4748afe6& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_template_id_4748afe6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chatroom.vue?vue&type=template&id=4748afe6& */ 51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_template_id_4748afe6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_template_id_4748afe6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_template_id_4748afe6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_template_id_4748afe6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 51:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/chatroom/chatroom.vue?vue&type=template&id=4748afe6& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uniPopup: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 89))
    },
    uniPopupDialog: function () {
      return Promise.all(/*! import() | uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue */ 96))
    },
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
  var l0 = _vm.__map(_vm.groupChatMessages, function (e, index) {
    var $orig = _vm.__get_orig(e)
    var m0 = e.id == 1 && e.senderID != _vm.id ? _vm.timeProcess(e.time) : null
    var m1 = e.id == 2 || e.senderID == _vm.id ? _vm.timeProcess(e.time) : null
    var m2 = e.id == 4 ? _vm.timeProcess(e.time) : null
    return {
      $orig: $orig,
      m0: m0,
      m1: m1,
      m2: m2,
    }
  })
  var l1 = _vm.__map(_vm.singlechat, function (e, index) {
    var $orig = _vm.__get_orig(e)
    var m3 =
      (e.fromID == _vm.friendID || e.fromID2 == _vm.friendID2) &&
      e.fromID2 != e.toID2
        ? _vm.timeProcess(e.time)
        : null
    var m4 =
      (e.fromID == _vm.userID && e.toID == _vm.friendID) ||
      (e.fromID2 == _vm.userID2 && e.toID2 == _vm.friendID2)
        ? _vm.timeProcess(e.time)
        : null
    return {
      $orig: $orig,
      m3: m3,
      m4: m4,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        l1: l1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 52:
/*!*****************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/chatroom/chatroom.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chatroom.vue?vue&type=script&lang=js& */ 53);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 53:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/chatroom/chatroom.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _config = __webpack_require__(/*! ../../config.js */ 39);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      roomID: '',
      //room id
      chatm: '',
      //message content
      name: '',
      //users name
      uname: '',
      id: '',
      //users id
      friendID: '',
      userID: 'a',
      friendID2: '',
      userID2: '',
      img: '',
      //uses img
      chat: [],
      //chat content 
      member: 0,
      //member number
      animationData: {},
      bb: false,
      bg: 'none',
      users: '',
      otochat: [],
      groupChatMessages: [],
      singlechat: [],
      emojis: ['😂', '🙏', '😄', '😏', '😇', '😅', '😌', '😘', '😍', '🤓', '😜', '😎', '😊', '😳', '🙄', '😱', '😒', '😔', '😷', '👿', '🤗', '😩', '😤', '😣', '😰', '😴', '😬', '😭', '👻', '👍', '✌️', '👉', '👀', '🐶', '🐷', '😹', '⚡️', '🔥', '🌈', '🍏', '⚽️', '❤️'],
      isShowEmoji: false,
      cursorFocus: true,
      scrollHeight: 0
    };
  },
  computed: {
    // filteredMessages() {
    //   return this.groupChatMessages.filter(message => message.roomID === this.roomID);
    // }
  },
  onLoad: function onLoad(e) {
    this.name = e.name;
    this.img = e.img;
    this.id = e.id;
    this.roomID = e.roomID;
    this.join(this.name, this.img, this.id, this.roomID);
    this.welcome();
    this.myself();
    this.receiveGroupMsg();
    this.receiveAIMsg();
    this.receiveSingleMsg();
    this.quit();
    this.fetchGroupChatMessages();
    this.fetchSingleChatMessages();
    this.scrollToBottom();
  },
  methods: {
    getCursorFocus: function getCursorFocus() {
      this.cursorFocus = false;
    },
    inputDialogToggle: function inputDialogToggle() {
      var _this = this;
      uni.request({
        url: _config.BASE_URL + ':' + _config.SERVER_PORT + "/membershipVerify",
        method: 'GET',
        data: {
          id: this.id
        },
        success: function success(res) {
          if (res.statusCode === 200) {
            uni.navigateTo({
              url: '../upload/upload?roomID=' + _this.roomID
            });
          } else {
            if (res.statusCode === 400 || res.statusCode === 404) {
              uni.showToast({
                title: res.data.message,
                icon: 'none'
              });
            } else {
              _this.$refs.inputDialog.open();
            }
          }
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    },
    //make page scroll to the bottom
    scrollToBottom: function scrollToBottom() {
      this.$nextTick(function () {
        uni.pageScrollTo({
          scrollTop: 9999999999999999,
          duration: 100
        });
      });
    },
    singleChatScrollToBottom: function singleChatScrollToBottom() {
      var _this2 = this;
      this.$nextTick(function () {
        _this2.scrollHeight += 200;
      });
    },
    singleChatInitializeToBottom: function singleChatInitializeToBottom() {
      var _this3 = this;
      this.$nextTick(function () {
        _this3.scrollHeight += 20000000;
      });
    },
    // insert emoji
    insertText: function insertText(emoji) {
      this.chatm += emoji;
      this.isShowEmoji = false;
    },
    // show emoji
    showEmoji: function showEmoji(flag) {
      this.isShowEmoji = !flag;
    },
    gptUpload: function gptUpload(value) {
      var _this4 = this;
      uni.request({
        url: _config.BASE_URL + ':' + _config.SERVER_PORT + "/gptVerify",
        method: 'POST',
        data: {
          id: this.id,
          key: value
        },
        success: function success(res) {
          if (res.statusCode === 200) {
            uni.navigateTo({
              url: '../upload/upload?roomID=' + _this4.roomID
            });
          } else {
            uni.showToast({
              title: res.data.message,
              icon: 'none'
            });
          }
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    },
    quitRoom: function quitRoom() {
      this.socket.emit('quitRoom', {
        id: this.id,
        name: this.name,
        roomID: this.roomID
      });
      this.socket.emit('updateTipStatus', this.roomID);
    },
    disconnect: function disconnect() {
      this.socket.disconnect();
    },
    timeProcess: function timeProcess(date) {
      var time;
      var d = new Date(date);
      var n = new Date();
      //get time
      var dd = d.getTime();
      var h = d.getHours();
      var m = d.getMinutes();
      var Y = d.getFullYear();
      var M = d.getMonth() + 1;
      var D = d.getDate();
      //current time
      var nn = n.getTime();
      var hh = n.getHours();
      var mm = n.getMinutes();
      var YY = n.getFullYear();
      var MM = n.getMonth() + 1;
      var DD = n.getDate();
      if (D == DD && M == MM && Y == YY) {
        if (h < 10) {
          h = '0' + h;
        }
        if (m < 10) {
          m = '0' + m;
        }
        time = h + ':' + m;
        return time;
      } else if (D + 1 == DD && M == MM && Y == YY) {
        if (h < 10) {
          h = '0' + h;
        }
        if (m < 10) {
          m = '0' + m;
        }
        time = 'yesterday' + ' ' + h + ':' + m;
        return time;
      } else {
        if (M < 10) {
          M = '0' + M;
        }
        if (D < 10) {
          D = '0' + D;
        }
        if (h < 10) {
          h = '0' + h;
        }
        if (m < 10) {
          m = '0' + m;
        }
        time = Y + '/' + M + '/' + D + ' ' + h + ':' + m;
        return time;
      }
    },
    //send message
    sendMsg: function sendMsg() {
      if (this.chatm.length > 0 && this.friendID == '') {
        var onemsg = {
          roomID: this.roomID,
          messageContent: this.chatm,
          img: this.img,
          time: new Date(),
          id: 2,
          senderID: this.id
        };
        var data = {
          roomID: this.roomID,
          messageContent: this.chatm,
          img: this.img,
          name: this.name,
          time: new Date(),
          id: 1,
          senderID: this.id
        };
        // this.chat.push(onemsg);
        this.groupChatMessages.push(onemsg);
        this.chatm = ''; //clear
        this.cursorFocus = true;
        this.socket.emit('message', data);
        // storage in MongoDB
        this.saveChatToDB(data, '/groupchat'); // saving to MongoDB
      } else if (this.chatm.length > 0 && this.friendID != '') {
        //one to one chat
        var _onemsg = {
          roomID: this.roomID,
          messageContent: this.chatm,
          img: this.img,
          time: new Date(),
          fromID: this.userID,
          toID: this.friendID,
          fromID2: this.userID2,
          toID2: this.friendID2
        };
        var _data = {
          roomID: this.roomID,
          messageContent: this.chatm,
          img: this.img,
          name: this.name,
          time: new Date(),
          fromID: this.userID,
          toID: this.friendID,
          fromID2: this.userID2,
          toID2: this.friendID2
        };
        // this.otochat.push(onemsg);
        this.singlechat.push(_onemsg);
        this.chatm = ''; //clear chat message
        this.cursorFocus = true;
        this.socket.emit('msg', _data);
        // storage in MongoDB
        this.saveChatToDB(_data, '/singlechat');
        this.singleChatScrollToBottom();
      }
      this.scrollToBottom();
    },
    // save chat data to MongoDB
    saveChatToDB: function saveChatToDB(chatData, url) {
      uni.request({
        url: _config.BASE_URL + ':' + _config.SERVER_PORT + url,
        // replace with your backend server url
        data: chatData,
        method: 'POST',
        success: function success(res) {
          if (res.statusCode == 200) {
            // console.log('Chat data saved successfully!');
          }
        },
        fail: function fail(err) {
          console.error('Failed to save chat data: ' + err);
        }
      });
    },
    //join the group
    join: function join(name, img, id, roomID) {
      this.socket.emit('join', name, img, id, roomID);
    },
    //welcome joining
    welcome: function welcome() {
      var _this5 = this;
      //get the instant message socket
      this.socket.on('welcome', function (name, users) {
        // console.log(data)
        // console.log('num'+len)
        //insert the welcome message
        var wel = {
          name: 'welcome ' + name + ' join the group chat',
          id: 3
        };
        // this.chat.push(wel);
        _this5.groupChatMessages.push(wel);
        for (var i = 0; i < users.length; i++) {
          if (users[i].id == _this5.userID) {
            users.splice(i, 1);
          }
        }
        _this5.users = users;
        // scroll to bottom automatically
        _this5.scrollToBottom();
        // console.log(this.users)
      });
    },
    //get the message from myself
    myself: function myself() {
      var _this6 = this;
      //get the instant message
      this.socket.on('myself', function (name, users, id, userID2) {
        // console.log(data)
        // console.log('num'+len)
        //insert the welcome message
        _this6.userID = id;
        _this6.userID2 = userID2;
        // console.log(this.userID);
        var myWel = {
          name: 'welcome ' + name + ' join the group chat',
          id: 3
        };
        // this.chat.push(myWel);
        _this6.groupChatMessages.push(myWel);
        for (var i = 0; i < users.length; i++) {
          if (users[i].id == _this6.userID) {
            users.splice(i, 1);
          }
        }
        _this6.users = users;
        // scroll to bottom automatically
        _this6.scrollToBottom();
        // console.log(this.users)
      });
    },
    //quit the group message
    quit: function quit() {
      var _this7 = this;
      //get the instant message from socket
      this.socket.on('quit', function (data) {
        //insert the quit message
        var quit = {
          name: data.name + ' quit the group chat',
          id: 3
        };
        // this.chat.push(quit);
        _this7.groupChatMessages.push(quit);

        //this.member = len;
        _this7.users = data.users;
        // console.log(data.users)
      });
    },
    //
    receiveGroupMsg: function receiveGroupMsg() {
      var _this8 = this;
      //get the instant message from socket
      this.socket.on('sendMsg', function (data) {
        // this.chat.push(data);
        _this8.groupChatMessages.push(data);
        // scroll to bottom automatically
        _this8.scrollToBottom();
      });
    },
    // recieve the AI message
    receiveAIMsg: function receiveAIMsg() {
      var _this9 = this;
      this.socket.on("sumbitAIMsg", function (AIMsg) {
        // this.chat.push(AIMsg);
        _this9.groupChatMessages.push(AIMsg);
        // scroll to bottom automatically
        _this9.scrollToBottom();
      });
    },
    //receive the one to one message
    receiveSingleMsg: function receiveSingleMsg() {
      var _this10 = this;
      this.socket.on('sMsg', function (data) {
        var fromID = data.fromID;
        if (_this10.friendID != fromID) {
          for (var i = 0; i < _this10.users.length; i++) {
            if (_this10.users[i].id == fromID) {
              _this10.users[i].tip = true;
            }
          }
        }
        //console.log(data);
        // this.otochat.push(data);
        _this10.singlechat.push(data);
        _this10.singleChatScrollToBottom();
      });
    },
    //come into the one to one chatroom
    singleChat: function singleChat(e) {
      this.uname = this.users[e].name;
      this.friendID = this.users[e].id;
      this.friendID2 = this.users[e].userID2;
      this.users[e].tip = false;
      this.modify();
      this.singleChatInitializeToBottom();
    },
    //quit the one to one chatroom
    outSingleChat: function outSingleChat() {
      this.uname = '';
      this.friendID = '';
      this.friendID2 = '';
      this.modify();
    },
    //one to one animation effect
    modify: function modify() {
      this.bb = !this.bb;
      if (this.bb) {
        this.bg = 'block';
      } else {
        this.bg = 'none';
      }
      var animation = uni.createAnimation({
        duration: 400,
        timingFunction: 'ease'
      });
      this.animation = animation;
      if (this.bb) {
        animation.bottom(0).step();
      } else {
        animation.bottom().step();
      }
      this.animationData = animation.export();
    },
    // fetch the group chat messages from the server database
    fetchGroupChatMessages: function fetchGroupChatMessages() {
      var _this11 = this;
      uni.request({
        url: _config.BASE_URL + ':' + _config.SERVER_PORT + "/groupchat?roomID=".concat(this.roomID),
        method: 'GET',
        success: function success(res) {
          _this11.groupChatMessages = res.data;
          // console.log(res.data);
        },

        fail: function fail(err) {
          console.error('Error fetching group chat messages:', err);
        }
      });
    },
    fetchSingleChatMessages: function fetchSingleChatMessages() {
      var _this12 = this;
      uni.request({
        url: _config.BASE_URL + ':' + _config.SERVER_PORT + "/singlechat?roomID=".concat(this.roomID),
        method: 'GET',
        success: function success(res) {
          _this12.singlechat = res.data;
        },
        fail: function fail(err) {
          console.error('Error fetching group chat messages:', err);
        }
      });
    } // fetchGroupChatMessages() {
    // 	axios.get(`http://129.12.211.74:30000/groupchat?roomID=${this.roomID}`)
    // 		.then((res) => {
    // 			this.groupChatMessages = res.data;
    // 		})
    // 		.catch((err) => {
    // 			console.error('Error fetching group chat messages:', err);
    // 		});
    // },
    // fetchSingleChatMessages() {
    // 	axios.get(`http://129.12.211.74:30000/singlechat?roomID=${this.roomID}`)
    // 		.then((res) => {
    // 			this.singlechat = res.data;
    // 		})
    // 		.catch((err) => {
    // 			console.error('Error fetching group chat messages:', err);
    // 		});
    // },
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 54:
/*!**************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/chatroom/chatroom.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chatroom.vue?vue&type=style&index=0&lang=scss& */ 55);
/* harmony import */ var _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_HBuilderX_3_6_18_20230117_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatroom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 55:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages/chatroom/chatroom.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[48,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chatroom/chatroom.js.map