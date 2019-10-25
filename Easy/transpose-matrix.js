/**
 * Problem: Transpose Matrix
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2019/10/25
 * Author: Aonan He
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  const n = A.length
  const m = A[0].length
  const ans = []
  for (let i = 0; i < m; i++) {
    ans.push([])
    for (let j = 0; j < n; j++) {
      ans[i].push(A[j][i])
    }
  }
  return ans
}
