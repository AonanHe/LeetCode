/**
 * Problem: Monotonic Array
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2019/10/27
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let inc = false
  let dec = false
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] < A[i]) inc = true
    if (A[i - 1] > A[i]) dec = true
    if (inc && dec) return false
  }
  return true
}
