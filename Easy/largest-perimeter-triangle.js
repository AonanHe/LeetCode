/**
 * Problem: Largest Perimeter Triangle
 * Difficulty: Easy
 * Runtime: 104 ms
 * Date: 2019/11/03
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  A.sort((a, b) => b - a)
  for (let i = 2; i < A.length; i++) {
    const a = A[i - 2]
    const b = A[i - 1]
    const c = A[i]
    if (c + b > a) {
      return a + b + c
    }
  }
  return 0
}
