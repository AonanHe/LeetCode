/**
 * Problem: Rotate String
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/03/02
 * Author: Aonan He
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if (A === B) return true
  const len = A.length
  for (let i = 0; i < len; i++) {
    const s = A.slice(0, i)
    const t = A.slice(i)
    if (t + s === B) {
      return true
    }
  }
  return false
}
