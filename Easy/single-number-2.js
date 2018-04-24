/**
 * Problem: Single Number
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2018/04/18
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] ^= nums[i - 1]
    }
    return nums[nums.length - 1]
};