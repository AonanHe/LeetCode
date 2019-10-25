/**
 * Problem: Buddy Strings
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/10/25
 * Author: Aonan He
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  const lenA = A.length
  const lenB = B.length
  if (lenA !== lenB) return false
  if (A === B) {
    if (new Set(A).size < lenA) return true
    return false
  }
  const diff = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      diff.push(i)
    }
  }
  if (diff.length !== 2) return false
  return A[diff[0]] === B[diff[1]] && A[diff[1]] === B[diff[0]]
}
