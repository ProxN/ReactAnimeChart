webpackHotUpdate("static\\development\\pages\\anime.js",{

/***/ "./components/Dropdown.js":
/*!********************************!*\
  !*** ./components/Dropdown.js ***!
  \********************************/
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






function DropDown(_ref) {
  var toggle = _ref.toggle,
      id = _ref.id;
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_animes_context__WEBPACK_IMPORTED_MODULE_3__["DispatchContext"]);
  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_animes_context__WEBPACK_IMPORTED_MODULE_3__["AnimesContext"]); // check if Anime in Highlights 

  var highlight = state.highlights.find(function (high) {
    return high.key === id;
  });
  var color = highlight ? highlight.value : '1e90ff'; // console.log('DROPDOWN RENDER');

  var handleClick = function handleClick(e) {
    var value = e.target.dataset.value;
    dispatch({
      type: "ADD-HIGHLIGHT",
      key: id,
      value: value
    });
    toggle();
  };

  var handleRemove = function handleRemove() {
    dispatch({
      type: "DELETE-HIGHLIGHT",
      key: id
    });
    toggle();
  };

  return __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_1__["DropDown"], {
    onMouseLeave: toggle,
    top: 1,
    left: 2
  }, __jsx("ul", null, __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_1__["DropDownItem"], {
    onClick: handleClick,
    "data-value": "2ed573",
    color: "#2ed573"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCheck"], null), "Watching"), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_1__["DropDownItem"], {
    onClick: handleClick,
    "data-value": "ff7f50",
    color: "#ff7f50"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaQuestion"], null), "Maybe Watching"), " ", __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_1__["DropDownItem"], {
    onClick: handleClick,
    "data-value": "ff4757",
    color: "#ff4757"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTimes"], null), "Not Watching"), color !== "1e90ff" && __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_1__["DropDownItem"], {
    onClick: handleRemove,
    style: {
      paddingLeft: "38px"
    }
  }, "Clear")));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(DropDown));

/***/ })

})
//# sourceMappingURL=anime.js.b317a0358c4d3b1662b4.hot-update.js.map