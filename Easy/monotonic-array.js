/**
 * Problem: Monotonic Array
 * Difficulty: Easy
 * Runtime: 200 ms
 * Date: 2019/10/27
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  function equal(a, b) {
    if (a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false
    }
    return true
  }
  const a = [...A].sort((a, b) => a - b)
  const b = [...A].sort((a, b) => b - a)
  return equal(A, a) || equal(A, b)
}
