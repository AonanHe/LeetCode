/**
 * Problem: Shortest Distance to a Character
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/10/24
 * Author: Aonan He
 */
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  let pivot = -Infinity
  const ans = []
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      pivot = i
    }
    ans[i] = i - pivot
  }
  pivot = Infinity
  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] === C) {
      pivot = i
    }
    ans[i] = Math.min(ans[i], pivot - i)
  }
  return ans
}
