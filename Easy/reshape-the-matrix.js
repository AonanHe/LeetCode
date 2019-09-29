/**
 * Problem: Reshape the Matrix
 * Difficulty: Easy
 * Runtime: 84 ms
 * Date: 2019/09/29
 * Author: Aonan He
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  const matrix = []
  let row = 0
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (!matrix[row]) {
        matrix.push([])
      }
      matrix[row].push(nums[i][j])
      total += 1
      if (matrix[row].length === c) {
        row += 1
      }
    }
  }
  if (total !== r * c) {
    return nums
  }
  return matrix
}
