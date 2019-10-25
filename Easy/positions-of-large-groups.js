/**
 * Problem: Positions of Large Groups
 * Difficulty: Easy
 * Runtime: 104 ms
 * Date: 2019/10/25
 * Author: Aonan He
 */
/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  let left = 0
  const ans = []
  for (let i = 1; i < S.length; i++) {
    if (S[i] !== S[i - 1]) {
      if (i - left >= 3) {
        ans.push([left, i - 1])
      }
      left = i
    }
  }
  if (S.length - left >= 3) {
    ans.push([left, S.length - 1])
  }
  return ans
}
