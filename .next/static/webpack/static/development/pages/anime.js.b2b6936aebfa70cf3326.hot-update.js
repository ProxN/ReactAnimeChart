webpackHotUpdate("static\\development\\pages\\anime.js",{

/***/ "./components/SkeletonList.js":
/*!************************************!*\
  !*** ./components/SkeletonList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Skeleton */ "./components/Skeleton.js");
/* harmony import */ var _styles_AnimeListStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/AnimeListStyles */ "./styles/AnimeListStyles.js");
/* harmony import */ var _contexts_theme_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/theme.context */ "./contexts/theme.context.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function SkeletonList(_ref) {
  var maxSkeleton = _ref.maxSkeleton;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_theme_context__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]),
      isDarkMode = _useContext.isDarkMode;

  var sk = [];

  for (var i = 0; i < maxSkeleton; i++) {
    sk.push(__jsx(_Skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      isDark: isDarkMode,
      key: i
    }));
  }

  return __jsx(_styles_AnimeListStyles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    style: {
      marginTop: isDarkMode ? '0px' : '80px'
    },
    tRow: "none"
  }, sk);
}

/* harmony default export */ __webpack_exports__["default"] = (SkeletonList);

/***/ })

})
//# sourceMappingURL=anime.js.b2b6936aebfa70cf3326.hot-update.js.map