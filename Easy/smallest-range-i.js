/**
 * Problem: Smallest Range I
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2019/10/28
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  return Math.max(0, Math.max(...A) - Math.min(...A) - 2 * K)
}
