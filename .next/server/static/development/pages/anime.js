module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Anime.js":
/*!*****************************!*\
  !*** ./components/Anime.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/AnimeStyles */ "./styles/AnimeStyles.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icon */ "./components/Icon.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dropdown */ "./components/Dropdown.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Anime({
  anime,
  darkTheme
}) {
  const [showDropDown, toggle] = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["default"])(false);
  return __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["AnimeContainer"], {
    isDark: darkTheme
  }, __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["GridCell"], {
    top: 1,
    left: 1
  }, __jsx("a", {
    href: anime.siteUrl,
    target: "_blanc"
  }, __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["Img"], {
    src: anime.coverImage.extraLarge
  }))), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["Overlay"], {
    left: 1,
    top: 1
  }, __jsx("a", {
    href: anime.siteUrl
  }, anime.title.romaji), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["Studio"], null, __jsx("a", {
    href: anime.formatStudio ? anime.formatStudio.siteUrl : anime.siteUrl
  }, " ", anime.formatStudio ? anime.formatStudio.name : ''))), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["AnimeRank"], {
    left: 1,
    top: 1
  }, __jsx("span", null, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRegHeart"], null), " #", anime.formatRank), __jsx("span", {
    style: {
      marginTop: "1px"
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRegStar"], {
    color: "#eccc68"
  }), anime.averageScore / 10)), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["GridCell"], {
    left: 2,
    top: 1
  }, __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["AnimeHeader"], null, __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["AnimeHeaderContent"], null, __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["Span"], null, anime.formatEpiosde), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["TimeCount"], null, anime.formatTime)), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["AnimeTrailer"], null, anime.trailer ? __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["Img"], {
    src: anime.trailer.thumbnail
  }) : "", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRegPlayCircle"], null))), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["AnimeDesc"], null, __jsx("p", null, react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(anime.description))), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["AnimeGenres"], null, __jsx("ul", null, anime.genres.map((el, i) => {
    if (i < 2) {
      return __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        color: anime.coverImage.color,
        key: i
      }, el);
    }
  })))), __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    toggle: toggle,
    id: anime.id
  }), showDropDown && __jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
    toggle: toggle,
    id: anime.id,
    leaveHandler: toggle
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Anime));

/***/ }),

/***/ "./components/AnimeApp.js":
/*!********************************!*\
  !*** ./components/AnimeApp.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_animeQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries/animeQuery */ "./queries/animeQuery.js");
/* harmony import */ var _AnimeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimeList */ "./components/AnimeList.js");
/* harmony import */ var _SkeletonList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SkeletonList */ "./components/SkeletonList.js");
/* harmony import */ var _contexts_animes_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/animes.context */ "./contexts/animes.context.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function AnimeApp({
  season
}) {
  let pagex = 1;
  const {
    data,
    error,
    loading,
    fetchMore
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries_animeQuery__WEBPACK_IMPORTED_MODULE_3__["GET_ANIMES"], {
    variables: {
      page: pagex,
      season: season,
      seasonYear: 2019
    },
    onCompleted: data => {
      // Fetch more Anime if there next Page
      if (data.Page.pageInfo.hasNextPage) {
        pagex += 1;
        fetchMore({
          variables: {
            page: pagex
          },
          updateQuery: (prev, {
            fetchMoreResult
          }) => {
            return {
              Page: {
                __typename: prev.Page.__typename,
                media: [...prev.Page.media, ...fetchMoreResult.Page.media],
                pageInfo: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fetchMoreResult.Page.pageInfo)
              }
            };
          }
        });
      }
    }
  });
  if (loading) return __jsx(_SkeletonList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    maxSkeleton: 9
  });
  if (error) return __jsx("div", null, "errror");
  return __jsx("div", null, data.Page.media.length > 50 ? __jsx(_contexts_animes_context__WEBPACK_IMPORTED_MODULE_6__["AnimesProvider"], null, __jsx(_AnimeList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    animes: data.Page.media
  })) : __jsx(_SkeletonList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    maxSkeleton: 9
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AnimeApp);

/***/ }),

/***/ "./components/AnimeList.js":
/*!*********************************!*\
  !*** ./components/AnimeList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_animeHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/animeHelper */ "./helpers/animeHelper.js");
/* harmony import */ var _AnimeTypeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimeTypeList */ "./components/AnimeTypeList.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function AnimeLiist({
  animes
}) {
  const ListOfAnimes = Object(_helpers_animeHelper__WEBPACK_IMPORTED_MODULE_1__["animesByType"])(animes);
  const types = ["TV", "MOVIE", 'OVA', 'ONA'];
  return __jsx("div", null, types.map(type => __jsx(_AnimeTypeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: type,
    type: type,
    animes: ListOfAnimes[type]
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (AnimeLiist);

/***/ }),

/***/ "./components/AnimeTypeList.js":
/*!*************************************!*\
  !*** ./components/AnimeTypeList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Anime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Anime */ "./components/Anime.js");
/* harmony import */ var _styles_AnimeListStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/AnimeListStyles */ "./styles/AnimeListStyles.js");
/* harmony import */ var _contexts_theme_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/theme.context */ "./contexts/theme.context.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function AnimeTypeList({
  animes,
  type
}) {
  const {
    isDarkMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_theme_context__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]);
  return __jsx(_styles_AnimeListStyles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    tRow: "20px auto"
  }, __jsx(_styles_AnimeListStyles__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    isDark: isDarkMode
  }, type), animes.map(anime => __jsx(_Anime__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: anime.id,
    anime: anime,
    darkTheme: isDarkMode
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (AnimeTypeList);

/***/ }),

/***/ "./components/Dropdown.js":
/*!********************************!*\
  !*** ./components/Dropdown.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/AnimeStyles */ "./styles/AnimeStyles.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_animes_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/animes.context */ "./contexts/animes.context.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function DropDown({
  toggle,
  id
}) {
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_animes_context__WEBPACK_IMPORTED_MODULE_3__["DispatchContext"]);
  const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_animes_context__WEBPACK_IMPORTED_MODULE_3__["AnimesContext"]); // check if Anime in Highlights 

  const highlight = state.highlights.find(high => high.key === id);
  const color = highlight ? highlight.value : '1e90ff';

  const handleClick = e => {
    const value = e.target.dataset.value;
    dispatch({
      type: "ADD-HIGHLIGHT",
      key: id,
      value: value
    });
    toggle();
  };

  const handleRemove = () => {
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

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/HeaderStyles */ "./styles/HeaderStyles.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-switch */ "react-switch");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_theme_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/theme.context */ "./contexts/theme.context.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Header() {
  const {
    isDarkMode,
    changeTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_theme_context__WEBPACK_IMPORTED_MODULE_4__["ThemeContext"]);
  return __jsx(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["HeaderContainer"], null, __jsx(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["HeaderContent"], null, __jsx(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    href: "/"
  }, "Anime.", __jsx("span", null, "Chart")), __jsx("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/anime?name=WINTER",
    as: "/a/WINTER"
  }, __jsx(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["LinkTitle"], null, "WINTER")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/anime?name=SPRING",
    as: "/a/SPRING"
  }, __jsx(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["LinkTitle"], null, "SPRING")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/anime?name=SUMMER",
    as: "/a/SUMMER"
  }, __jsx(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["LinkTitle"], null, "SUMMER")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/anime?name=FALL",
    as: "/a/FALL"
  }, __jsx(_styles_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["LinkTitle"], null, "FALL")), __jsx(react_switch__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: changeTheme,
    onHandleColor: "#1E90FF",
    activeBoxShadow: "none",
    onColor: "#2C2C33",
    checked: isDarkMode,
    width: 30,
    height: 12,
    checkedIcon: false,
    uncheckedIcon: false,
    handleDiameter: 16
  }), __jsx("span", {
    style: {
      color: "rgba(228, 228, 228,.8)",
      fontSize: "1.2rem",
      paddingLeft: "5px"
    }
  }, "Dark Mode"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Icon.js":
/*!****************************!*\
  !*** ./components/Icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/AnimeStyles */ "./styles/AnimeStyles.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_animes_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/animes.context */ "./contexts/animes.context.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function AddIcon({
  toggle,
  id
}) {
  const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_animes_context__WEBPACK_IMPORTED_MODULE_3__["AnimesContext"]); //check if Anime in Highlights 

  const highlight = state.highlights.find(high => high.key === id);
  const color = highlight ? highlight.value : '1e90ff';

  const getIcon = val => {
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
    color: `#${color}`,
    top: 1,
    left: 2
  }, getIcon(color));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(AddIcon));

/***/ }),

/***/ "./components/PageContent.js":
/*!***********************************!*\
  !*** ./components/PageContent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_theme_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/theme.context */ "./contexts/theme.context.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PageContent(props) {
  const {
    isDarkMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_theme_context__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]);
  return __jsx("div", {
    style: {
      backgroundColor: isDarkMode ? '#1c1c21' : '#F0F0F0'
    }
  }, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (PageContent);

/***/ }),

/***/ "./components/Skeleton.js":
/*!********************************!*\
  !*** ./components/Skeleton.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/AnimeStyles */ "./styles/AnimeStyles.js");
/* harmony import */ var _styles_SkeletonStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/SkeletonStyles */ "./styles/SkeletonStyles.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Skeleton({
  isDark
}) {
  return __jsx(_styles_SkeletonStyles__WEBPACK_IMPORTED_MODULE_2__["TestingContainer"], {
    isDark: isDark
  }, __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_1__["AnimeContainer"], {
    isDark: isDark
  }, __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_1__["GridCell"], {
    left: 1,
    top: 1
  }, __jsx(_styles_SkeletonStyles__WEBPACK_IMPORTED_MODULE_2__["SkeletonImg"], null)), __jsx(_styles_AnimeStyles__WEBPACK_IMPORTED_MODULE_1__["GridCell"], {
    top: 1,
    left: 2
  }, __jsx(_styles_SkeletonStyles__WEBPACK_IMPORTED_MODULE_2__["SkeletonHeader"], null), __jsx(_styles_SkeletonStyles__WEBPACK_IMPORTED_MODULE_2__["SkeletonText"], null, __jsx(_styles_SkeletonStyles__WEBPACK_IMPORTED_MODULE_2__["SkeletonTextArea"], {
    width: "85%"
  }), __jsx(_styles_SkeletonStyles__WEBPACK_IMPORTED_MODULE_2__["SkeletonTextArea"], {
    width: "85%"
  }), __jsx(_styles_SkeletonStyles__WEBPACK_IMPORTED_MODULE_2__["SkeletonTextArea"], {
    width: "65%"
  }), __jsx(_styles_SkeletonStyles__WEBPACK_IMPORTED_MODULE_2__["SkeletonTextArea"], {
    width: "35%"
  })), __jsx(_styles_SkeletonStyles__WEBPACK_IMPORTED_MODULE_2__["SkeletonFooter"], null))));
}

/* harmony default export */ __webpack_exports__["default"] = (Skeleton);

/***/ }),

/***/ "./components/SkeletonList.js":
/*!************************************!*\
  !*** ./components/SkeletonList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Skeleton */ "./components/Skeleton.js");
/* harmony import */ var _styles_AnimeListStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/AnimeListStyles */ "./styles/AnimeListStyles.js");
/* harmony import */ var _contexts_theme_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/theme.context */ "./contexts/theme.context.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function SkeletonList({
  maxSkeleton
}) {
  const {
    isDarkMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_theme_context__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]);
  let sk = [];

  for (let i = 0; i < maxSkeleton; i++) {
    sk.push(__jsx(_Skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      isDark: isDarkMode,
      key: i
    }));
  }

  return __jsx(_styles_AnimeListStyles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    style: {
      paddingTop: isDarkMode ? '60px' : '80px'
    },
    tRow: "none"
  }, sk);
}

/* harmony default export */ __webpack_exports__["default"] = (SkeletonList);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_anime_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/anime.reducer */ "./reducers/anime.reducer.js");
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useLocalStorage */ "./hooks/useLocalStorage.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AnimesContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const DispatchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const defaultState = {
  highlights: []
};
function AnimesProvider(props) {
  const [state, dispatch] = Object(_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"])('highlights', defaultState, _reducers_anime_reducer__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return __jsx(AnimesContext.Provider, {
    value: state
  }, __jsx(DispatchContext.Provider, {
    value: dispatch
  }, props.children));
}

/***/ }),

/***/ "./contexts/theme.context.js":
/*!***********************************!*\
  !*** ./contexts/theme.context.js ***!
  \***********************************/
/*! exports provided: ThemeContext, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
function ThemeProvider(props) {
  const {
    0: isDarkMode,
    1: setDarkMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const changeTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return __jsx(ThemeContext.Provider, {
    value: {
      isDarkMode,
      changeTheme
    }
  }, props.children);
}

/***/ }),

/***/ "./helpers/Sizes.js":
/*!**************************!*\
  !*** ./helpers/Sizes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  up() {},

  down(size) {
    const sizes = {
      xs1: '414.98px',
      xs: "575.98px",
      sm: "767.98px",
      md: "991.98px",
      lg: "1199.98px",
      xl: "1400px"
    };
    return `@media (max-width:${sizes[size]})`;
  }

});

/***/ }),

/***/ "./helpers/animeHelper.js":
/*!********************************!*\
  !*** ./helpers/animeHelper.js ***!
  \********************************/
/*! exports provided: animesByType, getSeason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animesByType", function() { return animesByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeason", function() { return getSeason; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var convert_seconds_to_human__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! convert-seconds-to-human */ "convert-seconds-to-human");
/* harmony import */ var convert_seconds_to_human__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(convert_seconds_to_human__WEBPACK_IMPORTED_MODULE_1__);

 // List Of animes Types

const types = ["TV", "MOVIE", "TV_SHORT", "ONA", "OVA", "MUSIC", "SPECIAL"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const animeDate = date => {
  const day = date.day ? date.day : "";
  return `${months[date.month - 1]} ${day}, ${date.year}`;
};

const animeEpisode = (nextAiringEpisode, episodes) => {
  // check if Next episode exists or not
  const checkEp = nextAiringEpisode ? nextAiringEpisode.episode : "??"; // check Total Episodes

  const totalEp = episodes !== null ? episodes : "??";
  return `Episode ${checkEp} of ${totalEp} in`;
}; // get remainingTime for next epiosde


const remainingTime = sec => {
  // convert seconds to date
  const {
    days,
    hours,
    minutes
  } = convert_seconds_to_human__WEBPACK_IMPORTED_MODULE_1___default()(sec, "cal"); // check Text content;

  const day = days > 1 ? "days" : "day";
  const hour = hours > 1 ? "hours" : "hour";
  const min = minutes > 1 ? "mins" : "min";
  let timeCount = "";

  if (days > 0 && hours > 0) {
    // 10 Days, 10 hours
    timeCount = `${days} ${day}, ${hours} ${hour}`;
  } else if (days > 0 && hours === 0) {
    // 13 Days, 14 minutes
    timeCount = `${days} ${day}, ${minutes} ${min}`;
  } else if (days === 0 && hours > 0) {
    // 24 hours, 10 minutes
    timeCount = `${hours} ${hour}, ${minutes} ${min}`;
  } else {
    // 14 minutes
    timeCount = `${minutes} ${min}`;
  }

  return timeCount;
};

const formatAnime = anime => {
  let newAnime = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, anime);

  const {
    startDate,
    nextAiringEpisode,
    episodes,
    status,
    rankings
  } = anime;
  const rank = rankings.length > 0 ? rankings[rankings.length - 1].rank : '';

  switch (status) {
    case "FINISHED":
      newAnime.formatTime = animeDate(startDate);
      newAnime.formatEpiosde = `${episodes} Ep aired on`;
      break;

    case "RELEASING":
      // Check if  NextAiringEpisode not null
      const checkAiring = nextAiringEpisode ? remainingTime(nextAiringEpisode.timeUntilAiring) : animeDate(startDate);
      newAnime.formatTime = checkAiring;
      newAnime.formatEpiosde = animeEpisode(nextAiringEpisode, episodes);
      break;

    case "NOT_YET_RELEASED":
      newAnime.formatEpiosde = 'NOT YET RELEASED';
      newAnime.formatTime = animeDate(startDate);
      break;

    default:
      newAnime.formatTime = '??';
      newAnime.formatEpiosde = '??';
      break;
  }

  const isStudio = anime.studios ? anime.studios.nodes[0] : {};
  newAnime.formatRank = rank;
  newAnime.formatStudio = isStudio;
  return newAnime;
};

const animesByType = animes => {
  // create new list of each anime type
  let newAnimeList = {};

  for (let type of types) {
    newAnimeList[type] = [];
  }

  for (let anime of animes) {
    const type = anime.format; // add anime to arr based on type

    newAnimeList[type].push(formatAnime(anime));
  }

  return newAnimeList;
}; // Get Curr Season 

const getSeason = () => {
  const date = new Date();
  const month = date.getMonth();

  if (month < 3) {
    return 'WINTER';
  } else if (month < 6) {
    return 'SPRING';
  } else if (month < 9) {
    return 'SUMMER';
  } else {
    return 'FALL';
  }

  ;
};

/***/ }),

/***/ "./hooks/useLocalStorage.js":
/*!**********************************!*\
  !*** ./hooks/useLocalStorage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! global/window */ "global/window");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_2__);




function useLocalStorageState(key, defaultVal, reducer) {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, defaultVal, () => {
    let val;

    try {
      val = JSON.parse(global_window__WEBPACK_IMPORTED_MODULE_2___default.a.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }

    return val;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    global_window__WEBPACK_IMPORTED_MODULE_2___default.a.localStorage.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(state));
  }, [state]);
  return [state, dispatch];
}

/* harmony default export */ __webpack_exports__["default"] = (useLocalStorageState);

/***/ }),

/***/ "./hooks/useToggle.js":
/*!****************************!*\
  !*** ./hooks/useToggle.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useToggler(initalVal = false) {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initalVal);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}

/* harmony default export */ __webpack_exports__["default"] = (useToggler);

/***/ }),

/***/ "./lib/withApollo.js":
/*!***************************!*\
  !*** ./lib/withApollo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-apollo */ "next-apollo");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);


const config = {
  link: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
    uri: "https://graphql.anilist.co/",
    // Server URL (must be absolute)
    opts: {
      credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`

    }
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_apollo__WEBPACK_IMPORTED_MODULE_0__["withData"])(config));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/anime.js":
/*!************************!*\
  !*** ./pages/anime.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_withApollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/withApollo */ "./lib/withApollo.js");
/* harmony import */ var _components_AnimeApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AnimeApp */ "./components/AnimeApp.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _contexts_theme_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/theme.context */ "./contexts/theme.context.js");
/* harmony import */ var _components_PageContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PageContent */ "./components/PageContent.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Anime({
  isServer,
  query
}) {
  return __jsx("div", null, __jsx(_contexts_theme_context__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_PageContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(_components_AnimeApp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    season: query.name
  }))));
}

Anime.getInitialProps = async ({
  req,
  query
}) => {
  return {
    isServer: !!req,
    query
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withApollo__WEBPACK_IMPORTED_MODULE_1__["default"])(Anime));

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./queries/animeQuery.js":
/*!*******************************!*\
  !*** ./queries/animeQuery.js ***!
  \*******************************/
/*! exports provided: GET_ANIMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ANIMES", function() { return GET_ANIMES; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);

const GET_ANIMES = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query($page: Int, $perPage: Int, $seasonYear: Int, $season: MediaSeason) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        lastPage
        perPage
        currentPage
        perPage
        hasNextPage
      }
      media(
        seasonYear: $seasonYear
        isAdult: false
        season: $season
        sort: POPULARITY_DESC
      ) {
        title {
          english
          romaji
          native
        }
        id
        format
        status
        startDate {
          year
          month
          day
        }
        episodes
        type
        synonyms
        coverImage {
          extraLarge
          large
          medium
          color
        }
        trailer {
          thumbnail
        }
        genres
        averageScore
        rankings {
          rank
          season
        }
        source
        siteUrl
        trailer {
          id
        }
        studios(isMain: true) {
          nodes {
            id
            name
            siteUrl
          }
        }
        description
        tags {
          name
        }
        externalLinks {
          id
        }

        nextAiringEpisode {
          timeUntilAiring
          episode
        }
      }
    }
  }
`;

/***/ }),

/***/ "./reducers/anime.reducer.js":
/*!***********************************!*\
  !*** ./reducers/anime.reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


// const reducer = (state, action) => {
//     switch (action.type) {
//       case "ADD-HIGHLIGHT":
//         const newHighlight = state.find(
//           high => high.key === action.key
//         );
//         if (newHighlight) {
//           const newHigh = state.highlights.map(el =>
//             el.key === action.key ? { ...el, value: action.value } : el
//           );
//           return newHigh;
//         } else {
//           return [...state,{ key: action.key, value: action.value}];
//         }
//       case "DELETE-HIGHLIGHT":
//         return state.filter(h => h.key !== action.key);
//       case 'MOOD' :
//           return {state};
//       default:
//         return state;
//     }
//   };
//   export default reducer;
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD-HIGHLIGHT":
      const newHighlight = state.highlights.find(high => high.key === action.key);

      if (newHighlight) {
        const newHigh = state.highlights.map(el => el.key === action.key ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, el, {
          value: action.value
        }) : el);
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          highlights: newHigh
        });
      } else {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          highlights: [...state.highlights, {
            key: action.key,
            value: action.value
          }]
        });
      }

    case "DELETE-HIGHLIGHT":
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        highlights: state.highlights.filter(h => h.key !== action.key)
      });

    case 'MOOD':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        mood: action.mood
      });

    case 'CHANGE-THEME':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isDarkMode: !state.isDarkMode
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Sizes */ "./helpers/Sizes.js");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimeListStyles__Container",
  componentId: "sc-13znmvv-0"
})(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 46rem);\n  justify-content: center;\n  grid-column-gap: 50px;\n  grid-row-gap: 30px;\n  grid-template-rows: ", ";\n  padding-top: 30px;\n  padding-bottom: 30px;\n\n  ", "{\n    grid-template-columns: repeat(auto-fit, 68rem);\n  }\n  ", "{\n    grid-template-columns: repeat(auto-fit, 50rem);\n  }\n  ", "{\n    grid-template-columns: repeat(auto-fit, 39rem);\n  }\n  ", "{\n    grid-template-columns: repeat(auto-fit, 31rem);\n  }\n"], props => props.tRow, _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('lg'), _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('sm'), _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs'), _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs1'));
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "AnimeListStyles__Heading",
  componentId: "sc-13znmvv-1"
})(["\n  font-size: 2.4rem;\n  color: ", ";\n  grid-row: 1 /2;\n  grid-column: 1 / -1;\n  position: relative;\n  padding-left: 2.4rem;\n  line-height: 2.4rem;\n  ::before {\n    content: \"\";\n    position: absolute;\n    background: #1e90ff;\n    height: 4px;\n    width: 20px;\n    top: 50%;\n\n    left: 0;\n  }\n"], props => props.isDark ? '#fff' : '#333');


/***/ }),

/***/ "./styles/AnimeStyles.js":
/*!*******************************!*\
  !*** ./styles/AnimeStyles.js ***!
  \*******************************/
/*! exports provided: GridCell, AnimeContainer, AnimeDesc, AnimeGenres, AnimeHeader, Overlay, DropDown, AddIcon, ListItem, TimeCount, Span, Studio, AnimeRank, AnimeTrailer, Img, DropDownItem, AnimeHeaderContent */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeHeaderContent", function() { return AnimeHeaderContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Sizes */ "./helpers/Sizes.js");


const AnimeHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimeStyles__AnimeHeader",
  componentId: "h52tqf-0"
})(["\n  display: grid;\n  grid-template-columns: 60% 40%;\n  color: #333;\n  padding: 15px;\n  height: 40px;\n  \n"]);
const AnimeDesc = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimeStyles__AnimeDesc",
  componentId: "h52tqf-1"
})(["\n  height: 150px;\n  overflow-y: hidden;\n  padding: 15px;\n  font-size: 1.3rem;\n  margin: 10px 0;\n"]);
const GridCell = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimeStyles__GridCell",
  componentId: "h52tqf-2"
})(["\n  grid-column-start: ", ";\n  grid-row-start: ", ";\n"], props => props.left, props => props.top);
const Span = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "AnimeStyles__Span",
  componentId: "h52tqf-3"
})(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ", ";\n  \n"], props => props.blue ? "#1e90ff" : "#6e859e");
const TimeCount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "AnimeStyles__TimeCount",
  componentId: "h52tqf-4"
})(["\n  font-size: 18px;\n  display: block;\n  font-weight: 500;\n  \n  color: #6e859e;\n  ", "{\n    font-size:15px;\n   \n  }\n"], _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs'));
const AnimeHeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimeStyles__AnimeHeaderContent",
  componentId: "h52tqf-5"
})(["\n  ", "{\n    grid-column: 1 / -1;\n  }\n"], _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs'));
const AnimeGenres = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimeStyles__AnimeGenres",
  componentId: "h52tqf-6"
})(["\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  justify-content: center;\n  color: #333;\n  height: calc(300px - 287px);\n"]);
const DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(GridCell).withConfig({
  displayName: "AnimeStyles__DropDown",
  componentId: "h52tqf-7"
})(["\n  background: white;\n  align-self: flex-start;\n  justify-self: flex-end;\n  margin: 10px;\n  z-index: 10;\n  width: 150px;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  ul {\n    list-style: none;\n    transition: all .4s;\n  }\n"]);
const AnimeContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimeStyles__AnimeContainer",
  componentId: "h52tqf-8"
})(["\n  display: grid;\n  width: 460px;\n  height: 300px;\n  grid-template-columns: 180px auto;\n  background-color: ", ";\n  /* box-shadow: 0 5px 10px rgba(#000, 0.1); */\n  box-shadow: ", ";\n  border-radius: 3px;\n  \n  ", "{\n    background-color: ", ";\n    color:", ";\n  }\n  ", "{\n  border-bottom: 1px solid ", ";\n\n  }\n  ", "{\n    background-color:", ";\n  }\n", ",", ",", "{\n    color : ", "\n  }\n  ", "{\n    width: 68rem;\n   \n  }\n  ", "{\n    width: 50rem;\n   \n  }\n  ", "{\n    width: 39rem;   \n  }\n  ", "{\n    width: 31rem;\n    grid-template-columns: 140px auto;\n\n  }\n"], props => props.isDark ? '#2c2c33' : 'rgb(255, 255, 255)', props => props.isDark ? 'box-shadow: 3px 6px 21px -7px rgba(0,0,0,1)' : 'rgba(190, 190, 190, 0.5) 0px 2px 2px 0px', DropDown, props => props.isDark ? '#2c2c33' : 'rgb(255, 255, 255)', props => props.isDark ? 'rgba(228, 228, 228,.8)' : '#333', AnimeHeader, props => props.isDark ? 'rgba(20,20,24,.3)' : '#e5e5e5', AnimeGenres, props => props.isDark ? 'rgba(36,36,42,.9)' : 'rgba(41, 41, 41, 0.9)', AnimeDesc, Span, TimeCount, props => props.isDark ? 'rgba(228, 228, 228,.8)' : '#6e859e', _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('lg'), _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('sm'), _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs'), _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs1'));
const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "AnimeStyles__Img",
  componentId: "h52tqf-9"
})(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(GridCell).withConfig({
  displayName: "AnimeStyles__Overlay",
  componentId: "h52tqf-10"
})(["\n  overflow: hidden;\n  align-self: flex-end;\n  padding: 10px;\n  background-color: rgba(41, 41, 41, 0.9);\n  width: 160px;\n  z-index:20;\n  a {\n    font-weight: 500;\n    color: #fff;\n    text-decoration: none;\n    font-size: 1.4rem;\n    font-family: \"Roboto\", sans-serif;\n\n    display: block;\n  }\n  ", "{\n    width: 31rem;\n    width: 120px;\n\n  }\n"], _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs1'));
const Studio = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimeStyles__Studio",
  componentId: "h52tqf-11"
})(["\n  margin-top: 5px;\n  a {\n    color: #1e90ff;\n  }\n"]);
const AnimeRank = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(GridCell).withConfig({
  displayName: "AnimeStyles__AnimeRank",
  componentId: "h52tqf-12"
})(["\n  span {\n    background-color: rgba(41, 41, 41, 0.9);\n    padding: 3px 10px;\n    margin: 10px 10px 5px 10px;\n\n    width: 40px;\n    height: 15px;\n    border-radius: 20em;\n    font-size: 1.3rem;\n    display: flex;\n    align-items: center;\n    font-family: \"Roboto\", sans-serif;\n\n    font-weight: 500;\n    svg {\n      margin-right: 5px;\n      color: #ff4757;\n    }\n  }\n"]);
const AnimeTrailer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimeStyles__AnimeTrailer",
  componentId: "h52tqf-13"
})(["\n  grid-column: 2 / -1;\n  height: 50px;\n  position: relative;\n  cursor: pointer;\n  border-radius: 2px;\n  ", "{\n    display:none;\n   \n  }\n  img {\n    border-radius: 2px;\n  }\n  svg {\n    transform: translate(-50%, -50%);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: 30px;\n    color: rgba(255, 255, 255, 0.9);\n  }\n"], _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs'));
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "AnimeStyles__ListItem",
  componentId: "h52tqf-14"
})(["\n  display: inline-block;\n  margin-right: 10px;\n  font-size: 1.2rem;\n  font-weight:400;\n  color: #eff7fb;\n  padding:1px 5px;\n  border:1px dashed ", ";\n"], props => props.color);
const AddIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(GridCell).withConfig({
  displayName: "AnimeStyles__AddIcon",
  componentId: "h52tqf-15"
})(["\n  color: #fff;\n  justify-self: flex-end;\n  /* border:1px solid #6e859e; */\n  align-self: flex-start;\n  transform: translate(50%, -50%);\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  font-size: .8rem;\n  cursor: pointer;\n"], props => props.color);
const DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "AnimeStyles__DropDownItem",
  componentId: "h52tqf-16"
})(["\n  font-size: 13px;\n  color: inherit;\n  padding: 5px 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: all 0.4s;\n  padding: 6px 10px;\n  :hover{\n      background:#1e90ff;\n      color:#fff;\n  }\n\n  svg {\n    padding: 5px;\n    border-radius: 50%;\n    background: ", ";\n    font-size: 10px;\n    color: white;\n    margin-right: 8px;\n  }\n"], props => props.color);


/***/ }),

/***/ "./styles/HeaderStyles.js":
/*!********************************!*\
  !*** ./styles/HeaderStyles.js ***!
  \********************************/
/*! exports provided: LinkTitle, Heading, HeaderContainer, HeaderContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkTitle", function() { return LinkTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContainer", function() { return HeaderContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContent", function() { return HeaderContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Sizes */ "./helpers/Sizes.js");


const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HeaderStyles__HeaderContainer",
  componentId: "ad14n1-0"
})(["\nheight: 64px;\nbackground: #181a16;\n"]);
const HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HeaderStyles__HeaderContent",
  componentId: "ad14n1-1"
})(["\nmargin: 0 auto;\nmax-width: 1490px;\nheight: 100%;\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\n", "{\n    justify-content: center;\n\n  }\n"], _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs'));
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "HeaderStyles__Heading",
  componentId: "ad14n1-2"
})(["\nfont-size: 2rem;\ncolor: #fff;\ntext-transform: uppercase;\nfont-family: \"Roboto\";\ntext-decoration: none;\nfont-weight: 700;\nspan {\n  color: #f1c40f;\n  font-weight: 300;\n}\n", "{\n    display:none;\n\n  }\n"], _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs'));
const LinkTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "HeaderStyles__LinkTitle",
  componentId: "ad14n1-3"
})(["\ncolor: rgba(255,255,255,.7);\nfont-size: 1.4rem;\nfont-weight: 400;\ncursor: pointer;\nfont-family: \"Roboto\";\nmargin: 0 14px;\ntransition:color .3s;\n:hover{\n  color: rgba(255,255,255,.9);\n\n}\n", "{\n    margin: 0 7px;\n    font-size:1.3rem;\n\n  }\n"], _helpers_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"].down('xs'));


/***/ }),

/***/ "./styles/SkeletonStyles.js":
/*!**********************************!*\
  !*** ./styles/SkeletonStyles.js ***!
  \**********************************/
/*! exports provided: SkeletonFooter, TestingContainer, SkeletonHeader, SkeletonImg, SkeletonText, SkeletonTextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonFooter", function() { return SkeletonFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingContainer", function() { return TestingContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonHeader", function() { return SkeletonHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonImg", function() { return SkeletonImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonText", function() { return SkeletonText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonTextArea", function() { return SkeletonTextArea; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SkeletonImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SkeletonStyles__SkeletonImg",
  componentId: "sc-122qvg8-0"
})(["\nheight: 100%;\nwidth: 100%;\nbackground-color:#e8ecf0;\n\n"]);
const SkeletonHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SkeletonStyles__SkeletonHeader",
  componentId: "sc-122qvg8-1"
})(["\nbackground: #cad2db;\nheight: 71px;\n\n\n"]);
const SkeletonText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SkeletonStyles__SkeletonText",
  componentId: "sc-122qvg8-2"
})(["\nheight: 150px;\nmargin: 10px 0;\npadding: 15px;\n"]);
const SkeletonTextArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "SkeletonStyles__SkeletonTextArea",
  componentId: "sc-122qvg8-3"
})(["\nheight: 14px;\nmargin: 1rem 0;\nbackground: #e8ecf0;\ndisplay: block;\nwidth: ", ";\n"], props => props.width);
const SkeletonFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SkeletonStyles__SkeletonFooter",
  componentId: "sc-122qvg8-4"
})(["\nheight: calc(300px - 287px);\npadding: 8px;\nbackground-color: #cad2db;\n"]);
const TestingContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SkeletonStyles__TestingContainer",
  componentId: "sc-122qvg8-5"
})(["\n\n    ", "{\n        background-color:", ";\n    }\n    ", "{\n        background-color:", ";\n    }\n    ", "{\n        background-color:", ";\n        border-bottom: 1px solid ", ";\n\n    }\n    ", "{\n        background-color:", ";\n    }\n\n"], SkeletonImg, props => props.isDark ? 'rgba(20,20,24,.3)' : '#e8ecf0', SkeletonFooter, props => props.isDark ? 'rgba(36,36,42,.9)' : '#cad2db', SkeletonHeader, props => props.isDark ? '#2c2c33' : '#cad2db', props => props.isDark ? 'rgba(20,20,24,.3)' : '#e5e5e5', SkeletonTextArea, props => props.isDark ? 'rgba(20,20,24,.3)' : '#e8ecf0');


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/anime.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! I:\AnimeChart\animechart\pages\anime.js */"./pages/anime.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "convert-seconds-to-human":
/*!*******************************************!*\
  !*** external "convert-seconds-to-human" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("convert-seconds-to-human");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "global/window":
/*!********************************!*\
  !*** external "global/window" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("global/window");

/***/ }),

/***/ "next-apollo":
/*!******************************!*\
  !*** external "next-apollo" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-apollo");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-switch":
/*!*******************************!*\
  !*** external "react-switch" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-switch");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=anime.js.map