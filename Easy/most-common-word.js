/**
 * Problem: Most Common Word
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2019/10/24
 * Author: Aonan He
 */
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const arr = paragraph.toLowerCase().match(/\w+/g)
  const set = new Set()
  banned.forEach(word => {
    set.add(word)
  })
  const count = {}
  let ans = ''
  let max = 0
  arr.forEach(word => {
    if (!set.has(word)) {
      count[word] = (count[word] || 0) + 1
      if (count[word] > max) {
        max = count[word]
        ans = word
      }
    }
  })
  return ans
}
