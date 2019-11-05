/**
 * Problem: Valid Boomerang
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2019/11/05
 * Author: Aonan He
 */
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points
  return Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2 !== 0
}
