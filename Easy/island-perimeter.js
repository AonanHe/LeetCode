/**
 * Problem: Island Perimeter
 * Difficulty: Easy
 * Runtime: 248 ms
 * Date: 2018/12/18
 * Author: Aonan He
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  const dirX = [0, 0, -1, 1]
  const dirY = [-1, 1, 0, 0]
  let perimeter = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        for (let k = 0; k < dirX.length; k++) {
          const x = i + dirX[k]
          const y = j + dirY[k]
          if (
            x < 0 ||
            y < 0 ||
            x >= grid.length ||
            y >= grid[i].length ||
            !grid[x][y]
          ) {
            perimeter += 1
          }
        }
      }
    }
  }
  return perimeter
}
