/**
 * Problem: K-diff Pairs in an Array
 * Difficulty: Easy
 * Runtime: 92 ms
 * Date: 2019/04/17
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (!nums.length || k < 0) return 0
  let result = 0
  if (k === 0) {
    const dict = {}
    for (let i = 0; i < nums.length; i++) {
      dict[nums[i]] = (dict[nums[i]] || 0) + 1
    }
    const keys = Object.keys(dict)
    for (let i = 0; i < keys.length; i++) {
      if (dict[keys[i]] > 1) {
        result += 1
      }
    }
    return result
  }
  const set = new Set(nums)
  nums = new Set(nums)
  const s = new Set(nums)
  for (let x of set) {
    if (set.has(x - k)) {
      result += 1
    }
  }
  return result
}
