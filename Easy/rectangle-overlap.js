/**
 * Problem: Rectangle Overlap
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2019/10/25
 * Author: Aonan He
 */
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  // line (a, b) not intersect line (c, d), when a >= d or b <= c
  const [Ax1, Ay1, Ax2, Ay2] = rec1
  const [Bx1, By1, Bx2, By2] = rec2
  return !(Ay1 >= By2 || Ay2 <= By1 || Ax1 >= Bx2 || Ax2 <= Bx1)
}
