/**
 * Problem: Missing Number
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2018/05/16
 * Author: Aonan He
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const dict = []
    for (let i = 0; i < nums.length; i++) {
        dict[nums[i]] = true
    }
    for (let i = 0; i <= nums.length; i++) {
        if (dict[i] === undefined) {
            return i
        }
    }
};
