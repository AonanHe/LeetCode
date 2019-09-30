/**
 * Problem: Longest Harmonious Subsequence
 * Difficulty: Easy
 * Runtime: 108 ms
 * Date: 2019/09/30
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  nums.sort((a, b) => a - b)
  let result = 0
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    while (nums[j] - nums[i] > 1) {
      i += 1
    }
    if (nums[j] - nums[i] === 1) {
      result = Math.max(result, j - i + 1)
    }
  }
  return result
}
