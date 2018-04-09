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
    const res = []
    let i = 0, j = 0
    while (i < m) {
        if (j < n && nums1[i] > nums2[j]) {
            res.push(nums2[j])
            j += 1
        } else {
            res.push(nums1[i])
            i += 1
        }
    }
    for (; j < n; j++) {
        res.push(nums2[j])
    }
    for (i = 0; i < m + n; i++) {
        nums1[i] = res[i]
    }
};