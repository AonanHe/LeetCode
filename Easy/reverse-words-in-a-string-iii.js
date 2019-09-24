/**
 * Problem: Reverse Words in a String III
 * Difficulty: Easy
 * Runtime: 88 ms
 * Date: 2018/12/30
 * Author: Aonan He
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s
    .split(' ')
    .map((word) =>
      word
        .split('')
        .reverse()
        .join('')
    )
    .join(' ')
}
