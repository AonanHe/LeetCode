/**
 * Problem: Non-decreasing Array
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/10/06
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let count = 0
  if (nums.length <= 1) return true
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      count += 1
      if (i - 2 >= 0 && nums[i - 2] > nums[i]) {
        nums[i] = nums[i - 1]
      } else {
        nums[i - 1] = nums[i]
      }
    }
    if (count > 1) return false
  }
  return count <= 1
}
