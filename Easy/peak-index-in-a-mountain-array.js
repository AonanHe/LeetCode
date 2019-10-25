/**
 * Problem: Peak Index in a Mountain Array
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2019/10/25
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] > A[i]) {
      return i - 1
    }
  }
}
