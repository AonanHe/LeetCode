/**
 * Problem: Repeated Substring Pattern
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2018/12/17
 * Author: Aonan He
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const p = []
  const len = s.length
  if (!len) return false
  let j = -1
  p[0] = -1
  for (let i = 1; i < s.length; i++) {
    while (j >= 0 && s[j + 1] !== s[i]) j = p[j]
    if (s[j + 1] === s[i]) j++
    p[i] = j
  }
  const n = len - p[len - 1] - 1
  if (len === n) return false
  return len % n === 0
}
