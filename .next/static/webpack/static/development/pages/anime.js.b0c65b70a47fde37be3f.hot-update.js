webpackHotUpdate("static\\development\\pages\\anime.js",{

/***/ "./components/AnimeTypeList.js":
/*!*************************************!*\
  !*** ./components/AnimeTypeList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Anime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Anime */ "./components/Anime.js");
/* harmony import */ var _styles_AnimeListStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/AnimeListStyles */ "./styles/AnimeListStyles.js");
/* harmony import */ var _contexts_theme_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/theme.context */ "./contexts/theme.context.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function AnimeTypeList(_ref) {
  var animes = _ref.animes,
      type = _ref.type;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_theme_context__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]),
      isDarkMode = _useContext.isDarkMode;

  console.log('AnimeTypeList Component Render');
  return __jsx(_styles_AnimeListStyles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    tRow: "20px auto"
  }, __jsx(_styles_AnimeListStyles__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    isDark: isDarkMode
  }, type), animes.map(function (anime) {
    return __jsx(_Anime__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: anime.id,
      anime: anime,
      darkTheme: isDarkMode
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AnimeTypeList);

/***/ })

})
//# sourceMappingURL=anime.js.b0c65b70a47fde37be3f.hot-update.js.map