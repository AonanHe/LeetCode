/**
 * Problem: Jewels and Stones
 * Difficulty: Easy
 * Runtime: 92 ms
 * Date: 2019/10/22
 * Author: Aonan He
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const count = {}
  for (let i = 0; i < S.length; i++) {
    count[S[i]] = (count[S[i]] || 0) + 1
  }
  let ans = 0
  for (let i = 0; i < J.length; i++) {
    ans += count[J[i]] || 0
  }
  return ans
}
