(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!**********************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/main.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 33));\nvar _helangGlobal = _interopRequireDefault(__webpack_require__(/*! ./libs/helang-global.js */ 36));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //引入 helang-global.js\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\n_vue.default.use(_helangGlobal.default); // 使用 helang-global.js\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwidXNlIiwiaGVsYW5nR2xvYmFsIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkI7QUFDQSxtRyx5bkNBQW1EOztBQUVuREEsYUFBSUMsTUFBSixDQUFXQyxhQUFYLEdBQTJCLEtBQTNCOztBQUVBQyxhQUFJQyxNQUFKLEdBQWEsS0FBYjs7QUFFQUosYUFBSUssR0FBSixDQUFRQyxxQkFBUixFLENBQXNCOztBQUV0QixJQUFNQyxHQUFHLEdBQUcsSUFBSVAsWUFBSjtBQUNMRyxZQURLLEVBQVo7O0FBR0FJLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5pbXBvcnQgaGVsYW5nR2xvYmFsIGZyb20gJy4vbGlicy9oZWxhbmctZ2xvYmFsLmpzJ1x0Ly/lvJXlhaUgaGVsYW5nLWdsb2JhbC5qc1xyXG5cclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuVnVlLnVzZShoZWxhbmdHbG9iYWwpXHQvLyDkvb/nlKggaGVsYW5nLWdsb2JhbC5qc1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/pages.json ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/index/top', function () {return Vue.extend(__webpack_require__(/*! pages/index/top.vue?mpType=page */ 17).default);});
__definePage('pages/index/play', function () {return Vue.extend(__webpack_require__(/*! pages/index/play.vue?mpType=page */ 22).default);});
__definePage('pages/user/login', function () {return Vue.extend(__webpack_require__(/*! pages/user/login.vue?mpType=page */ 28).default);});

/***/ }),
/* 2 */
/*!************************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/pages/index/index.vue?mpType=page ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************************************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/hualala/Documents/MyProject/myguess/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("image", {
      staticClass: _vm._$s(1, "sc", "bg"),
      attrs: { src: _vm._$s(1, "a-src", _vm.appImgs.bg_1), _i: 1 }
    }),
    _c("view", { staticClass: _vm._$s(2, "sc", "box"), attrs: { _i: 2 } }, [
      _c(
        "view",
        {
          staticClass: _vm._$s(3, "sc", "h-flex-y h-flex-center"),
          attrs: { _i: 3 }
        },
        [
          _c("view", [
            _c("image", {
              staticClass: _vm._$s(5, "sc", "ico"),
              attrs: { _i: 5 }
            })
          ]),
          _c("view", [
            _vm._$s(7, "i", _vm.userInfo._id)
              ? _c("view", [
                  _c("text", [
                    _vm._v(_vm._$s(8, "t0-0", _vm._s(_vm.userInfo.pass)))
                  ])
                ])
              : _vm._e()
          ]),
          _c("image", {
            staticClass: _vm._$s(9, "sc", "start transform-scale"),
            attrs: { src: _vm._$s(9, "a-src", _vm.appImgs.btn_3), _i: 9 },
            on: { click: _vm.startGame }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(10, "sc", "h-flex-x"), attrs: { _i: 10 } },
            [
              _c("image", {
                staticClass: _vm._$s(11, "sc", "start transform-scale"),
                attrs: { src: _vm._$s(11, "a-src", _vm.appImgs.btn_1), _i: 11 },
                on: { click: _vm.lookTop }
              })
            ]
          )
        ]
      )
    ]),
    _c(
      "view",
      {
        staticClass: _vm._$s(12, "sc", "global-popup signIn-pop"),
        style: _vm._$s(12, "s", {
          display: _vm.signIn.show ? "block" : "none"
        }),
        attrs: { _i: 12 }
      },
      [
        _c("view", {
          staticClass: _vm._$s(13, "sc", "shade"),
          attrs: { _i: 13 }
        }),
        _c(
          "view",
          { staticClass: _vm._$s(14, "sc", "content"), attrs: { _i: 14 } },
          [
            _c("image", {
              attrs: { src: _vm._$s(15, "a-src", _vm.appImgs.img_2), _i: 15 }
            }),
            _c("view", [
              _c(
                "view",
                {
                  staticClass: _vm._$s(17, "sc", "h-flex-x h-flex-center"),
                  attrs: { _i: 17 }
                },
                [
                  _c("view", [
                    _c("image", {
                      staticClass: _vm._$s(19, "sc", "gold"),
                      attrs: {
                        src: _vm._$s(19, "a-src", _vm.appImgs.icon_1),
                        _i: 19
                      }
                    })
                  ]),
                  _c("view"),
                  _c("view")
                ]
              ),
              _c("image", {
                staticClass: _vm._$s(22, "sc", "btn transform-scale"),
                attrs: { src: _vm._$s(22, "a-src", _vm.appImgs.btn_8), _i: 22 },
                on: { click: _vm.onSignIn }
              })
            ])
          ]
        )
      ]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!************************************************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWd1QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/hualala/Documents/MyProject/myguess/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  components: {},\n\n\n  data: function data() {\n    return {\n      userInfo: {},\n      signIn: {\n        show: false },\n\n      appImgs: {} };\n\n  },\n  onLoad: function onLoad() {\n    this.appImgs = uni.$hl.getAppImgs();\n  },\n  onShow: function onShow() {\n    if (uni.$hl.isLogin()) {\n      this.userInfo = uni.$hl.getUserInfo();\n      this.updateInfo();\n      this.signInFn();\n    }\n  },\n  methods: {\n    // 开始游戏\n    startGame: function startGame() {\n      if (!uni.$hl.isLogin()) {\n        uni.navigateTo({\n          url: '/pages/user/login' });\n\n        return;\n      }\n      uni.navigateTo({\n        url: '/pages/index/play' });\n\n    },\n    // 排行榜\n    lookTop: function lookTop() {\n      uni.navigateTo({\n        url: '/pages/index/top' });\n\n    },\n    updateInfo: function updateInfo() {var _this = this;\n      uniCloud.callFunction({\n        name: 'getUserInfo',\n        data: {\n          id: this.userInfo._id } }).\n\n      then(function (res) {\n        if (!res.result.code) {\n          return;\n        }\n\n        uni.$hl.setUserInfo(res.result.data);\n        _this.userInfo = res.result.data;\n\n      }).catch(function (err) {\n        uni.hideLoading();\n        uni.$hl.showToast('登录失败，请重试');\n      });\n    },\n    signInFn: function signInFn() {var _this2 = this;var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'verify';var gold = arguments.length > 1 ? arguments[1] : undefined;\n      var sendData = {\n        id: this.userInfo._id,\n        type: type,\n        gold: gold };\n\n      uniCloud.callFunction({\n        name: 'signIn',\n        data: sendData }).\n      then(function (res) {\n        if (!res.result.code) {\n          return;\n        }\n\n        if (type == 'verify') {\n          if (res.result.data < 1) {\n            _this2.signIn.show = true;\n          }\n        }\n\n        if (type == 'signIn') {\n          _this2.signIn.show = false;\n          _this2.userInfo.gold += 20;\n          uni.$hl.setUserInfo(_this2.userInfo);\n          uni.hideLoading();\n          uni.$hl.showToast('领取成功', 'success');\n        }\n\n      }).catch(function (err) {\n        if (type == 'signIn') {\n          uni.hideLoading();\n        }\n      });\n    },\n    onSignIn: function onSignIn() {\n      var gold = 20 + this.userInfo.gold;\n      uni.$hl.showLoading('领取中');\n      this.signInFn('signIn', gold);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJkYXRhIiwidXNlckluZm8iLCJzaWduSW4iLCJzaG93IiwiYXBwSW1ncyIsIm9uTG9hZCIsInVuaSIsIiRobCIsImdldEFwcEltZ3MiLCJvblNob3ciLCJpc0xvZ2luIiwiZ2V0VXNlckluZm8iLCJ1cGRhdGVJbmZvIiwic2lnbkluRm4iLCJtZXRob2RzIiwic3RhcnRHYW1lIiwibmF2aWdhdGVUbyIsInVybCIsImxvb2tUb3AiLCJ1bmlDbG91ZCIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJpZCIsIl9pZCIsInRoZW4iLCJyZXMiLCJyZXN1bHQiLCJjb2RlIiwic2V0VXNlckluZm8iLCJjYXRjaCIsImVyciIsImhpZGVMb2FkaW5nIiwic2hvd1RvYXN0IiwidHlwZSIsImdvbGQiLCJzZW5kRGF0YSIsIm9uU2lnbkluIiwic2hvd0xvYWRpbmciXSwibWFwcGluZ3MiOiJ3SUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNkQSxZQUFVLEVBQUMsRUFERzs7O0FBSWRDLE1BSmMsa0JBSVA7QUFDTixXQUFPO0FBQ05DLGNBQVEsRUFBQyxFQURIO0FBRU5DLFlBQU0sRUFBQztBQUNOQyxZQUFJLEVBQUMsS0FEQyxFQUZEOztBQUtOQyxhQUFPLEVBQUMsRUFMRixFQUFQOztBQU9BLEdBWmE7QUFhZEMsUUFiYyxvQkFhTDtBQUNSLFNBQUtELE9BQUwsR0FBZUUsR0FBRyxDQUFDQyxHQUFKLENBQVFDLFVBQVIsRUFBZjtBQUNBLEdBZmE7QUFn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ZixZQUFHRyxJQUFJLElBQUksUUFBWCxFQUFvQjtBQUNuQjNCLGFBQUcsQ0FBQ3lCLFdBQUo7QUFDQTtBQUNELE9BMUJEO0FBMkJBLEtBdkVPO0FBd0VSSyxZQXhFUSxzQkF3RUU7QUFDVCxVQUFJRixJQUFJLEdBQUcsS0FBSyxLQUFLakMsUUFBTCxDQUFjaUMsSUFBOUI7QUFDQTVCLFNBQUcsQ0FBQ0MsR0FBSixDQUFROEIsV0FBUixDQUFvQixLQUFwQjtBQUNBLFdBQUt4QixRQUFMLENBQWMsUUFBZCxFQUF1QnFCLElBQXZCO0FBQ0EsS0E1RU8sRUF2QkssRSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wb25lbnRzOntcblx0XHRcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dXNlckluZm86e30sXG5cdFx0XHRzaWduSW46e1xuXHRcdFx0XHRzaG93OmZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0YXBwSW1nczp7fVxuXHRcdH1cblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdHRoaXMuYXBwSW1ncyA9IHVuaS4kaGwuZ2V0QXBwSW1ncygpO1xuXHR9LFxuXHRvblNob3coKSB7XG5cdFx0aWYodW5pLiRobC5pc0xvZ2luKCkpe1xuXHRcdFx0dGhpcy51c2VySW5mbyA9IHVuaS4kaGwuZ2V0VXNlckluZm8oKTtcblx0XHRcdHRoaXMudXBkYXRlSW5mbygpO1xuXHRcdFx0dGhpcy5zaWduSW5GbigpO1xuXHRcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdC8vIOW8gOWni+a4uOaIj1xuXHRcdHN0YXJ0R2FtZSgpe1xuXHRcdFx0aWYoIXVuaS4kaGwuaXNMb2dpbigpKXtcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdHVybDonL3BhZ2VzL3VzZXIvbG9naW4nXG5cdFx0XHRcdH0pXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0dXJsOicvcGFnZXMvaW5kZXgvcGxheSdcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDmjpLooYzmppxcblx0XHRsb29rVG9wKCl7XG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdHVybDonL3BhZ2VzL2luZGV4L3RvcCdcblx0XHRcdH0pXG5cdFx0fSxcblx0XHR1cGRhdGVJbmZvKCl7XG5cdFx0XHR1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xuXHRcdFx0ICAgIG5hbWU6ICdnZXRVc2VySW5mbycsXG5cdFx0XHQgICAgZGF0YToge1xuXHRcdFx0XHRcdGlkOnRoaXMudXNlckluZm8uX2lkXG5cdFx0XHRcdH1cblx0XHRcdH0pLnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0XHRpZighcmVzLnJlc3VsdC5jb2RlKXtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHVuaS4kaGwuc2V0VXNlckluZm8ocmVzLnJlc3VsdC5kYXRhKTtcblx0XHRcdFx0dGhpcy51c2VySW5mbyA9IHJlcy5yZXN1bHQuZGF0YTtcblxuXHRcdFx0fSkuY2F0Y2goKGVycik9Pntcblx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdHVuaS4kaGwuc2hvd1RvYXN0KCfnmbvlvZXlpLHotKXvvIzor7fph43or5UnKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0c2lnbkluRm4odHlwZSA9ICd2ZXJpZnknLGdvbGQpe1xuXHRcdFx0bGV0IHNlbmREYXRhID0ge1xuXHRcdFx0XHRpZDp0aGlzLnVzZXJJbmZvLl9pZCxcblx0XHRcdFx0dHlwZSxcblx0XHRcdFx0Z29sZFxuXHRcdFx0fVxuXHRcdFx0dW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcblx0XHRcdCAgICBuYW1lOiAnc2lnbkluJyxcblx0XHRcdCAgICBkYXRhOiBzZW5kRGF0YVxuXHRcdFx0fSkudGhlbigocmVzKSA9PiB7XG5cdFx0XHRcdGlmKCFyZXMucmVzdWx0LmNvZGUpe1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYodHlwZSA9PSAndmVyaWZ5Jyl7XG5cdFx0XHRcdFx0aWYocmVzLnJlc3VsdC5kYXRhIDwgMSl7XG5cdFx0XHRcdFx0XHR0aGlzLnNpZ25Jbi5zaG93ID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGlmKHR5cGUgPT0gJ3NpZ25Jbicpe1xuXHRcdFx0XHRcdHRoaXMuc2lnbkluLnNob3cgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLnVzZXJJbmZvLmdvbGQgKz0gMjA7XG5cdFx0XHRcdFx0dW5pLiRobC5zZXRVc2VySW5mbyh0aGlzLnVzZXJJbmZvKTtcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcblx0XHRcdFx0XHR1bmkuJGhsLnNob3dUb2FzdCgn6aKG5Y+W5oiQ5YqfJywnc3VjY2VzcycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcblx0XHRcdH0pLmNhdGNoKChlcnIpPT57XG5cdFx0XHRcdGlmKHR5cGUgPT0gJ3NpZ25Jbicpe1xuXHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdG9uU2lnbkluKCl7XG5cdFx0XHRsZXQgZ29sZCA9IDIwICsgdGhpcy51c2VySW5mby5nb2xkO1xuXHRcdFx0dW5pLiRobC5zaG93TG9hZGluZygn6aKG5Y+W5LitJyk7XG5cdFx0XHR0aGlzLnNpZ25JbkZuKCdzaWduSW4nLGdvbGQpXG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 11));var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 14);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e24) {throw _e24;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e25) {didErr = true;err = _e25;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function n(e, t, n) {return e(n = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && n.path);} }, n.exports), n.exports;}var s = n(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),s = {},r = s.lib = {},o = r.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = r.WordArray = o.extend({ init: function init(e, n) {e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,s = this.sigBytes,r = e.sigBytes;if (this.clamp(), s % 4) for (var o = 0; o < r; o++) {var i = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;t[s + o >>> 2] |= i << 24 - (s + o) % 4 * 8;} else for (o = 0; o < r; o += 4) {t[s + o >>> 2] = n[o >>> 2];}return this.sigBytes += r, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = o.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, s = [], r = function r(t) {t = t;var n = 987654321,s = 4294967295;return function () {var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);};}, o = 0; o < t; o += 4) {var a = r(4294967296 * (n || e.random()));n = 987654071 * a(), s.push(4294967296 * a() | 0);}return new i.init(s, t);} }),a = s.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push((o >>> 4).toString(16)), s.push((15 & o).toString(16));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s += 2) {n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;}return new i.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push(String.fromCharCode(o));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s++) {n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;}return new i.init(n, t);} },h = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },l = r.BufferedBlockAlgorithm = o.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,s = n.words,r = n.sigBytes,o = this.blockSize,a = r / (4 * o),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,u = e.min(4 * c, r);if (c) {for (var h = 0; h < c; h += o) {this._doProcessBlock(s, h);}var l = s.splice(0, c);n.sigBytes -= u;}return new i.init(l, u);}, clone: function clone() {var e = o.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 });r.Hasher = l.extend({ cfg: o.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {l.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new d.HMAC.init(e, n).finalize(t);};} });var d = s.algo = {};return s;}(Math), n);}),r = (n(function (e, t) {var n;e.exports = (n = s, function (e) {var t = n,s = t.lib,r = s.WordArray,o = s.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = o.extend({ _doReset: function _doReset() {this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var s = t + n,r = e[s];e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);}var o = this._hash.words,i = e[t + 0],c = e[t + 1],f = e[t + 2],p = e[t + 3],g = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],w = e[t + 8],k = e[t + 9],S = e[t + 10],v = e[t + 11],T = e[t + 12],A = e[t + 13],P = e[t + 14],I = e[t + 15],b = o[0],E = o[1],O = o[2],C = o[3];b = u(b, E, O, C, i, 7, a[0]), C = u(C, b, E, O, c, 12, a[1]), O = u(O, C, b, E, f, 17, a[2]), E = u(E, O, C, b, p, 22, a[3]), b = u(b, E, O, C, g, 7, a[4]), C = u(C, b, E, O, m, 12, a[5]), O = u(O, C, b, E, y, 17, a[6]), E = u(E, O, C, b, _, 22, a[7]), b = u(b, E, O, C, w, 7, a[8]), C = u(C, b, E, O, k, 12, a[9]), O = u(O, C, b, E, S, 17, a[10]), E = u(E, O, C, b, v, 22, a[11]), b = u(b, E, O, C, T, 7, a[12]), C = u(C, b, E, O, A, 12, a[13]), O = u(O, C, b, E, P, 17, a[14]), b = h(b, E = u(E, O, C, b, I, 22, a[15]), O, C, c, 5, a[16]), C = h(C, b, E, O, y, 9, a[17]), O = h(O, C, b, E, v, 14, a[18]), E = h(E, O, C, b, i, 20, a[19]), b = h(b, E, O, C, m, 5, a[20]), C = h(C, b, E, O, S, 9, a[21]), O = h(O, C, b, E, I, 14, a[22]), E = h(E, O, C, b, g, 20, a[23]), b = h(b, E, O, C, k, 5, a[24]), C = h(C, b, E, O, P, 9, a[25]), O = h(O, C, b, E, p, 14, a[26]), E = h(E, O, C, b, w, 20, a[27]), b = h(b, E, O, C, A, 5, a[28]), C = h(C, b, E, O, f, 9, a[29]), O = h(O, C, b, E, _, 14, a[30]), b = l(b, E = h(E, O, C, b, T, 20, a[31]), O, C, m, 4, a[32]), C = l(C, b, E, O, w, 11, a[33]), O = l(O, C, b, E, v, 16, a[34]), E = l(E, O, C, b, P, 23, a[35]), b = l(b, E, O, C, c, 4, a[36]), C = l(C, b, E, O, g, 11, a[37]), O = l(O, C, b, E, _, 16, a[38]), E = l(E, O, C, b, S, 23, a[39]), b = l(b, E, O, C, A, 4, a[40]), C = l(C, b, E, O, i, 11, a[41]), O = l(O, C, b, E, p, 16, a[42]), E = l(E, O, C, b, y, 23, a[43]), b = l(b, E, O, C, k, 4, a[44]), C = l(C, b, E, O, T, 11, a[45]), O = l(O, C, b, E, I, 16, a[46]), b = d(b, E = l(E, O, C, b, f, 23, a[47]), O, C, i, 6, a[48]), C = d(C, b, E, O, _, 10, a[49]), O = d(O, C, b, E, P, 15, a[50]), E = d(E, O, C, b, m, 21, a[51]), b = d(b, E, O, C, T, 6, a[52]), C = d(C, b, E, O, p, 10, a[53]), O = d(O, C, b, E, S, 15, a[54]), E = d(E, O, C, b, c, 21, a[55]), b = d(b, E, O, C, w, 6, a[56]), C = d(C, b, E, O, I, 10, a[57]), O = d(O, C, b, E, y, 15, a[58]), E = d(E, O, C, b, A, 21, a[59]), b = d(b, E, O, C, g, 6, a[60]), C = d(C, b, E, O, v, 10, a[61]), O = d(O, C, b, E, f, 15, a[62]), E = d(E, O, C, b, k, 21, a[63]), o[0] = o[0] + b | 0, o[1] = o[1] + E | 0, o[2] = o[2] + O | 0, o[3] = o[3] + C | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,s = 8 * this._nDataBytes,r = 8 * t.sigBytes;n[r >>> 5] |= 128 << 24 - r % 32;var o = e.floor(s / 4294967296),i = s;n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var h = c[u];c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);}return a;}, clone: function clone() {var e = o.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, s, r, o, i) {var a = e + (t & n | ~t & s) + r + i;return (a << o | a >>> 32 - o) + t;}function h(e, t, n, s, r, o, i) {var a = e + (t & s | n & ~s) + r + i;return (a << o | a >>> 32 - o) + t;}function l(e, t, n, s, r, o, i) {var a = e + (t ^ n ^ s) + r + i;return (a << o | a >>> 32 - o) + t;}function d(e, t, n, s, r, o, i) {var a = e + (n ^ (t | ~s)) + r + i;return (a << o | a >>> 32 - o) + t;}t.MD5 = o._createHelper(c), t.HmacMD5 = o._createHmacHelper(c);}(Math), n.MD5);}), n(function (e, t) {var n, r, o;e.exports = (r = (n = s).lib.Base, o = n.enc.Utf8, void (n.algo.HMAC = r.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));var n = e.blockSize,s = 4 * n;t.sigBytes > s && (t = e.finalize(t)), t.clamp();for (var r = this._oKey = t.clone(), i = this._iKey = t.clone(), a = r.words, c = i.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}r.sigBytes = i.sigBytes = s, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} })));}), n(function (e, t) {e.exports = s.HmacMD5;}));function o(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();}function i(e) {return "object" === o(e);}var a = /*#__PURE__*/function (_Error) {_inherits(a, _Error);var _super = _createSuper(a);function a(e, t) {var _this;_classCallCheck(this, a);_this = _super.call(this, e), _this.code = t;return _this;}return a;}( /*#__PURE__*/_wrapNativeSuper(Error));function c(e) {return e && "string" == typeof e ? JSON.parse(e) : e;}var u = "development" === "development",h = "app-plus",l = c({
    "address": [
        "127.0.0.1",
        "172.16.43.138"
    ],
    "debugPort": 58584,
    "initialLaunchType": "local",
    "servePort": 58585,
    "skipFiles": [
        "<node_internals>/**/*.js",
        "/Applications/HBuilderX.app/Contents/HBuilderX/plugins/unicloud/**/*.js"
    ]
}
),d = c([{"provider":"tencent","spaceName":"aaronservice","spaceId":"tcb-dlzlzgf3bb60e1-6d9zqc4f05595"}]),f = true;var p = "";try {{var _e2 = __webpack_require__(/*! uni-stat-config */ 15).default || __webpack_require__(/*! uni-stat-config */ 15);p = _e2.appid;}} catch (e) {}var g = {};function m(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var n, s;return n = g, s = e, Object.prototype.hasOwnProperty.call(n, s) || (g[e] = t), g[e];}"app-plus" === h && (g = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});var y = ["invoke", "success", "fail", "complete"],_ = m("_globalUniCloudInterceptor");function w(e, t) {_[e] || (_[e] = {}), i(t) && Object.keys(t).forEach(function (n) {y.indexOf(n) > -1 && function (e, t, n) {var s = _[e][t];s || (s = _[e][t] = []), -1 === s.indexOf(n) && "function" == typeof n && s.push(n);}(e, n, t[n]);});}function k(e, t) {_[e] || (_[e] = {}), i(t) ? Object.keys(t).forEach(function (n) {y.indexOf(n) > -1 && function (e, t, n) {var s = _[e][t];if (!s) return;var r = s.indexOf(n);r > -1 && s.splice(r, 1);}(e, n, t[n]);}) : delete _[e];}function S(e, t) {return e && 0 !== e.length ? e.reduce(function (e, n) {return e.then(function () {return n(t);});}, Promise.resolve()) : Promise.resolve();}function v(e, t) {return _[e] && _[e][t] || [];}function T(e, t) {return t ? function (n) {var _this2 = this;var s = "callFunction" === t && "DCloud-clientDB" === (n && n.name);var r;r = this.isReady ? Promise.resolve() : this.initUniCloud, n = n || {};var o = r.then(function () {return s ? Promise.resolve() : S(v(t, "invoke"), n);}).then(function () {return e.call(_this2, n);}).then(function (e) {return s ? Promise.resolve(e) : S(v(t, "success"), e).then(function () {return S(v(t, "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {return s ? Promise.reject(e) : S(v(t, "fail"), e).then(function () {return S(v(t, "complete"), e);}).then(function () {return Promise.reject(e);});});if (!(n.success || n.fail || n.complete)) return o;o.then(function (e) {n.success && n.success(e), n.complete && n.complete(e);}, function (e) {n.fail && n.fail(e), n.complete && n.complete(e);});} : function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var A = /*#__PURE__*/function (_Error2) {_inherits(A, _Error2);var _super2 = _createSuper(A);function A(e) {var _this3;_classCallCheck(this, A);_this3 = _super2.call(this, e.message), _this3.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this3), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this3;}return A;}( /*#__PURE__*/_wrapNativeSuper(Error));var P;function I() {var e = uni.getLocale && uni.getLocale() || "en";if (P) return _objectSpread(_objectSpread({}, P), {}, { LOCALE: e });var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),t = _uni$getSystemInfoSyn.deviceId,n = _uni$getSystemInfoSyn.platform;return P = { PLATFORM: h, OS: n, APPID: p, DEVICEID: t, CLIENT_SDK_VERSION: "1.0.21" }, _objectSpread(_objectSpread({}, P), {}, { LOCALE: e });}var b = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), r(n, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (n, s) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}), u && "h5" === h && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return s(new A({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var r = e.data;if (r.error) return s(new A({ code: r.error.code, message: r.error.message, requestId: t }));r.result = r.data, r.requestId = t, delete r.data, n(r);} }));});} };var E = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} },O = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };var _e3 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: O, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: O }, "zh-Hans"),C = _e3.t;var U = /*#__PURE__*/function () {function U(e) {_classCallCheck(this, U);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(C("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = E, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;}_createClass(U, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return b.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this4 = this;return Promise.resolve().then(function () {return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this4.getAccessToken();}).then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});}) : _this4.getAccessToken().then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = b.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = b.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: s };} }, { key: "getAccessToken", value: function getAccessToken() {var _this5 = this;if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;this._getAccessTokenPromiseStatus = "pending";return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this5.setAccessToken(e.result.accessToken), _this5._getAccessTokenPromiseStatus = "fulfilled", t(_this5.accessToken)) : (_this5._getAccessTokenPromiseStatus = "rejected", n(new A({ code: "AUTH_FAILED", message: "获取accessToken失败" })));});}, function (e) {return _this5._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);}), this._getAccessTokenPromise;} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this6 = this;var e = _ref.url,t = _ref.formData,n = _ref.name,s = _ref.filePath,r = _ref.fileType,o = _ref.onUploadProgress;return new Promise(function (i, a) {var c = _this6.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new A({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new A({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this7 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,n = _ref2$fileType === void 0 ? "image" : _ref2$fileType,s = _ref2.onUploadProgress,r = _ref2.config;if ("string" !== o(t)) throw new A({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });if (!(t = t.trim())) throw new A({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });if (/:\/\//.test(t)) throw new A({ code: "INVALID_PARAM", message: "cloudPath不合法" });var i = r && r.envType || this.config.envType;var a, c;return this.getOSSUploadOptionsFromPath({ env: i, filename: t }).then(function (t) {var r = t.result;a = r.id, c = "https://" + r.cdnDomain + "/" + r.ossPath;var o = { url: "https://" + r.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r.accessKeyId, Signature: r.signature, host: r.host, id: a, key: r.ossPath, policy: r.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n };return _this7.uploadFileToOSS(Object.assign({}, o, { onUploadProgress: s }));}).then(function () {return _this7.reportOSSUpload({ id: a });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: c }) : s(new A({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref4.fileList;return new Promise(function (t, n) {Array.isArray(e) && 0 !== e.length || n(new A({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return U;}();var x = { init: function init(e) {var t = new U(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };var D = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";var R;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(R || (R = {}));var q = function q() {};var L = function L() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t2 = function _t2() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: _t2 }), Object.defineProperty(e.promise, "catch", { get: _t2 }), e;}var t = new Promise(function (t, n) {e = function e(_e4, s) {return _e4 ? n(_e4) : t(s);};});return e.promise = t, e;};function F(e) {return void 0 === e;}function N(e) {return "[object Null]" === Object.prototype.toString.call(e);}var $;function M(e) {var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);var n;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e5 = _step.value;var _t3 = _e5.isMatch,_n = _e5.genAdapter,_s = _e5.runtime;if (_t3()) return { adapter: _n(), runtime: _s };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}($ || ($ = {}));var j = { adapter: null, runtime: void 0 },B = ["anonymousUuidKey"];var K = /*#__PURE__*/function (_q) {_inherits(K, _q);var _super3 = _createSuper(K);function K() {var _this8;_classCallCheck(this, K);_this8 = _super3.call(this), j.adapter.root.tcbObject || (j.adapter.root.tcbObject = {});return _this8;}_createClass(K, [{ key: "setItem", value: function setItem(e, t) {j.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return j.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete j.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete j.adapter.root.tcbObject;} }]);return K;}(q);function H(e, t) {switch (e) {case "local":return t.localStorage || new K();case "none":return new K();default:return t.sessionStorage || new K();}}var W = /*#__PURE__*/function () {function W(e) {_classCallCheck(this, W);if (!this._storage) {this._persistence = j.adapter.primaryStorage || e.persistence, this._storage = H(this._persistence, j.adapter);var _t4 = "access_token_".concat(e.env),_n2 = "access_token_expire_".concat(e.env),_s2 = "refresh_token_".concat(e.env),_r = "anonymous_uuid_".concat(e.env),_o = "login_type_".concat(e.env),_i = "user_info_".concat(e.env);this.keys = { accessTokenKey: _t4, accessTokenExpireKey: _n2, refreshTokenKey: _s2, anonymousUuidKey: _r, loginTypeKey: _o, userInfoKey: _i };}}_createClass(W, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var n = H(e, j.adapter);for (var _e6 in this.keys) {var _s3 = this.keys[_e6];if (t && B.includes(_e6)) continue;var _r2 = this._storage.getItem(_s3);F(_r2) || N(_r2) || (n.setItem(_s3, _r2), this._storage.removeItem(_s3));}this._storage = n;} }, { key: "setStore", value: function setStore(e, t, n) {if (!this._storage) return;var s = { version: n || "localCachev1", content: t },r = JSON.stringify(s);try {this._storage.setItem(e, r);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var n = this._storage.getItem(e);if (!n) return "";if (n.indexOf(t) >= 0) {return JSON.parse(n).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return W;}();var z = {},J = {};function V(e) {return z[e];}var Y = function Y(e, t) {_classCallCheck(this, Y);this.data = t || null, this.name = e;};var X = /*#__PURE__*/function (_Y) {_inherits(X, _Y);var _super4 = _createSuper(X);function X(e, t) {var _this9;_classCallCheck(this, X);_this9 = _super4.call(this, "error", { error: e, data: t }), _this9.error = e;return _this9;}return X;}(Y);var G = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, n) {if (n && n[e]) {var _s4 = n[e].indexOf(t);-1 !== _s4 && n[e].splice(_s4, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof X) return console.error(e.error), this;var n = "string" == typeof e ? new Y(e, t || {}) : e;var s = n.name;if (this._listens(s)) {n.target = this;var _e7 = this._listeners[s] ? _toConsumableArray(this._listeners[s]) : [];var _iterator2 = _createForOfIteratorHelper(_e7),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t5 = _step2.value;_t5.call(this, n);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function Q(e, t) {G.on(e, t);}function Z(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};G.fire(e, t);}function ee(e, t) {G.off(e, t);}var te = "loginStateChanged",ne = "loginStateExpire",se = "loginTypeChanged",re = "anonymousConverted",oe = "refreshAccessToken";var ie;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(ie || (ie = {}));var ae = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],ce = { "X-SDK-Version": "1.3.5" };function ue(e, t, n) {var s = e[t];e[t] = function (t) {var r = {},o = {};n.forEach(function (n) {var _n$call = n.call(e, t),s = _n$call.data,i = _n$call.headers;Object.assign(r, s), Object.assign(o, i);});var i = t.data;return i && function () {var e;if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, i), r);else for (var _e8 in r) {i.append(_e8, r[_e8]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), o), s.call(e, t);};}function he() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, ce), {}, { "x-seqid": e }) };}var le = /*#__PURE__*/function () {function le() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, le);var t;this.config = e, this._reqClass = new j.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = V(this.config.env), this._localCache = (t = this.config.env, J[t]), ue(this._reqClass, "post", [he]), ue(this._reqClass, "upload", [he]), ue(this._reqClass, "download", [he]);}_createClass(le, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this._reqClass.post(e);case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function post(_x) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this._reqClass.upload(e);case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function upload(_x2) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.download(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function download(_x3) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var e, t;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context4.prev = 1;_context4.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);t = _context4.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context4.next = 12;break;}throw t;case 12:return _context4.abrupt("return", e);case 13:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this$_cache$keys, e, t, n, s, r, o, i, a, _e9, _e10, _t6, _s5;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);o = this._cache.getStore(n);if (o) {_context5.next = 5;break;}throw new Error("未登录CloudBase");case 5:i = { refresh_token: o };_context5.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", i);case 8:a = _context5.sent;if (!a.data.code) {_context5.next = 21;break;}_e9 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e9 || "REFRESH_TOKEN_EXPIRED" === _e9 || "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 20;break;}if (!(this._cache.getStore(s) === ie.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 19;break;}_e10 = this._cache.getStore(r);_t6 = this._cache.getStore(n);_context5.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e10, refresh_token: _t6 });case 17:_s5 = _context5.sent;return _context5.abrupt("return", (this.setRefreshToken(_s5.refresh_token), this._refreshAccessToken()));case 19:Z(ne), this._cache.removeStore(n);case 20:throw new Error("\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code));case 21:if (!a.data.access_token) {_context5.next = 23;break;}return _context5.abrupt("return", (Z(oe), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context5.stop();}}}, _callee5, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this$_cache$keys2, e, t, n, s, r, o;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(n)) {_context6.next = 3;break;}throw new Error("refresh token不存在，登录状态异常");case 3:s = this._cache.getStore(e), r = this._cache.getStore(t), o = !0;_context6.t0 = this._shouldRefreshAccessTokenHook;if (!_context6.t0) {_context6.next = 9;break;}_context6.next = 8;return this._shouldRefreshAccessTokenHook(s, r);case 8:_context6.t0 = !_context6.sent;case 9:_context6.t1 = _context6.t0;if (!_context6.t1) {_context6.next = 12;break;}o = !1;case 12:return _context6.abrupt("return", (!s || !r || r < Date.now()) && o ? this.refreshAccessToken() : { accessToken: s, accessTokenExpire: r });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(e, t, n) {var s, r, o, _e11, i, _e12, _e13, a, c, u, h, l, d, f, p, g;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:s = "x-tcb-trace_".concat(this.config.env);r = "application/x-www-form-urlencoded";o = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === ae.indexOf(e))) {_context7.next = 10;break;}_e11 = this._cache.keys.refreshTokenKey;_context7.t0 = this._cache.getStore(_e11);if (!_context7.t0) {_context7.next = 10;break;}_context7.next = 9;return this.getAccessToken();case 9:o.access_token = _context7.sent.accessToken;case 10:if ("storage.uploadFile" === e) {i = new FormData();for (_e12 in i) {i.hasOwnProperty(_e12) && void 0 !== i[_e12] && i.append(_e12, o[_e12]);}r = "multipart/form-data";} else {r = "application/json", i = {};for (_e13 in o) {void 0 !== o[_e13] && (i[_e13] = o[_e13]);}}a = { headers: { "content-type": r } };n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);c = this._localCache.getStore(s);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, h = t.inQuery, l = t.search;d = { env: this.config.env };u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));f = function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var s = /\?/.test(t);var r = "";for (var _e14 in n) {"" === r ? !s && (t += "?") : r += "&", r += "".concat(_e14, "=").concat(encodeURIComponent(n[_e14]));}return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);}(D, "//tcb-api.tencentcloudapi.com/web", d);l && (f += l);_context7.next = 22;return this.post(_objectSpread({ url: f, data: i }, a));case 22:p = _context7.sent;g = p.header && p.header["x-tcb-trace"];if (!(g && this._localCache.setStore(s, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {_context7.next = 26;break;}throw new Error("network request error");case 26:return _context7.abrupt("return", p);case 27:case "end":return _context7.stop();}}}, _callee7, this);}));function request(_x4, _x5, _x6) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(e) {var t,n,_n3,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};_context8.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:n = _context8.sent;if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === ae.indexOf(e))) {_context8.next = 13;break;}_context8.next = 7;return this.refreshAccessToken();case 7:_context8.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_n3 = _context8.sent;if (!_n3.data.code) {_context8.next = 12;break;}throw new Error("[".concat(_n3.data.code, "] ").concat(_n3.data.message));case 12:return _context8.abrupt("return", _n3.data);case 13:if (!n.data.code) {_context8.next = 15;break;}throw new Error("[".concat(n.data.code, "] ").concat(n.data.message));case 15:return _context8.abrupt("return", n.data);case 16:case "end":return _context8.stop();}}}, _callee8, this);}));function send(_x7) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,n = _this$_cache$keys3.accessTokenExpireKey,s = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }]);return le;}();var de = {};function fe(e) {return de[e];}var pe = /*#__PURE__*/function () {function pe(e) {_classCallCheck(this, pe);this.config = e, this._cache = V(e.env), this._request = fe(e.env);}_createClass(pe, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,n = _this$_cache$keys4.accessTokenExpireKey,s = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,n = _this$_cache$keys5.accessTokenKey,s = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(n, e), this._cache.setStore(s, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var _yield$this$_request$, e;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context9.sent;e = _yield$this$_request$.data;return _context9.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context9.stop();}}}, _callee9, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return pe;}();var ge = /*#__PURE__*/function () {function ge(e) {_classCallCheck(this, ge);if (!e) throw new Error("envId is not defined");this._envId = e, this._cache = V(this._envId), this._request = fe(this._envId), this.setUserInfo();}_createClass(ge, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new Error("ticket must be string");return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new Error("username must be a string");return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var _yield$this$_request$2, e, t, n;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context10.sent;e = _yield$this$_request$2.data;t = !1;n = e.users;return _context10.abrupt("return", (n.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: n, hasPrimaryUid: t }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {var t, n, s, r, o, i, _yield$this$_request$3, a;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:t = e.nickName;n = e.gender;s = e.avatarUrl;r = e.province;o = e.country;i = e.city;_context11.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: n, avatarUrl: s, province: r, country: o, city: i });case 8:_yield$this$_request$3 = _context11.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context11.stop();}}}, _callee11, this);}));function update(_x8) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var _yield$this$_request$4, e;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context12.sent;e = _yield$this$_request$4.data;return _context12.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context12.stop();}}}, _callee12, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this10 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this10[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return ge;}();var me = /*#__PURE__*/function () {function me(e) {_classCallCheck(this, me);if (!e) throw new Error("envId is not defined");this._cache = V(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,n = _this$_cache$keys6.accessTokenKey,s = _this$_cache$keys6.accessTokenExpireKey,r = this._cache.getStore(t),o = this._cache.getStore(n),i = this._cache.getStore(s);this.credential = { refreshToken: r, accessToken: o, accessTokenExpire: i }, this.user = new ge(e);}_createClass(me, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === ie.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === ie.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === ie.WECHAT || this.loginType === ie.WECHAT_OPEN || this.loginType === ie.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return me;}();var ye = /*#__PURE__*/function (_pe) {_inherits(ye, _pe);var _super5 = _createSuper(ye);function ye() {_classCallCheck(this, ye);return _super5.apply(this, arguments);}_createClass(ye, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var _this$_cache$keys7, e, t, n, s, r, _e15;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;n = this._cache.getStore(e) || void 0;s = this._cache.getStore(t) || void 0;_context13.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: n, refresh_token: s });case 8:r = _context13.sent;if (!(r.uuid && r.refresh_token)) {_context13.next = 20;break;}this._setAnonymousUUID(r.uuid);this.setRefreshToken(r.refresh_token);_context13.next = 14;return this._request.refreshAccessToken();case 14:Z(te);Z(se, { env: this.config.env, loginType: ie.ANONYMOUS, persistence: "local" });_e15 = new me(this.config.env);_context13.next = 19;return _e15.user.refresh();case 19:return _context13.abrupt("return", _e15);case 20:throw new Error("匿名登录失败");case 21:case "end":return _context13.stop();}}}, _callee13, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {var _this$_cache$keys8, t, n, s, r, o;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;n = _this$_cache$keys8.refreshTokenKey;s = this._cache.getStore(t);r = this._cache.getStore(n);_context14.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s, refresh_token: r, ticket: e });case 7:o = _context14.sent;if (!o.refresh_token) {_context14.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(o.refresh_token);_context14.next = 13;return this._request.refreshAccessToken();case 13:Z(re, { env: this.config.env });Z(se, { loginType: ie.CUSTOM, persistence: "local" });return _context14.abrupt("return", { credential: { refreshToken: o.refresh_token } });case 16:throw new Error("匿名转化失败");case 17:case "end":return _context14.stop();}}}, _callee14, this);}));function linkAndRetrieveDataWithTicket(_x9) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,n = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, ie.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return ye;}(pe);var _e = /*#__PURE__*/function (_pe2) {_inherits(_e, _pe2);var _super6 = _createSuper(_e);function _e() {_classCallCheck(this, _e);return _super6.apply(this, arguments);}_createClass(_e, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {var t, n;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!("string" != typeof e)) {_context15.next = 2;break;}throw new Error("ticket must be a string");case 2:t = this._cache.keys.refreshTokenKey;_context15.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:n = _context15.sent;if (!n.refresh_token) {_context15.next = 15;break;}this.setRefreshToken(n.refresh_token);_context15.next = 10;return this._request.refreshAccessToken();case 10:Z(te);Z(se, { env: this.config.env, loginType: ie.CUSTOM, persistence: this.config.persistence });_context15.next = 14;return this.refreshUserInfo();case 14:return _context15.abrupt("return", new me(this.config.env));case 15:throw new Error("自定义登录失败");case 16:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn(_x10) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return _e;}(pe);var we = /*#__PURE__*/function (_pe3) {_inherits(we, _pe3);var _super7 = _createSuper(we);function we() {_classCallCheck(this, we);return _super7.apply(this, arguments);}_createClass(we, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(e, t) {var n, s, r, o, i;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!("string" != typeof e)) {_context16.next = 2;break;}throw new Error("email must be a string");case 2:n = this._cache.keys.refreshTokenKey;_context16.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 5:s = _context16.sent;r = s.refresh_token;o = s.access_token;i = s.access_token_expire;if (!r) {_context16.next = 22;break;}this.setRefreshToken(r);if (!(o && i)) {_context16.next = 15;break;}this.setAccessToken(o, i);_context16.next = 17;break;case 15:_context16.next = 17;return this._request.refreshAccessToken();case 17:_context16.next = 19;return this.refreshUserInfo();case 19:Z(te);Z(se, { env: this.config.env, loginType: ie.EMAIL, persistence: this.config.persistence });return _context16.abrupt("return", new me(this.config.env));case 22:throw s.code ? new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [".concat(s.code, "] ").concat(s.message)) : new Error("邮箱登录失败");case 23:case "end":return _context16.stop();}}}, _callee16, this);}));function signIn(_x11, _x12) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context17.stop();}}}, _callee17, this);}));function activate(_x13) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context18.stop();}}}, _callee18, this);}));function resetPasswordWithToken(_x14, _x15) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return we;}(pe);var ke = /*#__PURE__*/function (_pe4) {_inherits(ke, _pe4);var _super8 = _createSuper(ke);function ke() {_classCallCheck(this, ke);return _super8.apply(this, arguments);}_createClass(ke, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {var n, s, r, o, i;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!("string" != typeof e)) {_context19.next = 2;break;}throw new Error("username must be a string");case 2:"string" != typeof t && (t = "", console.warn("password is empty"));n = this._cache.keys.refreshTokenKey;_context19.next = 6;return this._request.send("auth.signIn", { loginType: ie.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 6:s = _context19.sent;r = s.refresh_token;o = s.access_token_expire;i = s.access_token;if (!r) {_context19.next = 23;break;}this.setRefreshToken(r);if (!(i && o)) {_context19.next = 16;break;}this.setAccessToken(i, o);_context19.next = 18;break;case 16:_context19.next = 18;return this._request.refreshAccessToken();case 18:_context19.next = 20;return this.refreshUserInfo();case 20:Z(te);Z(se, { env: this.config.env, loginType: ie.USERNAME, persistence: this.config.persistence });return _context19.abrupt("return", new me(this.config.env));case 23:throw s.code ? new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [".concat(s.code, "] ").concat(s.message)) : new Error("用户名密码登录失败");case 24:case "end":return _context19.stop();}}}, _callee19, this);}));function signIn(_x16, _x17) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return ke;}(pe);var Se = /*#__PURE__*/function () {function Se(e) {_classCallCheck(this, Se);this.config = e, this._cache = V(e.env), this._request = fe(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Q(se, this._onLoginTypeChanged);}_createClass(Se, [{ key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new ye(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new _e(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new we(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new ke(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", new ye(this.config).signIn());case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:return _context21.abrupt("return", new we(this.config).signIn(e, t));case 1:case "end":return _context21.stop();}}}, _callee21, this);}));function signInWithEmailAndPassword(_x18, _x19) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new ke(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new ye(this.config)), Q(re, this._onAnonymousConverted);_context22.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context22.abrupt("return", _context22.sent);case 4:case "end":return _context22.stop();}}}, _callee22, this);}));function linkAndRetrieveDataWithTicket(_x20) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23() {var _this$_cache$keys10, e, t, n, s, r;return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:if (!(this.loginType === ie.ANONYMOUS)) {_context23.next = 2;break;}throw new Error("匿名用户不支持登出操作");case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);if (s) {_context23.next = 5;break;}return _context23.abrupt("return");case 5:_context23.next = 7;return this._request.send("auth.logout", { refresh_token: s });case 7:r = _context23.sent;return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), Z(te), Z(se, { env: this.config.env, loginType: ie.NULL, persistence: this.config.persistence }), r));case 9:case "end":return _context23.stop();}}}, _callee23, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context24.stop();}}}, _callee24, this);}));function signUpWithEmailAndPassword(_x21, _x22) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context25.stop();}}}, _callee25, this);}));function sendPasswordResetEmail(_x23) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this11 = this;Q(te, function () {var t = _this11.hasLoginState();e.call(_this11, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {Q(ne, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {Q(oe, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {Q(re, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this12 = this;Q(se, function () {var t = _this12.hasLoginState();e.call(_this12, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26() {return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:_context26.next = 2;return this._request.getAccessToken();case 2:_context26.t0 = _context26.sent.accessToken;_context26.t1 = this.config.env;return _context26.abrupt("return", { accessToken: _context26.t0, env: _context26.t1 });case 5:case "end":return _context26.stop();}}}, _callee26, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new me(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {var _yield$this$_request$5, t;return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:if (!("string" != typeof e)) {_context27.next = 2;break;}throw new Error("username must be a string");case 2:_context27.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context27.sent;t = _yield$this$_request$5.data;return _context27.abrupt("return", t && t.isRegistered);case 7:case "end":return _context27.stop();}}}, _callee27, this);}));function isUsernameRegistered(_x24) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:return _context28.abrupt("return", new _e(this.config).signIn(e));case 1:case "end":return _context28.stop();}}}, _callee28, this);}));function signInWithTicket(_x25) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,n = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,n = _e$data.persistence,s = _e$data.env;s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }, { key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Se;}();var ve = function ve(e, t) {t = t || L();var n = fe(this.config.env),s = e.cloudPath,r = e.filePath,o = e.onUploadProgress,_e$fileType = e.fileType,i = _e$fileType === void 0 ? "image" : _e$fileType;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,h = _e$data2.fileId,l = _e$data2.cosFileId,d = e.requestId,f = { key: s, signature: c, "x-cos-meta-fileid": l, success_action_status: "201", "x-cos-security-token": u };n.upload({ url: a, data: f, file: r, name: s, fileType: i, onUploadProgress: o }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: d }) : t(new Error("STORAGE_REQUEST_FAIL: ".concat(e.data)));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},Te = function Te(e, t) {t = t || L();var n = fe(this.config.env),s = e.cloudPath;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},Ae = function Ae(_ref5, t) {var e = _ref5.fileList;if (t = t || L(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t7 = _step3.value;if (!_t7 || "string" != typeof _t7) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var n = { fileid_list: e };return fe(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Pe = function Pe(_ref6, t) {var e = _ref6.fileList;t = t || L(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });var n = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _s6 = _step4.value;"object" == typeof _s6 ? (_s6.hasOwnProperty("fileID") && _s6.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n.push({ fileid: _s6.fileID, max_age: _s6.maxAge })) : "string" == typeof _s6 ? n.push({ fileid: _s6 }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var s = { file_list: n };return fe(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ie = /*#__PURE__*/function () {var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29(_ref7, t) {var e, n, s, r;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:e = _ref7.fileID;_context29.next = 3;return Pe.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:n = _context29.sent.fileList[0];if (!("SUCCESS" !== n.code)) {_context29.next = 6;break;}return _context29.abrupt("return", t ? t(n) : new Promise(function (e) {e(n);}));case 6:s = fe(this.config.env);r = n.download_url;if (!(r = encodeURI(r), !t)) {_context29.next = 10;break;}return _context29.abrupt("return", s.download({ url: r }));case 10:_context29.t0 = t;_context29.next = 13;return s.download({ url: r });case 13:_context29.t1 = _context29.sent;(0, _context29.t0)(_context29.t1);case 15:case "end":return _context29.stop();}}}, _callee29, this);}));return function Ie(_x26, _x27) {return _ref8.apply(this, arguments);};}(),be = function be(_ref9, o) {var e = _ref9.name,t = _ref9.data,n = _ref9.query,s = _ref9.parse,r = _ref9.search;var i = o || L();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new Error("函数名不能为空"));var c = { inQuery: n, parse: s, search: r, function_name: e, request_data: a };return fe(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) i(null, e);else {var _t8 = e.data.response_data;if (s) i(null, { result: _t8, requestId: e.requestId });else try {_t8 = JSON.parse(e.data.response_data), i(null, { result: _t8, requestId: e.requestId });} catch (e) {i(new Error("response data must be json"));}}return i.promise;}).catch(function (e) {i(e);}), i.promise;},Ee = { timeout: 15e3, persistence: "session" },Oe = {};var Ce = /*#__PURE__*/function () {function Ce(e) {_classCallCheck(this, Ce);this.config = e || this.config, this.authObj = void 0;}_createClass(Ce, [{ key: "init", value: function init(e) {switch (j.adapter || (this.requestClient = new j.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, Ee), e), !0) {case this.config.timeout > 6e5:console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;}return new Ce(this.config);} }, { key: "auth", value: function auth() {var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref10.persistence;if (this.authObj) return this.authObj;var t = e || j.adapter.primaryStorage || Ee.persistence;var n;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;z[t] = new W(e), J[t] = new W(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), n = this.config, de[n.env] = new le(n), this.authObj = new Se(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return Q.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return ee.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return be.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return Ae.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return Pe.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return Ie.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return ve.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return Te.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {Oe[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {var n;return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:n = Oe[e];if (n) {_context30.next = 3;break;}throw Error("\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C"));case 3:_context30.next = 5;return n.invoke(t, this);case 5:return _context30.abrupt("return", _context30.sent);case 6:case "end":return _context30.stop();}}}, _callee30, this);}));function invokeExtension(_x28, _x29) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref11 = M(e) || {},t = _ref11.adapter,n = _ref11.runtime;t && (j.adapter = t), n && (j.runtime = n);} }]);return Ce;}();var Ue = new Ce();function xe(e, t, n) {void 0 === n && (n = {});var s = /\?/.test(t),r = "";for (var o in n) {"" === r ? !s && (t += "?") : r += "&", r += o + "=" + encodeURIComponent(n[o]);}return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;}var De = /*#__PURE__*/function () {function De() {_classCallCheck(this, De);}_createClass(De, [{ key: "post", value: function post(e) {var t = e.url,n = e.data,s = e.headers;return new Promise(function (e, r) {E.request({ url: xe("https:", t), data: n, method: "POST", header: s, success: function success(t) {e(t);}, fail: function fail(e) {r(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, n) {var s = e.url,r = e.file,o = e.data,i = e.headers,a = e.fileType,c = E.uploadFile({ url: xe("https:", s), name: "file", formData: Object.assign({}, o), filePath: r, fileType: a, header: i, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && o.success_action_status && (n.statusCode = parseInt(o.success_action_status, 10)), t(n);}, fail: function fail(e) {u && "mp-alipay" === h && console.warn("支付宝小程序开发工具上传腾讯云时无法准确判断是否上传成功，请使用真机测试"), n(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return De;}();var Re = { setItem: function setItem(e, t) {E.setStorageSync(e, t);}, getItem: function getItem(e) {return E.getStorageSync(e);}, removeItem: function removeItem(e) {E.removeStorageSync(e);}, clear: function clear() {E.clearStorageSync();} };var qe = { genAdapter: function genAdapter() {return { root: {}, reqClass: De, localStorage: Re, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };Ue.useAdapters(qe);var Le = Ue,Fe = Le.init;Le.init = function (e) {e.env = e.spaceId;var t = Fe.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;return t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = T(t[e]).bind(t);}), t;}, t.customAuth = t.auth, t;};var Ne = Le;function $e() {return { token: E.getStorageSync("uni_id_token") || E.getStorageSync("uniIdToken"), tokenExpired: E.getStorageSync("uni_id_token_expired") };}function Me() {if (!u || "h5" !== h) return;uni.getStorageSync("__LAST_DCLOUD_APPID") !== p && (uni.setStorageSync("__LAST_DCLOUD_APPID", p), console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), E.removeStorageSync("uni_id_token"), E.removeStorageSync("uniIdToken"), E.removeStorageSync("uni_id_token_expired"));}var je = /*#__PURE__*/function (_U) {_inherits(je, _U);var _super9 = _createSuper(je);function je() {_classCallCheck(this, je);return _super9.apply(this, arguments);}_createClass(je, [{ key: "getAccessToken", value: function getAccessToken() {var _this13 = this;return new Promise(function (e, t) {var n = "Anonymous_Access_token";_this13.setAccessToken(n), e(n);});} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };"auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = b.sign(n, this.config.clientSecret);var r = I();s["x-client-info"] = JSON.stringify(r);var _$e = $e(),o = _$e.token;return s["x-client-token"] = o, { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: JSON.parse(JSON.stringify(s)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref12) {var _this14 = this;var e = _ref12.url,t = _ref12.formData,n = _ref12.name,s = _ref12.filePath,r = _ref12.fileType,o = _ref12.onUploadProgress;return new Promise(function (i, a) {var c = _this14.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new A({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new A({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref13) {var _this15 = this;var e = _ref13.filePath,t = _ref13.cloudPath,_ref13$fileType = _ref13.fileType,n = _ref13$fileType === void 0 ? "image" : _ref13$fileType,s = _ref13.onUploadProgress;if (!t) throw new A({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var r;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,o = _t$result.url,i = _t$result.formData,a = _t$result.name;r = t.result.fileUrl;var c = { url: o, formData: i, name: a, filePath: e, fileType: n };return _this15.uploadFileToOSS(Object.assign({}, c, { onUploadProgress: s }));}).then(function () {return _this15.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: r }) : s(new A({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref14) {var e = _ref14.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref15.fileList;var t = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };return this.request(this.setupRequest(t));} }]);return je;}(U);var Be = { init: function init(e) {var t = new je(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };function Ke(_ref16) {var e = _ref16.data;var t;t = I();var n = JSON.parse(JSON.stringify(e || {}));if (Object.assign(n, { clientInfo: t }), !n.uniIdToken) {var _$e2 = $e(),_e16 = _$e2.token;_e16 && (n.uniIdToken = _e16);}return n;}function He(_ref17) {var _this16 = this;var e = _ref17.name,t = _ref17.data;var n = this.localAddress,s = this.localPort,r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],o = this.config.spaceId,i = "http://".concat(n, ":").concat(s, "/system/check-function"),a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);return new Promise(function (t, n) {E.request({ method: "POST", url: i, data: { name: e, platform: h, provider: r, spaceId: o }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });} });}).then(function () {var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref18.data;var _ref19 = e || {},t = _ref19.code,n = _ref19.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: n || "SYS_ERR" };}).then(function (_ref20) {var n = _ref20.code,s = _ref20.message;if (0 !== n) {switch (n) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");break;case "NETWORK_ERROR":{var _e17 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";throw console.error(_e17), new Error(_e17);}case "SWITCH_TO_CLOUD":break;default:{var _e18 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e18), new Error(_e18);}}return _this16._originCallFunction({ name: e, data: t });}return new Promise(function (e, n) {var s = Ke.call(_this16, { data: t });E.request({ method: "POST", url: a, data: { provider: r, platform: h, param: s }, success: function success() {var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},t = _ref21.statusCode,s = _ref21.data;return !t || t >= 400 ? n(new A({ code: s.code || "SYS_ERR", message: s.message || "request:fail" })) : e({ result: s });}, fail: function fail(e) {n(new A({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var We = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];var ze = /[\\^$.*+?()[\]{}|]/g,Je = RegExp(ze.source);function Ve(e, t, n) {return e.replace(new RegExp((s = t) && Je.test(s) ? s.replace(ze, "\\$&") : s, "g"), n);var s;}function Ye(_ref22) {var e = _ref22.functionName,t = _ref22.result,n = _ref22.logPvd;if (this.config.useDebugFunction && t && t.requestId) {var _s7 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t.requestId });console.log("[".concat(n, "-request]").concat(_s7, "[/").concat(n, "-request]"));}}function Xe(e) {var t = e.callFunction,n = function n(_n4) {var _this17 = this;var s = _n4.name;_n4.data = Ke.call(e, { data: _n4.data });var r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider];return t.call(this, _n4).then(function (e) {return Ye.call(_this17, { functionName: s, result: e, logPvd: r }), Promise.resolve(e);}, function (e) {return Ye.call(_this17, { functionName: s, result: e, logPvd: r }), e && e.message && (e.message = function () {var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref23$message = _ref23.message,e = _ref23$message === void 0 ? "" : _ref23$message,_ref23$extraInfo = _ref23.extraInfo,t = _ref23$extraInfo === void 0 ? {} : _ref23$extraInfo,_ref23$formatter = _ref23.formatter,n = _ref23$formatter === void 0 ? [] : _ref23$formatter;for (var _s8 = 0; _s8 < n.length; _s8++) {var _n$_s = n[_s8],_r3 = _n$_s.rule,_o2 = _n$_s.content,i = _n$_s.mode,_a = e.match(_r3);if (!_a) continue;var _c = _o2;for (var _e19 = 1; _e19 < _a.length; _e19++) {_c = Ve(_c, "{$".concat(_e19, "}"), _a[_e19]);}for (var _e20 in t) {_c = Ve(_c, "{".concat(_e20, "}"), t[_e20]);}return "replace" === i ? _c : e + _c;}return e;}({ message: "[".concat(_n4.name, "]: ").concat(e.message), formatter: We, extraInfo: { functionName: s } })), Promise.reject(e);});};e.callFunction = function (t) {var s;return u && e.debugInfo && !e.debugInfo.forceRemote && d ? (e._originCallFunction || (e._originCallFunction = n), s = He.call(this, t)) : s = n.call(this, t), Object.defineProperty(s, "result", { get: function get() {return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), s;};}var Ge = Symbol("CLIENT_DB_INTERNAL");function Qe(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Ge, e.__ob__ = void 0, new Proxy(e, { get: function get(e, n, s) {if ("_uniClient" === n) return null;if (n in e || "string" != typeof n) {var _t9 = e[n];return "function" == typeof _t9 ? _t9.bind(e) : _t9;}return t.get(e, n, s);} });}function Ze(e) {return { on: function on(t, n) {e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);}, off: function off(t, n) {e[t] = e[t] || [];var s = e[t].indexOf(n);-1 !== s && e[t].splice(s, 1);} };}var et = ["db.Geo", "db.command", "command.aggregate"];function tt(e, t) {return et.indexOf("".concat(e, ".").concat(t)) > -1;}function nt(e) {switch (o(e)) {case "array":return e.map(function (e) {return nt(e);});case "object":return e._internalType === Ge || Object.keys(e).forEach(function (t) {e[t] = nt(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}}var st = /*#__PURE__*/function () {function st(e, t, n) {_classCallCheck(this, st);this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;}_createClass(st, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: nt(e.$param) };}) };} }, { key: "getAction", value: function getAction() {var e = this.toJSON().$db.find(function (e) {return "action" === e.$method;});return e && e.$param && e.$param[0];} }, { key: "getCommand", value: function getCommand() {return { $db: this.toJSON().$db.filter(function (e) {return "action" !== e.$method;}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "remove", value: function remove() {return this._send("remove", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", value: function set() {throw new Error("clientDB禁止使用set方法");} }, { key: "_send", value: function _send(e, t) {var n = this.getAction(),s = this.getCommand();if (s.$db.push({ $method: e, $param: nt(t) }), u) {var _e21 = s.$db.find(function (e) {return "collection" === e.$method;}),_t10 = _e21 && _e21.$param;_t10 && 1 === _t10.length && "string" == typeof _e21.$param[0] && _e21.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");}return this._database._callCloudFunction({ action: n, command: s });} }, { key: "useAggregate", get: function get() {var e = this,t = !1;for (; e.prevStage;) {e = e.prevStage;var _n5 = e.content.$method;if ("aggregate" === _n5 || "pipeline" === _n5) {t = !0;break;}}return t;} }, { key: "count", get: function get() {if (!this.useAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return rt({ $method: "count", $param: nt(Array.from(arguments)) }, e, this._database);};} }]);return st;}();function rt(e, t, n) {return Qe(new st(e, t, n), { get: function get(e, t) {var s = "db";return e && e.content && (s = e.content.$method), tt(s, t) ? rt({ $method: t }, e, n) : function () {return rt({ $method: t, $param: nt(Array.from(arguments)) }, e, n);};} });}function ot(_ref24) {var e = _ref24.path,t = _ref24.method;return /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);this.param = Array.from(arguments);}_createClass(_class2, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class2;}();}var it = /*#__PURE__*/function (_ref25) {_inherits(it, _ref25);var _super10 = _createSuper(it);function it() {_classCallCheck(this, it);return _super10.apply(this, arguments);}_createClass(it, [{ key: "_callCloudFunction", value: function _callCloudFunction(_ref26) {var _this18 = this;var e = _ref26.action,t = _ref26.command,n = _ref26.multiCommand,s = _ref26.queryList;function r(e, t) {if (n && s) for (var _n6 = 0; _n6 < s.length; _n6++) {var _r4 = s[_n6];_r4.udb && "function" == typeof _r4.udb.setResult && (t ? _r4.udb.setResult(t) : _r4.udb.setResult(e.result.dataList[_n6]));}}var o = S(v("database", "invoke")),i = this._uniClient;return o.then(function () {return i.callFunction({ name: "DCloud-clientDB", data: { action: e, command: t, multiCommand: n } });}).then(function (e) {var _e$result = e.result,t = _e$result.code,n = _e$result.message,s = _e$result.token,o = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,i = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (i) for (var _e22 = 0; _e22 < i.length; _e22++) {var _i$_e = i[_e22],_t11 = _i$_e.level,_n7 = _i$_e.message,_s9 = _i$_e.detail,_r5 = console["app-plus" === h && "warn" === _t11 ? "error" : _t11] || console.log;var _o3 = "[System Info]" + _n7;_s9 && (_o3 = "".concat(_o3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s9)), _r5(_o3);}if (t) {var _e23 = new a(n, t);return _this18._callback("error", [_e23]), Promise.reject(_e23);}s && o && (!function () {var _ref27 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref27.token,t = _ref27.tokenExpired;e && E.setStorageSync("uni_id_token", e), t && E.setStorageSync("uni_id_token_expired", t);}({ token: s, tokenExpired: o }), _this18._callbackAuth("refreshToken", [{ token: s, tokenExpired: o }]), _this18._callback("refreshToken", [{ token: s, tokenExpired: o }]));var c = e.result.affectedDocs;return "number" == typeof c && Object.defineProperty(e.result, "affectedDocs", { get: function get() {return console.warn("affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"), c;} }), S(v("database", "success"), e).then(function () {return S(v("database", "complete"), e);}).then(function () {return r(e, null), Promise.resolve(e);});}, function (e) {var t = new a(e.message, e.code || "SYSTEM_ERROR");return _this18._callback("error", [t]), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), S(v("database", "fail"), e).then(function () {return S(v("database", "complete"), e);}).then(function () {return r(null, e), Promise.reject(e);});});} }]);return it;}( /*#__PURE__*/function () {function _class3() {var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref28$uniClient = _ref28.uniClient,e = _ref28$uniClient === void 0 ? {} : _ref28$uniClient;_classCallCheck(this, _class3);this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = m("_globalUniCloudDatabaseCallback")), this.auth = Ze(this._authCallBacks), Object.assign(this, Ze(this._dbCallBacks)), this.env = Qe({}, { get: function get(e, t) {return { $env: t };} }), this.Geo = Qe({}, { get: function get(e, t) {return ot({ path: ["Geo"], method: t });} }), this.serverDate = ot({ path: [], method: "serverDate" }), this.RegExp = ot({ path: [], method: "RegExp" });}_createClass(_class3, [{ key: "getCloudEnv", value: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");return { $env: e.replace("$cloudEnv_", "") };} }, { key: "_callback", value: function _callback(e, t) {var n = this._dbCallBacks;n[e] && n[e].forEach(function (e) {e.apply(void 0, _toConsumableArray(t));});} }, { key: "_callbackAuth", value: function _callbackAuth(e, t) {var n = this._authCallBacks;n[e] && n[e].forEach(function (e) {e.apply(void 0, _toConsumableArray(t));});} }, { key: "multiSend", value: function multiSend() {var e = Array.from(arguments),t = e.map(function (e) {var t = e.getAction(),n = e.getCommand();if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");return { action: t, command: n };});return this._callCloudFunction({ multiCommand: t, queryList: e });} }]);return _class3;}());function at(e) {e.database = function (t) {if (t && Object.keys(t).length > 0) return e.init(t).database();if (this._database) return this._database;var n = function (e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};return Qe(new e(t), { get: function get(e, t) {return tt("db", t) ? rt({ $method: t }, null, e) : function () {return rt({ $method: t, $param: nt(Array.from(arguments)) }, null, e);};} });}(it, { uniClient: e });return this._database = n, n;};}var ct;var ut = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",ht = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;function lt() {var e = $e().token || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var n;try {n = JSON.parse((s = t[1], decodeURIComponent(ct(s).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);}var s;return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;}ct = "function" != typeof atob ? function (e) {if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !ht.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");var t;e += "==".slice(2 - (3 & e.length));for (var n, s, r = "", o = 0; o < e.length;) {t = ut.indexOf(e.charAt(o++)) << 18 | ut.indexOf(e.charAt(o++)) << 12 | (n = ut.indexOf(e.charAt(o++))) << 6 | (s = ut.indexOf(e.charAt(o++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);}return r;} : atob;var dt = t(n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var n = "chooseAndUploadFile:ok",s = "chooseAndUploadFile:fail";function r(e, t) {return e.tempFiles.forEach(function (e, n) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function o(e, t, _ref29) {var s = _ref29.onChooseFile,r = _ref29.onUploadProgress;return t.then(function (e) {if (s) {var _t12 = s(e);if (void 0 !== _t12) return Promise.resolve(_t12).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: n, tempFilePaths: [], tempFiles: [] } : function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var r = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = n;var o = t.tempFiles,i = o.length;var a = 0;return new Promise(function (n) {for (; a < s;) {c();}function c() {var s = a++;if (s >= i) return void (!o.find(function (e) {return !e.url && !e.errMsg;}) && n(t));var u = o[s];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);} }).then(function (e) {u.url = e.fileID, s < i && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, s < i && c();});}});}(e, t, 5, r);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? o(e, function (e) {var t = e.count,n = e.sizeType,_e$sourceType = e.sourceType,o = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,i = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: n, sourceType: o, extension: i, success: function success(t) {e(r(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", s) });} });});}(t), t) : "video" === t.type ? o(e, function (e) {var t = e.camera,n = e.compressed,o = e.maxDuration,_e$sourceType2 = e.sourceType,i = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: n, maxDuration: o, sourceType: i, extension: a, success: function success(t) {var n = t.tempFilePath,s = t.duration,o = t.size,i = t.height,a = t.width;e(r({ errMsg: "chooseVideo:ok", tempFilePaths: [n], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: n, size: o, type: t.tempFile && t.tempFile.type || "", width: a, height: i, duration: s, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", s) });} });});}(t), t) : o(e, function (e) {var t = e.count,n = e.extension;return new Promise(function (e, o) {var i = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return o({ errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });i({ type: "all", count: t, extension: n, success: function success(t) {e(r(t));}, fail: function fail(e) {o({ errMsg: e.errMsg.replace("chooseFile:fail", s) });} });});}(t), t);};};}));var ft = "manual";function pt(e) {return { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, spaceInfo: { type: Object, default: function _default() {return {};} }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this19 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this19[t]);}), e;}, function (e, t) {if (_this19.loadtime === ft) return;var n = !1;var s = [];for (var _r6 = 2; _r6 < e.length; _r6++) {e[_r6] !== t[_r6] && (s.push(e[_r6]), n = !0);}e[0] !== t[0] && (_this19.mixinDatacomPage.current = _this19.pageCurrent), _this19.mixinDatacomPage.size = _this19.pageSize, _this19.onMixinDatacomPropsChange(n, s);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this20 = this;var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref30$getone = _ref30.getone,e = _ref30$getone === void 0 ? !1 : _ref30$getone,t = _ref30.success,n = _ref30.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {_this20.mixinDatacomLoading = !1;var _n$result = n.result,s = _n$result.data,r = _n$result.count;_this20.getcount && (_this20.mixinDatacomPage.count = r), _this20.mixinDatacomHasMore = s.length < _this20.pageSize;var o = e ? s.length ? s[0] : void 0 : s;_this20.mixinDatacomResData = o, t && t(o);}).catch(function (e) {_this20.mixinDatacomLoading = !1, _this20.mixinDatacomErrorMessage = e, n && n(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var _n8;var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var n = e.database(this.spaceInfo);var s = t.action || this.action;s && (n = n.action(s));var r = t.collection || this.collection;n = Array.isArray(r) ? (_n8 = n).collection.apply(_n8, _toConsumableArray(r)) : n.collection(r);var o = t.where || this.where;o && Object.keys(o).length && (n = n.where(o));var i = t.field || this.field;i && (n = n.field(i));var a = t.foreignKey || this.foreignKey;a && (n = n.foreignKey(a));var c = t.groupby || this.groupby;c && (n = n.groupBy(c));var u = t.groupField || this.groupField;u && (n = n.groupField(u));!0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());var h = t.orderby || this.orderby;h && (n = n.orderBy(h));var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,p = void 0 !== t.gettree ? t.gettree : this.gettree,g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return p && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (l - 1)).limit(d).get(m), n;} } };}function gt(_x30, _x31) {return _gt.apply(this, arguments);}function _gt() {_gt = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32(e, t) {var n, _e26, s;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:n = "http://".concat(e, ":").concat(t, "/system/ping");_context32.prev = 1;_context32.next = 4;return s = { url: n, timeout: 500 }, new Promise(function (e, t) {E.request(_objectSpread(_objectSpread({}, s), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e26 = _context32.sent;return _context32.abrupt("return", !(!_e26.data || 0 !== _e26.data.code));case 8:_context32.prev = 8;_context32.t0 = _context32["catch"](1);return _context32.abrupt("return", !1);case 11:case "end":return _context32.stop();}}}, _callee32, null, [[1, 8]]);}));return _gt.apply(this, arguments);}function mt(e) {if (e.initUniCloudStatus && "rejected" !== e.initUniCloudStatus) return;var t = Promise.resolve();var n;n = 1, t = new Promise(function (e, t) {setTimeout(function () {e();}, n);}), e.isReady = !1, e.isDefault = !1;var s = e.auth();e.initUniCloudStatus = "pending", e.initUniCloud = t.then(function () {return s.getLoginState();}).then(function (e) {return e ? Promise.resolve() : s.signInAnonymously();}).then(function () {if (!u) return Promise.resolve();if (u && e.debugInfo) {var _e$debugInfo = e.debugInfo,_t13 = _e$debugInfo.address,_n9 = _e$debugInfo.servePort;return function () {var _ref31 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31(e, t) {var n, _s10, _r7;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:_s10 = 0;case 1:if (!(_s10 < e.length)) {_context31.next = 11;break;}_r7 = e[_s10];_context31.next = 5;return gt(_r7, t);case 5:if (!_context31.sent) {_context31.next = 8;break;}n = _r7;return _context31.abrupt("break", 11);case 8:_s10++;_context31.next = 1;break;case 11:return _context31.abrupt("return", { address: n, port: t });case 12:case "end":return _context31.stop();}}}, _callee31);}));return function (_x32, _x33) {return _ref31.apply(this, arguments);};}()(_t13, _n9);}}).then(function () {var _ref32 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},t = _ref32.address,n = _ref32.port;if (!u) return Promise.resolve();if (t) e.localAddress = t, e.localPort = n;else if (e.debugInfo) {var _t14 = console["app-plus" === h ? "error" : "warn"];var _n10 = "";"remote" === e.debugInfo.initialLaunchType ? (e.debugInfo.forceRemote = !0, _n10 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs") : _n10 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs", "h5" === h && (_n10 += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), _t14(_n10);}}).then(function () {Me(), e.isReady = !0, e.initUniCloudStatus = "fulfilled";}).catch(function (t) {console.error(t), e.initUniCloudStatus = "rejected";});}var yt = new ( /*#__PURE__*/function () {function _class4() {_classCallCheck(this, _class4);}_createClass(_class4, [{ key: "init", value: function init(e) {var t = {};var n = !1 !== e.debugFunction && u && ("h5" === h && navigator.userAgent.indexOf("HBuilderX") > 0 || "app-plus" === h);switch (e.provider) {case "tencent":t = Ne.init(Object.assign(e, { useDebugFunction: n }));break;case "aliyun":t = x.init(Object.assign(e, { useDebugFunction: n }));break;case "private":t = Be.init(Object.assign(e, { useDebugFunction: n }));break;default:throw new Error("未提供正确的provider参数");}var s = l;u && s && !s.code && (t.debugInfo = s), mt(t), t.reInit = function () {mt(this);}, Xe(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {return t.call(this, e);};}(t), at(t), function (e) {e.getCurrentUserInfo = lt, e.chooseAndUploadFile = dt.initChooseAndUploadFile(e), Object.assign(e, { get mixinDatacom() {return pt(e);} });}(t);return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {if (!t[e]) return;var n = t[e];t[e] = function () {return t.reInit(), n.apply(t, Array.from(arguments));}, t[e] = T(t[e], e).bind(t);}), t.init = this.init, t;} }]);return _class4;}())();(function () {{var e = d;var t = {};if (1 === e.length) t = e[0], yt = yt.init(t), yt.isDefault = !0;else {var _t15 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"];var _n11;_n11 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : f ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t15.forEach(function (e) {yt[e] = function () {return console.error(_n11), Promise.reject(new A({ code: "SYS_ERR", message: _n11 }));};});}Object.assign(yt, { get mixinDatacom() {return pt(yt);} }), yt.addInterceptor = w, yt.removeInterceptor = k, u && "h5" === h && (window.uniCloud = yt);}})();var _t = yt;exports.default = _t;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 8), __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 9)["default"]))

/***/ }),
/* 8 */
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
/* 9 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 10));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

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
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


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
    mpOptions: {} };


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
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

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

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



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
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



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
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

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
      value: '' };

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

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



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
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

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

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
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

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
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
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


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

function setData(data, callback) {var _this = this;
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
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
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

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


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
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
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

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
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
      } });};for (var key in properties) {_loop(key);

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
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


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
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
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
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


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

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 8)))

/***/ }),
/* 10 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 11 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 12);

/***/ }),
/* 12 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 13);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 13 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 14 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
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
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
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
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
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
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
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
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
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
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
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
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
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
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
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
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
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
    } else
    {
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
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
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
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
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
  } else
  {
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
  } else
  if (isObject(jsonObj)) {
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
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 8)))

/***/ }),
/* 15 */
/*!*****************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/pages.json?{"type":"stat"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__96E8636" };exports.default = _default;

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
/*!**********************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/pages/index/top.vue?mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _top_vue_vue_type_template_id_39cbf53f_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top.vue?vue&type=template&id=39cbf53f&mpType=page */ 18);\n/* harmony import */ var _top_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top.vue?vue&type=script&lang=js&mpType=page */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _top_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _top_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _top_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _top_vue_vue_type_template_id_39cbf53f_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _top_vue_vue_type_template_id_39cbf53f_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _top_vue_vue_type_template_id_39cbf53f_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/top.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDs7O0FBRzdEO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3RvcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzljYmY1M2YmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RvcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdG9wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L3RvcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!****************************************************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/pages/index/top.vue?vue&type=template&id=39cbf53f&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_template_id_39cbf53f_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./top.vue?vue&type=template&id=39cbf53f&mpType=page */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_template_id_39cbf53f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_template_id_39cbf53f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_template_id_39cbf53f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_template_id_39cbf53f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/hualala/Documents/MyProject/myguess/pages/index/top.vue?vue&type=template&id=39cbf53f&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("image", {
      staticClass: _vm._$s(1, "sc", "bg"),
      attrs: { src: _vm._$s(1, "a-src", _vm.appImgs.bg_1), _i: 1 }
    }),
    _c("view", { staticClass: _vm._$s(2, "sc", "box"), attrs: { _i: 2 } }, [
      _c("scroll-view", {}, [
        _c(
          "view",
          _vm._l(_vm._$s(5, "f", { forItems: _vm.topList }), function(
            item,
            index,
            $20,
            $30
          ) {
            return _c(
              "view",
              {
                key: _vm._$s(5, "f", { forIndex: $20, key: index }),
                staticClass: _vm._$s("5-" + $30, "sc", "item-box h-flex-x"),
                class: _vm._$s("5-" + $30, "c", {
                  self: _vm.userInfo._id == item._id
                }),
                attrs: { _i: "5-" + $30 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("6-" + $30, "sc", "number"),
                    attrs: { _i: "6-" + $30 }
                  },
                  [
                    _vm._$s("7-" + $30, "i", index < 3)
                      ? _c("image", {
                          attrs: {
                            src: _vm._$s(
                              "7-" + $30,
                              "a-src",
                              _vm.topIcons[index]
                            ),
                            _i: "7-" + $30
                          }
                        })
                      : _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              "8-" + $30,
                              "sc",
                              "h-flex-x h-flex-center"
                            ),
                            attrs: { _i: "8-" + $30 }
                          },
                          [
                            _vm._v(
                              _vm._$s("8-" + $30, "t0-0", _vm._s(index + 1))
                            )
                          ]
                        )
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("9-" + $30, "sc", "h-flex-item-grow"),
                    attrs: { _i: "9-" + $30 }
                  },
                  [
                    _c("text", [
                      _vm._v(_vm._$s("10-" + $30, "t0-0", _vm._s(item.phone)))
                    ]),
                    _vm._$s("11-" + $30, "i", _vm.userInfo._id == item._id)
                      ? _c("view", {
                          staticClass: _vm._$s("11-" + $30, "sc", "me"),
                          attrs: { _i: "11-" + $30 }
                        })
                      : _vm._e()
                  ]
                ),
                _c("view", [
                  _c("text", [
                    _vm._v(_vm._$s("13-" + $30, "t0-0", _vm._s(item.pass)))
                  ])
                ]),
                _c("view", [
                  _c("text", [
                    _vm._v(_vm._$s("15-" + $30, "t0-0", _vm._s(item.gold)))
                  ])
                ])
              ]
            )
          }),
          0
        )
      ])
    ])
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!**********************************************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/pages/index/top.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./top.vue?vue&type=script&lang=js&mpType=page */ 21);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_top_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTh0QixDQUFnQixvdEJBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RvcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdG9wLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/hualala/Documents/MyProject/myguess/pages/index/top.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  components: {},\n\n\n  data: function data() {\n    return {\n      userInfo: {},\n      topIcons: [],\n      topList: [],\n      appImgs: {} };\n\n  },\n  onLoad: function onLoad() {var _this = this;\n    this.appImgs = uni.$hl.getAppImgs();\n\n    this.userInfo = uni.$hl.getUserInfo();\n\n    // 排行图标\n    for (var i = 4; i <= 6; i++) {\n      this.topIcons.push(this.appImgs[\"icon_\".concat(i)]);\n    }\n\n    this.topListOut = setTimeout(function () {\n      _this.getTopList();\n    }, 500);\n  },\n  onUnload: function onUnload() {\n    clearTimeout(this.topListOut);\n  },\n  methods: {\n    getTopList: function getTopList() {var _this2 = this;\n      uni.$hl.showLoading('加载中');\n\n      uniCloud.callFunction({\n        name: 'topList' }).\n      then(function (res) {\n        uni.hideLoading();\n        if (!res.result.code) {\n          return;\n        }\n        _this2.topList = res.result.data;\n\n      }).catch(function (err) {\n        uni.hideLoading();\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvdG9wLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQTtBQUNBLGdCQURBOzs7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGtCQUZBO0FBR0EsaUJBSEE7QUFJQSxpQkFKQTs7QUFNQSxHQVhBO0FBWUEsUUFaQSxvQkFZQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUZBLEVBRUEsR0FGQTtBQUdBLEdBekJBO0FBMEJBLFVBMUJBLHNCQTBCQTtBQUNBO0FBQ0EsR0E1QkE7QUE2QkE7QUFDQSxjQURBLHdCQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFEQTtBQUVBLFVBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FUQSxFQVNBLEtBVEEsQ0FTQTtBQUNBO0FBQ0EsT0FYQTtBQVlBLEtBaEJBLEVBN0JBLEUiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8aW1hZ2UgY2xhc3M9XCJiZ1wiIDpzcmM9XCJhcHBJbWdzLmJnXzFcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJveFwiPlxyXG5cdFx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXk9XCJ0cnVlXCI+XHJcblx0XHRcdFx0PHZpZXcgc3R5bGU9XCJwYWRkaW5nOiAyMHJweCAzMHJweDtcIj5cclxuXHRcdFx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHRvcExpc3RcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cIml0ZW0tYm94IGgtZmxleC14XCIgOmNsYXNzPVwieyAnc2VsZic6dXNlckluZm8uX2lkID09IGl0ZW0uX2lkIH1cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJudW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInRvcEljb25zW2luZGV4XVwiIG1vZGU9XCJhc3BlY3RGaXRcIiB2LWlmPVwiaW5kZXg8M1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoLWZsZXgteCBoLWZsZXgtY2VudGVyXCIgdi1lbHNlPnt7aW5kZXgrMX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaC1mbGV4LWl0ZW0tZ3Jvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PueUqOaIt++8mnt7aXRlbS5waG9uZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVcIiB2LWlmPVwidXNlckluZm8uX2lkID09IGl0ZW0uX2lkXCI+5oiR6Ieq5bexPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwibWFyZ2luOiAwIDAgMCAyMDsgZm9udC1zaXplOiAyNHJweDt3aWR0aDogMTIwcnB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PuWFs+WNoTp7e2l0ZW0ucGFzc319PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwibWFyZ2luOiAwIDAgMCAyMDsgZm9udC1zaXplOiAyNHJweDt3aWR0aDogMTIwcnB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PumHkeW4gTp7e2l0ZW0uZ29sZH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czp7XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dXNlckluZm86e30sXHJcblx0XHRcdFx0dG9wSWNvbnM6W10sXHJcblx0XHRcdFx0dG9wTGlzdDpbXSxcclxuXHRcdFx0XHRhcHBJbWdzOnt9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdHRoaXMuYXBwSW1ncyA9IHVuaS4kaGwuZ2V0QXBwSW1ncygpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0dGhpcy51c2VySW5mbyA9IHVuaS4kaGwuZ2V0VXNlckluZm8oKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIOaOkuihjOWbvuagh1xyXG5cdFx0XHRmb3IobGV0IGkgPSA0O2k8PTY7aSsrKXtcclxuXHRcdFx0XHR0aGlzLnRvcEljb25zLnB1c2godGhpcy5hcHBJbWdzW2BpY29uXyR7aX1gXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMudG9wTGlzdE91dCA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHR0aGlzLmdldFRvcExpc3QoKTtcclxuXHRcdFx0fSw1MDApO1xyXG5cdFx0fSxcclxuXHRcdG9uVW5sb2FkKCkge1xyXG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy50b3BMaXN0T3V0KTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdldFRvcExpc3QoKXtcclxuXHRcdFx0XHR1bmkuJGhsLnNob3dMb2FkaW5nKCfliqDovb3kuK0nKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdCAgICBuYW1lOiAndG9wTGlzdCdcclxuXHRcdFx0XHR9KS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0aWYoIXJlcy5yZXN1bHQuY29kZSl7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMudG9wTGlzdCA9IHJlcy5yZXN1bHQuZGF0YTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pLmNhdGNoKChlcnIpPT57XHJcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHQuYmd7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHQuYm94e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0ei1pbmRleDogMjtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcclxuXHRcdD4gc2Nyb2xsLXZpZXd7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Lml0ZW0tYm94e1xyXG5cdFx0XHRwYWRkaW5nOiAyMHJweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFxyXG5cdFx0XHQmICsgLml0ZW0tYm94e1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQmLnNlbGZ7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgMCA1cHggI2ZmOTgwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Lm51bWJlcntcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDMwcnB4O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdD4gaW1hZ2V7XHJcblx0XHRcdFx0XHR3aWR0aDogNjBycHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDYwcnB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ+IHZpZXd7XHJcblx0XHRcdFx0XHR3aWR0aDogNjBycHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDYwcnB4O1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDA7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Lm1le1xyXG5cdFx0XHRcdGNvbG9yOiAjREQ1MjREO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogNDhycHg7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogMTVycHg7XHJcblx0XHRcdFx0bGVmdDogMjgwcnB4O1xyXG5cdFx0XHRcdG9wYWNpdHk6IDAuNzU7XHJcblx0XHRcdFx0dHJhbnNmb3JtOnJvdGF0ZSgxMGRlZykgc2tld1goMjVkZWcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!***********************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/pages/index/play.vue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _play_vue_vue_type_template_id_4947c54c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play.vue?vue&type=template&id=4947c54c&mpType=page */ 23);\n/* harmony import */ var _play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play.vue?vue&type=script&lang=js&mpType=page */ 25);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _play_vue_vue_type_template_id_4947c54c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _play_vue_vue_type_template_id_4947c54c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _play_vue_vue_type_template_id_4947c54c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/play.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3BsYXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5NDdjNTRjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wbGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9wbGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L3BsYXkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*****************************************************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/pages/index/play.vue?vue&type=template&id=4947c54c&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./play.vue?vue&type=template&id=4947c54c&mpType=page */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/hualala/Documents/MyProject/myguess/pages/index/play.vue?vue&type=template&id=4947c54c&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("image", {
      staticClass: _vm._$s(1, "sc", "page-bg"),
      attrs: { src: _vm._$s(1, "a-src", _vm.appImgs.bg_1), _i: 1 }
    }),
    _c("view", { staticClass: _vm._$s(2, "sc", "box"), attrs: { _i: 2 } }, [
      _c(
        "view",
        {
          staticClass: _vm._$s(3, "sc", "h-flex-x box-1 h-flex-space"),
          style: _vm._$s(3, "s", { marginRight: _vm.menuButton.right }),
          attrs: { _i: 3 }
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(4, "sc", "h-flex-x label"),
              attrs: { _i: 4 }
            },
            [
              _c("view", [
                _c("image", {
                  attrs: { src: _vm._$s(6, "a-src", _vm.appImgs.icon_1), _i: 6 }
                })
              ]),
              _c("view", [_vm._v(_vm._$s(7, "t0-0", _vm._s(_vm.gold.value)))])
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(8, "sc", "h-flex-x label"),
              attrs: { _i: 8 }
            },
            [
              _c("view", [
                _c("image", {
                  attrs: {
                    src: _vm._$s(10, "a-src", _vm.appImgs.icon_2),
                    _i: 10
                  }
                })
              ]),
              _c("view", [
                _vm._v(
                  _vm._$s(
                    11,
                    "t0-0",
                    _vm._s(_vm.pass.default + _vm.pass.value + 1)
                  )
                )
              ])
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(12, "sc", "box-2"), attrs: { _i: 12 } },
        [
          _c("image", {
            staticClass: _vm._$s(13, "sc", "bg"),
            attrs: { src: _vm._$s(13, "a-src", _vm.appImgs.img_1), _i: 13 }
          }),
          _c("image", {
            staticClass: _vm._$s(14, "sc", "img"),
            attrs: { src: _vm._$s(14, "a-src", _vm.pass.image), _i: 14 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(15, "sc", "box-3 h-flex-x h-flex-center"),
          attrs: { _i: 15 }
        },
        [
          _c("view", {
            staticClass: _vm._$s(16, "sc", "btn transform-scale"),
            attrs: { _i: 16 },
            on: { click: _vm.copyShareContent }
          }),
          _vm._l(_vm._$s(17, "f", { forItems: _vm.selected.list }), function(
            item,
            index,
            $20,
            $30
          ) {
            return _c(
              "view",
              {
                key: _vm._$s(17, "f", { forIndex: $20, key: index }),
                staticClass: _vm._$s(
                  "17-" + $30,
                  "sc",
                  "option transform-scale"
                ),
                attrs: { _i: "17-" + $30 },
                on: {
                  click: function($event) {
                    return _vm.cancelPicker(index)
                  }
                }
              },
              [
                _c("image", {
                  attrs: {
                    src: _vm._$s("18-" + $30, "a-src", _vm.appImgs.icon_8),
                    _i: "18-" + $30
                  }
                }),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("19-" + $30, "sc", "value"),
                    attrs: { _i: "19-" + $30 }
                  },
                  [
                    _vm._v(
                      _vm._$s("19-" + $30, "t0-0", _vm._s(item.text || ""))
                    )
                  ]
                )
              ]
            )
          }),
          _c("view", {
            staticClass: _vm._$s(20, "sc", "btn transform-scale"),
            attrs: { _i: 20 },
            on: { click: _vm.remind }
          })
        ],
        2
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(21, "sc", "box-4 h-flex-x h-flex-6 h-flex-wrap"),
          attrs: { _i: 21 }
        },
        _vm._l(_vm._$s(22, "f", { forItems: _vm.select.list }), function(
          item,
          index,
          $21,
          $31
        ) {
          return _c(
            "view",
            { key: _vm._$s(22, "f", { forIndex: $21, key: index }) },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    "23-" + $31,
                    "sc",
                    "option transform-scale"
                  ),
                  attrs: { _i: "23-" + $31 },
                  on: {
                    click: function($event) {
                      return _vm.picker(index)
                    }
                  }
                },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s("24-" + $31, "a-src", _vm.appImgs.icon_7),
                      _i: "24-" + $31
                    }
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s("25-" + $31, "sc", "value"),
                      attrs: { _i: "25-" + $31 }
                    },
                    [_vm._v(_vm._$s("25-" + $31, "t0-0", _vm._s(item.text)))]
                  )
                ]
              )
            ]
          )
        }),
        0
      )
    ]),
    _c(
      "view",
      {
        staticClass: _vm._$s(26, "sc", "global-popup next-pop"),
        style: _vm._$s(26, "s", {
          display: _vm.nextPop.show ? "block" : "none"
        }),
        attrs: { _i: 26 }
      },
      [
        _c("view", {
          staticClass: _vm._$s(27, "sc", "shade"),
          attrs: { _i: 27 }
        }),
        _c(
          "view",
          { staticClass: _vm._$s(28, "sc", "content"), attrs: { _i: 28 } },
          [
            _c("image", {
              attrs: { src: _vm._$s(29, "a-src", _vm.appImgs.img_3), _i: 29 }
            }),
            _c("view", [
              _c(
                "view",
                { staticClass: _vm._$s(31, "sc", "answer"), attrs: { _i: 31 } },
                [
                  _vm._v(
                    _vm._$s(31, "t0-0", _vm._s(_vm.nextPopData.answer || ""))
                  )
                ]
              ),
              _c("scroll-view", {}, [
                _c("view", [
                  _vm._v(
                    _vm._$s(33, "t0-0", _vm._s(_vm.nextPopData.explain || ""))
                  )
                ]),
                _c("view", [
                  _vm._v(
                    _vm._$s(
                      34,
                      "t0-0",
                      _vm._s(_vm.nextPopData.provenance || "")
                    )
                  )
                ])
              ]),
              _c("image", {
                staticClass: _vm._$s(35, "sc", "btn transform-scale"),
                attrs: { src: _vm._$s(35, "a-src", _vm.appImgs.btn_7), _i: 35 },
                on: { click: _vm.nextPass }
              })
            ])
          ]
        )
      ]
    ),
    _vm._$s(36, "i", _vm.showGift)
      ? _c("image", {
          staticClass: _vm._$s(36, "sc", "gift"),
          attrs: { src: _vm._$s(36, "a-src", _vm.appImgs.img_4), _i: 36 },
          on: { click: _vm.onGiftClick }
        })
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 25 */
/*!***********************************************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/pages/index/play.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./play.vue?vue&type=script&lang=js&mpType=page */ 26);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQSt0QixDQUFnQixxdEJBQUcsRUFBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BsYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BsYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/hualala/Documents/MyProject/myguess/pages/index/play.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  components: {},\n\n\n  data: function data() {\n    return {\n      appImgs: {},\n      userInfo: {},\n      gold: {\n        value: 0 },\n\n      pass: {\n        image: '',\n        // 默认关数\n        default: 0,\n        // 当前关数\n        value: 0 },\n\n      selected: {\n        list: [{}, {}, {}, {}] },\n\n      select: {\n        list: [] },\n\n      resourceList: [],\n      nextPop: {\n        show: false },\n\n\n      showGift: false };\n\n  },\n  computed: {\n    nextPopData: function nextPopData() {\n      if (this.resourceList.length < 1) {\n        return {};\n      }\n\n      return this.resourceList[this.pass.value];\n    },\n    // 分享内容\n    shareContent: function shareContent() {\n      var count = (this.pass.default || 0) + (this.pass.value || 0);\n      return \"\\u6211\\u5728\\u3010\\u770B\\u56FE\\u731C\\u6210\\u8BED\\u3011\\u6E38\\u620F\\u4E2D\\u5DF2\\u95EF\\u8FC7 \".concat(count, \" \\u5173\\u5566\\uFF0C\\n\\u70B9\\u51FB\\u94FE\\u63A5 https://ext.dcloud.net.cn/plugin?id=5045\\n\\u4E00\\u8D77\\u6765\\u73A9\\u5427\\uFF01\");\n    },\n    // 小程序胶囊\n    menuButton: function menuButton() {\n\n\n\n\n\n\n      return {};\n    } },\n\n  onLoad: function onLoad() {\n    if (!uni.$hl.isLogin()) {\n      uni.reLaunch({\n        url: '/pages/index/index' });\n\n      return;\n    }\n    this.appImgs = uni.$hl.getAppImgs();\n\n    this.userInfo = uni.$hl.getUserInfo();\n\n    // 初始化默认关卡\n    this.setDefaultPage();\n    this.initPage();\n    this.initPass();\n    this.getResource(this.getPage());\n\n\n    this.startGift();\n  },\n  // 页面卸载\n  onUnload: function onUnload() {\n    // 删除延时器\n    clearTimeout(this.startGiftTimeout);\n    clearTimeout(this.endGiftTimeout);\n  },\n  methods: {\n    // 设置默认页码\n    setDefaultPage: function setDefaultPage() {\n      var pass = this.userInfo.pass || 0;\n      this.pass.default = parseInt(pass / 10, 10) * 10;\n      this.pass.value = pass % 10;\n    },\n    // 获取页码\n    getPage: function getPage() {\n      var page = Math.floor((this.pass.default + this.pass.value) / 10) + 1;\n      return page;\n    },\n    // 初始化页面\n    initPage: function initPage() {\n\n    },\n    // 初始化关卡\n    initPass: function initPass() {\n      // 初始金币\n      this.gold.value = this.userInfo.gold || 100;\n    },\n    // 获取资源\n    getResource: function getResource() {var _this = this;var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n      uniCloud.callFunction({\n        name: 'resource',\n        data: {\n          size: 10,\n          page: page } }).\n\n      then(function (res) {\n        if (res.result && res.result.data.length > 0) {\n          _this.resourceList = _this.resourceList.concat(res.result.data);\n          _this.setPlayInfo();\n        }\n      }).catch(function (err) {\n        __f__(\"log\", err, \" at pages/index/play.vue:187\");\n      });\n    },\n    // 设置游戏信息\n    setPlayInfo: function setPlayInfo() {\n      var item = this.resourceList[this.pass.value];\n      var select = \"\".concat(item.answer).concat(item.option);\n\n      /* 随机排序待选项 */\n      var info = select.split(\"\").sort(function () {\n        return Math.random() > 0.5 ? -1 : 1;\n      });\n\n      var itemArr = info.map(function (v, k) {\n        return {\n          text: v,\n          index: k };\n\n      });\n\n      this.selected.list = [{}, {}, {}, {}];\n      this.select.list = itemArr;\n\n      // 关卡图片\n      this.pass.image = uni.$hl.joinImgUrl(item.img);\n\n      if (this.pass.value + 3 >= this.resourceList.length) {\n        var page = this.getPage() + 1;\n        this.getResource(page);\n      }\n    },\n    // 选择\n    picker: function picker(index, errorIndex) {var _this2 = this;\n      var item = this.select.list[index];\n      if (!item.text) {\n        return;\n      }\n      var findIndex = this.selected.list.findIndex(function (v, k) {\n        return !v.text;\n      });\n      if (errorIndex >= 0) {\n        findIndex = errorIndex;\n      }\n\n\n      if (findIndex >= 0) {\n        this.$set(this.selected.list, findIndex, item);\n        this.$nextTick(function () {\n          _this2.$set(_this2.select.list, index, {});\n          _this2.verify();\n        });\n      }\n    },\n    // 答案校验\n    verify: function verify() {\n      var item = this.resourceList[this.pass.value];\n      var pickerAnswer = '';\n      this.selected.list.forEach(function (v, k) {\n        if (v.text) {\n          pickerAnswer += v.text;\n        }\n      });\n      if (item.answer == pickerAnswer) {\n        this.nextPop.show = true;\n        this.reported();\n      }\n    },\n    // 取消选择\n    cancelPicker: function cancelPicker(index) {var _this3 = this;\n      var item = this.selected.list[index];\n      if (!item.text) {\n        return;\n      }\n\n      this.$set(this.select.list, item.index, item);\n\n      this.$nextTick(function () {\n        _this3.$set(_this3.selected.list, index, {});\n      });\n    },\n    // 下一关\n    nextPass: function nextPass() {\n      this.nextPop.show = false;\n      this.pass.value++;\n      this.gold.value += 5;\n      this.setPlayInfo();\n    },\n    // 提示\n    remind: function remind() {var _this4 = this;\n      if (this.gold.value < 10) {\n        uni.$hl.showToast('金币不足');\n        return;\n      }\n\n      // 查找错误位置\n      var errorIndex = this.selected.list.findIndex(function (item, index) {\n        return item.text != _this4.resourceList[_this4.pass.value].answer.charAt(index);\n      });\n      // 正确的文字\n      var successText = this.resourceList[this.pass.value].answer.charAt(errorIndex);\n\n      // 当前已选项中是否已存在答案\n      var selectedIndex = -1;\n      for (var i = errorIndex; i < this.selected.list.length; i++) {\n        if (this.selected.list[i].text && this.selected.list[i].text == successText) {\n          selectedIndex = i;\n          break;\n        }\n      }\n      if (selectedIndex >= 0) {\n        this.cancelPicker(selectedIndex);\n      }\n\n      // 正常选项的位置\n      var successIndex = this.select.list.findIndex(function (item, index) {\n        return item.text == successText;\n      });\n      this.gold.value -= 10;\n      this.picker(successIndex, errorIndex);\n    },\n    // 上报\n    reported: function reported() {var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;\n      var pass = this.pass.default + this.pass.value + p;\n      var gold = this.gold.value + g;\n\n      uniCloud.callFunction({\n        name: 'reported',\n        data: {\n          id: this.userInfo._id,\n          pass: pass,\n          gold: gold } }).\n\n      then(function (res) {\n        __f__(\"log\", res, \" at pages/index/play.vue:320\");\n      }).catch(function (err) {\n\n      });\n    },\n    copyShareContent: function copyShareContent() {\n\n\n\n\n\n\n\n\n\n      uni.setClipboardData({\n        data: this.shareContent,\n        success: function success() {\n          uni.$hl.showToast('分享口令复制成功', 'success');\n        } });\n\n\n    },\n    // 礼物点击\n    onGiftClick: function onGiftClick() {\n      clearTimeout(this.endGiftTimeout);\n      this.showGift = false;\n\n\n      this.createAd();\n\n\n\n\n\n\n\n\n\n\n\n\n\n    },\n    // 开启礼物动画,30秒分钟一次\n    startGift: function startGift() {var _this5 = this;\n      this.startGiftTimeout = setTimeout(function () {\n        _this5.showGift = true;\n\n        _this5.endGiftTimeout = setTimeout(function () {\n          _this5.showGift = false;\n          _this5.startGift();\n        }, 8 * 1000 + 100);\n      }, 0.5 * 60 * 1000);\n    },\n    // 创建 激励视频 广告\n    createAd: function createAd() {var _this6 = this;\n      if (this._isLoaded) {\n        this._rewardedVideoAd.show();\n        return;\n      }\n      this._isLoaded = false;\n      // 仅用于HBuilder基座调试 adpid: '1507000689'\n      var adpid = '1507000689111';\n      var rewardedVideoAd = this._rewardedVideoAd = uni.createRewardedVideoAd({\n        adpid: adpid });\n\n\n      // 当激励视频被关闭时，默认预载下一条数据，加载完成时仍然触发 `onLoad` 事件\n      rewardedVideoAd.onLoad(function () {\n        __f__(\"log\", '广告加载成功', \" at pages/index/play.vue:390\");\n        if (!_this6._isLoaded) {\n          _this6._rewardedVideoAd.show();\n        }\n        _this6._isLoaded = true;\n      });\n      rewardedVideoAd.onError(function (err) {\n        __f__(\"log\", '广告加载失败', err, \" at pages/index/play.vue:397\");\n        _this6.startGift();\n        uni.showToast({\n          icon: 'none',\n          title: '测试广告id无法使用' });\n\n      });\n      rewardedVideoAd.onClose(function (res) {\n        __f__(\"log\", '广告被关闭', res, \" at pages/index/play.vue:405\");\n        var fn = function fn() {\n          if (res.isEnded) {\n            uni.showToast({\n              icon: 'success',\n              title: '获得视频奖励',\n              success: function success() {\n                // 增加30金币\n                _this6.reported(0, 30);\n                _this6.gold.value += 30;\n              } });\n\n          } else {\n            uni.showToast({\n              icon: 'none',\n              title: '未获得视频奖励' });\n\n          }\n\n          _this6.startGift();\n        };\n        setTimeout(fn, 500);\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 7)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 27)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvcGxheS52dWUiXSwibmFtZXMiOlsiY29tcG9uZW50cyIsImRhdGEiLCJhcHBJbWdzIiwidXNlckluZm8iLCJnb2xkIiwidmFsdWUiLCJwYXNzIiwiaW1hZ2UiLCJkZWZhdWx0Iiwic2VsZWN0ZWQiLCJsaXN0Iiwic2VsZWN0IiwicmVzb3VyY2VMaXN0IiwibmV4dFBvcCIsInNob3ciLCJzaG93R2lmdCIsImNvbXB1dGVkIiwibmV4dFBvcERhdGEiLCJsZW5ndGgiLCJzaGFyZUNvbnRlbnQiLCJjb3VudCIsIm1lbnVCdXR0b24iLCJvbkxvYWQiLCJ1bmkiLCIkaGwiLCJpc0xvZ2luIiwicmVMYXVuY2giLCJ1cmwiLCJnZXRBcHBJbWdzIiwiZ2V0VXNlckluZm8iLCJzZXREZWZhdWx0UGFnZSIsImluaXRQYWdlIiwiaW5pdFBhc3MiLCJnZXRSZXNvdXJjZSIsImdldFBhZ2UiLCJzdGFydEdpZnQiLCJvblVubG9hZCIsImNsZWFyVGltZW91dCIsInN0YXJ0R2lmdFRpbWVvdXQiLCJlbmRHaWZ0VGltZW91dCIsIm1ldGhvZHMiLCJwYXJzZUludCIsInBhZ2UiLCJNYXRoIiwiZmxvb3IiLCJ1bmlDbG91ZCIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJzaXplIiwidGhlbiIsInJlcyIsInJlc3VsdCIsImNvbmNhdCIsInNldFBsYXlJbmZvIiwiY2F0Y2giLCJlcnIiLCJpdGVtIiwiYW5zd2VyIiwib3B0aW9uIiwiaW5mbyIsInNwbGl0Iiwic29ydCIsInJhbmRvbSIsIml0ZW1BcnIiLCJtYXAiLCJ2IiwiayIsInRleHQiLCJpbmRleCIsImpvaW5JbWdVcmwiLCJpbWciLCJwaWNrZXIiLCJlcnJvckluZGV4IiwiZmluZEluZGV4IiwiJHNldCIsIiRuZXh0VGljayIsInZlcmlmeSIsInBpY2tlckFuc3dlciIsImZvckVhY2giLCJyZXBvcnRlZCIsImNhbmNlbFBpY2tlciIsIm5leHRQYXNzIiwicmVtaW5kIiwic2hvd1RvYXN0IiwiY2hhckF0Iiwic3VjY2Vzc1RleHQiLCJzZWxlY3RlZEluZGV4IiwiaSIsInN1Y2Nlc3NJbmRleCIsInAiLCJnIiwiaWQiLCJfaWQiLCJjb3B5U2hhcmVDb250ZW50Iiwic2V0Q2xpcGJvYXJkRGF0YSIsInN1Y2Nlc3MiLCJvbkdpZnRDbGljayIsImNyZWF0ZUFkIiwic2V0VGltZW91dCIsIl9pc0xvYWRlZCIsIl9yZXdhcmRlZFZpZGVvQWQiLCJhZHBpZCIsInJld2FyZGVkVmlkZW9BZCIsImNyZWF0ZVJld2FyZGVkVmlkZW9BZCIsIm9uRXJyb3IiLCJpY29uIiwidGl0bGUiLCJvbkNsb3NlIiwiZm4iLCJpc0VuZGVkIl0sIm1hcHBpbmdzIjoiK0lBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNkQSxZQUFVLEVBQUUsRUFERTs7O0FBSWRDLE1BSmMsa0JBSVA7QUFDTixXQUFPO0FBQ05DLGFBQU8sRUFBRSxFQURIO0FBRU5DLGNBQVEsRUFBRSxFQUZKO0FBR05DLFVBQUksRUFBRTtBQUNMQyxhQUFLLEVBQUUsQ0FERixFQUhBOztBQU1OQyxVQUFJLEVBQUU7QUFDTEMsYUFBSyxFQUFFLEVBREY7QUFFTDtBQUNBQyxlQUFPLEVBQUUsQ0FISjtBQUlMO0FBQ0FILGFBQUssRUFBRSxDQUxGLEVBTkE7O0FBYU5JLGNBQVEsRUFB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b250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGNvbXBvbmVudHM6IHtcblxuXHR9LFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcHBJbWdzOiB7fSxcblx0XHRcdHVzZXJJbmZvOiB7fSxcblx0XHRcdGdvbGQ6IHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHR9LFxuXHRcdFx0cGFzczoge1xuXHRcdFx0XHRpbWFnZTogJycsXG5cdFx0XHRcdC8vIOm7mOiupOWFs+aVsFxuXHRcdFx0XHRkZWZhdWx0OiAwLFxuXHRcdFx0XHQvLyDlvZPliY3lhbPmlbBcblx0XHRcdFx0dmFsdWU6IDBcblx0XHRcdH0sXG5cdFx0XHRzZWxlY3RlZDoge1xuXHRcdFx0XHRsaXN0OiBbe30sIHt9LCB7fSwge31dXG5cdFx0XHR9LFxuXHRcdFx0c2VsZWN0OiB7XG5cdFx0XHRcdGxpc3Q6IFtdXG5cdFx0XHR9LFxuXHRcdFx0cmVzb3VyY2VMaXN0OiBbXSxcblx0XHRcdG5leHRQb3A6IHtcblx0XHRcdFx0c2hvdzogZmFsc2VcblxuXHRcdFx0fSxcblx0XHRcdHNob3dHaWZ0OiBmYWxzZVxuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRuZXh0UG9wRGF0YSgpIHtcblx0XHRcdGlmICh0aGlzLnJlc291cmNlTGlzdC5sZW5ndGggPCAxKSB7XG5cdFx0XHRcdHJldHVybiB7fTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMucmVzb3VyY2VMaXN0W3RoaXMucGFzcy52YWx1ZV07XG5cdFx0fSxcblx0XHQvLyDliIbkuqvlhoXlrrlcblx0XHRzaGFyZUNvbnRlbnQoKSB7XG5cdFx0XHRsZXQgY291bnQgPSAodGhpcy5wYXNzLmRlZmF1bHQgfHwgMCkgKyAodGhpcy5wYXNzLnZhbHVlIHx8IDApO1xuXHRcdFx0cmV0dXJuIGDmiJHlnKjjgJDnnIvlm77njJzmiJDor63jgJHmuLjmiI/kuK3lt7Lpl6/ov4cgJHtjb3VudH0g5YWz5ZWm77yMXFxu54K55Ye76ZO+5o6lIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTUwNDVcXG7kuIDotbfmnaXnjqnlkKfvvIFgO1xuXHRcdH0sXG5cdFx0Ly8g5bCP56iL5bqP6IO25ZuKXG5cdFx0bWVudUJ1dHRvbigpIHtcblxuXG5cblxuXG5cblx0XHRcdHJldHVybiB7fTtcblx0XHR9XG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHRpZiAoIXVuaS4kaGwuaXNMb2dpbigpKSB7XG5cdFx0XHR1bmkucmVMYXVuY2goe1xuXHRcdFx0XHR1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXG5cdFx0XHR9KVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmFwcEltZ3MgPSB1bmkuJGhsLmdldEFwcEltZ3MoKTtcblxuXHRcdHRoaXMudXNlckluZm8gPSB1bmkuJGhsLmdldFVzZXJJbmZvKCk7XG5cblx0XHQvLyDliJ3lp4vljJbpu5jorqTlhbPljaFcblx0XHR0aGlzLnNldERlZmF1bHRQYWdlKCk7XG5cdFx0dGhpcy5pbml0UGFnZSgpO1xuXHRcdHRoaXMuaW5pdFBhc3MoKTtcblx0XHR0aGlzLmdldFJlc291cmNlKHRoaXMuZ2V0UGFnZSgpKTtcblxuXG5cdFx0dGhpcy5zdGFydEdpZnQoKTtcblx0fSxcblx0Ly8g6aG16Z2i5Y246L29XG5cdG9uVW5sb2FkKCl7XG5cdFx0Ly8g5Yig6Zmk5bu25pe25ZmoXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuc3RhcnRHaWZ0VGltZW91dCk7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuZW5kR2lmdFRpbWVvdXQpO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Ly8g6K6+572u6buY6K6k6aG156CBXG5cdFx0c2V0RGVmYXVsdFBhZ2UoKSB7XG5cdFx0XHRsZXQgcGFzcyA9IHRoaXMudXNlckluZm8ucGFzcyB8fCAwO1xuXHRcdFx0dGhpcy5wYXNzLmRlZmF1bHQgPSBwYXJzZUludChwYXNzIC8gMTAsIDEwKSAqIDEwO1xuXHRcdFx0dGhpcy5wYXNzLnZhbHVlID0gcGFzcyAlIDEwO1xuXHRcdH0sXG5cdFx0Ly8g6I635Y+W6aG156CBXG5cdFx0Z2V0UGFnZSgpIHtcblx0XHRcdGxldCBwYWdlID0gTWF0aC5mbG9vcigodGhpcy5wYXNzLmRlZmF1bHQrdGhpcy5wYXNzLnZhbHVlKSAvIDEwKSArIDE7XG5cdFx0XHRyZXR1cm4gcGFnZTtcblx0XHR9LFxuXHRcdC8vIOWIneWni+WMlumhtemdolxuXHRcdGluaXRQYWdlKCkge1xuXG5cdFx0fSxcblx0XHQvLyDliJ3lp4vljJblhbPljaFcblx0XHRpbml0UGFzcygpIHtcblx0XHRcdC8vIOWIneWni+mHkeW4gVxuXHRcdFx0dGhpcy5nb2xkLnZhbHVlID0gdGhpcy51c2VySW5mby5nb2xkIHx8IDEwMDtcblx0XHR9LFxuXHRcdC8vIOiOt+WPlui1hOa6kFxuXHRcdGdldFJlc291cmNlKHBhZ2UgPSAxKSB7XG5cdFx0XHR1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xuXHRcdFx0XHRuYW1lOiAncmVzb3VyY2UnLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0c2l6ZTogMTAsXG5cdFx0XHRcdFx0cGFnZVxuXHRcdFx0XHR9XG5cdFx0XHR9KS50aGVuKChyZXMpID0+IHtcblx0XHRcdFx0aWYgKHJlcy5yZXN1bHQgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHR0aGlzLnJlc291cmNlTGlzdCA9IHRoaXMucmVzb3VyY2VMaXN0LmNvbmNhdChyZXMucmVzdWx0LmRhdGEpO1xuXHRcdFx0XHRcdHRoaXMuc2V0UGxheUluZm8oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8vIOiuvue9rua4uOaIj+S/oeaBr1xuXHRcdHNldFBsYXlJbmZvKCkge1xuXHRcdFx0bGV0IGl0ZW0gPSB0aGlzLnJlc291cmNlTGlzdFt0aGlzLnBhc3MudmFsdWVdO1xuXHRcdFx0bGV0IHNlbGVjdCA9IGAke2l0ZW0uYW5zd2VyfSR7aXRlbS5vcHRpb259YDtcblxuXHRcdFx0Lyog6ZqP5py65o6S5bqP5b6F6YCJ6aG5ICovXG5cdFx0XHRsZXQgaW5mbyA9IHNlbGVjdC5zcGxpdChcIlwiKS5zb3J0KCgpID0+IHtcblx0XHRcdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDE7XG5cdFx0XHR9KTtcblxuXHRcdFx0bGV0IGl0ZW1BcnIgPSBpbmZvLm1hcCgodiwgaykgPT4ge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRleHQ6IHYsXG5cdFx0XHRcdFx0aW5kZXg6IGtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblxuXHRcdFx0dGhpcy5zZWxlY3RlZC5saXN0ID0gW3t9LCB7fSwge30sIHt9XTtcblx0XHRcdHRoaXMuc2VsZWN0Lmxpc3QgPSBpdGVtQXJyO1xuXG5cdFx0XHQvLyDlhbPljaHlm77niYdcblx0XHRcdHRoaXMucGFzcy5pbWFnZSA9IHVuaS4kaGwuam9pbkltZ1VybChpdGVtLmltZyk7XG5cblx0XHRcdGlmICh0aGlzLnBhc3MudmFsdWUgKyAzID49IHRoaXMucmVzb3VyY2VMaXN0Lmxlbmd0aCkge1xuXHRcdFx0XHRsZXQgcGFnZSA9IHRoaXMuZ2V0UGFnZSgpICsgMTtcblx0XHRcdFx0dGhpcy5nZXRSZXNvdXJjZShwYWdlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIOmAieaLqVxuXHRcdHBpY2tlcihpbmRleCwgZXJyb3JJbmRleCkge1xuXHRcdFx0bGV0IGl0ZW0gPSB0aGlzLnNlbGVjdC5saXN0W2luZGV4XTtcblx0XHRcdGlmICghaXRlbS50ZXh0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBmaW5kSW5kZXggPSB0aGlzLnNlbGVjdGVkLmxpc3QuZmluZEluZGV4KCh2LCBrKSA9PiB7XG5cdFx0XHRcdHJldHVybiAhdi50ZXh0O1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAoZXJyb3JJbmRleCA+PSAwKSB7XG5cdFx0XHRcdGZpbmRJbmRleCA9IGVycm9ySW5kZXg7XG5cdFx0XHR9XG5cblxuXHRcdFx0aWYgKGZpbmRJbmRleCA+PSAwKSB7XG5cdFx0XHRcdHRoaXMuJHNldCh0aGlzLnNlbGVjdGVkLmxpc3QsIGZpbmRJbmRleCwgaXRlbSk7XG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5zZWxlY3QubGlzdCwgaW5kZXgsIHt9KTtcblx0XHRcdFx0XHR0aGlzLnZlcmlmeSgpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8g562U5qGI5qCh6aqMXG5cdFx0dmVyaWZ5KCkge1xuXHRcdFx0bGV0IGl0ZW0gPSB0aGlzLnJlc291cmNlTGlzdFt0aGlzLnBhc3MudmFsdWVdO1xuXHRcdFx0bGV0IHBpY2tlckFuc3dlciA9ICcnO1xuXHRcdFx0dGhpcy5zZWxlY3RlZC5saXN0LmZvckVhY2goKHYsIGspID0+IHtcblx0XHRcdFx0aWYgKHYudGV4dCkge1xuXHRcdFx0XHRcdHBpY2tlckFuc3dlciArPSB2LnRleHQ7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0aWYgKGl0ZW0uYW5zd2VyID09IHBpY2tlckFuc3dlcikge1xuXHRcdFx0XHR0aGlzLm5leHRQb3Auc2hvdyA9IHRydWU7XG5cdFx0XHRcdHRoaXMucmVwb3J0ZWQoKVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8g5Y+W5raI6YCJ5oupXG5cdFx0Y2FuY2VsUGlja2VyKGluZGV4KSB7XG5cdFx0XHRsZXQgaXRlbSA9IHRoaXMuc2VsZWN0ZWQubGlzdFtpbmRleF07XG5cdFx0XHRpZiAoIWl0ZW0udGV4dCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJHNldCh0aGlzLnNlbGVjdC5saXN0LCBpdGVtLmluZGV4LCBpdGVtKTtcblxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHR0aGlzLiRzZXQodGhpcy5zZWxlY3RlZC5saXN0LCBpbmRleCwge30pO1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOS4i+S4gOWFs1xuXHRcdG5leHRQYXNzKCkge1xuXHRcdFx0dGhpcy5uZXh0UG9wLnNob3cgPSBmYWxzZTtcblx0XHRcdHRoaXMucGFzcy52YWx1ZSsrO1xuXHRcdFx0dGhpcy5nb2xkLnZhbHVlICs9IDU7XG5cdFx0XHR0aGlzLnNldFBsYXlJbmZvKCk7XG5cdFx0fSxcblx0XHQvLyDmj5DnpLpcblx0XHRyZW1pbmQoKSB7XG5cdFx0XHRpZiAodGhpcy5nb2xkLnZhbHVlIDwgMTApIHtcblx0XHRcdFx0dW5pLiRobC5zaG93VG9hc3QoJ+mHkeW4geS4jei2sycpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIOafpeaJvumUmeivr+S9jee9rlxuXHRcdFx0bGV0IGVycm9ySW5kZXggPSB0aGlzLnNlbGVjdGVkLmxpc3QuZmluZEluZGV4KChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gaXRlbS50ZXh0ICE9IHRoaXMucmVzb3VyY2VMaXN0W3RoaXMucGFzcy52YWx1ZV0uYW5zd2VyLmNoYXJBdChpbmRleCk7XG5cdFx0XHR9KTtcblx0XHRcdC8vIOato+ehrueahOaWh+Wtl1xuXHRcdFx0bGV0IHN1Y2Nlc3NUZXh0ID0gdGhpcy5yZXNvdXJjZUxpc3RbdGhpcy5wYXNzLnZhbHVlXS5hbnN3ZXIuY2hhckF0KGVycm9ySW5kZXgpO1xuXG5cdFx0XHQvLyDlvZPliY3lt7LpgInpobnkuK3mmK/lkKblt7LlrZjlnKjnrZTmoYhcblx0XHRcdGxldCBzZWxlY3RlZEluZGV4ID0gLTE7XG5cdFx0XHRmb3IgKGxldCBpID0gZXJyb3JJbmRleDsgaSA8IHRoaXMuc2VsZWN0ZWQubGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZC5saXN0W2ldLnRleHQgJiYgdGhpcy5zZWxlY3RlZC5saXN0W2ldLnRleHQgPT0gc3VjY2Vzc1RleHQpIHtcblx0XHRcdFx0XHRzZWxlY3RlZEluZGV4ID0gaTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHNlbGVjdGVkSW5kZXggPj0gMCkge1xuXHRcdFx0XHR0aGlzLmNhbmNlbFBpY2tlcihzZWxlY3RlZEluZGV4KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8g5q2j5bi46YCJ6aG555qE5L2N572uXG5cdFx0XHRsZXQgc3VjY2Vzc0luZGV4ID0gdGhpcy5zZWxlY3QubGlzdC5maW5kSW5kZXgoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdHJldHVybiBpdGVtLnRleHQgPT0gc3VjY2Vzc1RleHQ7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuZ29sZC52YWx1ZSAtPSAxMDtcblx0XHRcdHRoaXMucGlja2VyKHN1Y2Nlc3NJbmRleCwgZXJyb3JJbmRleCk7XG5cdFx0fSxcblx0XHQvLyDkuIrmiqVcblx0XHRyZXBvcnRlZChwID0gMSxnID0gNSkge1xuXHRcdFx0bGV0IHBhc3MgPSB0aGlzLnBhc3MuZGVmYXVsdCt0aGlzLnBhc3MudmFsdWUgKyBwO1xuXHRcdFx0bGV0IGdvbGQgPSB0aGlzLmdvbGQudmFsdWUgKyBnO1xuXG5cdFx0XHR1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xuXHRcdFx0XHRuYW1lOiAncmVwb3J0ZWQnLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0aWQ6IHRoaXMudXNlckluZm8uX2lkLFxuXHRcdFx0XHRcdHBhc3MsXG5cdFx0XHRcdFx0Z29sZFxuXHRcdFx0XHR9XG5cdFx0XHR9KS50aGVuKChyZXMpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdH0pLmNhdGNoKChlcnIpID0+IHtcblxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRjb3B5U2hhcmVDb250ZW50KCkge1xuXG5cblxuXG5cblxuXG5cblxuXHRcdFx0dW5pLnNldENsaXBib2FyZERhdGEoe1xuXHRcdFx0XHRkYXRhOiB0aGlzLnNoYXJlQ29udGVudCxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dW5pLiRobC5zaG93VG9hc3QoJ+WIhuS6q+WPo+S7pOWkjeWItuaIkOWKnycsICdzdWNjZXNzJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0fSxcblx0XHQvLyDnpLznianngrnlh7tcblx0XHRvbkdpZnRDbGljaygpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmVuZEdpZnRUaW1lb3V0KTtcblx0XHRcdHRoaXMuc2hvd0dpZnQgPSBmYWxzZTtcblx0XHRcdFxuXG5cdFx0XHR0aGlzLmNyZWF0ZUFkKCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0XHR9LFxuXHRcdC8vIOW8gOWQr+ekvOeJqeWKqOeUuywzMOenkuWIhumSn+S4gOasoVxuXHRcdHN0YXJ0R2lmdCgpIHtcblx0XHRcdHRoaXMuc3RhcnRHaWZ0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNob3dHaWZ0ID0gdHJ1ZTtcblxuXHRcdFx0XHR0aGlzLmVuZEdpZnRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zaG93R2lmdCA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuc3RhcnRHaWZ0KCk7XG5cdFx0XHRcdH0sICg4ICogMTAwMCArIDEwMCkpO1xuXHRcdFx0fSwgKDAuNSAqIDYwICogMTAwMCkpO1xuXHRcdH0sXG5cdFx0Ly8g5Yib5bu6IOa/gOWKseinhumikSDlub/lkYpcblx0XHRjcmVhdGVBZCgpIHtcblx0XHRcdGlmKHRoaXMuX2lzTG9hZGVkKXtcblx0XHRcdFx0dGhpcy5fcmV3YXJkZWRWaWRlb0FkLnNob3coKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5faXNMb2FkZWQgPSBmYWxzZTtcblx0XHRcdC8vIOS7heeUqOS6jkhCdWlsZGVy5Z+65bqn6LCD6K+VIGFkcGlkOiAnMTUwNzAwMDY4OSdcblx0XHRcdGxldCBhZHBpZCA9ICcxNTA3MDAwNjg5MTExJ1xuXHRcdFx0bGV0IHJld2FyZGVkVmlkZW9BZCA9IHRoaXMuX3Jld2FyZGVkVmlkZW9BZCA9IHVuaS5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xuXHRcdFx0XHRhZHBpZFxuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdC8vIOW9k+a/gOWKseinhumikeiiq+WFs+mXreaXtu+8jOm7mOiupOmihOi9veS4i+S4gOadoeaVsOaNru+8jOWKoOi9veWujOaIkOaXtuS7jeeEtuinpuWPkSBgb25Mb2FkYCDkuovku7Zcblx0XHRcdHJld2FyZGVkVmlkZW9BZC5vbkxvYWQoKCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygn5bm/5ZGK5Yqg6L295oiQ5YqfJylcblx0XHRcdFx0aWYoIXRoaXMuX2lzTG9hZGVkKXtcblx0XHRcdFx0XHR0aGlzLl9yZXdhcmRlZFZpZGVvQWQuc2hvdygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcblx0XHRcdH0pXG5cdFx0XHRyZXdhcmRlZFZpZGVvQWQub25FcnJvcigoZXJyKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCflub/lkYrliqDovb3lpLHotKUnLCBlcnIpO1xuXHRcdFx0XHR0aGlzLnN0YXJ0R2lmdCgpO1xuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRpY29uOidub25lJyxcblx0XHRcdFx0XHR0aXRsZTon5rWL6K+V5bm/5ZGKaWTml6Dms5Xkvb/nlKgnXG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHRcdFx0cmV3YXJkZWRWaWRlb0FkLm9uQ2xvc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygn5bm/5ZGK6KKr5YWz6ZetJywgcmVzKVxuXHRcdFx0XHRsZXQgZm4gPSAoKT0+e1xuXHRcdFx0XHRcdGlmKHJlcy5pc0VuZGVkKXtcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRpY29uOidzdWNjZXNzJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6J+iOt+W+l+inhumikeWlluWKsScsXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6KCk9Pntcblx0XHRcdFx0XHRcdFx0XHQvLyDlop7liqAzMOmHkeW4gVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVwb3J0ZWQoMCwzMCk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5nb2xkLnZhbHVlICs9IDMwO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdGljb246J25vbmUnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTon5pyq6I635b6X6KeG6aKR5aWW5YqxJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5zdGFydEdpZnQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRUaW1lb3V0KGZuLDUwMCk7XG5cdFx0XHR9KVxuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
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
/* 28 */
/*!***********************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/pages/user/login.vue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_vue_vue_type_template_id_a6be29a4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=a6be29a4&mpType=page */ 29);\n/* harmony import */ var _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js&mpType=page */ 31);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _login_vue_vue_type_template_id_a6be29a4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _login_vue_vue_type_template_id_a6be29a4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _login_vue_vue_type_template_id_a6be29a4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/user/login.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNmJlMjlhNCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3VzZXIvbG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!*****************************************************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/pages/user/login.vue?vue&type=template&id=a6be29a4&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_a6be29a4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=a6be29a4&mpType=page */ 30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_a6be29a4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_a6be29a4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_a6be29a4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_a6be29a4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 30 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/hualala/Documents/MyProject/myguess/pages/user/login.vue?vue&type=template&id=a6be29a4&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("image", {
      staticClass: _vm._$s(1, "sc", "bg"),
      attrs: { src: _vm._$s(1, "a-src", _vm.appImgs.bg_1), _i: 1 }
    }),
    _c(
      "form",
      {
        staticClass: _vm._$s(2, "sc", "login"),
        attrs: { _i: 2 },
        on: { submit: _vm.formSubmit }
      },
      [
        _c(
          "view",
          { staticClass: _vm._$s(3, "sc", "item h-flex-x"), attrs: { _i: 3 } },
          [
            _c("view"),
            _c(
              "view",
              {
                staticClass: _vm._$s(5, "sc", "h-flex-item-grow"),
                attrs: { _i: 5 }
              },
              [_c("input", {})]
            )
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(7, "sc", "item h-flex-x"), attrs: { _i: 7 } },
          [
            _c("view"),
            _c(
              "view",
              {
                staticClass: _vm._$s(9, "sc", "h-flex-item-grow"),
                attrs: { _i: 9 }
              },
              [_c("input", {})]
            )
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(11, "sc", "item"), attrs: { _i: 11 } },
          [_c("button", {})]
        )
      ]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 31 */
/*!***********************************************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/pages/user/login.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js&mpType=page */ 32);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWd1QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/hualala/Documents/MyProject/myguess/pages/user/login.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      appImgs: {} };\n\n  },\n  onLoad: function onLoad() {\n    this.appImgs = uni.$hl.getAppImgs();\n  },\n  methods: {\n    formSubmit: function formSubmit(e) {var _this = this;\n      var formdata = e.detail.value;\n\n      if (!uni.$hl.regExps.mobile.test(formdata.phone)) {\n        uni.$hl.showToast('请输入有效的手机号码');\n        return;\n      }\n\n      if (!uni.$hl.regExps.befitPwd.test(formdata.password)) {\n        uni.$hl.showToast('请输入合法的密码');\n        return;\n      }\n\n      uni.$hl.showLoading('登录中');\n      uniCloud.callFunction({\n        name: 'login',\n        data: formdata }).\n      then(function (res) {\n        uni.hideLoading();\n        if (res.result.code != 0) {\n          uni.$hl.showToast(res.result.message || '帐号与密码不匹配');\n          return;\n        }\n\n        uni.$hl.setUserInfo(res.result.userInfo);\n        __f__(\"log\", res.result.userInfo, \" at pages/user/login.vue:60\");\n        uni.$hl.showToast('登录成功', 'success');\n        _this.loginTimeout = setTimeout(function () {\n          uni.reLaunch({\n            url: '/pages/index/index' });\n\n        }, 1500);\n      }).catch(function (err) {\n        uni.hideLoading();\n        uni.$hl.showToast('登录失败，请重试');\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 7)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 27)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdXNlci9sb2dpbi52dWUiXSwibmFtZXMiOlsiZGF0YSIsImFwcEltZ3MiLCJvbkxvYWQiLCJ1bmkiLCIkaGwiLCJnZXRBcHBJbWdzIiwibWV0aG9kcyIsImZvcm1TdWJtaXQiLCJlIiwiZm9ybWRhdGEiLCJkZXRhaWwiLCJ2YWx1ZSIsInJlZ0V4cHMiLCJtb2JpbGUiLCJ0ZXN0IiwicGhvbmUiLCJzaG93VG9hc3QiLCJiZWZpdFB3ZCIsInBhc3N3b3JkIiwic2hvd0xvYWRpbmciLCJ1bmlDbG91ZCIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCJyZXN1bHQiLCJjb2RlIiwibWVzc2FnZSIsInNldFVzZXJJbmZvIiwidXNlckluZm8iLCJsb2dpblRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVMYXVuY2giLCJ1cmwiLCJjYXRjaCIsImVyciJdLCJtYXBwaW5ncyI6IitJQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCO0FBQ2RBLE1BRGMsa0JBQ1A7QUFDTixXQUFPO0FBQ05DLGFBQU8sRUFBQyxFQURGLEVBQVA7O0FBR0EsR0FMYTtBQU1kQyxRQU5jLG9CQU1MO0FBQ1IsU0FBS0QsT0FBTCxHQUFlRSxHQUFHLENBQUNDLEdBQUosQ0FBUUMsVUFBUixFQUFmO0FBQ0EsR0FSYTtBQVNkQyxTQUFPLEVBQUU7QUFDUkMsY0FBVSxFQUFFLG9CQUFTQyxDQUFULEVBQVk7QUFDWCxVQUFJQyxRQUFRLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUF4Qjs7QUFFWixVQUFHLENBQUNSLEdBQUcsQ0FBQ0MsR0FBSixDQUFRUSxPQUFSLENBQWdCQyxNQUFoQixDQUF1QkMsSUFBdkIsQ0FBNEJMLFFBQVEsQ0FBQ00sS0FBckMsQ0FBSixFQUFnRDtBQUMvQ1osV0FBRyxDQUFDQyxHQUFKLENBQVFZLFNBQVIsQ0FBa0IsWUFBbEI7QUFDQTtBQUNBOztBQUVELFVBQUcsQ0FBQ2IsR0FBRyxDQUFDQyxHQUFKLENBQVFRLE9BQVIsQ0FBZ0JLLFFBQWhCLENBQXlCSCxJQUF6QixDQUE4QkwsUUFBUSxDQUFDUyxRQUF2QyxDQUFKLEVBQXFEO0FBQ3BEZixXQUFHLENBQUNDLEdBQUosQ0FBUVksU0FBUixDQUFrQixVQUFsQjtBQUNBO0FBQ0E7O0FBRURiLFNBQUcsQ0FBQ0MsR0FBSixDQUFRZSxXQUFSLENBQW9CLEtBQXBCO0FBQ0FDLGNBQVEsQ0FBQ0MsWUFBVCxDQUFzQjtBQUNsQkMsWUFBSSxFQUFFLE9BRFk7QUFFbEJ0QixZQUFJLEVBQUVTLFFBRlksRUFBdEI7QUFHR2MsVUFISCxDQUdRLFVBQUNDLEdBQUQsRUFBUztBQUNoQnJCLFdBQUcsQ0FBQ3NCLFdBQUo7QUFDQSxZQUFHRCxHQUFHLENBQUNFLE1BQUosQ0FBV0MsSUFBWCxJQUFtQixDQUF0QixFQUF3QjtBQUN2QnhCLGFBQUcsQ0FBQ0MsR0FBSixDQUFRWSxTQUFSLENBQWtCUSxHQUFHLENBQUNFLE1BQUosQ0FBV0UsT0FBWCxJQUFzQixVQUF4QztBQUNBO0FBQ0E7O0FBRUR6QixXQUFHLENBQUNDLEdBQUosQ0FBUXlCLFdBQVIsQ0FBb0JMLEdBQUcsQ0FBQ0UsTUFBSixDQUFXSSxRQUEvQjtBQUNBLHFCQUFZTixHQUFHLENBQUNFLE1BQUosQ0FBV0ksUUFBdkI7QUFDQTNCLFdBQUcsQ0FBQ0MsR0FBSixDQUFRWSxTQUFSLENBQWtCLE1BQWxCLEVBQXlCLFNBQXpCO0FBQ0EsYUFBSSxDQUFDZSxZQUFMLEdBQW9CQyxVQUFVLENBQUMsWUFBSTtBQUNsQzdCLGFBQUcsQ0FBQzhCLFFBQUosQ0FBYTtBQUNaQyxlQUFHLEVBQUUsb0JBRE8sRUFBYjs7QUFHQSxTQUo2QixFQUk1QixJQUo0QixDQUE5QjtBQUtBLE9BbEJELEVBa0JHQyxLQWxCSCxDQWtCUyxVQUFDQyxHQUFELEVBQU87QUFDZmpDLFdBQUcsQ0FBQ3NCLFdBQUo7QUFDQXRCLFdBQUcsQ0FBQ0MsR0FBSixDQUFRWSxTQUFSLENBQWtCLFVBQWxCO0FBQ0EsT0FyQkQ7QUFzQlMsS0FyQ0YsRUFUSyxFIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRhcHBJbWdzOnt9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvbkxvYWQoKSB7XG5cdFx0XHR0aGlzLmFwcEltZ3MgPSB1bmkuJGhsLmdldEFwcEltZ3MoKTtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGZvcm1TdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm9ybWRhdGEgPSBlLmRldGFpbC52YWx1ZTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKCF1bmkuJGhsLnJlZ0V4cHMubW9iaWxlLnRlc3QoZm9ybWRhdGEucGhvbmUpKXtcblx0XHRcdFx0XHR1bmkuJGhsLnNob3dUb2FzdCgn6K+36L6T5YWl5pyJ5pWI55qE5omL5py65Y+356CBJyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighdW5pLiRobC5yZWdFeHBzLmJlZml0UHdkLnRlc3QoZm9ybWRhdGEucGFzc3dvcmQpKXtcblx0XHRcdFx0XHR1bmkuJGhsLnNob3dUb2FzdCgn6K+36L6T5YWl5ZCI5rOV55qE5a+G56CBJyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHR1bmkuJGhsLnNob3dMb2FkaW5nKCfnmbvlvZXkuK0nKTtcblx0XHRcdFx0dW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcblx0XHRcdFx0ICAgIG5hbWU6ICdsb2dpbicsXG5cdFx0XHRcdCAgICBkYXRhOiBmb3JtZGF0YVxuXHRcdFx0XHR9KS50aGVuKChyZXMpID0+IHtcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcblx0XHRcdFx0XHRpZihyZXMucmVzdWx0LmNvZGUgIT0gMCl7XG5cdFx0XHRcdFx0XHR1bmkuJGhsLnNob3dUb2FzdChyZXMucmVzdWx0Lm1lc3NhZ2UgfHwgJ+W4kOWPt+S4juWvhueggeS4jeWMuemFjScpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHR1bmkuJGhsLnNldFVzZXJJbmZvKHJlcy5yZXN1bHQudXNlckluZm8pO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5yZXN1bHQudXNlckluZm8pO1xuXHRcdFx0XHRcdHVuaS4kaGwuc2hvd1RvYXN0KCfnmbvlvZXmiJDlip8nLCdzdWNjZXNzJyk7XG5cdFx0XHRcdFx0dGhpcy5sb2dpblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRcdFx0XHR1bmkucmVMYXVuY2goe1xuXHRcdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0sMTUwMCk7XG5cdFx0XHRcdH0pLmNhdGNoKChlcnIpPT57XG5cdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0dW5pLiRobC5zaG93VG9hc3QoJ+eZu+W9leWksei0pe+8jOivt+mHjeivlScpO1xuXHRcdFx0XHR9KTtcbiAgICAgICAgICAgIH1cblx0XHR9XG5cdH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!**********************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/App.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 34);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDME07QUFDMU0sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!***********************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 35);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJyQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/hualala/Documents/MyProject/myguess/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 27)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!************************************************************************!*\
  !*** /Users/hualala/Documents/MyProject/myguess/libs/helang-global.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; /* 统一资源标识符，设置项目全局请求域名 */\nvar URI = {\n  /* 请求路径 */\n  request: '',\n  /* 文件上传服务器路径 */\n  upload: '',\n  /* 图片服务路径 */\n  images: 'https://6461-darling-c8b540-1303225004.tcb.qcloud.la' };\n\n\n/* 常用正则 */\nvar regExps = {\n  email: /^[0-9a-zA-Z_]+@[0-9a-zA-Z_]+[\\.]{1}[0-9a-zA-Z]+[\\.]?[0-9a-zA-Z]+$/, //邮箱\n  mobile: /^1\\d{10}$/, //手机号码\n  qq: /^[1-9][0-9]{4,9}$/, //QQ\n  befitName: /^[a-z0-9A-Z\\u4e00-\\u9fa5]+$/, //合适的用户名，中文,字母,数字\n  befitPwd: /^[a-z0-9A-Z_]{6,16}$/, //合适的密码，字母,数字,下划线\n  allNumber: /^[0-9]+.?[0-9]$/ //全部为数字\n};\n\n/* 加载框 */\nvar showLoading = function showLoading() {var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';\n  uni.showLoading({\n    title: title,\n    mask: true });\n\n};\n\n/* 提示框 */\nvar showToast = function showToast() {var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1500;\n  uni.showToast({\n    title: title,\n    icon: icon,\n    duration: duration,\n    position: 'center',\n    mask: true });\n\n};\n\n/* 获取元素自定义属性值-当前事件元素 */\nvar elData = function elData(el, key) {\n  if (key) {\n    return el.currentTarget.dataset[key];\n  } else {\n    return el.currentTarget.dataset;\n  }\n};\n\n/* 获取元素大小及位置 */\nvar elRect = function elRect(selector) {\n  return new Promise(function (resolve, reject) {\n    var view = uni.createSelectorQuery().select(selector);\n    view.fields({\n      size: true,\n      rect: true },\n    function (res) {\n      resolve(res);\n    }).exec();\n  });\n};\n\n/* \n   \t发送请求\n   \turl 为绝对路径时使用绝对路径，为相对路径时会自拼接 URI 中的 request 地址\n   \tmethod 默认为 GET ,默认时可不传\n   */\nvar ajax = function ajax() {var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var url = param.url || '';\n  if (!/http:|https:/.test(url)) {\n    url = URI.request + url;\n  }\n\n  /* 请求头设置 */\n  var header = {};\n\n  /* 定义请求数据格式 */\n  /* 数据会进行 JSON 序列化，Request Payload，与下方相同属性保留接口所需要的类型即可 */\n  header['content-type'] = 'application/json';\n  /* 数据转换为 query string，Form Data，与上方相同属性保留接口所需要的类型即可*/\n  // header['content-type']='application/x-www-form-urlencoded';\n\n  /* 请求头自定义数据 */\n  /* 令牌数据自行完成获取过程 */\n  //header['token']='helang';\n\n  return new Promise(function (resolve, reject) {\n    uni.request({\n      url: url,\n      method: param.method || 'GET',\n      dataType: 'json',\n      header: header,\n      data: param.data,\n      success: function success(res) {\n        if (res.statusCode != 200) {\n          reject(res);\n          return;\n        }\n\n        resolve(res.data);\n      },\n      fail: function fail(err) {\n        uni.hideLoading();\n        showToast('请求错误，请重试！');\n        reject(err);\n      } });\n\n  });\n};\n\n/* 是否登录 */\nvar isLogin = function isLogin() {\n  var userInfo = uni.getStorageSync(\"userInfo\");\n  if (userInfo) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\n/* 获取登录用户信息 */\nvar getUserInfo = function getUserInfo(key) {\n  var userInfo = uni.getStorageSync(\"userInfo\");\n  if (userInfo) {\n    userInfo = JSON.parse(userInfo);\n    if (key && userInfo[key] != undefined) {\n      return userInfo[key];\n    } else {\n      return userInfo;\n    }\n  } else {\n    return false;\n  }\n};\n\n/* 设置登录用户信息 */\nvar setUserInfo = function setUserInfo(value) {\n  uni.setStorageSync(\"userInfo\", JSON.stringify(value));\n};\n\n\n/* 拼接图片地址 */\nvar joinImgUrl = function joinImgUrl(url) {\n  if (/^http/.test(url)) {\n    return url;\n  }\n  return \"\".concat(URI.images).concat(url);\n};\n\n/* 获取应用在线图片地址 */\nvar getAppImgs = function getAppImgs() {\n  var basicUrl = '/app';\n  var imgs = {};\n  // 背景\n  for (var i = 1; i <= 3; i++) {\n    imgs[\"bg_\".concat(i)] = joinImgUrl(\"\".concat(basicUrl, \"/bg_\").concat(i, \".jpg\"));\n  }\n  // 按钮\n  for (var _i = 1; _i <= 14; _i++) {\n    imgs[\"btn_\".concat(_i)] = joinImgUrl(\"\".concat(basicUrl, \"/btn_\").concat(_i, \".png\"));\n  }\n  // 图标\n  for (var _i2 = 1; _i2 <= 8; _i2++) {\n    imgs[\"icon_\".concat(_i2)] = joinImgUrl(\"\".concat(basicUrl, \"/icon_\").concat(_i2, \".png\"));\n  }\n  // 图片\n  for (var _i3 = 1; _i3 <= 5; _i3++) {\n    imgs[\"img_\".concat(_i3)] = joinImgUrl(\"\".concat(basicUrl, \"/img_\").concat(_i3, \".png\"));\n  }\n  return imgs;\n};\n\n/* 自定义全局对象 */\nvar iGlobal = {\n  URI: URI,\n  regExps: regExps,\n  showLoading: showLoading,\n  showToast: showToast,\n  elData: elData,\n  elRect: elRect,\n  ajax: ajax,\n  isLogin: isLogin,\n  getUserInfo: getUserInfo,\n  setUserInfo: setUserInfo,\n  joinImgUrl: joinImgUrl,\n  getAppImgs: getAppImgs };\n\n\n/* 把 iGlobal 挂载到 Vue.prototype 中，属性名为 $hl */\nvar install = function install(Vue) {\n  uni.$hl = Vue.prototype.$hl = iGlobal;\n};\n\n/* 抛出当前模块 */var _default =\n{\n  install: install };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbGlicy9oZWxhbmctZ2xvYmFsLmpzIl0sIm5hbWVzIjpbIlVSSSIsInJlcXVlc3QiLCJ1cGxvYWQiLCJpbWFnZXMiLCJyZWdFeHBzIiwiZW1haWwiLCJtb2JpbGUiLCJxcSIsImJlZml0TmFtZSIsImJlZml0UHdkIiwiYWxsTnVtYmVyIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsInVuaSIsIm1hc2siLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJwb3NpdGlvbiIsImVsRGF0YSIsImVsIiwia2V5IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlbFJlY3QiLCJzZWxlY3RvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidmlldyIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3QiLCJmaWVsZHMiLCJzaXplIiwicmVjdCIsInJlcyIsImV4ZWMiLCJhamF4IiwicGFyYW0iLCJ1cmwiLCJ0ZXN0IiwiaGVhZGVyIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJkYXRhIiwic3VjY2VzcyIsInN0YXR1c0NvZGUiLCJmYWlsIiwiZXJyIiwiaGlkZUxvYWRpbmciLCJpc0xvZ2luIiwidXNlckluZm8iLCJnZXRTdG9yYWdlU3luYyIsImdldFVzZXJJbmZvIiwiSlNPTiIsInBhcnNlIiwidW5kZWZpbmVkIiwic2V0VXNlckluZm8iLCJ2YWx1ZSIsInNldFN0b3JhZ2VTeW5jIiwic3RyaW5naWZ5Iiwiam9pbkltZ1VybCIsImdldEFwcEltZ3MiLCJiYXNpY1VybCIsImltZ3MiLCJpIiwiaUdsb2JhbCIsImluc3RhbGwiLCJWdWUiLCIkaGwiLCJwcm90b3R5cGUiXSwibWFwcGluZ3MiOiJ3RkFBQTtBQUNBLElBQUlBLEdBQUcsR0FBRztBQUNUO0FBQ0FDLFNBQU8sRUFBRSxFQUZBO0FBR1Q7QUFDQUMsUUFBTSxFQUFFLEVBSkM7QUFLVDtBQUNBQyxRQUFNLEVBQUUsc0RBTkMsRUFBVjs7O0FBU0E7QUFDQSxJQUFJQyxPQUFPLEdB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SixHQUFtQkosVUFBVSxXQUFJRSxRQUFKLGtCQUFvQkUsR0FBcEIsVUFBN0I7QUFDQTtBQUNELFNBQU9ELElBQVA7QUFDQSxDQXBCRDs7QUFzQkE7QUFDQSxJQUFJRSxPQUFPLEdBQUc7QUFDYmxFLEtBQUcsRUFBSEEsR0FEYTtBQUViSSxTQUFPLEVBQVBBLE9BRmE7QUFHYk8sYUFBVyxFQUFYQSxXQUhhO0FBSWJJLFdBQVMsRUFBVEEsU0FKYTtBQUtiSSxRQUFNLEVBQU5BLE1BTGE7QUFNYkssUUFBTSxFQUFOQSxNQU5hO0FBT2JhLE1BQUksRUFBSkEsSUFQYTtBQVFiYSxTQUFPLEVBQVBBLE9BUmE7QUFTYkcsYUFBVyxFQUFYQSxXQVRhO0FBVWJJLGFBQVcsRUFBWEEsV0FWYTtBQVdiSSxZQUFVLEVBQVZBLFVBWGE7QUFZYkMsWUFBVSxFQUFWQSxVQVphLEVBQWQ7OztBQWVBO0FBQ0EsSUFBSUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3RCdkQsS0FBRyxDQUFDd0QsR0FBSixHQUFVRCxHQUFHLENBQUNFLFNBQUosQ0FBY0QsR0FBZCxHQUFvQkgsT0FBOUI7QUFDQSxDQUZEOztBQUlBLFk7QUFDZTtBQUNkQyxTQUFPLEVBQVBBLE9BRGMsRSIsImZpbGUiOiIzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIOe7n+S4gOi1hOa6kOagh+ivhuespu+8jOiuvue9rumhueebruWFqOWxgOivt+axguWfn+WQjSAqL1xubGV0IFVSSSA9IHtcblx0Lyog6K+35rGC6Lev5b6EICovXG5cdHJlcXVlc3Q6ICcnLFxuXHQvKiDmlofku7bkuIrkvKDmnI3liqHlmajot6/lvoQgKi9cblx0dXBsb2FkOiAnJyxcblx0Lyog5Zu+54mH5pyN5Yqh6Lev5b6EICovXG5cdGltYWdlczogJ2h0dHBzOi8vNjQ2MS1kYXJsaW5nLWM4YjU0MC0xMzAzMjI1MDA0LnRjYi5xY2xvdWQubGEnXG59XG5cbi8qIOW4uOeUqOato+WImSAqL1xubGV0IHJlZ0V4cHMgPSB7XG5cdGVtYWlsOiAvXlswLTlhLXpBLVpfXStAWzAtOWEtekEtWl9dK1tcXC5dezF9WzAtOWEtekEtWl0rW1xcLl0/WzAtOWEtekEtWl0rJC8sIC8v6YKu566xXG5cdG1vYmlsZTogL14xXFxkezEwfSQvLCAvL+aJi+acuuWPt+eggVxuXHRxcTogL15bMS05XVswLTldezQsOX0kLywgLy9RUVxuXHRiZWZpdE5hbWU6IC9eW2EtejAtOUEtWlxcdTRlMDAtXFx1OWZhNV0rJC8sIC8v5ZCI6YCC55qE55So5oi35ZCN77yM5Lit5paHLOWtl+avjSzmlbDlrZdcblx0YmVmaXRQd2Q6IC9eW2EtejAtOUEtWl9dezYsMTZ9JC8sIC8v5ZCI6YCC55qE5a+G56CB77yM5a2X5q+NLOaVsOWtlyzkuIvliJLnur9cblx0YWxsTnVtYmVyOiAvXlswLTldKy4/WzAtOV0kLyAvL+WFqOmDqOS4uuaVsOWtl1xufVxuXG4vKiDliqDovb3moYYgKi9cbmxldCBzaG93TG9hZGluZyA9ICh0aXRsZSA9ICfliqDovb3kuK0nKSA9PiB7XG5cdHVuaS5zaG93TG9hZGluZyh7XG5cdFx0dGl0bGUsXG5cdFx0bWFzazogdHJ1ZVxuXHR9KTtcbn1cblxuLyog5o+Q56S65qGGICovXG5sZXQgc2hvd1RvYXN0ID0gKHRpdGxlID0gJycsIGljb24gPSAnbm9uZScsIGR1cmF0aW9uID0gMTUwMCkgPT4ge1xuXHR1bmkuc2hvd1RvYXN0KHtcblx0XHR0aXRsZSxcblx0XHRpY29uLFxuXHRcdGR1cmF0aW9uLFxuXHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcblx0XHRtYXNrOiB0cnVlXG5cdH0pO1xufVxuXG4vKiDojrflj5blhYPntKDoh6rlrprkuYnlsZ7mgKflgLwt5b2T5YmN5LqL5Lu25YWD57SgICovXG5sZXQgZWxEYXRhID0gKGVsLCBrZXkpID0+IHtcblx0aWYgKGtleSkge1xuXHRcdHJldHVybiBlbC5jdXJyZW50VGFyZ2V0LmRhdGFzZXRba2V5XTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZWwuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuXHR9XG59XG5cbi8qIOiOt+WPluWFg+e0oOWkp+Wwj+WPiuS9jee9riAqL1xubGV0IGVsUmVjdCA9IChzZWxlY3RvcikgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGxldCB2aWV3ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5zZWxlY3Qoc2VsZWN0b3IpO1xuXHRcdHZpZXcuZmllbGRzKHtcblx0XHRcdHNpemU6IHRydWUsXG5cdFx0XHRyZWN0OiB0cnVlXG5cdFx0fSwgKHJlcykgPT4ge1xuXHRcdFx0cmVzb2x2ZShyZXMpO1xuXHRcdH0pLmV4ZWMoKTtcblx0fSlcbn1cblxuLyogXG5cdOWPkemAgeivt+axglxuXHR1cmwg5Li657ud5a+56Lev5b6E5pe25L2/55So57ud5a+56Lev5b6E77yM5Li655u45a+56Lev5b6E5pe25Lya6Ieq5ou85o6lIFVSSSDkuK3nmoQgcmVxdWVzdCDlnLDlnYBcblx0bWV0aG9kIOm7mOiupOS4uiBHRVQgLOm7mOiupOaXtuWPr+S4jeS8oFxuKi9cbmxldCBhamF4ID0gKHBhcmFtPXt9KSA9PiB7XG5cdGxldCB1cmw9cGFyYW0udXJsIHx8ICcnO1xuXHRpZighL2h0dHA6fGh0dHBzOi8udGVzdCh1cmwpKXtcblx0XHR1cmw9VVJJLnJlcXVlc3QrdXJsO1xuXHR9XG5cdFxuXHQvKiDor7fmsYLlpLTorr7nva4gKi9cblx0bGV0IGhlYWRlcj17fTtcblx0XG5cdC8qIOWumuS5ieivt+axguaVsOaNruagvOW8jyAqL1xuXHQvKiDmlbDmja7kvJrov5vooYwgSlNPTiDluo/liJfljJbvvIxSZXF1ZXN0IFBheWxvYWTvvIzkuI7kuIvmlrnnm7jlkIzlsZ7mgKfkv53nlZnmjqXlj6PmiYDpnIDopoHnmoTnsbvlnovljbPlj68gKi9cblx0aGVhZGVyWydjb250ZW50LXR5cGUnXT0nYXBwbGljYXRpb24vanNvbic7XG5cdC8qIOaVsOaNrui9rOaNouS4uiBxdWVyeSBzdHJpbmfvvIxGb3JtIERhdGHvvIzkuI7kuIrmlrnnm7jlkIzlsZ7mgKfkv53nlZnmjqXlj6PmiYDpnIDopoHnmoTnsbvlnovljbPlj68qL1xuXHQvLyBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddPSdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuXHRcblx0Lyog6K+35rGC5aS06Ieq5a6a5LmJ5pWw5o2uICovXG5cdC8qIOS7pOeJjOaVsOaNruiHquihjOWujOaIkOiOt+WPlui/h+eoiyAqL1xuXHQvL2hlYWRlclsndG9rZW4nXT0naGVsYW5nJztcblx0XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG5cdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0dXJsLFxuXHRcdFx0bWV0aG9kOnBhcmFtLm1ldGhvZCB8fCAnR0VUJyxcblx0XHRcdGRhdGFUeXBlOidqc29uJyxcblx0XHRcdGhlYWRlcixcblx0XHRcdGRhdGE6cGFyYW0uZGF0YSxcblx0XHRcdHN1Y2Nlc3M6KHJlcyk9Pntcblx0XHRcdFx0aWYocmVzLnN0YXR1c0NvZGUgIT0gMjAwKXtcblx0XHRcdFx0XHRyZWplY3QocmVzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpO1xuXHRcdFx0fSxcblx0XHRcdGZhaWw6KGVycik9Pntcblx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdHNob3dUb2FzdCgn6K+35rGC6ZSZ6K+v77yM6K+36YeN6K+V77yBJyk7XG5cdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KVxufVxuXG4vKiDmmK/lkKbnmbvlvZUgKi9cbmxldCBpc0xvZ2luID0gKCk9Pntcblx0bGV0IHVzZXJJbmZvID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwidXNlckluZm9cIik7XG5cdGlmKHVzZXJJbmZvKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fWVsc2V7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbi8qIOiOt+WPlueZu+W9leeUqOaIt+S/oeaBryAqL1xubGV0IGdldFVzZXJJbmZvID0gKGtleSk9Pntcblx0bGV0IHVzZXJJbmZvID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwidXNlckluZm9cIik7XG5cdGlmKHVzZXJJbmZvKXtcblx0XHR1c2VySW5mbyA9IEpTT04ucGFyc2UodXNlckluZm8pO1xuXHRcdGlmKGtleSAmJiB1c2VySW5mb1trZXldICE9IHVuZGVmaW5lZCl7XG5cdFx0XHRyZXR1cm4gdXNlckluZm9ba2V5XTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB1c2VySW5mbztcblx0XHR9XG5cdH1lbHNle1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG4vKiDorr7nva7nmbvlvZXnlKjmiLfkv6Hmga8gKi9cbmxldCBzZXRVc2VySW5mbyA9ICh2YWx1ZSk9Pntcblx0dW5pLnNldFN0b3JhZ2VTeW5jKFwidXNlckluZm9cIixKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xufVxuXG5cbi8qIOaLvOaOpeWbvueJh+WcsOWdgCAqL1xubGV0IGpvaW5JbWdVcmwgPSAodXJsKT0+e1xuXHRpZigvXmh0dHAvLnRlc3QodXJsKSl7XG5cdFx0cmV0dXJuIHVybDtcblx0fVxuXHRyZXR1cm4gYCR7VVJJLmltYWdlc30ke3VybH1gO1xufVxuXG4vKiDojrflj5blupTnlKjlnKjnur/lm77niYflnLDlnYAgKi9cbmxldCBnZXRBcHBJbWdzID0gKCk9Pntcblx0bGV0IGJhc2ljVXJsID0gJy9hcHAnO1xuXHRsZXQgaW1ncz17fTtcblx0Ly8g6IOM5pmvXG5cdGZvcihsZXQgaT0xO2k8PTM7aSsrKXtcblx0XHRpbWdzW2BiZ18ke2l9YF0gPSBqb2luSW1nVXJsKGAke2Jhc2ljVXJsfS9iZ18ke2l9LmpwZ2ApO1xuXHR9XG5cdC8vIOaMiemSrlxuXHRmb3IobGV0IGk9MTtpPD0xNDtpKyspe1xuXHRcdGltZ3NbYGJ0bl8ke2l9YF0gPSBqb2luSW1nVXJsKGAke2Jhc2ljVXJsfS9idG5fJHtpfS5wbmdgKTtcblx0fVxuXHQvLyDlm77moIdcblx0Zm9yKGxldCBpPTE7aTw9ODtpKyspe1xuXHRcdGltZ3NbYGljb25fJHtpfWBdID0gam9pbkltZ1VybChgJHtiYXNpY1VybH0vaWNvbl8ke2l9LnBuZ2ApO1xuXHR9XG5cdC8vIOWbvueJh1xuXHRmb3IobGV0IGk9MTtpPD01O2krKyl7XG5cdFx0aW1nc1tgaW1nXyR7aX1gXSA9IGpvaW5JbWdVcmwoYCR7YmFzaWNVcmx9L2ltZ18ke2l9LnBuZ2ApO1xuXHR9XG5cdHJldHVybiBpbWdzO1xufVxuXG4vKiDoh6rlrprkuYnlhajlsYDlr7nosaEgKi9cbmxldCBpR2xvYmFsID0ge1xuXHRVUkksXG5cdHJlZ0V4cHMsXG5cdHNob3dMb2FkaW5nLFxuXHRzaG93VG9hc3QsXG5cdGVsRGF0YSxcblx0ZWxSZWN0LFxuXHRhamF4LFxuXHRpc0xvZ2luLFxuXHRnZXRVc2VySW5mbyxcblx0c2V0VXNlckluZm8sXG5cdGpvaW5JbWdVcmwsXG5cdGdldEFwcEltZ3Ncbn1cblxuLyog5oqKIGlHbG9iYWwg5oyC6L295YiwIFZ1ZS5wcm90b3R5cGUg5Lit77yM5bGe5oCn5ZCN5Li6ICRobCAqL1xubGV0IGluc3RhbGwgPSAoVnVlKSA9PiB7XG5cdHVuaS4kaGwgPSBWdWUucHJvdG90eXBlLiRobCA9IGlHbG9iYWw7XG59XG5cbi8qIOaKm+WHuuW9k+WJjeaooeWdlyAqL1xuZXhwb3J0IGRlZmF1bHQge1xuXHRpbnN0YWxsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///36\n");

/***/ })
],[[0,"app-config"]]]);