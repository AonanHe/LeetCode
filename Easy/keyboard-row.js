/**
 * Problem: Keyboard Row
 * Difficulty: Easy
 * Runtime: 48 ms
 * Date: 2018/12/21
 * Author: Aonan He
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const row1 = 'QWERTYUIOP'
  const row2 = 'ASDFGHJKL'
  const row3 = 'ZXCVBNM'
  const dict = {}
  function alphabet(s, row) {
    s.split('').forEach((ch) => {
      dict[ch] = row
    })
  }
  alphabet(row1, 1)
  alphabet(row2, 2)
  alphabet(row3, 3)
  function check(s) {
    const row = dict[s[0].toUpperCase()]
    for (let i = 0; i < s.length; i++) {
      if (dict[s[i].toUpperCase()] !== row) {
        return false
      }
    }
    return true
  }
  return words.filter((s) => check(s))
}
