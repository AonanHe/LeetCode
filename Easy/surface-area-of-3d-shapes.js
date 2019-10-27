/**
 * Problem: Surface Area of 3D Shapes
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2019/10/27
 * Author: Aonan He
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  const dirX = [-1, 1, 0, 0]
  const dirY = [0, 0, -1, 1]
  const N = grid.length
  let ans = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j]) {
        ans += 2
        for (let k = 0; k < 4; k++) {
          const nx = i + dirX[k]
          const ny = j + dirY[k]
          let count = 0
          if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
            count = grid[nx][ny]
          }
          ans += Math.max(grid[i][j] - count, 0)
        }
      }
    }
  }
  return ans
}
