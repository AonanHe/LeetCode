/**
 * Problem: Two Sum
 * Difficulty: Easy
 * Runtime: 172 ms
 * Date: 2018/03/31
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const index = {}
    for (let i = 0; i < nums.length; i++) {
        const x = target - nums[i]
        if (x in index) { return [i, index[x]] }
        index[nums[i]] = i
    }
    return []
};
