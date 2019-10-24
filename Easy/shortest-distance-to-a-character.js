/**
 * Problem: Shortest Distance to a Character
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2019/10/24
 * Author: Aonan He
 */
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  const target = []
  const len = S.length
  for (let i = 0; i < len; i++) {
    if (S[i] === C) {
      target.push(i)
    }
  }
  const ans = []
  for (let i = 0; i < len; i++) {
    let min = len
    if (S[i] === C) {
      ans[i] = 0
      continue
    }
    for (let j = 0; j < target.length; j++) {
      const distance = Math.abs(target[j] - i)
      if (distance < min) {
        min = distance
      } else if (distance > min) {
        break
      }
    }
    ans[i] = min
  }
  return ans
}
