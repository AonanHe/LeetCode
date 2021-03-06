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
    return nums.reduce((a, b) => a ^ b)
};