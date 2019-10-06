/**
 * Problem: Image Smoother
 * Difficulty: Easy
 * Runtime: 156 ms
 * Date: 2019/10/06
 * Author: Aonan He
 */
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  const dirX = [0, -1, -1, -1, 0, 0, 1, 1, 1]
  const dirY = [0, -1, 0, 1, -1, 1, -1, 0, 1]
  const res = []
  for (let i = 0; i < M.length; i++) {
    res.push([])
    for (let j = 0; j < M[i].length; j++) {
      let sum = 0
      let count = 0
      for (let k = 0; k < 9; k++) {
        const x = i + dirX[k]
        const y = j + dirY[k]
        if (M[x] !== undefined && M[x][y] !== undefined) {
          sum += M[x][y]
          count += 1
        }
      }
      res[i].push(Math.floor(sum / count))
    }
  }
  return res
}
