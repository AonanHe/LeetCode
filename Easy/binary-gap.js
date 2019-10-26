/**
 * Problem: Binary Gap
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2019/10/26
 * Author: Aonan He
 */
/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
  const binary = N.toString(2)
  const s = binary.slice(0, binary.lastIndexOf('1'))
  if (!s.length) return 0
  return Math.max(...s.split('1').map(item => item.length + 1))
}
