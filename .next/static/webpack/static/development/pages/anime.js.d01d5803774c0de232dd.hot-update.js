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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //  import {ThemeContext} from '../contexts/theme.context';

function AnimeTypeList(_ref) {
  var animes = _ref.animes,
      type = _ref.type;
  //  const {isDarkMode} = useContext(ThemeContext);
  console.log('AnimeTypeList Component Render');
  return __jsx(_styles_AnimeListStyles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    tRow: "20px auto"
  }, __jsx(_styles_AnimeListStyles__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    isDark: false
  }, type), animes.map(function (anime) {
    return __jsx(_Anime__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: anime.id,
      anime: anime,
      darkTheme: false
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AnimeTypeList);

/***/ })

})
//# sourceMappingURL=anime.js.d01d5803774c0de232dd.hot-update.js.map