/**
 * Problem: Valid Mountain Array
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2019/11/01
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if (A.length < 3) return false
  let i = 0
  let j = A.length - 1
  while (i < j && A[i] < A[i + 1]) {
    i += 1
  }
  while (j > 0 && A[j] < A[j - 1]) {
    j -= 1
  }
  return i === j && i !== 0 && i !== A.length - 1
}
