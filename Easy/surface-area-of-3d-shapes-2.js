/**
 * Problem: Surface Area of 3D Shapes
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2019/10/27
 * Author: Aonan He
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  const N = grid.length
  let ans = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j]) {
        ans += grid[i][j] * 4 + 2
        if (i > 0) {
          ans -= Math.min(grid[i - 1][j], grid[i][j]) * 2
        }
        if (j > 0) ans -= Math.min(grid[i][j - 1], grid[i][j]) * 2
      }
    }
  }
  return ans
}
