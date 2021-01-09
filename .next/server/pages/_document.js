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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Y7Z2");


/***/ }),

/***/ "2+G7":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "8cZr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VDXt")


/***/ }),

/***/ "AXZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

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
  url: 'https://iucky.cn',
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

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "UJjI":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "VDXt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _server = _interopRequireDefault(__webpack_require__("2+G7"));

var _constants = __webpack_require__("UJjI");

var _documentContext = __webpack_require__("nMq/");

var _utils = __webpack_require__("kYf9");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__("vHio");

var _utils2 = __webpack_require__("ri/Y");

var _htmlescape = __webpack_require__("AXZJ");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

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
}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (true) {
    return path.replace(/\.js$/, '.module.js');
  }

  return path;
}

function getDocumentFiles(buildManifest, pathname) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = pathname !== '/_error' ? (0, _getPageFiles.getPageFiles)(buildManifest, pathname) : [];
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && false ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles);
    let dynamicCssFiles = dedupe(dynamicImports.filter(f => f.file.endsWith('.css'))).map(f => f.file);

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      cssFiles.push(...dynamicCssFiles);
    }

    const cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || "anonymous"
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || "anonymous",
        "data-n-g": isSharedFile ? '' : undefined,
        "data-n-p": isSharedFile ? undefined : ''
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || "anonymous"
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    });
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || "anonymous"
    }));
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (false) {}

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  false ? undefined : this.getCssLinks(files), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": true
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(files), this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (true) {
        modernProps = bundle.file.endsWith('.module.js') ? {
          type: 'module'
        } : {
          noModule: true
        };
      }

      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: !isDevelopment,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || "anonymous"
      }, modernProps));
    });
  }

  getScripts(files) {
    var _buildManifest$lowPri;

    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) === null || _buildManifest$lowPri === void 0 ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (true) {
        modernProps = file.endsWith('.module.js') ? {
          type: 'module'
        } : {
          noModule: true
        };
      }

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || "anonymous"
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || "anonymous",
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (true) {
        return null;
      }

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || "anonymous",
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || "anonymous",
        "data-ampdevmode": true
      })));
    }

    if (false) {}

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || "anonymous"
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || "anonymous",
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }),  true && !disableRuntimeJS ? /*#__PURE__*/_react.default.createElement("script", {
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || "anonymous",
      noModule: true,
      dangerouslySetInnerHTML: {
        __html: NextScript.safariNomoduleFix
      }
    }) : null, !disableRuntimeJS && this.getPolyfillScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "X+54":
/***/ (function(module, exports) {

module.exports = require("markdown-yaml-metadata-parser");

/***/ }),

/***/ "Y7Z2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F/y2");
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lmnT");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8cZr");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 *           佛曰:
 *                   写字楼里写字间，写字间里程序员；
 *                   程序人员写程序，又拿程序换酒钱。
 *                   酒醒只在网上坐，酒醉还来网下眠；
 *                   酒醉酒醒日复日，网上网下年复年。
 *                   但愿老死电脑间，不愿鞠躬老板前；
 *                   奔驰宝马贵者趣，公交自行程序员。
 *                   别人笑我忒疯癫，我笑自己命太贱；
 *                   不见满街漂亮妹，哪个归得程序员？
 *
 * @Author: Innei
 * @Date: 2020-04-29 17:27:02
 * @LastEditTime: 2020-09-05 18:21:34
 * @LastEditors: Innei
 * @FilePath: /candy/pages/_document.tsx
 * @MIT
 */






const writeJson = (filename, data) => {
  Object(fs__WEBPACK_IMPORTED_MODULE_4__["mkdirSync"])(Object(path__WEBPACK_IMPORTED_MODULE_3__["resolve"])(process.cwd(), './public/data/'), {
    recursive: true
  });
  Object(fs__WEBPACK_IMPORTED_MODULE_4__["writeFileSync"])(Object(path__WEBPACK_IMPORTED_MODULE_3__["resolve"])(process.cwd(), './public/data/' + filename + '.json'), data, {
    encoding: 'utf-8'
  });
};

class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_5___default.a {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_5___default.a.getInitialProps(ctx);
    const pages = core__WEBPACK_IMPORTED_MODULE_2__[/* Core */ "a"].fetcher.pages.toJSON();
    const notes = core__WEBPACK_IMPORTED_MODULE_2__[/* Core */ "a"].fetcher.notes.toJSON();
    const posts = core__WEBPACK_IMPORTED_MODULE_2__[/* Core */ "a"].fetcher.articles.toJSON();
    const total = {
      pages,
      notes,
      posts
    };

    for (const [k, v] of Object.entries(total)) {
      writeJson(k, v);
    }

    writeJson('raw', JSON.stringify(total));
    return _objectSpread({}, initialProps);
  }

  render() {
    return __jsx("html", null, __jsx(next_document__WEBPACK_IMPORTED_MODULE_5__["Head"], {
      lang: 'zh-cn'
    }, __jsx("meta", {
      charSet: "UTF-8"
    }), __jsx("meta", {
      name: "mobile-web-app-capable",
      content: "yes"
    }), __jsx("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }), __jsx("meta", {
      name: "application-name",
      content: configs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].title
    }), __jsx("meta", {
      name: "apple-mobile-web-app-title",
      content: configs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].title
    }), __jsx("meta", {
      name: "msapplication-tooltip",
      content: configs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].title
    }), __jsx("meta", {
      name: "theme-color",
      content: "#ffc107"
    }), __jsx("meta", {
      name: "msapplication-navbutton-color",
      content: "#ffc107"
    }), __jsx("meta", {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black"
    }), __jsx("meta", {
      name: "msapplication-starturl",
      content: "/"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Noto+Serif+SC",
      rel: "stylesheet",
      type: "text/css"
    }), __jsx("link", {
      href: "https://cdn.jsdelivr.net/gh/Innei/zshrc@0.1.1/webfont/OperatorMono.css",
      rel: "stylesheet",
      type: "text/css"
    }), __jsx("link", {
      rel: "shortcut icon",
      href: "/favicon.png"
    }), __jsx("link", {
      rel: "icon",
      href: "/favicon.png"
    }), __jsx("link", {
      rel: "apple-touch-icon",
      href: "/favicon.png"
    })), __jsx("body", {
      id: 'app',
      className: "loading"
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_5__["Main"], null), __jsx(next_document__WEBPACK_IMPORTED_MODULE_5__["NextScript"], null), __jsx("script", {
      src: `https://cdn.jsdelivr.net/npm/smooth-scroll@16.1.3/dist/smooth-scroll.min.js`
    }), __jsx("script", {
      dangerouslySetInnerHTML: {
        __html: `new SmoothScroll('a[href*="#"]', {
                            speed: 500,
                            offset: 150,
                            easing: 'easeInOutCubic',
                            durationMax: 1000,
                            durationMin: 350,
                            topOnEmptyHash: true,
                            emitEvents: false,
                            updateURL: false,
                            popstate: false
                          })`
      }
    })));
  }

}

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

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

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

/***/ "nMq/":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "rWQ8":
/***/ (function(module, exports) {

module.exports = require("lodash/shuffle");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "ri/Y":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "vHio":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

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

/***/ })

/******/ });