/**
 * Problem: Longest Harmonious Subsequence
 * Difficulty: Easy
 * Runtime: 104 ms
 * Date: 2019/09/30
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const count = {}
  let ans = 0
  nums.forEach((x) => {
    count[x] = (count[x] || 0) + 1
  })
  nums.forEach((x) => {
    if (count[x + 1]) {
      ans = Math.max(ans, count[x] + count[x + 1])
    }
  })
  return ans
}
