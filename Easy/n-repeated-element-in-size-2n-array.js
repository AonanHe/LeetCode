/**
 * Problem: N-Repeated Element in Size 2N Array
 * Difficulty: Easy
 * Runtime: 104 ms
 * Date: 2019/11/03
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  A.sort((a, b) => a - b)
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === A[i + 1]) {
      return A[i]
    }
  }
  return A[0]
}
