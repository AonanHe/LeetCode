/**
 * Problem: Kth Largest Element in a Stream
 * Difficulty: Easy
 * Runtime: 140 ms
 * Date: 2018/12/31
 * Author: Aonan He
 */
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k
  this.nums = nums
  this.nums.sort((a, b) => b - a)
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  const index = search(this.nums, val)
  this.nums.splice(index, 0, val)
  return this.nums[this.k - 1]
}

function search(arr, val) {
  let left = 0
  let right = arr.length
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] < val) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */
