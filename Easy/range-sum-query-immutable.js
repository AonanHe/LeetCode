/**
 * Problem: Range Sum Query - Immutable
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2018/05/21
 * Author: Aonan He
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sum = []
    for (let i = 0; i < nums.length; i++) {
        this.sum[i] = (this.sum[i - 1] || 0) + nums[i]
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return (this.sum[j] || 0) - (this.sum[i - 1] || 0)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */


