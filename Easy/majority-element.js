/**
 * Problem: Majority Element
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2018/04/24
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const dict = {}
    const majority = Math.floor(nums.length / 2)
    for (let i = 0; i < nums.length; i++) {
        if (dict[nums[i]] === undefined) {
            dict[nums[i]] = 1
        } else {
            ++ dict[nums[i]]
        }
        if (dict[nums[i]] > majority) {
            return nums[i]
        }
    }
};