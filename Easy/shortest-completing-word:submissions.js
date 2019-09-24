/**
 * Problem: Shortest Completing Word
 * Difficulty: Easy
 * Runtime: 80 ms
 * Date: 2019/01/08
 * Author: Aonan He
 */
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
function check(str, letters) {
  const arr = str.split('')
  for (let i = 0; i < letters.length; i++) {
    const index = arr.indexOf(letters[i])
    if (index === -1) {
      return false
    }
    arr.splice(index, 1)
  }
  return true
}
var shortestCompletingWord = function(licensePlate, words) {
  const letters = []
  licensePlate.split('').forEach((ch) => {
    const temp = ch.toLocaleLowerCase()
    if (temp >= 'a' && temp <= 'z') {
      letters.push(temp)
    }
  })
  let result = ''
  let length = Number.MAX_VALUE
  words.forEach((word) => {
    if (word.length < length && check(word, letters)) {
      result = word
      length = word.length
    }
  })
  return result
}
