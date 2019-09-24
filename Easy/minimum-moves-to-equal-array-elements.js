/**
 * Problem: Minimum Moves to Equal Array Elements
 * Difficulty: Easy
 * Runtime: 116 ms
 * Date: 2018/12/16
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  let res = 0
  if (!nums.length) return res
  nums.sort((a, b) => b - a)
  let min = nums[nums.length - 1]
  nums.forEach((x) => {
    const max = res + x
    const delta = max - min
    res += delta
    min = max
  })
  return res
}
