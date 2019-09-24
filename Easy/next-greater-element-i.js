/**
 * Problem: Next Greater Element I
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/12/20
 * Author: Aonan He
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const res = []
  nums1.forEach((x) => {
    const pos = nums2.indexOf(x)
    let max = -1
    for (let i = pos; i < nums2.length; i++) {
      if (nums2[i] > x) {
        max = nums2[i]
        break
      }
    }
    res.push(max)
  })
  return res
}
