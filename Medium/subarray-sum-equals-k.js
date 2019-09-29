/**
 * Problem: Subarray Sum Equals K
 * Difficulty: Medium
 * Runtime: 96 ms
 * Date: 2019/09/29
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let sum = 0
  let count = 0
  const dict = {}
  dict[0] = 1
  nums.forEach((x) => {
    sum += x
    count += dict[sum - k] ? dict[sum - k] : 0
    dict[sum] = dict[sum] ? dict[sum] + 1 : 1
  })
  return count
}
