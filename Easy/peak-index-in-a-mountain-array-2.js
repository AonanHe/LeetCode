/**
 * Problem: Peak Index in a Mountain Array
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2019/10/25
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let left = 0
  let right = A.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (A[mid] > A[mid + 1]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}
