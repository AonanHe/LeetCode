/**
 * Problem: Projection Area of 3D Shapes
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2019/10/26
 * Author: Aonan He
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  const n = grid.length
  const m = grid[0].length
  let top = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j]) {
        top += 1
      }
    }
  }
  let front = 0
  for (let i = 0; i < m; i++) {
    let max = 0
    for (let j = 0; j < n; j++) {
      max = Math.max(max, grid[j][i])
    }
    front += max
  }
  let side = 0
  for (let i = 0; i < n; i++) {
    side += Math.max(...grid[i])
  }
  return top + front + side
}
