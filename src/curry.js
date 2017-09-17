/**
 * Curries the supplied function
 * 
 * @param {function} fn - The function to curry
 */
const curry = fn => 
  (...a) => 
    a.length === fn.length 
      ? fn(...a)
      : (...b) => 
          curry(fn)(...[...a, ...b])

/**
 * Maps over all supplied functions and returns an 
 * array of the curried versions 
 * 
 * @param {Function} fns - Takes 0 or more function parameters
 */
const curryAll = (...fns) =>
  [...fns].map(fn => 
    curry(fn)
  )

export {curry, curryAll}
