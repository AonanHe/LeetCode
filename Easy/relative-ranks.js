/**
 * Problem: Relative Ranks
 * Difficulty: Easy
 * Runtime: 88 ms
 * Date: 2018/12/21
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  const dict = {}
  const a = [...nums].sort((a, b) => b - a)
  a.forEach((x, index) => {
    dict[x] =
      index === 0
        ? 'Gold Medal'
        : index === 1
        ? 'Silver Medal'
        : index === 2
        ? 'Bronze Medal'
        : (index + 1).toString()
  })
  return nums.map((x) => dict[x])
}
