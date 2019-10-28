/**
 * Problem: Reverse Only Letters
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2019/10/28
 * Author: Aonan He
 */
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  const arr = S.split('')
  const reg = new RegExp('[a-zA-Z]')
  const letter = arr.filter(ch => reg.test(ch))
  letter.reverse()
  let j = 0
  for (let i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      arr[i] = letter[j]
      j += 1
    }
  }
  return arr.join('')
}
