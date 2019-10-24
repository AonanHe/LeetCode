/**
 * Problem: Largest Triangle Area
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2019/10/24
 * Author: Aonan He
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
  function area(ax, ay, bx, by, cx, cy) {
    return Math.abs((ax * (by - cy) + bx * (cy - ay) + cx * (ay - by)) / 2)
  }
  let ans = 0
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        const [ax, ay] = points[i]
        const [bx, by] = points[j]
        const [cx, cy] = points[k]
        ans = Math.max(ans, area(ax, ay, bx, by, cx, cy))
      }
    }
  }
  return ans
}
