webpackHotUpdate("static\\development\\pages\\anime.js",{

/***/ "./styles/AnimeListStyles.js":
/*!***********************************!*\
  !*** ./styles/AnimeListStyles.js ***!
  \***********************************/
/*! exports provided: Container, Heading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Sizes */ "./helpers/Sizes.js");


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AnimeListStyles__Container",
  componentId: "sc-13znmvv-0"
})(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 46rem);\n  justify-content: center;\n  grid-column-gap: 50px;\n  grid-row-gap: 30px;\n  grid-template-rows: ", ";\n  padding-top: 30px;\n  padding-bottom: 30px;\n\n  ", "{\n    grid-template-columns: repeat(auto-fit, 68rem);\n  }\n  ", "{\n    grid-template-columns: repeat(auto-fit, 50rem);\n  }\n  ", "{\n    grid-template-columns: repeat(auto-fit, 36rem);\n    margin:0 12px;\n  }\n"], function (props) {
  return props.tRow;
}, _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('lg'), _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('sm'), _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs'));
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2.withConfig({
  displayName: "AnimeListStyles__Heading",
  componentId: "sc-13znmvv-1"
})(["\n  font-size: 2.4rem;\n  color: ", ";\n  grid-row: 1 /2;\n  grid-column: 1 / -1;\n  position: relative;\n  padding-left: 2.4rem;\n  line-height: 2.4rem;\n  ::before {\n    content: \"\";\n    position: absolute;\n    background: #1e90ff;\n    height: 4px;\n    width: 20px;\n    top: 50%;\n\n    left: 0;\n  }\n"], function (props) {
  return props.isDark ? '#fff' : '#333';
});


/***/ })

})
//# sourceMappingURL=anime.js.95a2767653db3ad64c21.hot-update.js.map