/**
 * Problem: Longest Word in Dictionary
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2019/10/22
 * Author: Aonan He
 */
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  words.sort()
  const set = new Set()
  let ans = ''
  for (let word of words) {
    if (word.length === 1 || set.has(word.substr(0, word.length - 1))) {
      if (word.length > ans.length) {
        ans = word
      }
      set.add(word)
    }
  }
  return ans
}
