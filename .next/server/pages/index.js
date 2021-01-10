module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: ./common/store/index.ts + 4 modules
var store = __webpack_require__("zQ19");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Image/index.tsx
var Image = __webpack_require__("vW1X");

// EXTERNAL MODULE: external "lodash/pick"
var pick_ = __webpack_require__("KPEA");
var pick_default = /*#__PURE__*/__webpack_require__.n(pick_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/SectionNews/index.module.scss
var index_module = __webpack_require__("71vV");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "randomcolor"
var external_randomcolor_ = __webpack_require__("eDAA");
var external_randomcolor_default = /*#__PURE__*/__webpack_require__.n(external_randomcolor_);

// EXTERNAL MODULE: ./utils/mobx.tsx
var mobx = __webpack_require__("ytCK");

// CONCATENATED MODULE: ./components/SectionNews/section.tsx


var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const SectionWrap = Object(mobx["a" /* observer */])( /*#__PURE__*/Object(external_react_["forwardRef"])((props, ref) => {
  const {
    title,
    icon,
    moreUrl,
    color = external_randomcolor_default()({
      luminosity: 'dark'
    }),
    showMoreIcon = true
  } = props,
        rest = _objectWithoutProperties(props, ["title", "icon", "moreUrl", "color", "showMoreIcon"]);

  const {
    appStore
  } = Object(store["a" /* useStore */])();
  const mode = appStore.colorMode;
  return __jsx(external_react_default.a.Fragment, null, __jsx(style_default.a, {
    id: "358401028"
  }, ["h3.jsx-358401028{-webkit-transition:all 0.5s;transition:all 0.5s;}"]), __jsx("div", {
    ref: ref,
    className: "jsx-358401028" + " " + "news-item"
  }, __jsx("div", {
    className: "jsx-358401028" + " " + "news-head"
  }, __jsx("h3", {
    style: {
      backgroundColor: color,
      filter: mode === 'dark' ? 'brightness(0.8)' : undefined
    },
    className: "jsx-358401028" + " " + "title"
  }, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: icon,
    className: index_module_default.a.icon
  }), title), showMoreIcon && moreUrl && __jsx("h3", {
    style: {
      backgroundColor: color,
      filter: mode === 'dark' ? 'brightness(0.8)' : undefined
    },
    className: "jsx-358401028" + " " + "more"
  }, __jsx(link_default.a, {
    href: moreUrl
  }, __jsx("a", {
    className: "jsx-358401028"
  }, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faChevronRight"]
  }))))), __jsx("div", {
    className: "jsx-358401028" + " " + "news-body"
  }, __jsx("div", _extends({}, rest, {
    className: "jsx-358401028" + " " + (rest && rest.className != null && rest.className || "row s")
  }), props.children))));
}));
// CONCATENATED MODULE: ./components/SectionNews/index.tsx

var SectionNews_jsx = external_react_default.a.createElement;

function SectionNews_extends() { SectionNews_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SectionNews_extends.apply(this, arguments); }

function SectionNews_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SectionNews_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SectionNews_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Card = props => {
  const {
    cover,
    shade = true,
    title,
    children
  } = props;
  return SectionNews_jsx("div", {
    className: index_module_default.a['card-container']
  }, SectionNews_jsx("div", {
    className: index_module_default.a['card-cover-wrap']
  }, SectionNews_jsx(Image["a" /* ImageLazy */], {
    src: cover
  })), SectionNews_jsx("div", {
    className: index_module_default.a['card-header']
  }), title && SectionNews_jsx("div", {
    className: index_module_default.a['card-title']
  }, SectionNews_jsx("h3", null, title)), SectionNews_jsx("div", {
    className: index_module_default.a['card-body']
  }, children), shade && SectionNews_jsx("div", {
    className: index_module_default.a['text-shade']
  }));
};

const SectionNews = /*#__PURE__*/Object(external_react_["memo"])( /*#__PURE__*/Object(external_react_["forwardRef"])((props, ref) => {
  const {
    content,
    size = 6
  } = props,
        rest = SectionNews_objectWithoutProperties(props, ["content", "size"]);

  return SectionNews_jsx(SectionWrap, SectionNews_extends({}, rest, {
    ref: ref
  }), content.map((item, i) => {
    return SectionNews_jsx("div", {
      className: `col-${size} col-m-3`,
      key: i
    }, SectionNews_jsx(link_default.a, pick_default()(item, ['href', 'as']), SectionNews_jsx("a", {
      className: index_module_default.a['news-article']
    }, SectionNews_jsx(Card, {
      cover: item.background
    }, SectionNews_jsx("span", null, item.title)))));
  }));
}));
const SectionCard = /*#__PURE__*/Object(external_react_["memo"])(({
  title,
  desc,
  src,
  onClick,
  href
}) => {
  return SectionNews_jsx("div", {
    className: `col-6 col-m-3`,
    style: {
      marginTop: '2rem'
    }
  }, SectionNews_jsx("a", {
    className: index_module_default.a['news-article'],
    href: href,
    onClick: onClick
  }, SectionNews_jsx(Card, {
    cover: src,
    title: title
  }, SectionNews_jsx("span", null, desc))));
});
/* harmony default export */ var components_SectionNews = (SectionNews);
// EXTERNAL MODULE: ./configs.ts
var configs = __webpack_require__("F/y2");

// EXTERNAL MODULE: ./core/index.ts + 3 modules
var core = __webpack_require__("lmnT");

// EXTERNAL MODULE: external "rc-queue-anim"
var external_rc_queue_anim_ = __webpack_require__("Ufq7");
var external_rc_queue_anim_default = /*#__PURE__*/__webpack_require__.n(external_rc_queue_anim_);

// EXTERNAL MODULE: external "rc-texty"
var external_rc_texty_ = __webpack_require__("cin7");
var external_rc_texty_default = /*#__PURE__*/__webpack_require__.n(external_rc_texty_);

// EXTERNAL MODULE: ./utils/index.ts + 1 modules
var utils = __webpack_require__("cBaE");

// CONCATENATED MODULE: ./pages/index.tsx
var pages_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function pages_extends() { pages_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return pages_extends.apply(this, arguments); }












const IndexView = props => {
  var _props$section, _props$section2;

  const {
    socialStore
  } = Object(store["a" /* useStore */])();
  const {
    socialLinks
  } = socialStore;
  const name = configs["a" /* default */].author;
  return pages_jsx("main", null, pages_jsx("section", {
    className: "paul-intro"
  }, pages_jsx("div", {
    className: "intro-avatar "
  }, pages_jsx("img", {
    src: configs["a" /* default */].avatar,
    alt: name,
    style: {
      width: '100%'
    }
  })), pages_jsx("div", {
    className: "intro-info"
  }, pages_jsx("h1", null, pages_jsx(external_rc_texty_default.a, {
    type: 'mask-bottom',
    mode: 'smooth'
  }, name)), pages_jsx("p", null, pages_jsx(external_rc_texty_default.a, {
    type: 'mask-bottom',
    mode: 'smooth',
    delay: 500
  }, configs["a" /* default */].description)), pages_jsx(external_rc_queue_anim_default.a, {
    delay: 500,
    duration: 500,
    animConfig: {
      opacity: [1, 0],
      translateY: [0, 50]
    }
  }, pages_jsx("div", {
    className: "social-icons",
    key: 'a'
  }, socialLinks.map(item => {
    return pages_jsx("a", {
      href: item.url,
      target: "_blank",
      "ks-text": item.title,
      "ks-tag": "bottom",
      key: item.title,
      style: item.color ? {
        color: item.color
      } : {}
    }, pages_jsx(react_fontawesome_["FontAwesomeIcon"], {
      icon: item.icon
    }));
  }))))), pages_jsx("section", {
    className: "paul-news",
    style: {
      minHeight: '34rem'
    }
  }, pages_jsx(external_rc_queue_anim_default.a, {
    className: "demo-content",
    delay: 1200,
    duration: 500,
    animConfig: [{
      opacity: [1, 0],
      translateY: [0, 50]
    }, {
      opacity: [1, 0],
      translateY: [0, -50]
    }]
  }, [// @ts-ignore
  pages_jsx(components_SectionNews, pages_extends({}, (_props$section = props.section) === null || _props$section === void 0 ? void 0 : _props$section.postSection, {
    key: 1
  })), // @ts-ignore
  pages_jsx(components_SectionNews, pages_extends({}, (_props$section2 = props.section) === null || _props$section2 === void 0 ? void 0 : _props$section2.noteSection, {
    key: 2
  }))])));
};

function buildRoute(type, obj) {
  switch (type) {
    case 'Post':
      {
        const {
          slug
        } = obj;
        return {
          as: `/posts/${slug}`,
          href: `/posts/[slug]`
        };
      }

    case 'Note':
      {
        // @ts-ignore
        const {
          nid
        } = obj;
        return {
          as: `/notes/${nid}`,
          href: `/notes/[id]`
        };
      }

    case 'Say':
      {
        return {
          as: `/says`,
          href: `/says`
        };
      }
  }
}

const getStaticProps = async () => {
  const images = Object(utils["b" /* getAnimationImages */])();
  const posts = [...core["a" /* Core */].fetcher.articles.values()].sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
  const notes = [...core["a" /* Core */].fetcher.notes.values()].sort((a, b) => b.nid - a.nid);
  const section = {
    postSection: {
      title: '最新博文',
      icon: free_solid_svg_icons_["faBookOpen"],
      moreUrl: 'posts',
      content: posts.slice(0, 4).map(p => {
        return _objectSpread({
          title: p.title,
          background: images.pop(),
          _id: p.slug
        }, buildRoute('Post', p));
      })
    },
    noteSection: {
      title: '随便写写',
      icon: free_solid_svg_icons_["faPencilAlt"],
      moreUrl: 'notes',
      content: notes.slice(0, 4).map(n => {
        return _objectSpread({
          title: n.title,
          background: images.pop(),
          _id: n.nid
        }, buildRoute('Note', n));
      })
    }
  };
  return {
    props: {
      section
    }
  };
};
/* harmony default export */ var pages = __webpack_exports__["default"] = (IndexView);

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4vDL":
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "71vV":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"icon": "SectionNews_icon__w_rh8",
	"avatar-item": "SectionNews_avatar-item__2j9Yd",
	"avatar-name": "SectionNews_avatar-name__3syRf",
	"friends-wrap": "SectionNews_friends-wrap__3pfJV",
	"card-container": "SectionNews_card-container__1nays",
	"card-cover-wrap": "SectionNews_card-cover-wrap__1DHPb",
	"card-title": "SectionNews_card-title__3k9WJ",
	"card-body": "SectionNews_card-body__1Tj-4",
	"card-header": "SectionNews_card-header__2M67p",
	"text-shade": "SectionNews_text-shade__QzdgY",
	"news-article": "SectionNews_news-article__3ttyR"
};


/***/ }),

/***/ "F/y2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export configs */
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/*
 * @Author: Innei
 * @Date: 2020-09-05 09:27:38
 * @LastEditTime: 2020-09-05 19:25:25
 * @LastEditors: Innei
 * @FilePath: /candy/configs.ts
 * @Coding with Love
 */


const menu = [{
  title: '源',
  path: '/',
  type: 'Home',
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faDotCircle"],
  subMenu: []
}, {
  title: '文',
  path: '/posts',
  type: 'Post',
  subMenu: [],
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGlasses"]
}, {
  title: '记',
  type: 'Note',
  path: '/notes',
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFeatherAlt"]
}, {
  title: '览',
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHistory"],
  path: '/timeline' // subMenu: [
  //   {
  //     title: '生活',
  //     icon: faFeatherAlt,
  //     path: '/timeline?type=note',
  //   },
  //   {
  //     title: '博文',
  //     icon: faBookOpen,
  //     path: '/timeline?type=post',
  //   },
  // ],

} // {
//   title: '友',
//   icon: faUserFriends,
//   path: '/friends',
// },
];
const social = [{
  url: 'https://github.com/wibus-wee',
  title: 'GitHub',
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGithub"],
  color: 'var(--black)'
}, {
  url: 'https://jq.qq.com/?_wv=1027&k=iZxOGzDW',
  title: 'QQ',
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faQq"],
  color: '#12b7f5'
}, {
  url: '#',
  title: 'twitter',
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTwitter"],
  color: '#02A4ED'
}];
const configs = {
  title: '糖果屋',
  description: '一个测试站点',
  keywords: ['blog'],
  menu,
  url: 'https://candy.iucky.cn',
  author: 'Wibus',
  social,
  icp: {
    name: ' ',
    url: ' '
  },
  travellings: true,
  // 开往
  avatar: 'https://q.qlogo.cn/g?b=qq&nk=1596355173&s=640'
};
/* harmony default export */ __webpack_exports__["a"] = (configs);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KPEA":
/***/ (function(module, exports) {

module.exports = require("lodash/pick");

/***/ }),

/***/ "KiuA":
/***/ (function(module, exports) {

module.exports = require("dayjs/locale/zh-cn");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "U7PI":
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/localizedFormat");

/***/ }),

/***/ "Ufq7":
/***/ (function(module, exports) {

module.exports = require("rc-queue-anim");

/***/ }),

/***/ "VBo9":
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "X+54":
/***/ (function(module, exports) {

module.exports = require("markdown-yaml-metadata-parser");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Z/QA":
/***/ (function(module, exports) {

module.exports = require("react-zmage");

/***/ }),

/***/ "ZfK2":
/***/ (function(module, exports) {

module.exports = require("remove-markdown");

/***/ }),

/***/ "boVf":
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "cBaE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ utils["b" /* getAnimationImages */]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ utils["d" /* getSummaryFromMd */]; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ utils["a" /* UUID */]; });

// UNUSED EXPORTS: getRandomImage, isClientSide, isServerSide, flattenChildren, _uuid, isValidDate, hexToRGB, DateFormat, parseDate, relativeTimeFromNow

// EXTERNAL MODULE: ./utils/utils.ts
var utils = __webpack_require__("z1bh");

// CONCATENATED MODULE: ./utils/color.ts
/*
 * @Author: Innei
 * @Date: 2020-05-26 17:52:41
 * @LastEditTime: 2020-06-14 20:17:06
 * @LastEditors: Innei
 * @FilePath: /mx-web/utils/color.ts
 * @Copyright
 */
function hexToRGB(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}
// EXTERNAL MODULE: ./utils/time.ts
var time = __webpack_require__("eSIs");

// CONCATENATED MODULE: ./utils/index.ts
/*
 * @Author: Innei
 * @Date: 2020-06-20 20:55:13
 * @LastEditTime: 2020-09-05 11:21:36
 * @LastEditors: Innei
 * @FilePath: /candy/utils/index.ts
 * @Coding with Love
 */




/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
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
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cin7":
/***/ (function(module, exports) {

module.exports = require("rc-texty");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eDAA":
/***/ (function(module, exports) {

module.exports = require("randomcolor");

/***/ }),

/***/ "eSIs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DateFormat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return relativeTimeFromNow; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("boVf");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KiuA");
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4vDL");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("U7PI");
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("jYNn");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_4__);





dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_4___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_3___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.locale('zh-cn');
let DateFormat;

(function (DateFormat) {
  DateFormat[DateFormat["MMM DD YYYY"] = 0] = "MMM DD YYYY";
  DateFormat[DateFormat["HH:mm"] = 1] = "HH:mm";
  DateFormat[DateFormat["LLLL"] = 2] = "LLLL";
  DateFormat[DateFormat["H:mm:ss A"] = 3] = "H:mm:ss A";
  DateFormat[DateFormat["YYYY-MM-DD"] = 4] = "YYYY-MM-DD";
  DateFormat[DateFormat["YYYY-MM-DD dddd"] = 5] = "YYYY-MM-DD dddd";
  DateFormat[DateFormat["YYYY-MM-DD ddd"] = 6] = "YYYY-MM-DD ddd";
  DateFormat[DateFormat["MM-DD ddd"] = 7] = "MM-DD ddd";
})(DateFormat || (DateFormat = {}));

const parseDate = (time, format) => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time).format(format);
const relativeTimeFromNow = (time, withoutSuffix) => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(new Date(time)).fromNow(withoutSuffix);
/* unused harmony default export */ var _unused_webpack_default_export = ({
  parseDate,
  relativeTimeFromNow
});

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "jYNn":
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ "lmnT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Core; });

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__("boVf");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__("mw/K");

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__("oyvS");

// CONCATENATED MODULE: ./utils/collection.ts
/*
 * @Author: Innei
 * @Date: 2020-09-05 10:08:58
 * @LastEditTime: 2020-09-05 16:40:36
 * @LastEditors: Innei
 * @FilePath: /candy/utils/collection.ts
 * @Coding with Love
 */
class Collection extends Map {
  toObject() {
    // @ts-ignore
    const obj = {};

    for (const [k, v] of this.entries()) {
      obj[k] = v;
    }

    return obj;
  }

  toJSON() {
    return JSON.stringify(this.toObject());
  }

  get tail() {
    return [...this.values()][this.size - 1];
  }

  slice(start, end) {
    if (start < 0 || start > end) {
      return [];
    }

    const entries = [...this.values()];
    const arr = [];

    for (let index = start; index < Math.min(end, this.size); index++) {
      arr.push(entries[index]);
    }

    return arr;
  }

  getKeys() {
    return [...this.entries()].map(([k]) => k);
  }

  getValues() {
    return [...this.entries()].map(([, v]) => v);
  }

  map(cb) {
    const e = this.entries();
    let index = 0;
    const arr = [];

    for (const [k, v] of e) {
      const item = cb.call(this, v, k, index++);
      arr.push(item);
    }

    return arr;
  }

  uniqueSet(key, value) {
    const hasKey = this.has(key);

    if (hasKey) {
      const postfixRegexp = /-(\d+)$/;
      const hasPostfix = postfixRegexp.exec(key);

      if (!hasPostfix) {
        return this.set(key.concat('-1'), value);
      } else {
        const now = hasPostfix[1];
        const next = now + 1;
        return this.set(key.concat('-', next.toString()), value);
      }
    } else {
      return this.set(key, value);
    }
  }

}
// EXTERNAL MODULE: ./utils/utils.ts
var utils = __webpack_require__("z1bh");

// EXTERNAL MODULE: external "markdown-yaml-metadata-parser"
var external_markdown_yaml_metadata_parser_ = __webpack_require__("X+54");

// CONCATENATED MODULE: ./core/utils.ts
/*
 * @Author: Innei
 * @Date: 2020-09-05 12:56:33
 * @LastEditTime: 2020-09-05 13:31:01
 * @LastEditors: Innei
 * @FilePath: /candy/core/utils.ts
 * @Coding with Love
 */
 // @ts-ignore



const readMarkdownFile = path => {
  const stat = external_fs_["statSync"](path);

  if (!/\.md$/.test(path) || stat.isDirectory()) {
    throw new ReferenceError('ext must be .md');
  }

  const filenameWithoutExt = Object(external_path_["basename"])(path).replace(/\.md$/, '').replace(' ', '-');
  const raw = external_fs_["readFileSync"](path, {
    encoding: 'utf-8'
  }); // stat.

  const {
    metadata = {},
    content
  } = external_markdown_yaml_metadata_parser_(raw);
  const created = new Date(metadata.created || metadata.date);
  const modified = new Date(metadata.modified || metadata.updated);
  return {
    stat,
    raw,
    created,
    modified,
    content,
    text: content,
    metadata,
    title: metadata.title || filenameWithoutExt
  };
};
// CONCATENATED MODULE: ./core/fetch.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Author: Innei
 * @Date: 2020-09-05 09:33:40
 * @LastEditTime: 2020-09-05 19:09:37
 * @LastEditors: Innei
 * @FilePath: /candy/core/fetch.ts
 * @Coding with Love
 */







const curDir = process.cwd();
const rootDir = external_path_["resolve"](curDir, './_posts');

class fetch_Fetcher {
  constructor() {
    _defineProperty(this, "articles", new Collection());

    _defineProperty(this, "notes", new Collection());

    _defineProperty(this, "pages", new Collection());

    if (false) {}

    this.init();
  }

  init() {
    const posts = this.getAllPosts();
    this.articles.clear();

    for (const post of posts) {
      this.articles.uniqueSet(post.slug, post);
    }

    const notes = this.getAllNotes();
    this.notes.clear();

    for (const note of notes) {
      this.notes.set(note.nid.toString(), note);
    }

    const pages = this.getAllPages();
    this.pages.clear();

    for (const page of pages) {
      this.pages.uniqueSet(page.slug.toString(), page);
    }
  }

  resolvePostDir(type) {
    return Object(external_path_["resolve"])(rootDir, type);
  }

  getAllFilesInDir(dir) {
    return external_fs_["readdirSync"](dir).map(d => external_path_["resolve"](dir, d));
  }

  getAllPosts() {
    const dir = this.resolvePostDir('articles');
    const files = this.getAllFilesInDir(dir);
    const all = [];

    for (const p of files) {
      try {
        const {
          content,
          created,
          metadata,
          modified,
          stat,
          title
        } = readMarkdownFile(p);
        all.push({
          title,
          slug: metadata.slug || external_dayjs_default()(stat.ctime).format('YYYY-MM-DD') || new utils["a" /* UUID */]().uuid,
          created: Object(utils["f" /* isValidDate */])(created) || stat.ctime.toISOString(),
          modified: Object(utils["f" /* isValidDate */])(modified) || stat.mtime.toISOString(),
          content
        });
      } catch {
        continue;
      }
    }

    return all.sort((b, a) => new Date(a.created).getTime() - new Date(b.created).getTime());
  }

  getPostBySlug(slug) {
    return this.articles.get(slug);
  }

  getPostsByPager({
    page = 1,
    size = this.articles.size
  } = {}) {
    size = size || this.articles.size;
    page = page || 1;
    const totalPage = Math.ceil(this.articles.size / size);
    const skip = (page - 1) * size;
    const posts = this.articles.slice(skip, skip + size);
    return {
      posts,
      query: {
        currentPage: page,
        hasNext: page + 1 <= totalPage,
        hasPrev: page - 1 > 0,
        size: size,
        totalPage
      }
    };
  }

  getAllNotes() {
    const dir = this.resolvePostDir('notes');
    const paths = this.getAllFilesInDir(dir);
    const all = [];
    let i = 1;

    for (const path of paths) {
      try {
        const {
          content,
          created,
          metadata,
          modified,
          stat,
          title
        } = readMarkdownFile(path);
        all.push({
          title,
          nid: i++,
          created: Object(utils["f" /* isValidDate */])(created) || stat.ctime.toISOString(),
          modified: Object(utils["f" /* isValidDate */])(modified) || stat.mtime.toISOString(),
          content,
          mood: metadata.mood || '',
          weather: metadata.weather || '',
          hasNext: false,
          hasPrev: false
        });
      } catch {
        continue;
      }
    }

    return all.sort((a, b) => {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }).map((i, index) => {
      return _objectSpread(_objectSpread({}, i), {}, {
        nid: index,
        hasNext: index < all.length - 1,
        hasPrev: index > 1
      });
    });
  }

  getAllPages() {
    const dir = this.resolvePostDir('pages');
    const paths = this.getAllFilesInDir(dir);
    const all = [];

    for (const path of paths) {
      try {
        const {
          content,
          created,
          metadata,
          modified,
          stat,
          title
        } = readMarkdownFile(path);
        all.push({
          title,
          subtitle: metadata.subtitle || '',
          slug: metadata.slug || title,
          created: Object(utils["f" /* isValidDate */])(created) || stat.ctime.toISOString(),
          modified: Object(utils["f" /* isValidDate */])(modified) || stat.mtime.toISOString(),
          content,
          order: metadata.order
        });
      } catch {
        continue;
      }
    } // asc


    return all.sort((a, b) => a.order - b.order).map((n, i) => _objectSpread(_objectSpread({}, n), {}, {
      order: i
    }));
  }

}

/* harmony default export */ var fetch = (new fetch_Fetcher());
// CONCATENATED MODULE: ./core/index.ts
/*
 * @Author: Innei
 * @Date: 2020-09-05 10:49:40
 * @LastEditTime: 2020-09-05 10:50:11
 * @LastEditors: Innei
 * @FilePath: /candy/core/index.ts
 * @Coding with Love
 */

const Core = {
  fetcher: fetch
};

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
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


const createRouter = (...args) => {
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
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nazx":
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "rWQ8":
/***/ (function(module, exports) {

module.exports = require("lodash/shuffle");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "uoFm":
/***/ (function(module, exports) {

module.exports = require("react-lazy-images");

/***/ }),

/***/ "vW1X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ImageLazyWithPopup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eDAA");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ytCK");
/* harmony import */ var _common_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zQ19");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("z1bh");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Zmage = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "Z/QA", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Z/QA")],
    modules: ['react-zmage']
  }
});
const LazyImage = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "uoFm", 7)).then(mo => mo.LazyImage), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("uoFm")],
    modules: ['react-lazy-images']
  }
});
const Image = Object(utils_mobx__WEBPACK_IMPORTED_MODULE_4__[/* observer */ "a"])(({
  src,
  alt,
  placeholderRef,
  popup = false
}) => {
  const {
    0: loaded,
    1: setLoad
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    appStore
  } = Object(_common_store__WEBPACK_IMPORTED_MODULE_5__[/* useStore */ "a"])();
  const isMobile = appStore.viewport.mobile;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (src) {
      const image = new window.Image();
      image.src = src;

      image.onload = () => {
        setLoad(true);

        try {
          if (placeholderRef && placeholderRef.current) {
            placeholderRef.current.classList.add('hide');
          } // if (wrapRef && wrapRef.current) {
          //   wrapRef.current.style.height = ''
          // }
          // eslint-disable-next-line no-empty

        } catch {}
      };
    }
  }, [placeholderRef, src]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('lazyload-image', !loaded && 'image-hide')
  }, popup ? isMobile ? __jsx("img", {
    src: src,
    alt: alt,
    onClick: () => {
      window.open(src);
    }
  }) : __jsx(Zmage, {
    src: src,
    alt: alt,
    backdrop: 'var(--light-bg)'
  }) : __jsx("img", {
    src: src,
    alt: alt
  })));
});
const ImageLazy = Object(utils_mobx__WEBPACK_IMPORTED_MODULE_4__[/* observer */ "a"])(props => {
  const {
    defaultImage,
    src,
    alt = src,
    height,
    width,
    useRandomBackgroundColor,
    popup = false,
    style
  } = props,
        rest = _objectWithoutProperties(props, ["defaultImage", "src", "alt", "height", "width", "useRandomBackgroundColor", "popup", "style"]);

  const realImageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const placeholderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const wrapRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const colorMode = Object(_common_store__WEBPACK_IMPORTED_MODULE_5__[/* useStore */ "a"])().appStore.colorMode;
  const {
    0: randColor,
    1: setRandColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(randomcolor__WEBPACK_IMPORTED_MODULE_3___default()({
    luminosity: colorMode === 'light' ? 'bright' : 'dark'
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setRandColor(randomcolor__WEBPACK_IMPORTED_MODULE_3___default()({
      luminosity: colorMode === 'light' ? 'light' : 'dark'
    }));
  }, [colorMode]);
  return __jsx("div", {
    style: _objectSpread({}, style || {})
  }, defaultImage ? __jsx("img", _extends({
    src: defaultImage,
    alt: alt
  }, rest, {
    ref: realImageRef
  })) : __jsx("div", {
    style: {
      position: 'relative',
      // overflow: 'hidden',
      height,
      width,
      maxWidth: '100%',
      margin: 'auto'
    },
    ref: wrapRef
  }, __jsx(LazyImage, {
    src: src,
    alt: alt,
    loadEagerly: !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__[/* isClientSide */ "e"])(),
    placeholder: ({
      ref
    }) => __jsx("div", {
      ref: ref
    }),
    actual: props => {
      return __jsx(Image, _extends({
        className: 'image-hide lazyload-image'
      }, rest, {
        src: src,
        alt: alt,
        popup: popup
      }, {
        placeholderRef
      }, props));
    },
    observerProps: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__[/* isClientSide */ "e"])() ? {
      rootMargin: '100px'
    } : undefined
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('placeholder-image', props.className),
    ref: placeholderRef,
    style: {
      height,
      width,
      maxWidth: '100%',
      position: 'absolute',
      backgroundColor: useRandomBackgroundColor ? randColor : '',
      filter: useRandomBackgroundColor && colorMode === 'dark' ? 'brightness(0.5)' : 'brightness(1.3)',
      zIndex: -1
    }
  })), alt && alt.startsWith('!') && __jsx("p", {
    className: 'img-alt'
  }, alt.slice(1)));
});
const ImageLazyWithPopup = props => {
  const {
    src,
    alt,
    height,
    width
  } = props,
        rest = _objectWithoutProperties(props, ["src", "alt", "height", "width"]);

  return __jsx(ImageLazy, _extends({
    src: src,
    alt: alt || src,
    height: height,
    width: width,
    useRandomBackgroundColor: true,
    popup: true
  }, rest));
};

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "ytCK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return observer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nazx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const hasSymbol = typeof Symbol === 'function' && Symbol.for; // Using react-is had some issues (and operates on elements, not on types), see #608 / #609

const ReactForwardRefSymbol = hasSymbol ? Symbol.for('react.forward_ref') : typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef === 'function' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(() => null)['$$typeof'];
const ReactMemoSymbol = hasSymbol ? Symbol.for('react.memo') : typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.memo === 'function' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(() => null)['$$typeof'];
/**
 * Observer function / decorator
 */

function observer(component) {
  if (component['isMobxInjector'] === true) {
    console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
  }

  if (ReactMemoSymbol && component['$$typeof'] === ReactMemoSymbol) {
    throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
  } // Unwrap forward refs into `<Observer>` component
  // we need to unwrap the render, because it is the inner render that needs to be tracked,
  // not the ForwardRef HoC


  if (ReactForwardRefSymbol && component['$$typeof'] === ReactForwardRefSymbol) {
    const baseRender = component['render'];
    if (typeof baseRender !== 'function') throw new Error('render property of ForwardRef was not a function');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function ObserverForwardRef() {
      // eslint-disable-next-line prefer-rest-params
      const args = arguments; // eslint-disable-next-line prefer-spread

      return __jsx(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["Observer"], null, () => baseRender.apply(undefined, args));
    });
  } // Function component


  if (typeof component === 'function' && (!component.prototype || !component.prototype.render) && !component['isReactClass'] && !Object.prototype.isPrototypeOf.call(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component, component)) {
    return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["observer"])(component);
  }

  return component;
}

/***/ }),

/***/ "z1bh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAnimationImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRandomImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isClientSide; });
/* unused harmony export isServerSide */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSummaryFromMd; });
/* unused harmony export flattenChildren */
/* unused harmony export _uuid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isValidDate; });
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rWQ8");
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remove_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfK2");
/* harmony import */ var remove_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remove_markdown__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Author: Innei
 * @Date: 2020-06-20 20:51:31
 * @LastEditTime: 2020-09-05 12:17:31
 * @LastEditors: Innei
 * @FilePath: /candy/utils/utils.ts
 * @Coding with Love
 */


const animeImages = ['qsNmnC2zHB5FW41.jpg', 'GwJzq4SYtClRcZh.jpg', '6nOYcygRGXvpsFd.jpg', 'Qr2ykmsEFpJn4BC.jpg', 'KiOuTlCzge7JHh3.jpg', 'sM2XCJTW8BdUe5i.jpg', '18KQYP9fNGbrzJu.jpg', 'rdjZo6Sg2JReyiA.jpg', 'X2MVRDe1tyJil3O.jpg', 'EDoKvz5p7BXZ46U.jpg', 'EGk4qUvcXDygV2z.jpg', '5QdwFC82gT3XPSZ.jpg', 'KPyTCARHBzpxJ46.jpg', '7TOEIPwGrZB1qFb.jpg', 'Ihj5QAZgVMqr9fJ.jpg', 'KZ6jv8C92Vpwcih.jpg'].map(i => 'https://i.loli.net/2020/05/22/' + i);
const getAnimationImages = () => {
  return [...animeImages];
};
const getRandomImage = (count = 1) => {
  return lodash_shuffle__WEBPACK_IMPORTED_MODULE_0___default()(animeImages).slice(0, count);
};
const isClientSide = () => {
  return false;
};
const isServerSide = () => {
  return !isClientSide();
};
function getSummaryFromMd(text, options = {
  count: false,
  length: 150
}) {
  const rawText = remove_markdown__WEBPACK_IMPORTED_MODULE_1___default()(text, {
    gfm: true
  });
  const description = rawText.slice(0, options.length).replace(/[\s]/gm, ' ');

  if (options.count) {
    return {
      description,
      wordCount: rawText.length
    };
  }

  return description;
}
function flattenChildren(data, level = 0) {
  return data.reduce((arr, _ref) => {
    let {
      children = []
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["children"]);

    return (// @ts-ignore
      arr.concat([_objectSpread({}, rest)], flattenChildren(children, level + 1))
    );
  }, []);
}
function _uuid() {
  let d = Date.now();

  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); //use high-precision timer if available
  }

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
}
class UUID {
  constructor() {
    _defineProperty(this, "uuid", _uuid());
  }

  equal(uuid) {
    return uuid.uuid === this.uuid;
  }

}

UUID.prototype.toString = function () {
  return this.uuid;
};

function isValidDate(d) {
  // @ts-ignore
  const r = d instanceof Date && !isNaN(d);
  return r ? d.toISOString() : false;
}

/***/ }),

/***/ "zQ19":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useStore; });

// UNUSED EXPORTS: appStore, default, StoreContext, StoreProvider

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__("VBo9");

// CONCATENATED MODULE: ./common/store/action.ts
var _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

/*
 * @Author: Innei
 * @Date: 2020-08-07 16:56:07
 * @LastEditTime: 2020-09-05 10:56:21
 * @LastEditors: Innei
 * @FilePath: /candy/common/store/action.ts
 * @Coding with Love
 */

let ActionStore = (_class = (_temp = class ActionStore {
  constructor() {
    _initializerDefineProperty(this, "_actions", _descriptor, this);
  }

  resetActions() {
    this._actions = [];
  }
  /**
   * clear and set actions (replace)
   * @param actions
   */


  setActions(actions) {
    this.resetActions();

    this._actions.push(...actions);
  }

  appendActions(actions) {
    if (Array.isArray(actions)) {
      this._actions.push(...actions);
    } else {
      this._actions.push(actions);
    }
  }

  removeAction(action) {
    const index = this._actions.indexOf(action);

    if (index !== -1) {
      this._actions.splice(index, 1);
    }
  }

  removeActionByIndex(index) {
    this._actions.splice(index, 1);
  }

  removeActionByUUID(id) {
    const index = this._actions.findIndex(i => id.equal(i.id));

    this.removeActionByIndex(index);
  }

  get actions() {
    return [...this._actions];
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_actions", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, "resetActions", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "resetActions"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setActions", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "setActions"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "appendActions", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "appendActions"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeAction", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "removeAction"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeActionByIndex", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "removeActionByIndex"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeActionByUUID", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "removeActionByUUID"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "actions", [external_mobx_["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "actions"), _class.prototype)), _class);

// EXTERNAL MODULE: ./configs.ts
var configs = __webpack_require__("F/y2");

// CONCATENATED MODULE: ./common/store/app.ts
var app_class, app_descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, app_temp;

function app_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function app_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function app_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

/*
 * @Author: Innei
 * @Date: 2020-09-02 14:00:52
 * @LastEditTime: 2020-09-05 15:56:38
 * @LastEditors: Innei
 * @FilePath: /candy/common/store/app.ts
 * @Coding with Love
 */


let AppStore = (app_class = (app_temp = class AppStore {
  constructor() {
    app_initializerDefineProperty(this, "menu", app_descriptor, this);

    app_initializerDefineProperty(this, "viewport", _descriptor2, this);

    app_initializerDefineProperty(this, "loading", _descriptor3, this);

    app_initializerDefineProperty(this, "position", _descriptor4, this);

    app_initializerDefineProperty(this, "scrollDirection", _descriptor5, this);

    app_initializerDefineProperty(this, "autoToggleColorMode", _descriptor6, this);

    app_initializerDefineProperty(this, "colorMode", _descriptor7, this);

    app_initializerDefineProperty(this, "headerNav", _descriptor8, this);
  }

  updatePosition(direction) {
    if (typeof document !== 'undefined') {
      this.position = document.documentElement.scrollTop;
      this.scrollDirection = direction;
    }
  }

  get isOverflow() {
    if (true) {
      return false;
    }

    return this.position > window.innerHeight || this.position > screen.height;
  }

  toggleLoading() {
    document.body.classList.toggle('loading');
    this.loading = !this.loading;
  }

  setLoading(state) {
    state ? document.body.classList.add('loading') : document.body.classList.remove('loading');
    this.loading = state;
  }

  setMenu(menu) {
    this.menu = menu;
  }

  setPage(pages) {
    const homeMenu = this.menu.find(menu => menu.type === 'Home');
    const models = pages.map(page => {
      const {
        title,
        slug
      } = page;
      return {
        title,
        path: '/[page]',
        as: '/' + slug,
        type: 'Page'
      };
    });
    homeMenu === null || homeMenu === void 0 ? void 0 : homeMenu.subMenu.push(...models);
  }

  updateViewport() {
    const innerHeight = window.innerHeight;
    const width = document.documentElement.getBoundingClientRect().width;
    const {
      hpad,
      pad,
      mobile
    } = this.viewport; // 忽略移动端浏览器 上下滚动 导致的视图大小变化

    if (this.viewport.h && // chrome mobile delta == 56
    Math.abs(innerHeight - this.viewport.h) < 80 && width === this.viewport.w && (hpad || pad || mobile)) {
      return;
    }

    this.viewport = {
      w: width,
      h: innerHeight,
      mobile: window.screen.width <= 568 || window.innerWidth <= 568,
      pad: window.innerWidth <= 768 && window.innerWidth > 568,
      hpad: window.innerWidth <= 1024 && window.innerWidth > 768,
      wider: window.innerWidth > 1024 && window.innerWidth < 1920,
      widest: window.innerWidth >= 1920
    };
  }

  get isPadOrMobile() {
    return this.viewport.pad || this.viewport.mobile;
  }

}, app_temp), (app_descriptor = app_applyDecoratedDescriptor(app_class.prototype, "menu", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return configs["a" /* default */].menu;
  }
}), _descriptor2 = app_applyDecoratedDescriptor(app_class.prototype, "viewport", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {};
  }
}), _descriptor3 = app_applyDecoratedDescriptor(app_class.prototype, "loading", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor4 = app_applyDecoratedDescriptor(app_class.prototype, "position", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor5 = app_applyDecoratedDescriptor(app_class.prototype, "scrollDirection", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor6 = app_applyDecoratedDescriptor(app_class.prototype, "autoToggleColorMode", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor7 = app_applyDecoratedDescriptor(app_class.prototype, "colorMode", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'light';
  }
}), _descriptor8 = app_applyDecoratedDescriptor(app_class.prototype, "headerNav", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {
      title: '',
      meta: '',
      show: false
    };
  }
}), app_applyDecoratedDescriptor(app_class.prototype, "updatePosition", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(app_class.prototype, "updatePosition"), app_class.prototype), app_applyDecoratedDescriptor(app_class.prototype, "isOverflow", [external_mobx_["computed"]], Object.getOwnPropertyDescriptor(app_class.prototype, "isOverflow"), app_class.prototype), app_applyDecoratedDescriptor(app_class.prototype, "toggleLoading", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(app_class.prototype, "toggleLoading"), app_class.prototype), app_applyDecoratedDescriptor(app_class.prototype, "setLoading", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(app_class.prototype, "setLoading"), app_class.prototype), app_applyDecoratedDescriptor(app_class.prototype, "setMenu", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(app_class.prototype, "setMenu"), app_class.prototype), app_applyDecoratedDescriptor(app_class.prototype, "setPage", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(app_class.prototype, "setPage"), app_class.prototype), app_applyDecoratedDescriptor(app_class.prototype, "updateViewport", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(app_class.prototype, "updateViewport"), app_class.prototype), app_applyDecoratedDescriptor(app_class.prototype, "isPadOrMobile", [external_mobx_["computed"]], Object.getOwnPropertyDescriptor(app_class.prototype, "isPadOrMobile"), app_class.prototype)), app_class);

// CONCATENATED MODULE: ./common/store/pages.ts
/*
 * @Author: Innei
 * @Date: 2020-06-14 21:19:46
 * @LastEditTime: 2020-09-05 11:10:58
 * @LastEditors: Innei
 * @FilePath: /candy/common/store/pages.ts
 * @Coding with Love
 */
class PageStore {// @observable pages: PageModel[] | AggregateResp['pageMeta'][] = []
  // @action async updatePages() {
  //   const { data } = await Rest('Page').gets<PagesPagerRespDto>()
  //   this.pages = data
  // }
  // @action setPages(pages: PageModel[]) {
  //   this.pages = pages
  // }
}
// CONCATENATED MODULE: ./common/store/social.ts
var social_class, social_descriptor, social_temp;

function social_initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function social_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function social_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function social_initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



let SocialStore = (social_class = (social_temp = class SocialStore {
  constructor() {
    social_initializerDefineProperty(this, "socialLinks", social_descriptor, this);
  }

  setSocialLinks(links) {
    this.socialLinks = links;
  }

}, social_temp), (social_descriptor = social_applyDecoratedDescriptor(social_class.prototype, "socialLinks", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return configs["a" /* default */].social;
  }
}), social_applyDecoratedDescriptor(social_class.prototype, "setSocialLinks", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(social_class.prototype, "setSocialLinks"), social_class.prototype)), social_class);

// CONCATENATED MODULE: ./common/store/index.ts
/*
 * @Author: Innei
 * @Date: 2020-04-29 17:27:02
 * @LastEditTime: 2020-09-05 11:20:09
 * @LastEditors: Innei
 * @FilePath: /candy/common/store/index.ts
 * @Copyright
 */





const appStore = new AppStore();
function createMobxStores() {
  return {
    appStore,
    socialStore: new SocialStore(),
    pageStore: new PageStore(),
    actionStore: new ActionStore()
  };
}
const StoreContext = /*#__PURE__*/Object(external_react_["createContext"])(createMobxStores());
const StoreProvider = StoreContext.Provider;
const useStore = () => Object(external_react_["useContext"])(StoreContext);

/***/ })

/******/ });