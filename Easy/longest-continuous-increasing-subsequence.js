/**
 * Problem: Longest Continuous Increasing Subsequence
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2019/10/06
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (!nums.length) return 0
  let ans = 1
  const f = []
  f.push(1)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      f[i] = f[i - 1] + 1
    } else {
      f[i] = 1
    }
    ans = Math.max(ans, f[i])
  }
  return ans
}
