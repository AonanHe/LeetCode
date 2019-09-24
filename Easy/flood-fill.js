/**
 * Problem: Flood Fill
 * Difficulty: Easy
 * Runtime: 96 ms
 * Date: 2019/01/06
 * Author: Aonan He
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const dirX = [0, 0, -1, 1]
  const dirY = [-1, 1, 0, 0]
  const n = image.length
  const m = image[0].length
  const oldColor = image[sr][sc]
  if (oldColor === newColor) return image
  function dfs(x, y) {
    image[x][y] = newColor
    for (let i = 0; i < 4; i++) {
      const nextX = x + dirX[i]
      const nextY = y + dirY[i]
      if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) continue
      if (image[nextX][nextY] === oldColor) {
        dfs(nextX, nextY)
      }
    }
  }
  dfs(sr, sc)
  return image
}
