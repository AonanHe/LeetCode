/**
 * Problem: Detect Capital
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/12/22
 * Author: Aonan He
 */
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  function isUpperCase(ch) {
    return ch === ch.toUpperCase()
  }
  const a = word.split('')
  return (
    a.every((ch) => isUpperCase(ch)) ||
    a.every((ch) => !isUpperCase(ch)) ||
    a.every(
      (ch, i) => (i === 0 && isUpperCase(ch)) || (i > 0 && !isUpperCase(ch))
    )
  )
}
