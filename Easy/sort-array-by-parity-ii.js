/**
 * Problem: Sort Array By Parity II
 * Difficulty: Easy
 * Runtime: 100 ms
 * Date: 2019/10/31
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  const ans = []
  let j = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      ans[j] = A[i]
      j += 2
    }
  }
  j = 1
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 1) {
      ans[j] = A[i]
      j += 2
    }
  }
  return ans
}
