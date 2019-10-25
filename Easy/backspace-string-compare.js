/**
 * Problem: Backspace String Compare
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2019/10/25
 * Author: Aonan He
 */
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  function text(s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== '#') {
        stack.push(s[i])
      } else {
        stack.pop()
      }
    }
    return stack.join('')
  }
  return text(S) === text(T)
}
