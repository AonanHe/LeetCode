/**
 * Problem: Repeated String Match
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2019/10/06
 * Author: Aonan He
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  let s = A
  let count = 1
  while (s.length <= A.length * 2 + B.length) {
    if (s.indexOf(B) !== -1) {
      return count
    }
    s += A
    count += 1
  }
  return -1
}
