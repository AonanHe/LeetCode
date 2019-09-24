/**
 * Problem: Longest Uncommon Subsequence I
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/01/12
 * Author: Aonan He
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  return a === b ? -1 : Math.max(a.length, b.length)
}
