/**
 * Problem: Is Subsequence
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2019/09/26
 * Author: Aonan He
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  const lengthS = s.length
  const lengthT = t.length
  if (!lengthS) return true
  if (lengthS > lengthT) return false
  let j = 0
  for (let i = 0; i < lengthT; i++) {
    if (t[i] === s[j]) {
      j += 1
    }
    if (j === lengthS) return true
  }
  return false
}
