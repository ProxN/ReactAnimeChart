webpackHotUpdate("static\\development\\pages\\anime.js",{

/***/ "./components/Anime.js":
/*!*****************************!*\
  !*** ./components/Anime.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/AnimeStyles */ "./styles/AnimeStyles.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icon */ "./components/Icon.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dropdown */ "./components/Dropdown.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function Anime(_ref) {
  var anime = _ref.anime,
      darkTheme = _ref.darkTheme;

  var _useToggler = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__["default"])(false),
      _useToggler2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useToggler, 2),
      showDropDown = _useToggler2[0],
      toggle = _useToggler2[1];

  return __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["AnimeContainer"], {
    isDark: darkTheme
  }, __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["GridCell"], {
    top: 1,
    left: 1
  }, __jsx("a", {
    href: anime.siteUrl,
    target: "_blanc"
  }, __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["Img"], {
    src: anime.coverImage.extraLarge
  }))), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["Overlay"], {
    left: 1,
    top: 1
  }, __jsx("a", {
    href: anime.siteUrl
  }, anime.title.romaji), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["Studio"], null, __jsx("a", {
    href: anime.formatStudio ? anime.formatStudio.siteUrl : anime.siteUrl
  }, " ", anime.formatStudio ? anime.formatStudio.name : ''))), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["AnimeRank"], {
    left: 1,
    top: 1
  }, __jsx("span", null, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaRegHeart"], null), " #", anime.formatRank), __jsx("span", {
    style: {
      marginTop: "1px"
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaRegStar"], {
    color: "#eccc68"
  }), anime.averageScore / 10)), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["GridCell"], {
    left: 2,
    top: 1
  }, __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["AnimeHeader"], null, __jsx(AnimeHeaderContent, null, __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["Span"], null, anime.formatEpiosde), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["TimeCount"], null, anime.formatTime)), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["AnimeTrailer"], null, anime.trailer ? __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["Img"], {
    src: anime.trailer.thumbnail
  }) : "", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaRegPlayCircle"], null))), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["AnimeDesc"], null, __jsx("p", null, react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(anime.description))), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["AnimeGenres"], null, __jsx("ul", null, anime.genres.map(function (el, i) {
    if (i < 2) {
      return __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_5__["ListItem"], {
        color: anime.coverImage.color,
        key: i
      }, el);
    }
  })))), __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    toggle: toggle,
    id: anime.id
  }), showDropDown && __jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
    toggle: toggle,
    id: anime.id,
    leaveHandler: toggle
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Anime));

/***/ })

})
//# sourceMappingURL=anime.js.517a4123acf683032073.hot-update.js.map