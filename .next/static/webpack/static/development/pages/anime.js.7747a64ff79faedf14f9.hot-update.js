webpackHotUpdate("static\\development\\pages\\anime.js",{

/***/ "./contexts/animes.context.js":
/*!************************************!*\
  !*** ./contexts/animes.context.js ***!
  \************************************/
/*! exports provided: AnimesContext, DispatchContext, AnimesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimesContext", function() { return AnimesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchContext", function() { return DispatchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimesProvider", function() { return AnimesProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_anime_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/anime.reducer */ "./reducers/anime.reducer.js");
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useLocalStorage */ "./hooks/useLocalStorage.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var AnimesContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
var DispatchContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
var defaultState = {
  highlights: []
};
function AnimesProvider(props) {
  var _useLocalStorageReduc = Object(_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__["default"])('highlights', defaultState, _reducers_anime_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]),
      _useLocalStorageReduc2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useLocalStorageReduc, 2),
      state = _useLocalStorageReduc2[0],
      dispatch = _useLocalStorageReduc2[1];

  return __jsx(AnimesContext.Provider, {
    value: state
  }, __jsx(DispatchContext.Provider, {
    value: dispatch
  }, props.children));
}

/***/ })

})
//# sourceMappingURL=anime.js.7747a64ff79faedf14f9.hot-update.js.map