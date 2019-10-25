/**
 * Problem: Flipping an Image
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2019/10/25
 * Author: Aonan He
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  return A.map(row => row.reverse().map(i => (i ? 0 : 1)))
}
