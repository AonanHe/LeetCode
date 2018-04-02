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
    let left = 0,
        right = nums.length - 1,
        mid = 0
    while (left <= right) {
        mid = (left + right) >> 1
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            return mid
        }
    }
    return left
};
