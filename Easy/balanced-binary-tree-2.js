/**
 * Problem: Balanced Binary Tree
 * Difficulty: Easy
 * Runtime: 72 ms
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
    const SYMBOL = -1
    function dfs(p) {
        if (!p) { return 0 }
        let left = dfs(p.left)
        let right = dfs(p.right)
        if (left === SYMBOL || right === SYMBOL || Math.abs(left - right) > 1) { return SYMBOL }
        return Math.max(left, right) + 1
    }
    return dfs(root) !== SYMBOL
};