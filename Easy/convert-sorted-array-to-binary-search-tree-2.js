/**
 * Problem: Convert Sorted Array to Binary Search Tree
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2018/04/13
 * Author: Aonan He
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function generate(left, right) {
        if (left > right) { return null }
        let mid = (left + right + 1) >> 1
        let p = new TreeNode(nums[mid])
        p.left = generate(left, mid - 1)
        p.right = generate(mid + 1, right)
        return p
    }
    return generate(0, nums.length - 1)
};