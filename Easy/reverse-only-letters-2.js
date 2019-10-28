/**
 * Problem: Reverse Only Letters
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2019/10/28
 * Author: Aonan He
 */
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let i = 0
  let j = S.length - 1
  const reg = new RegExp('[a-zA-Z]')
  const arr = S.split('')
  while (i < j) {
    while (!reg.test(arr[i])) i += 1
    while (!reg.test(arr[j])) j -= 1
    if (i < j) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      i += 1
      j -= 1
    }
  }
  return arr.join('')
}
