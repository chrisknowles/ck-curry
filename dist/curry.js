(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.curry = {})));
}(this, (function (exports) { 'use strict';

/**
 * Curries the supplied function
 * 
 * @param {function} fn - The function to curry
 */
var curry = function curry(fn) {
  return function () {
    for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    return a.length === fn.length ? fn.apply(undefined, a) : function () {
      for (var _len2 = arguments.length, b = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        b[_key2] = arguments[_key2];
      }

      return curry(fn).apply(undefined, [].concat(a, b));
    };
  };
};

/**
 * Maps over all supplied functions and returns an 
 * array of the curried versions 
 * 
 * @param {Function} fns - Takes 0 or more function parameters
 */
var curryAll = function curryAll() {
  for (var _len3 = arguments.length, fns = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    fns[_key3] = arguments[_key3];
  }

  return [].concat(fns).map(function (fn) {
    return curry(fn);
  });
};

exports.curry = curry;
exports.curryAll = curryAll;

Object.defineProperty(exports, '__esModule', { value: true });

})));
