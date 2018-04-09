/**
 * Problem: Merge Sorted Array
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/04/08
 * Author: Aonan He
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[i - m]
    }
    nums1.sort((a, b) => a - b)
};