/**
 * Problem: Valid Palindrome II
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2019/10/06
 * Author: Aonan He
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  function isPalindrome(i, j) {
    while (i < j) {
      if (s[i] !== s[j]) {
        return false
      }
      i += 1
      j -= 1
    }
    return true
  }
  let i = 0
  let j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) {
      return isPalindrome(i + 1, j) || isPalindrome(i, j - 1)
    }
    i += 1
    j -= 1
  }
  return true
}
