/**
 * Problem: Remove All Adjacent Duplicates In String
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/11/06
 * Author: Aonan He
 */
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  const stack = []
  for (let ch of S) {
    if (!stack.length || stack[stack.length - 1] !== ch) {
      stack.push(ch)
    } else {
      stack.pop()
    }
  }
  return stack.join('')
}
