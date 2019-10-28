/**
 * Problem: Sort Array By Parity
 * Difficulty: Easy
 * Runtime: 80 ms
 * Date: 2019/10/28
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let i = 0
  let j = A.length - 1
  while (i < j) {
    const left = A[i]
    const right = A[j]
    if (left % 2 === 0 && right % 2 === 0) {
      i += 1
    } else if (right % 2 === 0) {
      ;[A[i], A[j]] = [A[j], A[i]]
      j -= 1
    } else if (left % 2 === 0) {
      i += 1
    } else {
      j -= 1
    }
  }
  return A
}
