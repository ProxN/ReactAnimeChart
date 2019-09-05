webpackHotUpdate("static\\development\\pages\\anime.js",{

/***/ "./components/AnimeList.js":
/*!*********************************!*\
  !*** ./components/AnimeList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_animeHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/animeHelper */ "./helpers/animeHelper.js");
/* harmony import */ var _AnimeTypeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimeTypeList */ "./components/AnimeTypeList.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function AnimeLiist(_ref) {
  var animes = _ref.animes;
  var ListOfAnimes = Object(_helpers_animeHelper__WEBPACK_IMPORTED_MODULE_1__["animesByType"])(animes);
  var types = ["TV", "MOVIE"];
  console.log('AnimeList Component Render');
  return __jsx("div", null, types.map(function (type) {
    return __jsx(_AnimeTypeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: type,
      type: type,
      animes: ListOfAnimes[type]
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AnimeLiist);

/***/ })

})
//# sourceMappingURL=anime.js.8585318a19254e55cb7b.hot-update.js.map