/**
 * Problem: Construct the Rectangle
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2018/12/19
 * Author: Aonan He
 */
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let w = Math.floor(Math.sqrt(area))
  while (area % w !== 0) {
    w -= 1
  }
  return [area / w, w]
}
