module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"13":"fd6acdeb1e44267459da"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


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

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4vDL":
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ "5X97":
/***/ (function(module, exports) {

module.exports = require("antd/lib/back-top");

/***/ }),

/***/ "62W7":
/***/ (function(module, exports) {



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

/***/ "8rrE":
/***/ (function(module, exports) {

module.exports = require("ua-parser-js");

/***/ }),

/***/ "9d8Q":
/***/ (function(module, exports) {



/***/ }),

/***/ "AOHy":
/***/ (function(module, exports) {

module.exports = require("react-use/lib/useMount");

/***/ }),

/***/ "EpMJ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"notice-darwin": "Notice_notice-darwin__2e6mb",
	"box": "Notice_box__2Mab7",
	"icon-wrap": "Notice_icon-wrap__3u6bq",
	"icon": "Notice_icon__1AZeK",
	"mask": "Notice_mask__f9-Bd",
	"f-wrap": "Notice_f-wrap__1CboW",
	"notice-text": "Notice_notice-text__CN6Kg"
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

/***/ "UUVb":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"select-container": "LampSwitch_select-container__3MBoO",
	"select-line": "LampSwitch_select-line__3o6J4",
	"line": "LampSwitch_line__3dNQQ",
	"sakura-wrap": "LampSwitch_sakura-wrap__xPAGJ",
	"rotating": "LampSwitch_rotating__3dBFQ",
	"sakura": "LampSwitch_sakura__1qJQR",
	"petals": "LampSwitch_petals__LQKRL",
	"petal": "LampSwitch_petal__weJ5P",
	"sakura-img": "LampSwitch_sakura-img__3BGwE"
};


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

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./assets/styles/main.scss
var main = __webpack_require__("62W7");

// EXTERNAL MODULE: ./common/store/index.ts + 4 modules
var store = __webpack_require__("zQ19");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/Logo/index.tsx

var __jsx = external_react_default.a.createElement;

const DefaultLogo = /*#__PURE__*/Object(external_react_["memo"])(() => {
  return __jsx("svg", {
    viewBox: "0 0 200 200",
    version: "1.1"
  }, __jsx("desc", null, "Created with Sketch."), __jsx("g", {
    id: "Custom-Preset",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, __jsx("g", {
    id: "Group",
    transform: "translate(1.000000, 0.000000)"
  }, __jsx("g", {
    transform: "translate(0.891670, 0.001664)",
    fillRule: "nonzero"
  }, __jsx("g", {
    id: "Shape-2",
    fill: 'currentColor'
  }, __jsx("path", {
    d: "M97.9232558,0 C43.8413297,0 0,43.8413297 0,97.9232558 C0,152.005182 43.8413297,195.846512 97.9232558,195.846512 C152.005182,195.846512 195.846512,152.005182 195.846512,97.9232558 C195.846512,43.8413297 152.005182,0 97.9232558,0 Z M97.9232558,184.96615 C49.8516415,184.96615 10.8803618,145.99487 10.8803618,97.9232558 C10.8803618,49.8516415 49.8516415,10.8803618 97.9232558,10.8803618 C145.99487,10.8803618 184.96615,49.8516415 184.96615,97.9232558 C184.96615,145.99487 145.99487,184.96615 97.9232558,184.96615 Z",
    id: "Shape"
  })), __jsx("circle", {
    id: "Oval",
    cx: "97.9232558",
    cy: "97.9232558",
    r: "78.8162791"
  })), __jsx("g", {
    transform: "translate(48.391670, 47.501664)",
    id: "Shape",
    stroke: "currentColor",
    strokeWidth: "8.8"
  }, __jsx("path", {
    d: "M50.1120234,100.116279 L0,50.1120234 L50.1120234,0 L100.116279,50.0042556 L50.1120234,100.116279 Z M90.5813953,57.2093023 L72.7145681,40.3711034 L50.1119553,19.0697674 L9.53488372,57.2093023 M71.5116279,42.9069767 L33.372093,81.0465116 M28.6046512,42.9069767 L66.744186,81.0465116"
  })))));
});
const CustomLogo = /*#__PURE__*/Object(external_react_["memo"])(() => {
  return __jsx("svg", {
    width: "200px",
    height: "200px",
    viewBox: "0 0 200 200",
    version: "1.1"
  }, __jsx("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, __jsx("g", {
    id: "candy",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }, __jsx("path", {
    d: "M194.332122,35.8674464 C183.43329,12.9044834 160.854348,0 137.650383,0 C126.751551,0 115.696464,2.8460039 105.696102,8.81091618 L94.9535254,15.2046784 C89.0158106,18.7524366 87.1016788,26.3937622 90.6564949,32.3196881 L103.469459,53.7231969 C105.813293,57.6218324 109.954068,59.8050682 114.212035,59.8050682 C116.399614,59.8050682 118.587193,59.2202729 120.618517,58.0506823 L131.361093,51.6569201 C133.353353,50.4483431 135.579996,49.9025341 137.767575,49.9025341 C142.025541,49.9025341 146.166316,52.08577 148.510151,55.9844055 C152.064967,61.871345 150.111772,69.5516569 144.213121,73.0994152 L6.08312182,155.009747 C0.145406945,158.557505 -1.76872483,166.19883 1.78609132,172.124756 L14.599055,193.528265 C16.9428898,197.426901 21.0836647,199.610136 25.3416313,199.610136 C27.5292104,199.610136 29.7167896,199.025341 31.7481131,197.85575 L167.417085,117.348928 C195.425911,100.623782 208.277939,65.3021442 194.332122,35.8674464 Z M124.915547,40.9356725 L123.938949,41.5204678 L115.930847,17.5438596 C119.720047,15.711501 123.665502,14.3859649 127.767213,13.5672515 L135.814379,37.6608187 C131.986116,37.9727096 128.23598,38.9473684 124.915547,40.9356725 L124.915547,40.9356725 Z M56.9834013,168.34308 L33.3497336,153.333333 L45.381419,146.19883 L69.0150868,161.208577 L56.9834013,168.34308 L56.9834013,168.34308 Z M98.9771086,143.430799 L75.3434408,128.421053 L87.3751262,121.28655 L111.008794,136.296296 L98.9771086,143.430799 L98.9771086,143.430799 Z M142.298989,117.738791 L118.665321,102.729045 L130.697006,95.5945419 L154.330674,110.604288 L142.298989,117.738791 Z M150.268027,40.8187135 L168.237428,22.8849903 C171.518796,25.4191033 174.487654,28.3820663 177.065872,31.6959064 L159.213663,49.5126706 C156.98702,45.8869396 153.861907,42.9239766 150.268027,40.8187135 L150.268027,40.8187135 Z M182.3395,82.8460039 L159.096472,75.1267057 C160.346517,73.0604288 161.362179,70.877193 161.987201,68.460039 C162.416904,66.705653 162.651288,64.9122807 162.690352,63.1578947 L186.284956,70.994152 C185.464613,75.0487329 184.13644,79.0253411 182.3395,82.8460039 L182.3395,82.8460039 Z",
    id: "Shape"
  }))));
});
// CONCATENATED MODULE: ./components/Loader/index.tsx


var Loader_jsx = external_react_default.a.createElement;


const Loader = /*#__PURE__*/Object(external_react_["memo"])(() => {
  return Loader_jsx("div", {
    className: "jsx-1525261419" + " " + 'loader'
  }, Loader_jsx(style_default.a, {
    id: "1525261419"
  }, [".loader svg{top:50%;left:50%;opacity:0;z-index:100;height:8em;color:#fff;position:fixed;visibility:hidden;-webkit-transform:translate(-50%,-50%) scale(0);-ms-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);-webkit-transition:opacity 0.3s, -webkit-transform 0.5s cubic-bezier(0.5,0,0.5,1.5),visibility 0.3s;-webkit-transition:opacity 0.3s, transform 0.5s cubic-bezier(0.5,0,0.5,1.5),visibility 0.3s;transition:opacity 0.3s, transform 0.5s cubic-bezier(0.5,0,0.5,1.5),visibility 0.3s;}", ".loader:before{top:50%;left:50%;z-index:99;content:'';width:100vmax;height:100vmax;position:fixed;border-radius:50%;background:var(--green);-webkit-transition:-webkit-transform 0.5s ease-in-out;-webkit-transition:transform 0.5s ease-in-out;transition:transform 0.5s ease-in-out;-webkit-transform:translate(-50%,-50%) scale(0);-ms-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);}", "body.loading .loader:before{-webkit-transform:translate(-50%,-50%) scale(1.5);-ms-transform:translate(-50%,-50%) scale(1.5);transform:translate(-50%,-50%) scale(1.5);}", "body.loading .loader svg{opacity:1;visibility:visible;-webkit-transform:translate(-50%,-50%) scale(1);-ms-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);}"]), Loader_jsx(CustomLogo, null));
});
/* harmony default export */ var components_Loader = (Loader);
// EXTERNAL MODULE: ./configs.ts
var configs = __webpack_require__("F/y2");

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__("s7eq");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./utils/mobx.tsx
var mobx = __webpack_require__("ytCK");

// CONCATENATED MODULE: ./components/Footer/index.tsx


var Footer_jsx = external_react_default.a.createElement;








const FooterActions = dynamic_default()(() => __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, "P4js")).then(m => m.FooterActions), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("P4js")],
    modules: ['components/Footer/actions']
  }
});
const Footer = Object(mobx["a" /* observer */])(() => {
  var _configs$url;

  const {
    appStore
  } = Object(store["a" /* useStore */])();
  const thisYear = new Date().getFullYear();
  return Footer_jsx("footer", {
    className: "jsx-2343023712"
  }, Footer_jsx(style_default.a, {
    id: "2343023712"
  }, [".row.jsx-2343023712{padding-bottom:18px;}"]), Footer_jsx("div", {
    className: "jsx-2343023712" + " " + "wrap"
  }, Footer_jsx("div", {
    className: "jsx-2343023712" + " " + "row"
  }, Footer_jsx("div", {
    className: "jsx-2343023712" + " " + "col-m-6 left to-center"
  }, Footer_jsx("p", {
    className: "jsx-2343023712"
  }, "\xA9 ", thisYear !== 2020 && '2020-', thisYear, ' ', Footer_jsx("a", {
    href: (_configs$url = configs["a" /* default */].url) !== null && _configs$url !== void 0 ? _configs$url : '#',
    target: "_blank",
    className: "jsx-2343023712"
  }, configs["a" /* default */].author), ".", ' ', Footer_jsx("span", {
    title: 'Stay hungry. Stay foolish. -- Steve Jobs',
    className: "jsx-2343023712"
  }, "Stay hungry. Stay foolish.")), Footer_jsx("p", {
    className: "jsx-2343023712"
  }, "Powered by", ' ', Footer_jsx("a", {
    href: "https://github.com/Innei/candy",
    className: "jsx-2343023712"
  }, Footer_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faCandyCane"]
  }), ' Candy '), !!configs["a" /* default */].icp && !!configs["a" /* default */].icp.name && !!configs["a" /* default */].icp.url && Footer_jsx("a", {
    href: configs["a" /* default */].icp.url,
    target: '_blank',
    rel: 'noreferrer',
    className: "jsx-2343023712"
  }, configs["a" /* default */].icp.name))), Footer_jsx("div", {
    className: "jsx-2343023712" + " " + "col-m-6 right to-center"
  }, Footer_jsx("p", {
    style: {
      marginRight: appStore.viewport.mobile ? '' : '3rem'
    },
    className: "jsx-2343023712"
  }, Footer_jsx(link_default.a, {
    href: "/[page]",
    as: "/about"
  }, Footer_jsx("a", {
    className: "jsx-2343023712"
  }, "\u5173\u4E8E")), "\xB7", Footer_jsx(link_default.a, {
    href: "/[page]",
    as: "/message"
  }, Footer_jsx("a", {
    className: "jsx-2343023712"
  }, "\u7559\u8A00")), "\xB7", Footer_jsx(link_default.a, {
    href: "/friends"
  }, Footer_jsx("a", {
    className: "jsx-2343023712"
  }, "\u53CB\u94FE")), "\xB7", Footer_jsx("a", {
    href: "/feed",
    target: "_blank",
    className: "jsx-2343023712"
  }, "RSS \u8BA2\u9605"), "\xB7", Footer_jsx("a", {
    href: "/sitemap.xml",
    target: '_blank',
    className: "jsx-2343023712"
  }, "\u7AD9\u70B9\u5730\u56FE"), configs["a" /* default */].travellings && Footer_jsx(external_react_["Fragment"], null, "\xB7", Footer_jsx("a", {
    href: "https://travellings.now.sh/",
    target: '_blank',
    className: "jsx-2343023712"
  }, "\u5F00\u5F80")))))), Footer_jsx(FooterActions, null));
});
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/Header/index.module.scss
var index_module = __webpack_require__("rhhu");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// CONCATENATED MODULE: ./components/Header/index.tsx

var Header_jsx = external_react_default.a.createElement;











const SubMenu = Object(mobx["a" /* observer */])(({
  subMenu,
  onClick
}) => {
  const menus = subMenu.map(menu => {
    return Header_jsx(link_default.a, {
      href: menu.path,
      as: menu.as,
      key: menu.title
    }, Header_jsx("a", {
      onClick: onClick
    }, menu.icon && Header_jsx(react_fontawesome_["FontAwesomeIcon"], {
      icon: menu.icon
    }), Header_jsx("span", null, menu.title)));
  });
  return Header_jsx("div", {
    className: "sub-menu"
  }, menus);
});
const NavItems = Object(mobx["a" /* observer */])(({
  onClick
}) => {
  const {
    appStore
  } = Object(store["a" /* useStore */])();
  const {
    menu
  } = appStore;
  return Header_jsx(external_react_default.a.Fragment, null, menu.map(item => {
    return Header_jsx("div", {
      className: item.subMenu && item.subMenu.length > 0 ? 'has-child' : 'menu-link',
      key: item.title,
      onClick: onClick
    }, Header_jsx(link_default.a, {
      href: item.path,
      as: item.path
    }, Header_jsx("a", null, item.icon && Header_jsx(react_fontawesome_["FontAwesomeIcon"], {
      icon: item.icon
    }), Header_jsx("span", null, item.title))), item.subMenu && Header_jsx(SubMenu, {
      subMenu: item.subMenu,
      onClick: onClick
    }));
  }));
});
const Links = Object(mobx["a" /* observer */])(() => {
  const {
    socialStore
  } = Object(store["a" /* useStore */])();
  return Header_jsx(external_react_["Fragment"], null, socialStore.socialLinks.map(link => {
    return Header_jsx("a", {
      title: link.title,
      href: link.url,
      key: link.url
    }, Header_jsx(react_fontawesome_["FontAwesomeIcon"], {
      icon: link.icon
    }));
  }), configs["a" /* default */].travellings && Header_jsx("a", {
    href: "https://travellings.now.sh/",
    target: '_blank',
    title: "\u5F00\u5F80"
  }, Header_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faRoute"]
  })));
});
const Header = Object(mobx["a" /* observer */])(() => {
  const {
    appStore
  } = Object(store["a" /* useStore */])();
  const isMobile = appStore.viewport.mobile;
  const {
    0: menuOpen,
    1: setMenu
  } = Object(external_react_["useState"])(false);
  const closeMenu = Object(external_react_["useCallback"])(e => {
    if (appStore.viewport.mobile) {
      e.stopPropagation();
      setMenu(false);
    }
  }, [appStore.viewport.mobile]);
  return Header_jsx("header", {
    style: {
      backdropFilter: isMobile ? 'unset' : undefined,
      backgroundColor: isMobile ? 'var(--light-bg)' : undefined
    },
    className: "jsx-685620294" + " " + (external_classnames_default()(menuOpen ? 'active' : '', isMobile && appStore.scrollDirection == 'down' && appStore.isOverflow ? 'hide' : null) || "")
  }, Header_jsx(style_default.a, {
    id: "685620294"
  }, [".head-logo.jsx-685620294{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "header.jsx-685620294{background-color:var(--bg-opacity);-webkit-backdrop-filter:blur(25px) saturate(150%) brightness(1.1);backdrop-filter:blur(25px) saturate(150%) brightness(1.1);z-index:5;-webkit-transition:-webkit-transform 0.5s,backdrop-filter 0.5s;-webkit-transition:transform 0.5s,backdrop-filter 0.5s;transition:transform 0.5s,backdrop-filter 0.5s;}", "header.hide.jsx-685620294{-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}", "@media screen and (max-width:600px){.head-logo.jsx-685620294{display:block;}}", "html.dark.jsx-685620294 header.jsx-685620294{-webkit-backdrop-filter:saturate(150%) blur(30px);backdrop-filter:saturate(150%) blur(30px);}"]), appStore.viewport.mobile && Header_jsx("div", {
    onClick: () => {
      setMenu(!menuOpen);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1em',
      cursor: 'pointer'
    },
    className: "jsx-685620294" + " " + "head-btn"
  }, Header_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faListUl"]
  })), Header_jsx("div", {
    onClick: () => {
      (appStore === null || appStore === void 0 ? void 0 : appStore.viewport.mobile) ? router_default.a.push('/') : null;
    },
    className: "jsx-685620294" + " " + "head-logo"
  }, Header_jsx(DefaultLogo, null)), Header_jsx("div", {
    className: "jsx-685620294" + " " + (external_classnames_default()(index_module_default.a['head-swiper'], appStore.headerNav.show && appStore.scrollDirection == 'down' && appStore.isOverflow ? index_module_default.a['toggle'] : null) || "")
  }, Header_jsx("nav", {
    className: "jsx-685620294" + " " + (index_module_default.a['head-info'] || "")
  }, Header_jsx("div", {
    className: "jsx-685620294" + " " + (index_module_default.a['desc'] || "")
  }, Header_jsx("div", {
    className: "jsx-685620294" + " " + (index_module_default.a['meta'] || "")
  }, appStore.headerNav.meta), Header_jsx("div", {
    className: "jsx-685620294" + " " + (index_module_default.a['title'] || "")
  }, appStore.headerNav.title))), Header_jsx("nav", {
    className: "jsx-685620294" + " " + (external_classnames_default()('head-menu', index_module_default.a['head-menu']) || "")
  }, Header_jsx(NavItems, {
    onClick: closeMenu
  }))), Header_jsx("nav", {
    className: "jsx-685620294" + " " + "head-social"
  }, Header_jsx(Links, null)));
});
/* harmony default export */ var components_Header = (/*#__PURE__*/Object(external_react_["memo"])(Header));
// EXTERNAL MODULE: external "rc-tween-one"
var external_rc_tween_one_ = __webpack_require__("VNO/");
var external_rc_tween_one_default = /*#__PURE__*/__webpack_require__.n(external_rc_tween_one_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ./components/Notice/index.module.scss
var Notice_index_module = __webpack_require__("EpMJ");
var Notice_index_module_default = /*#__PURE__*/__webpack_require__.n(Notice_index_module);

// CONCATENATED MODULE: ./components/Notice/index.tsx

var Notice_jsx = external_react_default.a.createElement;





const _Notice = props => {
  const {
    icon,
    text
  } = props;
  return Notice_jsx("div", {
    className: Notice_index_module_default.a['f-wrap']
  }, Notice_jsx("div", {
    className: Notice_index_module_default.a['mask']
  }, Notice_jsx("div", {
    className: Notice_index_module_default.a['notice-darwin']
  }, Notice_jsx("div", {
    className: Notice_index_module_default.a['box']
  }, Notice_jsx("div", {
    className: Notice_index_module_default.a['icon-wrap']
  }, Notice_jsx("div", {
    className: Notice_index_module_default.a['icon']
  }, Notice_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: icon
  }))), Notice_jsx("div", {
    className: Notice_index_module_default.a['notice-text']
  }, Notice_jsx("span", null, text))))));
};

const NoticePanel = props => {
  if (typeof document === 'undefined') {
    return null;
  }

  const animation = [{
    opacity: 0
  }, {
    opacity: 1
  }, {
    opacity: 1,
    duration: 3000
  }, {
    opacity: 0,
    onComplete: () => {
      props.setShow(false);
    }
  }];
  return /*#__PURE__*/external_react_dom_default.a.createPortal(Notice_jsx(external_rc_tween_one_default.a, {
    animation: animation,
    paused: false,
    style: {
      opacity: 0
    }
  }, Notice_jsx(_Notice, props)), document.body);
};
// EXTERNAL MODULE: ./components/LampSwitch/index.module.scss
var LampSwitch_index_module = __webpack_require__("UUVb");
var LampSwitch_index_module_default = /*#__PURE__*/__webpack_require__.n(LampSwitch_index_module);

// CONCATENATED MODULE: ./components/LampSwitch/index.tsx

var LampSwitch_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Switch = /*#__PURE__*/Object(external_react_["memo"])((props = {}) => {
  const containerRef = Object(external_react_["useRef"])(null);
  return LampSwitch_jsx("div", {
    className: LampSwitch_index_module_default.a['select-container'],
    ref: containerRef
  }, LampSwitch_jsx("div", {
    className: LampSwitch_index_module_default.a['select-line']
  }, LampSwitch_jsx("div", {
    className: LampSwitch_index_module_default.a['line']
  })), LampSwitch_jsx("div", _extends({
    className: LampSwitch_index_module_default.a['sakura-wrap']
  }, props), LampSwitch_jsx("div", {
    className: LampSwitch_index_module_default.a['sakura-img'],
    onClick: _ => {
      if (containerRef.current) {
        containerRef.current.style.top = '0';
        setTimeout(() => {
          try {
            containerRef.current.style.top = ''; // eslint-disable-next-line no-empty
          } catch {}
        }, 500);
      }
    }
  })));
});

const Sakura = () => LampSwitch_jsx("div", {
  className: LampSwitch_index_module_default.a['sakura-wrap']
}, LampSwitch_jsx("div", {
  className: LampSwitch_index_module_default.a['sakura']
}, LampSwitch_jsx("div", {
  className: LampSwitch_index_module_default.a['blossom']
}), LampSwitch_jsx("div", {
  className: LampSwitch_index_module_default.a['petals']
}, LampSwitch_jsx("div", {
  className: LampSwitch_index_module_default.a['petal']
}), LampSwitch_jsx("div", {
  className: LampSwitch_index_module_default.a['petal']
}), LampSwitch_jsx("div", {
  className: LampSwitch_index_module_default.a['petal']
}), LampSwitch_jsx("div", {
  className: LampSwitch_index_module_default.a['petal']
}), LampSwitch_jsx("div", {
  className: LampSwitch_index_module_default.a['petal']
}), LampSwitch_jsx("div", {
  className: LampSwitch_index_module_default.a['petal']
}))));
// EXTERNAL MODULE: external "ua-parser-js"
var external_ua_parser_js_ = __webpack_require__("8rrE");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// EXTERNAL MODULE: ./utils/index.ts + 1 modules
var utils = __webpack_require__("cBaE");

// CONCATENATED MODULE: ./layouts/BasicLayout.tsx

var BasicLayout_jsx = external_react_default.a.createElement;

function BasicLayout_extends() { BasicLayout_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return BasicLayout_extends.apply(this, arguments); }














const BasicLayout = Object(mobx["a" /* observer */])(({
  children
}) => {
  const {
    appStore,
    actionStore
  } = Object(store["a" /* useStore */])();
  const {
    autoToggleColorMode,
    colorMode
  } = appStore;
  const {
    0: showNotice,
    1: setNotice
  } = Object(external_react_["useState"])(false);
  const {
    0: tip,
    1: setTip
  } = Object(external_react_["useState"])({
    text: '白天模式',
    icon: free_solid_svg_icons_["faSun"]
  });
  const handleChangeColorMode = Object(external_react_["useCallback"])(() => {
    const $html = document.documentElement;

    if (autoToggleColorMode) {
      const nowColorMode = colorMode;
      appStore.colorMode = nowColorMode == 'dark' ? 'light' : 'dark';
      appStore.autoToggleColorMode = false;
      $html.classList.remove(nowColorMode);
      $html.classList.add(appStore.colorMode);
      const isDark = appStore.colorMode == 'dark';
      setTip({
        text: (isDark ? '夜间模式' : '白天模式') + '(手动)',
        icon: isDark ? free_solid_svg_icons_["faMoon"] : free_solid_svg_icons_["faSun"]
      });
    } else {
      appStore.autoToggleColorMode = true;
      appStore.colorMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      $html.classList.remove('dark', 'light');
      const osName = new external_ua_parser_js_["UAParser"](navigator.userAgent).getOS().name;
      let icon = free_regular_svg_icons_["faCheckCircle"];

      switch (osName) {
        case 'Android':
          {
            icon = free_brands_svg_icons_["faAndroid"];
            break;
          }

        case 'Mac OS':
        case 'iOS':
          {
            icon = free_brands_svg_icons_["faApple"];
            break;
          }

        case 'Windows':
          {
            icon = free_brands_svg_icons_["faWindows"];
            break;
          }

        case 'Linux':
          {
            icon = free_brands_svg_icons_["faLinux"];
            break;
          }

        case 'CentOS':
          {
            icon = free_brands_svg_icons_["faCentos"];
            break;
          }

        case 'Chromium OS':
          {
            icon = free_brands_svg_icons_["faChrome"];
            break;
          }

        case 'Ubuntu':
          {
            icon = free_brands_svg_icons_["faUbuntu"];
            break;
          }

        case 'RedHat':
          {
            icon = free_brands_svg_icons_["faRedhat"];
            break;
          }

        default:
          {
            break;
          }
      }

      setTip({
        text: '跟随系统',
        icon
      });
    }

    setNotice(!showNotice);
  }, [appStore, autoToggleColorMode, colorMode, showNotice]);
  const actionUUID = Object(external_react_["useMemo"])(() => {
    return new utils["a" /* UUID */]();
  }, []);
  Object(external_react_["useEffect"])(() => {
    actionStore.removeActionByUUID(actionUUID);

    if (appStore.viewport.mobile || appStore.viewport.pad) {
      const action = {
        id: actionUUID,
        icon: appStore.colorMode === 'dark' ? BasicLayout_jsx(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_solid_svg_icons_["faSun"]
        }) : BasicLayout_jsx(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_solid_svg_icons_["faMoon"]
        }),
        onClick: handleChangeColorMode
      };
      actionStore.appendActions(action);
      return () => {
        actionStore.removeActionByUUID(actionUUID);
      };
    }
  }, [actionStore, actionUUID, appStore.colorMode, appStore.viewport.mobile, appStore.viewport.pad, handleChangeColorMode]);
  return BasicLayout_jsx(external_react_default.a.Fragment, null, BasicLayout_jsx(components_Header, null), children, BasicLayout_jsx(Footer, null), !(appStore.viewport.mobile || appStore.viewport.pad) && BasicLayout_jsx(Switch, {
    onClick: handleChangeColorMode
  }), showNotice && BasicLayout_jsx(NoticePanel, BasicLayout_extends({}, tip, {
    setShow: setNotice,
    key: 'notice'
  })));
});
// EXTERNAL MODULE: external "lodash/throttle"
var throttle_ = __webpack_require__("p7dQ");
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");

// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__("9d8Q");

// EXTERNAL MODULE: external "react-use/lib/useMount"
var useMount_ = __webpack_require__("AOHy");
var useMount_default = /*#__PURE__*/__webpack_require__.n(useMount_);

// EXTERNAL MODULE: external "react-use/lib/useUnmount"
var useUnmount_ = __webpack_require__("tV+8");
var useUnmount_default = /*#__PURE__*/__webpack_require__.n(useUnmount_);

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__("kiQV");

// CONCATENATED MODULE: ./pages/_app.tsx

var _app_jsx = external_react_default.a.createElement;

function _app_extends() { _app_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _app_extends.apply(this, arguments); }















let _currentY = 0;

const Content = props => {
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  const {
    appStore: app
  } = Object(store["a" /* useStore */])();
  useMount_default()(() => {
    printToConsole();
    setLoading(false);
    app.setLoading(false);
    checkBrowser();
    registerRouterEvents();
    registerEvent();
    initColorMode();
    setPages();
  });
  const setPages = Object(external_react_["useCallback"])(() => {
    fetch('/data/pages.json').then(res => {
      res.json().then(json => {
        const pages = Object.values(json);
        app.setPage(pages.map(i => ({
          created: i.created,
          modified: i.modified,
          order: i.order,
          slug: i.slug,
          title: i.title
        })));
      });
    });
  }, []);
  const registerEvent = Object(external_react_["useCallback"])(() => {
    const resizeHandler = throttle_default()(() => {
      app.updateViewport();
    }, 300);
    window.onresize = resizeHandler;
    app.updateViewport();

    if (typeof document !== 'undefined') {
      document.addEventListener('scroll', handleScroll);
    }
  }, []);
  const handleScroll = Object(external_react_["useCallback"])(throttle_default()(() => {
    const currentY = document.documentElement.scrollTop;
    const direction = _currentY >= currentY ? 'up' : 'down';
    app.updatePosition(direction);
    _currentY = currentY;
  }, 13), []);
  const checkBrowser = Object(external_react_["useCallback"])(() => {
    const parser = new external_ua_parser_js_["UAParser"](window.navigator.userAgent);
    const browser = parser.getBrowser();

    const isOld = (() => {
      if (browser.name === 'IE') {
        alert('欧尼酱, 乃真的要使用 IE 浏览器吗, 不如换个 Chrome 好不好嘛（o´ﾟ□ﾟ`o）');
        location.href = 'https://www.google.com/chrome/';
        return true;
      } // check build-in methods


      const ObjectMethods = ['fromEntries', 'entries'];
      const ArrayMethods = ['flat'];

      if (!window.Reflect || !(ObjectMethods.every(m => Reflect.has(Object, m)) && ArrayMethods.every(m => Reflect.has(Array.prototype, m))) || !window.requestAnimationFrame || !window.Proxy) {
        return true;
      }

      return false;
    })();

    if (isOld) {
      message_default.a.warn('欧尼酱, 乃的浏览器太老了, 更新一下啦（o´ﾟ□ﾟ`o）');

      class BrowserTooOldError extends Error {
        constructor() {
          const {
            name: osName,
            version: osVersion
          } = parser.getOS();
          super(`User browser(${browser.name} ${browser.version}) is too old. OS: ${osName}/${osVersion}`);
        }

      }

      throw new BrowserTooOldError();
    }
  }, []);
  useUnmount_default()(() => {
    window.onresize = null;
    document.removeEventListener('scroll', handleScroll);
  });
  const initColorMode = Object(external_react_["useCallback"])(() => {
    const getColormode = e => {
      app.colorMode = e.matches ? 'dark' : 'light';
      return app.colorMode;
    };

    app.colorMode = getColormode(window.matchMedia('(prefers-color-scheme: dark)'));

    try {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (app.autoToggleColorMode) {
          getColormode(e);
        }
      }); // eslint-disable-next-line no-empty
    } catch {}
  }, []);
  const registerRouterEvents = Object(external_react_["useCallback"])(() => {
    router_["Router"].events.on('routeChangeStart', url => {
      setTimeout(() => {
        if (app.loading) {
          setLoading(true);
        }
      }, 500);
      app.setLoading(true);
    });
    router_["Router"].events.on('routeChangeComplete', () => {
      // window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
      setLoading(false);
      app.setLoading(false);
    });
    router_["Router"].events.on('routeChangeError', () => {
      // window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
      setLoading(false);
      app.setLoading(false);

      message_default.a.error('出现了未知错误, 刷新试试?');
    });
  }, []);
  return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(external_next_seo_["NextSeo"], {
    title: configs["a" /* default */].title + ' · ' + configs["a" /* default */].description,
    description: configs["a" /* default */].description
  }), _app_jsx(external_next_seo_["LogoJsonLd"], {
    logo: new URL('/custom-icon.svg', configs["a" /* default */].url).toString(),
    url: configs["a" /* default */].url
  }), _app_jsx(external_next_seo_["SocialProfileJsonLd"], {
    type: 'Person',
    name: configs["a" /* default */].author || '',
    url: configs["a" /* default */].url,
    sameAs: configs["a" /* default */].social.map(({
      url
    }) => url)
  }), _app_jsx("div", {
    id: "next",
    style: {
      display: loading ? 'none' : ''
    }
  }, props.children), _app_jsx(components_Loader, null));
};

function MyApp(ctx) {
  const {
    Component,
    pageProps,
    err
  } = ctx;
  return _app_jsx(Content, null, _app_jsx(BasicLayout, null, _app_jsx(Component, _app_extends({}, pageProps, {
    err: err
  }))));
}

function printToConsole() {
  try {
    const text = `
    This Blog Powered By Mix Space.
    --------
    Stay hungry. Stay foolish. --Steve Jobs
    `;
    document.documentElement.prepend(document.createComment(text)); // eslint-disable-next-line no-empty
  } catch {} finally {
    console.log('%c Kico Style %c https://paugram.com ', 'color: #fff; margin: 1em 0; padding: 5px 0; background: #3498db;', 'margin: 1em 0; padding: 5px 0; background: #efefef;');
    console.log(`%c Candy ${package_0.version} %c https://innei.ren `, 'color: #fff; margin: 1em 0; padding: 5px 0; background: #2980b9;', 'margin: 1em 0; padding: 5px 0; background: #efefef;');
  }
}

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

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

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

/***/ "kiQV":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"candy\",\"license\":\"GPL v3\",\"private\":false,\"version\":\"1.0.0-rc\",\"scripts\":{\"start\":\"cross-env NODE_ENV=development next dev -p 2233\",\"prebuild\":\"rimraf .next\",\"dev\":\"start\",\"analyze\":\"cross-env NODE_ENV=production ANALYZE=true BUNDLE_ANALYZE=browser next build\",\"build\":\"cross-env NODE_ENV=production next build && next export\",\"build:ci\":\"cross-env NODE_ENV=production CI=true next build\",\"lint\":\"eslint --ext .ts,.tsx --ignore-path .gitignore . --fix\"},\"browserslist\":[\"chrome >70\",\"safari >12\",\"last 2 versions\",\"last 8 Firefox versions\",\"not IE 11\",\"not IE_Mob 11\",\"maintained node versions\",\"> 1%\"],\"dependencies\":{\"@fortawesome/fontawesome-svg-core\":\"1.2.30\",\"@fortawesome/free-brands-svg-icons\":\"5.14.0\",\"@fortawesome/free-regular-svg-icons\":\"5.14.0\",\"@fortawesome/free-solid-svg-icons\":\"5.14.0\",\"@fortawesome/react-fontawesome\":\"0.1.11\",\"@openfonts/noto-sans-sc_vietnamese\":\"1.44.0\",\"antd\":\"4.6.2\",\"axios\":\"0.20.0\",\"classnames\":\"2.2.6\",\"dayjs\":\"1.8.35\",\"inflection\":\"1.12.0\",\"intersection-observer\":\"0.11.0\",\"js-cookie\":\"2.2.1\",\"kico-style\":\"1.2.0\",\"markdown-yaml-metadata-parser\":\"2.1.1\",\"mobx\":\"5.15.6\",\"mobx-react-lite\":\"2.2.1\",\"next\":\"9.5.3\",\"next-seo\":\"4.7.3\",\"normalize.css\":\"8.0.1\",\"randomcolor\":\"0.6.2\",\"rc-queue-anim\":\"1.8.5\",\"rc-texty\":\"0.2.0\",\"react\":\"16.13.1\",\"react-dom\":\"16.13.1\",\"react-intersection-observer\":\"8.27.1\",\"react-lazy-images\":\"1.1.0\",\"react-markdown\":\"4.3.1\",\"react-syntax-highlighter\":\"13.5.3\",\"react-use\":\"15.3.3\",\"react-zmage\":\"0.8.5-beta.36\",\"remove-markdown\":\"0.3.0\",\"sass\":\"1.26.10\",\"sitemap\":\"6.2.0\",\"ua-parser-js\":\"0.7.21\"},\"devDependencies\":{\"@babel/plugin-proposal-decorators\":\"7.10.5\",\"@next/bundle-analyzer\":\"9.5.3\",\"@types/classnames\":\"2.2.10\",\"@types/inflection\":\"1.5.28\",\"@types/js-cookie\":\"2.2.6\",\"@types/lodash\":\"4.14.161\",\"@types/node\":\"13.13.9\",\"@types/randomcolor\":\"0.5.5\",\"@types/react\":\"16.9.49\",\"@types/react-dom\":\"16.9.8\",\"@types/react-lazyload\":\"2.6.0\",\"@types/react-syntax-highlighter\":\"11.0.5\",\"@types/remove-markdown\":\"0.1.1\",\"@types/ua-parser-js\":\"0.7.33\",\"@types/validator\":\"13.1.0\",\"@typescript-eslint/eslint-plugin\":\"4.0.1\",\"@typescript-eslint/parser\":\"4.0.1\",\"babel-plugin-import\":\"1.13.0\",\"babel-plugin-lodash\":\"3.3.4\",\"cross-env\":\"7.0.2\",\"dotenv\":\"8.2.0\",\"eslint\":\"7.8.1\",\"eslint-config-prettier\":\"6.11.0\",\"eslint-plugin-prettier\":\"3.1.4\",\"eslint-plugin-react\":\"7.20.6\",\"eslint-plugin-react-hooks\":\"4.1.0\",\"next-images\":\"1.4.1\",\"nodemon\":\"2.0.4\",\"prettier\":\"2.0.5\",\"react-lazyload\":\"3.0.0\",\"remark-html\":\"12.0.0\",\"remark-parse\":\"8.0.3\",\"typescript\":\"4.0.2\"}}");

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

/***/ "p7dQ":
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),

/***/ "rWQ8":
/***/ (function(module, exports) {

module.exports = require("lodash/shuffle");

/***/ }),

/***/ "rhhu":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"head-swiper": "Header_head-swiper__37Fg8",
	"head-info": "Header_head-info__17tgL",
	"head-menu": "Header_head-menu__ofiV5",
	"toggle": "Header_toggle__35MPw",
	"meta": "Header_meta__YYzbP",
	"title": "Header_title__EwaWq"
};


/***/ }),

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "tV+8":
/***/ (function(module, exports) {

module.exports = require("react-use/lib/useUnmount");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

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