webpackHotUpdate("static\\development\\pages\\anime.js",{

/***/ "./components/Icon.js":
/*!****************************!*\
  !*** ./components/Icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/AnimeStyles */ "./styles/AnimeStyles.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _contexts_animes_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/animes.context */ "./contexts/animes.context.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function AddIcon(_ref) {
  var toggle = _ref.toggle,
      id = _ref.id;
  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_animes_context__WEBPACK_IMPORTED_MODULE_3__["AnimesContext"]); //check if Anime in Highlights 

  var highlight = state.highlights.find(function (high) {
    return high.key === id;
  });
  var color = highlight ? highlight.value : '1e90ff';

  var getIcon = function getIcon(val) {
    switch (val) {
      case "2ed573":
        return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCheck"], null);

      case "ff7f50":
        return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaQuestion"], null);

      case "ff4757":
        return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTimes"], null);

      default:
        return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaPlus"], null);
    }
  };

  return __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_1__["AddIcon"], {
    onMouseEnter: toggle,
    color: "#".concat(color),
    top: 1,
    left: 2
  }, getIcon(color));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(AddIcon));

/***/ })

})
//# sourceMappingURL=anime.js.eb7d88755ebbba763418.hot-update.js.map