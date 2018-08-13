/**
 * Problem: Rotate Array
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2018/04/30
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    function reverse(left, right) {
        let i = left,
            j = right
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left ++
            right --
        }
    }
    const step = k % nums.length
    const n = nums.length
    reverse(0, n - step - 1)
    reverse(n - step, n - 1)
    reverse(0, n - 1)
};