/**
 * Problem: Flipping an Image
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2019/10/25
 * Author: Aonan He
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  const n = A.length - 1
  const m = A[0].length - 1
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m / 2; j++) {
      ;[A[i][j], A[i][m - j]] = [A[i][m - j], A[i][j]]
    }
    for (let j = 0; j <= m; j++) {
      A[i][j] = A[i][j] ? 0 : 1
    }
  }
  return A
}
