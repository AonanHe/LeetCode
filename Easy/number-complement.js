/**
 * Problem: Number Complement
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2018/12/19
 * Author: Aonan He
 */
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  const a = num.toString(2).split('')
  for (let i = 0; i < a.length; i++) {
    a[i] = a[i] === '0' ? '1' : '0'
  }
  return parseInt(a.join(''), 2)
}
