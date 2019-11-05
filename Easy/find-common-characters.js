/**
 * Problem: Find Common Characters
 * Difficulty: Easy
 * Runtime: 88 ms
 * Date: 2019/11/05
 * Author: Aonan He
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  const count = []
  const ans = []
  for (let i = 0; i < A.length; i++) {
    count[i] = {}
    for (let j = 0; j < A[i].length; j++) {
      const ch = A[i][j]
      count[i][ch] = (count[i][ch] || 0) + 1
    }
  }
  for (let i = 0; i < A[0].length; i++) {
    if (check(A[0][i])) {
      ans.push(A[0][i])
    }
  }
  return ans
  function check(ch) {
    for (let i = 0; i < A.length; i++) {
      if (count[i][ch] > 0) {
        count[i][ch] -= 1
      } else {
        return false
      }
    }
    return true
  }
}
