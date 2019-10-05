/**
 * Problem: Sum of Square Numbers
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2019/10/05
 * Author: Aonan He
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let i = 0
  let j = Math.floor(Math.sqrt(c))
  while (i <= j) {
    const sum = i * i + j * j
    if (sum > c) {
      j -= 1
    } else if (sum < c) {
      i += 1
    } else {
      return true
    }
  }
  return false
}
