/**
 * Problem: Delete Columns to Make Sorted
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/11/01
 * Author: Aonan He
 */
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  let count = 0
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length - 1; j++) {
      if (A[j][i] > A[j + 1][i]) {
        count += 1
        break
      }
    }
  }
  return count
}
