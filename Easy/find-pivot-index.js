/**
 * Problem: Find Pivot Index
 * Difficulty: Easy
 * Runtime: 100 ms
 * Date: 2019/01/05
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const sum = []
  const len = nums.length
  nums.forEach((item, index) => {
    sum.push((sum[index - 1] || 0) + item)
  })
  for (let i = 0; i < nums.length; i++) {
    const left = sum[i] - nums[i]
    const right = sum[len - 1] - sum[i]
    if (left === right) {
      return i
    }
  }
  return -1
}
