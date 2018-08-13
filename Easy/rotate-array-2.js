/**
 * Problem: Rotate Array
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2018/04/30
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const last = nums.splice(nums.length - k, k)
    nums.unshift(...last)
};