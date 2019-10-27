/**
 * Problem: Fair Candy Swap
 * Difficulty: Easy
 * Runtime: 88 ms
 * Date: 2019/10/27
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  const sumA = A.reduce((pre, cur) => pre + cur)
  const sumB = B.reduce((pre, cur) => pre + cur)
  const setB = new Set(B)
  const diff = sumA - sumB
  for (let i = 0; i < A.length; i++) {
    const x = A[i] - diff / 2
    if (setB.has(x)) {
      return [A[i], x]
    }
  }
}
