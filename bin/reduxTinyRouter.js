(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "redux"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("redux")) : factory(root["React"], root["redux"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_79__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _actionsActionsJs = __webpack_require__(/*! ./actions/actions.js */ 2);
	
	var tinyActions = _interopRequireWildcard(_actionsActionsJs);
	
	var _reduxTinyRouterReduxTinyRouterJs = __webpack_require__(/*! ./redux-tiny-router/redux-tiny-router.js */ 8);
	
	var reduxTinyRouter = _interopRequireWildcard(_reduxTinyRouterReduxTinyRouterJs);
	
	exports.tinyActions = tinyActions;
	
	var _middlewareMiddlewareJs = __webpack_require__(/*! ./middleware/middleware.js */ 65);
	
	Object.defineProperty(exports, 'tinyMiddleware', {
	  enumerable: true,
	  get: function get() {
	    return _middlewareMiddlewareJs.middleware;
	  }
	});
	
	var _middlewareUniversalJs = __webpack_require__(/*! ./middleware/universal.js */ 66);
	
	Object.defineProperty(exports, 'tinyUniversal', {
	  enumerable: true,
	  get: function get() {
	    return _middlewareUniversalJs.universal;
	  }
	});
	exports.reduxTinyRouter = reduxTinyRouter;
	
	var _enhancerEnhancer = __webpack_require__(/*! ./enhancer/enhancer */ 67);
	
	Object.defineProperty(exports, 'applyMiddleware', {
	  enumerable: true,
	  get: function get() {
	    return _enhancerEnhancer.applyMiddleware;
	  }
	});
	
	var _reducerReducerJs = __webpack_require__(/*! ./reducer/reducer.js */ 78);
	
	Object.defineProperty(exports, 'tinyReducer', {
	  enumerable: true,
	  get: function get() {
	    return _reducerReducerJs.router;
	  }
	});
	
	var _utilsUtils = __webpack_require__(/*! ./utils/utils */ 3);
	
	Object.defineProperty(exports, 'utils', {
	  enumerable: true,
	  get: function get() {
	    return _utilsUtils.utils;
	  }
	});
	
	var _componentsLinkJsx = __webpack_require__(/*! ./components/link.jsx */ 80);
	
	Object.defineProperty(exports, 'Link', {
	  enumerable: true,
	  get: function get() {
	    return _componentsLinkJsx.Link;
	  }
	});
	
	var _componentsRouteJsx = __webpack_require__(/*! ./components/route.jsx */ 97);
	
	Object.defineProperty(exports, 'Route', {
	  enumerable: true,
	  get: function get() {
	    return _componentsRouteJsx.Route;
	  }
	});
	
	var _componentsRouterJsx = __webpack_require__(/*! ./components/router.jsx */ 98);
	
	Object.defineProperty(exports, 'Router', {
	  enumerable: true,
	  get: function get() {
	    return _componentsRouterJsx.Router;
	  }
	});

/***/ },
/* 1 */
/*!*************************************************************!*\
  !*** ./~/babel-runtime/helpers/interop-require-wildcard.js ***!
  \*************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};
	
	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }
	
	    newObj["default"] = obj;
	    return newObj;
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 2 */
/*!********************************!*\
  !*** ./src/actions/actions.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.navigateTo = navigateTo;
	exports.urlChanged = urlChanged;
	exports.changeUrl = changeUrl;
	exports.preventNavigation = preventNavigation;
	exports.allowNavigation = allowNavigation;
	exports.preventedNavigationAttempted = preventedNavigationAttempted;
	exports.doPreventedNavigation = doPreventedNavigation;
	exports.universalSetPeniding = universalSetPeniding;
	exports.universalPromiseDone = universalPromiseDone;
	exports.syncActionsDone = syncActionsDone;
	exports.syncActionsPending = syncActionsPending;
	
	var _utilsUtilsJs = __webpack_require__(/*! ../utils/utils.js */ 3);
	
	// ****************************** NAVIGATION *****************************************
	
	function navigateTo(path, params, option) {
	
	    if (typeof params === 'string') {
	        option = params;
	        params = undefined;
	    }
	    var url = _utilsUtilsJs.utils.toQueryString(path, params);
	    return {
	        type: 'RTR_ACTION',
	        work: function work(dispatch, getState) {
	            dispatch(urlChanged(url, option));
	        }
	
	    };
	}
	
	function urlChanged(url, option) {
	
	    return {
	        type: 'RTR_ACTION',
	        work: function work(dispatch, getState) {
	            var prevent = getState().router.preventNavigation;
	            if (prevent === true) {
	                dispatch(preventedNavigationAttempted(url));
	            } else {
	                dispatch(changeUrl(url, option));
	            }
	        }
	
	    };
	}
	
	function changeUrl(url, option) {
	    var router = _utilsUtilsJs.utils.urlToRouter(url);
	
	    return {
	        type: 'ROUTER_NAVIGATION',
	        router: router,
	        option: option
	    };
	}
	
	//  ************************* NAVIGATION PREVENTION *************************************
	
	function preventNavigation(message) {
	    return {
	        type: 'PREVENT_NAVIGATION',
	        message: message
	    };
	}
	
	function allowNavigation() {
	    return {
	        type: 'ALLOW_NAVIGATION'
	    };
	}
	
	function preventedNavigationAttempted(url) {
	
	    return {
	        type: 'PREVENTED_NAVIGATION_ATTEMPTED',
	        url: url
	    };
	}
	
	function doPreventedNavigation() {
	
	    return {
	        type: 'RTR_ACTION',
	        work: function work(dispatch, getState) {
	            var url = getState().router.attemptedOnPrevent;
	            if (url) {
	                dispatch(allowNavigation());
	
	                if (url === '_back') {
	                    history.back();
	                    return;
	                }
	                if (url === '_forward') {
	                    history.forward();
	                    return;
	                }
	
	                dispatch(changeUrl(url));
	            } else {
	                console.warn('user have not attempted navegating under prevent!');
	            }
	        }
	
	    };
	}
	
	//  ************************* UNIVERSAL HELPERS *************************************
	
	function universalSetPeniding(val, done) {
	    return {
	        type: 'UNIVERSAL_SET_PENDING',
	        val: val,
	        done: done
	    };
	}
	
	function universalPromiseDone() {
	    return {
	        type: 'UNIVERSAL_PROMISE_DONE'
	    };
	}
	
	function syncActionsDone() {
	
	    return {
	        type: 'UNIVERSAL_SYNC_ACTIONS_DONE'
	    };
	}
	
	function syncActionsPending() {
	    return {
	        type: 'UNIVERSAL_SYNC_ACTIONS_PENDING'
	    };
	}

/***/ },
/* 3 */
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 1)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _queryString = __webpack_require__(/*! query-string */ 5);
	
	var qs = _interopRequireWildcard(_queryString);
	
	var _httpHash = __webpack_require__(/*! http-hash */ 7);
	
	var _httpHash2 = _interopRequireDefault(_httpHash);
	
	var navindex = 0;
	var scrollpos = {};
	var hash = (0, _httpHash2['default'])();
	
	function getInfo(url) {
	    var hashObj = arguments.length <= 1 || arguments[1] === undefined ? hash : arguments[1];
	
	    return hashObj.get(url.split('?')[0]);
	}
	
	function set(url) {
	    hash.set(url);
	}
	
	function setRoutes(routes) {
	    for (var x in routes) {
	        hash.set(routes[x]);
	    }
	}
	
	function _doMatching(mapping, url) {
	    var tmpHash = (0, _httpHash2['default'])();
	    tmpHash.set(mapping);
	    var hashResult = getInfo(url, tmpHash);
	    var router = urlToRouter(url);
	    router.src = hashResult.src;
	    router.splat = hashResult.splat;
	    router.params = hashResult.params;
	    return router;
	}
	
	function match(mapping, url) {
	    return _doMatching(mapping, url);
	}
	
	function check(mapping, url) {
	    return _doMatching(mapping, url).src;
	}
	
	function urlToRouter(url) {
	    var path = url.split('?')[0];
	    var paths = path.split('/');
	    paths[0] = paths[0] || '/';
	    var last = paths[paths.length - 1];
	    if (last.length < 1) {
	        paths = paths.splice(0, paths.length - 1);
	    }
	
	    if (path.charAt(path.length - 1) === '/' && path.length > 1) {
	        path = path.substr(0, path.length - 1); //remove ultimo caracter (o / )
	    }
	    var query = qs.parse(url.split('?')[1] || '');
	
	    if (query.debug_session) {
	        delete query.debug_session;
	    }
	
	    var hash = getInfo(url);
	
	    return {
	        url: url,
	        src: hash.src,
	        splat: hash.splat,
	        params: hash.params,
	        path: path,
	        paths: paths,
	        query: query
	    };
	}
	
	function toQueryString(path, query) {
	    if (!query) {
	        return path;
	    }
	    return path + '?' + qs.stringify(query);
	}
	
	exports['default'] = {
	    utils: {
	        scrollpos: scrollpos,
	        navindex: navindex,
	        set: set,
	        setRoutes: setRoutes,
	        match: match,
	        check: check,
	        urlToRouter: urlToRouter,
	        toQueryString: toQueryString
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/helpers/interop-require-default.js ***!
  \************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 5 */
/*!*********************************!*\
  !*** ./~/query-string/index.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ 6);
	
	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};
	
	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}
	
		str = str.trim().replace(/^(\?|#|&)/, '');
	
		if (!str) {
			return {};
		}
	
		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;
	
			key = decodeURIComponent(key);
	
			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);
	
			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
	
			return ret;
		}, {});
	};
	
	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];
	
			if (Array.isArray(val)) {
				return val.sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}
	
			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 6 */
/*!*****************************************************!*\
  !*** ./~/query-string/~/strict-uri-encode/index.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16);
		});
	};


/***/ },
/* 7 */
/*!******************************!*\
  !*** ./~/http-hash/index.js ***!
  \******************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = HttpHash;
	
	function HttpHash() {
	    if (!(this instanceof HttpHash)) {
	        return new HttpHash();
	    }
	
	    this._hash = new RouteNode();
	}
	
	HttpHash.prototype.get = get;
	HttpHash.prototype.set = set;
	
	function get(pathname) {
	    var pathSegments = pathname.split('/');
	
	    var hash = this._hash;
	    var splat = null;
	    var params = {};
	    var variablePaths;
	
	    for (var i = 0; i < pathSegments.length; i++) {
	        var segment = pathSegments[i];
	
	        if (!segment && !hash.isSplat) {
	            continue;
	        } else if (
	            segment === '__proto__' &&
	            hash.hasOwnProperty('proto')
	        ) {
	            hash = hash.proto;
	        } else if (hash.staticPaths.hasOwnProperty(segment)) {
	            hash = hash.staticPaths[segment];
	        } else if ((variablePaths = hash.variablePaths)) {
	            if (variablePaths.isSplat) {
	                splat = pathSegments.slice(i).join('/');
	                hash = variablePaths;
	                break;
	            } else {
	                params[variablePaths.segment] = segment;
	                hash = variablePaths;
	            }
	        } else {
	            hash = null;
	            break;
	        }
	    }
	
	    // Match the empty splat
	    if (hash &&
	        hash.handler === null &&
	        hash.variablePaths &&
	        hash.variablePaths.isSplat
	    ) {
	        splat = '';
	        hash = hash.variablePaths;
	    }
	
	    return new RouteResult(hash, params, splat);
	}
	
	function set(pathname, handler) {
	    var pathSegments = pathname.split('/');
	    var hash = this._hash;
	    var lastIndex = pathSegments.length - 1;
	    var splatIndex = pathname.indexOf('*');
	    var hasSplat = splatIndex >= 0;
	
	    if (hasSplat && splatIndex !== pathname.length - 1) {
	        throw SplatError(pathname);
	    }
	
	    for (var i = 0; i < pathSegments.length; i++) {
	        var segment = pathSegments[i];
	
	        if (!segment) {
	            continue;
	        }
	
	        if (hasSplat && i === lastIndex) {
	            hash = (
	                hash.variablePaths ||
	                (hash.variablePaths = new RouteNode(hash, segment, true))
	            );
	
	            if (!hash.isSplat) {
	                throw RouteConflictError(pathname, hash);
	            }
	        } else if (segment.indexOf(':') === 0) {
	            segment = segment.slice(1);
	            hash = (
	                hash.variablePaths ||
	                (hash.variablePaths = new RouteNode(hash, segment))
	            );
	
	            if (hash.segment !== segment || hash.isSplat) {
	                throw RouteConflictError(pathname, hash);
	            }
	        } else if (segment === '__proto__') {
	            hash = (
	                (
	                    hash.hasOwnProperty('proto') &&
	                    hash.proto
	                ) ||
	                (hash.proto = new RouteNode(hash, segment))
	            );
	        } else {
	            hash = (
	                (
	                    hash.staticPaths.hasOwnProperty(segment) &&
	                    hash.staticPaths[segment]
	                ) ||
	                (hash.staticPaths[segment] = new RouteNode(hash, segment))
	            );
	        }
	    }
	
	    if (hash.handler === null) {
	        hash.src = pathname;
	        hash.handler = handler;
	    } else {
	        throwRouteConflictError(pathname, hash);
	    }
	}
	
	function RouteNode(parent, segment, isSplat) {
	    this.parent = parent || null;
	    this.segment = segment || null;
	    this.handler = null;
	    this.staticPaths = {};
	    this.variablePaths = null;
	    this.isSplat = !!isSplat;
	    this.src = null;
	}
	
	function RouteResult(node, params, splat) {
	    this.handler = node && node.handler || null;
	    this.splat = splat;
	    this.params = params;
	    this.src = node && node.src || null;
	}
	
	function SplatError(pathname) {
	    var err = new Error('The splat * must be the last segment of the path');
	    err.pathname = pathname;
	    return err;
	}
	
	function RouteConflictError(pathname, hash) {
	    var conflictPath = hash.isSplat ? '' : '/';
	
	    while (hash && hash.parent) {
	        var prefix = (
	            !hash.isSplat &&
	            hash === hash.parent.variablePaths
	        ) ? ':' : '';
	
	        conflictPath = '/' + prefix + hash.segment + conflictPath;
	
	        hash = hash.parent;
	    }
	
	    var err = new Error('Route conflict');
	    err.attemptedPath = pathname;
	    err.conflictPath = conflictPath;
	
	    return err;
	}
	
	// Break this out to prevent deoptimization of path.set
	function throwRouteConflictError(pathname, hash) {
	    throw RouteConflictError(pathname, hash);
	}


/***/ },
/* 8 */
/*!****************************************************!*\
  !*** ./src/redux-tiny-router/redux-tiny-router.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _Promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 9)['default'];
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 1)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.init = init;
	exports.initUniversal = initUniversal;
	
	var _actionsActionsJs = __webpack_require__(/*! ../actions/actions.js */ 2);
	
	var actions = _interopRequireWildcard(_actionsActionsJs);
	
	var _utilsUtils = __webpack_require__(/*! ../utils/utils */ 3);
	
	var _react = __webpack_require__(/*! react */ 64);
	
	var _react2 = _interopRequireDefault(_react);
	
	var qs = __webpack_require__(/*! query-string */ 5);
	
	var skipevent = false;
	
	function init(store) {
	
	    window.__UNIVERSAL__ = __UNIVERSAL__ || false;
	    window.__CLIENT__ = true;
	
	    var url = __UNIVERSAL__ ? store.getState().router.url : window.location.pathname + window.location.search;
	
	    store.dispatch(actions.urlChanged(url, 'popEvent'));
	
	    window.onbeforeunload = function (e) {
	        if (store.getState().router.preventNavigation && store.getState().router.preventNavigationMessage.length > 0) {
	            return store.getState().router.preventNavigationMessage;
	        }
	    };
	
	    window.onpopstate = function (e) {
	
	        if (skipevent) {
	            skipevent = false;
	            _utilsUtils.utils.navindex = e.state || 0; //navindex is necessary as html5 new api did not bless us with information regarding usage of back / forward button
	            return;
	        }
	
	        var index = undefined,
	            navindex = undefined,
	            direction = undefined,
	            url = undefined;
	        index = e.state || 0;
	        navindex = _utilsUtils.utils.navindex;
	        direction = index < navindex ? '_back' : '_forward';
	        url = window.location.pathname + window.location.search;
	
	        if (store.getState().router.preventNavigation) {
	            //if router is preventing navigation
	            skipevent = true; //we prevent by doing the opposite the user did (and dont want to infinite loop)
	            index < navindex ? history.forward() : history.back();
	            store.dispatch(actions.urlChanged(direction, 'popEvent'));
	        } else {
	            store.dispatch(actions.urlChanged(url, 'popEvent')); //business as usual
	        }
	        _utilsUtils.utils.navindex = index;
	    };
	}
	
	function initUniversal(url, createStore, Layout, initialState) {
	
	    return new _Promise(function (resolve, reject) {
	
	        global.__CLIENT__ = false;
	
	        initialState = initialState || {};
	        var store = createStore(initialState, 'http://' + url),
	            state = {},
	            reRender = false,
	            rendered = false,
	            pending,
	            html;
	
	        store.dispatch(actions.universalSetPeniding(0));
	
	        var unsubscribe = store.subscribe(function () {
	            state = store.getState();
	            var syncActionsDone = state.router.syncActionsDone;
	            pending = state.router.pending;
	            if (pending === 0 && rendered) {
	                unsubscribe();
	                store.dispatch(actions.universalPromiseDone());
	                if (reRender) {
	                    html = _react2['default'].renderToString(_react2['default'].createElement(Layout, { store: store }));
	                }
	                delete state.router.pending;
	                delete state.router.syncActionsDone;
	                resolve({ html: html, state: state });
	            }
	
	            if (pending === 0 && !rendered) {
	                if (syncActionsDone) {
	
	                    html = _react2['default'].renderToString(_react2['default'].createElement(Layout, { store: store }));
	                    rendered = true;
	                    store.dispatch(actions.syncActionsPending());
	                }
	            }
	            if (rendered && pending > 0) {
	                reRender = true;
	            }
	        });
	
	        store.dispatch(actions.urlChanged(url.substring(url.indexOf('/'))));
	        store.dispatch(actions.syncActionsDone());
	    });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/*!********************************************!*\
  !*** ./~/babel-runtime/core-js/promise.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ 10), __esModule: true };

/***/ },
/* 10 */
/*!*********************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/promise.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/es6.object.to-string */ 11);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 12);
	__webpack_require__(/*! ../modules/web.dom.iterable */ 34);
	__webpack_require__(/*! ../modules/es6.promise */ 41);
	module.exports = __webpack_require__(/*! ../modules/$.core */ 20).Promise;

/***/ },
/* 11 */
/*!***************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.object.to-string.js ***!
  \***************************************************************************/
/***/ function(module, exports) {



/***/ },
/* 12 */
/*!**************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.string.iterator.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(/*! ./$.string-at */ 13)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./$.iter-define */ 16)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 13 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.string-at.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./$.to-integer */ 14)
	  , defined   = __webpack_require__(/*! ./$.defined */ 15);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 14 */
/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.to-integer.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 15 */
/*!****************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.defined.js ***!
  \****************************************************************/
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 16 */
/*!********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.iter-define.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(/*! ./$.library */ 17)
	  , $def            = __webpack_require__(/*! ./$.def */ 18)
	  , $redef          = __webpack_require__(/*! ./$.redef */ 21)
	  , hide            = __webpack_require__(/*! ./$.hide */ 22)
	  , has             = __webpack_require__(/*! ./$.has */ 27)
	  , SYMBOL_ITERATOR = __webpack_require__(/*! ./$.wks */ 28)('iterator')
	  , Iterators       = __webpack_require__(/*! ./$.iterators */ 31)
	  , $iterCreate     = __webpack_require__(/*! ./$.iter-create */ 32)
	  , setToStringTag  = __webpack_require__(/*! ./$.set-to-string-tag */ 33)
	  , getProto        = __webpack_require__(/*! ./$ */ 23).getProto
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if((!LIBRARY || FORCE) && (BUGGY || !(SYMBOL_ITERATOR in proto))){
	    hide(proto, SYMBOL_ITERATOR, _default);
	  }
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEFAULT == VALUES ? _default : getMethod(VALUES),
	      keys:    IS_SET            ? _default : getMethod(KEYS),
	      entries: DEFAULT != VALUES ? _default : getMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 17 */
/*!****************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.library.js ***!
  \****************************************************************/
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 18 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.def.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./$.global */ 19)
	  , core      = __webpack_require__(/*! ./$.core */ 20)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 19 */
/*!***************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.global.js ***!
  \***************************************************************/
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 20 */
/*!*************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.core.js ***!
  \*************************************************************/
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.5'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 21 */
/*!**************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.redef.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./$.hide */ 22);

/***/ },
/* 22 */
/*!*************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.hide.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(/*! ./$ */ 23)
	  , createDesc = __webpack_require__(/*! ./$.property-desc */ 24);
	module.exports = __webpack_require__(/*! ./$.descriptors */ 25) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 23 */
/*!********************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.js ***!
  \********************************************************/
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 24 */
/*!**********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.property-desc.js ***!
  \**********************************************************************/
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 25 */
/*!********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.descriptors.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./$.fails */ 26)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 26 */
/*!**************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.fails.js ***!
  \**************************************************************/
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 27 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.has.js ***!
  \************************************************************/
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 28 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.wks.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(/*! ./$.shared */ 29)('wks')
	  , uid    = __webpack_require__(/*! ./$.uid */ 30)
	  , Symbol = __webpack_require__(/*! ./$.global */ 19).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 29 */
/*!***************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.shared.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./$.global */ 19)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 30 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.uid.js ***!
  \************************************************************/
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 31 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.iterators.js ***!
  \******************************************************************/
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 32 */
/*!********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.iter-create.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(/*! ./$ */ 23)
	  , descriptor     = __webpack_require__(/*! ./$.property-desc */ 24)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 33)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./$.hide */ 22)(IteratorPrototype, __webpack_require__(/*! ./$.wks */ 28)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 33 */
/*!**************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.set-to-string-tag.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(/*! ./$ */ 23).setDesc
	  , has = __webpack_require__(/*! ./$.has */ 27)
	  , TAG = __webpack_require__(/*! ./$.wks */ 28)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 34 */
/*!***********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/web.dom.iterable.js ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./es6.array.iterator */ 35);
	var Iterators = __webpack_require__(/*! ./$.iterators */ 31);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 35 */
/*!*************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.array.iterator.js ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(/*! ./$.add-to-unscopables */ 36)
	  , step             = __webpack_require__(/*! ./$.iter-step */ 37)
	  , Iterators        = __webpack_require__(/*! ./$.iterators */ 31)
	  , toIObject        = __webpack_require__(/*! ./$.to-iobject */ 38);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./$.iter-define */ 16)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 36 */
/*!***************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.add-to-unscopables.js ***!
  \***************************************************************************/
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 37 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.iter-step.js ***!
  \******************************************************************/
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 38 */
/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.to-iobject.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./$.iobject */ 39)
	  , defined = __webpack_require__(/*! ./$.defined */ 15);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 39 */
/*!****************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.iobject.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./$.cof */ 40);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 40 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.cof.js ***!
  \************************************************************/
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 41 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.promise.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(/*! ./$ */ 23)
	  , LIBRARY    = __webpack_require__(/*! ./$.library */ 17)
	  , global     = __webpack_require__(/*! ./$.global */ 19)
	  , ctx        = __webpack_require__(/*! ./$.ctx */ 42)
	  , classof    = __webpack_require__(/*! ./$.classof */ 44)
	  , $def       = __webpack_require__(/*! ./$.def */ 18)
	  , isObject   = __webpack_require__(/*! ./$.is-object */ 45)
	  , anObject   = __webpack_require__(/*! ./$.an-object */ 46)
	  , aFunction  = __webpack_require__(/*! ./$.a-function */ 43)
	  , strictNew  = __webpack_require__(/*! ./$.strict-new */ 47)
	  , forOf      = __webpack_require__(/*! ./$.for-of */ 48)
	  , setProto   = __webpack_require__(/*! ./$.set-proto */ 53).set
	  , same       = __webpack_require__(/*! ./$.same-value */ 54)
	  , SPECIES    = __webpack_require__(/*! ./$.wks */ 28)('species')
	  , speciesConstructor = __webpack_require__(/*! ./$.species-constructor */ 55)
	  , RECORD     = __webpack_require__(/*! ./$.uid */ 30)('record')
	  , asap       = __webpack_require__(/*! ./$.microtask */ 56)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(/*! ./$.descriptors */ 25)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var isPromise = function(it){
	  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
	};
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    this[RECORD] = record;
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(/*! ./$.mix */ 61)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var react = {
	        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
	        fail: typeof onRejected == 'function'  ? onRejected  : false
	      };
	      var promise = react.P = new (speciesConstructor(this, P))(function(res, rej){
	        react.res = res;
	        react.rej = rej;
	      });
	      aFunction(react.res);
	      aFunction(react.rej);
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	__webpack_require__(/*! ./$.set-to-string-tag */ 33)(P, PROMISE);
	__webpack_require__(/*! ./$.set-species */ 62)(PROMISE);
	Wrapper = __webpack_require__(/*! ./$.core */ 20)[PROMISE];
	
	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new this(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(/*! ./$.iter-detect */ 63)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 42 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.ctx.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./$.a-function */ 43);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 43 */
/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.a-function.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 44 */
/*!****************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.classof.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./$.cof */ 40)
	  , TAG = __webpack_require__(/*! ./$.wks */ 28)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 45 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.is-object.js ***!
  \******************************************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 46 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.an-object.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./$.is-object */ 45);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 47 */
/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.strict-new.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 48 */
/*!***************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.for-of.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(/*! ./$.ctx */ 42)
	  , call        = __webpack_require__(/*! ./$.iter-call */ 49)
	  , isArrayIter = __webpack_require__(/*! ./$.is-array-iter */ 50)
	  , anObject    = __webpack_require__(/*! ./$.an-object */ 46)
	  , toLength    = __webpack_require__(/*! ./$.to-length */ 51)
	  , getIterFn   = __webpack_require__(/*! ./core.get-iterator-method */ 52);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 49 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.iter-call.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(/*! ./$.an-object */ 46);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 50 */
/*!**********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.is-array-iter.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(/*! ./$.iterators */ 31)
	  , ITERATOR   = __webpack_require__(/*! ./$.wks */ 28)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return (Iterators.Array || ArrayProto[ITERATOR]) === it;
	};

/***/ },
/* 51 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.to-length.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(/*! ./$.to-integer */ 14)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 52 */
/*!*******************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/core.get-iterator-method.js ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./$.classof */ 44)
	  , ITERATOR  = __webpack_require__(/*! ./$.wks */ 28)('iterator')
	  , Iterators = __webpack_require__(/*! ./$.iterators */ 31);
	module.exports = __webpack_require__(/*! ./$.core */ 20).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 53 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.set-proto.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(/*! ./$ */ 23).getDesc
	  , isObject = __webpack_require__(/*! ./$.is-object */ 45)
	  , anObject = __webpack_require__(/*! ./$.an-object */ 46);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(/*! ./$.ctx */ 42)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 54 */
/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.same-value.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 55 */
/*!****************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.species-constructor.js ***!
  \****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(/*! ./$.an-object */ 46)
	  , aFunction = __webpack_require__(/*! ./$.a-function */ 43)
	  , SPECIES   = __webpack_require__(/*! ./$.wks */ 28)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 56 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.microtask.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./$.global */ 19)
	  , macrotask = __webpack_require__(/*! ./$.task */ 57).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , isNode    = __webpack_require__(/*! ./$.cof */ 40)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    if(domain)domain.enter();
	    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 57 */
/*!*************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.task.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx                = __webpack_require__(/*! ./$.ctx */ 42)
	  , invoke             = __webpack_require__(/*! ./$.invoke */ 58)
	  , html               = __webpack_require__(/*! ./$.html */ 59)
	  , cel                = __webpack_require__(/*! ./$.dom-create */ 60)
	  , global             = __webpack_require__(/*! ./$.global */ 19)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(/*! ./$.cof */ 40)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 58 */
/*!***************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.invoke.js ***!
  \***************************************************************/
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 59 */
/*!*************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.html.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./$.global */ 19).document && document.documentElement;

/***/ },
/* 60 */
/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.dom-create.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./$.is-object */ 45)
	  , document = __webpack_require__(/*! ./$.global */ 19).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 61 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.mix.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(/*! ./$.redef */ 21);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 62 */
/*!********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.set-species.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(/*! ./$.core */ 20)
	  , $           = __webpack_require__(/*! ./$ */ 23)
	  , DESCRIPTORS = __webpack_require__(/*! ./$.descriptors */ 25)
	  , SPECIES     = __webpack_require__(/*! ./$.wks */ 28)('species');
	
	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 63 */
/*!********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.iter-detect.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(/*! ./$.wks */ 28)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 64 */
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ },
/* 65 */
/*!**************************************!*\
  !*** ./src/middleware/middleware.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.middleware = middleware;
	
	var _utilsUtilsJs = __webpack_require__(/*! ../utils/utils.js */ 3);
	
	var _actionsActionsJs = __webpack_require__(/*! ../actions/actions.js */ 2);
	
	var actions = _interopRequireWildcard(_actionsActionsJs);
	
	function changeBrowserURL(action) {
	
	    var option = action.option;
	
	    function setScroll(pos) {
	        setTimeout(function () {
	            document.body.scrollTop = document.documentElement.scrollTop = pos;
	        }, 0);
	    }
	    if (option === 'scroll') {
	        var path = action.router.path || '/';
	        var pos = _utilsUtilsJs.utils.scrollpos[path] || 0;
	        setScroll(pos);
	    } else if (option !== 'popEvent') {
	        setScroll(0);
	    }
	    switch (option) {
	        case 'silent':
	            history.replaceState(_utilsUtilsJs.utils.navindex, null, action.router.previous);
	            return;
	        case 'popEvent':
	            //pop event already poped the url
	            return;
	        default:
	            _utilsUtilsJs.utils.navindex++;
	            history.pushState(_utilsUtilsJs.utils.navindex, null, action.router.url);
	    }
	}
	
	//todo pass in option to track a particular element
	function storeScroll(path) {
	    path = path || '/';
	    _utilsUtilsJs.utils.scrollpos[path] = document.body.scrollTop;
	}
	
	function middleware(_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	
	    return function (next) {
	        return function (action) {
	            //the main action concerning the user
	            if (action.type === 'ROUTER_NAVIGATION') {
	                if (__CLIENT__) {
	
	                    storeScroll(getState().router.path);
	                    if (history.pushState) {
	                        //fallback to Refresh
	                        changeBrowserURL(action);
	                    } else if (action.option !== 'popEvent') {
	                        window.location.assign(action.router.url);
	                        return;
	                    }
	                }
	                return next(action);
	            }
	
	            //special thunk just for the router
	            if (action.type === 'RTR_ACTION') {
	                return action.work(dispatch, getState);
	            }
	            return next(action);
	        };
	    };
	}

/***/ },
/* 66 */
/*!*************************************!*\
  !*** ./src/middleware/universal.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	//import * as utils from '../utils/utils.js';
	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.universal = universal;
	
	var _utilsUtilsJs = __webpack_require__(/*! ../utils/utils.js */ 3);
	
	var _actionsActionsJs = __webpack_require__(/*! ../actions/actions.js */ 2);
	
	var actions = _interopRequireWildcard(_actionsActionsJs);
	
	function isPromise(val) {
	    return val && typeof val.then === 'function';
	}
	
	function keep(promise, dispatch, getState) {
	    var pending = getState().router.pending;
	    pending++;
	    dispatch(actions.universalSetPeniding(pending));
	
	    promise.then(function (data) {
	        pending = getState().router.pending;
	        pending--;
	        setTimeout(function () {
	            //dont be mad at this! its seems dirty but it just makes my resolution of the promise happens after the user.
	            dispatch(actions.universalSetPeniding(pending));
	        }, 0);
	    });
	}
	
	function universal(_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	
	    return function (next) {
	        return function (action) {
	            var promiseDone = getState().router.promiseDone;
	            if (promiseDone === true) {
	                //if the universal router - re-rendered, be done! (stop calls to apis etc...)
	                return;
	            }
	            if (isPromise(action)) {
	                keep(action, dispatch, getState);
	            } else {
	                for (var key in action) {
	                    if (isPromise(action[key])) {
	                        //needs has own property check
	                        keep(action[key], dispatch, getState);
	                    }
	                }
	            }
	            return next(action);
	        };
	    };
	}

/***/ },
/* 67 */
/*!**********************************!*\
  !*** ./src/enhancer/enhancer.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _extends = __webpack_require__(/*! babel-runtime/helpers/extends */ 68)['default'];
	
	var _toConsumableArray = __webpack_require__(/*! babel-runtime/helpers/to-consumable-array */ 74)['default'];
	
	var _Object$assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 69)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.applyMiddleware = applyMiddleware;
	
	var _reduxTinyRouterReduxTinyRouterJs = __webpack_require__(/*! ../redux-tiny-router/redux-tiny-router.js */ 8);
	
	var _middlewareMiddlewareJs = __webpack_require__(/*! ../middleware/middleware.js */ 65);
	
	var _middlewareUniversalJs = __webpack_require__(/*! ../middleware/universal.js */ 66);
	
	var _reducerReducerJs = __webpack_require__(/*! ../reducer/reducer.js */ 78);
	
	var _redux = __webpack_require__(/*! redux */ 79);
	
	function compose() {
	    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	        funcs[_key] = arguments[_key];
	    }
	
	    return funcs.reduceRight(function (composed, f) {
	        return f(composed);
	    });
	}
	
	function is_server() {
	    return !(typeof window != 'undefined' && window.document);
	}
	
	function applyMiddleware() {
	    for (var _len2 = arguments.length, middlewares = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        middlewares[_key2] = arguments[_key2];
	    }
	
	    return function (next) {
	        return function (reducer, initialState) {
	
	            if (is_server()) {
	                global.__CLIENT__ = false;
	                global.__UNIVERSAL__ = global.__UNIVERSAL__ || false;
	            } else {
	                window.__CLIENT__ = true;
	                window.__UNIVERSAL__ = window.__UNIVERSAL__ || false;
	            }
	
	            function reducerEnhancer(state, action) {
	                _Object$assign(reducer, _reducerReducerJs.router, reducer);
	                var res = (0, _redux.combineReducers)(reducer);
	                return res(state, action);
	            }
	
	            var store = next(reducerEnhancer, initialState);
	
	            middlewares.push(_middlewareMiddlewareJs.middleware);
	            if (__UNIVERSAL__ && !__CLIENT__) {
	                middlewares.unshift(_middlewareUniversalJs.universal);
	            }
	
	            var _dispatch = store.dispatch;
	            var chain = [];
	
	            var middlewareAPI = {
	                getState: store.getState,
	                dispatch: function dispatch(action) {
	                    return _dispatch(action);
	                }
	            };
	            chain = middlewares.map(function (middleware) {
	                return middleware(middlewareAPI);
	            });
	            _dispatch = compose.apply(undefined, _toConsumableArray(chain).concat([store.dispatch]));
	
	            var result = _extends({}, store, {
	                dispatch: _dispatch
	            });
	
	            if (__CLIENT__) {
	                (0, _reduxTinyRouterReduxTinyRouterJs.init)(result);
	            }
	
	            return result;
	        };
	    };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 68 */
/*!********************************************!*\
  !*** ./~/babel-runtime/helpers/extends.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 69)["default"];
	
	exports["default"] = _Object$assign || function (target) {
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
	
	exports.__esModule = true;

/***/ },
/* 69 */
/*!**************************************************!*\
  !*** ./~/babel-runtime/core-js/object/assign.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ 70), __esModule: true };

/***/ },
/* 70 */
/*!***************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/object/assign.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.assign */ 71);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 20).Object.assign;

/***/ },
/* 71 */
/*!************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.object.assign.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(/*! ./$.def */ 18);
	
	$def($def.S + $def.F, 'Object', {assign: __webpack_require__(/*! ./$.object-assign */ 72)});

/***/ },
/* 72 */
/*!**********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.object-assign.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(/*! ./$ */ 23)
	  , toObject = __webpack_require__(/*! ./$.to-object */ 73)
	  , IObject  = __webpack_require__(/*! ./$.iobject */ 39);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(/*! ./$.fails */ 26)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 73 */
/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.to-object.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(/*! ./$.defined */ 15);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 74 */
/*!********************************************************!*\
  !*** ./~/babel-runtime/helpers/to-consumable-array.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Array$from = __webpack_require__(/*! babel-runtime/core-js/array/from */ 75)["default"];
	
	exports["default"] = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	    return arr2;
	  } else {
	    return _Array$from(arr);
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 75 */
/*!***********************************************!*\
  !*** ./~/babel-runtime/core-js/array/from.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ 76), __esModule: true };

/***/ },
/* 76 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/array/from.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.string.iterator */ 12);
	__webpack_require__(/*! ../../modules/es6.array.from */ 77);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 20).Array.from;

/***/ },
/* 77 */
/*!*********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.array.from.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(/*! ./$.ctx */ 42)
	  , $def        = __webpack_require__(/*! ./$.def */ 18)
	  , toObject    = __webpack_require__(/*! ./$.to-object */ 73)
	  , call        = __webpack_require__(/*! ./$.iter-call */ 49)
	  , isArrayIter = __webpack_require__(/*! ./$.is-array-iter */ 50)
	  , toLength    = __webpack_require__(/*! ./$.to-length */ 51)
	  , getIterFn   = __webpack_require__(/*! ./core.get-iterator-method */ 52);
	$def($def.S + $def.F * !__webpack_require__(/*! ./$.iter-detect */ 63)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 78 */
/*!********************************!*\
  !*** ./src/reducer/reducer.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(/*! babel-runtime/helpers/extends */ 68)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function router() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    switch (action.type) {
	
	        case 'PREVENT_NAVIGATION':
	            return _extends({}, state, {
	                preventNavigation: true,
	                preventNavigationMessage: action.message
	            });
	
	        case 'PREVENTED_NAVIGATION_ATTEMPTED':
	            return _extends({}, state, {
	                attemptedOnPrevent: action.url
	            });
	
	        case 'ALLOW_NAVIGATION':
	
	            delete state.attemptedOnPrevent;
	            return _extends({}, state, {
	                preventNavigation: false
	
	            });
	
	        case 'ROUTER_NAVIGATION':
	
	            var routerObj = action.router;
	            state.previous = state.url;
	
	            return _extends({}, state, routerObj);
	
	        case 'UNIVERSAL_SET_PENDING':
	            return _extends({}, state, {
	                pending: action.val
	            });
	
	        case 'UNIVERSAL_PROMISE_DONE':
	            return _extends({}, state, {
	                promiseDone: true
	            });
	
	        case 'UNIVERSAL_SYNC_ACTIONS_DONE':
	            return _extends({}, state, {
	                syncActionsDone: true
	            });
	
	        case 'UNIVERSAL_SYNC_ACTIONS_PENDING':
	            return _extends({}, state, {
	                syncActionsDone: false
	            });
	
	        default:
	            return _extends({}, state);
	    }
	}
	
	exports['default'] = {
	    router: { router: router }
	};
	module.exports = exports['default'];

/***/ },
/* 79 */
/*!**************************************************************************************!*\
  !*** external {"root":"redux","commonjs2":"redux","commonjs":"redux","amd":"redux"} ***!
  \**************************************************************************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_79__;

/***/ },
/* 80 */
/*!*********************************!*\
  !*** ./src/components/link.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 81)['default'];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 86)['default'];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 92)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 95)['default'];
	
	var _objectWithoutProperties = __webpack_require__(/*! babel-runtime/helpers/object-without-properties */ 96)['default'];
	
	var _extends = __webpack_require__(/*! babel-runtime/helpers/extends */ 68)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 4)['default'];
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	     value: true
	});
	
	var _react = __webpack_require__(/*! react */ 64);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _queryString = __webpack_require__(/*! query-string */ 5);
	
	var _queryString2 = _interopRequireDefault(_queryString);
	
	var _actionsActionsJs = __webpack_require__(/*! ../actions/actions.js */ 2);
	
	var actions = _interopRequireWildcard(_actionsActionsJs);
	
	var Link = (function (_React$Component) {
	     _inherits(Link, _React$Component);
	
	     function Link() {
	          _classCallCheck(this, Link);
	
	          _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
	     }
	
	     _createClass(Link, [{
	          key: 'click',
	          value: function click(e) {
	               e.preventDefault();
	               this.context.store.dispatch(actions.navigateTo(this.props.path, this.props.search, this.props.option));
	          }
	     }, {
	          key: 'render',
	          value: function render() {
	               var _props = this.props;
	               var path = _props.path;
	               var search = _props.search;
	               var option = _props.option;
	
	               var rest = _objectWithoutProperties(_props, ['path', 'search', 'option']);
	
	               var href = '' + path;
	               if (search) href = href + ('?' + _queryString2['default'].stringify(search));
	               return _react2['default'].createElement(
	                    'a',
	                    _extends({ href: href }, rest, { onClick: this.click.bind(this) }),
	                    this.props.children
	               );
	          }
	     }], [{
	          key: 'contextTypes',
	          value: { store: _react2['default'].PropTypes.any },
	          enumerable: true
	     }]);
	
	     return Link;
	})(_react2['default'].Component);
	
	exports.Link = Link;

/***/ },
/* 81 */
/*!****************************************!*\
  !*** ./~/babel-runtime/helpers/get.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ 82)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 82 */
/*!***********************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ 83), __esModule: true };

/***/ },
/* 83 */
/*!************************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ../../modules/$ */ 23);
	__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ 84);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 84 */
/*!*********************************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(/*! ./$.to-iobject */ 38);
	
	__webpack_require__(/*! ./$.object-sap */ 85)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 85 */
/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.object-sap.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $def  = __webpack_require__(/*! ./$.def */ 18)
	  , core  = __webpack_require__(/*! ./$.core */ 20)
	  , fails = __webpack_require__(/*! ./$.fails */ 26);
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(/*! ./$.def */ 18)
	    , fn   = (core.Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 86 */
/*!*********************************************!*\
  !*** ./~/babel-runtime/helpers/inherits.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(/*! babel-runtime/core-js/object/create */ 87)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/set-prototype-of */ 89)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 87 */
/*!**************************************************!*\
  !*** ./~/babel-runtime/core-js/object/create.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ 88), __esModule: true };

/***/ },
/* 88 */
/*!***************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/object/create.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ../../modules/$ */ 23);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 89 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/set-prototype-of.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ 90), __esModule: true };

/***/ },
/* 90 */
/*!*************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/object/set-prototype-of.js ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ 91);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 20).Object.setPrototypeOf;

/***/ },
/* 91 */
/*!**********************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \**********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(/*! ./$.def */ 18);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(/*! ./$.set-proto */ 53).set});

/***/ },
/* 92 */
/*!*************************************************!*\
  !*** ./~/babel-runtime/helpers/create-class.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ 93)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 93 */
/*!***********************************************************!*\
  !*** ./~/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 94), __esModule: true };

/***/ },
/* 94 */
/*!************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/object/define-property.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ../../modules/$ */ 23);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 95 */
/*!*****************************************************!*\
  !*** ./~/babel-runtime/helpers/class-call-check.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 96 */
/*!**************************************************************!*\
  !*** ./~/babel-runtime/helpers/object-without-properties.js ***!
  \**************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 97 */
/*!**********************************!*\
  !*** ./src/components/route.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 81)['default'];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 86)['default'];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 92)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 95)['default'];
	
	var _objectWithoutProperties = __webpack_require__(/*! babel-runtime/helpers/object-without-properties */ 96)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 4)['default'];
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 64);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _queryString = __webpack_require__(/*! query-string */ 5);
	
	var _queryString2 = _interopRequireDefault(_queryString);
	
	var _actionsActionsJs = __webpack_require__(/*! ../actions/actions.js */ 2);
	
	var actions = _interopRequireWildcard(_actionsActionsJs);
	
	var _utilsUtilsJs = __webpack_require__(/*! ../utils/utils.js */ 3);
	
	var Null = (function (_React$Component) {
	    _inherits(Null, _React$Component);
	
	    function Null() {
	        _classCallCheck(this, Null);
	
	        _get(Object.getPrototypeOf(Null.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Null, [{
	        key: 'render',
	        value: function render() {
	            return null;
	        }
	    }]);
	
	    return Null;
	})(_react2['default'].Component);
	
	var Route = (function (_React$Component2) {
	    _inherits(Route, _React$Component2);
	
	    function Route() {
	        _classCallCheck(this, Route);
	
	        _get(Object.getPrototypeOf(Route.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Route, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var path = _props.path;
	            var url = _props.url;
	            var component = _props.component;
	
	            var rest = _objectWithoutProperties(_props, ['path', 'url', 'component']);
	
	            url = url ? url : this.context.store.getState().router.url;
	            var Response = _utilsUtilsJs.utils.check(this.props.path, url) ? component : Null;
	            return _react2['default'].createElement(Response, rest);
	        }
	    }], [{
	        key: 'contextTypes',
	        value: { store: _react2['default'].PropTypes.any
	        },
	        enumerable: true
	    }]);
	
	    return Route;
	})(_react2['default'].Component);
	
	exports.Route = Route;

/***/ },
/* 98 */
/*!***********************************!*\
  !*** ./src/components/router.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 81)['default'];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 86)['default'];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 92)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 95)['default'];
	
	var _objectWithoutProperties = __webpack_require__(/*! babel-runtime/helpers/object-without-properties */ 96)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 4)['default'];
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 64);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _queryString = __webpack_require__(/*! query-string */ 5);
	
	var _queryString2 = _interopRequireDefault(_queryString);
	
	var _actionsActionsJs = __webpack_require__(/*! ../actions/actions.js */ 2);
	
	var actions = _interopRequireWildcard(_actionsActionsJs);
	
	var _utilsUtilsJs = __webpack_require__(/*! ../utils/utils.js */ 3);
	
	var Null = (function (_React$Component) {
	    _inherits(Null, _React$Component);
	
	    function Null() {
	        _classCallCheck(this, Null);
	
	        _get(Object.getPrototypeOf(Null.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Null, [{
	        key: 'render',
	        value: function render() {
	            return null;
	        }
	    }]);
	
	    return Null;
	})(_react2['default'].Component);
	
	var Router = (function (_React$Component2) {
	    _inherits(Router, _React$Component2);
	
	    function Router() {
	        _classCallCheck(this, Router);
	
	        _get(Object.getPrototypeOf(Router.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Router, [{
	        key: 'render',
	        value: function render() {
	            var routerUrl = this.context.store.getState().router.url;
	            var validComponents = [];
	            var _props = this.props;
	            var NotFound = _props.NotFound;
	
	            var rest = _objectWithoutProperties(_props, ['NotFound']);
	
	            function MapAndPush(children) {
	                var done = false;
	                _react2['default'].Children.forEach(children, function (element, index) {
	                    if (done) return;
	                    var _element$props = element.props;
	                    var path = _element$props.path;
	                    var url = _element$props.url;
	                    var component = _element$props.component;
	
	                    var rest = _objectWithoutProperties(_element$props, ['path', 'url', 'component']);
	
	                    url = url || routerUrl;
	                    if (_utilsUtilsJs.utils.check(path, url)) {
	                        done = true;
	                        validComponents.push({
	                            component: component,
	                            rest: rest
	                        });
	                    }
	                });
	            }
	            MapAndPush(this.props.children);
	            var Root = NotFound;
	            if (validComponents.length > 0) {
	                Root = validComponents[0].component;
	                Root.props = validComponents[0].rest;
	            }
	            return _react2['default'].createElement(Root, Root.props);
	        }
	    }], [{
	        key: 'contextTypes',
	        value: { store: _react2['default'].PropTypes.any },
	        enumerable: true
	    }]);
	
	    return Router;
	})(_react2['default'].Component);
	
	exports.Router = Router;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=reduxTinyRouter.js.map