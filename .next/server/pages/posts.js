module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4vDL":
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("XCPh");


/***/ }),

/***/ "AauJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ufq7");
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_queue_anim__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_texty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cin7");
/* harmony import */ var rc_texty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_texty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NoteLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dumg");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("z1bh");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






// @ts-ignore
const ArticleLayout = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((_ref, ref) => {
  let {
    children,
    title,
    subtitle,
    delay
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "title", "subtitle", "delay"]);

  return __jsx("main", _extends({
    className: "is-article",
    ref: ref
  }, rest, {
    id: 'article-wrap'
  }), title && __jsx("section", {
    className: "post-title"
  }, __jsx("h1", null, __jsx(rc_queue_anim__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "alpha" // animatingClassName={['absolute', 'absolute']}
    ,
    leaveReverse: true,
    appear: false
  }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__[/* isClientSide */ "e"])() ? __jsx(rc_texty__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: 'mask-bottom',
    mode: 'smooth',
    key: title
  }, title) : title)), subtitle && __jsx("h2", null, __jsx(rc_queue_anim__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: 'alpha' // animatingClassName={['absolute', 'absolute']}

  }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__[/* isClientSide */ "e"])() ? __jsx(rc_texty__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: 'mask-bottom',
    mode: 'smooth',
    delay: 500,
    key: subtitle
  }, subtitle) : subtitle))), __jsx(rc_queue_anim__WEBPACK_IMPORTED_MODULE_1___default.a, {
    delay: delay !== null && delay !== void 0 ? delay : 300,
    duration: 500,
    animConfig: {
      opacity: [1, 0],
      translateY: [0, 50]
    },
    onEnd: e => {
      const {
        target,
        type
      } = e;

      if (type === 'enter') {
        const $t = target;
        $t.style.transform = '';
      }
    },
    animatingClassName: _NoteLayout__WEBPACK_IMPORTED_MODULE_3__[/* animatingClassName */ "b"]
  }, __jsx("article", {
    className: "post-content paul-note",
    key: title
  }, children)));
}));

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
  url: 'https://github.com/Innei',
  title: 'GitHub',
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGithub"],
  color: 'var(--black)'
}, {
  url: 'https://jq.qq.com/?_wv=1027&k=5t9N0mw',
  title: 'QQ',
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faQq"],
  color: '#12b7f5'
}, {
  url: 'https://twitter.com/_oQuery',
  title: 'twitter',
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTwitter"],
  color: '#02A4ED'
}];
const configs = {
  title: '糖果屋',
  description: '一个测试站点',
  keywords: ['blog'],
  menu,
  url: 'https://innei.ren',
  author: 'Innei',
  social,
  icp: {
    name: ' ',
    url: 'http://www.beian.miit.gov.cn/'
  },
  travellings: true,
  // 开往
  avatar: 'https://avatars0.githubusercontent.com/u/41265413?s=460&u=8c14b9682794c353995029327f439d736571426e&v=4'
};
/* harmony default export */ __webpack_exports__["a"] = (configs);

/***/ }),

/***/ "Gbxs":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"head": "PostBlock_head__38-FT",
	"title": "PostBlock_title__18Obo",
	"text": "PostBlock_text__Gsfei",
	"btn": "PostBlock_btn__2551h",
	"gradual-change": "PostBlock_gradual-change__20O60",
	"navigator": "PostBlock_navigator__25BE6"
};


/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KiuA":
/***/ (function(module, exports) {

module.exports = require("dayjs/locale/zh-cn");

/***/ }),

/***/ "MaJT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Seo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("z5k3");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("efsx");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ytCK");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("F/y2");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("z1bh");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const SEO = Object(utils_mobx__WEBPACK_IMPORTED_MODULE_3__[/* observer */ "a"])(props => {
  const {
    title,
    description,
    openGraph
  } = props,
        rest = _objectWithoutProperties(props, ["title", "description", "openGraph"]);

  const Title = title + ' - ' + _configs__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].title;
  return __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], _objectSpread({
    title,
    titleTemplate: '%s - ' + _configs__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].title,
    openGraph: lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()({
      profile: {
        username: _configs__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].author
      },
      type: 'article',
      locale: 'zh-cn',
      site_name: _configs__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].title,
      description: description || '',
      article: {
        authors: [_configs__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].author]
      },
      title: Title,
      images: [{
        url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__[/* getRandomImage */ "c"])().pop(),
        alt: title + ' - ' + _configs__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].title
      }]
    }, openGraph),
    description: description || '',
    twitter: {
      cardType: 'summary',
      site: _configs__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].url
    }
  }, rest));
});
const Seo = SEO;

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "PJ1c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ufq7");
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_queue_anim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rc_queue_anim__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var rc_texty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cin7");
/* harmony import */ var rc_texty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_texty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VNO/");
/* harmony import */ var rc_tween_one__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_tween_one__WEBPACK_IMPORTED_MODULE_2__);





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

/***/ "VNO/":
/***/ (function(module, exports) {

module.exports = require("rc-tween-one");

/***/ }),

/***/ "X+54":
/***/ (function(module, exports) {

module.exports = require("markdown-yaml-metadata-parser");

/***/ }),

/***/ "XCPh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./common/store/index.ts + 4 modules
var store = __webpack_require__("zQ19");

// EXTERNAL MODULE: ./utils/mobx.tsx
var mobx = __webpack_require__("ytCK");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "remove-markdown"
var external_remove_markdown_ = __webpack_require__("ZfK2");
var external_remove_markdown_default = /*#__PURE__*/__webpack_require__.n(external_remove_markdown_);

// EXTERNAL MODULE: ./utils/time.ts
var time = __webpack_require__("eSIs");

// EXTERNAL MODULE: ./components/PostBlock/index.module.scss
var index_module = __webpack_require__("Gbxs");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// CONCATENATED MODULE: ./components/PostBlock/index.tsx
var __jsx = external_react_default.a.createElement;








const PostBlock = Object(mobx["a" /* observer */])(props => {
  const {
    appStore: {
      viewport
    }
  } = Object(store["a" /* useStore */])();
  const {
    date,
    title,
    text,
    slug
  } = props;
  const parsedTime = (viewport === null || viewport === void 0 ? void 0 : viewport.mobile) ? Object(time["a" /* parseDate */])(date, 'MM-DD ddd') : Object(time["a" /* parseDate */])(date, 'YYYY-MM-DD ddd');
  const [d, week] = parsedTime.split(' ');

  const goToPost = () => {
    router_default.a.push('/posts/[slug]', `/posts/${slug}`);
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx("h1", {
    className: index_module_default.a.head
  }, d, __jsx("small", null, "\uFF08", week, "\uFF09"), !(viewport === null || viewport === void 0 ? void 0 : viewport.mobile) && __jsx("div", {
    className: index_module_default.a.title,
    onClick: goToPost
  }, title)), __jsx("div", {
    className: external_classnames_default()('note-item', index_module_default.a.text)
  }, (viewport === null || viewport === void 0 ? void 0 : viewport.mobile) && __jsx("h2", {
    className: index_module_default.a.title,
    onClick: goToPost
  }, title), __jsx("article", {
    className: "note-content"
  }, external_remove_markdown_default()(text).slice(0, 250) + '..'), __jsx("section", {
    className: index_module_default.a.navigator
  }, __jsx("button", {
    className: index_module_default.a.btn,
    onClick: goToPost
  }, "\u67E5\u770B\u539F\u6587"))));
});
// EXTERNAL MODULE: ./core/index.ts + 3 modules
var core = __webpack_require__("lmnT");

// EXTERNAL MODULE: ./layouts/ArticleLayout.tsx
var ArticleLayout = __webpack_require__("AauJ");

// EXTERNAL MODULE: ./components/SEO/index.tsx
var SEO = __webpack_require__("MaJT");

// CONCATENATED MODULE: ./pages/posts/index.tsx
var posts_jsx = external_react_default.a.createElement;







const Post = Object(mobx["a" /* observer */])(props => {
  const {
    query: page,
    posts
  } = props;
  const router = Object(router_["useRouter"])();
  const {
    query: {
      page: currentPage
    }
  } = router;
  Object(external_react_["useEffect"])(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);
  return posts_jsx(ArticleLayout["a" /* ArticleLayout */], null, posts_jsx(SEO["a" /* SEO */], {
    title: '博文'
  }), posts_jsx("article", {
    className: "paul-note"
  }, posts.map(post => {
    const {
      slug,
      content,
      created,
      title
    } = post;
    return posts_jsx(PostBlock, {
      title: title,
      date: created,
      key: slug,
      text: content,
      slug: slug // category={}

    });
  })), posts_jsx("section", {
    className: "paul-more"
  }, page.hasPrev && posts_jsx("button", {
    className: "btn brown",
    onClick: () => {
      router.push('/posts?page=' + (page.currentPage - 1));
    }
  }, "\u4E0A\u4E00\u9875"), page.hasNext && posts_jsx("button", {
    className: "btn brown",
    style: page.hasNext && page.hasPrev ? {
      marginLeft: '6px'
    } : undefined,
    onClick: () => {
      router.push('/posts?page=' + (page.currentPage + 1));
    }
  }, "\u4E0B\u4E00\u9875")));
});
const getStaticProps = async context => {
  const pager = core["a" /* Core */].fetcher.getPostsByPager();
  return {
    props: pager
  };
}; // export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = Core.fetcher.articles.getKeys().map((k) => {
//     return {
//       params: {
//         slug: k,
//       },
//     }
//   })
//   return {
//     paths,
//     fallback: false,
//   }
// }

/* harmony default export */ var pages_posts = __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "ZfK2":
/***/ (function(module, exports) {

module.exports = require("remove-markdown");

/***/ }),

/***/ "boVf":
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cin7":
/***/ (function(module, exports) {

module.exports = require("rc-texty");

/***/ }),

/***/ "dumg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return animatingClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("boVf");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Anime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PJ1c");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const animatingClassName = ['', 'absolute padding-b100'];
const NoteLayout = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(({
  children,
  date,
  title,
  tips
}, ref) => {
  const dateFormat = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).locale('en').format('YYYY-MM-DD ddd');
  return __jsx("main", {
    className: "is-article is-note post-content paul-note",
    ref: ref
  }, __jsx(_components_Anime__WEBPACK_IMPORTED_MODULE_2__[/* QueueAnim */ "a"], {
    type: ['bottom', 'alpha'],
    delay: 500,
    forcedReplay: true // leaveReverse
    ,
    animatingClassName: animatingClassName
  }, __jsx("article", {
    key: dateFormat
  }, __jsx("h1", null, dateFormat), __jsx("h2", {
    title: tips,
    style: {
      textAlign: 'center'
    }
  }, title), children)));
}));


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

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

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

/***/ "z5k3":
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

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