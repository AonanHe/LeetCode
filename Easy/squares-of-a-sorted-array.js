/**
 * Problem: Squares of a Sorted Array
 * Difficulty: Easy
 * Runtime: 140 ms
 * Date: 2019/11/03
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  for (let i = 0; i < A.length; i++) {
    A[i] = A[i] ** 2
  }
  A.sort((a, b) => a - b)
  return A
}
