/**
 * Problem: Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let res = true
    function dfs(p) {
        if (!p) { return 0 }
        let left = dfs(p.left)
        let right = dfs(p.right)
        if (Math.abs(left - right) > 1) {
            res = false
        }
        return Math.max(left, right) + 1
    }
    dfs(root)
    return res
};