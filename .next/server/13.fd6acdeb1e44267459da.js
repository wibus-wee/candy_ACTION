exports.ids = [13];
exports.modules = {

/***/ "P4js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterActions", function() { return FooterActions; });
/* harmony import */ var antd_lib_back_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5X97");
/* harmony import */ var antd_lib_back_top__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_back_top__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var common_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("zQ19");
/* harmony import */ var components_Anime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("PJ1c");
/* harmony import */ var utils_mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ytCK");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const FooterActions = Object(utils_mobx__WEBPACK_IMPORTED_MODULE_8__[/* observer */ "a"])(() => {
  const {
    appStore,
    actionStore
  } = Object(common_store__WEBPACK_IMPORTED_MODULE_6__[/* useStore */ "a"])();
  const {
    isOverflow
  } = appStore;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3651039334"
  }, [".message-btn.jsx-3651039334{position:relative;}", ".message-btn.count.jsx-3651039334::before{content:attr(data-count);position:absolute;right:0;top:0;height:1rem;width:1rem;background:var(--red);border-radius:50%;font-size:0.8rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;-webkit-animation:fade-small-large-jsx-3651039334 0.5s both;animation:fade-small-large-jsx-3651039334 0.5s both;}"]), __jsx("div", {
    className: "jsx-3651039334" + " " + "action"
  }, __jsx(antd_lib_back_top__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx("button", {
    className: "jsx-3651039334" + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()('top', isOverflow ? 'active' : '') || "")
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowUp"]
  }))), __jsx(components_Anime__WEBPACK_IMPORTED_MODULE_7__[/* QueueAnim */ "a"], {
    type: "scale",
    leaveReverse: true,
    ease: "easeInQuart",
    forcedReplay: true
  }, actionStore.actions.map((action, i) => {
    return __jsx("button", {
      key: i,
      onClick: action.onClick,
      className: "jsx-3651039334"
    }, action.icon);
  }))));
});

/***/ }),

/***/ "PJ1c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ufq7");
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_queue_anim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rc_queue_anim__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var rc_texty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cin7");
/* harmony import */ var rc_texty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_texty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VNO/");
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_tween_one__WEBPACK_IMPORTED_MODULE_2__);





/***/ })

};;