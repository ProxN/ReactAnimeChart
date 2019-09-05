webpackHotUpdate("static\\development\\pages\\anime.js",{

/***/ "./components/PageContent.js":
/*!***********************************!*\
  !*** ./components/PageContent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_theme_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/theme.context */ "./contexts/theme.context.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PageContent(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_theme_context__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]),
      isDarkMode = _useContext.isDarkMode;

  return __jsx("div", {
    style: {
      backgroundColor: isDarkMode ? '#1c1c21' : '#F0F0F0'
    }
  }, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (PageContent);

/***/ })

})
//# sourceMappingURL=anime.js.261c1922fcf059cbb2b2.hot-update.js.map