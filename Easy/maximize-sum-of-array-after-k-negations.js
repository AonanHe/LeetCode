/**
 * Problem: Maximize Sum Of Array After K Negations
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/11/05
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
  A.sort((a, b) => a - b)
  let i = 0
  while (i < A.length && K > 0 && A[i] < 0) {
    A[i] = -A[i]
    K -= 1
    i += 1
  }
  A.sort((a, b) => a - b)
  const sum = A.reduce((pre, cur) => pre + cur, 0)
  return K % 2 === 0 ? sum : sum - 2 * A[0]
}
