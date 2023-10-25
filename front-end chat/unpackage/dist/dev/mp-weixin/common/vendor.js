(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
function isWxKey(key) {
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),
/* 2 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
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
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
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
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
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
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
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
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__G1EDA4B0",
    appName: "front-end chat",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.6.18",
    uniRuntimeVersion: "3.6.18",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__G1EDA4B0",
      appName: "front-end chat",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"front-end chat","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
var eventChannelStack = [];
function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };
  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };
  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
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
/* 9 */
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
/* 10 */
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
/* 11 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
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
/* 12 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 13 */
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
/* 14 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
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
/* 15 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
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
/* 17 */
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 18 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 19 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 20 */
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
/* 21 */
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
/* 22 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
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
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 23 */
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
/* 24 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
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
/* 25 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"front-end chat","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"front-end chat","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"front-end chat","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"front-end chat","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize',
    'onUploadDouyinVideo'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 26 */
/*!***********************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/pages.json ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
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
/* 31 */
/*!************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/common/uni-socket.io.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni, wx, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11);
var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ 33);
var _get = __webpack_require__(/*! @babel/runtime/helpers/get */ 34);
var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23);
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 24);
var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 37);
var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 38);
var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 36);
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e12) { throw _e12; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e13) { didErr = true; err = _e13; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
!function (t, e) {
  if ("object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module))) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var r, n; }
}(window, function () {
  return function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }
    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) {
        n.d(r, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
      return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 18);
  }([function (t, e) {
    t.exports = function () {
      return function () {};
    };
  }, function (t, e, n) {
    function r(t) {
      if (t) return function (t) {
        for (var e in r.prototype) {
          t[e] = r.prototype[e];
        }
        return t;
      }(t);
    }
    t.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
    }, r.prototype.once = function (t, e) {
      function n() {
        this.off(t, n), e.apply(this, arguments);
      }
      return n.fn = e, this.on(t, n), this;
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var n,
        r = this._callbacks["$" + t];
      if (!r) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + t], this;
      for (var o = 0; o < r.length; o++) {
        if ((n = r[o]) === e || n.fn === e) {
          r.splice(o, 1);
          break;
        }
      }
      return 0 === r.length && delete this._callbacks["$" + t], this;
    }, r.prototype.emit = function (t) {
      this._callbacks = this._callbacks || {};
      for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++) {
        e[r - 1] = arguments[r];
      }
      if (n) {
        r = 0;
        for (var o = (n = n.slice(0)).length; r < o; ++r) {
          n[r].apply(this, e);
        }
      }
      return this;
    }, r.prototype.listeners = function (t) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
    }, r.prototype.hasListeners = function (t) {
      return !!this.listeners(t).length;
    };
  }, function (t, e, n) {
    var r = n(25),
      o = n(26),
      s = String.fromCharCode(30);
    t.exports = {
      protocol: 4,
      encodePacket: r,
      encodePayload: function encodePayload(t, e) {
        var n = t.length,
          o = new Array(n);
        var i = 0;
        t.forEach(function (t, a) {
          r(t, !1, function (t) {
            o[a] = t, ++i === n && e(o.join(s));
          });
        });
      },
      decodePacket: o,
      decodePayload: function decodePayload(t, e) {
        var n = t.split(s),
          r = [];
        for (var _t = 0; _t < n.length; _t++) {
          var _s = o(n[_t], e);
          if (r.push(_s), "error" === _s.type) break;
        }
        return r;
      }
    };
  }, function (t, e) {
    t.exports = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
  }, function (t, e, n) {
    var r = n(2),
      o = n(1),
      s = n(0)("engine.io-client:transport");
    t.exports = /*#__PURE__*/function (_o) {
      "use strict";

      _inherits(_class, _o);
      var _super = _createSuper(_class);
      function _class(t) {
        var _this;
        _classCallCheck(this, _class);
        _this = _super.call(this), _this.opts = t, _this.query = t.query, _this.readyState = "", _this.socket = t.socket;
        return _this;
      }
      _createClass(_class, [{
        key: "onError",
        value: function onError(t, e) {
          var n = new Error(t);
          return n.type = "TransportError", n.description = e, this.emit("error", n), this;
        }
      }, {
        key: "open",
        value: function open() {
          return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
        }
      }, {
        key: "close",
        value: function close() {
          return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
        }
      }, {
        key: "send",
        value: function send(t) {
          "open" === this.readyState ? this.write(t) : s("transport is not open, discarding packets");
        }
      }, {
        key: "onOpen",
        value: function onOpen() {
          this.readyState = "open", this.writable = !0, this.emit("open");
        }
      }, {
        key: "onData",
        value: function onData(t) {
          var e = r.decodePacket(t, this.socket.binaryType);
          this.onPacket(e);
        }
      }, {
        key: "onPacket",
        value: function onPacket(t) {
          this.emit("packet", t);
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.readyState = "closed", this.emit("close");
        }
      }]);
      return _class;
    }(o);
  }, function (t, e) {
    e.encode = function (t) {
      var e = "";
      for (var n in t) {
        t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
      }
      return e;
    }, e.decode = function (t) {
      for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
        var s = n[r].split("=");
        e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
      }
      return e;
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.Decoder = e.Encoder = e.PacketType = e.protocol = void 0;
    var r = n(1),
      o = n(38),
      s = n(16),
      i = n(0)("socket.io-parser");
    var a;
    e.protocol = 5, function (t) {
      t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
    }(a = e.PacketType || (e.PacketType = {}));
    e.Encoder = /*#__PURE__*/function () {
      function _class2() {
        _classCallCheck(this, _class2);
      }
      _createClass(_class2, [{
        key: "encode",
        value: function encode(t) {
          return i("encoding packet %j", t), t.type !== a.EVENT && t.type !== a.ACK || !s.hasBinary(t) ? [this.encodeAsString(t)] : (t.type = t.type === a.EVENT ? a.BINARY_EVENT : a.BINARY_ACK, this.encodeAsBinary(t));
        }
      }, {
        key: "encodeAsString",
        value: function encodeAsString(t) {
          var e = "" + t.type;
          return t.type !== a.BINARY_EVENT && t.type !== a.BINARY_ACK || (e += t.attachments + "-"), t.nsp && "/" !== t.nsp && (e += t.nsp + ","), null != t.id && (e += t.id), null != t.data && (e += JSON.stringify(t.data)), i("encoded %j as %s", t, e), e;
        }
      }, {
        key: "encodeAsBinary",
        value: function encodeAsBinary(t) {
          var e = o.deconstructPacket(t),
            n = this.encodeAsString(e.packet),
            r = e.buffers;
          return r.unshift(n), r;
        }
      }]);
      return _class2;
    }();
    var c = /*#__PURE__*/function (_r) {
      _inherits(c, _r);
      var _super2 = _createSuper(c);
      function c() {
        _classCallCheck(this, c);
        return _super2.call(this);
      }
      _createClass(c, [{
        key: "add",
        value: function add(t) {
          var e;
          if ("string" == typeof t) e = this.decodeString(t), e.type === a.BINARY_EVENT || e.type === a.BINARY_ACK ? (this.reconstructor = new h(e), 0 === e.attachments && _get(_getPrototypeOf(c.prototype), "emit", this).call(this, "decoded", e)) : _get(_getPrototypeOf(c.prototype), "emit", this).call(this, "decoded", e);else {
            if (!s.isBinary(t) && !t.base64) throw new Error("Unknown type: " + t);
            if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
            e = this.reconstructor.takeBinaryData(t), e && (this.reconstructor = null, _get(_getPrototypeOf(c.prototype), "emit", this).call(this, "decoded", e));
          }
        }
      }, {
        key: "decodeString",
        value: function decodeString(t) {
          var e = 0;
          var n = {
            type: Number(t.charAt(0))
          };
          if (void 0 === a[n.type]) throw new Error("unknown packet type " + n.type);
          if (n.type === a.BINARY_EVENT || n.type === a.BINARY_ACK) {
            var _r2 = e + 1;
            for (; "-" !== t.charAt(++e) && e != t.length;) {
              ;
            }
            var _o2 = t.substring(_r2, e);
            if (_o2 != Number(_o2) || "-" !== t.charAt(e)) throw new Error("Illegal attachments");
            n.attachments = Number(_o2);
          }
          if ("/" === t.charAt(e + 1)) {
            var _r3 = e + 1;
            for (; ++e;) {
              if ("," === t.charAt(e)) break;
              if (e === t.length) break;
            }
            n.nsp = t.substring(_r3, e);
          } else n.nsp = "/";
          var r = t.charAt(e + 1);
          if ("" !== r && Number(r) == r) {
            var _r4 = e + 1;
            for (; ++e;) {
              var _n = t.charAt(e);
              if (null == _n || Number(_n) != _n) {
                --e;
                break;
              }
              if (e === t.length) break;
            }
            n.id = Number(t.substring(_r4, e + 1));
          }
          if (t.charAt(++e)) {
            var _r5 = function (t) {
              try {
                return JSON.parse(t);
              } catch (t) {
                return !1;
              }
            }(t.substr(e));
            if (!c.isPayloadValid(n.type, _r5)) throw new Error("invalid payload");
            n.data = _r5;
          }
          return i("decoded %s as %j", t, n), n;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.reconstructor && this.reconstructor.finishedReconstruction();
        }
      }], [{
        key: "isPayloadValid",
        value: function isPayloadValid(t, e) {
          switch (t) {
            case a.CONNECT:
              return "object" == _typeof(e);
            case a.DISCONNECT:
              return void 0 === e;
            case a.CONNECT_ERROR:
              return "string" == typeof e || "object" == _typeof(e);
            case a.EVENT:
            case a.BINARY_EVENT:
              return Array.isArray(e) && "string" == typeof e[0];
            case a.ACK:
            case a.BINARY_ACK:
              return Array.isArray(e);
          }
        }
      }]);
      return c;
    }(r);
    e.Decoder = c;
    var h = /*#__PURE__*/function () {
      function h(t) {
        _classCallCheck(this, h);
        this.packet = t, this.buffers = [], this.reconPack = t;
      }
      _createClass(h, [{
        key: "takeBinaryData",
        value: function takeBinaryData(t) {
          if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
            var _t2 = o.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), _t2;
          }
          return null;
        }
      }, {
        key: "finishedReconstruction",
        value: function finishedReconstruction() {
          this.reconPack = null, this.buffers = [];
        }
      }]);
      return h;
    }();
  }, function (t, e) {
    var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
      r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    t.exports = function (t) {
      var e = t,
        o = t.indexOf("["),
        s = t.indexOf("]");
      -1 != o && -1 != s && (t = t.substring(0, o) + t.substring(o, s).replace(/:/g, ";") + t.substring(s, t.length));
      for (var i, a, c = n.exec(t || ""), h = {}, u = 14; u--;) {
        h[r[u]] = c[u] || "";
      }
      return -1 != o && -1 != s && (h.source = e, h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":"), h.authority = h.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), h.ipv6uri = !0), h.pathNames = function (t, e) {
        var n = e.replace(/\/{2,9}/g, "/").split("/");
        "/" != e.substr(0, 1) && 0 !== e.length || n.splice(0, 1);
        "/" == e.substr(e.length - 1, 1) && n.splice(n.length - 1, 1);
        return n;
      }(0, h.path), h.queryKey = (i = h.query, a = {}, i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, n) {
        e && (a[e] = n);
      }), a), h;
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.Manager = void 0;
    var r = n(21),
      o = n(15),
      s = n(1),
      i = n(6),
      a = n(17),
      c = n(39),
      h = n(0)("socket.io-client:manager");
    e.Manager = /*#__PURE__*/function (_s2) {
      _inherits(_class3, _s2);
      var _super3 = _createSuper(_class3);
      function _class3(t, e) {
        var _this2;
        _classCallCheck(this, _class3);
        _this2 = _super3.call(this), _this2.nsps = {}, _this2.subs = [], t && "object" == _typeof(t) && (e = t, t = void 0), (e = e || {}).path = e.path || "/socket.io", _this2.opts = e, _this2.reconnection(!1 !== e.reconnection), _this2.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), _this2.reconnectionDelay(e.reconnectionDelay || 1e3), _this2.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), _this2.randomizationFactor(e.randomizationFactor || .5), _this2.backoff = new c({
          min: _this2.reconnectionDelay(),
          max: _this2.reconnectionDelayMax(),
          jitter: _this2.randomizationFactor()
        }), _this2.timeout(null == e.timeout ? 2e4 : e.timeout), _this2._readyState = "closed", _this2.uri = t;
        var n = e.parser || i;
        _this2.encoder = new n.Encoder(), _this2.decoder = new n.Decoder(), _this2._autoConnect = !1 !== e.autoConnect, _this2._autoConnect && _this2.open();
        return _this2;
      }
      _createClass(_class3, [{
        key: "reconnection",
        value: function reconnection(t) {
          return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
        }
      }, {
        key: "reconnectionAttempts",
        value: function reconnectionAttempts(t) {
          return void 0 === t ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
        }
      }, {
        key: "reconnectionDelay",
        value: function reconnectionDelay(t) {
          var e;
          return void 0 === t ? this._reconnectionDelay : (this._reconnectionDelay = t, null === (e = this.backoff) || void 0 === e || e.setMin(t), this);
        }
      }, {
        key: "randomizationFactor",
        value: function randomizationFactor(t) {
          var e;
          return void 0 === t ? this._randomizationFactor : (this._randomizationFactor = t, null === (e = this.backoff) || void 0 === e || e.setJitter(t), this);
        }
      }, {
        key: "reconnectionDelayMax",
        value: function reconnectionDelayMax(t) {
          var e;
          return void 0 === t ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, null === (e = this.backoff) || void 0 === e || e.setMax(t), this);
        }
      }, {
        key: "timeout",
        value: function timeout(t) {
          return arguments.length ? (this._timeout = t, this) : this._timeout;
        }
      }, {
        key: "maybeReconnectOnOpen",
        value: function maybeReconnectOnOpen() {
          !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
        }
      }, {
        key: "open",
        value: function open(t) {
          var _this3 = this;
          if (h("readyState %s", this._readyState), ~this._readyState.indexOf("open")) return this;
          h("opening %s", this.uri), this.engine = r(this.uri, this.opts);
          var e = this.engine,
            n = this;
          this._readyState = "opening", this.skipReconnect = !1;
          var o = a.on(e, "open", function () {
              n.onopen(), t && t();
            }),
            s = a.on(e, "error", function (e) {
              h("error"), n.cleanup(), n._readyState = "closed", _get(_getPrototypeOf(_class3.prototype), "emit", _this3).call(_this3, "error", e), t ? t(e) : n.maybeReconnectOnOpen();
            });
          if (!1 !== this._timeout) {
            var _t3 = this._timeout;
            h("connect attempt will timeout after %d", _t3), 0 === _t3 && o();
            var _n2 = setTimeout(function () {
              h("connect attempt timed out after %d", _t3), o(), e.close(), e.emit("error", new Error("timeout"));
            }, _t3);
            this.subs.push(function () {
              clearTimeout(_n2);
            });
          }
          return this.subs.push(o), this.subs.push(s), this;
        }
      }, {
        key: "connect",
        value: function connect(t) {
          return this.open(t);
        }
      }, {
        key: "onopen",
        value: function onopen() {
          h("open"), this.cleanup(), this._readyState = "open", _get(_getPrototypeOf(_class3.prototype), "emit", this).call(this, "open");
          var t = this.engine;
          this.subs.push(a.on(t, "ping", this.onping.bind(this)), a.on(t, "data", this.ondata.bind(this)), a.on(t, "error", this.onerror.bind(this)), a.on(t, "close", this.onclose.bind(this)), a.on(this.decoder, "decoded", this.ondecoded.bind(this)));
        }
      }, {
        key: "onping",
        value: function onping() {
          _get(_getPrototypeOf(_class3.prototype), "emit", this).call(this, "ping");
        }
      }, {
        key: "ondata",
        value: function ondata(t) {
          this.decoder.add(t);
        }
      }, {
        key: "ondecoded",
        value: function ondecoded(t) {
          _get(_getPrototypeOf(_class3.prototype), "emit", this).call(this, "packet", t);
        }
      }, {
        key: "onerror",
        value: function onerror(t) {
          h("error", t), _get(_getPrototypeOf(_class3.prototype), "emit", this).call(this, "error", t);
        }
      }, {
        key: "socket",
        value: function socket(t, e) {
          var n = this.nsps[t];
          return n || (n = new o.Socket(this, t, e), this.nsps[t] = n), n;
        }
      }, {
        key: "_destroy",
        value: function _destroy(t) {
          var e = Object.keys(this.nsps);
          for (var _i = 0, _e = e; _i < _e.length; _i++) {
            var _t4 = _e[_i];
            if (this.nsps[_t4].active) return void h("socket %s is still active, skipping close", _t4);
          }
          this._close();
        }
      }, {
        key: "_packet",
        value: function _packet(t) {
          h("writing packet %j", t), t.query && 0 === t.type && (t.nsp += "?" + t.query);
          var e = this.encoder.encode(t);
          for (var _n3 = 0; _n3 < e.length; _n3++) {
            this.engine.write(e[_n3], t.options);
          }
        }
      }, {
        key: "cleanup",
        value: function cleanup() {
          h("cleanup"), this.subs.forEach(function (t) {
            return t();
          }), this.subs.length = 0, this.decoder.destroy();
        }
      }, {
        key: "_close",
        value: function _close() {
          h("disconnect"), this.skipReconnect = !0, this._reconnecting = !1, "opening" === this._readyState && this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.engine && this.engine.close();
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          return this._close();
        }
      }, {
        key: "onclose",
        value: function onclose(t) {
          h("onclose"), this.cleanup(), this.backoff.reset(), this._readyState = "closed", _get(_getPrototypeOf(_class3.prototype), "emit", this).call(this, "close", t), this._reconnection && !this.skipReconnect && this.reconnect();
        }
      }, {
        key: "reconnect",
        value: function reconnect() {
          var _this4 = this;
          if (this._reconnecting || this.skipReconnect) return this;
          var t = this;
          if (this.backoff.attempts >= this._reconnectionAttempts) h("reconnect failed"), this.backoff.reset(), _get(_getPrototypeOf(_class3.prototype), "emit", this).call(this, "reconnect_failed"), this._reconnecting = !1;else {
            var _e2 = this.backoff.duration();
            h("will wait %dms before reconnect attempt", _e2), this._reconnecting = !0;
            var _n4 = setTimeout(function () {
              t.skipReconnect || (h("attempting reconnect"), _get(_getPrototypeOf(_class3.prototype), "emit", _this4).call(_this4, "reconnect_attempt", t.backoff.attempts), t.skipReconnect || t.open(function (e) {
                e ? (h("reconnect attempt error"), t._reconnecting = !1, t.reconnect(), _get(_getPrototypeOf(_class3.prototype), "emit", _this4).call(_this4, "reconnect_error", e)) : (h("reconnect success"), t.onreconnect());
              }));
            }, _e2);
            this.subs.push(function () {
              clearTimeout(_n4);
            });
          }
        }
      }, {
        key: "onreconnect",
        value: function onreconnect() {
          var t = this.backoff.attempts;
          this._reconnecting = !1, this.backoff.reset(), _get(_getPrototypeOf(_class3.prototype), "emit", this).call(this, "reconnect", t);
        }
      }]);
      return _class3;
    }(s);
  }, function (t, e, n) {
    var r = n(10),
      o = n(24),
      s = n(28),
      i = n(29);
    e.polling = function (t) {
      var e,
        n = !1,
        i = !1;
      var a = !1 !== t.jsonp;
      if ("undefined" != typeof location) {
        var _e3 = "https:" === location.protocol;
        var _r6 = location.port;
        _r6 || (_r6 = _e3 ? 443 : 80), n = t.hostname !== location.hostname || _r6 !== t.port, i = t.secure !== _e3;
      }
      if (t.xdomain = n, t.xscheme = i, e = new r(t), "open" in e && !t.forceJSONP) return new o(t);
      if (!a) throw new Error("JSONP disabled");
      return new s(t);
    }, e.websocket = i;
  }, function (t, e, n) {
    var r = n(23),
      o = n(3);
    t.exports = function (t) {
      var e = t.xdomain,
        n = t.xscheme,
        s = t.enablesXDR;
      try {
        if ("undefined" != typeof XMLHttpRequest && (!e || r)) return new XMLHttpRequest();
      } catch (t) {}
      try {
        if ("undefined" != typeof XDomainRequest && !n && s) return new XDomainRequest();
      } catch (t) {}
      if (!e) try {
        return new o[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (t) {}
    };
  }, function (t, e, n) {
    var r = n(4),
      o = n(5),
      s = n(2),
      i = n(13),
      a = n(0)("engine.io-client:polling");
    t.exports = /*#__PURE__*/function (_r7) {
      "use strict";

      _inherits(_class4, _r7);
      var _super4 = _createSuper(_class4);
      function _class4() {
        _classCallCheck(this, _class4);
        return _super4.apply(this, arguments);
      }
      _createClass(_class4, [{
        key: "name",
        get: function get() {
          return "polling";
        }
      }, {
        key: "doOpen",
        value: function doOpen() {
          this.poll();
        }
      }, {
        key: "pause",
        value: function pause(t) {
          var e = this;
          function n() {
            a("paused"), e.readyState = "paused", t();
          }
          if (this.readyState = "pausing", this.polling || !this.writable) {
            var _t5 = 0;
            this.polling && (a("we are currently polling - waiting to pause"), _t5++, this.once("pollComplete", function () {
              a("pre-pause polling complete"), --_t5 || n();
            })), this.writable || (a("we are currently writing - waiting to pause"), _t5++, this.once("drain", function () {
              a("pre-pause writing complete"), --_t5 || n();
            }));
          } else n();
        }
      }, {
        key: "poll",
        value: function poll() {
          a("polling"), this.polling = !0, this.doPoll(), this.emit("poll");
        }
      }, {
        key: "onData",
        value: function onData(t) {
          var e = this;
          a("polling got data %s", t);
          s.decodePayload(t, this.socket.binaryType).forEach(function (t, n, r) {
            if ("opening" === e.readyState && "open" === t.type && e.onOpen(), "close" === t.type) return e.onClose(), !1;
            e.onPacket(t);
          }), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : a('ignoring poll - transport state "%s"', this.readyState));
        }
      }, {
        key: "doClose",
        value: function doClose() {
          var t = this;
          function e() {
            a("writing close packet"), t.write([{
              type: "close"
            }]);
          }
          "open" === this.readyState ? (a("transport open - closing"), e()) : (a("transport not open - deferring close"), this.once("open", e));
        }
      }, {
        key: "write",
        value: function write(t) {
          var _this5 = this;
          this.writable = !1, s.encodePayload(t, function (t) {
            _this5.doWrite(t, function () {
              _this5.writable = !0, _this5.emit("drain");
            });
          });
        }
      }, {
        key: "uri",
        value: function uri() {
          var t = this.query || {};
          var e = this.opts.secure ? "https" : "http";
          var n = "";
          !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = i()), this.supportsBinary || t.sid || (t.b64 = 1), t = o.encode(t), this.opts.port && ("https" === e && 443 !== Number(this.opts.port) || "http" === e && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port), t.length && (t = "?" + t);
          return e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + t;
        }
      }]);
      return _class4;
    }(r);
  }, function (t, e) {
    var n = Object.create(null);
    n.open = "0", n.close = "1", n.ping = "2", n.pong = "3", n.message = "4", n.upgrade = "5", n.noop = "6";
    var r = Object.create(null);
    Object.keys(n).forEach(function (t) {
      r[n[t]] = t;
    });
    t.exports = {
      PACKET_TYPES: n,
      PACKET_TYPES_REVERSE: r,
      ERROR_PACKET: {
        type: "error",
        data: "parser error"
      }
    };
  }, function (t, e, n) {
    "use strict";

    var r,
      o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
      s = {},
      i = 0,
      a = 0;
    function c(t) {
      var e = "";
      do {
        e = o[t % 64] + e, t = Math.floor(t / 64);
      } while (t > 0);
      return e;
    }
    function h() {
      var t = c(+new Date());
      return t !== r ? (i = 0, r = t) : t + "." + c(i++);
    }
    for (; a < 64; a++) {
      s[o[a]] = a;
    }
    h.encode = c, h.decode = function (t) {
      var e = 0;
      for (a = 0; a < t.length; a++) {
        e = 64 * e + s[t.charAt(a)];
      }
      return e;
    }, t.exports = h;
  }, function (t, e) {
    t.exports.pick = function (t) {
      for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }
      return e.reduce(function (e, n) {
        return t.hasOwnProperty(n) && (e[n] = t[n]), e;
      }, {});
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.Socket = void 0;
    var r = n(6),
      o = n(1),
      s = n(17),
      i = n(0)("socket.io-client:socket"),
      a = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1
      });
    e.Socket = /*#__PURE__*/function (_o3) {
      _inherits(_class5, _o3);
      var _super5 = _createSuper(_class5);
      function _class5(t, e, n) {
        var _this6;
        _classCallCheck(this, _class5);
        _this6 = _super5.call(this), _this6.receiveBuffer = [], _this6.sendBuffer = [], _this6.ids = 0, _this6.acks = {}, _this6.flags = {}, _this6.io = t, _this6.nsp = e, _this6.ids = 0, _this6.acks = {}, _this6.receiveBuffer = [], _this6.sendBuffer = [], _this6.connected = !1, _this6.disconnected = !0, _this6.flags = {}, n && n.auth && (_this6.auth = n.auth), _this6.io._autoConnect && _this6.open();
        return _this6;
      }
      _createClass(_class5, [{
        key: "subEvents",
        value: function subEvents() {
          if (this.subs) return;
          var t = this.io;
          this.subs = [s.on(t, "open", this.onopen.bind(this)), s.on(t, "packet", this.onpacket.bind(this)), s.on(t, "error", this.onerror.bind(this)), s.on(t, "close", this.onclose.bind(this))];
        }
      }, {
        key: "active",
        get: function get() {
          return !!this.subs;
        }
      }, {
        key: "connect",
        value: function connect() {
          return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this;
        }
      }, {
        key: "open",
        value: function open() {
          return this.connect();
        }
      }, {
        key: "send",
        value: function send() {
          for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            t[_key2] = arguments[_key2];
          }
          return t.unshift("message"), this.emit.apply(this, t), this;
        }
      }, {
        key: "emit",
        value: function emit(t) {
          if (a.hasOwnProperty(t)) throw new Error('"' + t + '" is a reserved event name');
          for (var _len3 = arguments.length, e = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            e[_key3 - 1] = arguments[_key3];
          }
          e.unshift(t);
          var n = {
            type: r.PacketType.EVENT,
            data: e,
            options: {}
          };
          n.options.compress = !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (i("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), n.id = this.ids++);
          var o = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
          return this.flags.volatile && (!o || !this.connected) ? i("discard packet as the transport is not currently writable") : this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this;
        }
      }, {
        key: "packet",
        value: function packet(t) {
          t.nsp = this.nsp, this.io._packet(t);
        }
      }, {
        key: "onopen",
        value: function onopen() {
          var _this7 = this;
          i("transport is open - connecting"), "function" == typeof this.auth ? this.auth(function (t) {
            _this7.packet({
              type: r.PacketType.CONNECT,
              data: t
            });
          }) : this.packet({
            type: r.PacketType.CONNECT,
            data: this.auth
          });
        }
      }, {
        key: "onerror",
        value: function onerror(t) {
          this.connected || _get(_getPrototypeOf(_class5.prototype), "emit", this).call(this, "connect_error", t);
        }
      }, {
        key: "onclose",
        value: function onclose(t) {
          i("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, _get(_getPrototypeOf(_class5.prototype), "emit", this).call(this, "disconnect", t);
        }
      }, {
        key: "onpacket",
        value: function onpacket(t) {
          if (t.nsp === this.nsp) switch (t.type) {
            case r.PacketType.CONNECT:
              if (t.data && t.data.sid) {
                var _e5 = t.data.sid;
                this.onconnect(_e5);
              } else _get(_getPrototypeOf(_class5.prototype), "emit", this).call(this, "connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
              break;
            case r.PacketType.EVENT:
            case r.PacketType.BINARY_EVENT:
              this.onevent(t);
              break;
            case r.PacketType.ACK:
            case r.PacketType.BINARY_ACK:
              this.onack(t);
              break;
            case r.PacketType.DISCONNECT:
              this.ondisconnect();
              break;
            case r.PacketType.CONNECT_ERROR:
              var _e4 = new Error(t.data.message);
              _e4.data = t.data.data, _get(_getPrototypeOf(_class5.prototype), "emit", this).call(this, "connect_error", _e4);
          }
        }
      }, {
        key: "onevent",
        value: function onevent(t) {
          var e = t.data || [];
          i("emitting event %j", e), null != t.id && (i("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e));
        }
      }, {
        key: "emitEvent",
        value: function emitEvent(t) {
          if (this._anyListeners && this._anyListeners.length) {
            var _e6 = this._anyListeners.slice();
            var _iterator = _createForOfIteratorHelper(_e6),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _n5 = _step.value;
                _n5.apply(this, t);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          _get(_getPrototypeOf(_class5.prototype), "emit", this).apply(this, t);
        }
      }, {
        key: "ack",
        value: function ack(t) {
          var e = this;
          var n = !1;
          return function () {
            for (var _len4 = arguments.length, o = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              o[_key4] = arguments[_key4];
            }
            n || (n = !0, i("sending ack %j", o), e.packet({
              type: r.PacketType.ACK,
              id: t,
              data: o
            }));
          };
        }
      }, {
        key: "onack",
        value: function onack(t) {
          var e = this.acks[t.id];
          "function" == typeof e ? (i("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : i("bad ack %s", t.id);
        }
      }, {
        key: "onconnect",
        value: function onconnect(t) {
          i("socket connected with id %s", t), this.id = t, this.connected = !0, this.disconnected = !1, _get(_getPrototypeOf(_class5.prototype), "emit", this).call(this, "connect"), this.emitBuffered();
        }
      }, {
        key: "emitBuffered",
        value: function emitBuffered() {
          var _this8 = this;
          this.receiveBuffer.forEach(function (t) {
            return _this8.emitEvent(t);
          }), this.receiveBuffer = [], this.sendBuffer.forEach(function (t) {
            return _this8.packet(t);
          }), this.sendBuffer = [];
        }
      }, {
        key: "ondisconnect",
        value: function ondisconnect() {
          i("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.subs && (this.subs.forEach(function (t) {
            return t();
          }), this.subs = void 0), this.io._destroy(this);
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          return this.connected && (i("performing disconnect (%s)", this.nsp), this.packet({
            type: r.PacketType.DISCONNECT
          })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
        }
      }, {
        key: "close",
        value: function close() {
          return this.disconnect();
        }
      }, {
        key: "compress",
        value: function compress(t) {
          return this.flags.compress = t, this;
        }
      }, {
        key: "volatile",
        get: function get() {
          return this.flags.volatile = !0, this;
        }
      }, {
        key: "onAny",
        value: function onAny(t) {
          return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
        }
      }, {
        key: "prependAny",
        value: function prependAny(t) {
          return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
        }
      }, {
        key: "offAny",
        value: function offAny(t) {
          if (!this._anyListeners) return this;
          if (t) {
            var _e7 = this._anyListeners;
            for (var _n6 = 0; _n6 < _e7.length; _n6++) {
              if (t === _e7[_n6]) return _e7.splice(_n6, 1), this;
            }
          } else this._anyListeners = [];
          return this;
        }
      }, {
        key: "listenersAny",
        value: function listenersAny() {
          return this._anyListeners || [];
        }
      }]);
      return _class5;
    }(o);
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.hasBinary = e.isBinary = void 0;
    var r = "function" == typeof ArrayBuffer,
      o = Object.prototype.toString,
      s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob),
      i = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
    function a(t) {
      return r && (t instanceof ArrayBuffer || function (t) {
        return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer;
      }(t)) || s && t instanceof Blob || i && t instanceof File;
    }
    e.isBinary = a, e.hasBinary = function t(e, n) {
      if (!e || "object" != _typeof(e)) return !1;
      if (Array.isArray(e)) {
        for (var _n7 = 0, _r8 = e.length; _n7 < _r8; _n7++) {
          if (t(e[_n7])) return !0;
        }
        return !1;
      }
      if (a(e)) return !0;
      if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return t(e.toJSON(), !0);
      for (var _n8 in e) {
        if (Object.prototype.hasOwnProperty.call(e, _n8) && t(e[_n8])) return !0;
      }
      return !1;
    };
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.on = void 0, e.on = function (t, e, n) {
      return t.on(e, n), function () {
        t.off(e, n);
      };
    };
  }, function (t, e, n) {
    t.exports = n(19);
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.Socket = e.io = e.Manager = e.protocol = void 0;
    var r = n(20),
      o = n(8),
      s = n(15);
    Object.defineProperty(e, "Socket", {
      enumerable: !0,
      get: function get() {
        return s.Socket;
      }
    });
    var i = n(0)("socket.io-client");
    t.exports = e = c;
    var a = e.managers = {};
    function c(t, e) {
      "object" == _typeof(t) && (e = t, t = void 0), e = e || {};
      var n = r.url(t),
        s = n.source,
        c = n.id,
        h = n.path,
        u = a[c] && h in a[c].nsps;
      var p;
      return e.forceNew || e["force new connection"] || !1 === e.multiplex || u ? (i("ignoring socket cache for %s", s), p = new o.Manager(s, e)) : (a[c] || (i("new io instance for %s", s), a[c] = new o.Manager(s, e)), p = a[c]), n.query && !e.query && (e.query = n.query), p.socket(n.path, e);
    }
    e.io = c;
    var h = n(6);
    Object.defineProperty(e, "protocol", {
      enumerable: !0,
      get: function get() {
        return h.protocol;
      }
    }), e.connect = c;
    var u = n(8);
    Object.defineProperty(e, "Manager", {
      enumerable: !0,
      get: function get() {
        return u.Manager;
      }
    });
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.url = void 0;
    var r = n(7),
      o = n(0)("socket.io-client:url");
    e.url = function (t, e) {
      var n = t;
      e = e || "undefined" != typeof location && location, null == t && (t = e.protocol + "//" + e.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), t = void 0 !== e ? e.protocol + "//" + t : "https://" + t), o("parse %s", t), n = r(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
      var s = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
      return n.id = n.protocol + "://" + s + ":" + n.port, n.href = n.protocol + "://" + s + (e && e.port === n.port ? "" : ":" + n.port), n;
    };
  }, function (t, e, n) {
    var r = n(22);
    t.exports = function (t, e) {
      return new r(t, e);
    }, t.exports.Socket = r, t.exports.protocol = r.protocol, t.exports.Transport = n(4), t.exports.transports = n(9), t.exports.parser = n(2);
  }, function (t, e, n) {
    var r = n(9),
      o = n(1),
      s = n(0)("engine.io-client:socket"),
      i = n(2),
      a = n(7),
      c = n(5);
    var h = /*#__PURE__*/function (_o4) {
      "use strict";

      _inherits(h, _o4);
      var _super6 = _createSuper(h);
      function h(t) {
        var _this9;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        _classCallCheck(this, h);
        _this9 = _super6.call(this), t && "object" == _typeof(t) && (e = t, t = null), t ? (t = a(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = a(e.host).host), _this9.secure = null != e.secure ? e.secure : "undefined" != typeof location && "https:" === location.protocol, e.hostname && !e.port && (e.port = _this9.secure ? "443" : "80"), _this9.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), _this9.port = e.port || ("undefined" != typeof location && location.port ? location.port : _this9.secure ? 443 : 80), _this9.transports = e.transports || ["polling", "websocket"], _this9.readyState = "", _this9.writeBuffer = [], _this9.prevBufferLen = 0, _this9.opts = Object.assign({
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          jsonp: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          rejectUnauthorized: !0,
          perMessageDeflate: {
            threshold: 1024
          },
          transportOptions: {}
        }, e), _this9.opts.path = _this9.opts.path.replace(/\/$/, "") + "/", "string" == typeof _this9.opts.query && (_this9.opts.query = c.decode(_this9.opts.query)), _this9.id = null, _this9.upgrades = null, _this9.pingInterval = null, _this9.pingTimeout = null, _this9.pingTimeoutTimer = null, "function" == typeof addEventListener && (addEventListener("beforeunload", function () {
          _this9.transport && (_this9.transport.removeAllListeners(), _this9.transport.close());
        }, !1), "localhost" !== _this9.hostname && (_this9.offlineEventListener = function () {
          _this9.onClose("transport close");
        }, addEventListener("offline", _this9.offlineEventListener, !1))), _this9.open();
        return _this9;
      }
      _createClass(h, [{
        key: "createTransport",
        value: function createTransport(t) {
          s('creating transport "%s"', t);
          var e = function (t) {
            var e = {};
            for (var _n9 in t) {
              t.hasOwnProperty(_n9) && (e[_n9] = t[_n9]);
            }
            return e;
          }(this.opts.query);
          e.EIO = i.protocol, e.transport = t, this.id && (e.sid = this.id);
          var n = Object.assign({}, this.opts.transportOptions[t], this.opts, {
            query: e,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
          });
          return s("options: %j", n), new r[t](n);
        }
      }, {
        key: "open",
        value: function open() {
          var t;
          if (this.opts.rememberUpgrade && h.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";else {
            if (0 === this.transports.length) {
              var _t6 = this;
              return void setTimeout(function () {
                _t6.emit("error", "No transports available");
              }, 0);
            }
            t = this.transports[0];
          }
          this.readyState = "opening";
          try {
            t = this.createTransport(t);
          } catch (t) {
            return s("error while creating transport: %s", t), this.transports.shift(), void this.open();
          }
          t.open(), this.setTransport(t);
        }
      }, {
        key: "setTransport",
        value: function setTransport(t) {
          s("setting transport %s", t.name);
          var e = this;
          this.transport && (s("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function () {
            e.onDrain();
          }).on("packet", function (t) {
            e.onPacket(t);
          }).on("error", function (t) {
            e.onError(t);
          }).on("close", function () {
            e.onClose("transport close");
          });
        }
      }, {
        key: "probe",
        value: function probe(t) {
          s('probing transport "%s"', t);
          var e = this.createTransport(t, {
              probe: 1
            }),
            n = !1;
          var r = this;
          function o() {
            if (r.onlyBinaryUpgrades) {
              var _t7 = !this.supportsBinary && r.transport.supportsBinary;
              n = n || _t7;
            }
            n || (s('probe transport "%s" opened', t), e.send([{
              type: "ping",
              data: "probe"
            }]), e.once("packet", function (o) {
              if (!n) if ("pong" === o.type && "probe" === o.data) {
                if (s('probe transport "%s" pong', t), r.upgrading = !0, r.emit("upgrading", e), !e) return;
                h.priorWebsocketSuccess = "websocket" === e.name, s('pausing current transport "%s"', r.transport.name), r.transport.pause(function () {
                  n || "closed" !== r.readyState && (s("changing transport and sending upgrade packet"), f(), r.setTransport(e), e.send([{
                    type: "upgrade"
                  }]), r.emit("upgrade", e), e = null, r.upgrading = !1, r.flush());
                });
              } else {
                s('probe transport "%s" failed', t);
                var _n10 = new Error("probe error");
                _n10.transport = e.name, r.emit("upgradeError", _n10);
              }
            }));
          }
          function i() {
            n || (n = !0, f(), e.close(), e = null);
          }
          function a(n) {
            var o = new Error("probe error: " + n);
            o.transport = e.name, i(), s('probe transport "%s" failed because of error: %s', t, n), r.emit("upgradeError", o);
          }
          function c() {
            a("transport closed");
          }
          function u() {
            a("socket closed");
          }
          function p(t) {
            e && t.name !== e.name && (s('"%s" works - aborting "%s"', t.name, e.name), i());
          }
          function f() {
            e.removeListener("open", o), e.removeListener("error", a), e.removeListener("close", c), r.removeListener("close", u), r.removeListener("upgrading", p);
          }
          h.priorWebsocketSuccess = !1, e.once("open", o), e.once("error", a), e.once("close", c), this.once("close", u), this.once("upgrading", p), e.open();
        }
      }, {
        key: "onOpen",
        value: function onOpen() {
          if (s("socket open"), this.readyState = "open", h.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause) {
            s("starting upgrade probes");
            var _t8 = 0;
            var _e8 = this.upgrades.length;
            for (; _t8 < _e8; _t8++) {
              this.probe(this.upgrades[_t8]);
            }
          }
        }
      }, {
        key: "onPacket",
        value: function onPacket(t) {
          if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (s('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
            case "open":
              this.onHandshake(JSON.parse(t.data));
              break;
            case "ping":
              this.resetPingTimeout(), this.sendPacket("pong"), this.emit("pong");
              break;
            case "error":
              var _e9 = new Error("server error");
              _e9.code = t.data, this.onError(_e9);
              break;
            case "message":
              this.emit("data", t.data), this.emit("message", t.data);
          } else s('packet received with socket readyState "%s"', this.readyState);
        }
      }, {
        key: "onHandshake",
        value: function onHandshake(t) {
          this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout();
        }
      }, {
        key: "resetPingTimeout",
        value: function resetPingTimeout() {
          var _this10 = this;
          clearTimeout(this.pingTimeoutTimer), this.pingTimeoutTimer = setTimeout(function () {
            _this10.onClose("ping timeout");
          }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
        }
      }, {
        key: "onDrain",
        value: function onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
        }
      }, {
        key: "flush",
        value: function flush() {
          "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (s("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
        }
      }, {
        key: "write",
        value: function write(t, e, n) {
          return this.sendPacket("message", t, e, n), this;
        }
      }, {
        key: "send",
        value: function send(t, e, n) {
          return this.sendPacket("message", t, e, n), this;
        }
      }, {
        key: "sendPacket",
        value: function sendPacket(t, e, n, r) {
          if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" === this.readyState || "closed" === this.readyState) return;
          (n = n || {}).compress = !1 !== n.compress;
          var o = {
            type: t,
            data: e,
            options: n
          };
          this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush();
        }
      }, {
        key: "close",
        value: function close() {
          var t = this;
          function e() {
            t.onClose("forced close"), s("socket closing - telling transport to close"), t.transport.close();
          }
          function n() {
            t.removeListener("upgrade", n), t.removeListener("upgradeError", n), e();
          }
          function r() {
            t.once("upgrade", n), t.once("upgradeError", n);
          }
          return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", function () {
            this.upgrading ? r() : e();
          }) : this.upgrading ? r() : e()), this;
        }
      }, {
        key: "onError",
        value: function onError(t) {
          s("socket error %j", t), h.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t);
        }
      }, {
        key: "onClose",
        value: function onClose(t, e) {
          if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            s('socket close with reason: "%s"', t);
            var _n11 = this;
            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, !1), this.readyState = "closed", this.id = null, this.emit("close", t, e), _n11.writeBuffer = [], _n11.prevBufferLen = 0;
          }
        }
      }, {
        key: "filterUpgrades",
        value: function filterUpgrades(t) {
          var e = [];
          var n = 0;
          var r = t.length;
          for (; n < r; n++) {
            ~this.transports.indexOf(t[n]) && e.push(t[n]);
          }
          return e;
        }
      }]);
      return h;
    }(o);
    h.priorWebsocketSuccess = !1, h.protocol = i.protocol, t.exports = h;
  }, function (t, e) {
    try {
      t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
    } catch (e) {
      t.exports = !1;
    }
  }, function (t, e, n) {
    var r = n(10),
      o = n(11),
      s = n(1),
      _n12 = n(14),
      i = _n12.pick,
      a = n(3),
      c = n(0)("engine.io-client:polling-xhr");
    function h() {}
    var u = null != new r({
      xdomain: !1
    }).responseType;
    var p = /*#__PURE__*/function (_s3) {
      "use strict";

      _inherits(p, _s3);
      var _super7 = _createSuper(p);
      function p(t, e) {
        var _this11;
        _classCallCheck(this, p);
        _this11 = _super7.call(this), _this11.opts = e, _this11.method = e.method || "GET", _this11.uri = t, _this11.async = !1 !== e.async, _this11.data = void 0 !== e.data ? e.data : null, _this11.create();
        return _this11;
      }
      _createClass(p, [{
        key: "create",
        value: function create() {
          var t = i(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
          t.xdomain = !!this.opts.xd, t.xscheme = !!this.opts.xs;
          var e = this.xhr = new r(t),
            n = this;
          try {
            c("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);
            try {
              if (this.opts.extraHeaders) {
                e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0);
                for (var _t9 in this.opts.extraHeaders) {
                  this.opts.extraHeaders.hasOwnProperty(_t9) && e.setRequestHeader(_t9, this.opts.extraHeaders[_t9]);
                }
              }
            } catch (t) {}
            if ("POST" === this.method) try {
              e.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (t) {}
            try {
              e.setRequestHeader("Accept", "*/*");
            } catch (t) {}
            "withCredentials" in e && (e.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (e.timeout = this.opts.requestTimeout), this.hasXDR() ? (e.onload = function () {
              n.onLoad();
            }, e.onerror = function () {
              n.onError(e.responseText);
            }) : e.onreadystatechange = function () {
              4 === e.readyState && (200 === e.status || 1223 === e.status ? n.onLoad() : setTimeout(function () {
                n.onError("number" == typeof e.status ? e.status : 0);
              }, 0));
            }, c("xhr data %s", this.data), e.send(this.data);
          } catch (t) {
            return void setTimeout(function () {
              n.onError(t);
            }, 0);
          }
          "undefined" != typeof document && (this.index = p.requestsCount++, p.requests[this.index] = this);
        }
      }, {
        key: "onSuccess",
        value: function onSuccess() {
          this.emit("success"), this.cleanup();
        }
      }, {
        key: "onData",
        value: function onData(t) {
          this.emit("data", t), this.onSuccess();
        }
      }, {
        key: "onError",
        value: function onError(t) {
          this.emit("error", t), this.cleanup(!0);
        }
      }, {
        key: "cleanup",
        value: function cleanup(t) {
          if (void 0 !== this.xhr && null !== this.xhr) {
            if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = h : this.xhr.onreadystatechange = h, t) try {
              this.xhr.abort();
            } catch (t) {}
            "undefined" != typeof document && delete p.requests[this.index], this.xhr = null;
          }
        }
      }, {
        key: "onLoad",
        value: function onLoad() {
          var t = this.xhr.responseText;
          null !== t && this.onData(t);
        }
      }, {
        key: "hasXDR",
        value: function hasXDR() {
          return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR;
        }
      }, {
        key: "abort",
        value: function abort() {
          this.cleanup();
        }
      }]);
      return p;
    }(s);
    if (p.requestsCount = 0, p.requests = {}, "undefined" != typeof document) if ("function" == typeof attachEvent) attachEvent("onunload", f);else if ("function" == typeof addEventListener) {
      addEventListener("onpagehide" in a ? "pagehide" : "unload", f, !1);
    }
    function f() {
      for (var _t10 in p.requests) {
        p.requests.hasOwnProperty(_t10) && p.requests[_t10].abort();
      }
    }
    t.exports = /*#__PURE__*/function (_o5) {
      "use strict";

      _inherits(_class6, _o5);
      var _super8 = _createSuper(_class6);
      function _class6(t) {
        var _this12;
        _classCallCheck(this, _class6);
        if (_this12 = _super8.call(this, t), "undefined" != typeof location) {
          var _e10 = "https:" === location.protocol;
          var _n13 = location.port;
          _n13 || (_n13 = _e10 ? 443 : 80), _this12.xd = "undefined" != typeof location && t.hostname !== location.hostname || _n13 !== t.port, _this12.xs = t.secure !== _e10;
        }
        var e = t && t.forceBase64;
        _this12.supportsBinary = u && !e;
        return _possibleConstructorReturn(_this12);
      }
      _createClass(_class6, [{
        key: "request",
        value: function request() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return Object.assign(t, {
            xd: this.xd,
            xs: this.xs
          }, this.opts), new p(this.uri(), t);
        }
      }, {
        key: "doWrite",
        value: function doWrite(t, e) {
          var n = this.request({
              method: "POST",
              data: t
            }),
            r = this;
          n.on("success", e), n.on("error", function (t) {
            r.onError("xhr post error", t);
          });
        }
      }, {
        key: "doPoll",
        value: function doPoll() {
          c("xhr poll");
          var t = this.request(),
            e = this;
          t.on("data", function (t) {
            e.onData(t);
          }), t.on("error", function (t) {
            e.onError("xhr poll error", t);
          }), this.pollXhr = t;
        }
      }]);
      return _class6;
    }(o), t.exports.Request = p;
  }, function (t, e, n) {
    var _n14 = n(12),
      r = _n14.PACKET_TYPES,
      o = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob),
      s = "function" == typeof ArrayBuffer,
      i = function i(t, e) {
        var n = new FileReader();
        return n.onload = function () {
          var t = n.result.split(",")[1];
          e("b" + t);
        }, n.readAsDataURL(t);
      };
    t.exports = function (_ref, n, a) {
      var t = _ref.type,
        e = _ref.data;
      return o && e instanceof Blob ? n ? a(e) : i(e, a) : s && (e instanceof ArrayBuffer || (c = e, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(c) : c && c.buffer instanceof ArrayBuffer)) ? n ? a(e instanceof ArrayBuffer ? e : e.buffer) : i(new Blob([e]), a) : a(r[t] + (e || ""));
      var c;
    };
  }, function (t, e, n) {
    var _n15 = n(12),
      r = _n15.PACKET_TYPES_REVERSE,
      o = _n15.ERROR_PACKET;
    var s;
    "function" == typeof ArrayBuffer && (s = n(27));
    var i = function i(t, e) {
        if (s) {
          var _n16 = s.decode(t);
          return a(_n16, e);
        }
        return {
          base64: !0,
          data: t
        };
      },
      a = function a(t, e) {
        switch (e) {
          case "blob":
            return t instanceof ArrayBuffer ? new Blob([t]) : t;
          case "arraybuffer":
          default:
            return t;
        }
      };
    t.exports = function (t, e) {
      if ("string" != typeof t) return {
        type: "message",
        data: a(t, e)
      };
      var n = t.charAt(0);
      if ("b" === n) return {
        type: "message",
        data: i(t.substring(1), e)
      };
      return r[n] ? t.length > 1 ? {
        type: r[n],
        data: t.substring(1)
      } : {
        type: r[n]
      } : o;
    };
  }, function (t, e) {
    !function (t) {
      "use strict";

      e.encode = function (e) {
        var n,
          r = new Uint8Array(e),
          o = r.length,
          s = "";
        for (n = 0; n < o; n += 3) {
          s += t[r[n] >> 2], s += t[(3 & r[n]) << 4 | r[n + 1] >> 4], s += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], s += t[63 & r[n + 2]];
        }
        return o % 3 == 2 ? s = s.substring(0, s.length - 1) + "=" : o % 3 == 1 && (s = s.substring(0, s.length - 2) + "=="), s;
      }, e.decode = function (e) {
        var n,
          r,
          o,
          s,
          i,
          a = .75 * e.length,
          c = e.length,
          h = 0;
        "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
        var u = new ArrayBuffer(a),
          p = new Uint8Array(u);
        for (n = 0; n < c; n += 4) {
          r = t.indexOf(e[n]), o = t.indexOf(e[n + 1]), s = t.indexOf(e[n + 2]), i = t.indexOf(e[n + 3]), p[h++] = r << 2 | o >> 4, p[h++] = (15 & o) << 4 | s >> 2, p[h++] = (3 & s) << 6 | 63 & i;
        }
        return u;
      };
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
  }, function (t, e, n) {
    var r = n(11),
      o = n(3),
      s = /\n/g,
      i = /\\n/g;
    var a;
    t.exports = /*#__PURE__*/function (_r9) {
      "use strict";

      _inherits(_class7, _r9);
      var _super9 = _createSuper(_class7);
      function _class7(t) {
        var _this13;
        _classCallCheck(this, _class7);
        _this13 = _super9.call(this, t), _this13.query = _this13.query || {}, a || (a = o.___eio = o.___eio || []), _this13.index = a.length;
        var e = _assertThisInitialized(_this13);
        a.push(function (t) {
          e.onData(t);
        }), _this13.query.j = _this13.index;
        return _this13;
      }
      _createClass(_class7, [{
        key: "supportsBinary",
        get: function get() {
          return !1;
        }
      }, {
        key: "doClose",
        value: function doClose() {
          this.script && (this.script.onerror = function () {}, this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), _get(_getPrototypeOf(_class7.prototype), "doClose", this).call(this);
        }
      }, {
        key: "doPoll",
        value: function doPoll() {
          var t = this,
            e = document.createElement("script");
          this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function (e) {
            t.onError("jsonp poll error", e);
          };
          var n = document.getElementsByTagName("script")[0];
          n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e), this.script = e;
          "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function () {
            var t = document.createElement("iframe");
            document.body.appendChild(t), document.body.removeChild(t);
          }, 100);
        }
      }, {
        key: "doWrite",
        value: function doWrite(t, e) {
          var n = this;
          var r;
          if (!this.form) {
            var _t11 = document.createElement("form"),
              _e11 = document.createElement("textarea"),
              _n17 = this.iframeId = "eio_iframe_" + this.index;
            _t11.className = "socketio", _t11.style.position = "absolute", _t11.style.top = "-1000px", _t11.style.left = "-1000px", _t11.target = _n17, _t11.method = "POST", _t11.setAttribute("accept-charset", "utf-8"), _e11.name = "d", _t11.appendChild(_e11), document.body.appendChild(_t11), this.form = _t11, this.area = _e11;
          }
          function o() {
            a(), e();
          }
          function a() {
            if (n.iframe) try {
              n.form.removeChild(n.iframe);
            } catch (t) {
              n.onError("jsonp polling iframe removal error", t);
            }
            try {
              var _t12 = '<iframe src="javascript:0" name="' + n.iframeId + '">';
              r = document.createElement(_t12);
            } catch (t) {
              r = document.createElement("iframe"), r.name = n.iframeId, r.src = "javascript:0";
            }
            r.id = n.iframeId, n.form.appendChild(r), n.iframe = r;
          }
          this.form.action = this.uri(), a(), t = t.replace(i, "\\\n"), this.area.value = t.replace(s, "\\n");
          try {
            this.form.submit();
          } catch (t) {}
          this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
            "complete" === n.iframe.readyState && o();
          } : this.iframe.onload = o;
        }
      }]);
      return _class7;
    }(r);
  }, function (t, e, n) {
    (function (e) {
      var r = n(2),
        o = n(5),
        s = n(13),
        i = n(4),
        _n18 = n(14),
        a = _n18.pick,
        c = n(3),
        h = n(0)("engine.io-client:websocket");
      var u = c.WebSocket || c.MozWebSocket,
        p = !0,
        f = "arraybuffer";
      "undefined" == typeof window && (u = n(35), p = !1, f = "nodebuffer");
      var l = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
      var d = /*#__PURE__*/function (_i2) {
        "use strict";

        _inherits(d, _i2);
        var _super10 = _createSuper(d);
        function d(t) {
          var _this14;
          _classCallCheck(this, d);
          _this14 = _super10.call(this, t), _this14.supportsBinary = !t.forceBase64;
          return _this14;
        }
        _createClass(d, [{
          key: "name",
          get: function get() {
            return "websocket";
          }
        }, {
          key: "doOpen",
          value: function doOpen() {
            if (!this.check()) return;
            var t = this.uri(),
              e = this.opts.protocols,
              n = l ? {} : a(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
            this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
            try {
              this.ws = p && !l ? e ? new u(t, e) : new u(t) : new u(t, e, n);
            } catch (t) {
              return console.log("error", t), this.emit("error", t);
            }
            this.ws.binaryType = this.socket.binaryType || f, this.addEventListeners();
          }
        }, {
          key: "addEventListeners",
          value: function addEventListeners() {
            var _this15 = this;
            this.ws.onopen = function () {
              _this15.opts.autoUnref && _this15.ws._socket.unref(), _this15.onOpen();
            }, this.ws.onclose = this.onClose.bind(this), this.ws.onmessage = function (t) {
              return _this15.onData(t.data);
            }, this.ws.onerror = function (t) {
              return _this15.onError("websocket error", t);
            };
          }
        }, {
          key: "write",
          value: function write(t) {
            var n = this;
            this.writable = !1;
            var o = t.length,
              s = 0;
            var i = o;
            for (; s < i; s++) {
              !function (t) {
                r.encodePacket(t, n.supportsBinary, function (r) {
                  var s = {};
                  if (!p && (t.options && (s.compress = t.options.compress), n.opts.perMessageDeflate)) {
                    ("string" == typeof r ? e.byteLength(r) : r.length) < n.opts.perMessageDeflate.threshold && (s.compress = !1);
                  }
                  try {
                    p ? n.ws.send(r) : n.ws.send(r, s);
                  } catch (t) {
                    h("websocket closed before onclose event");
                  }
                  --o || a();
                });
              }(t[s]);
            }
            function a() {
              n.emit("flush"), setTimeout(function () {
                n.writable = !0, n.emit("drain");
              }, 0);
            }
          }
        }, {
          key: "onClose",
          value: function onClose() {
            i.prototype.onClose.call(this);
          }
        }, {
          key: "doClose",
          value: function doClose() {
            void 0 !== this.ws && (this.ws.close(), this.ws = null);
          }
        }, {
          key: "uri",
          value: function uri() {
            var t = this.query || {};
            var e = this.opts.secure ? "wss" : "ws";
            var n = "";
            this.opts.port && ("wss" === e && 443 !== Number(this.opts.port) || "ws" === e && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = s()), this.supportsBinary || (t.b64 = 1), t = o.encode(t), t.length && (t = "?" + t);
            return e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + t;
          }
        }, {
          key: "check",
          value: function check() {
            return !(!u || "__initialize" in u && this.name === d.prototype.name);
          }
        }]);
        return d;
      }(i);
      t.exports = d;
    }).call(this, n(30).Buffer);
  }, function (t, e, n) {
    "use strict";

    (function (t) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var r = n(32),
        o = n(33),
        s = n(34);
      function i() {
        return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function a(t, e) {
        if (i() < e) throw new RangeError("Invalid typed array length");
        return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)), t.length = e), t;
      }
      function c(t, e, n) {
        if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, n);
        if ("number" == typeof t) {
          if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
          return p(this, t);
        }
        return h(this, t, e, n);
      }
      function h(t, e, n, r) {
        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, n, r) {
          if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
          if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
          e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
          c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = f(t, e);
          return t;
        }(t, e, n, r) : "string" == typeof e ? function (t, e, n) {
          "string" == typeof n && "" !== n || (n = "utf8");
          if (!c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
          var r = 0 | d(e, n),
            o = (t = a(t, r)).write(e, n);
          o !== r && (t = t.slice(0, o));
          return t;
        }(t, e, n) : function (t, e) {
          if (c.isBuffer(e)) {
            var n = 0 | l(e.length);
            return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n), t;
          }
          if (e) {
            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : f(t, e);
            if ("Buffer" === e.type && s(e.data)) return f(t, e.data);
          }
          var r;
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }(t, e);
      }
      function u(t) {
        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
        if (t < 0) throw new RangeError('"size" argument must not be negative');
      }
      function p(t, e) {
        if (u(e), t = a(t, e < 0 ? 0 : 0 | l(e)), !c.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) {
          t[n] = 0;
        }
        return t;
      }
      function f(t, e) {
        var n = e.length < 0 ? 0 : 0 | l(e.length);
        t = a(t, n);
        for (var r = 0; r < n; r += 1) {
          t[r] = 255 & e[r];
        }
        return t;
      }
      function l(t) {
        if (t >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
        return 0 | t;
      }
      function d(t, e) {
        if (c.isBuffer(t)) return t.length;
        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
        "string" != typeof t && (t = "" + t);
        var n = t.length;
        if (0 === n) return 0;
        for (var r = !1;;) {
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
            case void 0:
              return Y(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return q(t).length;
            default:
              if (r) return Y(t).length;
              e = ("" + e).toLowerCase(), r = !0;
          }
        }
      }
      function y(t, e, n) {
        var r = !1;
        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
        if ((n >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8");;) {
          switch (t) {
            case "hex":
              return C(this, e, n);
            case "utf8":
            case "utf-8":
              return x(this, e, n);
            case "ascii":
              return S(this, e, n);
            case "latin1":
            case "binary":
              return P(this, e, n);
            case "base64":
              return T(this, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return R(this, e, n);
            default:
              if (r) throw new TypeError("Unknown encoding: " + t);
              t = (t + "").toLowerCase(), r = !0;
          }
        }
      }
      function g(t, e, n) {
        var r = t[e];
        t[e] = t[n], t[n] = r;
      }
      function m(t, e, n, r, o) {
        if (0 === t.length) return -1;
        if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
          if (o) return -1;
          n = t.length - 1;
        } else if (n < 0) {
          if (!o) return -1;
          n = 0;
        }
        if ("string" == typeof e && (e = c.from(e, r)), c.isBuffer(e)) return 0 === e.length ? -1 : v(t, e, n, r, o);
        if ("number" == typeof e) return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : v(t, [e], n, r, o);
        throw new TypeError("val must be string, number or Buffer");
      }
      function v(t, e, n, r, o) {
        var s,
          i = 1,
          a = t.length,
          c = e.length;
        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
          if (t.length < 2 || e.length < 2) return -1;
          i = 2, a /= 2, c /= 2, n /= 2;
        }
        function h(t, e) {
          return 1 === i ? t[e] : t.readUInt16BE(e * i);
        }
        if (o) {
          var u = -1;
          for (s = n; s < a; s++) {
            if (h(t, s) === h(e, -1 === u ? 0 : s - u)) {
              if (-1 === u && (u = s), s - u + 1 === c) return u * i;
            } else -1 !== u && (s -= s - u), u = -1;
          }
        } else for (n + c > a && (n = a - c), s = n; s >= 0; s--) {
          for (var p = !0, f = 0; f < c; f++) {
            if (h(t, s + f) !== h(e, f)) {
              p = !1;
              break;
            }
          }
          if (p) return s;
        }
        return -1;
      }
      function b(t, e, n, r) {
        n = Number(n) || 0;
        var o = t.length - n;
        r ? (r = Number(r)) > o && (r = o) : r = o;
        var s = e.length;
        if (s % 2 != 0) throw new TypeError("Invalid hex string");
        r > s / 2 && (r = s / 2);
        for (var i = 0; i < r; ++i) {
          var a = parseInt(e.substr(2 * i, 2), 16);
          if (isNaN(a)) return i;
          t[n + i] = a;
        }
        return i;
      }
      function w(t, e, n, r) {
        return F(Y(e, t.length - n), t, n, r);
      }
      function _(t, e, n, r) {
        return F(function (t) {
          for (var e = [], n = 0; n < t.length; ++n) {
            e.push(255 & t.charCodeAt(n));
          }
          return e;
        }(e), t, n, r);
      }
      function E(t, e, n, r) {
        return _(t, e, n, r);
      }
      function k(t, e, n, r) {
        return F(q(e), t, n, r);
      }
      function A(t, e, n, r) {
        return F(function (t, e) {
          for (var n, r, o, s = [], i = 0; i < t.length && !((e -= 2) < 0); ++i) {
            n = t.charCodeAt(i), r = n >> 8, o = n % 256, s.push(o), s.push(r);
          }
          return s;
        }(e, t.length - n), t, n, r);
      }
      function T(t, e, n) {
        return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
      }
      function x(t, e, n) {
        n = Math.min(t.length, n);
        for (var r = [], o = e; o < n;) {
          var s,
            i,
            a,
            c,
            h = t[o],
            u = null,
            p = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
          if (o + p <= n) switch (p) {
            case 1:
              h < 128 && (u = h);
              break;
            case 2:
              128 == (192 & (s = t[o + 1])) && (c = (31 & h) << 6 | 63 & s) > 127 && (u = c);
              break;
            case 3:
              s = t[o + 1], i = t[o + 2], 128 == (192 & s) && 128 == (192 & i) && (c = (15 & h) << 12 | (63 & s) << 6 | 63 & i) > 2047 && (c < 55296 || c > 57343) && (u = c);
              break;
            case 4:
              s = t[o + 1], i = t[o + 2], a = t[o + 3], 128 == (192 & s) && 128 == (192 & i) && 128 == (192 & a) && (c = (15 & h) << 18 | (63 & s) << 12 | (63 & i) << 6 | 63 & a) > 65535 && c < 1114112 && (u = c);
          }
          null === u ? (u = 65533, p = 1) : u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r.push(u), o += p;
        }
        return function (t) {
          var e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          var n = "",
            r = 0;
          for (; r < e;) {
            n += String.fromCharCode.apply(String, t.slice(r, r += 4096));
          }
          return n;
        }(r);
      }
      e.Buffer = c, e.SlowBuffer = function (t) {
        +t != t && (t = 0);
        return c.alloc(+t);
      }, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
        try {
          var t = new Uint8Array(1);
          return t.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function foo() {
              return 42;
            }
          }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
        } catch (t) {
          return !1;
        }
      }(), e.kMaxLength = i(), c.poolSize = 8192, c._augment = function (t) {
        return t.__proto__ = c.prototype, t;
      }, c.from = function (t, e, n) {
        return h(null, t, e, n);
      }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
        value: null,
        configurable: !0
      })), c.alloc = function (t, e, n) {
        return function (t, e, n, r) {
          return u(e), e <= 0 ? a(t, e) : void 0 !== n ? "string" == typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n) : a(t, e);
        }(null, t, e, n);
      }, c.allocUnsafe = function (t) {
        return p(null, t);
      }, c.allocUnsafeSlow = function (t) {
        return p(null, t);
      }, c.isBuffer = function (t) {
        return !(null == t || !t._isBuffer);
      }, c.compare = function (t, e) {
        if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
        if (t === e) return 0;
        for (var n = t.length, r = e.length, o = 0, s = Math.min(n, r); o < s; ++o) {
          if (t[o] !== e[o]) {
            n = t[o], r = e[o];
            break;
          }
        }
        return n < r ? -1 : r < n ? 1 : 0;
      }, c.isEncoding = function (t) {
        switch (String(t).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1;
        }
      }, c.concat = function (t, e) {
        if (!s(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length) return c.alloc(0);
        var n;
        if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) {
          e += t[n].length;
        }
        var r = c.allocUnsafe(e),
          o = 0;
        for (n = 0; n < t.length; ++n) {
          var i = t[n];
          if (!c.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
          i.copy(r, o), o += i.length;
        }
        return r;
      }, c.byteLength = d, c.prototype._isBuffer = !0, c.prototype.swap16 = function () {
        var t = this.length;
        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var e = 0; e < t; e += 2) {
          g(this, e, e + 1);
        }
        return this;
      }, c.prototype.swap32 = function () {
        var t = this.length;
        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var e = 0; e < t; e += 4) {
          g(this, e, e + 3), g(this, e + 1, e + 2);
        }
        return this;
      }, c.prototype.swap64 = function () {
        var t = this.length;
        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var e = 0; e < t; e += 8) {
          g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
        }
        return this;
      }, c.prototype.toString = function () {
        var t = 0 | this.length;
        return 0 === t ? "" : 0 === arguments.length ? x(this, 0, t) : y.apply(this, arguments);
      }, c.prototype.equals = function (t) {
        if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        return this === t || 0 === c.compare(this, t);
      }, c.prototype.inspect = function () {
        var t = "",
          n = e.INSPECT_MAX_BYTES;
        return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">";
      }, c.prototype.compare = function (t, e, n, r, o) {
        if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
        if (r >= o && e >= n) return 0;
        if (r >= o) return -1;
        if (e >= n) return 1;
        if (this === t) return 0;
        for (var s = (o >>>= 0) - (r >>>= 0), i = (n >>>= 0) - (e >>>= 0), a = Math.min(s, i), h = this.slice(r, o), u = t.slice(e, n), p = 0; p < a; ++p) {
          if (h[p] !== u[p]) {
            s = h[p], i = u[p];
            break;
          }
        }
        return s < i ? -1 : i < s ? 1 : 0;
      }, c.prototype.includes = function (t, e, n) {
        return -1 !== this.indexOf(t, e, n);
      }, c.prototype.indexOf = function (t, e, n) {
        return m(this, t, e, n, !0);
      }, c.prototype.lastIndexOf = function (t, e, n) {
        return m(this, t, e, n, !1);
      }, c.prototype.write = function (t, e, n, r) {
        if (void 0 === e) r = "utf8", n = this.length, e = 0;else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;else {
          if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
        }
        var o = this.length - e;
        if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        r || (r = "utf8");
        for (var s = !1;;) {
          switch (r) {
            case "hex":
              return b(this, t, e, n);
            case "utf8":
            case "utf-8":
              return w(this, t, e, n);
            case "ascii":
              return _(this, t, e, n);
            case "latin1":
            case "binary":
              return E(this, t, e, n);
            case "base64":
              return k(this, t, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return A(this, t, e, n);
            default:
              if (s) throw new TypeError("Unknown encoding: " + r);
              r = ("" + r).toLowerCase(), s = !0;
          }
        }
      }, c.prototype.toJSON = function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function S(t, e, n) {
        var r = "";
        n = Math.min(t.length, n);
        for (var o = e; o < n; ++o) {
          r += String.fromCharCode(127 & t[o]);
        }
        return r;
      }
      function P(t, e, n) {
        var r = "";
        n = Math.min(t.length, n);
        for (var o = e; o < n; ++o) {
          r += String.fromCharCode(t[o]);
        }
        return r;
      }
      function C(t, e, n) {
        var r = t.length;
        (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
        for (var o = "", s = e; s < n; ++s) {
          o += D(t[s]);
        }
        return o;
      }
      function R(t, e, n) {
        for (var r = t.slice(e, n), o = "", s = 0; s < r.length; s += 2) {
          o += String.fromCharCode(r[s] + 256 * r[s + 1]);
        }
        return o;
      }
      function O(t, e, n) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
      }
      function B(t, e, n, r, o, s) {
        if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > o || e < s) throw new RangeError('"value" argument is out of bounds');
        if (n + r > t.length) throw new RangeError("Index out of range");
      }
      function L(t, e, n, r) {
        e < 0 && (e = 65535 + e + 1);
        for (var o = 0, s = Math.min(t.length - n, 2); o < s; ++o) {
          t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o);
        }
      }
      function N(t, e, n, r) {
        e < 0 && (e = 4294967295 + e + 1);
        for (var o = 0, s = Math.min(t.length - n, 4); o < s; ++o) {
          t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255;
        }
      }
      function j(t, e, n, r, o, s) {
        if (n + r > t.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }
      function I(t, e, n, r, s) {
        return s || j(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4;
      }
      function M(t, e, n, r, s) {
        return s || j(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8;
      }
      c.prototype.slice = function (t, e) {
        var n,
          r = this.length;
        if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), c.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = c.prototype;else {
          var o = e - t;
          n = new c(o, void 0);
          for (var s = 0; s < o; ++s) {
            n[s] = this[s + t];
          }
        }
        return n;
      }, c.prototype.readUIntLE = function (t, e, n) {
        t |= 0, e |= 0, n || O(t, e, this.length);
        for (var r = this[t], o = 1, s = 0; ++s < e && (o *= 256);) {
          r += this[t + s] * o;
        }
        return r;
      }, c.prototype.readUIntBE = function (t, e, n) {
        t |= 0, e |= 0, n || O(t, e, this.length);
        for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) {
          r += this[t + --e] * o;
        }
        return r;
      }, c.prototype.readUInt8 = function (t, e) {
        return e || O(t, 1, this.length), this[t];
      }, c.prototype.readUInt16LE = function (t, e) {
        return e || O(t, 2, this.length), this[t] | this[t + 1] << 8;
      }, c.prototype.readUInt16BE = function (t, e) {
        return e || O(t, 2, this.length), this[t] << 8 | this[t + 1];
      }, c.prototype.readUInt32LE = function (t, e) {
        return e || O(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
      }, c.prototype.readUInt32BE = function (t, e) {
        return e || O(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
      }, c.prototype.readIntLE = function (t, e, n) {
        t |= 0, e |= 0, n || O(t, e, this.length);
        for (var r = this[t], o = 1, s = 0; ++s < e && (o *= 256);) {
          r += this[t + s] * o;
        }
        return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r;
      }, c.prototype.readIntBE = function (t, e, n) {
        t |= 0, e |= 0, n || O(t, e, this.length);
        for (var r = e, o = 1, s = this[t + --r]; r > 0 && (o *= 256);) {
          s += this[t + --r] * o;
        }
        return s >= (o *= 128) && (s -= Math.pow(2, 8 * e)), s;
      }, c.prototype.readInt8 = function (t, e) {
        return e || O(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
      }, c.prototype.readInt16LE = function (t, e) {
        e || O(t, 2, this.length);
        var n = this[t] | this[t + 1] << 8;
        return 32768 & n ? 4294901760 | n : n;
      }, c.prototype.readInt16BE = function (t, e) {
        e || O(t, 2, this.length);
        var n = this[t + 1] | this[t] << 8;
        return 32768 & n ? 4294901760 | n : n;
      }, c.prototype.readInt32LE = function (t, e) {
        return e || O(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
      }, c.prototype.readInt32BE = function (t, e) {
        return e || O(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
      }, c.prototype.readFloatLE = function (t, e) {
        return e || O(t, 4, this.length), o.read(this, t, !0, 23, 4);
      }, c.prototype.readFloatBE = function (t, e) {
        return e || O(t, 4, this.length), o.read(this, t, !1, 23, 4);
      }, c.prototype.readDoubleLE = function (t, e) {
        return e || O(t, 8, this.length), o.read(this, t, !0, 52, 8);
      }, c.prototype.readDoubleBE = function (t, e) {
        return e || O(t, 8, this.length), o.read(this, t, !1, 52, 8);
      }, c.prototype.writeUIntLE = function (t, e, n, r) {
        (t = +t, e |= 0, n |= 0, r) || B(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
        var o = 1,
          s = 0;
        for (this[e] = 255 & t; ++s < n && (o *= 256);) {
          this[e + s] = t / o & 255;
        }
        return e + n;
      }, c.prototype.writeUIntBE = function (t, e, n, r) {
        (t = +t, e |= 0, n |= 0, r) || B(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
        var o = n - 1,
          s = 1;
        for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) {
          this[e + o] = t / s & 255;
        }
        return e + n;
      }, c.prototype.writeUInt8 = function (t, e, n) {
        return t = +t, e |= 0, n || B(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
      }, c.prototype.writeUInt16LE = function (t, e, n) {
        return t = +t, e |= 0, n || B(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : L(this, t, e, !0), e + 2;
      }, c.prototype.writeUInt16BE = function (t, e, n) {
        return t = +t, e |= 0, n || B(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : L(this, t, e, !1), e + 2;
      }, c.prototype.writeUInt32LE = function (t, e, n) {
        return t = +t, e |= 0, n || B(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : N(this, t, e, !0), e + 4;
      }, c.prototype.writeUInt32BE = function (t, e, n) {
        return t = +t, e |= 0, n || B(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : N(this, t, e, !1), e + 4;
      }, c.prototype.writeIntLE = function (t, e, n, r) {
        if (t = +t, e |= 0, !r) {
          var o = Math.pow(2, 8 * n - 1);
          B(this, t, e, n, o - 1, -o);
        }
        var s = 0,
          i = 1,
          a = 0;
        for (this[e] = 255 & t; ++s < n && (i *= 256);) {
          t < 0 && 0 === a && 0 !== this[e + s - 1] && (a = 1), this[e + s] = (t / i >> 0) - a & 255;
        }
        return e + n;
      }, c.prototype.writeIntBE = function (t, e, n, r) {
        if (t = +t, e |= 0, !r) {
          var o = Math.pow(2, 8 * n - 1);
          B(this, t, e, n, o - 1, -o);
        }
        var s = n - 1,
          i = 1,
          a = 0;
        for (this[e + s] = 255 & t; --s >= 0 && (i *= 256);) {
          t < 0 && 0 === a && 0 !== this[e + s + 1] && (a = 1), this[e + s] = (t / i >> 0) - a & 255;
        }
        return e + n;
      }, c.prototype.writeInt8 = function (t, e, n) {
        return t = +t, e |= 0, n || B(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
      }, c.prototype.writeInt16LE = function (t, e, n) {
        return t = +t, e |= 0, n || B(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : L(this, t, e, !0), e + 2;
      }, c.prototype.writeInt16BE = function (t, e, n) {
        return t = +t, e |= 0, n || B(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : L(this, t, e, !1), e + 2;
      }, c.prototype.writeInt32LE = function (t, e, n) {
        return t = +t, e |= 0, n || B(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : N(this, t, e, !0), e + 4;
      }, c.prototype.writeInt32BE = function (t, e, n) {
        return t = +t, e |= 0, n || B(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : N(this, t, e, !1), e + 4;
      }, c.prototype.writeFloatLE = function (t, e, n) {
        return I(this, t, e, !0, n);
      }, c.prototype.writeFloatBE = function (t, e, n) {
        return I(this, t, e, !1, n);
      }, c.prototype.writeDoubleLE = function (t, e, n) {
        return M(this, t, e, !0, n);
      }, c.prototype.writeDoubleBE = function (t, e, n) {
        return M(this, t, e, !1, n);
      }, c.prototype.copy = function (t, e, n, r) {
        if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
        if (0 === t.length || 0 === this.length) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
        if (r < 0) throw new RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
        var o,
          s = r - n;
        if (this === t && n < e && e < r) for (o = s - 1; o >= 0; --o) {
          t[o + e] = this[o + n];
        } else if (s < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (o = 0; o < s; ++o) {
          t[o + e] = this[o + n];
        } else Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e);
        return s;
      }, c.prototype.fill = function (t, e, n, r) {
        if ("string" == typeof t) {
          if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
            var o = t.charCodeAt(0);
            o < 256 && (t = o);
          }
          if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
          if ("string" == typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
        } else "number" == typeof t && (t &= 255);
        if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
        if (n <= e) return this;
        var s;
        if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (s = e; s < n; ++s) {
          this[s] = t;
        } else {
          var i = c.isBuffer(t) ? t : Y(new c(t, r).toString()),
            a = i.length;
          for (s = 0; s < n - e; ++s) {
            this[s + e] = i[s % a];
          }
        }
        return this;
      };
      var U = /[^+\/0-9A-Za-z-_]/g;
      function D(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }
      function Y(t, e) {
        var n;
        e = e || 1 / 0;
        for (var r = t.length, o = null, s = [], i = 0; i < r; ++i) {
          if ((n = t.charCodeAt(i)) > 55295 && n < 57344) {
            if (!o) {
              if (n > 56319) {
                (e -= 3) > -1 && s.push(239, 191, 189);
                continue;
              }
              if (i + 1 === r) {
                (e -= 3) > -1 && s.push(239, 191, 189);
                continue;
              }
              o = n;
              continue;
            }
            if (n < 56320) {
              (e -= 3) > -1 && s.push(239, 191, 189), o = n;
              continue;
            }
            n = 65536 + (o - 55296 << 10 | n - 56320);
          } else o && (e -= 3) > -1 && s.push(239, 191, 189);
          if (o = null, n < 128) {
            if ((e -= 1) < 0) break;
            s.push(n);
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;
            s.push(n >> 6 | 192, 63 & n | 128);
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;
            s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
          }
        }
        return s;
      }
      function q(t) {
        return r.toByteArray(function (t) {
          if ((t = function (t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
          }(t).replace(U, "")).length < 2) return "";
          for (; t.length % 4 != 0;) {
            t += "=";
          }
          return t;
        }(t));
      }
      function F(t, e, n, r) {
        for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) {
          e[o + n] = t[o];
        }
        return o;
      }
    }).call(this, n(31));
  }, function (t, e) {
    var n;
    n = function () {
      return this;
    }();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }
    t.exports = n;
  }, function (t, e, n) {
    "use strict";

    e.byteLength = function (t) {
      var e = h(t),
        n = e[0],
        r = e[1];
      return 3 * (n + r) / 4 - r;
    }, e.toByteArray = function (t) {
      var e,
        n,
        r = h(t),
        i = r[0],
        a = r[1],
        c = new s(function (t, e, n) {
          return 3 * (e + n) / 4 - n;
        }(0, i, a)),
        u = 0,
        p = a > 0 ? i - 4 : i;
      for (n = 0; n < p; n += 4) {
        e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)], c[u++] = e >> 16 & 255, c[u++] = e >> 8 & 255, c[u++] = 255 & e;
      }
      2 === a && (e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4, c[u++] = 255 & e);
      1 === a && (e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2, c[u++] = e >> 8 & 255, c[u++] = 255 & e);
      return c;
    }, e.fromByteArray = function (t) {
      for (var e, n = t.length, o = n % 3, s = [], i = 0, a = n - o; i < a; i += 16383) {
        s.push(u(t, i, i + 16383 > a ? a : i + 16383));
      }
      1 === o ? (e = t[n - 1], s.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], s.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
      return s.join("");
    };
    for (var r = [], o = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = i.length; a < c; ++a) {
      r[a] = i[a], o[i.charCodeAt(a)] = a;
    }
    function h(t) {
      var e = t.length;
      if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var n = t.indexOf("=");
      return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4];
    }
    function u(t, e, n) {
      for (var o, s, i = [], a = e; a < n; a += 3) {
        o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), i.push(r[(s = o) >> 18 & 63] + r[s >> 12 & 63] + r[s >> 6 & 63] + r[63 & s]);
      }
      return i.join("");
    }
    o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
  }, function (t, e) {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    e.read = function (t, e, n, r, o) {
      var s,
        i,
        a = 8 * o - r - 1,
        c = (1 << a) - 1,
        h = c >> 1,
        u = -7,
        p = n ? o - 1 : 0,
        f = n ? -1 : 1,
        l = t[e + p];
      for (p += f, s = l & (1 << -u) - 1, l >>= -u, u += a; u > 0; s = 256 * s + t[e + p], p += f, u -= 8) {
        ;
      }
      for (i = s & (1 << -u) - 1, s >>= -u, u += r; u > 0; i = 256 * i + t[e + p], p += f, u -= 8) {
        ;
      }
      if (0 === s) s = 1 - h;else {
        if (s === c) return i ? NaN : 1 / 0 * (l ? -1 : 1);
        i += Math.pow(2, r), s -= h;
      }
      return (l ? -1 : 1) * i * Math.pow(2, s - r);
    }, e.write = function (t, e, n, r, o, s) {
      var i,
        a,
        c,
        h = 8 * s - o - 1,
        u = (1 << h) - 1,
        p = u >> 1,
        f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        l = r ? 0 : s - 1,
        d = r ? 1 : -1,
        y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, i = u) : (i = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -i)) < 1 && (i--, c *= 2), (e += i + p >= 1 ? f / c : f * Math.pow(2, 1 - p)) * c >= 2 && (i++, c /= 2), i + p >= u ? (a = 0, i = u) : i + p >= 1 ? (a = (e * c - 1) * Math.pow(2, o), i += p) : (a = e * Math.pow(2, p - 1) * Math.pow(2, o), i = 0)); o >= 8; t[n + l] = 255 & a, l += d, a /= 256, o -= 8) {
        ;
      }
      for (i = i << o | a, h += o; h > 0; t[n + l] = 255 & i, l += d, i /= 256, h -= 8) {
        ;
      }
      t[n + l - d] |= 128 * y;
    };
  }, function (t, e) {
    var n = {}.toString;
    t.exports = Array.isArray || function (t) {
      return "[object Array]" == n.call(t);
    };
  }, function (t, e, n) {
    var r = n(36),
      o = n(37),
      s = n(0)("@hyoga/uni-socket"),
      i = uni || wx;
    var a = /*#__PURE__*/function (_r10) {
      "use strict";

      _inherits(a, _r10);
      var _super11 = _createSuper(a);
      function a(t, e, n) {
        var _this16;
        _classCallCheck(this, a);
        _this16 = _super11.call(this), _this16._readyState = a.CONNECTING, _this16._socket = null, null !== t && (Array.isArray(e) ? e = e.join(", ") : "object" == _typeof(e) && null !== e && (n = e, e = void 0), _this16.initAsClient(t, e, n));
        return _this16;
      }
      _createClass(a, [{
        key: "initAsClient",
        value: function initAsClient(t, e, n) {
          Object.assign(n, {
            url: t,
            header: {
              "content-type": "application/json"
            },
            protocols: e,
            timeout: 25e3
          }), this._socket = this.createConnection(n), this.addSocketEventListeners();
        }
      }, {
        key: "createConnection",
        value: function createConnection(t) {
          return i.connectSocket(_objectSpread({
            complete: function complete() {}
          }, t));
        }
      }, {
        key: "addSocketEventListeners",
        value: function addSocketEventListeners() {
          var _this17 = this;
          this._socket.onOpen(function () {
            _this17._readyState = a.OPEN, _this17.onopen();
          }), this._socket.onClose(function (t) {
            s("onclose: ", t), _this17._readyState = a.CLOSED, _this17.onclose(t.code, t.reason);
          }), this._socket.onError(function (t) {
            s("onerror: ", t), _this17.onerror(t);
          }), this._socket.onMessage(function (t) {
            _this17.onmessage(t);
          });
        }
      }, {
        key: "send",
        value: function send(t) {
          if (s("send data: ", t, this._readyState), this._readyState === a.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
          "number" == typeof t && (t = t.toString()), this._readyState === a.OPEN && this._socket.send({
            data: t
          });
        }
      }, {
        key: "close",
        value: function close(t, e) {
          s("close socket: ", t, e), this._readyState = a.CLOSING, this._socket.close({
            code: t,
            reason: e
          });
        }
      }]);
      return a;
    }(r);
    ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (t, e) {
      a[t] = e;
    });
    ["open", "error", "close", "message"].forEach(function (t) {
      Object.defineProperty(a.prototype, "on" + t, {
        get: function get() {
          var e = this.listeners(t);
          for (var n = 0; n < e.length; n++) {
            if (e[n]._listener) return e[n]._listener;
          }
        },
        set: function set(e) {
          var n = this.listeners(t);
          for (var r = 0; r < n.length; r++) {
            n[r]._listener && this.removeListener(t, n[r]);
          }
          this.addEventListener(t, e);
        }
      });
    }), a.prototype.addEventListener = o.addEventListener, a.prototype.removeEventListener = o.removeEventListener, t.exports = a;
  }, function (t, e, n) {
    "use strict";

    var r,
      o = "object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) ? Reflect : null,
      s = o && "function" == typeof o.apply ? o.apply : function (t, e, n) {
        return Function.prototype.apply.call(t, e, n);
      };
    r = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function (t) {
      return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
    } : function (t) {
      return Object.getOwnPropertyNames(t);
    };
    var i = Number.isNaN || function (t) {
      return t != t;
    };
    function a() {
      a.init.call(this);
    }
    t.exports = a, t.exports.once = function (t, e) {
      return new Promise(function (n, r) {
        function o() {
          void 0 !== s && t.removeListener("error", s), n([].slice.call(arguments));
        }
        var s;
        "error" !== e && (s = function s(n) {
          t.removeListener(e, o), r(n);
        }, t.once("error", s)), t.once(e, o);
      });
    }, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
    var c = 10;
    function h(t) {
      if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(t));
    }
    function u(t) {
      return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners;
    }
    function p(t, e, n, r) {
      var o, s, i, a;
      if (h(n), void 0 === (s = t._events) ? (s = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== s.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), s = t._events), i = s[e]), void 0 === i) i = s[e] = n, ++t._eventsCount;else if ("function" == typeof i ? i = s[e] = r ? [n, i] : [i, n] : r ? i.unshift(n) : i.push(n), (o = u(t)) > 0 && i.length > o && !i.warned) {
        i.warned = !0;
        var c = new Error("Possible EventEmitter memory leak detected. " + i.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = i.length, a = c, console && console.warn && console.warn(a);
      }
      return t;
    }
    function f() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function l(t, e, n) {
      var r = {
          fired: !1,
          wrapFn: void 0,
          target: t,
          type: e,
          listener: n
        },
        o = f.bind(r);
      return o.listener = n, r.wrapFn = o, o;
    }
    function d(t, e, n) {
      var r = t._events;
      if (void 0 === r) return [];
      var o = r[e];
      return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function (t) {
        for (var e = new Array(t.length), n = 0; n < e.length; ++n) {
          e[n] = t[n].listener || t[n];
        }
        return e;
      }(o) : g(o, o.length);
    }
    function y(t) {
      var e = this._events;
      if (void 0 !== e) {
        var n = e[t];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length;
      }
      return 0;
    }
    function g(t, e) {
      for (var n = new Array(e), r = 0; r < e; ++r) {
        n[r] = t[r];
      }
      return n;
    }
    Object.defineProperty(a, "defaultMaxListeners", {
      enumerable: !0,
      get: function get() {
        return c;
      },
      set: function set(t) {
        if ("number" != typeof t || t < 0 || i(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        c = t;
      }
    }), a.init = function () {
      void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, a.prototype.setMaxListeners = function (t) {
      if ("number" != typeof t || t < 0 || i(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
      return this._maxListeners = t, this;
    }, a.prototype.getMaxListeners = function () {
      return u(this);
    }, a.prototype.emit = function (t) {
      for (var e = [], n = 1; n < arguments.length; n++) {
        e.push(arguments[n]);
      }
      var r = "error" === t,
        o = this._events;
      if (void 0 !== o) r = r && void 0 === o.error;else if (!r) return !1;
      if (r) {
        var i;
        if (e.length > 0 && (i = e[0]), i instanceof Error) throw i;
        var a = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
        throw a.context = i, a;
      }
      var c = o[t];
      if (void 0 === c) return !1;
      if ("function" == typeof c) s(c, this, e);else {
        var h = c.length,
          u = g(c, h);
        for (n = 0; n < h; ++n) {
          s(u[n], this, e);
        }
      }
      return !0;
    }, a.prototype.addListener = function (t, e) {
      return p(this, t, e, !1);
    }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function (t, e) {
      return p(this, t, e, !0);
    }, a.prototype.once = function (t, e) {
      return h(e), this.on(t, l(this, t, e)), this;
    }, a.prototype.prependOnceListener = function (t, e) {
      return h(e), this.prependListener(t, l(this, t, e)), this;
    }, a.prototype.removeListener = function (t, e) {
      var n, r, o, s, i;
      if (h(e), void 0 === (r = this._events)) return this;
      if (void 0 === (n = r[t])) return this;
      if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));else if ("function" != typeof n) {
        for (o = -1, s = n.length - 1; s >= 0; s--) {
          if (n[s] === e || n[s].listener === e) {
            i = n[s].listener, o = s;
            break;
          }
        }
        if (o < 0) return this;
        0 === o ? n.shift() : function (t, e) {
          for (; e + 1 < t.length; e++) {
            t[e] = t[e + 1];
          }
          t.pop();
        }(n, o), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, i || e);
      }
      return this;
    }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function (t) {
      var e, n, r;
      if (void 0 === (n = this._events)) return this;
      if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
      if (0 === arguments.length) {
        var o,
          s = Object.keys(n);
        for (r = 0; r < s.length; ++r) {
          "removeListener" !== (o = s[r]) && this.removeAllListeners(o);
        }
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }
      if ("function" == typeof (e = n[t])) this.removeListener(t, e);else if (void 0 !== e) for (r = e.length - 1; r >= 0; r--) {
        this.removeListener(t, e[r]);
      }
      return this;
    }, a.prototype.listeners = function (t) {
      return d(this, t, !0);
    }, a.prototype.rawListeners = function (t) {
      return d(this, t, !1);
    }, a.listenerCount = function (t, e) {
      return "function" == typeof t.listenerCount ? t.listenerCount(e) : y.call(t, e);
    }, a.prototype.listenerCount = y, a.prototype.eventNames = function () {
      return this._eventsCount > 0 ? r(this._events) : [];
    };
  }, function (t, e, n) {
    "use strict";

    var r = /*#__PURE__*/_createClass(function r(t, e) {
      _classCallCheck(this, r);
      this.target = e, this.type = t;
    });
    var o = /*#__PURE__*/function (_r11) {
      _inherits(o, _r11);
      var _super12 = _createSuper(o);
      function o(t, e) {
        var _this18;
        _classCallCheck(this, o);
        _this18 = _super12.call(this, "message", e), _this18.data = t;
        return _this18;
      }
      return _createClass(o);
    }(r);
    var s = /*#__PURE__*/function (_r12) {
      _inherits(s, _r12);
      var _super13 = _createSuper(s);
      function s(t, e, n) {
        var _this19;
        _classCallCheck(this, s);
        _this19 = _super13.call(this, "close", n), _this19.wasClean = n._closeFrameReceived && n._closeFrameSent, _this19.reason = e, _this19.code = t;
        return _this19;
      }
      return _createClass(s);
    }(r);
    var i = /*#__PURE__*/function (_r13) {
      _inherits(i, _r13);
      var _super14 = _createSuper(i);
      function i(t) {
        _classCallCheck(this, i);
        return _super14.call(this, "open", t);
      }
      return _createClass(i);
    }(r);
    var a = /*#__PURE__*/function (_r14) {
      _inherits(a, _r14);
      var _super15 = _createSuper(a);
      function a(t, e) {
        var _this20;
        _classCallCheck(this, a);
        _this20 = _super15.call(this, "error", e), _this20.message = t.message, _this20.error = t;
        return _this20;
      }
      return _createClass(a);
    }(r);
    var c = {
      addEventListener: function addEventListener(t, e) {
        function n(t) {
          e.call(this, new o(t, this));
        }
        function r(t, n) {
          e.call(this, new s(t, n, this));
        }
        function c(t) {
          e.call(this, new a(t, this));
        }
        function h() {
          e.call(this, new i(this));
        }
        "function" == typeof e && ("message" === t ? (n._listener = e, this.on(t, n)) : "close" === t ? (r._listener = e, this.on(t, r)) : "error" === t ? (c._listener = e, this.on(t, c)) : "open" === t ? (h._listener = e, this.on(t, h)) : this.on(t, e));
      },
      removeEventListener: function removeEventListener(t, e) {
        var n = this.listeners(t);
        for (var r = 0; r < n.length; r++) {
          n[r] !== e && n[r]._listener !== e || this.removeListener(t, n[r]);
        }
      }
    };
    t.exports = c;
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.reconstructPacket = e.deconstructPacket = void 0;
    var r = n(16);
    e.deconstructPacket = function (t) {
      var e = [],
        n = t.data,
        o = t;
      return o.data = function t(e, n) {
        if (!e) return e;
        if (r.isBinary(e)) {
          var _t13 = {
            _placeholder: !0,
            num: n.length
          };
          return n.push(e), _t13;
        }
        if (Array.isArray(e)) {
          var _r15 = new Array(e.length);
          for (var _o6 = 0; _o6 < e.length; _o6++) {
            _r15[_o6] = t(e[_o6], n);
          }
          return _r15;
        }
        if ("object" == _typeof(e) && !(e instanceof Date)) {
          var _r16 = {};
          for (var _o7 in e) {
            e.hasOwnProperty(_o7) && (_r16[_o7] = t(e[_o7], n));
          }
          return _r16;
        }
        return e;
      }(n, e), o.attachments = e.length, {
        packet: o,
        buffers: e
      };
    }, e.reconstructPacket = function (t, e) {
      return t.data = function t(e, n) {
        if (!e) return e;
        if (e && e._placeholder) return n[e.num];
        if (Array.isArray(e)) for (var _r17 = 0; _r17 < e.length; _r17++) {
          e[_r17] = t(e[_r17], n);
        } else if ("object" == _typeof(e)) for (var _r18 in e) {
          e.hasOwnProperty(_r18) && (e[_r18] = t(e[_r18], n));
        }
        return e;
      }(t.data, e), t.attachments = void 0, t;
    };
  }, function (t, e) {
    function n(t) {
      t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
    }
    t.exports = n, n.prototype.duration = function () {
      var t = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var e = Math.random(),
          n = Math.floor(e * this.jitter * t);
        t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;
      }
      return 0 | Math.min(t, this.max);
    }, n.prototype.reset = function () {
      this.attempts = 0;
    }, n.prototype.setMin = function (t) {
      this.ms = t;
    }, n.prototype.setMax = function (t) {
      this.max = t;
    }, n.prototype.setJitter = function (t) {
      this.jitter = t;
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../../../Documents/HBuilderX.3.6.18.20230117/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/module.js */ 32)(module)))

/***/ }),
/* 32 */
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
/* 33 */
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
/* 34 */
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ 35);
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
/* 35 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 36);
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 36 */
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
/* 37 */
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
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
/* 38 */
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 33);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 39 */
/*!**********************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/config.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SERVER_PORT = exports.BASE_URL = void 0;
// config.js

var BASE_URL = 'http://129.12.211.74';
exports.BASE_URL = BASE_URL;
var SERVER_PORT = '30000';
exports.SERVER_PORT = SERVER_PORT;

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 63)();
module.exports = runtime;

/***/ }),
/* 63 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
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
/* 64 */
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
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/popup.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {};
  },
  created: function created() {
    this.popup = this.getParent();
  },
  methods: {
    /**
     * 获取父元素实例
     */
    getParent: function getParent() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uniPopup';
      var parent = this.$parent;
      var parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent) return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
exports.default = _default;

/***/ }),
/* 102 */
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/i18n/index.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 103));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 104));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 105));
var _default = {
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default
};
exports.default = _default;

/***/ }),
/* 103 */
/*!********************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/i18n/en.json ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"cancel\",\"uni-popup.ok\":\"ok\",\"uni-popup.placeholder\":\"pleace enter\",\"uni-popup.title\":\"Hint\",\"uni-popup.shareTitle\":\"Share to\"}");

/***/ }),
/* 104 */
/*!*************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hans.json ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"取消\",\"uni-popup.ok\":\"确定\",\"uni-popup.placeholder\":\"请输入\",\"uni-popup.title\":\"提示\",\"uni-popup.shareTitle\":\"分享到\"}");

/***/ }),
/* 105 */
/*!*************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hant.json ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"取消\",\"uni-popup.ok\":\"確定\",\"uni-popup.placeholder\":\"請輸入\",\"uni-popup.title\":\"提示\",\"uni-popup.shareTitle\":\"分享到\"}");

/***/ }),
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/static/cancel.png ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d13uCZFnbfx+wyTZxjSMOQgQVEkCIIBXbMgYCCJAaXNqCDmsKZlXdccwIDroiIGeDGLgoigAiKSJCNZlJzTDEw87x91nuUwTjinuruqw/25rr7GcA18u5/qqt/TT3UVSJIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZLUIEO5A0iqzGrAmsBEYBawynL+XJH7gCXAfGAe8ACwELh3qf9tUfXxJaVkASA115rA+sBGI39uCKwNrDHy/y3954SE2e4H7gTuAO4addw5ctwM/BO4ceS/S2oYCwApnzWALYEtRh0bA+sRBv1p+aJV6iHgH4Ri4EbghpH/fuXIcUe+aFJ/WQBI9ZoAbAZsB2xNGPAHg/5aGXM1yT3AVTxSEAz+898IPz9IqoEFgFSdWYTBfWtgx5FjO2BmzlAtthC4Gjh/5LgM+CvhpwZJJVkASHEmAdsDTxl1bJk1UT8MA9cCFwLnAmcB5wEP5wwltZEFgDQ2GwDP4JHBfgdgatZEGlhAeEJwFvCnkT9vy5pIagELAGnZ5gDPGXU8Nm8cjdM1wJnAqcDvgFvzxpGaxwJAClYHnk0Y7J9L+B3f+6MbhoFLCYXA74A/AnOzJpIawA5OffYEYI+RYxfCAjrqvgXA2cApwK8I8wmk3rEAUJ9MBJ4K7Am8FNgqbxw1xA3AyYRi4GRCgSB1ngWAum4mYcDfD9gVmJE3jhruHuAk4BfAbwgrHkqdZAGgLppBeKz/cmB3urOintKaT3gicCzwS8I+CFJnWACoK6YTBv39Rv6cnjeOOuZBwlOBY4Hf4gqF6gALALXZEGHyXkEY+Fe2013XPUh4ZD36mEf4Jjsw2O0Pwo5+Q4RdAifxyIqFM0f++wTCDoMQCqoZwGwsru4CfkwoBs7gkesptYoFgNpoY+C1wIGENfW76n7gJuD2UX/eOnIM/rf7CYP6vYTX3VKYRtjHYDZhd8LZo/77WiPH+sBjCAsorZIoVw7XA98GvkP4PKTWsABQW0wD9iEM+s8l7da3dVlE2BXvupHj+lH/+Trg7nzRKjOJULBtSigIlv5zvUy5qrYYOBE4auTPRXnjSCtnAaCm2xw4CHg9Yc/7NlpMGNAvBS4HLhn580p85Wwq4XXMbYFtCJsnbQuskzNUSTcDRwPfInzuUiNZAKiJJgC7AW8f+bNN3/bnAxcRNqo5l0cGezerGZ85hEJgcGxDWJ1xSs5Q47SEsNjQlwlvE6T6iUaSWmdN4L2EddyHW3AsIgzw3wbeCuwETK78qmhgEmEjpncBPwFuIX8bGOtxBaGNuA6FJI2yOfB1woz13B31ygb8c4DPExYXWr2Oi6Fx2YIwL+SbwGWEb92528mKjruBzxDmRUhSbz0Z+H+EgTV3x7y8Af/PwKcJCwqtWs9lUIXWJBRnXyD89JK7DS3vWAgcD+xcz2WQpGZ6BnACzfy2dgehY34t7Z10qEesS/gsj+eRVyWbdpwJvLiuCyBJuU0AXknYeS13hzv6WEzYGe5jhN/w2zThUOMzGXge8DnCGxm5296yCoEX1Xb2kpTYBMKa/JeRv4MdHAsIs7LfTJhtrn7amDAx7/eEQjB3uxwc5xPWvLAYldRKQ8DewMXk71CHCa/hnUBYNthH+1raesAhhKV9m1IMXEYonn1dW1IrDAEvAS4gfwe6kDDovwr3CdDYbUh41fDPNGOeyvmErawlqbGeT1j8JneHeQHwTny8r/I2Bd4H/JX87fr3wNNqPVtJGqetCLOsc3aONwOHAzvUfK7qr60Jr4TeRd62fgqwfc3nKkkrtB5hAZZc7/EvIuzRvjvd3nFOzTITeAPh7ZFcRcBi4LuE3RYlKZnpwAcI29Dm6PxuJXwT27Tm85RW5vGEtngHee6FucB/EHbLlKTaDBF25buZ9B3dEuA0YD/CmvBSk0wDXkOYOJijELge2Lf2s5TUS08CziJ9x/YQ8A3CPAOpDXYBfkqe1wl/T9hSWZJKWx34Cul/578DOAxn8qu9tiRscjWXtPfOIuBIYK36T1FSFw0R1lC/lbSd17XAoYR5BlIXrEZo0zeR9l66i7DapQsJSRqzbYDTSdtZnUdYOdDlT9VVU4E3AVeQ9t46hbBtsiQt1yTC7P75pOucLiRM7PNbivpiiNDmUxYCDxHeFphS/+lJapsnkXa1Mwd+9d0Ewj1wFenuuyuB56Q4OUnNNx34POkm+f0ZtzyVRptE+GngBtLcg4uBI3CejdRruwB/I02ncwXh246kZZtMmLR3I2nuyeuAf0tyZpIaYwbwNdLsdHYT4dvNxCRnJrXfNODdpFldcBFhJUPnBkg9sCNpvvU/SOhYVk1zWlLnrE64hx6m/vv1UkLfIKmDJgAfBBZQb0eygLBw0NppTkvqvK2AE6m/CFgAfASf1kmdshFhidC6O5DfE9YQkFS95xO+qdd9H58DbJbonCTVaB/q37/8RsKqgb7SJ9VrEmGiYN3zA+4D9k90TpIqNgM4mno7iYeBT478uySlszZhk6y6X9/9GmEFQ0ktsRX1Pyr8FS4vKuX2ZMKiWnXe6xcCj0t1QpLi7QXcS32dwW2Ex/2SmmEiYbOhB6nvvp838u+Q1ECTCbPv6/wmcDSwZqLzkTQ+jwX+QL19wFG4ZoDUKBsBZ1HfTX89sGuys5EUa7CNd50Tf88HNkl1QpKW70XAndRzoy8CvoST/KS2WR/4KfUVAbcCz0x2NpL+xXupbxbwNcDT052KpBrsQ5i3U0cfsQA4ON2pSILwG9y3qa+6PwaYmexsJNVpDnAC9fUXP8CdBaUk1gHOpJ4b+RZgj3SnIimRIeAQ4CHq6TvOJfzsIKkm2xIm5NVxA/8EmJ3uVCRl8Hjgr9TTh9wE7JDuVKT+2At4gOpv2geAIt1pSMpsKmFybx3bgd9PmJgsqSLvBxZT/c16MWHVQEn9sytwM9X3KwuBtyU8D6mTJgCHU8/juqOAaelORVIDrU19EwS/SOjDJI3TFOB46nnkf0DC85DUbEPAR6jnKePPcR0RaVxWp54lPS8HnpjuNCS1yHOoZ82Av+AEY2lMNgQuofqb8Hv4yF/Sij2Get4SuARfE5RW6AnADVR74y0CPpDyJCS12lTgW1RfBFwPbJnwPKTW2IHq1/S/C3hBypOQ1BlvBuZTbZ90K7B9ypOQmm4nqt+962/A41KehKTOeTLVP5W8BzcSkgB4NtUv8PMTXMtfUjXWJ2wBXGUfNQ/YPeVJSE2zK+FGqPLG+gThtR5JqspM4FdU21c9DOyZ8iSkptiDajfmWAgclPQMJPXJKsBXqLYImA+8LOVJSLntR9hLu6qb6AF8nCYpjUOpdtGgBVgEqCf2I7yaV9XN80/CLoGSlMo+VPvz5XzChmdSZ+1G+N2rqpvmYmCjpGcgScFTCK/1VdWfLQJemfQMpER2pdrB/3fAqknPQJIebXPCK8dV/hzgkwB1yjOAB6nuJvklLusrqRnWBM6h2p8DXpT0DKSaPA24n+puju8Dk5KegSSt2OrAn6iun5tL+OIktdb2wN1Ud1N8DffXltRMM4BTqK6/uxd4UtIzkCqyNdUu73tY2viSNG7TgBOprt+7Bdgi6RlIJW0I/INqboAlwLvSxpekaJOBH1NdEXA9oU+VGm91wt7XVQ3+70gbX5JKmwgcQ3VFwOXAWknPQBqnyYTX86pq9B9IG1+SKjMEHE51/eEZwNSkZyCN0QTgeKpr7D72l9R2Q8CRVNcvHoebnamBvkR1jfyDibNLUl2GgKOorn/8dNr40oq9n+oa93sTZ5ekuk2k2omBb0kbX1q2vahuZ6x/T5xdklKZDPyaavrKhbhaoDLbjrAVbxUN+vOJs0tSatOA06imz3wAFwpSJrOBa6mmIR+DE1sk9cN04HSq6TtvAtZPG199Nwn4A9U04F8Qfh+TpL5YDTiPavrQPxF+XpCS+A7VNNzf43utkvppbarbSvjIxNnVU++jmgZ7IWHVQEnqq8cAt1JNn+qbAarVbsAiyjfU64A5ibNLUhM9FZhH+X51Pm4hrJpsBNxB+UZ6H7BN4uyS1GT7UM3r1LcS+mqpMpOBv1C+cS4Anpc4uyS1wXuo5qeAc4ApibOrw75KNQ3zoNTBJalFvkI1fe3hqYOrm/anmgb5qdTBJallVgF+TjV97j6Js6tjHkv4zb5sQ/wxYbdASdKKTaean1zvATZLnF0dMQO4lPKN8HzC8peSpLFZn7DKX9n+91ycD6AIR1O+8d0BbJI4tyR1wS6EidNl++EjUgdXu+1D+Ua3CNg1dXBJ6pCDKd8XD+N8AI3RRsDdlG9w70kdXJI66BjK98f34PoAWokJwKmUb2w/TB1ckjpqKtVsHHQ6TsbWCnyI8o3sIsIEQklSNTahmpVY35U6uNphR8Ja0mUa17342okk1WF3yi8X/BCwdergarbpVLMt5StTB5ekHvkY5fvpvxKWd5cA+BrlG9U3kqeWpH6ZAPya8v31f6cOrmZ6FrCEco3pUsJTBElSvdYGbqZcn72Y0Perx6YDV1H+N6VtUweXpB57IeW/uF2Fq7T22hco/yjp9clTS5IOp3z/7SZtPfUUwmp9ZRqP7/tLUh5TgYsp14cvBLZPHVx5TaH8Rj83AmukDi5J+j9bA/Mo15dfCExKHVz5/BflGswSYLfkqSVJSzuU8j8FvDd5amWxDeV3mPp68tSSpGUZAk6iXJ8+F9g8dXClNQT8nnIN5TpgZurgkqTlmgPcSrm+/feEMUId9VrKNZDFwDOSp5Ykrcy+lP8p4IDkqZXELMovHvGZ5KklSWP1U8r18bcAqyVPrdp9hXIN43LCayeSpGbagLApW5m+/nPJU6tW2xDe94xtEEuA5yZPLUkar4MoVwAsALZKnlq1GALOolyD+N/kqSVJMYaAUynX55+SPLVq8TrKNYTbgDWTp5YkxXocYZ+WMn3/3slTq1IzKT/x71XJU0uSyvow5fr+G4AZyVOrMh+nXAM4OX1kSVIFJgEXUW4M+Gjy1KrEesADxH/w83BlKElqs50ot+nb/YRFhtQy36Rc5feR9JElSRX7H8qNBV9NH1llPJ5yr/3dAExPnlqSVLW1gXuIHw8WAFsmT61oZTeG2Cd9ZElSTd5NuTHh+PSRFeM5lPugT0sfWZJUo0nA34gfF5YAT0+eWuP2F+I/5EXAdukjS5Jqtiflvhyenj6yxuMllPuAj0wfWZKUyG8oN0bskT6yxmIIOJf4D/ZuYHby1JKkVB5PmNQXO06cTxhr1DB7U66ye2/6yJKkxA6n3FixZ/rIWpEJwMXEf6D/BKYlTy1JSm1N4E7ix4tz8SlAo+xPuYrujekjS5IyeR/OBeiEst/+rwImJk8tScplGnAT8ePGefgUoBFeSblKbv/0kSVJmb0DnwK03gXEf4AXEp4gSJL6ZQrwD3wK0Fq7Uq6C2y19ZElSQxxEuTHkBekja+BU4j+4MzLklSQ1x2TgOuLHkZPTRxbAkylXue2aPrIkqWFeT7mxZPv0kXU88R/YBfjbjSQJVqHcRkHfTR+53zYjbNwT+4HtlT6yJKmhXk38eLIA2Ch95P76OvEf1qU481+S9IhVgCuJH1c+mz5yP60JzCP+g3pV+siSpIYr80bAvcCs9JH7573Ef0hXEyo9SZJGmwbcTvz48u70kftlAnAN8R+Qa/5LkpbnP4gfX67Bn5drtQfxH87twNT0kSVJLbE25X5ifmH6yP1xIvEfzGEZ8kqS2uVI4seZn2XI2wubA4uJ+1AWABukjyxJapktiR9rFgGbpI8cp02/V7yV+LzHEbZ+lCRpRa4Gfhn5d1chrCyoCk0D7iL+scyT00eWJLXUM4gfb24CJqWP3F0HEP9hnJkhrySp3c4mftzZN0PezjqF+A9ivwx5lcdk3ONB9RkitDH1w4HEjzunZMjbSRsTPyHjRmBi+shKaAvCrN0bCJ/5EuAK4NPAuhlzqRvWAz5D2Cxmycjxd8Jy5Jvni6UEpgP3EDf2LMb9ASrxUeKrsE9kyKt0Dia84bG8z/9e3PhJ8fYG7mP57WsB8LZs6ZTC14gffz6UIW/nxG7TuAQr9C47mLG3g7dkyqj2Khj7k8e354moBLYlvgC4MkPeTnkm8Rf/txnyKo0tWPE3/2U9jityBFUrFYzvZ8f5hC3K1U3nEj8O7ZQhb2ccRfyFf3mGvEojZqUuiwCNRUHcnKOvZsiqNN5M/Dh0RIa8nTCdFf/+tqLjDpyt22X/IK5dWARoRQriJxxfnz6uElkVeADHoqReTnzV9fkMeZXGJOI7aYsALU9B+XblG0fdVeZp9Msy5G2944m/4I/PkFdpTCCstx3bNoZxYqAeraDc4D8MLMQ1KLpsZ+Lbxo8z5G21GcBc4i72uRnyKq3YN0N8EqClFZQf/IeByxPnVnoXE9c25hLGtMZp6mZAexLmAMT4YZVB1Eg/r+CfMQH4FhYBfVYQ2kAV/eAvKvhnqNmOjfx704HdqwzSdT8m/lud2/5237qERX7KfmvzSUB/FVTzzX+Y0BbXSZpeOWxG+Pkwpo0clyFvK80AHiTuIp+WIa/y2IvqOnCLgH4pqLbtuNpkf8SuCTCX+KfavfJK4m/GN2XIq3xeQfkJgYPDiYH9UFDt4H9g0vTK7b3EtxcLxTH4CXEXdz6wVoa8yssiQGNV4OCvcjYm/meA72fI2ypTiF9w4ZcZ8qoZLAK0MgUO/qrGWcS1m/uBqRnytsauxN+Ur86QV81hEaDlKXDwV3UOJb79+DbACnyFuIu6AFgjQ141i0WAllbg4K9qrUd8m3LPiBW4hriL6s5/GrAI0ECBg7/qcTpx7ei6HGHb4AnE35wHZ8ir5rIIUIGDv+pzMPHt6XEZ8jbe+4m/oJumj6uGswjorwIHf9VrU+Lb1DvTx22+PxJ3Mc/PEVatYBHQPwUO/krjCuLa1ck5wjbZ6oTdtGIu5scz5FV7WAT0R4GDv9L5InFt62EaujlQLnsRf6NulyGv2sUioPsKHPyV1guIb2N7ZsjbWEcQdxH/mSOsWskioLsKHPyV3hTi9635Woa8jXUpcRfxOznCqrUsArqnwMFf+fyKuLZ2WY6wTTSH+LWVXf1P42UR0B0FDv7K6+3E9x1uIQ3sT/wFXC9DXrWfRUD7FTj4K7/HEN/u9s2Qt3G+QdzFuzhHWHWGRUB7FTj4qzmuJK7tfSVH2KaJvXhfzBFWnWIR0D4FDv5qli8T1/4uyRG2STYk/uZ1VyVVwSKgPQoc/NU8LyW+v5idIW9jvIK4CzcfmJkhr7rJIqD5Chz81UyziZ/IvneGvI0Ru5LSWTnCqtMsApqrwMFfzRa7LPDhOcI2xVnEXbTP5QirzrMIaJ4CB38131HEtclzcoRtgknAPOIu2ssy5FU/WAQ0R4GDv9rhdcS1y/mEFQV7Z2fib+Z1M+RVf1gE5Ffg4K/2eCzx7fPJGfJmdwhxF+vqHGHVOxYB+RQ4+Kt9biGujb4tR9jcvk/cxTo6Q1b1k0VAegUO/mqnnxLXTr+TI2xu1xB3sd6cI6x6yyIgnQIHf7XXe4hrq5fmCJvT6sS/N7lNhrzqN4uA+hU4+Kvdnkpce10ErJohbzbPJO5CzQVWyZBXsgioT4GDv9pvMvAwce32WRnyZhO7heLZOcJKIywCqlfg4K/uuJC4tvvOHGFz+SZxF+nIHGGlUSwCqlPg4K9uOYa49vu/OcLmcjZxF6nPnaWawyKgvAIHf3XP+4hrw3/OETaHCcADxF2knTPklZbFIiBegYO/umlX4trx/cBQhrzJxa6YtAiYniGvtDwWAeNX4OCv7lqP+Pa8cYa8ye1L3MW5LEdYaSUsAsauwMFf3XcbcW169xxhU/sYcRfnhznCSmNgEbByBQ7+6offEdeu358jbGrfI+7ifCRHWGmMLAKWr8DBX/3xReLa9ndzhE3tz8RdnJfnCCuNg0XAvypw8Fe/xG4NfF6OsKndRdzF2S5HWGmcLAIeUeDgr/7Zkbg2fk+OsCmtQXxH6BsAaguLAAd/9dcM4tv6GhnyJrMzcRflhhxhpRL6XAQUOPir324nrr3vkCNsKq8m7qL8NkdYqaQ+FgEFDv7SX4hr8/vmCJvKx4m7KF/JEVaqQJ+KgAIHfwngOOLafadfBYzdKOEdOcJKFelDEVDg4C8NfIq4tt/pDe/+QNxFeWmGrFKVulwEFDj4S6O9hbj2/5scYVO5mriL0umJEeqNLhYBBQ7+0tJeSNw9cFWOsKnMJe6izMkRVqpBl4qAAgd/aVm2JO4+eChH2BTWJP6C9GKbRPVGF4qAAgd/aXkmE39/dHItgG2JuxhX5wgr1azNRUCBg7+0Mv8k7p54fI6wdduNuItxWo6wUgJtLAIKHPylsTiduPviOTnC1u1NxF2MXuyQpN5qUxFQ4OAvjdX/I+7eeFWqgBNS/YuA9SP/3k2VppCa5TjgAMKAWNYQ4T3iOoqAAvgW1fQZS4DXY3Gvbrsz8u+tU2mKFUhZAMTO5L+j0hRS8zS9CChw8JfGK7YAWLfSFA3xQ+Ieh7wmR1gpgyb+HFDgY38pxjvwZ+//cxJxF2P3HGGlTJpUBBQ4+EuxXkXcvXJyjrB1O4e4i7FTjrBSRk0oAgoc/KUydiXufvlLjrB1i10G+DE5wkqZ5SwCChz8pbJ2JO6e+VuOsHW7i7iLsWqOsFID5CgCChz8pSpsQtx9c3OOsHWaQFxHNh+XAVa/pSwCChz8parMJO7emZsjbJ1WJ+5C3JojrNQwKYqAAgd/qWoPEXcPTcwRti6bEHcRrs0RVmqgOouAAgd/qQ6x+wGslSNsXbYi7iJcnCOs1FB1FAEFDv5SXa4k7l7aNEPW2mxP3EU4O0dYqcGqLgKWVPTPcvCX/tXFxN1P26UIl+p3hmmRf++hSlNI7XfcyJ/fB1Yp+c+qaoKty/tKy/Zw5N+bWWmK5Ui1F0BsAdC52ZBSBarcO6AsB39p+RZE/r1JlaZYjlQFwNTIv2cBIC1bE4oAB39pxeZH/r1OFQCxTwDmVZpC6pacRYCDv7RyFgDEPwGIvXhSX+QoAhz8pbGJnQNgAUCYDSlpxVIWAQ7+0tg5B4D42cYWANLYpCgCHPyl8fEnAOIHcgsAaezqLAIc/KXxa3QBkGodAAsAKY3BOgE/oLoCfxgHfylGowsAnwBI3TOV6nfRjJ3HI/VZ7BiWZBdcCwCpWwrgW1TbgQwBR7LirYQl/avYb/KLKk2xHE0vACSNXUEY/Ou4ry0CpPGzACC+ACi71rnUFwX1Df4DFgHS+MTOs0uyrkeqAiDWlNwBpBYoqH/wH7AIkMZucuTf69QTgNjFEGKXEJb6oiDd4D9gESCNTewTgE4VALFr+jvzWFq+gvSD/4BFgLRysU8AkiyD3/QCwCcA0rIV5Bv8BywCpBWLnQSYZCO8VJ1H7La+FgDSvyrIP/gPWARIyxc7j+2hSlMsR9OfAPgTgPRoBdUN/sOEJX7LsgiQlm21yL8X+6W5kbYkdDbjPf6aI6zUUAXh9aCYe2npYzFwIPAKwoSjKv6ZS7AIkEa7krh7afMcYeuyPnEX4docYaUGKqh+8B+wCJDqcQtx99F6OcLWZXXiLsLdOcJKDVNQ3+A/YBEgVW8ecfdQp+a/TSJ0CjGdlasBqs8K6h/8BywCpOpMIu7e6dTv/wP3EXcx1swRVmqAgnSD/4BFgFSNtYi7b/6eIWvtriXuYmyRI6yUWUH6wX/AIkAqbzPi7pnzcoSt21+Iuxg75wgrZVSQb/AfsAiQytmBuPvltznC1u3XxF2M3XKElTIpyD/4D1gESPH2IO5e+UGOsHU7hriL8cocYaUMCpoz+A9YBEhxXk/cffKVVAFTLiV6Z+TfW7fSFFIzFVS3wt8SQufz3Qr+WccBB1DN/uSuGKg+iX2X/45KU6xAygLgrsi/t0GlKaTmKWjm4D9gESCNX+yX19ixstHeQtzjkGNzhJUSKWjeY//l8ecAaeyOJ+7eeEWOsHV7MXEX4/QcYaUECtoz+A9YBEhjcwZx98XzcoSt25OIuxjuB6AuKmjf4D9gESCt3NXE3RPb5Qhbt9nEXYyHCL8bSl1R0N7Bf8AiQFqxB4m7H9bIETaFucRdkNk5wko1KGj/4D9gESAt2zrE3Qf35gibSuzeyNvnCCtVrKA7g/+ARYD0r55K3D1wQY6wqfyOuIuyd46wUoUKujf4D1gESI/2KuLa/09yhE3lO8RdlPfnCCtVpKC7g/+ARYD0iI8Q1/Y/nyNsKv9J3EX5Zo6wUgUKuj/4D1gESMG3iGv3B+cIm0rs2si/zxFWKqmgP4P/gEWABKcR1+b3zBE2lWcSd1FuzBFWKqGgf4P/gEWA+u7vxLX3J2TImswc4juB6RnySjEK+jv4D1gEqK+mEtf2lwAzMuRN6i7iOoFtcoSVxqnAwX/AIkB9tD1xbfzWHGFT+zNxF2ffHGGlcShw8F+aRYD65tXEte+zc4RN7bvEXZzDcoSVxqjAwX95LALUJ58irm0fkyNsah8m7uL8LEdYaQwKHPxXxiJAfXECce36PTnCprYvcRfHXQHVRAUO/mNlEaA+uI64Nv3CHGFT24b4G37VDHml5Slw8B8viwB12UxCu4xpz+tlyJvcJMIWvzEX6OkZ8krLUuDgH8siQF31FOLa8e05wuZyPnEX6aAcYaWlFDj4l2URoC56I3Ft+Hc5wuYSu07y13OElUYpcPCvikWAuuabxLXfL+QIm8shxF2kP+cIK40ocPCvmkWAuuQC4tru63KEzSV2T4CHgSkZ8koFDv51sQhQF0wDFhDXbnfMkDebWcR3pjtnyKt+K3Dwr5tFgNru6cS110WE4qFXribuYr0jR1j1VoGDfyoWAWqzQ4lrq5fnCJvbj4i7WD/IEVa9P+9cfgAAFddJREFUVODgn5pFgNrqe8S102NzhM3t/cRdrGtyhFXvFDj452IRoDa6irg2enCOsLntQvwNvXaGvOqPAgf/3CwC1CaziV8BcIcMebObSpjVH3PB9syQV/1Q4ODfFBYBaou9iWuX9wMTM+RthLOIu2ifzhFWnVfg4N80FgFqg8OJa5O/zRG2KT5H3EU7J0dYdVqBg39TWQSo6S4irj1+PEfYptiLuIu2CFg9Q151U4GDf9NZBKip1iS+/3h+hryNMYf4m/glGfKqewoc/NvCIkBN9DLiv8j2fov7a4i7eF/KEVadUuDg3zYWAWqaLxHX/s7PEbZpvkPcxbsoR1h1RoGDf1tZBKhJYjcAOiJH2KY5gPgb1/UAFKPAwb/tLALUBGsT35e8PEPexlmX+AUUvIAarwIH/66wCFBuryG+zW2QIW8jXULcBTw6Q1a1V4GDf9dYBCinY4lra5fkCNtUXyTuIt4OTMiQV+1T4ODfVRYBymEV4E7i2tlnM+RtrN2Jv2GfkiGv2qXAwb/rLAKU2tOJb2PPzZC3sWYQvy/Af2bIq/YocPDvC4sApfQJ4trWg8CUDHkb7Y/EXcwLcoRVKxQ4+PeNRYBSOY+4dvXzHGGb7iPE36TOptTSChz8+8oiQHVbl/j+5aAMeRtvO+Jv0jdlyKvmKnDw7zuLANXpbcS3p00y5G2F64m7oL/OEVaNVODgr8AiQHU5lbh2dFmOsG0Ru6fyAsKOTOq3Agd/PZpFgKo2G1hIXBv6fIa8rfFc4m/O12fIq+YocPDXslkEqEpvJr799Hr735WZBNxN3IU9KUNeNUOBg79WzCJAVfkNce3mfnz9b6W+T9zFXQCslSGv8ipw8NfYWASorDWA+cS1me9lyNs6Lyf+pnxDhrzKp8DBX+NjEaAyXk98e3lxhrytM4v4VQFPzpBXeexHtYN/kTS9ciqotu3slzS9cjqZuHZyDz7+H7NfEHeRFxL2Z1a3bQnMxcFf8QqqKwLmApsnTa8cNiD+6dHR6eO21yuIvxkPzZBXaR2Dg7/KK6iuCDg6aXLl8AHi28duGfK21nTgAeIutHsDdNsUwmxaB39VoaCaIuA+YHLa6ErsYuLaxt3YNsYt9m2AYcKywuqmx1HN4H9g6uBqrKomBm6ROriS2ZH4dvHNDHlbbw/iL/gXM+RVGtvjN39Vr6D8kwC/eHRX7Cq1w7j4T5RJwB3EXfDbRv6+umcODv6qR0F8EbCEsESsumcicCtx7eL2kb+vCN8gvrN/aYa8SuNCHPxVj4K4IsC5R931UuLHoSMz5O2MZxF/4X+WIa/SeB3jH/wPzJJUbRQzJ+A1WZIqhZOIH4eekSFvZ0wAriPuwi8kvLep7lmFsd+UfvNXjIKxPwk4kdBXqXs2J/5nocsz5O2cjxBffR2WIa/SmAWcwIo//weBfXMFVOvtx8oXnDqB0BbVTZ8lfvx5V4a8nbMe8Xsv34LvX3bZEOFx7dmESViDz/0+wsIsm2VLpq7YnNCW7uPRT5XOBvYntEF10xTCJL6YsWc+rkpbmZV901vR8YoMeZXeGsC2wGPxDRBVbxKhbW1LaGvqvtcQP+4clyFvZ5WZhXlGhrySpHY7i/hx53kZ8nbWROAm4j8MF+iQJI3VdsSPN9fSkp+G2jJzdRHlNtt4W0U5JEndV2YC31GEQkAV2oz41zEeBNZKH1mS1DLrEybxxYw1CwkT11WDMgsyfCxDXklSu3yK+HHm5xny9sZuxH8wtxO2GZYkaVlmErbvjR1ndk8fuT+GCKsrxX44b08fWZLUEu8kfnz5G+2ZV9dabyX+A7oOd2aSJP2rVQgz+GPHlzelj9w/Myj3iGb/9JElSQ23P/Hjym3A1PSR++kzxH9QF9KSdzQlSUkMEbfN+OD4aPrI/bUx8fsDDAMvTB9ZktRQexE/nswFZqeP3G/HE/+BnZUhrySpeYaA84gfT76aPrKeQvwHNgy8KH1kSVLDvIz4cWQRsEX6yAI4hfgP7jycCyBJfTYEnEv8OPLj9JE18GzKPQV4cfLEkqSmKPPtfxh4WvrIGu1M4j+8C/ApgCT10RBhDIgdP85MH1lL251yFdxe6SNLkjJ7OeXGDt8ma4Ah4HziP8SLcflGSeqTScDVxI8bZ6SPrOXZh3KV3OvSR5YkZXII5caM56SPrOWZAFxG/Id5I+4UKEl9sCph6d7Y8eLU9JG1MmV/z3EpR0nqvk9Qbqz4t/SRtTJDwF+I/1AfANZLnlqSlMoc4H7ix4kT00fWWO1KucruG+kjS5IS+Qbx48MSYKf0kTUepxL/AS8Cnpg+siSpZk+k3CZyP08fWeP1NMo9BfARjyR1yxBwOuW+/W+XPLWi/JxyRcDL0keWJNXk1ZQbE45PH1mxnkh4nB/7Yd8AzEieWpJUtVUJr3rHjgfzgS2Tp1Yp36VcxffJ9JElSRX7LOXGgk+nj6yyNiC82lem6ntc8tSSpKpsCTxM/DhwKzAreWpV4sOUq/xOTh9ZklSR31JuDHCZ+BabQrkNH4aBfZOnliSV9RrK9f0X4EZxrVd2o6B/AqslTy1JijUbuIP4fn8JsEvy1KpF2cdA30wfWZIU6fuU6/N/mD6y6rI15VaAWgK8MHlqSdJ47Ua5wX8esEny1KrVkZRrFH8HZqYOLUkas+nAtZTr6z+ePLVqtxZwO+UaxhHJU0uSxurLlOvjrycUEeqgAyjXOBYDz0ieWpK0MrtQbgXYYcLPB+qwshMCrwSmJU8tSVqeVSn/6P97yVMruU2BBynXUA5PHVqStFxHUa5PvxOYkzy1svh3yjWWJcAeyVNLkpb2Esr158OEn4fVExOBCynXYG4D1kkdXJL0f9YmrNdfpi8/KXlqZfcUwqS+Mg3nRGAodXBJEgC/pFwfPhfYLHlqNcIRlH90dFDy1JKkN1G+/35n8tRqjOmEWf1lK8itUgeXpB7bmtD3lum7zwFWSR1czfI0yr87ej5h50FJUr1mAJdTrs+eD2ybOria6VOUf5R0ZPLUktQ/36V8f/2B5KnVWFOAiyjfqA5MHVySeuQNlO+n/4iP/rWU7QiPhco0rHnA9qmDS1IPVPG7/z3AxqmDqx0+Svnq8ipgVurgktRhM4DLKN8/7586uNpjInAW5RvZcamDS1JHDRH61LL98rdTB1f7bALcTfnGdkjq4JLUQR+kfH98NTAzdXC1096Ub3ALgOemDi5JHfJCyr+mvRB4aurgarevUb4IuAvYInVwSeqAxxIm7ZXthz+cOrjabyrlNwwaJkxccVKgJI3dLMov9jOMr/yphC2B+ynfCH+DjVCSxmIC5Tf5GSbsErhB4uzqmAMp3xCHgc+nDi5JLfQZyve3C4Bnpg6ubjqKaoqAInFuSWqTg6imrz00dXB11xTgbMo3yvn4ZoAkLcsehBn7ZfvZH6QOru5bD7iJ8o3zPlwuWJJG2wF4gPL968WEVQOlyj2d8vsFDBMKiU3TRpekRtoA+Cfl+9V78LVr1ewQqvmN6mpg7cTZJalJZlHNTqxLgL0SZ1dPHU01RcCZwLS00SWpEaYBf6CavvSwtNHVZ1OBc6mm4f4M1wiQ1C+TgF9RTR96AmHtACmZ9YF/UE0DPoqw45Ukdd0E4IdU03degJv8KJOtgXuppiF/NXF2SUptCPgG1fSZNwIbpo0vPdpuVPPu6jDwpcTZJSmlT1NNX3k/sF3i7NIyvY1qGvUwTmaR1E0fopo+cgFhm2CpMb5IdUXAhxJnl6Q6vYfq+se3Js4urdQEwoz+qhr5+9LGl6RavJfq+sVPJs4ujdl04CyqaehLcEMLSe32Qaob/I/Ft6XUcGsQ1qOuqtF/MG18SarEv1NdP3g6YVM2qfHmAFdSXeP/dNr4klTK+6mu/7sQWDNtfKmcLYBbqO4m+Bw+/pLUfIdRXb93Ge6ZopbaBrib6m6GI3HJS0nNNES1b0NdQ1hxVWqtZwLzqO6mOAr3DpDULJOobnnfYcIy65umPAGpLrsDD1PdzfEz3EVQUjNMB06kuv7tVuCxSc9AqtluVFsEnI2/jUnKa3XgDKrr1+4BnpT0DKREXgLMp7qb5XJgk6RnIEnB+lT7yvN9wE5Jz0BK7KVUWwTchJtiSEprW6rbDn0YmEuYLyV1XtVzAh4Adk16BpL66oVUtw36oP96btIzkDLbm7CrVVU30XzgdUnPQFLfvJXqtj8fBu7Cx/7qqb2o9knAMPAFfE1QUrUmEPqWKvuqWwlrpUi99XzgQaq9sU4EVkt5EpI6azrV7nQ6TJg/4Kt+EuER2J1Ue4NdBWyV8iQkdc7GwLlU2zddD2ye8iSkpnsCYUZ/lTfaXcDzUp6EpM54NnA71fZJVwAbJDwHqTW2IFTHVd5wC4F3pjwJSa02BHwIWES1fdEFuHiZtEIbEhb4qfLGGwaOB2YlPA9J7bMq8BOq739OJ6waKGkl1qLa5TUHx5U461bSsj2OsP1u1f3OscCUhOchtd4U4AdUfzM+BLwx4XlIar59qXZxn8FxOG5hLkUZAv6D6m/KYeAY3FFQ6rtphEG66v5lIXBQwvOQOustVLv61uC4AF8VlPpqW8Ks/Kr7lfsIywVLqsgLCDdWHT8JHEp42iCpH15L2ICn6v7kJtzOV6rFk6h2B67Rxy+BOelORVIGawI/op4+5ALCFsGSarIO9bwhMAzcArwo3alISmgP4Gbq6TtOAGamOxWpvyYDR1LPjbwEOAInCEpdMQs4inr6i8XAYTjTX0ruzYRtgOu4sa8FnpPuVCTVYBfgaurpI+4j7GgqKZOnEx7d1/U04H8Iq4NJao9pwKcJ39Dr6BuuwDeIpEbYEDiHem70YcL+BC9IdjaSynge9X3rHyYsUDYj2dlIWqlJhIp/CfXd+McTZhFLap41CE/s6uoDFgIfSHY2ksZtH+pZ0nNw3ATsn+xsJK3MEHAgcAf13fe3AM9MdUKS4m0GnEt9ncEw8Dv8DVDKbUvgVOq910/H9/ulVplCeJ2vzo5hPvAp/D1QSm06YZ+Qh6jv/l4AfBhYJc0pSaraPsA91FsI/GPk3yOpXkPAK6hvRdDBcTWwc6JzklSjjaj/MeEwcDLwxETnJPXNDtS3Cujo49u4qp/UKUOEhYPq2ABk9LGYsNXwemlOS+q8tQhb9i6i3nv3XuBVic5JUgZbEzbtqPtbxAPAx3B+gBRrOvBB6tkFdOnjNMJ6IpI6biJhAlHd3yiGCa8NvhknEkljNYlwz9xE/ffnQkJf4P0p9cwuwFXU38kMA5cAexN+ipD0ryYQHsFfQ5p78i/AtknOTFIjTSV8A6hrU6FlFQL7YSEgjfZ80vw0N0yYB/QB/NYvacT2wHmk6YCGR/5deyY5M6mZhoA9gLNId9+dBGya4NwktcxE4H3U/6bA0o8hX4RPBNQfE4B9SfeNf5iwTPABKU5OUrs9Bvgt6TqnYeAi4LWEIkTqogmEn78uJ+29dTywdoLzk9QRQ4RvDDeTtrO6HjgEXx9Ud0wD3gJcR/p7abcE5yepo2YQJgk+TNrO617C4icuKKS2Wpdw79S5S9+yjnmErcFXrf0MJfXCVqT/WWDQmR0FPKn+U5QqsRPwA8JmOinvlSXAsYSlvyWpcnsTHi2mLgSGCbOlX03Y6VBqkomE3/fPJM+9cR5hXQ9JqtU04KPA/eTp7G4DPglsXPeJSiuxGfBfpFm1b1nHLcDrCBMMJSmZOcBXSf+oc3AsAk4gbEU8ueZzlQamELbk/R1h86scbf9h/J1fUgNsSXjVaAl5OsNh4E7gCMKWqVIdngh8mdDWcrXzJYR7bfOaz1WSxuUpwB/I1zkOjouAdxGeUEhlbERYHOuv5G3TS4BfANvVe7qSVM4epF1WeHnHIuAU4E3A7FrPWF0yG3grcDr5HvGPPk4ivFkgSa0wRFjr/1zyd6DDhG1Pfwu8EVirxvNWO61JWIny14S2kru9DgOn4sx+SS23J3AO+TvU0cXAyYRveb5J0F+bAe8ETqM5g/4w4VXC59R43pKU3B40qxAYHBcB/w08HbdI7bIhwqP0/wIuJn+7W9bAv2ttZy9JDfACwjfwnG8NLO+4A/ge8EpgnbougJLZACiA7wO3kr99LX0sBn4CPK2m85ekRtoW+B/gIfJ3xMs7rh3JuB/OHWiDGcDzCe/In0czi8xhwnv8xxCW2Jak3toQ+CxhA6DcHfPKvq2dD3weeAk+IWiCDQjF2ZeAs2nWb/nLOm4jrKLpWymSNMos4N3ANeTvqMd6XA/8EDgUeCruU1CnSYSFng4mbLbzd/J//mM9riC8jjq16osixRrKHUBahgmEeQIHAS+mXRPz5hMWjblo5Lhk5LgvZ6gWWpWw6M32I8eTCCvxtWnJ50WE1wq/CfyG8HOE1BgWAGq6DYE3A28A1s+cpYy/E2aeXzLy59WEJx0PZMzUBLOAx44cW40c2wNb0N7+6TrgW8B3CJv1SI3U1htM/TMJeCnwFuC5dGf3s9sIxcCgILiGMIDcxCOz1ttsArAuYb2FjYBNCHtHDAb8dfNFq9R84OfAUYR1Bfy2r8azAFAbbQQcALwGeHzmLHVaSCgQ/kH4JnnTyHEbcPcyjoWJcg0R3ohY1jGH8KRmE8LntAGheOuqKwiD/jGETYKk1rAAUNvtTCgEXomv6T1IKATuJ3wjfYjwutngz8F/XpnVCIP2LGAaYeLa6P9tdfrdd9xBeHf/B4TFe6RW6vNNrG6ZDOxOeDLwImB63jjqmLuBnxK24j2N8Eqo1GoWAOqiaYTFYPYjzBuYlTeOWuo+4JfAjwgrVy7IG0eqlgWAum4q4ZXC/QiL96yWN44a7iHCLnw/An4MzMsbR6qPBYD6ZArwPMKmRLsRdoOTrgBOGjnOIMyfkDrPAkB9thnhp4IXj/zpKm39MA84C/gV4dW9G/LGkfKwAJCCGYT1BXYDng08IWsaVe1Swmp8JxFm7vt7vnrPAkBatjnAs0YdW+P90haLCastnkn4pn8GYf0ESaPYoUljMxv4N0Ix8FTCcrVtWpe+yx4k7AT4p5HjbFxiWVopCwApzmTCZjU7jTq2ol0bF7XRYsKyyRcSvt3/ibDpku/lS+NkASBVZyawI2HL2icA24z8uWrOUC12J4/sqHjxyHE5Y1vNUNJKWABI9duUUAg8kTCXYGtgc8KSugp7G/wduIow2A8GfXfSk2pkASDlswbhVcTHLOPPjejOa4n3AtcTBvnRfw4OF9uRMrAAkJprDcJ2uesQdtWbA6w38r/NIWx+NGvUkWr/g3nAXYRH9HeM+s93jTruJHyz/ydwT6JcksbBAkDqjlUIhcAaI3+uSlj9EGACj14GeQaPfovhfh49ke4BYBFh8F408t8fInyb9zd4SZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkVev/Azvy1tMkRB4VAAAAAElFTkSuQmCC"

/***/ }),
/* 119 */,
/* 120 */,
/* 121 */
/*!*********************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/lz-indexed-list/components/lz-indexed-list/pinyinUtil.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pinyin_dict_notone = exports.pinyinUtil = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _polyphone;
var dict = {};

//拼音首字母字典文件
var pinyin_dict_firstletter = {
  all: "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY",
  polyphone: (_polyphone = {
    "19969": "DZ",
    "19975": "WM",
    "19988": "QJ",
    "20048": "YL",
    "20056": "SC",
    "20060": "NM",
    "20094": "QG",
    "20127": "QJ",
    "20167": "QC",
    "20193": "YG",
    "20250": "KH",
    "20256": "ZC",
    "20282": "SC",
    "20285": "QJG",
    "20291": "TD",
    "20314": "YD",
    "20340": "NE",
    "20375": "TD",
    "20389": "YJ",
    "20391": "CZ",
    "20415": "PB",
    "20446": "YS",
    "20447": "SQ",
    "20504": "TC",
    "20608": "KG",
    "20854": "QJ",
    "20857": "ZC",
    "20911": "PF"
  }, (0, _defineProperty2.default)(_polyphone, "20504", "TC"), (0, _defineProperty2.default)(_polyphone, "20608", "KG"), (0, _defineProperty2.default)(_polyphone, "20854", "QJ"), (0, _defineProperty2.default)(_polyphone, "20857", "ZC"), (0, _defineProperty2.default)(_polyphone, "20911", "PF"), (0, _defineProperty2.default)(_polyphone, "20985", "AW"), (0, _defineProperty2.default)(_polyphone, "21032", "PB"), (0, _defineProperty2.default)(_polyphone, "21048", "XQ"), (0, _defineProperty2.default)(_polyphone, "21049", "SC"), (0, _defineProperty2.default)(_polyphone, "21089", "YS"), (0, _defineProperty2.default)(_polyphone, "21119", "JC"), (0, _defineProperty2.default)(_polyphone, "21242", "SB"), (0, _defineProperty2.default)(_polyphone, "21273", "SC"), (0, _defineProperty2.default)(_polyphone, "21305", "YP"), (0, _defineProperty2.default)(_polyphone, "21306", "QO"), (0, _defineProperty2.default)(_polyphone, "21330", "ZC"), (0, _defineProperty2.default)(_polyphone, "21333", "SDC"), (0, _defineProperty2.default)(_polyphone, "21345", "QK"), (0, _defineProperty2.default)(_polyphone, "21378", "CA"), (0, _defineProperty2.default)(_polyphone, "21397", "SC"), (0, _defineProperty2.default)(_polyphone, "21414", "XS"), (0, _defineProperty2.default)(_polyphone, "21442", "SC"), (0, _defineProperty2.default)(_polyphone, "21477", "JG"), (0, _defineProperty2.default)(_polyphone, "21480", "TD"), (0, _defineProperty2.default)(_polyphone, "21484", "ZS"), (0, _defineProperty2.default)(_polyphone, "21494", "YX"), (0, _defineProperty2.default)(_polyphone, "21505", "YX"), (0, _defineProperty2.default)(_polyphone, "21512", "HG"), (0, _defineProperty2.default)(_polyphone, "21523", "XH"), (0, _defineProperty2.default)(_polyphone, "21537", "PB"), (0, _defineProperty2.default)(_polyphone, "21542", "PF"), (0, _defineProperty2.default)(_polyphone, "21549", "KH"), (0, _defineProperty2.default)(_polyphone, "21571", "E"), (0, _defineProperty2.default)(_polyphone, "21574", "DA"), (0, _defineProperty2.default)(_polyphone, "21588", "TD"), (0, _defineProperty2.default)(_polyphone, "21589", "O"), (0, _defineProperty2.default)(_polyphone, "21618", "ZC"), (0, _defineProperty2.default)(_polyphone, "21621", "KHA"), (0, _defineProperty2.default)(_polyphone, "21632", "ZJ"), (0, _defineProperty2.default)(_polyphone, "21654", "KG"), (0, _defineProperty2.default)(_polyphone, "21679", "LKG"), (0, _defineProperty2.default)(_polyphone, "21683", "KH"), (0, _defineProperty2.default)(_polyphone, "21710", "A"), (0, _defineProperty2.default)(_polyphone, "21719", "YH"), (0, _defineProperty2.default)(_polyphone, "21734", "WOE"), (0, _defineProperty2.default)(_polyphone, "21769", "A"), (0, _defineProperty2.default)(_polyphone, "21780", "WN"), (0, _defineProperty2.default)(_polyphone, "21804", "XH"), (0, _defineProperty2.default)(_polyphone, "21834", "A"), (0, _defineProperty2.default)(_polyphone, "21899", "ZD"), (0, _defineProperty2.default)(_polyphone, "21903", "RN"), (0, _defineProperty2.default)(_polyphone, "21908", "WO"), (0, _defineProperty2.default)(_polyphone, "21939", "ZC"), (0, _defineProperty2.default)(_polyphone, "21956", "SA"), (0, _defineProperty2.default)(_polyphone, "21964", "YA"), (0, _defineProperty2.default)(_polyphone, "21970", "TD"), (0, _defineProperty2.default)(_polyphone, "22003", "A"), (0, _defineProperty2.default)(_polyphone, "22031", "JG"), (0, _defineProperty2.default)(_polyphone, "22040", "XS"), (0, _defineProperty2.default)(_polyphone, "22060", "ZC"), (0, _defineProperty2.default)(_polyphone, "22066", "ZC"), (0, _defineProperty2.default)(_polyphone, "22079", "MH"), (0, _defineProperty2.default)(_polyphone, "22129", "XJ"), (0, _defineProperty2.default)(_polyphone, "22179", "XA"), (0, _defineProperty2.default)(_polyphone, "22237", "NJ"), (0, _defineProperty2.default)(_polyphone, "22244", "TD"), (0, _defineProperty2.default)(_polyphone, "22280", "JQ"), (0, _defineProperty2.default)(_polyphone, "22300", "YH"), (0, _defineProperty2.default)(_polyphone, "22313", "XW"), (0, _defineProperty2.default)(_polyphone, "22331", "YQ"), (0, _defineProperty2.default)(_polyphone, "22343", "YJ"), (0, _defineProperty2.default)(_polyphone, "22351", "PH"), (0, _defineProperty2.default)(_polyphone, "22395", "DC"), (0, _defineProperty2.default)(_polyphone, "22412", "TD"), (0, _defineProperty2.default)(_polyphone, "22484", "PB"), (0, _defineProperty2.default)(_polyphone, "22500", "PB"), (0, _defineProperty2.default)(_polyphone, "22534", "ZD"), (0, _defineProperty2.default)(_polyphone, "22549", "DH"), (0, _defineProperty2.default)(_polyphone, "22561", "PB"), (0, _defineProperty2.default)(_polyphone, "22612", "TD"), (0, _defineProperty2.default)(_polyphone, "22771", "KQ"), (0, _defineProperty2.default)(_polyphone, "22831", "HB"), (0, _defineProperty2.default)(_polyphone, "22841", "JG"), (0, _defineProperty2.default)(_polyphone, "22855", "QJ"), (0, _defineProperty2.default)(_polyphone, "22865", "XQ"), (0, _defineProperty2.default)(_polyphone, "23013", "ML"), (0, _defineProperty2.default)(_polyphone, "23081", "WM"), (0, _defineProperty2.default)(_polyphone, "23487", "SX"), (0, _defineProperty2.default)(_polyphone, "23558", "QJ"), (0, _defineProperty2.default)(_polyphone, "23561", "YW"), (0, _defineProperty2.default)(_polyphone, "23586", "YW"), (0, _defineProperty2.default)(_polyphone, "23614", "YW"), (0, _defineProperty2.default)(_polyphone, "23615", "SN"), (0, _defineProperty2.default)(_polyphone, "23631", "PB"), (0, _defineProperty2.default)(_polyphone, "23646", "ZS"), (0, _defineProperty2.default)(_polyphone, "23663", "ZT"), (0, _defineProperty2.default)(_polyphone, "23673", "YG"), (0, _defineProperty2.default)(_polyphone, "23762", "TD"), (0, _defineProperty2.default)(_polyphone, "23769", "ZS"), (0, _defineProperty2.default)(_polyphone, "23780", "QJ"), (0, _defineProperty2.default)(_polyphone, "23884", "QK"), (0, _defineProperty2.default)(_polyphone, "24055", "XH"), (0, _defineProperty2.default)(_polyphone, "24113", "DC"), (0, _defineProperty2.default)(_polyphone, "24162", "ZC"), (0, _defineProperty2.default)(_polyphone, "24191", "GA"), (0, _defineProperty2.default)(_polyphone, "24273", "QJ"), (0, _defineProperty2.default)(_polyphone, "24324", "NL"), (0, _defineProperty2.default)(_polyphone, "24377", "TD"), (0, _defineProperty2.default)(_polyphone, "24378", "QJ"), (0, _defineProperty2.default)(_polyphone, "24439", "PF"), (0, _defineProperty2.default)(_polyphone, "24554", "ZS"), (0, _defineProperty2.default)(_polyphone, "24683", "TD"), (0, _defineProperty2.default)(_polyphone, "24694", "WE"), (0, _defineProperty2.default)(_polyphone, "24733", "LK"), (0, _defineProperty2.default)(_polyphone, "24925", "TN"), (0, _defineProperty2.default)(_polyphone, "25094", "ZG"), (0, _defineProperty2.default)(_polyphone, "25100", "XQ"), (0, _defineProperty2.default)(_polyphone, "25103", "XH"), (0, _defineProperty2.default)(_polyphone, "25153", "PB"), (0, _defineProperty2.default)(_polyphone, "25170", "PB"), (0, _defineProperty2.default)(_polyphone, "25179", "KG"), (0, _defineProperty2.default)(_polyphone, "25203", "PB"), (0, _defineProperty2.default)(_polyphone, "25240", "ZS"), (0, _defineProperty2.default)(_polyphone, "25282", "FB"), (0, _defineProperty2.default)(_polyphone, "25303", "NA"), (0, _defineProperty2.default)(_polyphone, "25324", "KG"), (0, _defineProperty2.default)(_polyphone, "25341", "ZY"), (0, _defineProperty2.default)(_polyphone, "25373", "WZ"), (0, _defineProperty2.default)(_polyphone, "25375", "XJ"), (0, _defineProperty2.default)(_polyphone, "25384", "A"), (0, _defineProperty2.default)(_polyphone, "25457", "A"), (0, _defineProperty2.default)(_polyphone, "25528", "SD"), (0, _defineProperty2.default)(_polyphone, "25530", "SC"), (0, _defineProperty2.default)(_polyphone, "25552", "TD"), (0, _defineProperty2.default)(_polyphone, "25774", "ZC"), (0, _defineProperty2.default)(_polyphone, "25874", "ZC"), (0, _defineProperty2.default)(_polyphone, "26044", "YW"), (0, _defineProperty2.default)(_polyphone, "26080", "WM"), (0, _defineProperty2.default)(_polyphone, "26292", "PB"), (0, _defineProperty2.default)(_polyphone, "26333", "PB"), (0, _defineProperty2.default)(_polyphone, "26355", "ZY"), (0, _defineProperty2.default)(_polyphone, "26366", "CZ"), (0, _defineProperty2.default)(_polyphone, "26397", "ZC"), (0, _defineProperty2.default)(_polyphone, "26399", "QJ"), (0, _defineProperty2.default)(_polyphone, "26415", "ZS"), (0, _defineProperty2.default)(_polyphone, "26451", "SB"), (0, _defineProperty2.default)(_polyphone, "26526", "ZC"), (0, _defineProperty2.default)(_polyphone, "26552", "JG"), (0, _defineProperty2.default)(_polyphone, "26561", "TD"), (0, _defineProperty2.default)(_polyphone, "26588", "JG"), (0, _defineProperty2.default)(_polyphone, "26597", "CZ"), (0, _defineProperty2.default)(_polyphone, "26629", "ZS"), (0, _defineProperty2.default)(_polyphone, "26638", "YL"), (0, _defineProperty2.default)(_polyphone, "26646", "XQ"), (0, _defineProperty2.default)(_polyphone, "26653", "KG"), (0, _defineProperty2.default)(_polyphone, "26657", "XJ"), (0, _defineProperty2.default)(_polyphone, "26727", "HG"), (0, _defineProperty2.default)(_polyphone, "26894", "ZC"), (0, _defineProperty2.default)(_polyphone, "26937", "ZS"), (0, _defineProperty2.default)(_polyphone, "26946", "ZC"), (0, _defineProperty2.default)(_polyphone, "26999", "KJ"), (0, _defineProperty2.default)(_polyphone, "27099", "KJ"), (0, _defineProperty2.default)(_polyphone, "27449", "YQ"), (0, _defineProperty2.default)(_polyphone, "27481", "XS"), (0, _defineProperty2.default)(_polyphone, "27542", "ZS"), (0, _defineProperty2.default)(_polyphone, "27663", "ZS"), (0, _defineProperty2.default)(_polyphone, "27748", "TS"), (0, _defineProperty2.default)(_polyphone, "27784", "SC"), (0, _defineProperty2.default)(_polyphone, "27788", "ZD"), (0, _defineProperty2.default)(_polyphone, "27795", "TD"), (0, _defineProperty2.default)(_polyphone, "27812", "O"), (0, _defineProperty2.default)(_polyphone, "27850", "PB"), (0, _defineProperty2.default)(_polyphone, "27852", "MB"), (0, _defineProperty2.default)(_polyphone, "27895", "SL"), (0, _defineProperty2.default)(_polyphone, "27898", "PL"), (0, _defineProperty2.default)(_polyphone, "27973", "QJ"), (0, _defineProperty2.default)(_polyphone, "27981", "KH"), (0, _defineProperty2.default)(_polyphone, "27986", "HX"), (0, _defineProperty2.default)(_polyphone, "27994", "XJ"), (0, _defineProperty2.default)(_polyphone, "28044", "YC"), (0, _defineProperty2.default)(_polyphone, "28065", "WG"), (0, _defineProperty2.default)(_polyphone, "28177", "SM"), (0, _defineProperty2.default)(_polyphone, "28267", "QJ"), (0, _defineProperty2.default)(_polyphone, "28291", "KH"), (0, _defineProperty2.default)(_polyphone, "28337", "ZQ"), (0, _defineProperty2.default)(_polyphone, "28463", "TL"), (0, _defineProperty2.default)(_polyphone, "28548", "DC"), (0, _defineProperty2.default)(_polyphone, "28601", "TD"), (0, _defineProperty2.default)(_polyphone, "28689", "PB"), (0, _defineProperty2.default)(_polyphone, "28805", "JG"), (0, _defineProperty2.default)(_polyphone, "28820", "QG"), (0, _defineProperty2.default)(_polyphone, "28846", "PB"), (0, _defineProperty2.default)(_polyphone, "28952", "TD"), (0, _defineProperty2.default)(_polyphone, "28975", "ZC"), (0, _defineProperty2.default)(_polyphone, "29100", "A"), (0, _defineProperty2.default)(_polyphone, "29325", "QJ"), (0, _defineProperty2.default)(_polyphone, "29575", "SL"), (0, _defineProperty2.default)(_polyphone, "29602", "FB"), (0, _defineProperty2.default)(_polyphone, "30010", "TD"), (0, _defineProperty2.default)(_polyphone, "30044", "CX"), (0, _defineProperty2.default)(_polyphone, "30058", "PF"), (0, _defineProperty2.default)(_polyphone, "30091", "YSP"), (0, _defineProperty2.default)(_polyphone, "30111", "YN"), (0, _defineProperty2.default)(_polyphone, "30229", "XJ"), (0, _defineProperty2.default)(_polyphone, "30427", "SC"), (0, _defineProperty2.default)(_polyphone, "30465", "SX"), (0, _defineProperty2.default)(_polyphone, "30631", "YQ"), (0, _defineProperty2.default)(_polyphone, "30655", "QJ"), (0, _defineProperty2.default)(_polyphone, "30684", "QJG"), (0, _defineProperty2.default)(_polyphone, "30707", "SD"), (0, _defineProperty2.default)(_polyphone, "30729", "XH"), (0, _defineProperty2.default)(_polyphone, "30796", "LG"), (0, _defineProperty2.default)(_polyphone, "30917", "PB"), (0, _defineProperty2.default)(_polyphone, "31074", "NM"), (0, _defineProperty2.default)(_polyphone, "31085", "JZ"), (0, _defineProperty2.default)(_polyphone, "31109", "SC"), (0, _defineProperty2.default)(_polyphone, "31181", "ZC"), (0, _defineProperty2.default)(_polyphone, "31192", "MLB"), (0, _defineProperty2.default)(_polyphone, "31293", "JQ"), (0, _defineProperty2.default)(_polyphone, "31400", "YX"), (0, _defineProperty2.default)(_polyphone, "31584", "YJ"), (0, _defineProperty2.default)(_polyphone, "31896", "ZN"), (0, _defineProperty2.default)(_polyphone, "31909", "ZY"), (0, _defineProperty2.default)(_polyphone, "31995", "XJ"), (0, _defineProperty2.default)(_polyphone, "32321", "PF"), (0, _defineProperty2.default)(_polyphone, "32327", "ZY"), (0, _defineProperty2.default)(_polyphone, "32418", "HG"), (0, _defineProperty2.default)(_polyphone, "32420", "XQ"), (0, _defineProperty2.default)(_polyphone, "32421", "HG"), (0, _defineProperty2.default)(_polyphone, "32438", "LG"), (0, _defineProperty2.default)(_polyphone, "32473", "GJ"), (0, _defineProperty2.default)(_polyphone, "32488", "TD"), (0, _defineProperty2.default)(_polyphone, "32521", "QJ"), (0, _defineProperty2.default)(_polyphone, "32527", "PB"), (0, _defineProperty2.default)(_polyphone, "32562", "ZSQ"), (0, _defineProperty2.default)(_polyphone, "32564", "JZ"), (0, _defineProperty2.default)(_polyphone, "32735", "ZD"), (0, _defineProperty2.default)(_polyphone, "32793", "PB"), (0, _defineProperty2.default)(_polyphone, "33071", "PF"), (0, _defineProperty2.default)(_polyphone, "33098", "XL"), (0, _defineProperty2.default)(_polyphone, "33100", "YA"), (0, _defineProperty2.default)(_polyphone, "33152", "PB"), (0, _defineProperty2.default)(_polyphone, "33261", "CX"), (0, _defineProperty2.default)(_polyphone, "33324", "BP"), (0, _defineProperty2.default)(_polyphone, "33333", "TD"), (0, _defineProperty2.default)(_polyphone, "33406", "YA"), (0, _defineProperty2.default)(_polyphone, "33426", "WM"), (0, _defineProperty2.default)(_polyphone, "33432", "PB"), (0, _defineProperty2.default)(_polyphone, "33445", "JG"), (0, _defineProperty2.default)(_polyphone, "33486", "ZN"), (0, _defineProperty2.default)(_polyphone, "33493", "TS"), (0, _defineProperty2.default)(_polyphone, "33507", "QJ"), (0, _defineProperty2.default)(_polyphone, "33540", "QJ"), (0, _defineProperty2.default)(_polyphone, "33544", "ZC"), (0, _defineProperty2.default)(_polyphone, "33564", "XQ"), (0, _defineProperty2.default)(_polyphone, "33617", "YT"), (0, _defineProperty2.default)(_polyphone, "33632", "QJ"), (0, _defineProperty2.default)(_polyphone, "33636", "XH"), (0, _defineProperty2.default)(_polyphone, "33637", "YX"), (0, _defineProperty2.default)(_polyphone, "33694", "WG"), (0, _defineProperty2.default)(_polyphone, "33705", "PF"), (0, _defineProperty2.default)(_polyphone, "33728", "YW"), (0, _defineProperty2.default)(_polyphone, "33882", "SR"), (0, _defineProperty2.default)(_polyphone, "34067", "WM"), (0, _defineProperty2.default)(_polyphone, "34074", "YW"), (0, _defineProperty2.default)(_polyphone, "34121", "QJ"), (0, _defineProperty2.default)(_polyphone, "34255", "ZC"), (0, _defineProperty2.default)(_polyphone, "34259", "XL"), (0, _defineProperty2.default)(_polyphone, "34425", "JH"), (0, _defineProperty2.default)(_polyphone, "34430", "XH"), (0, _defineProperty2.default)(_polyphone, "34485", "KH"), (0, _defineProperty2.default)(_polyphone, "34503", "YS"), (0, _defineProperty2.default)(_polyphone, "34532", "HG"), (0, _defineProperty2.default)(_polyphone, "34552", "XS"), (0, _defineProperty2.default)(_polyphone, "34558", "YE"), (0, _defineProperty2.default)(_polyphone, "34593", "ZL"), (0, _defineProperty2.default)(_polyphone, "34660", "YQ"), (0, _defineProperty2.default)(_polyphone, "34892", "XH"), (0, _defineProperty2.default)(_polyphone, "34928", "SC"), (0, _defineProperty2.default)(_polyphone, "34999", "QJ"), (0, _defineProperty2.default)(_polyphone, "35048", "PB"), (0, _defineProperty2.default)(_polyphone, "35059", "SC"), (0, _defineProperty2.default)(_polyphone, "35098", "ZC"), (0, _defineProperty2.default)(_polyphone, "35203", "TQ"), (0, _defineProperty2.default)(_polyphone, "35265", "JX"), (0, _defineProperty2.default)(_polyphone, "35299", "JX"), (0, _defineProperty2.default)(_polyphone, "35782", "SZ"), (0, _defineProperty2.default)(_polyphone, "35828", "YS"), (0, _defineProperty2.default)(_polyphone, "35830", "E"), (0, _defineProperty2.default)(_polyphone, "35843", "TD"), (0, _defineProperty2.default)(_polyphone, "35895", "YG"), (0, _defineProperty2.default)(_polyphone, "35977", "MH"), (0, _defineProperty2.default)(_polyphone, "36158", "JG"), (0, _defineProperty2.default)(_polyphone, "36228", "QJ"), (0, _defineProperty2.default)(_polyphone, "36426", "XQ"), (0, _defineProperty2.default)(_polyphone, "36466", "DC"), (0, _defineProperty2.default)(_polyphone, "36710", "JC"), (0, _defineProperty2.default)(_polyphone, "36711", "ZYG"), (0, _defineProperty2.default)(_polyphone, "36767", "PB"), (0, _defineProperty2.default)(_polyphone, "36866", "SK"), (0, _defineProperty2.default)(_polyphone, "36951", "YW"), (0, _defineProperty2.default)(_polyphone, "37034", "YX"), (0, _defineProperty2.default)(_polyphone, "37063", "XH"), (0, _defineProperty2.default)(_polyphone, "37218", "ZC"), (0, _defineProperty2.default)(_polyphone, "37325", "ZC"), (0, _defineProperty2.default)(_polyphone, "38063", "PB"), (0, _defineProperty2.default)(_polyphone, "38079", "TD"), (0, _defineProperty2.default)(_polyphone, "38085", "QY"), (0, _defineProperty2.default)(_polyphone, "38107", "DC"), (0, _defineProperty2.default)(_polyphone, "38116", "TD"), (0, _defineProperty2.default)(_polyphone, "38123", "YD"), (0, _defineProperty2.default)(_polyphone, "38224", "HG"), (0, _defineProperty2.default)(_polyphone, "38241", "XTC"), (0, _defineProperty2.default)(_polyphone, "38271", "ZC"), (0, _defineProperty2.default)(_polyphone, "38415", "YE"), (0, _defineProperty2.default)(_polyphone, "38426", "KH"), (0, _defineProperty2.default)(_polyphone, "38461", "YD"), (0, _defineProperty2.default)(_polyphone, "38463", "AE"), (0, _defineProperty2.default)(_polyphone, "38466", "PB"), (0, _defineProperty2.default)(_polyphone, "38477", "XJ"), (0, _defineProperty2.default)(_polyphone, "38518", "YT"), (0, _defineProperty2.default)(_polyphone, "38551", "WK"), (0, _defineProperty2.default)(_polyphone, "38585", "ZC"), (0, _defineProperty2.default)(_polyphone, "38704", "XS"), (0, _defineProperty2.default)(_polyphone, "38739", "LJ"), (0, _defineProperty2.default)(_polyphone, "38761", "GJ"), (0, _defineProperty2.default)(_polyphone, "38808", "SQ"), (0, _defineProperty2.default)(_polyphone, "39048", "JG"), (0, _defineProperty2.default)(_polyphone, "39049", "XJ"), (0, _defineProperty2.default)(_polyphone, "39052", "HG"), (0, _defineProperty2.default)(_polyphone, "39076", "CZ"), (0, _defineProperty2.default)(_polyphone, "39271", "XT"), (0, _defineProperty2.default)(_polyphone, "39534", "TD"), (0, _defineProperty2.default)(_polyphone, "39552", "TD"), (0, _defineProperty2.default)(_polyphone, "39584", "PB"), (0, _defineProperty2.default)(_polyphone, "39647", "SB"), (0, _defineProperty2.default)(_polyphone, "39730", "LG"), (0, _defineProperty2.default)(_polyphone, "39748", "TPB"), (0, _defineProperty2.default)(_polyphone, "40109", "ZQ"), (0, _defineProperty2.default)(_polyphone, "40479", "ND"), (0, _defineProperty2.default)(_polyphone, "40516", "HG"), (0, _defineProperty2.default)(_polyphone, "40536", "HG"), (0, _defineProperty2.default)(_polyphone, "40583", "QJ"), (0, _defineProperty2.default)(_polyphone, "40765", "YQ"), (0, _defineProperty2.default)(_polyphone, "40784", "QJ"), (0, _defineProperty2.default)(_polyphone, "40840", "YK"), (0, _defineProperty2.default)(_polyphone, "40863", "QJG"), _polyphone)
};

//常用汉字按照汉字使用频率由低到高排序
var pinyin_dict_notone = {
  "a": "阿啊呵腌嗄吖锕",
  "e": "额阿俄恶鹅遏鄂厄饿峨扼娥鳄哦蛾噩愕讹锷垩婀鹗萼谔莪腭锇颚呃阏屙苊轭",
  "ai": "爱埃艾碍癌哀挨矮隘蔼唉皑哎霭捱暧嫒嗳瑷嗌锿砹",
  "ei": "诶",
  "xi": "系西席息希习吸喜细析戏洗悉锡溪惜稀袭夕洒晰昔牺腊烯熙媳栖膝隙犀蹊硒兮熄曦禧嬉玺奚汐徙羲铣淅嘻歙熹矽蟋郗唏皙隰樨浠忾蜥檄郄翕阋鳃舾屣葸螅咭粞觋欷僖醯鼷裼穸饩舄禊诶菥蓰",
  "yi": "一以已意议义益亿易医艺食依移衣异伊仪宜射遗疑毅谊亦疫役忆抑尾乙译翼蛇溢椅沂泄逸蚁夷邑怡绎彝裔姨熠贻矣屹颐倚诣胰奕翌疙弈轶蛾驿壹猗臆弋铱旖漪迤佚翊诒怿痍懿饴峄揖眙镒仡黟肄咿翳挹缢呓刈咦嶷羿钇殪荑薏蜴镱噫癔苡悒嗌瘗衤佾埸圯舣酏劓",
  "an": "安案按岸暗鞍氨俺胺铵谙庵黯鹌桉埯犴揞厂广",
  "han": "厂汉韩含旱寒汗涵函喊憾罕焊翰邯撼瀚憨捍酣悍鼾邗颔蚶晗菡旰顸犴焓撖",
  "ang": "昂仰盎肮",
  "ao": "奥澳傲熬凹鳌敖遨鏖袄坳翱嗷拗懊岙螯骜獒鏊艹媪廒聱",
  "wa": "瓦挖娃洼袜蛙凹哇佤娲呙腽",
  "yu": "于与育余预域予遇奥语誉玉鱼雨渔裕愈娱欲吁舆宇羽逾豫郁寓吾狱喻御浴愉禹俞邪榆愚渝尉淤虞屿峪粥驭瑜禺毓钰隅芋熨瘀迂煜昱汩於臾盂聿竽萸妪腴圄谕觎揄龉谀俣馀庾妤瘐鬻欤鹬阈嵛雩鹆圉蜮伛纡窬窳饫蓣狳肀舁蝓燠",
  "niu": "牛纽扭钮拗妞忸狃",
  "o": "哦噢喔",
  "ba": "把八巴拔伯吧坝爸霸罢芭跋扒叭靶疤笆耙鲅粑岜灞钯捌菝魃茇",
  "pa": "怕帕爬扒趴琶啪葩耙杷钯筢",
  "pi": "被批副否皮坏辟啤匹披疲罢僻毗坯脾譬劈媲屁琵邳裨痞癖陂丕枇噼霹吡纰砒铍淠郫埤濞睥芘蚍圮鼙罴蜱疋貔仳庀擗甓陴",
  "bi": "比必币笔毕秘避闭佛辟壁弊彼逼碧鼻臂蔽拂泌璧庇痹毙弼匕鄙陛裨贲敝蓖吡篦纰俾铋毖筚荸薜婢哔跸濞秕荜愎睥妣芘箅髀畀滗狴萆嬖襞舭",
  "bai": "百白败摆伯拜柏佰掰呗擘捭稗",
  "bo": "波博播勃拨薄佛伯玻搏柏泊舶剥渤卜驳簿脖膊簸菠礴箔铂亳钵帛擘饽跛钹趵檗啵鹁擗踣",
  "bei": "北被备倍背杯勃贝辈悲碑臂卑悖惫蓓陂钡狈呗焙碚褙庳鞴孛鹎邶鐾",
  "ban": "办版半班般板颁伴搬斑扮拌扳瓣坂阪绊钣瘢舨癍",
  "pan": "判盘番潘攀盼拚畔胖叛拌蹒磐爿蟠泮袢襻丬",
  "bin": "份宾频滨斌彬濒殡缤鬓槟摈膑玢镔豳髌傧",
  "bang": "帮邦彭旁榜棒膀镑绑傍磅蚌谤梆浜蒡",
  "pang": "旁庞乓磅螃彷滂逄耪",
  "beng": "泵崩蚌蹦迸绷甭嘣甏堋",
  "bao": "报保包宝暴胞薄爆炮饱抱堡剥鲍曝葆瀑豹刨褒雹孢苞煲褓趵鸨龅勹",
  "bu": "不部步布补捕堡埔卜埠簿哺怖钚卟瓿逋晡醭钸",
  "pu": "普暴铺浦朴堡葡谱埔扑仆蒲曝瀑溥莆圃璞濮菩蹼匍噗氆攵镨攴镤",
  "mian": "面棉免绵缅勉眠冕娩腼渑湎沔黾宀眄",
  "po": "破繁坡迫颇朴泊婆泼魄粕鄱珀陂叵笸泺皤钋钷",
  "fan": "反范犯繁饭泛翻凡返番贩烦拚帆樊藩矾梵蕃钒幡畈蘩蹯燔",
  "fu": "府服副负富复福夫妇幅付扶父符附腐赴佛浮覆辅傅伏抚赋辐腹弗肤阜袱缚甫氟斧孚敷俯拂俘咐腑孵芙涪釜脯茯馥宓绂讣呋罘麸蝠匐芾蜉跗凫滏蝮驸绋蚨砩桴赙菔呒趺苻拊阝鲋怫稃郛莩幞祓艴黻黼鳆",
  "ben": "本体奔苯笨夯贲锛畚坌",
  "feng": "风丰封峰奉凤锋冯逢缝蜂枫疯讽烽俸沣酆砜葑唪",
  "bian": "变便边编遍辩鞭辨贬匾扁卞汴辫砭苄蝙鳊弁窆笾煸褊碥忭缏",
  "pian": "便片篇偏骗翩扁骈胼蹁谝犏缏",
  "zhen": "镇真针圳振震珍阵诊填侦臻贞枕桢赈祯帧甄斟缜箴疹砧榛鸩轸稹溱蓁胗椹朕畛浈",
  "biao": "表标彪镖裱飚膘飙镳婊骠飑杓髟鳔灬瘭",
  "piao": "票朴漂飘嫖瓢剽缥殍瞟骠嘌莩螵",
  "huo": "和活或货获火伙惑霍祸豁嚯藿锪蠖钬耠镬夥灬劐攉",
  "bie": "别鳖憋瘪蹩",
  "min": "民敏闽闵皿泯岷悯珉抿黾缗玟愍苠鳘",
  "fen": "分份纷奋粉氛芬愤粪坟汾焚酚吩忿棼玢鼢瀵偾鲼",
  "bing": "并病兵冰屏饼炳秉丙摒柄槟禀枋邴冫",
  "geng": "更耕颈庚耿梗埂羹哽赓绠鲠",
  "fang": "方放房防访纺芳仿坊妨肪邡舫彷枋鲂匚钫",
  "xian": "现先县见线限显险献鲜洗宪纤陷闲贤仙衔掀咸嫌掺羡弦腺痫娴舷馅酰铣冼涎暹籼锨苋蚬跹岘藓燹鹇氙莶霰跣猃彡祆筅",
  "fou": "不否缶",
  "ca": "拆擦嚓礤",
  "cha": "查察差茶插叉刹茬楂岔诧碴嚓喳姹杈汊衩搽槎镲苴檫馇锸猹",
  "cai": "才采财材菜彩裁蔡猜踩睬",
  "can": "参残餐灿惨蚕掺璨惭粲孱骖黪",
  "shen": "信深参身神什审申甚沈伸慎渗肾绅莘呻婶娠砷蜃哂椹葚吲糁渖诜谂矧胂",
  "cen": "参岑涔",
  "san": "三参散伞叁糁馓毵",
  "cang": "藏仓苍沧舱臧伧",
  "zang": "藏脏葬赃臧奘驵",
  "chen": "称陈沈沉晨琛臣尘辰衬趁忱郴宸谌碜嗔抻榇伧谶龀肜",
  "cao": "草操曹槽糙嘈漕螬艚屮",
  "ce": "策测册侧厕栅恻",
  "ze": "责则泽择侧咋啧仄箦赜笮舴昃迮帻",
  "zhai": "债择齐宅寨侧摘窄斋祭翟砦瘵哜",
  "dao": "到道导岛倒刀盗稻蹈悼捣叨祷焘氘纛刂帱忉",
  "ceng": "层曾蹭噌",
  "zha": "查扎炸诈闸渣咋乍榨楂札栅眨咤柞喳喋铡蚱吒怍砟揸痄哳齄",
  "chai": "差拆柴钗豺侪虿瘥",
  "ci": "次此差词辞刺瓷磁兹慈茨赐祠伺雌疵鹚糍呲粢",
  "zi": "资自子字齐咨滋仔姿紫兹孜淄籽梓鲻渍姊吱秭恣甾孳訾滓锱辎趑龇赀眦缁呲笫谘嵫髭茈粢觜耔",
  "cuo": "措错磋挫搓撮蹉锉厝嵯痤矬瘥脞鹾",
  "chan": "产单阐崭缠掺禅颤铲蝉搀潺蟾馋忏婵孱觇廛谄谗澶骣羼躔蒇冁",
  "shan": "山单善陕闪衫擅汕扇掺珊禅删膳缮赡鄯栅煽姗跚鳝嬗潸讪舢苫疝掸膻钐剡蟮芟埏彡骟",
  "zhan": "展战占站崭粘湛沾瞻颤詹斩盏辗绽毡栈蘸旃谵搌",
  "xin": "新心信辛欣薪馨鑫芯锌忻莘昕衅歆囟忄镡",
  "lian": "联连练廉炼脸莲恋链帘怜涟敛琏镰濂楝鲢殓潋裢裣臁奁莶蠊蔹",
  "chang": "场长厂常偿昌唱畅倡尝肠敞倘猖娼淌裳徜昶怅嫦菖鲳阊伥苌氅惝鬯",
  "zhang": "长张章障涨掌帐胀彰丈仗漳樟账杖璋嶂仉瘴蟑獐幛鄣嫜",
  "chao": "超朝潮炒钞抄巢吵剿绰嘲晁焯耖怊",
  "zhao": "着照招找召朝赵兆昭肇罩钊沼嘲爪诏濯啁棹笊",
  "zhou": "调州周洲舟骤轴昼宙粥皱肘咒帚胄绉纣妯啁诌繇碡籀酎荮",
  "che": "车彻撤尺扯澈掣坼砗屮",
  "ju": "车局据具举且居剧巨聚渠距句拒俱柜菊拘炬桔惧矩鞠驹锯踞咀瞿枸掬沮莒橘飓疽钜趄踽遽琚龃椐苣裾榘狙倨榉苴讵雎锔窭鞫犋屦醵",
  "cheng": "成程城承称盛抢乘诚呈净惩撑澄秤橙骋逞瞠丞晟铛埕塍蛏柽铖酲裎枨",
  "rong": "容荣融绒溶蓉熔戎榕茸冗嵘肜狨蝾",
  "sheng": "生声升胜盛乘圣剩牲甸省绳笙甥嵊晟渑眚",
  "deng": "等登邓灯澄凳瞪蹬噔磴嶝镫簦戥",
  "zhi": "制之治质职只志至指织支值知识直致执置止植纸拓智殖秩旨址滞氏枝芝脂帜汁肢挚稚酯掷峙炙栉侄芷窒咫吱趾痔蜘郅桎雉祉郦陟痣蛭帙枳踯徵胝栀贽祗豸鸷摭轵卮轾彘觯絷跖埴夂黹忮骘膣踬",
  "zheng": "政正证争整征郑丁症挣蒸睁铮筝拯峥怔诤狰徵钲",
  "tang": "堂唐糖汤塘躺趟倘棠烫淌膛搪镗傥螳溏帑羰樘醣螗耥铴瑭",
  "chi": "持吃池迟赤驰尺斥齿翅匙痴耻炽侈弛叱啻坻眙嗤墀哧茌豉敕笞饬踟蚩柢媸魑篪褫彳鸱螭瘛眵傺",
  "shi": "是时实事市十使世施式势视识师史示石食始士失适试什泽室似诗饰殖释驶氏硕逝湿蚀狮誓拾尸匙仕柿矢峙侍噬嗜栅拭嘘屎恃轼虱耆舐莳铈谥炻豕鲥饣螫酾筮埘弑礻蓍鲺贳",
  "qi": "企其起期气七器汽奇齐启旗棋妻弃揭枝歧欺骑契迄亟漆戚岂稽岐琦栖缉琪泣乞砌祁崎绮祺祈凄淇杞脐麒圻憩芪伎俟畦耆葺沏萋骐鳍綦讫蕲屺颀亓碛柒啐汔綮萁嘁蛴槭欹芑桤丌蜞",
  "chuai": "揣踹啜搋膪",
  "tuo": "托脱拓拖妥驼陀沱鸵驮唾椭坨佗砣跎庹柁橐乇铊沲酡鼍箨柝",
  "duo": "多度夺朵躲铎隋咄堕舵垛惰哆踱跺掇剁柁缍沲裰哚隳",
  "xue": "学血雪削薛穴靴谑噱鳕踅泶彐",
  "chong": "重种充冲涌崇虫宠忡憧舂茺铳艟",
  "chou": "筹抽绸酬愁丑臭仇畴稠瞅踌惆俦瘳雠帱",
  "qiu": "求球秋丘邱仇酋裘龟囚遒鳅虬蚯泅楸湫犰逑巯艽俅蝤赇鼽糗",
  "xiu": "修秀休宿袖绣臭朽锈羞嗅岫溴庥馐咻髹鸺貅",
  "chu": "出处础初助除储畜触楚厨雏矗橱锄滁躇怵绌搐刍蜍黜杵蹰亍樗憷楮",
  "tuan": "团揣湍疃抟彖",
  "zhui": "追坠缀揣椎锥赘惴隹骓缒",
  "chuan": "传川船穿串喘椽舛钏遄氚巛舡",
  "zhuan": "专转传赚砖撰篆馔啭颛",
  "yuan": "元员院原源远愿园援圆缘袁怨渊苑宛冤媛猿垣沅塬垸鸳辕鸢瑗圜爰芫鼋橼螈眢箢掾",
  "cuan": "窜攒篡蹿撺爨汆镩",
  "chuang": "创床窗闯幢疮怆",
  "zhuang": "装状庄壮撞妆幢桩奘僮戆",
  "chui": "吹垂锤炊椎陲槌捶棰",
  "chun": "春纯醇淳唇椿蠢鹑朐莼肫蝽",
  "zhun": "准屯淳谆肫窀",
  "cu": "促趋趣粗簇醋卒蹴猝蹙蔟殂徂",
  "dun": "吨顿盾敦蹲墩囤沌钝炖盹遁趸砘礅",
  "qu": "区去取曲趋渠趣驱屈躯衢娶祛瞿岖龋觑朐蛐癯蛆苣阒诎劬蕖蘧氍黢蠼璩麴鸲磲",
  "xu": "需许续须序徐休蓄畜虚吁绪叙旭邪恤墟栩絮圩婿戌胥嘘浒煦酗诩朐盱蓿溆洫顼勖糈砉醑",
  "chuo": "辍绰戳淖啜龊踔辶",
  "zu": "组族足祖租阻卒俎诅镞菹",
  "ji": "济机其技基记计系期际及集级几给积极己纪即继击既激绩急奇吉季齐疾迹鸡剂辑籍寄挤圾冀亟寂暨脊跻肌稽忌饥祭缉棘矶汲畸姬藉瘠骥羁妓讥稷蓟悸嫉岌叽伎鲫诘楫荠戟箕霁嵇觊麂畿玑笈犄芨唧屐髻戢佶偈笄跽蒺乩咭赍嵴虮掎齑殛鲚剞洎丌墼蕺彐芰哜",
  "cong": "从丛匆聪葱囱琮淙枞骢苁璁",
  "zong": "总从综宗纵踪棕粽鬃偬枞腙",
  "cou": "凑辏腠楱",
  "cui": "衰催崔脆翠萃粹摧璀瘁悴淬啐隹毳榱",
  "wei": "为位委未维卫围违威伟危味微唯谓伪慰尾魏韦胃畏帷喂巍萎蔚纬潍尉渭惟薇苇炜圩娓诿玮崴桅偎逶倭猥囗葳隗痿猬涠嵬韪煨艉隹帏闱洧沩隈鲔軎",
  "cun": "村存寸忖皴",
  "zuo": "作做座左坐昨佐琢撮祚柞唑嘬酢怍笮阼胙",
  "zuan": "钻纂攥缵躜",
  "da": "大达打答搭沓瘩惮嗒哒耷鞑靼褡笪怛妲",
  "dai": "大代带待贷毒戴袋歹呆隶逮岱傣棣怠殆黛甙埭诒绐玳呔迨",
  "tai": "大台太态泰抬胎汰钛苔薹肽跆邰鲐酞骀炱",
  "ta": "他它她拓塔踏塌榻沓漯獭嗒挞蹋趿遢铊鳎溻闼",
  "dan": "但单石担丹胆旦弹蛋淡诞氮郸耽殚惮儋眈疸澹掸膻啖箪聃萏瘅赕",
  "lu": "路六陆录绿露鲁卢炉鹿禄赂芦庐碌麓颅泸卤潞鹭辘虏璐漉噜戮鲈掳橹轳逯渌蓼撸鸬栌氇胪镥簏舻辂垆",
  "tan": "谈探坦摊弹炭坛滩贪叹谭潭碳毯瘫檀痰袒坍覃忐昙郯澹钽锬",
  "ren": "人任认仁忍韧刃纫饪妊荏稔壬仞轫亻衽",
  "jie": "家结解价界接节她届介阶街借杰洁截姐揭捷劫戒皆竭桔诫楷秸睫藉拮芥诘碣嗟颉蚧孑婕疖桀讦疥偈羯袷哜喈卩鲒骱",
  "yan": "研严验演言眼烟沿延盐炎燕岩宴艳颜殷彦掩淹阎衍铅雁咽厌焰堰砚唁焉晏檐蜒奄俨腌妍谚兖筵焱偃闫嫣鄢湮赝胭琰滟阉魇酽郾恹崦芫剡鼹菸餍埏谳讠厣罨",
  "dang": "当党档荡挡宕砀铛裆凼菪谠",
  "tao": "套讨跳陶涛逃桃萄淘掏滔韬叨洮啕绦饕鼗",
  "tiao": "条调挑跳迢眺苕窕笤佻啁粜髫铫祧龆蜩鲦",
  "te": "特忑忒铽慝",
  "de": "的地得德底锝",
  "dei": "得",
  "di": "的地第提低底抵弟迪递帝敌堤蒂缔滴涤翟娣笛棣荻谛狄邸嘀砥坻诋嫡镝碲骶氐柢籴羝睇觌",
  "ti": "体提题弟替梯踢惕剔蹄棣啼屉剃涕锑倜悌逖嚏荑醍绨鹈缇裼",
  "tui": "推退弟腿褪颓蜕忒煺",
  "you": "有由又优游油友右邮尤忧幼犹诱悠幽佑釉柚铀鱿囿酉攸黝莠猷蝣疣呦蚴莸莜铕宥繇卣牖鼬尢蚰侑",
  "dian": "电点店典奠甸碘淀殿垫颠滇癫巅惦掂癜玷佃踮靛钿簟坫阽",
  "tian": "天田添填甜甸恬腆佃舔钿阗忝殄畋栝掭",
  "zhu": "主术住注助属逐宁著筑驻朱珠祝猪诸柱竹铸株瞩嘱贮煮烛苎褚蛛拄铢洙竺蛀渚伫杼侏澍诛茱箸炷躅翥潴邾槠舳橥丶瘃麈疰",
  "nian": "年念酿辗碾廿捻撵拈蔫鲶埝鲇辇黏",
  "diao": "调掉雕吊钓刁貂凋碉鲷叼铫铞",
  "yao": "要么约药邀摇耀腰遥姚窑瑶咬尧钥谣肴夭侥吆疟妖幺杳舀窕窈曜鹞爻繇徭轺铫鳐崾珧",
  "die": "跌叠蝶迭碟爹谍牒耋佚喋堞瓞鲽垤揲蹀",
  "she": "设社摄涉射折舍蛇拾舌奢慑赦赊佘麝歙畲厍猞揲滠",
  "ye": "业也夜叶射野液冶喝页爷耶邪咽椰烨掖拽曳晔谒腋噎揶靥邺铘揲",
  "xie": "些解协写血叶谢械鞋胁斜携懈契卸谐泄蟹邪歇泻屑挟燮榭蝎撷偕亵楔颉缬邂鲑瀣勰榍薤绁渫廨獬躞",
  "zhe": "这者着著浙折哲蔗遮辙辄柘锗褶蜇蛰鹧谪赭摺乇磔螫",
  "ding": "定订顶丁鼎盯钉锭叮仃铤町酊啶碇腚疔玎耵",
  "diu": "丢铥",
  "ting": "听庭停厅廷挺亭艇婷汀铤烃霆町蜓葶梃莛",
  "dong": "动东董冬洞懂冻栋侗咚峒氡恫胴硐垌鸫岽胨",
  "tong": "同通统童痛铜桶桐筒彤侗佟潼捅酮砼瞳恸峒仝嗵僮垌茼",
  "zhong": "中重种众终钟忠仲衷肿踵冢盅蚣忪锺舯螽夂",
  "dou": "都斗读豆抖兜陡逗窦渎蚪痘蔸钭篼",
  "du": "度都独督读毒渡杜堵赌睹肚镀渎笃竺嘟犊妒牍蠹椟黩芏髑",
  "duan": "断段短端锻缎煅椴簖",
  "dui": "对队追敦兑堆碓镦怼憝",
  "rui": "瑞兑锐睿芮蕊蕤蚋枘",
  "yue": "月说约越乐跃兑阅岳粤悦曰钥栎钺樾瀹龠哕刖",
  "tun": "吞屯囤褪豚臀饨暾氽",
  "hui": "会回挥汇惠辉恢徽绘毁慧灰贿卉悔秽溃荟晖彗讳诲珲堕诙蕙晦睢麾烩茴喙桧蛔洄浍虺恚蟪咴隳缋哕",
  "wu": "务物无五武午吴舞伍污乌误亡恶屋晤悟吾雾芜梧勿巫侮坞毋诬呜钨邬捂鹜兀婺妩於戊鹉浯蜈唔骛仵焐芴鋈庑鼯牾怃圬忤痦迕杌寤阢",
  "ya": "亚压雅牙押鸭呀轧涯崖邪芽哑讶鸦娅衙丫蚜碣垭伢氩桠琊揠吖睚痖疋迓岈砑",
  "he": "和合河何核盖贺喝赫荷盒鹤吓呵苛禾菏壑褐涸阂阖劾诃颌嗬貉曷翮纥盍",
  "wo": "我握窝沃卧挝涡斡渥幄蜗喔倭莴龌肟硪",
  "en": "恩摁蒽",
  "n": "嗯唔",
  "er": "而二尔儿耳迩饵洱贰铒珥佴鸸鲕",
  "fa": "发法罚乏伐阀筏砝垡珐",
  "quan": "全权券泉圈拳劝犬铨痊诠荃醛蜷颧绻犭筌鬈悛辁畎",
  "fei": "费非飞肥废菲肺啡沸匪斐蜚妃诽扉翡霏吠绯腓痱芾淝悱狒榧砩鲱篚镄",
  "pei": "配培坏赔佩陪沛裴胚妃霈淠旆帔呸醅辔锫",
  "ping": "平评凭瓶冯屏萍苹乒坪枰娉俜鲆",
  "fo": "佛",
  "hu": "和护许户核湖互乎呼胡戏忽虎沪糊壶葫狐蝴弧瑚浒鹄琥扈唬滹惚祜囫斛笏芴醐猢怙唿戽槲觳煳鹕冱瓠虍岵鹱烀轷",
  "ga": "夹咖嘎尬噶旮伽尕钆尜",
  "ge": "个合各革格歌哥盖隔割阁戈葛鸽搁胳舸疙铬骼蛤咯圪镉颌仡硌嗝鬲膈纥袼搿塥哿虼",
  "ha": "哈蛤铪",
  "xia": "下夏峡厦辖霞夹虾狭吓侠暇遐瞎匣瑕唬呷黠硖罅狎瘕柙",
  "gai": "改该盖概溉钙丐芥赅垓陔戤",
  "hai": "海还害孩亥咳骸骇氦嗨胲醢",
  "gan": "干感赶敢甘肝杆赣乾柑尴竿秆橄矸淦苷擀酐绀泔坩旰疳澉",
  "gang": "港钢刚岗纲冈杠缸扛肛罡戆筻",
  "jiang": "将强江港奖讲降疆蒋姜浆匠酱僵桨绛缰犟豇礓洚茳糨耩",
  "hang": "行航杭巷夯吭桁沆绗颃",
  "gong": "工公共供功红贡攻宫巩龚恭拱躬弓汞蚣珙觥肱廾",
  "hong": "红宏洪轰虹鸿弘哄烘泓訇蕻闳讧荭黉薨",
  "guang": "广光逛潢犷胱咣桄",
  "qiong": "穷琼穹邛茕筇跫蛩銎",
  "gao": "高告搞稿膏糕镐皋羔锆杲郜睾诰藁篙缟槁槔",
  "hao": "好号毫豪耗浩郝皓昊皋蒿壕灏嚎濠蚝貉颢嗥薅嚆",
  "li": "理力利立里李历例离励礼丽黎璃厉厘粒莉梨隶栗荔沥犁漓哩狸藜罹篱鲤砺吏澧俐骊溧砾莅锂笠蠡蛎痢雳俪傈醴栎郦俚枥喱逦娌鹂戾砬唳坜疠蜊黧猁鬲粝蓠呖跞疬缡鲡鳢嫠詈悝苈篥轹",
  "jia": "家加价假佳架甲嘉贾驾嫁夹稼钾挟拮迦伽颊浃枷戛荚痂颉镓笳珈岬胛袈郏葭袷瘕铗跏蛱恝哿",
  "luo": "落罗络洛逻螺锣骆萝裸漯烙摞骡咯箩珞捋荦硌雒椤镙跞瘰泺脶猡倮蠃",
  "ke": "可科克客刻课颗渴壳柯棵呵坷恪苛咳磕珂稞瞌溘轲窠嗑疴蝌岢铪颏髁蚵缂氪骒钶锞",
  "qia": "卡恰洽掐髂袷咭葜",
  "gei": "给",
  "gen": "根跟亘艮哏茛",
  "hen": "很狠恨痕哏",
  "gou": "构购够句沟狗钩拘勾苟垢枸篝佝媾诟岣彀缑笱鞲觏遘",
  "kou": "口扣寇叩抠佝蔻芤眍筘",
  "gu": "股古顾故固鼓骨估谷贾姑孤雇辜菇沽咕呱锢钴箍汩梏痼崮轱鸪牯蛊诂毂鹘菰罟嘏臌觚瞽蛄酤牿鲴",
  "pai": "牌排派拍迫徘湃俳哌蒎",
  "gua": "括挂瓜刮寡卦呱褂剐胍诖鸹栝呙",
  "tou": "投头透偷愉骰亠",
  "guai": "怪拐乖",
  "kuai": "会快块筷脍蒯侩浍郐蒉狯哙",
  "guan": "关管观馆官贯冠惯灌罐莞纶棺斡矜倌鹳鳏盥掼涫",
  "wan": "万完晚湾玩碗顽挽弯蔓丸莞皖宛婉腕蜿惋烷琬畹豌剜纨绾脘菀芄箢",
  "ne": "呢哪呐讷疒",
  "gui": "规贵归轨桂柜圭鬼硅瑰跪龟匮闺诡癸鳜桧皈鲑刽晷傀眭妫炅庋簋刿宄匦",
  "jun": "军均俊君峻菌竣钧骏龟浚隽郡筠皲麇捃",
  "jiong": "窘炯迥炅冂扃",
  "jue": "决绝角觉掘崛诀獗抉爵嚼倔厥蕨攫珏矍蹶谲镢鳜噱桷噘撅橛孓觖劂爝",
  "gun": "滚棍辊衮磙鲧绲丨",
  "hun": "婚混魂浑昏棍珲荤馄诨溷阍",
  "guo": "国过果郭锅裹帼涡椁囗蝈虢聒埚掴猓崞蜾呙馘",
  "hei": "黑嘿嗨",
  "kan": "看刊勘堪坎砍侃嵌槛瞰阚龛戡凵莰",
  "heng": "衡横恒亨哼珩桁蘅",
  "mo": "万没么模末冒莫摩墨默磨摸漠脉膜魔沫陌抹寞蘑摹蓦馍茉嘿谟秣蟆貉嫫镆殁耱嬷麽瘼貊貘",
  "peng": "鹏朋彭膨蓬碰苹棚捧亨烹篷澎抨硼怦砰嘭蟛堋",
  "hou": "后候厚侯猴喉吼逅篌糇骺後鲎瘊堠",
  "hua": "化华划话花画滑哗豁骅桦猾铧砉",
  "huai": "怀坏淮徊槐踝",
  "huan": "还环换欢患缓唤焕幻痪桓寰涣宦垸洹浣豢奂郇圜獾鲩鬟萑逭漶锾缳擐",
  "xun": "讯训迅孙寻询循旬巡汛勋逊熏徇浚殉驯鲟薰荀浔洵峋埙巽郇醺恂荨窨蕈曛獯",
  "huang": "黄荒煌皇凰慌晃潢谎惶簧璜恍幌湟蝗磺隍徨遑肓篁鳇蟥癀",
  "nai": "能乃奶耐奈鼐萘氖柰佴艿",
  "luan": "乱卵滦峦鸾栾銮挛孪脔娈",
  "qie": "切且契窃茄砌锲怯伽惬妾趄挈郄箧慊",
  "jian": "建间件见坚检健监减简艰践兼鉴键渐柬剑尖肩舰荐箭浅剪俭碱茧奸歼拣捡煎贱溅槛涧堑笺谏饯锏缄睑謇蹇腱菅翦戬毽笕犍硷鞯牮枧湔鲣囝裥踺搛缣鹣蒹谫僭戋趼楗",
  "nan": "南难男楠喃囡赧腩囝蝻",
  "qian": "前千钱签潜迁欠纤牵浅遣谦乾铅歉黔谴嵌倩钳茜虔堑钎骞阡掮钤扦芊犍荨仟芡悭缱佥愆褰凵肷岍搴箝慊椠",
  "qiang": "强抢疆墙枪腔锵呛羌蔷襁羟跄樯戕嫱戗炝镪锖蜣",
  "xiang": "向项相想乡象响香降像享箱羊祥湘详橡巷翔襄厢镶飨饷缃骧芗庠鲞葙蟓",
  "jiao": "教交较校角觉叫脚缴胶轿郊焦骄浇椒礁佼蕉娇矫搅绞酵剿嚼饺窖跤蛟侥狡姣皎茭峤铰醮鲛湫徼鹪僬噍艽挢敫",
  "zhuo": "着著缴桌卓捉琢灼浊酌拙茁涿镯淖啄濯焯倬擢斫棹诼浞禚",
  "qiao": "桥乔侨巧悄敲俏壳雀瞧翘窍峭锹撬荞跷樵憔鞘橇峤诮谯愀鞒硗劁缲",
  "xiao": "小效销消校晓笑肖削孝萧俏潇硝宵啸嚣霄淆哮筱逍姣箫骁枭哓绡蛸崤枵魈",
  "si": "司四思斯食私死似丝饲寺肆撕泗伺嗣祀厮驷嘶锶俟巳蛳咝耜笥纟糸鸶缌澌姒汜厶兕",
  "kai": "开凯慨岂楷恺揩锴铠忾垲剀锎蒈",
  "jin": "进金今近仅紧尽津斤禁锦劲晋谨筋巾浸襟靳瑾烬缙钅矜觐堇馑荩噤廑妗槿赆衿卺",
  "qin": "亲勤侵秦钦琴禽芹沁寝擒覃噙矜嗪揿溱芩衾廑锓吣檎螓",
  "jing": "经京精境竞景警竟井惊径静劲敬净镜睛晶颈荆兢靖泾憬鲸茎腈菁胫阱旌粳靓痉箐儆迳婧肼刭弪獍",
  "ying": "应营影英景迎映硬盈赢颖婴鹰荧莹樱瑛蝇萦莺颍膺缨瀛楹罂荥萤鹦滢蓥郢茔嘤璎嬴瘿媵撄潆",
  "jiu": "就究九酒久救旧纠舅灸疚揪咎韭玖臼柩赳鸠鹫厩啾阄桕僦鬏",
  "zui": "最罪嘴醉咀蕞觜",
  "juan": "卷捐圈眷娟倦绢隽镌涓鹃鄄蠲狷锩桊",
  "suan": "算酸蒜狻",
  "yun": "员运云允孕蕴韵酝耘晕匀芸陨纭郧筠恽韫郓氲殒愠昀菀狁",
  "qun": "群裙逡麇",
  "ka": "卡喀咖咔咯佧胩",
  "kang": "康抗扛慷炕亢糠伉钪闶",
  "keng": "坑铿吭",
  "kao": "考靠烤拷铐栲尻犒",
  "ken": "肯垦恳啃龈裉",
  "yin": "因引银印音饮阴隐姻殷淫尹荫吟瘾寅茵圻垠鄞湮蚓氤胤龈窨喑铟洇狺夤廴吲霪茚堙",
  "kong": "空控孔恐倥崆箜",
  "ku": "苦库哭酷裤枯窟挎骷堀绔刳喾",
  "kua": "跨夸垮挎胯侉",
  "kui": "亏奎愧魁馈溃匮葵窥盔逵睽馗聩喟夔篑岿喹揆隗傀暌跬蒉愦悝蝰",
  "kuan": "款宽髋",
  "kuang": "况矿框狂旷眶匡筐邝圹哐贶夼诳诓纩",
  "que": "确却缺雀鹊阙瘸榷炔阕悫",
  "kun": "困昆坤捆琨锟鲲醌髡悃阃",
  "kuo": "扩括阔廓蛞",
  "la": "拉落垃腊啦辣蜡喇剌旯砬邋瘌",
  "lai": "来莱赖睐徕籁涞赉濑癞崃疠铼",
  "lan": "兰览蓝篮栏岚烂滥缆揽澜拦懒榄斓婪阑褴罱啉谰镧漤",
  "lin": "林临邻赁琳磷淋麟霖鳞凛拎遴蔺吝粼嶙躏廪檩啉辚膦瞵懔",
  "lang": "浪朗郎廊狼琅榔螂阆锒莨啷蒗稂",
  "liang": "量两粮良辆亮梁凉谅粱晾靓踉莨椋魉墚",
  "lao": "老劳落络牢捞涝烙姥佬崂唠酪潦痨醪铑铹栳耢",
  "mu": "目模木亩幕母牧莫穆姆墓慕牟牡募睦缪沐暮拇姥钼苜仫毪坶",
  "le": "了乐勒肋叻鳓嘞仂泐",
  "lei": "类累雷勒泪蕾垒磊擂镭肋羸耒儡嫘缧酹嘞诔檑",
  "sui": "随岁虽碎尿隧遂髓穗绥隋邃睢祟濉燧谇眭荽",
  "lie": "列烈劣裂猎冽咧趔洌鬣埒捩躐",
  "leng": "冷愣棱楞塄",
  "ling": "领令另零灵龄陵岭凌玲铃菱棱伶羚苓聆翎泠瓴囹绫呤棂蛉酃鲮柃",
  "lia": "俩",
  "liao": "了料疗辽廖聊寥缪僚燎缭撂撩嘹潦镣寮蓼獠钌尥鹩",
  "liu": "流刘六留柳瘤硫溜碌浏榴琉馏遛鎏骝绺镏旒熘鹨锍",
  "lun": "论轮伦仑纶沦抡囵",
  "lv": "率律旅绿虑履吕铝屡氯缕滤侣驴榈闾偻褛捋膂稆",
  "lou": "楼露漏陋娄搂篓喽镂偻瘘髅耧蝼嵝蒌",
  "mao": "贸毛矛冒貌茂茅帽猫髦锚懋袤牦卯铆耄峁瑁蟊茆蝥旄泖昴瞀",
  "long": "龙隆弄垄笼拢聋陇胧珑窿茏咙砻垅泷栊癃",
  "nong": "农浓弄脓侬哝",
  "shuang": "双爽霜孀泷",
  "shu": "术书数属树输束述署朱熟殊蔬舒疏鼠淑叔暑枢墅俞曙抒竖蜀薯梳戍恕孰沭赎庶漱塾倏澍纾姝菽黍腧秫毹殳疋摅",
  "shuai": "率衰帅摔甩蟀",
  "lve": "略掠锊",
  "ma": "么马吗摩麻码妈玛嘛骂抹蚂唛蟆犸杩",
  "me": "么麽",
  "mai": "买卖麦迈脉埋霾荬劢",
  "man": "满慢曼漫埋蔓瞒蛮鳗馒幔谩螨熳缦镘颟墁鞔",
  "mi": "米密秘迷弥蜜谜觅靡泌眯麋猕谧咪糜宓汨醚嘧弭脒冖幂祢縻蘼芈糸敉",
  "men": "们门闷瞒汶扪焖懑鞔钔",
  "mang": "忙盲茫芒氓莽蟒邙硭漭",
  "meng": "蒙盟梦猛孟萌氓朦锰檬勐懵蟒蜢虻黾蠓艨甍艋瞢礞",
  "miao": "苗秒妙描庙瞄缪渺淼藐缈邈鹋杪眇喵",
  "mou": "某谋牟缪眸哞鍪蛑侔厶",
  "miu": "缪谬",
  "mei": "美没每煤梅媒枚妹眉魅霉昧媚玫酶镁湄寐莓袂楣糜嵋镅浼猸鹛",
  "wen": "文问闻稳温纹吻蚊雯紊瘟汶韫刎璺玟阌",
  "mie": "灭蔑篾乜咩蠛",
  "ming": "明名命鸣铭冥茗溟酩瞑螟暝",
  "na": "内南那纳拿哪娜钠呐捺衲镎肭",
  "nei": "内那哪馁",
  "nuo": "难诺挪娜糯懦傩喏搦锘",
  "ruo": "若弱偌箬",
  "nang": "囊馕囔曩攮",
  "nao": "脑闹恼挠瑙淖孬垴铙桡呶硇猱蛲",
  "ni": "你尼呢泥疑拟逆倪妮腻匿霓溺旎昵坭铌鲵伲怩睨猊",
  "nen": "嫩恁",
  "neng": "能",
  "nin": "您恁",
  "niao": "鸟尿溺袅脲茑嬲",
  "nie": "摄聂捏涅镍孽捻蘖啮蹑嗫臬镊颞乜陧",
  "niang": "娘酿",
  "ning": "宁凝拧泞柠咛狞佞聍甯",
  "nu": "努怒奴弩驽帑孥胬",
  "nv": "女钕衄恧",
  "ru": "入如女乳儒辱汝茹褥孺濡蠕嚅缛溽铷洳薷襦颥蓐",
  "nuan": "暖",
  "nve": "虐疟",
  "re": "热若惹喏",
  "ou": "区欧偶殴呕禺藕讴鸥瓯沤耦怄",
  "pao": "跑炮泡抛刨袍咆疱庖狍匏脬",
  "pou": "剖掊裒",
  "pen": "喷盆湓",
  "pie": "瞥撇苤氕丿",
  "pin": "品贫聘频拼拚颦姘嫔榀牝",
  "se": "色塞瑟涩啬穑铯槭",
  "qing": "情青清请亲轻庆倾顷卿晴氢擎氰罄磬蜻箐鲭綮苘黥圊檠謦",
  "zan": "赞暂攒堑昝簪糌瓒錾趱拶",
  "shao": "少绍召烧稍邵哨韶捎勺梢鞘芍苕劭艄筲杓潲",
  "sao": "扫骚嫂梢缫搔瘙臊埽缲鳋",
  "sha": "沙厦杀纱砂啥莎刹杉傻煞鲨霎嗄痧裟挲铩唼歃",
  "xuan": "县选宣券旋悬轩喧玄绚渲璇炫萱癣漩眩暄煊铉楦泫谖痃碹揎镟儇",
  "ran": "然染燃冉苒髯蚺",
  "rang": "让壤攘嚷瓤穰禳",
  "rao": "绕扰饶娆桡荛",
  "reng": "仍扔",
  "ri": "日",
  "rou": "肉柔揉糅鞣蹂",
  "ruan": "软阮朊",
  "run": "润闰",
  "sa": "萨洒撒飒卅仨脎",
  "suo": "所些索缩锁莎梭琐嗦唆唢娑蓑羧挲桫嗍睃",
  "sai": "思赛塞腮噻鳃",
  "shui": "说水税谁睡氵",
  "sang": "桑丧嗓搡颡磉",
  "sen": "森",
  "seng": "僧",
  "shai": "筛晒",
  "shang": "上商尚伤赏汤裳墒晌垧觞殇熵绱",
  "xing": "行省星腥猩惺兴刑型形邢饧醒幸杏性姓陉荇荥擤悻硎",
  "shou": "收手受首售授守寿瘦兽狩绶艏扌",
  "shuo": "说数硕烁朔铄妁槊蒴搠",
  "su": "速素苏诉缩塑肃俗宿粟溯酥夙愫簌稣僳谡涑蔌嗉觫",
  "shua": "刷耍唰",
  "shuan": "栓拴涮闩",
  "shun": "顺瞬舜吮",
  "song": "送松宋讼颂耸诵嵩淞怂悚崧凇忪竦菘",
  "sou": "艘搜擞嗽嗖叟馊薮飕嗾溲锼螋瞍",
  "sun": "损孙笋荪榫隼狲飧",
  "teng": "腾疼藤滕誊",
  "tie": "铁贴帖餮萜",
  "tu": "土突图途徒涂吐屠兔秃凸荼钍菟堍酴",
  "wai": "外歪崴",
  "wang": "王望往网忘亡旺汪枉妄惘罔辋魍",
  "weng": "翁嗡瓮蓊蕹",
  "zhua": "抓挝爪",
  "yang": "样养央阳洋扬杨羊详氧仰秧痒漾疡泱殃恙鸯徉佯怏炀烊鞅蛘",
  "xiong": "雄兄熊胸凶匈汹芎",
  "yo": "哟唷",
  "yong": "用永拥勇涌泳庸俑踊佣咏雍甬镛臃邕蛹恿慵壅痈鳙墉饔喁",
  "za": "杂扎咱砸咋匝咂拶",
  "zai": "在再灾载栽仔宰哉崽甾",
  "zao": "造早遭枣噪灶燥糟凿躁藻皂澡蚤唣",
  "zei": "贼",
  "zen": "怎谮",
  "zeng": "增曾综赠憎锃甑罾缯",
  "zhei": "这",
  "zou": "走邹奏揍诹驺陬楱鄹鲰",
  "zhuai": "转拽",
  "zun": "尊遵鳟樽撙",
  "dia": "嗲",
  "nou": "耨"
};
exports.pinyin_dict_notone = pinyin_dict_notone;
var pinyinUtil = {
  //加载字典
  parseDict: function parseDict() {
    dict.firstletter = pinyin_dict_firstletter;
    dict.notone = {};
    dict.py2hz = pinyin_dict_notone;
    for (var i in pinyin_dict_notone) {
      var temp = pinyin_dict_notone[i];
      for (var j = 0, len = temp.length; j < len; j++) {
        dict.notone[temp[j]] = i;
      }
    }
  },
  //根据汉字获取拼音，如果不是汉字直接返回原字符
  getPinyin: function getPinyin(chinese, splitter, withtone, polyphone) {
    if (!chinese || /^ +$/g.test(chinese)) return '';
    splitter = splitter == undefined ? '' : splitter;
    withtone = withtone == undefined ? false : withtone;
    polyphone = polyphone == undefined ? false : polyphone;
    var result = [];
    if (dict.withtone) {
      // 优先使用带声调的字典文件
      for (var i = 0, len = chinese.length; i < len; i++) {
        var pinyin = dict.withtone[chinese[i]];
        if (pinyin) {
          if (!polyphone) pinyin = pinyin.replace(/ .*$/g, ''); // 如果不需要多音字
          if (!withtone) pinyin = this.removeTone(pinyin); // 如果不需要声调
        }

        result.push(pinyin || chinese[i]);
      }
    } else if (dict.notone) {
      // 使用没有声调的字典文件
      if (withtone) console.warn('pinyin_dict_notone Dictionary files do not support tones!');
      if (polyphone) console.warn('pinyin_dict_notone Dictionary files do not support polyphony!');
      for (var i = 0, len = chinese.length; i < len; i++) {
        var temp = chinese.charAt(i);
        if (dict.notone[temp]) dict.notone[temp] = dict.notone[temp].substring(0, 1).toUpperCase() + dict.notone[temp].substring(1);
        result.push(dict.notone[temp] || temp);
      }
    } else {
      throw 'Sorry, no suitable dictionary files were found!';
    }
    if (!polyphone) return result.join(splitter);else {
      if (window.pinyin_dict_polyphone) return parsePolyphone(chinese, result, splitter, withtone);else return handlePolyphone(result, ' ', splitter);
    }
  },
  //获取汉字的拼音首字母
  getFirstLetter: function getFirstLetter(str, polyphone) {
    polyphone = polyphone == undefined ? false : polyphone;
    if (!str || /^ +$/g.test(str)) return '';
    if (dict.firstletter)
      // 使用首字母字典文件
      {
        var result = [];
        for (var i = 0; i < str.length; i++) {
          var unicode = str.charCodeAt(i);
          var ch = str.charAt(i);
          if (unicode >= 19968 && unicode <= 40869) {
            ch = dict.firstletter.all.charAt(unicode - 19968);
            if (polyphone) ch = dict.firstletter.polyphone[unicode] || ch;
          }
          result.push(ch);
        }
        if (!polyphone) return result.join(''); // 如果不用管多音字，直接将数组拼接成字符串
        else return handlePolyphone(result, '', ''); // 处理多音字，此时的result类似于：['D', 'ZC', 'F']
      } else {
      var py = this.getPinyin(str, ' ', false, polyphone);
      py = py instanceof Array ? py : [py];
      var result = [];
      for (var i = 0; i < py.length; i++) {
        result.push(py[i].replace(/(^| )(\w)\w*/g, function (m, $1, $2) {
          return $2.toUpperCase();
        }));
      }
      if (!polyphone) return result[0];else return simpleUnique(result);
    }
  },
  //拼音转汉字，只支持单个汉字，返回所有匹配的汉字组合
  getHanzi: function getHanzi(pinyin) {
    if (!dict.py2hz) {
      throw 'Sorry, no suitable dictionary files were found!';
    }
    return dict.py2hz[pinyin] || '';
  },
  //去除拼音中的声调，比如将 xiǎo míng tóng xué 转换成 xiao ming tong xue
  removeTone: function removeTone(pinyin) {
    var toneMap = {
      "ā": "a1",
      "á": "a2",
      "ǎ": "a3",
      "à": "a4",
      "ō": "o1",
      "ó": "o2",
      "ǒ": "o3",
      "ò": "o4",
      "ē": "e1",
      "é": "e2",
      "ě": "e3",
      "è": "e4",
      "ī": "i1",
      "í": "i2",
      "ǐ": "i3",
      "ì": "i4",
      "ū": "u1",
      "ú": "u2",
      "ǔ": "u3",
      "ù": "u4",
      "ü": "v0",
      "ǖ": "v1",
      "ǘ": "v2",
      "ǚ": "v3",
      "ǜ": "v4",
      "ń": "n2",
      "ň": "n3",
      "": "m2"
    };
    return pinyin.replace(/[āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńň]/g, function (m) {
      return toneMap[m][0];
    });
  }
};

//处理多音字， 将类似['D', 'ZC', 'F'] 转换成['DZF', 'DCF']
exports.pinyinUtil = pinyinUtil;
function handlePolyphone(array, splitter, joinChar) {
  splitter = splitter || '';
  var result = [''],
    temp = [];
  for (var i = 0; i < array.length; i++) {
    temp = [];
    var t = array[i].split(splitter);
    for (var j = 0; j < t.length; j++) {
      for (var k = 0; k < result.length; k++) {
        temp.push(result[k] + (result[k] ? joinChar : '') + t[j]);
      }
    }
    result = temp;
  }
  return simpleUnique(result);
}

//根据词库找出多音字正确的读音
function parsePolyphone(chinese, result, splitter, withtone) {
  var poly = window.pinyin_dict_polyphone;
  var max = 7; // 最多只考虑7个汉字的多音字词，虽然词库里面有10个字的，但是数量非常少，为了整体效率暂时忽略之
  var temp = poly[chinese];
  if (temp)
    // 如果直接找到了结果
    {
      temp = temp.split(' ');
      for (var i = 0; i < temp.length; i++) {
        result[i] = temp[i] || result[i];
        if (!withtone) result[i] = pinyinUtil.removeTone(result[i]);
      }
      return result.join(splitter);
    }
  for (var i = 0; i < chinese.length; i++) {
    temp = '';
    for (var j = 0; j < max && i + j < chinese.length; j++) {
      if (!/^[\u2E80-\u9FFF]+$/.test(chinese[i + j])) break; // 如果碰到非汉字直接停止本次查找
      temp += chinese[i + j];
      var res = poly[temp];
      if (res)
        // 如果找到了多音字词语
        {
          res = res.split(' ');
          for (var k = 0; k <= j; k++) {
            if (res[k]) result[i + k] = withtone ? res[k] : pinyinUtil.removeTone(res[k]);
          }
          break;
        }
    }
  }
  // 最后这一步是为了防止出现词库里面也没有包含的多音字词语
  for (var i = 0; i < result.length; i++) {
    result[i] = result[i].replace(/ .*$/g, '');
  }
  return result.join(splitter);
}

// 数组去重
function simpleUnique(array) {
  var result = [];
  var hash = {};
  for (var i = 0; i < array.length; i++) {
    var key = (0, _typeof2.default)(array[i]) + array[i];
    if (!hash[key]) {
      result.push(array[i]);
      hash[key] = true;
    }
  }
  return result;
}
pinyinUtil.parseDict();
pinyinUtil.dict = dict;
module.exports = {
  pinyinUtil: pinyinUtil
};

/***/ }),
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/*!************************************************************************************************************************************************************************************!*\
  !*** C:/Users/24416/Downloads/project and dissetation/student-study-group-chat-application/front-end chat/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnimation = createAnimation;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// const defaultOption = {
// 	duration: 300,
// 	timingFunction: 'linear',
// 	delay: 0,
// 	transformOrigin: '50% 50% 0'
// }
var MPAnimation = /*#__PURE__*/function () {
  function MPAnimation(options, _this) {
    (0, _classCallCheck2.default)(this, MPAnimation);
    this.options = options;
    // 在iOS10+QQ小程序平台下，传给原生的对象一定是个普通对象而不是Proxy对象，否则会报parameter should be Object instead of ProxyObject的错误
    this.animation = uni.createAnimation(_objectSpread({}, options));
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;
  }
  (0, _createClass2.default)(MPAnimation, [{
    key: "_nvuePushAnimates",
    value: function _nvuePushAnimates(type, args) {
      var aniObj = this.currentStepAnimates[this.next];
      var styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = '';
        }
        var unit = '';
        if (type === 'rotate') {
          unit = 'deg';
        }
        styles.styles.transform += "".concat(type, "(").concat(args + unit, ") ");
      } else {
        styles.styles[type] = "".concat(args);
      }
      this.currentStepAnimates[this.next] = styles;
    }
  }, {
    key: "_animateRun",
    value: function _animateRun() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ref = this.$.$refs['ani'].ref;
      if (!ref) return;
      return new Promise(function (resolve, reject) {
        nvueAnimation.transition(ref, _objectSpread({
          styles: styles
        }, config), function (res) {
          resolve();
        });
      });
    }
  }, {
    key: "_nvueNextAnimate",
    value: function _nvueNextAnimate(animates) {
      var _this2 = this;
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var fn = arguments.length > 2 ? arguments[2] : undefined;
      var obj = animates[step];
      if (obj) {
        var styles = obj.styles,
          config = obj.config;
        this._animateRun(styles, config).then(function () {
          step += 1;
          _this2._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === 'function' && fn();
        this.isEnd = true;
      }
    }
  }, {
    key: "step",
    value: function step() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.animation.step(config);
      return this;
    }
  }, {
    key: "run",
    value: function run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(function () {
        typeof fn === 'function' && fn();
      }, this.$.durationTime);
    }
  }]);
  return MPAnimation;
}();
var animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ'];
var animateTypes2 = ['opacity', 'backgroundColor'];
var animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];
animateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {
  MPAnimation.prototype[type] = function () {
    var _this$animation;
    (_this$animation = this.animation)[type].apply(_this$animation, arguments);
    return this;
  };
});
function createAnimation(option, _this) {
  if (!_this) return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map