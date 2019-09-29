/**
 * Problem: Array Partition I
 * Difficulty: Easy
 * Runtime: 112 ms
 * Date: 2019/09/29
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b)
  let i = 0
  let sum = 0
  while (i < nums.length) {
    sum += nums[i]
    i += 2
  }
  return sum
}
