/**
 * Problem: Goat Latin
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2019/10/24
 * Author: Aonan He
 */
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  const content = S.split(' ')
  const ans = []
  content.forEach((word, index) => {
    if (['a', 'e', 'i', 'o', 'u'].indexOf(word[0].toLowerCase()) !== -1) {
      ans.push(word + 'ma' + 'a'.repeat(index + 1))
    } else {
      ans.push(
        word.slice(1, word.length) + word[0] + 'ma' + 'a'.repeat(index + 1)
      )
    }
  })
  return ans.join(' ')
}
