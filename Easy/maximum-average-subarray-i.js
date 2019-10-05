/**
 * Problem: Maximum Average Subarray I
 * Difficulty: Easy
 * Runtime: 100 ms
 * Date: 2019/10/05
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  const sum = []
  if (!nums.length) return 0
  let result = -Infinity
  for (let i = 0; i < nums.length; i++) {
    sum[i] = (sum[i - 1] || 0) + nums[i]
    if (i >= k - 1) {
      result = Math.max(result, (sum[i] - (sum[i - k] || 0)) / k)
    }
  }
  return result
}
