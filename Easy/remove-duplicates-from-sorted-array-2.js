/**
 * Problem: Remove Duplicates from Sorted Array
 * Difficulty: Easy
 * Runtime: 128 ms
 * Date: 2018/04/01
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums.length) { return 0 }
    let res = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[res] !== nums[i]) {
            res += 1
            nums[res] = nums[i]
        }
    }
    return res + 1
};
