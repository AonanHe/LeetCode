/**
 * Problem: Fair Candy Swap
 * Difficulty: Easy
 * Runtime: 508 ms
 * Date: 2019/10/27
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  let sumA = 0
  for (let i = 0; i < A.length; i++) {
    sumA += A[i]
  }
  let sumB = 0
  for (let i = 0; i < B.length; i++) {
    sumB += B[i]
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let x = sumA - A[i] + B[j]
      let y = sumB - B[j] + A[i]
      if (x === y) return [A[i], B[j]]
    }
  }
}
