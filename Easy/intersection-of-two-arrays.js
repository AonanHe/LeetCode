/**
 * Problem: Intersection of Two Arrays
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2018/05/23
 * Author: Aonan He
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set = new Set()
    const res = []
    for (let i = 0; i < nums1.length; i++) {
        set.add(nums1[i])
    }
    for (let i = 0; i < nums2.length; i++) {
        const x = nums2[i]
        if (set.has(x)) {
            res.push(x)
            set.delete(x)
        }
    }
    return res
};
