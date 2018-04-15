/**
 * Problem: Balanced Binary Tree
 * Difficulty: Easy
 * Runtime: 92 ms
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function maxDepth(p) {
        if (!p) { return 0 }
        let left = maxDepth(p.left)
        let right = maxDepth(p.right)
        return Math.max(left, right) + 1
    }
    function dfs(p) {
        if (!p) { return true }
        let left = maxDepth(p.left)
        let right = maxDepth(p.right)
        if (Math.abs(left - right) > 1) {
            return false
        }
        return dfs(p.left) && dfs(p.right)
    }
    return dfs(root)
};