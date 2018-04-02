/**
 * Problem: Maximum Subarray
 * Difficulty: Easy
 * Runtime: 292 ms
 * Date: 2018/04/02
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const sums = []
    let maxSum = -Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        sums[i] = (sums[i - 1] || 0) + nums[i]
        for (let j = 0; j <= i; j++) {
            maxSum = Math.max(maxSum, sums[i] - sums[j] + nums[j])
        }
    }
    return maxSum
};
