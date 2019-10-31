/**
 * Problem: Sort Array By Parity II
 * Difficulty: Easy
 * Runtime: 92 ms
 * Date: 2019/10/31
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let j = 1
  for (let i = 0; i < A.length; i += 2) {
    if (A[i] % 2 === 1) {
      while (A[j] % 2 === 1) {
        j += 2
      }
      ;[A[i], A[j]] = [A[j], A[i]]
    }
  }
  return A
}
