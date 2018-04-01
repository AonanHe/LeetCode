/**
 * Problem: Remove Duplicates from Sorted Array
 * Difficulty: Easy
 * Runtime: 232 ms
 * Date: 2018/04/01
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    while (i < nums.length - 1) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1)
        } else {
            i += 1
        }
    }
    return nums.length
};

