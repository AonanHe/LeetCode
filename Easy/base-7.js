/**
 * Problem: Base 7
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2018/12/21
 * Author: Aonan He
 */
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  let n = Math.abs(num)
  if (!n) return '0'
  let res = ''
  while (n) {
    res = (n % 7) + res
    n = Math.floor(n / 7)
  }
  if (num < 0) res = '-' + res
  return res
}
