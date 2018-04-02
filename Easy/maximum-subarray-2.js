/**
 * Problem: Maximum Subarray
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/04/02
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0]
    let maxSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (sum > 0) {
            sum += nums[i]
        } else {
            sum = nums[i]
        }
        if (maxSum < sum) {
            maxSum =  sum
        }
    }
    return maxSum
};
