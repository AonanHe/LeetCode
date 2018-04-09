/**
 * Problem: Merge Sorted Array
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2018/04/09
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
    let i = m - 1,
        j = n - 1,
        k = n + m - 1
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--]
        } else {
            nums1[k--] = nums2[j--]
        }
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--]
    }
};