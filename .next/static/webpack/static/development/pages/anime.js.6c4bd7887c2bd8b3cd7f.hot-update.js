webpackHotUpdate("static\\development\\pages\\anime.js",{

/***/ "./components/AnimeApp.js":
/*!********************************!*\
  !*** ./components/AnimeApp.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _queries_animeQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queries/animeQuery */ "./queries/animeQuery.js");
/* harmony import */ var _AnimeList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimeList */ "./components/AnimeList.js");
/* harmony import */ var _SkeletonList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SkeletonList */ "./components/SkeletonList.js");
/* harmony import */ var _contexts_animes_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/animes.context */ "./contexts/animes.context.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function AnimeApp(_ref) {
  var season = _ref.season;
  var pagex = 1;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_queries_animeQuery__WEBPACK_IMPORTED_MODULE_4__["GET_ANIMES"], {
    variables: {
      page: pagex,
      season: season,
      seasonYear: 2019
    },
    onCompleted: function onCompleted(data) {
      // Fetch more Anime if there next Page
      if (data.Page.pageInfo.hasNextPage) {
        pagex += 1;
        fetchMore({
          variables: {
            page: pagex
          },
          updateQuery: function updateQuery(prev, _ref2) {
            var fetchMoreResult = _ref2.fetchMoreResult;
            return {
              Page: {
                __typename: prev.Page.__typename,
                media: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev.Page.media), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(fetchMoreResult.Page.media)),
                pageInfo: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fetchMoreResult.Page.pageInfo)
              }
            };
          }
        });
      }
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading,
      fetchMore = _useQuery.fetchMore;

  if (loading) return __jsx(_SkeletonList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    maxSkeleton: 9
  });
  if (error) return __jsx("div", null, "errror");
  return __jsx("div", null, data.Page.media.length > 50 ? __jsx(_contexts_animes_context__WEBPACK_IMPORTED_MODULE_7__["AnimesProvider"], null, __jsx(_AnimeList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    animes: data.Page.media
  })) : __jsx(_SkeletonList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    maxSkeleton: 9
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AnimeApp);

/***/ })

})
//# sourceMappingURL=anime.js.6c4bd7887c2bd8b3cd7f.hot-update.js.map