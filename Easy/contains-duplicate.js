/**
 * Problem: Contains Duplicate
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2018/05/07
 * Author: Aonan He
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const dict = {}
    for (let i = 0; i < nums.length; i++) {
        if (!dict[nums[i]]) {
            dict[nums[i]] = true
        } else {
            return true
        }
    }
    return false
};
