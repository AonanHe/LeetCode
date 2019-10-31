/**
 * Problem: Long Pressed Name
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2019/10/31
 * Author: Aonan He
 */
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let i = 0
  let j = 0
  const lenN = name.length
  const lenT = typed.length
  while (i < lenN && j < lenT) {
    if (name[i] === typed[j]) {
      i += 1
      j += 1
    } else if (j > 0 && typed[j] === typed[j - 1]) {
      j += 1
    } else {
      return false
    }
  }
  while (j < lenT) {
    if (typed[j - 1] === typed[j]) {
      j += 1
    } else {
      return false
    }
  }
  return i === lenN && j === lenT
}
