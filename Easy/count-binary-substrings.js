/**
 * Problem: Count Binary Substrings
 * Difficulty: Easy
 * Runtime: 80 ms
 * Date: 2019/10/22
 * Author: Aonan He
 */
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  const count = []
  let total = 1
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      count.push(total)
      total = 1
    } else {
      total += 1
    }
  }
  count.push(total)
  let ans = 0
  for (let i = 0; i < count.length - 1; i++) {
    ans += Math.min(count[i], count[i + 1])
  }
  return ans
}
