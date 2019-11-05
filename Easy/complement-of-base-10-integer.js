/**
 * Problem: Complement of Base 10 Integer
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2019/11/05
 * Author: Aonan He
 */
/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  return parseInt(
    N.toString(2)
      .split('')
      .map(i => +!+i)
      .join(''),
    2
  )
}
