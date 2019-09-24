/**
 * Problem: Reverse String II
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2019/04/16
 * Author: Aonan He
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let result = ''
  const len = s.length
  for (let i = 0; i < len; i += 2 * k) {
    const left = s
      .slice(i, i + k)
      .split('')
      .reverse()
      .join('')
    const right = s.slice(i + k, i + 2 * k)
    result = result + left + right
  }
  return result
}
