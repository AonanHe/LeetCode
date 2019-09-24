/**
 * Problem: To Lower Case
 * Difficulty: Easy
 * Runtime: 48 ms
 * Date: 2019/01/03
 * Author: Aonan He
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  const delta = 'a'.charCodeAt() - 'A'.charCodeAt()
  return str
    .split('')
    .map((ch) => {
      if (ch >= 'A' && ch <= 'Z') {
        return String.fromCharCode(ch.charCodeAt() + delta)
      }
      return ch
    })
    .join('')
}
