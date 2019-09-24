/**
 * Problem: Number of Boomerangs
 * Difficulty: Easy
 * Runtime: 928 ms
 * Date: 2018/12/12
 * Author: Aonan He
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  const n = points.length
  let sum = 0
  for (let i = 0; i < n; i++) {
    const count = {}
    for (let j = 0; j < n; j++) {
      const dis =
        Math.pow(points[i][0] - points[j][0], 2) +
        Math.pow(points[i][1] - points[j][1], 2)
      count[dis] = count[dis] ? count[dis] + 1 : 1
    }
    const keys = Object.keys(count)
    keys.forEach((dis) => {
      if (count[dis] === 2) {
        sum += 2
      }
      if (count[dis] === 3) {
        sum += 6
      }
      if (count[dis] === 4) {
        sum += 12
      }
    })
  }
  return sum
}
