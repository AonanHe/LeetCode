/**
 * Problem: Path Sum
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) { return false }
    let x = sum - root.val
    let left = false,
        right = false
    if (!root.left && !root.right && x === 0) {
        return true
    }
    if (root.left) {
        left = hasPathSum(root.left, x)
    }
    if (root.right) {
        right = hasPathSum(root.right, x)
    }
    return left || right
};