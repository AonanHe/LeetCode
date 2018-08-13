/**
 * Problem: Contains Duplicate II
 * Difficulty: Easy
 * Runtime: 1808 ms
 * Date: 2018/05/07
 * Author: Aonan He
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        const pos = nums.indexOf(nums[i], i + 1)
        if ((pos !== -1) && (Math.abs(pos - i) <= k)) {
            return true
        }
    }
    return false
};