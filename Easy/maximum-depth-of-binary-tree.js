/**
 * Problem: Maximum Depth of Binary Tree
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2018/04/10
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
var maxDepth = function(root) {
    function dfs(p, depth) {
        if (!p) { return }
        res = Math.max(res, depth)
        dfs(p.left, depth + 1)
        dfs(p.right, depth + 1)
    }
    let res = 0
    dfs(root, 1)
    return res
};
