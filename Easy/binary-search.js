/**
 * Problem: Binary Search
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2019/01/02
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return nums[left] === target ? left : -1
}
