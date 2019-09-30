/**
 * Problem: Shortest Unsorted Continuous Subarray
 * Difficulty: Easy
 * Runtime: 104 ms
 * Date: 2019/09/30
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  const arr = Array.from(nums).sort((a, b) => a - b)
  let left = nums.length - 1
  let right = 0
  nums.forEach((x, i) => {
    if (x !== arr[i]) {
      left = Math.min(left, i)
      right = Math.max(right, i)
    }
  })
  if (left >= right) return 0
  return right - left + 1
}
