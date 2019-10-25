/**
 * Problem: Magic Squares In Grid
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2019/10/25
 * Author: Aonan He
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  function isMagic(x, y) {
    const dirX = [1, 1]
    const dirY = [1, -1]
    // \
    let sum = 0
    for (let i = 0; i < 3; i++) {
      const nx = x + dirX[0] * i
      const ny = y + dirY[0] * i
      sum += grid[nx][ny]
    }
    let target = sum
    // /
    sum = 0
    for (let i = 0; i < 3; i++) {
      const nx = x + dirX[1] * i
      const ny = y + 2 + dirY[1] * i
      sum += grid[nx][ny]
    }
    if (target !== sum) return false
    // row and 1-9
    const digits = {}
    for (let i = x; i < x + 3; i++) {
      sum = 0
      for (let j = y; j < y + 3; j++) {
        sum += grid[i][j]
        digits[grid[i][j]] = true
      }
      if (target !== sum) return false
    }
    for (let i = 1; i <= 9; i++) {
      if (!digits[i]) return false
    }
    // column
    for (let i = y; i < y + 3; i++) {
      sum = 0
      for (let j = x; j < x + 3; j++) {
        sum += grid[j][i]
      }
      if (target !== sum) return false
    }
    return true
  }
  let ans = 0
  const n = grid.length
  const m = grid[0].length
  for (let i = 0; i <= n - 3; i++) {
    for (let j = 0; j <= m - 3; j++) {
      if (isMagic(i, j)) ans += 1
    }
  }
  return ans
}
