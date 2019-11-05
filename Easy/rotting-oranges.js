/**
 * Problem: Rotting Oranges
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/11/05
 * Author: Aonan He
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const dirX = [0, 0, 1, -1]
  const dirY = [-1, 1, 0, 0]
  const queue = []
  let ans = 0
  const N = grid.length
  const M = grid[0].length
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0])
      }
    }
  }
  while (queue.length) {
    const [x, y, time] = queue.shift()
    for (let i = 0; i < 4; i++) {
      const nx = x + dirX[i]
      const ny = y + dirY[i]
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue
      if (grid[nx][ny] === 1) {
        grid[nx][ny] = 2
        queue.push([nx, ny, time + 1])
        ans = Math.max(ans, time + 1)
      }
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === 1) {
        return -1
      }
    }
  }
  return ans
}
