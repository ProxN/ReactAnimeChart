webpackHotUpdate("static\\development\\pages\\anime.js",{

/***/ "./styles/AnimeStyles.js":
/*!*******************************!*\
  !*** ./styles/AnimeStyles.js ***!
  \*******************************/
/*! exports provided: GridCell, AnimeContainer, AnimeDesc, AnimeGenres, AnimeHeader, Overlay, DropDown, AddIcon, ListItem, TimeCount, Span, Studio, AnimeRank, AnimeTrailer, Img, DropDownItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridCell", function() { return GridCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeContainer", function() { return AnimeContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeDesc", function() { return AnimeDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeGenres", function() { return AnimeGenres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeHeader", function() { return AnimeHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIcon", function() { return AddIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeCount", function() { return TimeCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Studio", function() { return Studio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeRank", function() { return AnimeRank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeTrailer", function() { return AnimeTrailer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownItem", function() { return DropDownItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Sizes */ "./helpers/Sizes.js");


var AnimeHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AnimeStyles__AnimeHeader",
  componentId: "h52tqf-0"
})(["\n  display: grid;\n  grid-template-columns: 60% 40%;\n  color: #333;\n  padding: 15px;\n  height: 40px;\n"]);
var AnimeDesc = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AnimeStyles__AnimeDesc",
  componentId: "h52tqf-1"
})(["\n  height: 150px;\n  overflow-y: hidden;\n  padding: 15px;\n  font-size: 1.3rem;\n  margin: 10px 0;\n"]);
var GridCell = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AnimeStyles__GridCell",
  componentId: "h52tqf-2"
})(["\n  grid-column-start: ", ";\n  grid-row-start: ", ";\n"], function (props) {
  return props.left;
}, function (props) {
  return props.top;
});
var Span = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "AnimeStyles__Span",
  componentId: "h52tqf-3"
})(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ", ";\n"], function (props) {
  return props.blue ? "#1e90ff" : "#6e859e";
});
var TimeCount = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "AnimeStyles__TimeCount",
  componentId: "h52tqf-4"
})(["\n  font-size: 18px;\n  display: block;\n  font-weight: 500;\n  color: #6e859e;\n"]);
var AnimeGenres = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AnimeStyles__AnimeGenres",
  componentId: "h52tqf-5"
})(["\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  justify-content: center;\n  color: #333;\n  height: calc(300px - 287px);\n"]);
var DropDown = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(GridCell).withConfig({
  displayName: "AnimeStyles__DropDown",
  componentId: "h52tqf-6"
})(["\n  background: white;\n  align-self: flex-start;\n  justify-self: flex-end;\n  margin: 10px;\n  z-index: 10;\n  width: 150px;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  ul {\n    list-style: none;\n    transition: all .4s;\n  }\n"]);
var AnimeContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AnimeStyles__AnimeContainer",
  componentId: "h52tqf-7"
})(["\n  display: grid;\n  width: 460px;\n  height: 300px;\n  grid-template-columns: 180px auto;\n  background-color: ", ";\n  /* box-shadow: 0 5px 10px rgba(#000, 0.1); */\n  box-shadow: ", ";\n  border-radius: 3px;\n  \n  ", "{\n    background-color: ", ";\n    color:", ";\n  }\n  ", "{\n  border-bottom: 1px solid ", ";\n\n  }\n  ", "{\n    background-color:", ";\n  }\n", ",", ",", "{\n    color : ", "\n  }\n  ", "{\n    width: 68rem;\n   \n  }\n"], function (props) {
  return props.isDark ? '#2c2c33' : 'rgb(255, 255, 255)';
}, function (props) {
  return props.isDark ? 'box-shadow: 3px 6px 21px -7px rgba(0,0,0,1)' : 'rgba(190, 190, 190, 0.5) 0px 2px 2px 0px';
}, DropDown, function (props) {
  return props.isDark ? '#2c2c33' : 'rgb(255, 255, 255)';
}, function (props) {
  return props.isDark ? 'rgba(228, 228, 228,.8)' : '#333';
}, AnimeHeader, function (props) {
  return props.isDark ? 'rgba(20,20,24,.3)' : '#e5e5e5';
}, AnimeGenres, function (props) {
  return props.isDark ? 'rgba(36,36,42,.9)' : 'rgba(41, 41, 41, 0.9)';
}, AnimeDesc, Span, TimeCount, function (props) {
  return props.isDark ? 'rgba(228, 228, 228,.8)' : '#6e859e';
}, _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('lg'));
var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "AnimeStyles__Img",
  componentId: "h52tqf-8"
})(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);
var Overlay = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(GridCell).withConfig({
  displayName: "AnimeStyles__Overlay",
  componentId: "h52tqf-9"
})(["\n  overflow: hidden;\n  align-self: flex-end;\n  padding: 10px;\n  background-color: rgba(41, 41, 41, 0.9);\n  width: 160px;\n  z-index:20;\n  a {\n    font-weight: 500;\n    color: #fff;\n    text-decoration: none;\n    font-size: 1.4rem;\n    font-family: \"Roboto\", sans-serif;\n\n    display: block;\n  }\n"]);
var Studio = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AnimeStyles__Studio",
  componentId: "h52tqf-10"
})(["\n  margin-top: 5px;\n  a {\n    color: #1e90ff;\n  }\n"]);
var AnimeRank = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(GridCell).withConfig({
  displayName: "AnimeStyles__AnimeRank",
  componentId: "h52tqf-11"
})(["\n  span {\n    background-color: rgba(41, 41, 41, 0.9);\n    padding: 3px 10px;\n    margin: 10px 10px 5px 10px;\n\n    width: 40px;\n    height: 15px;\n    border-radius: 20em;\n    font-size: 1.3rem;\n    display: flex;\n    align-items: center;\n    font-family: \"Roboto\", sans-serif;\n\n    font-weight: 500;\n    svg {\n      margin-right: 5px;\n      color: #ff4757;\n    }\n  }\n"]);
var AnimeTrailer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AnimeStyles__AnimeTrailer",
  componentId: "h52tqf-12"
})(["\n  grid-column: 2 / -1;\n  height: 50px;\n  position: relative;\n  cursor: pointer;\n  border-radius: 2px;\n  img {\n    border-radius: 2px;\n  }\n  svg {\n    transform: translate(-50%, -50%);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: 30px;\n    color: rgba(255, 255, 255, 0.9);\n  }\n"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "AnimeStyles__ListItem",
  componentId: "h52tqf-13"
})(["\n  display: inline-block;\n  margin-right: 10px;\n  font-size: 1.2rem;\n  font-weight:400;\n  color: #eff7fb;\n  padding:1px 5px;\n  border:1px dashed ", ";\n"], function (props) {
  return props.color;
});
var AddIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(GridCell).withConfig({
  displayName: "AnimeStyles__AddIcon",
  componentId: "h52tqf-14"
})(["\n  color: #fff;\n  justify-self: flex-end;\n  /* border:1px solid #6e859e; */\n  align-self: flex-start;\n  transform: translate(50%, -50%);\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  font-size: .8rem;\n  cursor: pointer;\n"], function (props) {
  return props.color;
});
var DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "AnimeStyles__DropDownItem",
  componentId: "h52tqf-15"
})(["\n  font-size: 13px;\n  color: inherit;\n  padding: 5px 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: all 0.4s;\n  padding: 6px 10px;\n  :hover{\n      background:#1e90ff;\n      color:#fff;\n  }\n\n  svg {\n    padding: 5px;\n    border-radius: 50%;\n    background: ", ";\n    font-size: 10px;\n    color: white;\n    margin-right: 8px;\n  }\n"], function (props) {
  return props.color;
});


/***/ })

})
//# sourceMappingURL=anime.js.a38bd10863471a5d4c4a.hot-update.js.map