/**
 * Problem: Set Mismatch
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2019/10/05
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const count = {}
  const res = []
  nums.forEach((x) => {
    count[x] = (count[x] || 0) + 1
    if (count[x] === 2) {
      res.push(x)
    }
  })
  for (let i = 1; i <= nums.length; i++) {
    if (!count[i]) {
      res.push(i)
      break
    }
  }
  return res
}
