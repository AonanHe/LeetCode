/**
 * Problem: Intersection of Two Arrays II
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2018/05/23
 * Author: Aonan He
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map()
    const res = []
    for (let i = 0; i < nums1.length; i++) {
        const x = nums1[i]
        const total = map.get(x) || 0
        map.set(x, total + 1)
    }
    for (let i = 0; i < nums2.length; i++) {
        const x = nums2[i]
        const total = map.get(x)
        if (map.has(x)) {
            map.set(x, total - 1)
            res.push(x)
            if (total === 1) {
                map.delete(x)
            }
        }
    }
    return res
};
