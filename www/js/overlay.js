/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/promise.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
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
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/twitch-js/lib/api.js":
/*!*******************************************!*\
  !*** ./node_modules/twitch-js/lib/api.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _isFunction2 = __webpack_require__(/*! lodash/isFunction */ "./node_modules/twitch-js/node_modules/lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _get2 = __webpack_require__(/*! lodash/get */ "./node_modules/twitch-js/node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _isURL = __webpack_require__(/*! validator/lib/isURL */ "./node_modules/validator/lib/isURL.js");

var _isURL2 = _interopRequireDefault(_isURL);

var _fetchHelper = __webpack_require__(/*! ./utils/fetch-helper */ "./node_modules/twitch-js/lib/utils/fetch-helper.js");

var _fetchHelper2 = _interopRequireDefault(_fetchHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cb = arguments[1];
    var urlFromOptions, endpoint, clientId, tokenWithOauth, body;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Set the url to options.uri or options.url.
            urlFromOptions = options.url || options.uri;
            endpoint = (0, _isURL2.default)(urlFromOptions) ? urlFromOptions : 'https://api.twitch.tv/kraken/' + urlFromOptions.replace(/^\//, '');
            clientId = (0, _get3.default)(options, 'headers.Client-ID');
            tokenWithOauth = (0, _get3.default)(options, 'headers.Authorization');
            _context.next = 6;
            return (0, _fetchHelper2.default)({
              endpoint: endpoint,
              clientId: clientId,
              token: tokenWithOauth ? tokenWithOauth.replace(/^Oauth /i, '') : undefined
            });

          case 6:
            body = _context.sent;

            if (!(0, _isFunction3.default)(cb)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt('return', cb(false, null, body));

          case 9:
            return _context.abrupt('return', body);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function api() {
    return _ref.apply(this, arguments);
  };
}();

module.exports = api;
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/twitch-js/lib/client.js":
/*!**********************************************!*\
  !*** ./node_modules/twitch-js/lib/client.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var api = __webpack_require__(/*! ./api */ "./node_modules/twitch-js/lib/api.js");
var commands = __webpack_require__(/*! ./commands */ "./node_modules/twitch-js/lib/commands.js");
var eventEmitter = __webpack_require__(/*! ./events */ "./node_modules/twitch-js/lib/events.js").EventEmitter;
var logger = __webpack_require__(/*! ./logger */ "./node_modules/twitch-js/lib/logger.js");
var parse = __webpack_require__(/*! ./parser */ "./node_modules/twitch-js/lib/parser.js");
var timer = __webpack_require__(/*! ./timer */ "./node_modules/twitch-js/lib/timer.js");
var ws = global.WebSocket || global.MozWebSocket || __webpack_require__(/*! ws */ 2);
var _ = __webpack_require__(/*! ./utils */ "./node_modules/twitch-js/lib/utils.js");

// Client instance..
var client = function client(opts) {
  if (this instanceof client === false) {
    return new client(opts);
  }
  this.setMaxListeners(0);

  this.opts = _.get(opts, {});
  this.opts.channels = this.opts.channels || [];
  this.opts.connection = this.opts.connection || {};
  this.opts.identity = this.opts.identity || {};
  this.opts.options = this.opts.options || {};

  this.clientId = _.get(this.opts.options.clientId, null);

  this.maxReconnectAttempts = _.get(this.opts.connection.maxReconnectAttempts, Infinity);
  this.maxReconnectInterval = _.get(this.opts.connection.maxReconnectInterval, 30000);
  this.reconnect = _.get(this.opts.connection.reconnect, false);
  this.reconnectDecay = _.get(this.opts.connection.reconnectDecay, 1.5);
  this.reconnectInterval = _.get(this.opts.connection.reconnectInterval, 1000);

  this.reconnecting = false;
  this.reconnections = 0;
  this.reconnectTimer = this.reconnectInterval;

  this.secure = _.get(this.opts.connection.secure, false);

  // Raw data and object for emote-sets..
  this.emotes = '';
  this.emotesets = {};

  this.channels = [];
  this.currentLatency = 0;
  this.globaluserstate = {};
  this.lastJoined = '';
  this.latency = new Date();
  this.moderators = {};
  this.pingLoop = null;
  this.pingTimeout = null;
  this.reason = '';
  this.username = '';
  this.userstate = {};
  this.wasCloseCalled = false;
  this.ws = null;

  // Create the logger..
  var level = 'error';
  if (this.opts.options.debug) {
    level = 'info';
  }
  this.log = this.opts.logger || logger;

  try {
    logger.setLevel(level);
  } catch (e) {}
  // swallow error


  // Format the channel names..
  this.opts.channels.forEach(function (part, index, theArray) {
    theArray[index] = _.channel(part);
  });

  eventEmitter.call(this);
};

_.inherits(client, eventEmitter);

client.prototype.api = api;

// Put all commands in prototype..
Object.keys(commands).forEach(function (methodName) {
  client.prototype[methodName] = commands[methodName];
});

// Handle parsed chat server message..
client.prototype.handleMessage = function handleMessage(message) {
  var _this = this;

  if (!_.isNull(message)) {
    var channel = _.channel(_.get(message.params[0], null));
    var msg = _.get(message.params[1], null);
    var msgid = _.get(message.tags['msg-id'], null);

    // Parse badges and emotes..
    message.tags = parse.badges(parse.emotes(message.tags));

    // Transform IRCv3 tags..
    if (message.tags) {
      Object.keys(message.tags).forEach(function (key) {
        if (key !== 'emote-sets' && key !== 'ban-duration' && key !== 'bits') {
          if (_.isBoolean(message.tags[key])) {
            message.tags[key] = null;
          } else if (message.tags[key] === '1') {
            message.tags[key] = true;
          } else if (message.tags[key] === '0') {
            message.tags[key] = false;
          }
        }
      });
    }

    // Messages with no prefix..
    if (_.isNull(message.prefix)) {
      switch (message.command) {
        // Received PING from server..
        case 'PING':
          this.emit('ping');
          if (!_.isNull(this.ws) && this.ws.readyState !== 2 && this.ws.readyState !== 3) {
            this.ws.send('PONG');
          }
          break;

        // Received PONG from server, return current latency..
        case 'PONG':
          {
            var currDate = new Date();
            this.currentLatency = currDate.getTime() - this.latency.getTime();
            this.emits(['pong', '_promisePing'], [[this.currentLatency], [this.currentLatency]]);

            clearTimeout(this.pingTimeout);
            break;
          }

        default:
          this.log.warn('Could not parse message with no prefix:\n' + JSON.stringify(message, null, 4));
          break;
      }
    } else if (message.prefix === 'tmi.twitch.tv') {
      // Messages with "tmi.twitch.tv" as a prefix..
      switch (message.command) {
        case '002':
        case '003':
        case '004':
        case '375':
        case '376':
        case 'CAP':
          break;

        // Retrieve username from server..
        case '001':
          this.username = message.params[0];
          break;

        // Connected to server..
        case '372':
          {
            var _ret = function () {
              _this.log.info('Connected to server.');
              _this.userstate['#tmijs'] = {};
              _this.emits(['connected', '_promiseConnect'], [[_this.server, _this.port], [null]]);
              _this.reconnections = 0;
              _this.reconnectTimer = _this.reconnectInterval;

              // Set an internal ping timeout check interval..
              _this.pingLoop = setInterval(function () {
                // Make sure the connection is opened before sending the message..
                if (!_.isNull(_this.ws) && _this.ws.readyState !== 2 && _this.ws.readyState !== 3) {
                  _this.ws.send('PING');
                }
                _this.latency = new Date();
                _this.pingTimeout = setTimeout(function () {
                  if (!_.isNull(_this.ws)) {
                    _this.wasCloseCalled = false;
                    _this.log.error('Ping timeout.');
                    _this.ws.close();

                    clearInterval(_this.pingLoop);
                    clearTimeout(_this.pingTimeout);
                  }
                }, _.get(_this.opts.connection.timeout, 9999));
              }, 60000);

              // Join all the channels from configuration with a 2 seconds interval..
              var joinQueue = new timer.queue(2000);
              var joinChannels = _.union(_this.opts.channels, _this.channels);
              _this.channels = [];

              var _loop = function _loop(i) {
                var self = _this;
                joinQueue.add(function (chan) {
                  if (!_.isNull(self.ws) && self.ws.readyState !== 2 && self.ws.readyState !== 3) {
                    self.ws.send('JOIN ' + _.channel(joinChannels[chan]));
                  }
                }.bind(_this, i));
              };

              for (var i = 0; i < joinChannels.length; i++) {
                _loop(i);
              }

              joinQueue.run();
              return 'break';
            }();

            if (_ret === 'break') break;
          }

        // https://github.com/justintv/Twitch-API/blob/master/chat/capabilities.md#notice
        case 'NOTICE':
          switch (msgid) {
            // This room is now in subscribers-only mode.
            case 'subs_on':
              this.log.info('[' + channel + '] This room is now in subscribers-only mode.');
              this.emits(['subscriber', 'subscribers', '_promiseSubscribers'], [[channel, true], [channel, true], [null]]);
              break;

            // This room is no longer in subscribers-only mode.
            case 'subs_off':
              this.log.info('[' + channel + '] This room is no longer in subscribers-only mode.');
              this.emits(['subscriber', 'subscribers', '_promiseSubscribersoff'], [[channel, false], [channel, false], [null]]);
              break;

            // This room is now in emote-only mode.
            case 'emote_only_on':
              this.log.info('[' + channel + '] This room is now in emote-only mode.');
              this.emits(['emoteonly', '_promiseEmoteonly'], [[channel, true], [null]]);
              break;

            // This room is no longer in emote-only mode.
            case 'emote_only_off':
              this.log.info('[' + channel + '] This room is no longer in emote-only mode.');
              this.emits(['emoteonly', '_promiseEmoteonlyoff'], [[channel, false], [null]]);
              break;

            // Do not handle slow_on/off here, listen to the ROOMSTATE notice
            // instead as it returns the delay.
            case 'slow_on':
            case 'slow_off':
              break;

            // Do not handle followers_on/off here, listen to the ROOMSTATE
            // notice instead as it returns the delay.
            case 'followers_on_zero':
            case 'followers_on':
            case 'followers_off':
              break;

            // This room is now in r9k mode.
            case 'r9k_on':
              this.log.info('[' + channel + '] This room is now in r9k mode.');
              this.emits(['r9kmode', 'r9kbeta', '_promiseR9kbeta'], [[channel, true], [channel, true], [null]]);
              break;

            // This room is no longer in r9k mode.
            case 'r9k_off':
              this.log.info('[' + channel + '] This room is no longer in r9k mode.');
              this.emits(['r9kmode', 'r9kbeta', '_promiseR9kbetaoff'], [[channel, false], [channel, false], [null]]);
              break;

            // The moderators of this room are [...]
            case 'room_mods':
              {
                var splitted = msg.split(':');
                var mods = splitted[1].replace(/,/g, '').split(':').toString().toLowerCase().split(' ');

                for (var i = mods.length - 1; i >= 0; i--) {
                  if (mods[i] === '') {
                    mods.splice(i, 1);
                  }
                }

                this.emits(['_promiseMods', 'mods'], [[null, mods], [channel, mods]]);
                break;
              }

            // There are no moderators for this room.
            case 'no_mods':
              this.emit('_promiseMods', null, []);
              break;

            // Channel is suspended..
            case 'msg_channel_suspended':
              this.emits(['notice', '_promiseJoin'], [[channel, msgid, msg], [msgid]]);
              break;

            // Ban command failed..
            case 'already_banned':
            case 'bad_ban_admin':
            case 'bad_ban_broadcaster':
            case 'bad_ban_global_mod':
            case 'bad_ban_self':
            case 'bad_ban_staff':
            case 'usage_ban':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseBan'], [[channel, msgid, msg], [msgid]]);
              break;

            // Ban command success..
            case 'ban_success':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseBan'], [[channel, msgid, msg], [null]]);
              break;

            // Clear command failed..
            case 'usage_clear':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseClear'], [[channel, msgid, msg], [msgid]]);
              break;

            // Mods command failed..
            case 'usage_mods':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseMods'], [[channel, msgid, msg], [msgid, []]]);
              break;

            // Mod command success..
            case 'mod_success':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseMod'], [[channel, msgid, msg], [null]]);
              break;

            // Mod command failed..
            case 'usage_mod':
            case 'bad_mod_banned':
            case 'bad_mod_mod':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseMod'], [[channel, msgid, msg], [msgid]]);
              break;

            // Unmod command success..
            case 'unmod_success':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseUnmod'], [[channel, msgid, msg], [null]]);
              break;

            // Unmod command failed..
            case 'usage_unmod':
            case 'bad_unmod_mod':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseUnmod'], [[channel, msgid, msg], [msgid]]);
              break;

            // Color command success..
            case 'color_changed':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseColor'], [[channel, msgid, msg], [null]]);
              break;

            // Color command failed..
            case 'usage_color':
            case 'turbo_only_color':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseColor'], [[channel, msgid, msg], [msgid]]);
              break;

            // Commercial command success..
            case 'commercial_success':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseCommercial'], [[channel, msgid, msg], [null]]);
              break;

            // Commercial command failed..
            case 'usage_commercial':
            case 'bad_commercial_error':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseCommercial'], [[channel, msgid, msg], [msgid]]);
              break;

            // Host command success..
            case 'hosts_remaining':
              {
                this.log.info('[' + channel + '] ' + msg);
                var remainingHost = !Number.isNaN(msg.charAt(0)) ? msg.charAt(0) : 0;
                this.emits(['notice', '_promiseHost'], [[channel, msgid, msg], [null, ~~remainingHost]]);
                break;
              }

            // Host command failed..
            case 'bad_host_hosting':
            case 'bad_host_rate_exceeded':
            case 'bad_host_error':
            case 'usage_host':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseHost'], [[channel, msgid, msg], [msgid, null]]);
              break;

            // r9kbeta command failed..
            case 'already_r9k_on':
            case 'usage_r9k_on':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseR9kbeta'], [[channel, msgid, msg], [msgid]]);
              break;

            // r9kbetaoff command failed..
            case 'already_r9k_off':
            case 'usage_r9k_off':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseR9kbetaoff'], [[channel, msgid, msg], [msgid]]);
              break;

            // Timeout command success..
            case 'timeout_success':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseTimeout'], [[channel, msgid, msg], [null]]);
              break;

            // Subscribersoff command failed..
            case 'already_subs_off':
            case 'usage_subs_off':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseSubscribersoff'], [[channel, msgid, msg], [msgid]]);
              break;

            // Subscribers command failed..
            case 'already_subs_on':
            case 'usage_subs_on':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseSubscribers'], [[channel, msgid, msg], [msgid]]);
              break;

            // Emoteonlyoff command failed..
            case 'already_emote_only_off':
            case 'usage_emote_only_off':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseEmoteonlyoff'], [[channel, msgid, msg], [msgid]]);
              break;

            // Emoteonly command failed..
            case 'already_emote_only_on':
            case 'usage_emote_only_on':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseEmoteonly'], [[channel, msgid, msg], [msgid]]);
              break;

            // Slow command failed..
            case 'usage_slow_on':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseSlow'], [[channel, msgid, msg], [msgid]]);
              break;

            // Slowoff command failed..
            case 'usage_slow_off':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseSlowoff'], [[channel, msgid, msg], [msgid]]);
              break;

            // Timeout command failed..
            case 'usage_timeout':
            case 'bad_timeout_admin':
            case 'bad_timeout_broadcaster':
            case 'bad_timeout_duration':
            case 'bad_timeout_global_mod':
            case 'bad_timeout_self':
            case 'bad_timeout_staff':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseTimeout'], [[channel, msgid, msg], [msgid]]);
              break;

            // Unban command success..
            // Unban can also be used to cancel an active timeout.
            case 'untimeout_success':
            case 'unban_success':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseUnban'], [[channel, msgid, msg], [null]]);
              break;

            // Unban command failed..
            case 'usage_unban':
            case 'bad_unban_no_ban':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseUnban'], [[channel, msgid, msg], [msgid]]);
              break;

            // Unhost command failed..
            case 'usage_unhost':
            case 'not_hosting':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseUnhost'], [[channel, msgid, msg], [msgid]]);
              break;

            // Whisper command failed..
            case 'whisper_invalid_login':
            case 'whisper_invalid_self':
            case 'whisper_limit_per_min':
            case 'whisper_limit_per_sec':
            case 'whisper_restricted_recipient':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseWhisper'], [[channel, msgid, msg], [msgid]]);
              break;

            // Permission error..
            case 'no_permission':
            case 'msg_banned':
              this.log.info('[' + channel + '] ' + msg);
              this.emits(['notice', '_promiseBan', '_promiseClear', '_promiseUnban', '_promiseTimeout', '_promiseMods', '_promiseMod', '_promiseUnmod', '_promiseCommercial', '_promiseHost', '_promiseUnhost', '_promiseR9kbeta', '_promiseR9kbetaoff', '_promiseSlow', '_promiseSlowoff', '_promiseFollowers', '_promiseFollowersoff', '_promiseSubscribers', '_promiseSubscribersoff', '_promiseEmoteonly', '_promiseEmoteonlyoff'], [[channel, msgid, msg], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid], [msgid]]);
              break;

            // Unrecognized command..
            case 'unrecognized_cmd':
              this.log.info('[' + channel + '] ' + msg);
              this.emit('notice', channel, msgid, msg);

              if (msg.split(' ').splice(-1)[0] === '/w') {
                this.log.warn('You must be connected to a group server to send or receive whispers.');
              }
              break;

            // Send the following msg-ids to the notice event listener..
            case 'cmds_available':
            case 'host_target_went_offline':
            case 'msg_censored_broadcaster':
            case 'msg_duplicate':
            case 'msg_emoteonly':
            case 'msg_followersonly':
            case 'msg_verified_email':
            case 'msg_ratelimit':
            case 'msg_subsonly':
            case 'msg_timedout':
            case 'no_help':
            case 'raid_notice_restricted_chat':
            case 'unraid_error_no_active_raid':
            case 'usage_disconnect':
            case 'usage_help':
            case 'usage_me':
              this.log.info('[' + channel + '] ' + msg);
              this.emit('notice', channel, msgid, msg);
              break;

            // Ignore this because we are already listening to HOSTTARGET..
            case 'host_on':
            case 'host_off':
              //
              break;

            case 'msg_rejected':
              this.log.info('[' + channel + '] ' + msg);
              this.emit('automodinreview', { channel: channel });
              break;
            case 'msg_rejected_mandatory':
              this.log.info('[' + channel + '] ' + msg);
              this.emit('automodrejected', { channel: channel });
              break;

            default:
              if (msg.includes('Login unsuccessful') || msg.includes('Login authentication failed')) {
                this.wasCloseCalled = false;
                this.reconnect = false;
                this.reason = msg;
                this.log.error(this.reason);
                this.ws.close();
              } else if (msg.includes('Error logging in') || msg.includes('Improperly formatted auth')) {
                this.wasCloseCalled = false;
                this.reconnect = false;
                this.reason = msg;
                this.log.error(this.reason);
                this.ws.close();
              } else if (msg.includes('Invalid NICK')) {
                this.wasCloseCalled = false;
                this.reconnect = false;
                this.reason = 'Invalid NICK.';
                this.log.error(this.reason);
                this.ws.close();
              } else {
                this.log.warn('Could not parse NOTICE from tmi.twitch.tv:\n' + JSON.stringify(message, null, 4));
              }
              break;
          }
          break;

        // Handle subanniversary / resub..
        case 'USERNOTICE':
          {
            if (msgid === 'resub') {
              var username = message.tags['display-name'] || message.tags.login;
              var plan = message.tags['msg-param-sub-plan'];
              var planName = _.replaceAll(_.get(message.tags['msg-param-sub-plan-name'], null), {
                '\\\\s': ' ',
                '\\\\:': ';',
                '\\\\\\\\': '\\',
                '\\r': '\r',
                '\\n': '\n'
              });
              var months = _.get(~~message.tags['msg-param-months'], null);
              var prime = plan.includes('Prime');
              var userstate = message.tags;

              if (userstate) {
                userstate['message-type'] = 'resub';
              }

              this.emits(['resub', 'subanniversary'], [[channel, username, months, msg, userstate, { prime: prime, plan: plan, planName: planName }], [channel, username, months, msg, userstate, { prime: prime, plan: plan, planName: planName }]]);
            } else if (msgid === 'sub') {
              // Handle sub
              var _username = message.tags['display-name'] || message.tags.login;
              var _plan = message.tags['msg-param-sub-plan'];
              var _planName = _.replaceAll(_.get(message.tags['msg-param-sub-plan-name'], null), {
                '\\\\s': ' ',
                '\\\\:': ';',
                '\\\\\\\\': '\\',
                '\\r': '\r',
                '\\n': '\n'
              });
              var _prime = _plan.includes('Prime');
              var _userstate = message.tags;

              if (_userstate) {
                _userstate['message-type'] = 'sub';
              }

              this.emit('subscription', channel, _username, { prime: _prime, plan: _plan, planName: _planName }, msg, _userstate);
            } else if (msgid === 'subgift') {
              var _username2 = message.tags['display-name'] || message.tags.login;
              var recipient = message.tags['msg-param-recipient-display-name'] || message.tags['msg-param-recipient-user-name'];
              var _plan2 = message.tags['msg-param-sub-plan'];
              var _planName2 = _.replaceAll(_.get(message.tags['msg-param-sub-plan-name'], null), {
                '\\\\s': ' ',
                '\\\\:': ';',
                '\\\\\\\\': '\\',
                '\\r': '\r',
                '\\n': '\n'
              });
              var _userstate2 = message.tags;

              if (_userstate2) {
                _userstate2['message-type'] = 'subgift';
              }

              this.emit('subgift', channel, _username2, recipient, { plan: _plan2, planName: _planName2 }, _userstate2);
            } else if (msgid === 'raid') {
              var raider = message.tags['msg-param-displayName'] || message.tags['msg-param-login'];
              var viewers = parseInt(message.tags['msg-param-viewerCount'], 10);
              var _userstate3 = message.tags;

              if (_userstate3) {
                _userstate3['message-type'] = 'raid';
              }

              this.emit('raid', { channel: channel, raider: raider, viewers: viewers, userstate: _userstate3 });
            } else if (msgid === 'ritual') {
              var _username3 = message.tags['display-name'] || message.tags.login;
              var type = message.tags['msg-param-ritual-name'];
              var _userstate4 = message.tags;

              if (_userstate4) {
                _userstate4['message-type'] = 'ritual';
              }

              this.emit('ritual', { channel: channel, username: _username3, type: type, userstate: _userstate4 });
            }
            break;
          }

        // Channel is now hosting another channel or exited host mode..
        case 'HOSTTARGET':
          // Stopped hosting..
          if (msg.split(' ')[0] === '-') {
            this.log.info('[' + channel + '] Exited host mode.');
            this.emits(['unhost', '_promiseUnhost'], [[channel, ~~msg.split(' ')[1] || 0], [null]]);
          } else {
            // Now hosting..
            var _viewers = ~~msg.split(' ')[1] || 0;

            this.log.info('[' + channel + '] Now hosting ' + msg.split(' ')[0] + ' for ' + _viewers + ' viewer(s).');
            this.emit('hosting', channel, msg.split(' ')[0], _viewers);
          }
          break;

        // Someone has been timed out or chat has been cleared by a moderator..
        case 'CLEARCHAT':
          // User has been banned / timed out by a moderator..
          if (message.params.length > 1) {
            // Duration returns null if it's a ban, otherwise it's a timeout..
            var duration = _.get(message.tags['ban-duration'], null);

            // Escaping values: http://ircv3.net/specs/core/message-tags-3.2.html#escaping-values
            var reason = _.replaceAll(_.get(message.tags['ban-reason'], null), {
              '\\\\s': ' ',
              '\\\\:': ';',
              '\\\\\\\\': '\\',
              '\\r': '\r',
              '\\n': '\n'
            });

            if (_.isNull(duration)) {
              this.log.info('[' + channel + '] ' + msg + ' has been banned. Reason: ' + (reason || 'n/a'));
              this.emit('ban', channel, msg, reason);
            } else {
              this.log.info('[' + channel + '] ' + msg + ' has been timed out for ' + duration + ' seconds. Reason: ' + (reason || 'n/a'));
              this.emit('timeout', channel, msg, reason, ~~duration);
            }
          } else {
            // Chat was cleared by a moderator..
            this.log.info('[' + channel + '] Chat was cleared by a moderator.');
            this.emits(['clearchat', '_promiseClear'], [[channel], [null]]);
          }
          break;

        // Received a reconnection request from the server..
        case 'RECONNECT':
          this.log.info('Received RECONNECT request from Twitch..');
          this.log.info('Disconnecting and reconnecting in ' + Math.round(this.reconnectTimer / 1000) + ' seconds..');
          this.disconnect();
          setTimeout(function () {
            _this.connect();
          }, this.reconnectTimer);
          break;

        // Wrong cluster..
        case 'SERVERCHANGE':
          //
          break;

        // Received when joining a channel and every time you send a PRIVMSG to a channel.
        case 'USERSTATE':
          message.tags.username = this.username;

          // Add the client to the moderators of this room..
          if (message.tags['user-type'] === 'mod') {
            if (!this.moderators[this.lastJoined]) {
              this.moderators[this.lastJoined] = [];
            }
            if (this.moderators[this.lastJoined].indexOf(this.username) < 0) {
              this.moderators[this.lastJoined].push(this.username);
            }
          }

          // Logged in and username doesn't start with justinfan..
          if (!_.isJustinfan(this.getUsername()) && !this.userstate[channel]) {
            this.userstate[channel] = message.tags;
            this.lastJoined = channel;
            this.channels.push(channel);
            this.log.info('Joined ' + channel);
            this.emit('join', channel, _.username(this.getUsername()), true);
          }

          // Emote-sets has changed, update it..
          if (message.tags['emote-sets'] !== this.emotes) {
            this._updateEmoteset(message.tags['emote-sets']);
          }

          this.userstate[channel] = message.tags;
          break;

        // Describe non-channel-specific state informations..
        case 'GLOBALUSERSTATE':
          this.globaluserstate = message.tags;

          // Received emote-sets..
          if (typeof message.tags['emote-sets'] !== 'undefined') {
            this._updateEmoteset(message.tags['emote-sets']);
          }
          break;

        // Received when joining a channel and every time one of the chat
        // room settings, like slow mode, change.
        // The message on join contains all room settings.
        case 'ROOMSTATE':
          // We use this notice to know if we successfully joined a channel..
          if (_.channel(this.lastJoined) === _.channel(message.params[0])) {
            this.emit('_promiseJoin', null);
          }

          // Provide the channel name in the tags before emitting it..
          message.tags.channel = _.channel(message.params[0]);
          this.emit('roomstate', _.channel(message.params[0]), message.tags);

          // Handle slow mode here instead of the slow_on/off notice..
          // This room is now in slow mode. You may send messages every slow_duration seconds.
          if (message.tags.hasOwnProperty('slow') && !message.tags.hasOwnProperty('subs-only')) {
            if (typeof message.tags.slow === 'boolean') {
              this.log.info('[' + channel + '] This room is no longer in slow mode.');
              this.emits(['slow', 'slowmode', '_promiseSlowoff'], [[channel, false, 0], [channel, false, 0], [null]]);
            } else {
              this.log.info('[' + channel + '] This room is now in slow mode.');
              this.emits(['slow', 'slowmode', '_promiseSlow'], [[channel, true, ~~message.tags.slow], [channel, true, ~~message.tags.slow], [null]]);
            }
          }

          // Handle followers only mode here instead of the followers_on/off notice..
          // This room is now in follower-only mode.
          // This room is now in <duration> followers-only mode.
          // This room is no longer in followers-only mode.
          // duration is in minutes (string)
          // -1 when /followersoff (string)
          // false when /followers with no duration (boolean)
          if (message.tags.hasOwnProperty('followers-only') && !message.tags.hasOwnProperty('subs-only')) {
            if (message.tags['followers-only'] === '-1') {
              this.log.info('[' + channel + '] This room is no longer in followers-only mode.');
              this.emits(['followersonly', 'followersmode', '_promiseFollowersoff'], [[channel, false, 0], [channel, false, 0], [null]]);
            } else {
              var minutes = ~~message.tags['followers-only'];
              this.log.info('[' + channel + '] This room is now in follower-only mode.');
              this.emits(['followersonly', 'followersmode', '_promiseFollowers'], [[channel, true, minutes], [channel, true, minutes], [null]]);
            }
          }
          break;

        default:
          this.log.warn('Could not parse message from tmi.twitch.tv:\n' + JSON.stringify(message, null, 4));
          break;
      }
    } else if (message.prefix === 'jtv') {
      // Messages from jtv..
      switch (message.command) {
        case 'MODE':
          if (msg === '+o') {
            // Add username to the moderators..
            if (!this.moderators[channel]) {
              this.moderators[channel] = [];
            }
            if (this.moderators[channel].indexOf(message.params[2]) < 0) {
              this.moderators[channel].push(message.params[2]);
            }

            this.emit('mod', channel, message.params[2]);
          } else if (msg === '-o') {
            // Remove username from the moderators..
            if (!this.moderators[channel]) {
              this.moderators[channel] = [];
            }
            this.moderators[channel].filter(function (value) {
              return value !== message.params[2];
            });

            this.emit('unmod', channel, message.params[2]);
          }
          break;

        default:
          this.log.warn('Could not parse message from jtv:\n' + JSON.stringify(message, null, 4));
          break;
      }
    } else {
      // Anything else..
      switch (message.command) {
        case '353':
          this.emit('names', message.params[2], message.params[3].split(' '));
          break;

        case '366':
          break;

        // Someone has joined the channel..
        case 'JOIN':
          // Joined a channel as a justinfan (anonymous) user..
          if (_.isJustinfan(this.getUsername()) && this.username === message.prefix.split('!')[0]) {
            this.lastJoined = channel;
            this.channels.push(channel);
            this.log.info('Joined ' + channel);
            this.emit('join', channel, message.prefix.split('!')[0], true);
          }

          // Someone else joined the channel, just emit the join event..
          if (this.username !== message.prefix.split('!')[0]) {
            this.emit('join', channel, message.prefix.split('!')[0], false);
          }
          break;

        // Someone has left the channel..
        case 'PART':
          {
            var isSelf = false;
            var index = void 0;
            // Client a channel..
            if (this.username === message.prefix.split('!')[0]) {
              isSelf = true;
              if (this.userstate[channel]) {
                delete this.userstate[channel];
              }

              index = this.channels.indexOf(channel);
              if (index !== -1) {
                this.channels.splice(index, 1);
              }

              index = this.opts.channels.indexOf(channel);
              if (index !== -1) {
                this.opts.channels.splice(index, 1);
              }

              this.log.info('Left ' + channel);
              this.emit('_promisePart', null);
            }

            // Client or someone else left the channel, emit the part event..
            this.emit('part', channel, message.prefix.split('!')[0], isSelf);
            break;
          }

        // Received a whisper..
        case 'WHISPER':
          {
            this.log.info('[WHISPER] <' + message.prefix.split('!')[0] + '>: ' + msg);

            // Update the tags to provide the username..
            if (!message.tags.hasOwnProperty('username')) {
              message.tags.username = message.prefix.split('!')[0];
            }
            message.tags['message-type'] = 'whisper';

            var from = _.channel(message.tags.username);
            // Emit for both, whisper and message..
            this.emits(['whisper', 'message'], [[from, message.tags, msg, false], [from, message.tags, msg, false]]);
            break;
          }

        case 'PRIVMSG':
          // Add username (lowercase) to the tags..
          message.tags.username = message.prefix.split('!')[0];

          // Message from JTV..
          if (message.tags.username === 'jtv') {
            // Someone is hosting the channel and the message contains how many viewers..
            if (msg.includes('hosting you for')) {
              var count = _.extractNumber(msg);

              this.emit('hosted', channel, _.username(msg.split(' ')[0]), count, msg.includes('auto'));
            } else if (msg.includes('hosting you')) {
              // Some is hosting the channel, but no viewer(s) count provided in
              // the message..
              this.emit('hosted', channel, _.username(msg.split(' ')[0]), 0, msg.includes('auto'));
            }
          } else {
            // Message is an action (/me <message>)..
            if (msg.match(/^\u0001ACTION ([^\u0001]+)\u0001$/)) {
              message.tags['message-type'] = 'action';
              this.log.info('[' + channel + '] *<' + message.tags.username + '>: ' + msg.match(/^\u0001ACTION ([^\u0001]+)\u0001$/)[1]);
              this.emits(['action', 'message'], [[channel, message.tags, msg.match(/^\u0001ACTION ([^\u0001]+)\u0001$/)[1], false], [channel, message.tags, msg.match(/^\u0001ACTION ([^\u0001]+)\u0001$/)[1], false]]);
            } else if (message.tags.hasOwnProperty('bits')) {
              this.emit('cheer', channel, message.tags, msg);
            } else {
              // Message is a regular chat message..
              message.tags['message-type'] = 'chat';
              this.log.info('[' + channel + '] <' + message.tags.username + '>: ' + msg);

              this.emits(['chat', 'message'], [[channel, message.tags, msg, false], [channel, message.tags, msg, false]]);
            }
          }
          break;

        default:
          this.log.warn('Could not parse message:\n' + JSON.stringify(message, null, 4));
          break;
      }
    }
  }
};

// Connect to server..
client.prototype.connect = function connect() {
  var _this2 = this;

  return new Promise(function (resolve, reject) {
    _this2.server = _.get(_this2.opts.connection.server, 'irc-ws.chat.twitch.tv');
    _this2.port = _.get(_this2.opts.connection.port, 80);

    // Override port if using a secure connection..
    if (_this2.secure) {
      _this2.port = 443;
    }
    if (_this2.port === 443) {
      _this2.secure = true;
    }

    _this2.reconnectTimer = _this2.reconnectTimer * _this2.reconnectDecay;
    if (_this2.reconnectTimer >= _this2.maxReconnectInterval) {
      _this2.reconnectTimer = _this2.maxReconnectInterval;
    }

    // Connect to server from configuration..
    _this2._openConnection();
    _this2.once('_promiseConnect', function (err) {
      if (!err) {
        resolve([_this2.server, ~~_this2.port]);
      } else {
        reject(err);
      }
    });
  });
};

// Open a connection..
client.prototype._openConnection = function _openConnection() {
  this.ws = new ws((this.secure ? 'wss' : 'ws') + '://' + this.server + ':' + this.port + '/', 'irc');

  this.ws.onmessage = this._onMessage.bind(this);
  this.ws.onerror = this._onError.bind(this);
  this.ws.onclose = this._onClose.bind(this);
  this.ws.onopen = this._onOpen.bind(this);
};

// Called when the WebSocket connection's readyState changes to OPEN.
// Indicates that the connection is ready to send and receive data..
client.prototype._onOpen = function _onOpen() {
  if (!_.isNull(this.ws) && this.ws.readyState === 1) {
    // Emitting "connecting" event..
    this.log.info('Connecting to ' + this.server + ' on port ' + this.port + '..');
    this.emit('connecting', this.server, ~~this.port);

    this.username = _.get(this.opts.identity.username, _.justinfan());
    this.password = _.password(_.get(this.opts.identity.password, 'SCHMOOPIIE'));

    // Emitting "logon" event..
    this.log.info('Sending authentication to server..');
    this.emit('logon');

    // Authentication..
    this.ws.send('CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership');
    this.ws.send('PASS ' + this.password);
    this.ws.send('NICK ' + this.username);
    this.ws.send('USER ' + this.username + ' 8 * :' + this.username);
  }
};

// Called when a message is received from the server..
client.prototype._onMessage = function _onMessage(event) {
  var _this3 = this;

  var parts = event.data.split('\r\n');

  parts.forEach(function (str) {
    if (!_.isNull(str)) {
      _this3.handleMessage(parse.msg(str));
    }
  });
};

// Called when an error occurs..
client.prototype._onError = function _onError() {
  var _this4 = this;

  this.moderators = {};
  this.userstate = {};
  this.globaluserstate = {};

  // Stop the internal ping timeout check interval..
  clearInterval(this.pingLoop);
  clearTimeout(this.pingTimeout);

  this.reason = !_.isNull(this.ws) ? 'Unable to connect.' : 'Connection closed.';

  this.emits(['_promiseConnect', 'disconnected'], [[this.reason], [this.reason]]);

  // Reconnect to server..
  if (this.reconnect && this.reconnections === this.maxReconnectAttempts) {
    this.emit('maxreconnect');
    this.log.error('Maximum reconnection attempts reached.');
  }
  if (this.reconnect && !this.reconnecting && this.reconnections <= this.maxReconnectAttempts - 1) {
    this.reconnecting = true;
    this.reconnections = this.reconnections + 1;
    this.log.error('Reconnecting in ' + Math.round(this.reconnectTimer / 1000) + ' seconds..');
    this.emit('reconnect');
    setTimeout(function () {
      _this4.reconnecting = false;
      _this4.connect();
    }, this.reconnectTimer);
  }

  this.ws = null;
};

// Called when the WebSocket connection's readyState changes to CLOSED..
client.prototype._onClose = function _onClose() {
  var _this5 = this;

  this.moderators = {};
  this.userstate = {};
  this.globaluserstate = {};

  // Stop the internal ping timeout check interval..
  clearInterval(this.pingLoop);
  clearTimeout(this.pingTimeout);

  // User called .disconnect(), don't try to reconnect.
  if (this.wasCloseCalled) {
    this.wasCloseCalled = false;
    this.reason = 'Connection closed.';
    this.log.info(this.reason);
    this.emits(['_promiseConnect', '_promiseDisconnect', 'disconnected'], [[this.reason], [null], [this.reason]]);
  } else {
    // Got disconnected from server..
    this.emits(['_promiseConnect', 'disconnected'], [[this.reason], [this.reason]]);

    // Reconnect to server..
    if (this.reconnect && this.reconnections === this.maxReconnectAttempts) {
      this.emit('maxreconnect');
      this.log.error('Maximum reconnection attempts reached.');
    }
    if (this.reconnect && !this.reconnecting && this.reconnections <= this.maxReconnectAttempts - 1) {
      this.reconnecting = true;
      this.reconnections = this.reconnections + 1;
      this.log.error('Could not connect to server. Reconnecting in ' + Math.round(this.reconnectTimer / 1000) + ' seconds..');
      this.emit('reconnect');
      setTimeout(function () {
        _this5.reconnecting = false;
        _this5.connect();
      }, this.reconnectTimer);
    }
  }

  this.ws = null;
};

// Promise delay for commands will fluctuate with the current server latency to
// make sure it doesn't time out prematurely
client.prototype._getPromiseDelay = function _getPromiseDelay() {
  return this.currentLatency + _.get(this.opts.options.commandTimeout, 600);
};

// Send command to server or channel..
client.prototype._sendCommand = function _sendCommand(delay, channel, command, fn) {
  var _this6 = this;

  // Race promise against delay..
  return new Promise(function (resolve, reject) {
    _.promiseDelay(delay).then(function () {
      reject('No response from Twitch.');
    });

    // Make sure the socket is opened..
    if (!_.isNull(_this6.ws) && _this6.ws.readyState !== 2 && _this6.ws.readyState !== 3) {
      // Executing a command on a channel..
      if (!_.isNull(channel)) {
        _this6.log.info('[' + _.channel(channel) + '] Executing command: ' + command);
        _this6.ws.send('PRIVMSG ' + _.channel(channel) + ' :' + command);
      } else {
        // Executing a raw command..
        _this6.log.info('Executing command: ' + command);
        _this6.ws.send(command);
      }
      fn(resolve, reject);
    } else {
      // Disconnected from server..
      reject('Not connected to server.');
    }
  });
};

// Send a message to channel..
client.prototype._sendMessage = function _sendMessage(delay, channel, message, fn) {
  var _this7 = this;

  // Promise a result..
  return new Promise(function (resolve, reject) {
    // Make sure the socket is opened and not logged in as a justinfan user..
    if (!_.isNull(_this7.ws) && _this7.ws.readyState !== 2 && _this7.ws.readyState !== 3 && !_.isJustinfan(_this7.getUsername())) {
      if (!_this7.userstate[_.channel(channel)]) {
        _this7.userstate[_.channel(channel)] = {};
      }

      // Split long lines otherwise they will be eaten by the server..
      if (message.length >= 500) {
        var msg = _.splitLine(message, 500);
        message = msg[0];

        setTimeout(function () {
          _this7._sendMessage(delay, channel, msg[1], function () {});
        }, 350);
      }

      _this7.ws.send('PRIVMSG ' + _.channel(channel) + ' :' + message);

      var emotes = {};

      // Parse regex and string emotes..
      Object.keys(_this7.emotesets).forEach(function (id) {
        _this7.emotesets[id].forEach(function (emote) {
          if (_.isRegex(emote.code)) {
            return parse.emoteRegex(message, emote.code, emote.id, emotes);
          }
          parse.emoteString(message, emote.code, emote.id, emotes);
        });
      });

      // Merge userstate with parsed emotes..
      var userstate = _.merge(_this7.userstate[_.channel(channel)], parse.emotes({ emotes: parse.transformEmotes(emotes) || null }));

      // Message is an action (/me <message>)..
      if (message.match(/^\u0001ACTION ([^\u0001]+)\u0001$/)) {
        userstate['message-type'] = 'action';
        _this7.log.info('[' + _.channel(channel) + '] *<' + _this7.getUsername() + '>: ' + message.match(/^\u0001ACTION ([^\u0001]+)\u0001$/)[1]);
        _this7.emits(['action', 'message'], [[_.channel(channel), userstate, message.match(/^\u0001ACTION ([^\u0001]+)\u0001$/)[1], true], [_.channel(channel), userstate, message.match(/^\u0001ACTION ([^\u0001]+)\u0001$/)[1], true]]);
      } else {
        // Message is a regular chat message..
        userstate['message-type'] = 'chat';
        _this7.log.info('[' + _.channel(channel) + '] <' + _this7.getUsername() + '>: ' + message);
        _this7.emits(['chat', 'message'], [[_.channel(channel), userstate, message, true], [_.channel(channel), userstate, message, true]]);
      }
      fn(resolve, reject);
    } else {
      reject('Not connected to server.');
    }
  });
};

// Grab the emote-sets object from the API..
client.prototype._updateEmoteset = function _updateEmoteset(sets) {
  var _this8 = this;

  this.emotes = sets;

  this.api({
    url: '/chat/emoticon_images?emotesets=' + sets,
    headers: {
      Authorization: 'OAuth ' + _.password(_.get(this.opts.identity.password, '')).replace('oauth:', ''),
      'Client-ID': this.clientId
    }
  }, function (err, res, body) {
    if (!err) {
      _this8.emotesets = body.emoticon_sets || {};
      return _this8.emit('emotesets', sets, _this8.emotesets);
    }
    setTimeout(function () {
      _this8._updateEmoteset(sets);
    }, 60000);
  });
};

// Get current username..
client.prototype.getUsername = function getUsername() {
  return this.username;
};

// Get current options..
client.prototype.getOptions = function getOptions() {
  return this.opts;
};

// Get current channels..
client.prototype.getChannels = function getChannels() {
  return this.channels;
};

// Check if username is a moderator on a channel..
client.prototype.isMod = function isMod(channel, username) {
  if (!this.moderators[_.channel(channel)]) {
    this.moderators[_.channel(channel)] = [];
  }
  if (this.moderators[_.channel(channel)].indexOf(_.username(username)) >= 0) {
    return true;
  }
  return false;
};

// Get readyState..
client.prototype.readyState = function readyState() {
  if (_.isNull(this.ws)) {
    return 'CLOSED';
  }
  return ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'][this.ws.readyState];
};

// Disconnect from server..
client.prototype.disconnect = function disconnect() {
  var _this9 = this;

  return new Promise(function (resolve, reject) {
    if (!_.isNull(_this9.ws) && _this9.ws.readyState !== 3) {
      _this9.wasCloseCalled = true;
      _this9.log.info('Disconnecting from server..');
      _this9.ws.close();
      _this9.once('_promiseDisconnect', function () {
        resolve([_this9.server, ~~_this9.port]);
      });
    } else {
      _this9.log.error('Cannot disconnect from server. Socket is not opened or connection is already closing.');
      reject('Cannot disconnect from server. Socket is not opened or connection is already closing.');
    }
  });
};

client.prototype.utils = {
  levenshtein: function levenshtein(s1, s2, caseSensitive) {
    var cost_ins = 1;
    var cost_rep = 1;
    var cost_del = 1;
    caseSensitive = _.get(caseSensitive, false);

    if (!caseSensitive) {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();
    }

    if (s1 === s2) {
      return 0;
    }

    var l1 = s1.length;
    var l2 = s2.length;

    if (l1 === 0) {
      return l2 * cost_ins;
    }
    if (l2 === 0) {
      return l1 * cost_del;
    }

    var split = false;
    try {
      split = !'0'[0];
    } catch (e) {
      split = true;
    }
    if (split) {
      s1 = s1.split('');
      s2 = s2.split('');
    }

    var p1 = new Array(l2 + 1);
    var p2 = new Array(l2 + 1);

    var i1 = void 0;
    var i2 = void 0;
    var c0 = void 0;
    var c1 = void 0;
    var c2 = void 0;
    var tmp = void 0;

    for (i2 = 0; i2 <= l2; i2++) {
      p1[i2] = i2 * cost_ins;
    }

    for (i1 = 0; i1 < l1; i1++) {
      p2[0] = p1[0] + cost_del;

      for (i2 = 0; i2 < l2; i2++) {
        c0 = p1[i2] + (s1[i1] === s2[i2] ? 0 : cost_rep);
        c1 = p1[i2 + 1] + cost_del;

        if (c1 < c0) {
          c0 = c1;
        }

        c2 = p2[i2] + cost_ins;

        if (c2 < c0) {
          c0 = c2;
        }

        p2[i2 + 1] = c0;
      }

      tmp = p1;
      p1 = p2;
      p2 = tmp;
    }

    c0 = p1[l2];

    return c0;
  },
  raffle: {
    init: function init(channel) {
      if (!this.raffleChannels) {
        this.raffleChannels = {};
      }
      if (!this.raffleChannels[_.channel(channel)]) {
        this.raffleChannels[_.channel(channel)] = [];
      }
    },
    enter: function enter(channel, username) {
      this.init(channel);
      this.raffleChannels[_.channel(channel)].push(username.toLowerCase());
    },
    leave: function leave(channel, username) {
      this.init(channel);
      var index = this.raffleChannels[_.channel(channel)].indexOf(_.username(username));
      if (index >= 0) {
        this.raffleChannels[_.channel(channel)].splice(index, 1);
        return true;
      }
      return false;
    },
    pick: function pick(channel) {
      this.init(channel);
      var count = this.raffleChannels[_.channel(channel)].length;
      if (count >= 1) {
        return this.raffleChannels[_.channel(channel)][Math.floor(Math.random() * count)];
      }
      return null;
    },
    reset: function reset(channel) {
      this.init(channel);
      this.raffleChannels[_.channel(channel)] = [];
    },
    count: function count(channel) {
      this.init(channel);
      if (this.raffleChannels[_.channel(channel)]) {
        return this.raffleChannels[_.channel(channel)].length;
      }
      return 0;
    },
    isParticipating: function isParticipating(channel, username) {
      this.init(channel);
      if (this.raffleChannels[_.channel(channel)].indexOf(_.username(username)) >= 0) {
        return true;
      }
      return false;
    }
  },
  symbols: function symbols(line) {
    var count = 0;
    for (var i = 0; i < line.length; i++) {
      var charCode = line.substring(i, i + 1).charCodeAt(0);
      if (charCode <= 30 || charCode >= 127 || charCode === 65533) {
        count++;
      }
    }
    return Math.ceil(count / line.length * 100) / 100;
  },
  uppercase: function uppercase(line) {
    var chars = line.length;
    var u_let = line.match(/[A-Z]/g);
    if (!_.isNull(u_let)) {
      return u_let.length / chars;
    }
    return 0;
  }
};

// Expose everything, for browser and Node..
if ( true && module.exports) {
  module.exports = client;
}
if (typeof window !== 'undefined') {
  window.tmi = {};
  window.tmi.client = client;
}
//# sourceMappingURL=client.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/twitch-js/lib/commands.js":
/*!************************************************!*\
  !*** ./node_modules/twitch-js/lib/commands.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! ./utils */ "./node_modules/twitch-js/lib/utils.js");

// Enable followers-only mode on a channel..
function followersonly(channel, minutes) {
  var _this = this;

  channel = _.channel(channel);
  minutes = _.get(minutes, 30);

  // Send the command to the server and race the Promise against a delay..
  return this._sendCommand(this._getPromiseDelay(), channel, '/followers ' + minutes, function (resolve, reject) {
    // Received _promiseFollowers event, resolve or reject..
    _this.once('_promiseFollowers', function (err) {
      if (!err) {
        resolve([channel, ~~minutes]);
      } else {
        reject(err);
      }
    });
  });
}

// Disable followers-only mode on a channel..
function followersonlyoff(channel) {
  var _this2 = this;

  channel = _.channel(channel);

  // Send the command to the server and race the Promise against a delay..
  return this._sendCommand(this._getPromiseDelay(), channel, '/followersoff', function (resolve, reject) {
    // Received _promiseFollowersoff event, resolve or reject..
    _this2.once('_promiseFollowersoff', function (err) {
      if (!err) {
        resolve([channel]);
      } else {
        reject(err);
      }
    });
  });
}

// Leave a channel..
function part(channel) {
  var _this3 = this;

  channel = _.channel(channel);

  // Send the command to the server and race the Promise against a delay..
  return this._sendCommand(this._getPromiseDelay(), null, 'PART ' + channel, function (resolve, reject) {
    // Received _promisePart event, resolve or reject..
    _this3.once('_promisePart', function (err) {
      if (!err) {
        resolve([channel]);
      } else {
        reject(err);
      }
    });
  });
}

// Enable R9KBeta mode on a channel..
function r9kbeta(channel) {
  var _this4 = this;

  channel = _.channel(channel);

  // Send the command to the server and race the Promise against a delay..
  return this._sendCommand(this._getPromiseDelay(), channel, '/r9kbeta', function (resolve, reject) {
    // Received _promiseR9kbeta event, resolve or reject..
    _this4.once('_promiseR9kbeta', function (err) {
      if (!err) {
        resolve([channel]);
      } else {
        reject(err);
      }
    });
  });
}

// Disable R9KBeta mode on a channel..
function r9kbetaoff(channel) {
  var _this5 = this;

  channel = _.channel(channel);

  // Send the command to the server and race the Promise against a delay..
  return this._sendCommand(this._getPromiseDelay(), channel, '/r9kbetaoff', function (resolve, reject) {
    // Received _promiseR9kbetaoff event, resolve or reject..
    _this5.once('_promiseR9kbetaoff', function (err) {
      if (!err) {
        resolve([channel]);
      } else {
        reject(err);
      }
    });
  });
}

// Enable slow mode on a channel..
function slow(channel, seconds) {
  var _this6 = this;

  channel = _.channel(channel);
  seconds = _.get(seconds, 300);

  // Send the command to the server and race the Promise against a delay..
  return this._sendCommand(this._getPromiseDelay(), channel, '/slow ' + seconds, function (resolve, reject) {
    // Received _promiseSlow event, resolve or reject..
    _this6.once('_promiseSlow', function (err) {
      if (!err) {
        resolve([channel, ~~seconds]);
      } else {
        reject(err);
      }
    });
  });
}

// Disable slow mode on a channel..
function slowoff(channel) {
  var _this7 = this;

  channel = _.channel(channel);

  // Send the command to the server and race the Promise against a delay..
  return this._sendCommand(this._getPromiseDelay(), channel, '/slowoff', function (resolve, reject) {
    // Received _promiseSlowoff event, resolve or reject..
    _this7.once('_promiseSlowoff', function (err) {
      if (!err) {
        resolve([channel]);
      } else {
        reject(err);
      }
    });
  });
}

module.exports = {
  // Send action message (/me <message>) on a channel..
  action: function action(channel, message) {
    channel = _.channel(channel);
    message = '\x01ACTION ' + message + '\x01';

    // Send the command to the server and race the Promise against a delay..
    return this._sendMessage(this._getPromiseDelay(), channel, message, function (resolve) {
      // At this time, there is no possible way to detect
      // if a message has been sent has been eaten
      // by the server, so we can only resolve the Promise.
      resolve([channel, message]);
    });
  },

  // Ban username on channel..
  ban: function ban(channel, username, reason) {
    var _this8 = this;

    channel = _.channel(channel);
    username = _.username(username);
    reason = _.get(reason, '');

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), channel, '/ban ' + username + ' ' + reason, function (resolve, reject) {
      // Received _promiseBan event, resolve or reject..
      _this8.once('_promiseBan', function (err) {
        if (!err) {
          resolve([channel, username, reason]);
        } else {
          reject(err);
        }
      });
    });
  },

  // Clear all messages on a channel..
  clear: function clear(channel) {
    var _this9 = this;

    channel = _.channel(channel);

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), channel, '/clear', function (resolve, reject) {
      // Received _promiseClear event, resolve or reject..
      _this9.once('_promiseClear', function (err) {
        if (!err) {
          resolve([channel]);
        } else {
          reject(err);
        }
      });
    });
  },

  // Change the color of your username..
  color: function color(channel, newColor) {
    var _this10 = this;

    newColor = _.get(newColor, channel);

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), '#tmijs', '/color ' + newColor, function (resolve, reject) {
      // Received _promiseColor event, resolve or reject..
      _this10.once('_promiseColor', function (err) {
        if (!err) {
          resolve([newColor]);
        } else {
          reject(err);
        }
      });
    });
  },

  // Run commercial on a channel for X seconds..
  commercial: function commercial(channel, seconds) {
    var _this11 = this;

    channel = _.channel(channel);
    seconds = _.get(seconds, 30);

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), channel, '/commercial ' + seconds, function (resolve, reject) {
      // Received _promiseCommercial event, resolve or reject..
      _this11.once('_promiseCommercial', function (err) {
        if (!err) {
          resolve([channel, ~~seconds]);
        } else {
          reject(err);
        }
      });
    });
  },

  // Enable emote-only mode on a channel..
  emoteonly: function emoteonly(channel) {
    var _this12 = this;

    channel = _.channel(channel);

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), channel, '/emoteonly', function (resolve, reject) {
      // Received _promiseEmoteonly event, resolve or reject..
      _this12.once('_promiseEmoteonly', function (err) {
        if (!err) {
          resolve([channel]);
        } else {
          reject(err);
        }
      });
    });
  },

  // Disable emote-only mode on a channel..
  emoteonlyoff: function emoteonlyoff(channel) {
    var _this13 = this;

    channel = _.channel(channel);

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), channel, '/emoteonlyoff', function (resolve, reject) {
      // Received _promiseEmoteonlyoff event, resolve or reject..
      _this13.once('_promiseEmoteonlyoff', function (err) {
        if (!err) {
          resolve([channel]);
        } else {
          reject(err);
        }
      });
    });
  },

  // Enable followers-only mode on a channel..
  followersonly: followersonly,

  // Alias for followersonly()..
  followersmode: followersonly,

  // Disable followers-only mode on a channel..
  followersonlyoff: followersonlyoff,

  // Alias for followersonlyoff()..
  followersmodeoff: followersonlyoff,

  // Host a channel..
  host: function host(channel, target) {
    var _this14 = this;

    channel = _.channel(channel);
    target = _.username(target);

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(2000, channel, '/host ' + target, function (resolve, reject) {
      // Received _promiseHost event, resolve or reject..
      _this14.once('_promiseHost', function (err, remaining) {
        if (!err) {
          resolve([channel, target, ~~remaining]);
        } else {
          reject(err);
        }
      });
    });
  },

  // Join a channel..
  join: function join(channel) {
    var _this15 = this;

    channel = _.channel(channel);

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), null, 'JOIN ' + channel, function (resolve, reject) {
      // Received _promiseJoin event, resolve or reject..
      _this15.once('_promiseJoin', function (err) {
        if (!err) {
          resolve([channel]);
        } else {
          reject(err);
        }
      });
    });
  },

  // Mod username on channel..
  mod: function mod(channel, username) {
    var _this16 = this;

    channel = _.channel(channel);
    username = _.username(username);

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), channel, '/mod ' + username, function (resolve, reject) {
      // Received _promiseMod event, resolve or reject..
      _this16.once('_promiseMod', function (err) {
        if (!err) {
          resolve([channel, username]);
        } else {
          reject(err);
        }
      });
    });
  },

  // Get list of mods on a channel..
  mods: function mods(channel) {
    var _this17 = this;

    channel = _.channel(channel);

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), channel, '/mods', function (resolve, reject) {
      // Received _promiseMods event, resolve or reject..
      _this17.once('_promiseMods', function (err, mods) {
        if (!err) {
          // Update the internal list of moderators..
          mods.forEach(function (username) {
            if (!_this17.moderators[channel]) {
              _this17.moderators[channel] = [];
            }
            if (_this17.moderators[channel].indexOf(username) < 0) {
              _this17.moderators[channel].push(username);
            }
          });
          resolve(mods);
        } else {
          reject(err);
        }
      });
    });
  },


  // Leave a channel..
  part: part,

  // Alias for part()..
  leave: part,

  // Send a ping to the server..
  ping: function ping() {
    var _this18 = this;

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), null, 'PING', function (resolve) {
      // Update the internal ping timeout check interval..
      _this18.latency = new Date();
      _this18.pingTimeout = setTimeout(function () {
        if (_this18.ws !== null) {
          _this18.wasCloseCalled = false;
          _this18.log.error('Ping timeout.');
          _this18.ws.close();

          clearInterval(_this18.pingLoop);
          clearTimeout(_this18.pingTimeout);
        }
      }, _.get(_this18.opts.connection.timeout, 9999));

      // Received _promisePing event, resolve or reject..
      _this18.once('_promisePing', function (latency) {
        resolve([parseFloat(latency)]);
      });
    });
  },

  // Enable R9KBeta mode on a channel..
  r9kbeta: r9kbeta,

  // Alias for r9kbeta()..
  r9kmode: r9kbeta,

  // Disable R9KBeta mode on a channel..
  r9kbetaoff: r9kbetaoff,

  // Alias for r9kbetaoff()..
  r9kmodeoff: r9kbetaoff,

  // Send a raw message to the server..
  raw: function raw(message) {
    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), null, message, function (resolve) {
      resolve([message]);
    });
  },

  // Send a message on a channel..
  say: function say(channel, message) {
    channel = _.channel(channel);

    if (message.startsWith('.') && !message.startsWith('..') || message.startsWith('/') || message.startsWith('\\')) {
      // Check if the message is an action message..
      if (message.substr(1, 3) === 'me ') {
        return this.action(channel, message.substr(4));
      }

      // Send the command to the server and race the Promise against a delay..
      return this._sendCommand(this._getPromiseDelay(), channel, message, function (resolve) {
        // At this time, there is no possible way to detect if a message has
        // been sent has been eaten by the server, so we can only resolve the
        // Promise.
        resolve([channel, message]);
      });
    }

    // Send the command to the server and race the Promise against a delay..
    return this._sendMessage(this._getPromiseDelay(), channel, message, function (resolve) {
      // At this time, there is no possible way to detect
      // if a message has been sent has been eaten
      // by the server, so we can only resolve the Promise.
      resolve([channel, message]);
    });
  },

  // Enable slow mode on a channel..
  slow: slow,

  // Alias for slow()..
  slowmode: slow,

  // Disable slow mode on a channel..
  slowoff: slowoff,

  // Alias for slowoff()..
  slowmodeoff: slowoff,

  // Enable subscribers mode on a channel..
  subscribers: function subscribers(channel) {
    var _this19 = this;

    channel = _.channel(channel);

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), channel, '/subscribers', function (resolve, reject) {
      // Received _promiseSubscribers event, resolve or reject..
      _this19.once('_promiseSubscribers', function (err) {
        if (!err) {
          resolve([channel]);
        } else {
          reject(err);
        }
      });
    });
  },

  // Disable subscribers mode on a channel..
  subscribersoff: function subscribersoff(channel) {
    var _this20 = this;

    channel = _.channel(channel);

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), channel, '/subscribersoff', function (resolve, reject) {
      // Received _promiseSubscribersoff event, resolve or reject..
      _this20.once('_promiseSubscribersoff', function (err) {
        if (!err) {
          resolve([channel]);
        } else {
          reject(err);
        }
      });
    });
  },

  // Timeout username on channel for X seconds..
  timeout: function timeout(channel, username, seconds, reason) {
    var _this21 = this;

    channel = _.channel(channel);
    username = _.username(username);

    if (!_.isNull(seconds) && !_.isInteger(seconds)) {
      reason = seconds;
      seconds = 300;
    }

    seconds = _.get(seconds, 300);
    reason = _.get(reason, '');

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), channel, '/timeout ' + username + ' ' + seconds + ' ' + reason, function (resolve, reject) {
      // Received _promiseTimeout event, resolve or reject..
      _this21.once('_promiseTimeout', function (err) {
        if (!err) {
          resolve([channel, username, ~~seconds, reason]);
        } else {
          reject(err);
        }
      });
    });
  },

  // Unban username on channel..
  unban: function unban(channel, username) {
    var _this22 = this;

    channel = _.channel(channel);
    username = _.username(username);

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), channel, '/unban ' + username, function (resolve, reject) {
      // Received _promiseUnban event, resolve or reject..
      _this22.once('_promiseUnban', function (err) {
        if (!err) {
          resolve([channel, username]);
        } else {
          reject(err);
        }
      });
    });
  },

  // End the current hosting..
  unhost: function unhost(channel) {
    var _this23 = this;

    channel = _.channel(channel);

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(2000, channel, '/unhost', function (resolve, reject) {
      // Received _promiseUnhost event, resolve or reject..
      _this23.once('_promiseUnhost', function (err) {
        if (!err) {
          resolve([channel]);
        } else {
          reject(err);
        }
      });
    });
  },

  // Unmod username on channel..
  unmod: function unmod(channel, username) {
    var _this24 = this;

    channel = _.channel(channel);
    username = _.username(username);

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), channel, '/unmod ' + username, function (resolve, reject) {
      // Received _promiseUnmod event, resolve or reject..
      _this24.once('_promiseUnmod', function (err) {
        if (!err) {
          resolve([channel, username]);
        } else {
          reject(err);
        }
      });
    });
  },

  // Send an whisper message to a user..
  whisper: function whisper(username, message) {
    var _this25 = this;

    username = _.username(username);

    // The server will not send a whisper to the account that sent it.
    if (username === this.getUsername()) {
      return Promise.reject('Cannot send a whisper to the same account.');
    }

    // Send the command to the server and race the Promise against a delay..
    return this._sendCommand(this._getPromiseDelay(), '#tmijs', '/w ' + username + ' ' + message, function (resolve) {
      var from = _.channel(username);
      var userstate = _.merge({
        'message-type': 'whisper',
        'message-id': null,
        'thread-id': null,
        username: _this25.getUsername()
      }, _this25.globaluserstate);

      // Emit for both, whisper and message..
      _this25.emits(['whisper', 'message'], [[from, userstate, message, true], [from, userstate, message, true]]);

      // At this time, there is no possible way to detect
      // if a message has been sent has been eaten
      // by the server, so we can only resolve the Promise.
      resolve([username, message]);
    });
  }
};
//# sourceMappingURL=commands.js.map

/***/ }),

/***/ "./node_modules/twitch-js/lib/events.js":
/*!**********************************************!*\
  !*** ./node_modules/twitch-js/lib/events.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */

/*
 * Copyright Joyent, Inc. and other Node contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}

module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function (n) {
  if (!isNumber(n) || n < 0 || isNaN(n)) {
    throw TypeError('n must be a positive number');
  }

  this._maxListeners = n;

  return this;
};

// Emit multiple events..
EventEmitter.prototype.emits = function (types, values) {
  for (var i = 0; i < types.length; i++) {
    values[i].unshift(types[i]);
    this.emit.apply(this, values[i]);
  }
};

EventEmitter.prototype.emit = function (type) {
  var er, handler, len, args, i, listeners;

  if (!this._events) {
    this._events = {};
  }

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er;
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler)) {
    return false;
  }

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++) {
      listeners[i].apply(this, args);
    }
  }

  return true;
};

EventEmitter.prototype.addListener = function (type, listener) {
  var m;

  if (!isFunction(listener)) {
    throw TypeError('listener must be a function');
  }

  if (!this._events) {
    this._events = {};
  }

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener) {
    this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
  }

  // Optimize the case of one listener. Don't need the extra array object.
  if (!this._events[type]) {
    this._events[type] = listener;
  } else if (isObject(this._events[type])) {
    // If we've already got an array, just append.
    this._events[type].push(listener);
  } else {
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];
  }

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
      // Not supported in IE 10
      if (typeof console.trace === 'function') {
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

// Modified to support multiple calls..
EventEmitter.prototype.once = function (type, listener) {
  if (!isFunction(listener)) {
    throw TypeError('listener must be a function');
  }

  var fired = false;

  if (this._events.hasOwnProperty(type) && type.charAt(0) === '_') {
    var count = 1;
    var searchFor = type;

    for (var k in this._events) {
      if (this._events.hasOwnProperty(k) && k.startsWith(searchFor)) {
        count++;
      }
    }
    type = type + count;
  }

  function g() {
    if (type.charAt(0) === '_' && !isNaN(type.substr(type.length - 1))) {
      type = type.substring(0, type.length - 1);
    }
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// Emits a "removeListener" event if the listener was removed..
// Modified to support multiple calls from .once()..
EventEmitter.prototype.removeListener = function (type, listener) {
  var list, position, length, i;

  if (!isFunction(listener)) {
    throw TypeError('listener must be a function');
  }

  if (!this._events || !this._events[type]) {
    return this;
  }

  list = this._events[type];
  length = list.length;
  position = -1;
  if (list === listener || isFunction(list.listener) && list.listener === listener) {
    delete this._events[type];

    if (this._events.hasOwnProperty(type + '2') && type.charAt(0) === '_') {
      var searchFor = type;
      for (var k in this._events) {
        if (this._events.hasOwnProperty(k) && k.startsWith(searchFor)) {
          if (!isNaN(parseInt(k.substr(k.length - 1)))) {
            this._events[type + parseInt(k.substr(k.length - 1) - 1)] = this._events[k];
            delete this._events[k];
          }
        }
      }

      this._events[type] = this._events[type + '1'];
      delete this._events[type + '1'];
    }
    if (this._events.removeListener) {
      this.emit('removeListener', type, listener);
    }
  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        position = i;
        break;
      }
    }

    if (position < 0) {
      return this;
    }

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener) {
      this.emit('removeListener', type, listener);
    }
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function (type) {
  var key, listeners;

  if (!this._events) {
    return this;
  }

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0) {
      this._events = {};
    } else if (this._events[type]) {
      delete this._events[type];
    }
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') {
        continue;
      }
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    while (listeners.length) {
      this.removeListener(type, listeners[listeners.length - 1]);
    }
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function (type) {
  var ret;
  if (!this._events || !this._events[type]) {
    ret = [];
  } else if (isFunction(this._events[type])) {
    ret = [this._events[type]];
  } else {
    ret = this._events[type].slice();
  }
  return ret;
};

EventEmitter.prototype.listenerCount = function (type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener)) {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }
  return 0;
};

EventEmitter.listenerCount = function (emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : (0, _typeof3.default)(arg)) === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/twitch-js/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/twitch-js/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _arguments = arguments;
/* eslint-disable no-extend-native */

var client = __webpack_require__(/*! ./client */ "./node_modules/twitch-js/lib/client.js");

// Provide support for < Chrome 41 mainly due to CLR Browser..
if (typeof String.prototype.includes !== 'function') {
  String.prototype.includes = function () {
    return String.prototype.indexOf.apply(undefined, _arguments) !== -1;
  };
}

if (typeof String.prototype.startsWith !== 'function') {
  String.prototype.startsWith = function (a, b) {
    return String.prototype.indexOf(a, b || 0) === b;
  };
}

if (typeof Object.setPrototypeOf !== 'function') {
  Object.setPrototypeOf = function (obj, proto) {
    // eslint-disable-next-line no-proto
    obj.__proto__ = proto;
    return obj;
  };
}

module.exports = {
  client: client,
  Client: client
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/twitch-js/lib/logger.js":
/*!**********************************************!*\
  !*** ./node_modules/twitch-js/lib/logger.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */

var _ = __webpack_require__(/*! ./utils */ "./node_modules/twitch-js/lib/utils.js");

var currentLevel = 'info';
var levels = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
};

// Logger implementation..
function log(level) {
  // Return a console message depending on the logging level..
  return function (message) {
    if (levels[level] >= levels[currentLevel]) {
      console.log('[' + _.formatDate(new Date()) + '] ' + level + ': ' + message);
    }
  };
}

module.exports = {
  // Change the current logging level..
  setLevel: function setLevel(level) {
    currentLevel = level;
  },

  trace: log('trace'),
  debug: log('debug'),
  info: log('info'),
  warn: log('warn'),
  error: log('error'),
  fatal: log('fatal')
};
//# sourceMappingURL=logger.js.map

/***/ }),

/***/ "./node_modules/twitch-js/lib/parser.js":
/*!**********************************************!*\
  !*** ./node_modules/twitch-js/lib/parser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable max-len */
/*
    Copyright (c) 2013-2015, Fionn Kelleher All rights reserved.

    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the following conditions are met:

        Redistributions of source code must retain the above copyright notice,
        this list of conditions and the following disclaimer.

        Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation and/or other materials
        provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
    IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
    OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
    WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
    ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
    OF SUCH DAMAGE.
*/
var _ = __webpack_require__(/*! ./utils */ "./node_modules/twitch-js/lib/utils.js");

module.exports = {
  // Parse Twitch badges..
  badges: function badges(tags) {
    if (_.isString(tags.badges)) {
      var badgesParsed = {};
      var explode = tags.badges.split(',');

      for (var i = 0; i < explode.length; i++) {
        var parts = explode[i].split('/');
        if (!parts[1]) return;
        badgesParsed[parts[0]] = parts[1];
      }

      tags['badges-raw'] = tags.badges;
      tags.badges = badgesParsed;
    }
    if (_.isBoolean(tags.badges)) {
      tags['badges-raw'] = null;
    }

    return tags;
  },

  // Parse Twitch emotes..
  emotes: function emotes(tags) {
    if (_.isString(tags.emotes)) {
      var emoticons = tags.emotes.split('/');
      var emotesParsed = {};

      for (var i = 0; i < emoticons.length; i++) {
        var parts = emoticons[i].split(':');
        if (!parts[1]) return;
        emotesParsed[parts[0]] = parts[1].split(',');
      }

      tags['emotes-raw'] = tags.emotes;
      tags.emotes = emotesParsed;
    }
    if (_.isBoolean(tags.emotes)) {
      tags['emotes-raw'] = null;
    }

    return tags;
  },

  // Parse regex emotes..
  emoteRegex: function emoteRegex(msg, code, id, obj) {
    var space = /\S+/g;
    var regex = new RegExp('(\\b|^|s)' + _.unescapeHtml(code) + '(\\b|$|s)\'');
    var match = void 0;

    // Check if emote code matches using RegExp and push it to the object..
    while ((match = space.exec(msg)) !== null) {
      if (regex.test(match[0]) && obj[id]) {
        obj[id].push([match.index, space.lastIndex - 1]);
      }
    }
  },

  // Parse string emotes..
  emoteString: function emoteString(msg, code, id, obj) {
    var space = /\S+/g;
    var match = void 0;

    // Check if emote code matches and push it to the object..
    while ((match = space.exec(msg)) !== null) {
      if (match[0] === _.unescapeHtml(code)) {
        obj[id] = obj[id] || [];
        obj[id].push([match.index, space.lastIndex - 1]);
      }
    }
  },

  // Transform the emotes object to a string with the following format..
  // emote_id:first_index-last_index,another_first-another_last/another_emote_id:first_index-last_index
  transformEmotes: function transformEmotes(emotes) {
    var transformed = '';

    Object.keys(emotes).forEach(function (id) {
      transformed = transformed + id + ':';
      emotes[id].forEach(function (index) {
        transformed = transformed + index.join('-') + ',';
      });
      transformed = transformed.slice(0, -1) + '/';
    });

    return transformed.slice(0, -1);
  },

  // Parse Twitch messages..
  msg: function msg(data) {
    var message = {
      raw: data,
      tags: {},
      prefix: null,
      command: null,
      params: []
    };

    // Position and nextspace are used by the parser as a reference..
    var position = 0;
    var nextspace = 0;

    // The first thing we check for is IRCv3.2 message tags.
    // http://ircv3.atheme.org/specification/message-tags-3.2
    if (data.charCodeAt(0) === 64) {
      nextspace = data.indexOf(' ');

      // Malformed IRC message..
      if (nextspace === -1) {
        return null;
      }

      // Tags are split by a semi colon..
      var rawTags = data.slice(1, nextspace).split(';');

      for (var i = 0; i < rawTags.length; i++) {
        // Tags delimited by an equals sign are key=value tags.
        // If there's no equals, we assign the tag a value of true.
        var tag = rawTags[i];
        var pair = tag.split('=');
        message.tags[pair[0]] = tag.substring(tag.indexOf('=') + 1) || true;
      }

      position = nextspace + 1;
    }

    // Skip any trailing whitespace..
    while (data.charCodeAt(position) === 32) {
      position++;
    }

    // Extract the message's prefix if present. Prefixes are prepended with a colon..
    if (data.charCodeAt(position) === 58) {
      nextspace = data.indexOf(' ', position);

      // If there's nothing after the prefix, deem this message to be malformed.
      if (nextspace === -1) {
        return null;
      }

      message.prefix = data.slice(position + 1, nextspace);
      position = nextspace + 1;

      // Skip any trailing whitespace..
      while (data.charCodeAt(position) === 32) {
        position++;
      }
    }

    nextspace = data.indexOf(' ', position);

    // If there's no more whitespace left, extract everything from the
    // current position to the end of the string as the command..
    if (nextspace === -1) {
      if (data.length > position) {
        message.command = data.slice(position);
        return message;
      }

      return null;
    }

    // Else, the command is the current position up to the next space. After
    // that, we expect some parameters.
    message.command = data.slice(position, nextspace);

    position = nextspace + 1;

    // Skip any trailing whitespace..
    while (data.charCodeAt(position) === 32) {
      position++;
    }

    while (position < data.length) {
      nextspace = data.indexOf(' ', position);

      // If the character is a colon, we've got a trailing parameter.
      // At this point, there are no extra params, so we push everything
      // from after the colon to the end of the string, to the params array
      // and break out of the loop.
      if (data.charCodeAt(position) === 58) {
        message.params.push(data.slice(position + 1));
        break;
      }

      // If we still have some whitespace...
      if (nextspace !== -1) {
        // Push whatever's between the current position and the next
        // space to the params array.
        message.params.push(data.slice(position, nextspace));
        position = nextspace + 1;

        // Skip any trailing whitespace and continue looping.
        while (data.charCodeAt(position) === 32) {
          position++;
        }
      }

      // If we don't have any more whitespace and the param isn't trailing,
      // push everything remaining to the params array.
      if (nextspace === -1) {
        message.params.push(data.slice(position));
        break;
      }
    }

    return message;
  }
};
//# sourceMappingURL=parser.js.map

/***/ }),

/***/ "./node_modules/twitch-js/lib/timer.js":
/*!*********************************************!*\
  !*** ./node_modules/twitch-js/lib/timer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Initialize the queue with a specific delay..
function queue(defaultDelay) {
  this.queue = [];
  this.index = 0;
  this.defaultDelay = defaultDelay || 3000;
}

// Add a new function to the queue..
queue.prototype.add = function add(fn, delay) {
  this.queue.push({
    fn: fn,
    delay: delay
  });
};

// Run the current queue..
queue.prototype.run = function run(index) {
  if (index || index === 0) {
    this.index = index;
  }
  this.next();
};

// Go to the next in queue..
queue.prototype.next = function next() {
  var _this = this;

  var i = this.index++;
  var at = this.queue[i];
  var nextInQueue = this.queue[this.index];

  if (!at) {
    return;
  }

  at.fn();
  if (nextInQueue) {
    setTimeout(function () {
      _this.next();
    }, nextInQueue.delay || this.defaultDelay);
  }
};

// Reset the queue..
queue.prototype.reset = function reset() {
  this.index = 0;
};

// Clear the queue..
queue.prototype.clear = function clear() {
  this.index = 0;
  this.queue = [];
};

exports.queue = queue;
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./node_modules/twitch-js/lib/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/twitch-js/lib/utils.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var self = {
  // Return the second value if the first value is undefined..
  get: function get(obj1, obj2) {
    return typeof obj1 === 'undefined' ? obj2 : obj1;
  },

  // Value is a boolean..
  isBoolean: function isBoolean(obj) {
    return typeof obj === 'boolean';
  },

  // Value is a finite number..
  isFinite: function isFinite(int) {
    return Number.isFinite(int) && !Number.isNaN(parseFloat(int));
  },

  // Value is an integer..
  isInteger: function isInteger(int) {
    return !Number.isNaN(self.toNumber(int, 0));
  },

  // Username is a justinfan username..
  isJustinfan: function isJustinfan(username) {
    return RegExp('^(justinfan)(\\d+$)', 'g').test(username);
  },

  // Value is null..
  isNull: function isNull(obj) {
    return obj === null;
  },

  // Value is a regex..
  isRegex: function isRegex(str) {
    return (/[\|\\\^\$\*\+\?\:\#]/.test(str)
    );
  },

  // Value is a string..
  isString: function isString(str) {
    return typeof str === 'string';
  },

  // Value is a valid url..
  isURL: function isURL(str) {
    return RegExp('^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$', 'i').test(str);
  },

  // Return a random justinfan username..
  justinfan: function justinfan() {
    return 'justinfan' + Math.floor(Math.random() * 80000 + 1000);
  },

  // Return a valid password..
  password: function password(str) {
    if (str === 'SCHMOOPIIE' || str === '' || str === null) {
      return 'SCHMOOPIIE';
    }
    return 'oauth:' + str.toLowerCase().replace('oauth:', '');
  },

  // Race a promise against a delay..
  promiseDelay: function promiseDelay(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  },

  // Replace all occurences of a string using an object..
  replaceAll: function replaceAll(str, obj) {
    if (str === null || typeof str === 'undefined') {
      return null;
    }
    Object.keys(obj).forEach(function (x) {
      str = str.replace(new RegExp(x, 'g'), obj[x]);
    });
    return str;
  },

  unescapeHtml: function unescapeHtml(safe) {
    return safe.replace(/\\&amp\\;/g, '&').replace(/\\&lt\\;/g, '<').replace(/\\&gt\\;/g, '>').replace(/\\&quot\\;/g, '"').replace(/\\&#039\\;/g, "'");
  },

  // Add word to a string..
  addWord: function addWord(line, word) {
    if (line.length !== 0) {
      return line + ' ' + word;
    }
    return word;
  },

  // Return a valid channel name..
  channel: function channel(str) {
    var channel = typeof str === 'undefined' || str === null ? '' : str;
    return channel.charAt(0) === '#' ? channel.toLowerCase() : '#' + channel.toLowerCase();
  },

  // Extract a number from a string..
  extractNumber: function extractNumber(str) {
    var parts = str.split(' ');
    for (var i = 0; i < parts.length; i++) {
      if (self.isInteger(parts[i])) {
        return ~~parts[i];
      }
    }
    return 0;
  },

  // Format the date..
  formatDate: function formatDate(date) {
    var hours = date.getHours();
    var mins = date.getMinutes();

    hours = (hours < 10 ? '0' : '') + hours;
    mins = (mins < 10 ? '0' : '') + mins;

    return hours + ':' + mins;
  },

  // Inherit the prototype methods from one constructor into another..
  inherits: function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function TempCtor() {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  },

  // Return whether inside a Node application or not..
  isNode: function isNode() {
    try {
      if ((typeof process === 'undefined' ? 'undefined' : (0, _typeof3.default)(process)) === 'object' && Object.prototype.toString.call(process) === '[object process]') {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  },

  isExtension: function isExtension() {
    try {
      if (window.chrome && window.chrome.runtime && window.chrome.runtime.id) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  },

  // Merge two or more objects.
  merge: Object.assign,

  // Split a line but don't cut a word in half..
  splitLine: function splitLine(input, length) {
    var lastSpace = input.substring(0, length).lastIndexOf(' ');
    return [input.substring(0, lastSpace), input.substring(lastSpace + 1)];
  },

  // Parse string to number. Returns NaN if string can't be parsed to number..
  toNumber: function toNumber(num, precision) {
    if (num === null) return 0;
    var factor = Math.pow(10, self.isFinite(precision) ? precision : 0);
    return Math.round(num * factor) / factor;
  },

  // Merge two arrays..
  union: function union(arr1, arr2) {
    var hash = {};
    var ret = [];

    arr1.forEach(function (value) {
      if (!hash[value]) {
        hash[value] = true;
        ret.push(value);
      }
    });

    arr2.forEach(function (value) {
      if (!hash[value]) {
        hash[value] = true;
        ret.push(value);
      }
    });

    return ret;
  },

  // Return a valid username..
  username: function username(str) {
    var username = typeof str === 'undefined' || str === null ? '' : str;
    return username.charAt(0) === '#' ? username.substring(1).toLowerCase() : username.toLowerCase();
  }
};

module.exports = self;
//# sourceMappingURL=utils.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/twitch-js/lib/utils/fetch-helper.js":
/*!**********************************************************!*\
  !*** ./node_modules/twitch-js/lib/utils/fetch-helper.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseResponse = undefined;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _nodeFetch = __webpack_require__(/*! node-fetch */ "./node_modules/twitch-js/src/shims/fetch.js");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseResponse = exports.parseResponse = function parseResponse(response) {
  return response.json().then(function (json) {
    if (!response.ok) {
      var error = new Error(response.url + ' ' + response.statusText);
      error.response = json;
      throw error;
    }

    return json;
  });
};

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var endpoint = _ref.endpoint,
      _ref$method = _ref.method,
      method = _ref$method === undefined ? 'GET' : _ref$method,
      clientId = _ref.clientId,
      token = _ref.token,
      otherProps = (0, _objectWithoutProperties3.default)(_ref, ['endpoint', 'method', 'clientId', 'token']);

  if (!endpoint) {
    return Promise.reject(new Error('An endpoint is required.'));
  }

  if (!clientId && !token) {
    return Promise.reject(new Error('A client ID or token is required.'));
  }

  // Construct headers object.
  var headers = token ? { Authorization: 'OAuth ' + token } : { 'Client-ID': clientId };

  // Construct options object.
  var options = (0, _extends3.default)({}, otherProps, {
    method: method,
    headers: (0, _extends3.default)({}, headers, {
      Accept: 'application/vnd.twitchtv.v5+json'
    })
  });

  return (0, _nodeFetch2.default)(endpoint, options).then(parseResponse);
};
//# sourceMappingURL=fetch-helper.js.map

/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_Hash.js":
/*!*************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_Hash.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/twitch-js/node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/twitch-js/node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/twitch-js/node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/twitch-js/node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/twitch-js/node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_ListCache.js":
/*!******************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_ListCache.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/twitch-js/node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/twitch-js/node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/twitch-js/node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/twitch-js/node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/twitch-js/node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_Map.js":
/*!************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_Map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/twitch-js/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/twitch-js/node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_MapCache.js":
/*!*****************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_MapCache.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/twitch-js/node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/twitch-js/node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/twitch-js/node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/twitch-js/node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/twitch-js/node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_Symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_Symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/twitch-js/node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_arrayMap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_arrayMap.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_assocIndexOf.js":
/*!*********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_assocIndexOf.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/twitch-js/node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_baseGet.js":
/*!****************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_baseGet.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/twitch-js/node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/twitch-js/node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_baseGetTag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_baseGetTag.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/twitch-js/node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/twitch-js/node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/twitch-js/node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_baseIsNative.js":
/*!*********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_baseIsNative.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/twitch-js/node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/twitch-js/node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/twitch-js/node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/twitch-js/node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_baseToString.js":
/*!*********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_baseToString.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/twitch-js/node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/twitch-js/node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/twitch-js/node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/twitch-js/node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_castPath.js":
/*!*****************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_castPath.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/twitch-js/node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/twitch-js/node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/twitch-js/node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/twitch-js/node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_coreJsData.js":
/*!*******************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_coreJsData.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/twitch-js/node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_freeGlobal.js":
/*!*******************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_freeGlobal.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_getMapData.js":
/*!*******************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_getMapData.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/twitch-js/node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_getNative.js":
/*!******************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_getNative.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/twitch-js/node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/twitch-js/node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_getRawTag.js":
/*!******************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_getRawTag.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/twitch-js/node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_getValue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_getValue.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_hashClear.js":
/*!******************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_hashClear.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/twitch-js/node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_hashDelete.js":
/*!*******************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_hashDelete.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_hashGet.js":
/*!****************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_hashGet.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/twitch-js/node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_hashHas.js":
/*!****************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_hashHas.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/twitch-js/node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_hashSet.js":
/*!****************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_hashSet.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/twitch-js/node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_isKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_isKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/twitch-js/node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/twitch-js/node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_isKeyable.js":
/*!******************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_isKeyable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_isMasked.js":
/*!*****************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_isMasked.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/twitch-js/node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_listCacheClear.js":
/*!***********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_listCacheClear.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_listCacheDelete.js":
/*!************************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_listCacheDelete.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/twitch-js/node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_listCacheGet.js":
/*!*********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_listCacheGet.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/twitch-js/node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_listCacheHas.js":
/*!*********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_listCacheHas.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/twitch-js/node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_listCacheSet.js":
/*!*********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_listCacheSet.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/twitch-js/node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_mapCacheClear.js":
/*!**********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_mapCacheClear.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/twitch-js/node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/twitch-js/node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/twitch-js/node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_mapCacheDelete.js":
/*!***********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_mapCacheDelete.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/twitch-js/node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_mapCacheGet.js":
/*!********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_mapCacheGet.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/twitch-js/node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_mapCacheHas.js":
/*!********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_mapCacheHas.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/twitch-js/node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_mapCacheSet.js":
/*!********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_mapCacheSet.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/twitch-js/node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_memoizeCapped.js":
/*!**********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_memoizeCapped.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/twitch-js/node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_nativeCreate.js":
/*!*********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_nativeCreate.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/twitch-js/node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_objectToString.js":
/*!***********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_objectToString.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_root.js":
/*!*************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_root.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/twitch-js/node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_stringToPath.js":
/*!*********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_stringToPath.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/twitch-js/node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_toKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_toKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/twitch-js/node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/_toSource.js":
/*!*****************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/_toSource.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/eq.js":
/*!**********************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/eq.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/get.js":
/*!***********************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/get.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/twitch-js/node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/isArray.js":
/*!***************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/isArray.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/isFunction.js":
/*!******************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/isFunction.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/twitch-js/node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/twitch-js/node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/isObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/isObject.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/isObjectLike.js":
/*!********************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/isObjectLike.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/isSymbol.js":
/*!****************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/isSymbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/twitch-js/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/twitch-js/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/memoize.js":
/*!***************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/memoize.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/twitch-js/node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/twitch-js/node_modules/lodash/toString.js":
/*!****************************************************************!*\
  !*** ./node_modules/twitch-js/node_modules/lodash/toString.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/twitch-js/node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/twitch-js/src/shims/fetch.js":
/*!***************************************************!*\
  !*** ./node_modules/twitch-js/src/shims/fetch.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (fetch);


/***/ }),

/***/ "./node_modules/validator/lib/isFQDN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isFQDN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFQDN;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isIP.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/isIP.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/isURL.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isURL.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/lib/util/assertString.js");

var _assertString2 = _interopRequireDefault(_assertString);

var _isFQDN = __webpack_require__(/*! ./isFQDN */ "./node_modules/validator/lib/isFQDN.js");

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isIP = __webpack_require__(/*! ./isIP */ "./node_modules/validator/lib/isIP.js");

var _isIP2 = _interopRequireDefault(_isIP);

var _merge = __webpack_require__(/*! ./util/merge */ "./node_modules/validator/lib/util/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/util/assertString.js":
/*!*********************************************************!*\
  !*** ./node_modules/validator/lib/util/assertString.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/validator/lib/util/merge.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/util/merge.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var configData = {
  channelName : "chenzorama",
  Client_ID : 'do2pfinbp2ykiwsauawxb7vs8d09w3',
  Client_Secret : 'qya1ilrj7i6yblku1impcw2oxcz7vq',
  OAUTH: 'oauth:xkz8a8qk4f5sjm25wldsowxxwz5rnl',
  userID: '58652316',
  server: 'https://fierce-springs-20115.herokuapp.com/',
  //server: 'http://localhost:3002/',
  server_port: 3002
}

module.exports = configData;


/***/ }),

/***/ "./src/js/modules/chatScrollerOBJ.js":
/*!*******************************************!*\
  !*** ./src/js/modules/chatScrollerOBJ.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



chatScrollerOBJ = {

    checkTimer: 0,
    recId: 0,

    scrollIt: function(who, message, id) {
        console.log(who, message, id);

        var newDiv = document.createElement("div"); 
        newDiv.id = id;
        //this.PrevID = id;
        newDiv.classList.add("aphrase");

        var span = document.createElement('span');
        span.textContent = who + ": ";
        span.classList.add("usr");

        var span2 = document.createElement('span');
        span2.textContent = message;

        newDiv.appendChild(span);
        newDiv.appendChild(span2);

        var currentDiv = document.getElementById("chatSpace"); 
        currentDiv.appendChild(newDiv);

        newDiv.addEventListener('transitionend', () => {
            console.log('Transition ended');
            newDiv.remove();
            if (document.getElementsByClassName("aphrase").length < 1) {
                document.getElementById("latest_followers").classList.remove("hiding");
            }
        });


    },

    checkDivScroll: function() {
        var pendingLength = document.getElementsByClassName("aphrase").length;

        if (pendingLength > 0) {
            for (x=0; x<pendingLength; x++) {
                //console.log(document.getElementsByClassName("aphrase")[x]);

                //var lastDiv = document.getElementsByClassName("aphrase")[document.getElementsByClassName("aphrase").length - 1]
                var lastDiv = document.getElementsByClassName("aphrase")[x];
                theLeft = lastDiv.offsetLeft + lastDiv.offsetWidth;
                var prevLeft = 0;
                if (x > 0) {
                    var prevDiv = document.getElementsByClassName("aphrase")[x - 1];
                    prevLeft = prevDiv.offsetLeft + prevDiv.offsetWidth;
                }
                if (theLeft > 1920 && !lastDiv.classList.contains("scrolling")) {
                    if (prevLeft < 1890) { //1920 (get a little more sapce)
                        lastDiv.classList.add("scrolling");
                        document.getElementById("latest_followers").classList.add("hiding");
                    } else {
                        console.log("broke loop");
                        break;
                    }
                }
            }
        }

        //document.getElementById("numoutput").innerHTML= checkTimer;
        chatScrollerOBJ.addcheckTimer++;
        chatScrollerOBJ.recId = requestAnimationFrame(chatScrollerOBJ.checkDivScroll);
        
    },

    init: function() {
        console.log("checkDivScroll init");
        chatScrollerOBJ.recId = requestAnimationFrame(chatScrollerOBJ.checkDivScroll);
    },

    start: function() {
        chatScrollerOBJ.recId = requestAnimationFrame(chatScrollerOBJ.checkDivScroll);
    }

}



module.exports = { 
    init: chatScrollerOBJ.init,
    scrollIt: chatScrollerOBJ.scrollIt,
    checkDivScroll: chatScrollerOBJ.checkDivScroll,
    start: chatScrollerOBJ.start
};


/***/ }),

/***/ "./src/js/modules/displayOBJ.js":
/*!**************************************!*\
  !*** ./src/js/modules/displayOBJ.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {




displayOBJ = {

    addCrew: function(crewMember) {
        console.log("ADD CREW : " + crewMember);
        var crewDiv = document.getElementById(crewMember);
        crewDiv.classList.add("active");
        //client.say(channel, crewMember + ' added as crew member!');
    },

    removeCrew: function(crewMember) {
        console.log("REMOVE CREW : " + crewMember);
        var crewDiv = document.getElementById(crewMember);
        crewDiv.classList.remove("active");
        //client.playaudiosay(channel, crewMember + ' added as crew member!');
    },

    getCrew: function() {
        var crewlist = document.getElementById("crew").querySelectorAll(".crewmate.active"), i; 
        var crewArray = [];
        for (i = 0; i < crewlist.length; ++i) {
        crewArray.push(crewlist[i].id);
        }
        return crewArray;
    },

    playAudio: function(audioName) {
        if (audioName == "3") {
            var myAudio = document.getElementById('um3');
            myAudio.play();
            //client.say(channel, '3');
        } else if (audioName == "digs") {
            var myAudio = document.getElementById('digs');
            myAudio.play();
        } else if (audioName == "babyshark") {
            var myAudio = document.getElementById('babyshark');
            myAudio.play();
        } else if (audioName == "sharkbait") {
            var myAudio = document.getElementById('sharkbait');
            myAudio.play();
        } 
    },

    addShipSunk: function(shipType) {
        if (shipType == "galleon" || shipType == "sloop" || shipType == "brig" ) {
            console.log("ADDING SINKING BOAT");
            var sunksDiv = document.getElementById("sunks"); 
            var boat = document.createElement('div');
            var type = shipType;
            boat.classList.add("ship-sinker","sink");
            boat.innerHTML = '<div class="aship float '+ type + '"><img src="images/sunk/'+type+'.png" /></div>';
            sunksDiv.appendChild(boat);
            //client.say(channel, shipType + ' sunk!');
        }
    },

    adjustAlignment: function(amount) {
        console.log("AMMOUJT" + amount);
        var skullmeter = document.querySelector("#skullmeter");
        var style = window.getComputedStyle(skullmeter);
        var matrix = new WebKitCSSMatrix(style.webkitTransform);
        var currentAlignment = matrix.m41;
        //console.log('translateX: ', matrix.m41);

        var newAlignment = parseInt(currentAlignment) + parseInt(amount);
        console.log(newAlignment);
        var val = newAlignment + "px";
        skullmeter.style.transform = "translateX(" + val + ")";
    },

    newFollowerAlert: function(followName) {
        //#new_follower_pop
        var new_follower_pop = document.querySelector("#new_follower_pop");
        var nft = document.querySelector("#newfollow_text");
        nft.textContent=followName;
        new_follower_pop.classList.add("onDisplay");
        var rm = setTimeout(function() {
            new_follower_pop.classList.remove("onDisplay");
            new_follower_pop.classList.add("offDisplay");
            var mr = setTimeout(function() {
                new_follower_pop.classList.remove("offDisplay");
            }, 1000);
        }, 4000);
    },

    newSubAlert: function(subName) {

    }

}





module.exports = { 
    addCrew: displayOBJ.addCrew,
    getCrew: displayOBJ.getCrew,
    removeCrew: displayOBJ.removeCrew,
    playAudio: displayOBJ.playAudio,
    addShipSunk: displayOBJ.addShipSunk,
    adjustAlignment: displayOBJ.adjustAlignment,
    newFollowerAlert: displayOBJ.newFollowerAlert,
    newSubAlert: displayOBJ.newSubAlert
};


/***/ }),

/***/ "./src/js/modules/headShotOBJ.js":
/*!***************************************!*\
  !*** ./src/js/modules/headShotOBJ.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const voicebarsOBJ = __webpack_require__(/*! ./voicebarsOBJ */ "./src/js/modules/voicebarsOBJ.js");

headShotOBJ = {

    headShotType: 1,

    toggleCam: function(hType) {
        
        //console.log("-- headshot toggle cam: " + hType);

        if(hType == "skully") {
            document.getElementById("headshot").classList.remove("headshot");
            document.getElementById("headshot").classList.add("skully");
            headShotOBJ.headShotType = 2;
            voicebarsOBJ.restart();
            //console.log("set to skully");
        } else if (hType == "headshot") {
            document.getElementById("headshot").classList.add("headshot");
            document.getElementById("headshot").classList.remove("skully");
            headShotOBJ.headShotType = 1;
            voicebarsOBJ.restart();
            //console.log("set to headshot");
        }

    },


    init: function() {
        console.log("headShotOBJ init");
    }
}



module.exports = { 
    init: headShotOBJ.init,
    headShotType: headShotOBJ.headShotType,
    toggleCam: headShotOBJ.toggleCam
};


/***/ }),

/***/ "./src/js/modules/remoteOBJ.js":
/*!*************************************!*\
  !*** ./src/js/modules/remoteOBJ.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const configData = __webpack_require__(/*! ./../config.js */ "./src/js/config.js");
const displayOBJ = __webpack_require__(/*! ./displayOBJ.js */ "./src/js/modules/displayOBJ.js");

remoteOBJ = {

    name: 'Panel Host',
    room: 'panel_remote',
    socket: null,


    init: function() {
        console.log("SERVER: " + configData.server);
        remoteOBJ.socket = io(configData.server);
        remoteOBJ.socket.on('connect_error', remoteOBJ.handleNoConnect);
        remoteOBJ.socket.on("connect", remoteOBJ.onConnect);
        remoteOBJ.socket.on("message", remoteOBJ.onMessage);
    },

    handleNoConnect: function(err) {
        console.log('connection error');
        console.log(err)
    },

    onConnect: function() {
        console.log("Connected to Socket I/O Server!!!");
        remoteOBJ.socket.emit('joinRoom', {
            name: remoteOBJ.name,
            room: remoteOBJ.room
        });
    },

    onMessage: function(message) {
        console.log("- message: " + message.text);
        var cargs, command;
        var isDo = message.text.substr(0, 3);//.split(" ")[0];
        if (isDo == "do:") {
            console.log("DO COMMAND");
            var splitMessage = message.text.substr(4).split(" ");
            command = splitMessage[0];
            if (splitMessage.length > 0) {
                cargs = splitMessage[1];
            }

            if (command == "getcrew") {
                console.log("Send Crew Status");
                msg = "current crew: " + displayOBJ.getCrew();
                remoteOBJ.socket.emit("message", {
                    text: msg,
                    name: remoteOBJ.name
                });
            }
            
            if (command == "addcrew") {
                displayOBJ.addCrew(cargs);
            }

            if (command == "playaudio") {
                displayOBJ.playAudio(cargs);
            }

            if (command == "removecrew") {
                displayOBJ.removeCrew(cargs);
            }

            if (command == "shipsunk") {
                displayOBJ.addShipSunk(cargs);
            }

            if (command == "setAlignment") {
                console.log("here here");
                displayOBJ.adjustAlignment(cargs);
            }

            if (command == "newFollower") {
                console.log("new follower displayObj call: ");
                displayOBJ.newFollowerAlert(cargs);
            }


        }

        if (message.text == "soemthing") {
        }
    }

};

module.exports = { 
    init: remoteOBJ.init
};


/***/ }),

/***/ "./src/js/modules/twitchChatOBJ.js":
/*!*****************************************!*\
  !*** ./src/js/modules/twitchChatOBJ.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {



const configData = __webpack_require__(/*! ./../config.js */ "./src/js/config.js");
const TwitchJS = __webpack_require__(/*! twitch-js */ "./node_modules/twitch-js/lib/index.js");
chatScrollerOBJ = __webpack_require__(/*! ./chatScrollerOBJ.js */ "./src/js/modules/chatScrollerOBJ.js");
const headShotOBJ = __webpack_require__(/*! ./headShotOBJ.js */ "./src/js/modules/headShotOBJ.js");

twitchChatOBJ = {

    init: function() {
        console.log('Activating Twitch');
        const options = {
            channels: ["#chenzorama"],
            connection: {
                secure: true
            },
            identity: {
                username: "chenzorama",
                password: configData.OAUTH
            }
        };


        const client = new TwitchJS.client(options);

        client.on('chat', (channel, userstate, message, self) => {
            console.log(`Message "${message}" received from ${userstate['display-name']}`);
            //console.log(userstate);
            //console.log("client-nonce - " +  userstate['client-nonce'])

            chatScrollerOBJ.scrollIt(userstate['display-name'], message, userstate['client-nonce']);

            // Do not repond if the message is from the connected identity.
            if (self) return;


            if (options.identity && message.substring(0, 8) === '!addcrew') {
                if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                    const crewname = message.substr(9);//.split(" ")[0];
                    displayOBJ.addCrew(crewname);
                } 
            }
            if (options.identity && message.substring(0, 11) === '!removecrew') {
                if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                    const crewname = message.substring(12);
                    displayOBJ.removeCrew(crewname);
                } 
            }

            if (options.identity && message.substring(0, 9) === '!sunkboat') {
                if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                    const boatType = message.substr(10);//.split(" ")[0];
                    if (boatType == "galleon" || boatType == "sloop" || boatType == "brig" ) {
                        console.log("ADDING SINKING BOAT");
                        displayOBJ.addShipSunk(boatType);
                    }
                } 
            }


            if (options.identity && message === '!scooby') {
                //if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                headShotOBJ.toggleCam("skully");
                client.say(channel, 'Switching To Scooby Level Skull');
                //} 
            }

            if (options.identity && message === '!headshot') {
                //if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                headShotOBJ.toggleCam("headshot");
                client.say(channel, 'Switching To Chenzo Headshot');
                //} 
            }

            if (options.identity && message === '!3') {
                displayOBJ.playAudio("3");
            }

            if (options.identity && message === '!digs') {
                displayOBJ.playAudio("digs");
            }
        
            if (options.identity && message === '!babyshark') {
                displayOBJ.playAudio("babyshark");
            }

        

            if (options.identity && message === '!test') {
                //bot.say(channel, '3');
            }

        
        });

        client.on('join', function(channel, username, self) {
            //User Detected
            console.log(username + " has joined the party"+ " | isSelf: " + self);
        });


        client.on('part', function(channel, username, self) {
            //User Left
            console.log(username + " has left the building" + " | isSelf: " + self);
        });

        // Finally, connect to the channel
        client.connect();
        console.log('---Twitch Activated');
    }
}


module.exports = { 
    init: twitchChatOBJ.init,
};


/***/ }),

/***/ "./src/js/modules/twitchOBJ.js":
/*!*************************************!*\
  !*** ./src/js/modules/twitchOBJ.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


//import configData from './../config.js';
const configData = __webpack_require__(/*! ./../config.js */ "./src/js/config.js");

twitchOBJ = {

    accessToken: 0,

    displayFollowers: function(followerData) {
      var followCount = (followerData.data.length < 4) ? followerData.data.length : 3;
      var followHTML = "";
      for (var index = 0; index < followCount; index++) { 
        if (index != 0) {
          followHTML+= ", ";
        }
        followHTML+= "<span>" + followerData.data[index].from_name + "</span>";
      }
      var followElement = document.getElementById("latestFollowers");
      followElement.innerHTML = followHTML;
    },

    getAccessToken: function() {

      console.log("Getting twitch access token!!");

      fetch('https://id.twitch.tv/oauth2/token?client_id=' + configData.Client_ID + '&client_secret=' + configData.Client_Secret + '&grant_type=client_credentials', {
        method: 'POST',
      })
      .then(response => response.json())
      .then(data => (
        //console.log(data),
        twitchOBJ.accessToken = data.access_token,
        //console.log("twitchOBJ.accessToken: " + twitchOBJ.accessToken),
        this.getLatestFollowers())
      )
      .catch(error => 
        console.log("Twitch Fetch Errored: " + error)
      ); 
    },


    getLatestFollowers: function() {

        //console.log(twitchOBJ.accessToken);
  
        fetch('https://api.twitch.tv/helix/users/follows?to_id=' + configData.userID, {
          method: 'GET',
          headers: {
            'Client-ID': configData.Client_ID,
            'Authorization': "Bearer " + twitchOBJ.accessToken
          }
        })
        .then(response => response.json())
        .then(data =>
          this.displayFollowers(data)
        )
        .catch(error => 
          console.log("Twitch Fetch Errored: " + error)
        ); 
    },
  

      
    getTwitchStreamerData: function() {
        fetch('https://api.twitch.tv/helix/users?login=lirik', {
          headers: {
            'Client-ID': configData.Client_ID
          }
        })
        .then(response => response.json())
        .then(data =>
          console.log(data)
        )
        .catch(error => 
          console.log("Twitch Fetch Errored: " + error)
        );
    },

    init: function() {
        console.log("Twitch INIT");
        twitchOBJ.getAccessToken();
        //initTwitch();
    }
}



module.exports = { 
    init: twitchOBJ.init
};


/***/ }),

/***/ "./src/js/modules/voicebarsOBJ.js":
/*!****************************************!*\
  !*** ./src/js/modules/voicebarsOBJ.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


headShotOBJ = __webpack_require__(/*! ./headShotOBJ */ "./src/js/modules/headShotOBJ.js");


voicebarsObj = {

    rafID: 0,
    audioContext: null,
    analyser: null,
    dataArray: null,
    source: null,
    canvas: null,
    canvas2: null,
    ctx: null,
    ctx2: null,
    width: null,
    height: null,
    radius: null,
    num_items: null,
    particles: [],
    myThing: null,
    fftSize: null,
    smoothingTimeConstant: null,


    prepType: function() {

        fftSize = 128;
        smoothingTimeConstant = 0.8;

        //console.log("headShotOBJ.headShotType: " + headShotOBJ.headShotType);

        if (headShotOBJ.headShotType == 2) {
            //skull
            smoothingTimeConstant = 0.2;
            fftSize = 64;
        }


    },

    tick: function() {
        voicebarsObj.analyser.getByteFrequencyData(dataArray);
        if (headShotOBJ.headShotType == 2) {

            let i = 0;
            let jawi = i + 109
            let topi = 13;
            let alf = 0;
            let soundlimit = 8;
            var pastNub = 0;
            var distancelimit = 3;

            var l = dataArray.length;
            var sum = dataArray.reduce(function(a, b){
                return a + b;
            }, 0);

            var nub = ~~(sum / l);
            document.getElementById("numoutput").innerHTML= nub;

            if (nub > pastNub + distancelimit || nub < pastNub - distancelimit) {
                pastNub = nub;
                nub = (nub - soundlimit < 0) ? 0 : nub - soundlimit;
                jawi = (nub * .4) + 109;
                topi = 13 - (nub/10);
                alf = (nub *1.5) * .01;
            }

            if (nub > 50) {
                document.getElementById("skull_top_open").classList.remove("hidden");
                document.getElementById("skull_top").classList.add("open");
                document.getElementById("skull_top_closed").classList.add("hidden");
            } else {
                document.getElementById("skull_top_open").classList.add("hidden");
                document.getElementById("skull_top").classList.remove("open");
                document.getElementById("skull_top_closed").classList.remove("hidden");
            }
            document.getElementById("skull_top").style.top = topi + "px";
            document.getElementById("skull_jaw").style.top = jawi + "px";
            document.getElementById("skull_bg").style.opacity = alf;
        } else {
            voicebarsObj.drawBars(voicebarsObj.ctx, dataArray);
            voicebarsObj.drawBars(voicebarsObj.ctx2, dataArray);
        }
        voicebarsObj.rafId = requestAnimationFrame(voicebarsObj.tick);
        voicebarsObj.myThing.innerHTML = "rafId: " + voicebarsObj.rafId;
    },


    getLastIdx: function(dArray) {
        var r = 0;
        for (const [idx, s] of dArray.entries()) {
            if (s > 10) {
                r = idx;
            }
        }
        return r;
    },

    drawBars: function(ctx, dataArray) {
        ctx.clearRect(0, 0, voicebarsObj.canvas.width, voicebarsObj.canvas.height);
    
        for (const [i, s] of dataArray.entries()) {
    
            var p = voicebarsObj.particles[i];
            var vol = (s < 120) ? s : 121;
            var ss = Math.abs(vol / 2 );
    
            if (typeof p != "undefined") {
                var x2 = voicebarsObj.width/2 + Math.cos(p.angle) * (ss + voicebarsObj.radius);
                var y2 = voicebarsObj.height/2 + Math.sin(p.angle) * (ss + voicebarsObj.radius);
    
                ctx.beginPath();
                var gradient = ctx.createRadialGradient(2100,250,20, 250,250,175);
    
                gradient.addColorStop("0", "#0e2b28");
                gradient.addColorStop("0.5", "#0e2b28");
                gradient.addColorStop("1.0", "#267e81"); 
    
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 6;
    
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            } 
    
        }
    },

    makeAngles: function() {
        
        function radians(deg) {return deg*Math.PI/180;};
    
        function distributeAngles(me, total) {
            return me/total * 180 - 90;
        }
    
        for (var i = 0; i < voicebarsObj.num_items; i++) {
            var angle = radians(distributeAngles(i, voicebarsObj.num_items));
            voicebarsObj.particles[i] = {
                x: voicebarsObj.width/2 + Math.cos(angle) * voicebarsObj.radius,
                y: voicebarsObj.height/2 + Math.sin(angle) * voicebarsObj.radius,
                angle: angle
            }
        }
    },

    getAudio: function() { 
    
        navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(stream => {
            // Handle the incoming audio stream
            voicebarsObj.audioContext = new (window.AudioContext ||
                window.webkitAudioContext)();
             //this.micDelay = this.audioContext.createDelay(0);
            voicebarsObj.analyser = voicebarsObj.audioContext.createAnalyser();
            voicebarsObj.analyser.minDecibels = -90;
            voicebarsObj.analyser.maxDecibels = -10;
            voicebarsObj.analyser.smoothingTimeConstant = smoothingTimeConstant;
            voicebarsObj.analyser.fftSize = fftSize;
            dataArray = new Uint8Array(voicebarsObj.analyser.frequencyBinCount);
            //var bufferLength = analyser.frequencyBinCount;
            source = voicebarsObj.audioContext.createMediaStreamSource(stream);
            //this.micDelay.delayTime.value = this.props.audioDelayTime; //somewhere around 1
            source.connect(voicebarsObj.analyser);
    
            voicebarsObj.rafId = requestAnimationFrame(voicebarsObj.tick);
    
            }, error => {
            // Something went wrong, or the browser does not support getUserMedia
        });
    
    
    },


    restart: function() {
        console.log("RESETTING");
        console.log(headShotOBJ.getHeadShotType);
        window.cancelAnimationFrame( voicebarsObj.rafId);
        voicebarsObj.audioContext.close().then(function() {
            console.log("audioContextClosed");
            voicebarsObj.init();
        });
    },

    setInitialValues() {
        voicebarsObj.canvas = document.getElementById("circle-canvas");
        voicebarsObj.canvas2 = document.getElementById("circle-canvas-2");
        voicebarsObj.ctx = voicebarsObj.canvas.getContext('2d');
        voicebarsObj.ctx2 = voicebarsObj.canvas2.getContext('2d');
        voicebarsObj.width = voicebarsObj.canvas.width;
        voicebarsObj.height = voicebarsObj.canvas.height;
        voicebarsObj.radius = 100;
        voicebarsObj.num_items = 40;
        voicebarsObj.myThing = document.getElementById("countdown");
    },

    init: function() {
        console.log("Voice Bars INIT");
        voicebarsObj.setInitialValues();
        voicebarsObj.ctx.clearRect(0, 0, voicebarsObj.canvas.width, voicebarsObj.canvas.height);
        voicebarsObj.ctx2.clearRect(0, 0, voicebarsObj.canvas.width, voicebarsObj.canvas.height);
        voicebarsObj.prepType();
        voicebarsObj.makeAngles();
        voicebarsObj.getAudio();
    }
    

   
}



module.exports = { 
    init: voicebarsObj.init,
    restart: voicebarsObj.restart
};


/***/ }),

/***/ "./src/js/overlay.js":
/*!***************************!*\
  !*** ./src/js/overlay.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const twitchOBJ = __webpack_require__(/*! ./modules/twitchOBJ */ "./src/js/modules/twitchOBJ.js");
const twitchChatOBJ = __webpack_require__(/*! ./modules/twitchChatOBJ */ "./src/js/modules/twitchChatOBJ.js");
const chatScrollerOBJ = __webpack_require__(/*! ./modules/chatScrollerOBJ */ "./src/js/modules/chatScrollerOBJ.js");
const headShotOBJ = __webpack_require__(/*! ./modules/headShotOBJ */ "./src/js/modules/headShotOBJ.js");
const voicebarsOBJ = __webpack_require__(/*! ./modules/voicebarsOBJ */ "./src/js/modules/voicebarsOBJ.js");
const remoteOBJ = __webpack_require__(/*! ./modules/remoteOBJ */ "./src/js/modules/remoteOBJ.js");
const displayOBJ = __webpack_require__(/*! ./modules/displayOBJ */ "./src/js/modules/displayOBJ.js");


headShotOBJ.init();

voicebarsOBJ.init();

twitchOBJ.init();

chatScrollerOBJ.init();

twitchChatOBJ.init();

remoteOBJ.init();



/***/ }),

/***/ 1:
/*!*********************************!*\
  !*** multi ./src/js/overlay.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vince/sites/obs_overlay/src/js/overlay.js */"./src/js/overlay.js");


/***/ }),

/***/ 2:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=overlay.js.map