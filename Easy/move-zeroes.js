/**
 * Problem: Move Zeroes
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2018/05/18
 * Author: Aonan He
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const len = nums.length
    let i = 0
    let zeroTotal = 0
    while (i < len - zeroTotal) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
            zeroTotal ++
        } else {
            i ++
        }
    }
};