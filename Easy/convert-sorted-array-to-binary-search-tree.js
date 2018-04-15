/**
 * Problem: Convert Sorted Array to Binary Search Tree
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2018/04/12
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
    function generate(left, right, p) {
        if (left < 0 || right < 0 || left > right) { return null }
        const mid = (left + right + 1) >> 1
        p.left = generate(left, mid - 1, new TreeNode(0))
        p.right = generate(mid + 1, right, new TreeNode(0))
        p.val = nums[mid]
        return p
    }
    const bst = generate(0, nums.length - 1, new TreeNode(0))
    return bst
};