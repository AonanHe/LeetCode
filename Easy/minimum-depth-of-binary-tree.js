/**
 * Problem: Minimum Depth of Binary Tree
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2018/04/15
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
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) { return 0 }
    let left = minDepth(root.left)
    let right = minDepth(root.right)
    if (!left) { return right + 1 }
    if (!right) { return left + 1 }
    return Math.min(left, right) + 1
};