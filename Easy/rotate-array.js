/**
 * Problem: Rotate Array
 * Difficulty: Easy
 * Runtime: 280 ms
 * Date: 2018/04/30
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const step = k % nums.length
    for (let i = 0; i < step; i++) {
        const x = nums[nums.length - 1]
        for (let j = nums.length - 1; j > 0; j--) {
            nums[j] = nums[j - 1]
        }
        nums[0] = x
    }
};