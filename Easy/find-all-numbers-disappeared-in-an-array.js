/**
 * Problem: Find All Numbers Disappeared in an Array
 * Difficulty: Easy
 * Runtime: 120 ms
 * Date: 2018/12/12
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const res = []
  let i = 0
  while (i < nums.length) {
    while (nums[i] !== i + 1 && nums[i] !== -1) {
      const index = nums[i] - 1
      ;[nums[i], nums[index]] = [nums[index], nums[i]]
      if (nums[i] === nums[index]) {
        nums[i] = -1
      }
    }
    i += 1
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === -1) {
      res.push(i + 1)
    }
  }
  return res
}
