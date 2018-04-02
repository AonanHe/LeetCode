/**
 * Problem: Search Insert Position
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2018/04/02
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (target < nums[0]) { return 0 }
  if (nums[nums.length - 1] < target) { return nums.length }
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
          return i
      } else if ((nums[i] < target) && (target < nums[i + 1])) {
          return i + 1
      }
  }
};
