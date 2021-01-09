module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		11: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+5pl":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/swift");

/***/ }),

/***/ "/DJm":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/sass");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "1zO4":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/bash");

/***/ }),

/***/ "2p8N":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/java");

/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4vDL":
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ "6h7C":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"code-wrap": "CodeBlock_code-wrap__2WEZV",
	"copy-tip": "CodeBlock_copy-tip__11M5z"
};


/***/ }),

/***/ "78AW":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/vim");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("GlJ9");


/***/ }),

/***/ "8w+k":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/python");

/***/ }),

/***/ "90BJ":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/rust");

/***/ }),

/***/ "9uS9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./common/store/index.ts + 4 modules
var store = __webpack_require__("zQ19");

// EXTERNAL MODULE: ./components/Image/index.tsx
var Image = __webpack_require__("vW1X");

// EXTERNAL MODULE: ./components/Toc/index.tsx
var Toc = __webpack_require__("JvBL");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: ./utils/mobx.tsx
var mobx = __webpack_require__("ytCK");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__("RyM3");

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow"
var tomorrow_ = __webpack_require__("WCKZ");
var tomorrow_default = /*#__PURE__*/__webpack_require__.n(tomorrow_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/styles/prism/prism"
var prism_ = __webpack_require__("P4rS");
var prism_default = /*#__PURE__*/__webpack_require__.n(prism_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
var javascript_ = __webpack_require__("JE/y");
var javascript_default = /*#__PURE__*/__webpack_require__.n(javascript_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/css"
var css_ = __webpack_require__("BcUV");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/java"
var java_ = __webpack_require__("2p8N");
var java_default = /*#__PURE__*/__webpack_require__.n(java_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/typescript"
var typescript_ = __webpack_require__("o0ye");
var typescript_default = /*#__PURE__*/__webpack_require__.n(typescript_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/tsx"
var tsx_ = __webpack_require__("pyC6");
var tsx_default = /*#__PURE__*/__webpack_require__.n(tsx_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/jsx"
var jsx_ = __webpack_require__("AyBT");
var jsx_default = /*#__PURE__*/__webpack_require__.n(jsx_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/csharp"
var csharp_ = __webpack_require__("QNh2");
var csharp_default = /*#__PURE__*/__webpack_require__.n(csharp_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/swift"
var swift_ = __webpack_require__("+5pl");
var swift_default = /*#__PURE__*/__webpack_require__.n(swift_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/objectivec"
var objectivec_ = __webpack_require__("jdMi");
var objectivec_default = /*#__PURE__*/__webpack_require__.n(objectivec_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/c"
var c_ = __webpack_require__("NEVV");
var c_default = /*#__PURE__*/__webpack_require__.n(c_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/clike"
var clike_ = __webpack_require__("WKnZ");
var clike_default = /*#__PURE__*/__webpack_require__.n(clike_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/cpp"
var cpp_ = __webpack_require__("FoZs");
var cpp_default = /*#__PURE__*/__webpack_require__.n(cpp_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/rust"
var rust_ = __webpack_require__("90BJ");
var rust_default = /*#__PURE__*/__webpack_require__.n(rust_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/go"
var go_ = __webpack_require__("mupt");
var go_default = /*#__PURE__*/__webpack_require__.n(go_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/python"
var python_ = __webpack_require__("8w+k");
var python_default = /*#__PURE__*/__webpack_require__.n(python_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/css-extras"
var css_extras_ = __webpack_require__("p37A");
var css_extras_default = /*#__PURE__*/__webpack_require__.n(css_extras_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/sass"
var sass_ = __webpack_require__("/DJm");
var sass_default = /*#__PURE__*/__webpack_require__.n(sass_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/scss"
var scss_ = __webpack_require__("DdFA");
var scss_default = /*#__PURE__*/__webpack_require__.n(scss_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/applescript"
var applescript_ = __webpack_require__("NMOV");
var applescript_default = /*#__PURE__*/__webpack_require__.n(applescript_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/bash"
var bash_ = __webpack_require__("1zO4");
var bash_default = /*#__PURE__*/__webpack_require__.n(bash_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/coffeescript"
var coffeescript_ = __webpack_require__("G8ek");
var coffeescript_default = /*#__PURE__*/__webpack_require__.n(coffeescript_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/json"
var json_ = __webpack_require__("mcTE");
var json_default = /*#__PURE__*/__webpack_require__.n(json_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/nginx"
var nginx_ = __webpack_require__("dzui");
var nginx_default = /*#__PURE__*/__webpack_require__.n(nginx_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/apacheconf"
var apacheconf_ = __webpack_require__("FxN1");
var apacheconf_default = /*#__PURE__*/__webpack_require__.n(apacheconf_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/git"
var git_ = __webpack_require__("SozK");
var git_default = /*#__PURE__*/__webpack_require__.n(git_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/docker"
var docker_ = __webpack_require__("Q3Ln");
var docker_default = /*#__PURE__*/__webpack_require__.n(docker_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/yaml"
var yaml_ = __webpack_require__("tcwq");
var yaml_default = /*#__PURE__*/__webpack_require__.n(yaml_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/vim"
var vim_ = __webpack_require__("78AW");
var vim_default = /*#__PURE__*/__webpack_require__.n(vim_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/php"
var php_ = __webpack_require__("FjVC");
var php_default = /*#__PURE__*/__webpack_require__.n(php_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/dart"
var dart_ = __webpack_require__("s+fN");
var dart_default = /*#__PURE__*/__webpack_require__.n(dart_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/kotlin"
var kotlin_ = __webpack_require__("iA9c");
var kotlin_default = /*#__PURE__*/__webpack_require__.n(kotlin_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/graphql"
var graphql_ = __webpack_require__("y+Z7");
var graphql_default = /*#__PURE__*/__webpack_require__.n(graphql_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/pug"
var pug_ = __webpack_require__("hn5U");
var pug_default = /*#__PURE__*/__webpack_require__.n(pug_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/rest"
var rest_ = __webpack_require__("qcKs");
var rest_default = /*#__PURE__*/__webpack_require__.n(rest_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/languages/prism/http"
var http_ = __webpack_require__("u3K4");
var http_default = /*#__PURE__*/__webpack_require__.n(http_);

// EXTERNAL MODULE: ./components/CodeBlock/index.module.scss
var index_module = __webpack_require__("6h7C");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: ./utils/dom.ts
var dom = __webpack_require__("GArZ");

// CONCATENATED MODULE: ./components/CodeBlock/index.tsx

var __jsx = external_react_default.a.createElement;











































const lang = {
  javascript: javascript_default.a,
  css: css_default.a,
  java: java_default.a,
  typescript: typescript_default.a,
  tsx: tsx_default.a,
  jsx: jsx_default.a,
  csharp: csharp_default.a,
  swift: swift_default.a,
  objectivec: objectivec_default.a,
  c: c_default.a,
  clike: clike_default.a,
  cpp: cpp_default.a,
  rust: rust_default.a,
  go: go_default.a,
  python: python_default.a,
  extras: css_extras_default.a,
  sass: sass_default.a,
  scss: scss_default.a,
  applescript: applescript_default.a,
  bash: bash_default.a,
  coffeescript: coffeescript_default.a,
  json: json_default.a,
  nginx: nginx_default.a,
  apacheconf: apacheconf_default.a,
  git: git_default.a,
  docker: docker_default.a,
  yaml: yaml_default.a,
  vim: vim_default.a,
  php: php_default.a,
  dart: dart_default.a,
  kotlin: kotlin_default.a,
  graphql: graphql_default.a,
  pug: pug_default.a,
  rest: rest_default.a,
  http: http_default.a
};
Object.entries(lang).map(([k, v]) => external_react_syntax_highlighter_["PrismLight"].registerLanguage(k, v));
const CodeBlock = Object(mobx["a" /* observer */])(props => {
  const {
    language,
    value
  } = props;
  const {
    colorMode
  } = Object(store["a" /* useStore */])().appStore;
  const handleCopy = Object(external_react_["useCallback"])(() => {
    Object(dom["a" /* copy */])(value);

    message_default.a.success('COPIED! NOW YOU CAN ENJOY CV.');
  }, [value]);
  return __jsx("div", {
    className: index_module_default.a['code-wrap']
  }, __jsx(external_react_syntax_highlighter_["PrismLight"], {
    language: language,
    style: colorMode === 'dark' ? tomorrow_default.a : prism_default.a,
    showLineNumbers: true,
    showInlineLineNumbers: true,
    customStyle: {
      background: 'var(--code-bg) !important'
    }
  }, value), __jsx("div", {
    className: index_module_default.a['copy-tip'],
    onClick: handleCopy
  }, "Copy"));
});
/* harmony default export */ var components_CodeBlock = (CodeBlock);
// EXTERNAL MODULE: ./components/MD-render/index.module.scss
var MD_render_index_module = __webpack_require__("g2K/");
var MD_render_index_module_default = /*#__PURE__*/__webpack_require__.n(MD_render_index_module);

// CONCATENATED MODULE: ./components/MD-render/rules/mentions.ts
/*
 * @Author: Innei
 * @Date: 2020-06-11 13:01:08
 * @LastEditTime: 2020-06-12 20:19:16
 * @LastEditors: Innei
 * @FilePath: /mx-web/common/markdown/rules/mentions.ts
 * @Coding with Love
 */

/**
 * parse (@username) to github user profile
 */
// @ts-ignore
function tokenizeMention(eat, value, silent) {
  const match = /\((@(\w+\b))\)\s(?!\[.*?\])/.exec(value);

  if (match) {
    if (silent) {
      return true;
    }

    try {
      return eat(match[0])({
        type: 'link',
        url: 'https://github.com/' + match[2],
        children: [{
          type: 'text',
          value: match[1]
        }]
      }); // eslint-disable-next-line no-empty
    } catch {}
  }
}

tokenizeMention.notInLink = true;
tokenizeMention.locator = locateMention;

function locateMention(value, fromIndex) {
  return value.indexOf('@', fromIndex);
}

function mentions() {
  const Parser = this.Parser;
  const tokenizers = Parser.prototype.inlineTokenizers;
  const methods = Parser.prototype.inlineMethods; // Add an inline tokenizer (defined in the following example).

  tokenizers.mention = tokenizeMention; // Run it just before `text`.

  methods.splice(methods.indexOf('text'), 0, 'mention');
}


// CONCATENATED MODULE: ./components/MD-render/rules/spoiler.ts
/*
 * @Author: Innei
 * @Date: 2020-06-11 13:31:05
 * @LastEditTime: 2020-09-02 20:03:18
 * @LastEditors: Innei
 * @FilePath: /mx-web/common/markdown/rules/spoiler.ts
 * @Coding with Love
 */
function tokenizeSpoiler(eat, value, silent) {
  const match = /^\|\|([\s\S]+?)\|\|(?!\|)/.exec(value);

  if (match) {
    if (silent) {
      return true;
    }

    try {
      return eat(match[0])({
        type: 'spoiler',
        value: match[1]
      }); // eslint-disable-next-line no-empty
    } catch {}
  }
}

tokenizeSpoiler.notInLink = true;

tokenizeSpoiler.locator = function (value, fromIndex) {
  return value.indexOf('||', fromIndex);
};

function spoiler() {
  const Parser = this.Parser;
  const tokenizers = Parser.prototype.inlineTokenizers;
  const methods = Parser.prototype.inlineMethods; // Add an inline tokenizer (defined in the following example).

  tokenizers.spoiler = tokenizeSpoiler; // Run it just before `text`.

  methods.splice(methods.indexOf('text'), 0, 'spoiler');
}


// CONCATENATED MODULE: ./components/MD-render/rules/index.ts
/*
 * @Author: Innei
 * @Date: 2020-06-11 12:25:50
 * @LastEditTime: 2020-09-05 11:11:33
 * @LastEditors: Innei
 * @FilePath: /candy/components/MD-render/rules/index.ts
 * @Coding with Love
 */


const plugins = {
  mentions: mentions,
  spoiler: spoiler
};
/* harmony default export */ var rules = (Object.values(plugins));
// CONCATENATED MODULE: ./components/MD-render/index.tsx
var MD_render_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const Heading = () => {
  let index = 0;
  return function RenderHeading(props) {
    var _props$children;

    return /*#__PURE__*/Object(external_react_["createElement"])(`h${props.level}`, {
      id: index++ + '¡' + ((_props$children = props.children) === null || _props$children === void 0 ? void 0 : _props$children[0].props.value)
    }, props.children);
  };
};

const RenderLink = props => {
  const ExtendIcon = Object(external_react_["useMemo"])(() => MD_render_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    width: "15",
    height: "15"
  }, MD_render_jsx("path", {
    fill: "var(--shizuku-text-color)",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }), MD_render_jsx("polygon", {
    fill: "var(--shizuku-text-color)",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })), []);
  const handleRedirect = Object(external_react_["useCallback"])(e => {
    const href = props.href;
    const locateUrl = new URL(location.href);
    const toUrlParser = new URL(href);

    if (toUrlParser.host === locateUrl.host ||  false && false) {
      e.preventDefault();
      const pathArr = toUrlParser.pathname.split('/').filter(Boolean);
      const headPath = pathArr[0];

      switch (headPath) {
        case 'posts':
          {
            router_default.a.push('/posts/[category]/[slug]', toUrlParser.pathname);
            break;
          }

        case 'notes':
          {
            router_default.a.push('/notes/[id]', toUrlParser.pathname);
            break;
          }

        case 'category':
          {
            router_default.a.push('/category/[slug]', toUrlParser.pathname);
            break;
          }

        default:
          {
            router_default.a.push(toUrlParser.pathname);
          }
      }
    }
  }, [props.href]);
  return MD_render_jsx("div", {
    className: MD_render_index_module_default.a['link']
  }, MD_render_jsx("a", {
    href: props.href,
    target: '_blank',
    onClick: handleRedirect
  }, props.children), MD_render_jsx("div", {
    className: MD_render_index_module_default.a['popup']
  }, props.href), ExtendIcon);
};

const MD_render_Image = props => {
  const {
    src,
    alt
  } = props;
  return MD_render_jsx(Image["b" /* ImageLazyWithPopup */], {
    src: src,
    alt: alt,
    style: {
      padding: '1rem 0'
    }
  });
};

const RenderSpoiler = props => {
  return MD_render_jsx("span", {
    className: 'spoiler',
    title: '你知道的太多了'
  }, props.value);
};

const RenderParagraph = props => {
  return MD_render_jsx("div", {
    className: 'paragraph'
  }, props.children);
};

const RenderCommentAt = ({
  value
}) => {
  return MD_render_jsx(external_react_default.a.Fragment, null, "@", value);
};

const _TOC = Object(mobx["a" /* observer */])(() => {
  const {
    appStore
  } = Object(store["a" /* useStore */])();
  const {
    isPadOrMobile
  } = appStore;
  return !isPadOrMobile ? MD_render_jsx(Toc["default"], null) : null;
});

const Markdown = Object(mobx["a" /* observer */])(props => {
  const {
    value,
    renderers,
    style
  } = props,
        rest = _objectWithoutProperties(props, ["value", "renderers", "style"]);

  return MD_render_jsx("div", {
    id: "write",
    style: style
  }, MD_render_jsx(external_react_markdown_default.a, _extends({
    source: value
  }, rest, {
    renderers: _objectSpread({
      code: components_CodeBlock,
      pre: components_CodeBlock,
      image: MD_render_Image,
      heading: Heading(),
      link: RenderLink,
      spoiler: RenderSpoiler,
      paragraph: RenderParagraph,
      // eslint-disable-next-line react/display-name
      commentAt: RenderCommentAt
    }, renderers),
    plugins: rules
  })), props.showTOC && MD_render_jsx(_TOC, null));
});
/* harmony default export */ var MD_render = __webpack_exports__["a"] = (Markdown);

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

/***/ "AyBT":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/jsx");

/***/ }),

/***/ "BcUV":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/css");

/***/ }),

/***/ "DdFA":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/scss");

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

/***/ "FjVC":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/php");

/***/ }),

/***/ "FoZs":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/cpp");

/***/ }),

/***/ "Fscz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const errorToText = statusCode => {
  switch (statusCode) {
    case 404:
      return '抱歉啦, 页面走丢了';

    case 403:
      return '不要做一些不允许的事情啦';

    case 401:
      return '这是主人的小秘密哦, 你是我的主人吗';

    case 500:
    default:
      return '抱歉, 出了点小问题';
  }
};

const Error = ({
  statusCode
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx("div", {
    className: "error"
  }, __jsx("div", {
    className: "error_wrap"
  }, __jsx("h1", null, statusCode), __jsx("div", {
    className: "desc"
  }, __jsx("h2", null, errorToText(statusCode)))), __jsx("div", {
    style: {
      marginTop: '20px'
    }
  }, __jsx("button", {
    className: 'btn red',
    style: {
      marginRight: '12px'
    },
    onClick: () => router.push('/')
  }, "\u56DE\u5230\u9996\u9875"), __jsx("button", {
    className: 'btn yellow',
    onClick: () => router.reload()
  }, "\u5237\u65B0")));
};

/***/ }),

/***/ "FxN1":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/apacheconf");

/***/ }),

/***/ "G8ek":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/coffeescript");

/***/ }),

/***/ "GArZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export stopEventDefault */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return copy; });
/*
 * @Author: Innei
 * @Date: 2020-05-24 17:03:12
 * @LastEditTime: 2020-05-24 17:08:58
 * @LastEditors: Innei
 * @FilePath: /mx-web/utils/dom.ts
 * @Copyright
 */
const stopEventDefault = e => {
  e.preventDefault();
  e.stopPropagation();
};
const copy = value => {
  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.style.cssText = `position: absolute; top:0; z-index: -999`;
  document.documentElement.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.documentElement.removeChild(textarea);
};

/***/ }),

/***/ "GlJ9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "PostView", function() { return /* binding */ PostView; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });

// EXTERNAL MODULE: ./common/store/index.ts + 4 modules
var store = __webpack_require__("zQ19");

// EXTERNAL MODULE: ./components/Error/index.tsx
var Error = __webpack_require__("Fscz");

// EXTERNAL MODULE: ./components/MD-render/index.tsx + 4 modules
var MD_render = __webpack_require__("9uS9");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__("boVf");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: ./utils/time.ts
var utils_time = __webpack_require__("eSIs");

// CONCATENATED MODULE: ./components/Outdate/index.tsx

var __jsx = external_react_default.a.createElement;


/* harmony default export */ var Outdate = (function OutdateNotice({
  time
}) {
  const relative = Object(utils_time["b" /* relativeTimeFromNow */])(time);
  return external_dayjs_default()().diff(external_dayjs_default()(time), 'day') > 60 ? __jsx("blockquote", null, "\u8FD9\u7BC7\u6587\u7AE0\u4E0A\u6B21\u4FEE\u6539\u4E8E ", relative, "\uFF0C\u53EF\u80FD\u5176\u90E8\u5206\u5185\u5BB9\u5DF2\u7ECF\u53D1\u751F\u53D8\u5316\uFF0C\u5982\u6709\u7591\u95EE\u53EF\u8BE2\u95EE\u4F5C\u8005\u3002") : null;
});
// EXTERNAL MODULE: ./core/index.ts + 3 modules
var core = __webpack_require__("lmnT");

// EXTERNAL MODULE: ./layouts/ArticleLayout.tsx
var ArticleLayout = __webpack_require__("AauJ");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./utils/mobx.tsx
var mobx = __webpack_require__("ytCK");

// EXTERNAL MODULE: ./utils/utils.ts
var utils = __webpack_require__("z1bh");

// EXTERNAL MODULE: ./utils/dom.ts
var dom = __webpack_require__("GArZ");

// EXTERNAL MODULE: ./components/Copyright/index.module.scss
var index_module = __webpack_require__("SzuA");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// CONCATENATED MODULE: ./components/Copyright/index.tsx

var Copyright_jsx = external_react_default.a.createElement;



const Copyright = /*#__PURE__*/Object(external_react_["memo"])(props => {
  const {
    title,
    link,
    date
  } = props;
  return Copyright_jsx("section", {
    className: index_module_default.a['copyright-session']
  }, Copyright_jsx("p", null, "\u6587\u7AE0\u6807\u9898: ", title), Copyright_jsx("p", null, "\u6587\u7AE0\u94FE\u63A5: ", Copyright_jsx("span", null, link), ' ', Copyright_jsx("a", {
    onClick: () => {
      Object(dom["a" /* copy */])(link);
    }
  }, "[\u590D\u5236]")), Copyright_jsx("p", null, "\u6700\u540E\u4FEE\u6539\u65F6\u95F4: ", date), Copyright_jsx("hr", null), Copyright_jsx("div", null, Copyright_jsx("p", null, "\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u7AD9\u957F\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u672C\u6587\u51FA\u5904\u53CA\u6587\u7AE0\u94FE\u63A5\uFF0C\u672A\u7ECF\u7AD9\u957F\u5141\u8BB8\u4E0D\u5F97\u5BF9\u6587\u7AE0\u6587\u5B57\u5185\u5BB9\u8FDB\u884C\u4FEE\u6539\u6F14\u7ECE\u3002", Copyright_jsx("br", null), "\u672C\u6587\u91C7\u7528", Copyright_jsx("a", {
    href: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
  }, "\u521B\u4F5C\u5171\u7528\u4FDD\u7559\u7F72\u540D-\u975E\u5546\u4E1A-\u7981\u6B62\u6F14\u7ECE4.0\u56FD\u9645\u8BB8\u53EF\u8BC1"))));
});
// EXTERNAL MODULE: ./components/SEO/index.tsx
var SEO = __webpack_require__("MaJT");

// EXTERNAL MODULE: ./configs.ts
var configs = __webpack_require__("F/y2");

// CONCATENATED MODULE: ./pages/posts/[slug].tsx
var _slug_jsx = external_react_default.a.createElement;














const PostView = props => {
  const {
    content,
    title,
    slug
  } = props;
  const {
    0: copyrightInfo,
    1: setCopyright
  } = Object(external_react_["useState"])({});
  const description = Object(utils["d" /* getSummaryFromMd */])(props.content).slice(0, 150);
  Object(external_react_["useEffect"])(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [props]);
  const {
    appStore
  } = Object(store["a" /* useStore */])();
  Object(external_react_["useEffect"])(() => {
    appStore.headerNav = {
      title: props.title,
      meta: '文章',
      show: true
    };
    return () => {
      appStore.headerNav.show = false;
    };
  }, [appStore, props.title]);
  Object(external_react_["useEffect"])(() => {
    setCopyright({
      date: external_dayjs_default()(props.modified).format('YYYY年MM月DD日 H:mm'),
      title,
      link: new URL(location.pathname, configs["a" /* default */].url).toString()
    });
  }, [props, title]);
  const router = Object(router_["useRouter"])();

  if (!router.isFallback && !slug) {
    return _slug_jsx(Error["a" /* Error */], {
      statusCode: 404
    });
  }

  return _slug_jsx(ArticleLayout["a" /* ArticleLayout */], {
    title: title
  }, _slug_jsx(SEO["b" /* Seo */], {
    title: props.title,
    description: description,
    openGraph: {
      type: 'article',
      article: {
        publishedTime: props.created.toString(),
        modifiedTime: props.modified.toString()
      }
    }
  }), _slug_jsx(Outdate, {
    time: props.modified
  }), _slug_jsx(MD_render["a" /* default */], {
    value: content,
    escapeHtml: false,
    showTOC: true
  }), _slug_jsx(Copyright, copyrightInfo));
};
const getStaticProps = async (context) => {
  const {
    params
  } = context;
  const {
    slug
  } = params;
  const post = core["a" /* Core */].fetcher.getPostBySlug(slug);
  return {
    props: post || {}
  };
};
const getStaticPaths = async () => {
  const paths = core["a" /* Core */].fetcher.articles.getKeys().map(k => {
    return {
      params: {
        slug: k
      }
    };
  });
  return {
    paths,
    fallback: false
  };
};
/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (Object(mobx["a" /* observer */])(PostView));

/***/ }),

/***/ "JE/y":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/javascript");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "JvBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toc", function() { return Toc; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o4Jf");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oZCl");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("p7dQ");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ufq7");
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_queue_anim__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("fuIW");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*
 * @Author: Innei
 * @Date: 2020-06-12 21:41:12
 * @LastEditTime: 2020-08-21 20:44:25
 * @LastEditors: Innei
 * @FilePath: /mx-web/components/Toc/index.tsx
 * @Coding with Love
 */







const Toc = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: headings,
    1: setHeadings
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const setMaxWidth = lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(() => {
    if (containerRef.current) {
      containerRef.current.style.maxWidth = document.documentElement.getBoundingClientRect().width - containerRef.current.getBoundingClientRect().x - 30 + 'px';
    }
  }, 14);
  const getHeadings = lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(() => {
    const $write = document.getElementById('write');

    if (!$write) {
      return getHeadings();
    }

    setMaxWidth();
    const $headings = lodash_range__WEBPACK_IMPORTED_MODULE_2___default()(1, 6).map(h => Array.from($write.querySelectorAll('h' + h)));

    if (lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default()(headings)) {
      return;
    }

    if (headings.length === 0) {
      // @ts-ignore
      const headings = $headings.flat(2).sort((a, b) => parseInt(a.id) - parseInt(b.id)).map(d => d.id);
      setHeadings(headings.length === 0 ? null : headings);
    }
  }, 20);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    try {
      setTimeout(() => {
        getHeadings();
        window.addEventListener('resize', setMaxWidth);
      }, 1000); // eslint-disable-next-line no-empty
    } catch {}

    return () => {
      window.removeEventListener('resize', setMaxWidth);
    };
  });
  return __jsx("section", {
    className: "paul-lister",
    style: {
      zIndex: 3
    }
  }, __jsx("div", {
    className: "container",
    ref: containerRef
  }, __jsx(rc_queue_anim__WEBPACK_IMPORTED_MODULE_5___default.a, null, headings && headings.map((heading, i) => {
    return __jsx("a", {
      "data-scroll": true,
      href: '#' + heading,
      key: i,
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['toc-link'],
      onClick: e => {
        if (typeof window.SmoothScroll === 'undefined') {
          e.preventDefault();
          const el = document.getElementById(heading);
          el === null || el === void 0 ? void 0 : el.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    }, __jsx("span", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['a-pointer']
    }, heading.slice(heading.indexOf('¡') + 1)));
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "JvBL")).then(m => m.Toc), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("JvBL")],
    modules: ['.']
  }
}));

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

/***/ "NEVV":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/c");

/***/ }),

/***/ "NMOV":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/applescript");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "P4rS":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism/prism");

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

/***/ "Q3Ln":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/docker");

/***/ }),

/***/ "QNh2":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/csharp");

/***/ }),

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "SozK":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/git");

/***/ }),

/***/ "SzuA":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"copyright-session": "Copyright_copyright-session__3Q0fD"
};


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

/***/ "WCKZ":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism/tomorrow");

/***/ }),

/***/ "WKnZ":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/clike");

/***/ }),

/***/ "X+54":
/***/ (function(module, exports) {

module.exports = require("markdown-yaml-metadata-parser");

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

/***/ "dzui":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/nginx");

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

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "fuIW":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"a-pointer": "Toc_a-pointer__3AN3u",
	"active": "Toc_active__1DI_m",
	"toc-link": "Toc_toc-link__1Yat3"
};


/***/ }),

/***/ "g2K/":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"link": "MD-render_link__3rxNc",
	"popup": "MD-render_popup__2JmJq"
};


/***/ }),

/***/ "hn5U":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/pug");

/***/ }),

/***/ "iA9c":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/kotlin");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "jYNn":
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ "jdMi":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/objectivec");

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

/***/ "mcTE":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/json");

/***/ }),

/***/ "mupt":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/go");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "nazx":
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "o0ye":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/typescript");

/***/ }),

/***/ "o4Jf":
/***/ (function(module, exports) {

module.exports = require("lodash/isNull");

/***/ }),

/***/ "oZCl":
/***/ (function(module, exports) {

module.exports = require("lodash/range");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "p37A":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/css-extras");

/***/ }),

/***/ "p7dQ":
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),

/***/ "pyC6":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/tsx");

/***/ }),

/***/ "qcKs":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/rest");

/***/ }),

/***/ "rWQ8":
/***/ (function(module, exports) {

module.exports = require("lodash/shuffle");

/***/ }),

/***/ "s+fN":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/dart");

/***/ }),

/***/ "tcwq":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/yaml");

/***/ }),

/***/ "u3K4":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/http");

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

/***/ "y+Z7":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/languages/prism/graphql");

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