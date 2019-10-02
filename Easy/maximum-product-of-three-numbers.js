/**
 * Problem: Maximum Product of Three Numbers
 * Difficulty: Easy
 * Runtime: 100 ms
 * Date: 2019/10/01
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((a, b) => b - a)
  const len = nums.length
  return Math.max(
    nums[0] * nums[1] * nums[2],
    nums[0] * nums[len - 1] * nums[len - 2]
  )
}
