/**
 * Problem: Largest Number At Least Twice of Others
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2019/01/08
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = 0
  let index = 0
  nums.forEach((x, i) => {
    if (x > max) {
      max = x
      index = i
    }
  })
  const flag = nums.every((x, i) => {
    if (i === index || x === 0) return true
    if (max / x >= 2) return true
    return false
  })
  return flag ? index : -1
}
