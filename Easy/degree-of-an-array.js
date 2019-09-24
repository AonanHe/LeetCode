/**
 * Problem: Degree of an Array
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2019/01/03
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const dict = {}
  nums.forEach((x) => {
    dict[x] = x in dict ? dict[x] + 1 : 1
  })
  const arr = Object.keys(dict).map((item) => ({
    val: item,
    count: dict[item]
  }))
  arr.sort((a, b) => b.count - a.count)
  const max = arr[0].count
  let res = nums.length
  const left = {}
  const right = {}
  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] in left)) left[nums[i]] = i
    right[nums[i]] = i
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].count !== max) break
    const x = arr[i].val
    const diff = right[x] - left[x] + 1
    res = Math.min(res, diff)
  }
  return res
}
