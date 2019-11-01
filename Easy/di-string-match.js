/**
 * Problem: DI String Match
 * Difficulty: Easy
 * Runtime: 100 ms
 * Date: 2019/11/01
 * Author: Aonan He
 */
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let left = 0
  let right = S.length
  const ans = []
  for (let i = 0; i < S.length; i++) {
    if (S[i] === 'I') {
      ans.push(left)
      left += 1
    } else if (S[i] === 'D') {
      ans.push(right)
      right -= 1
    }
  }
  ans.push(left)
  return ans
}
