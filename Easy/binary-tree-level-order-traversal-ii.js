/**
 * Problem: Binary Tree Level Order Traversal II
 * Difficulty: Easy
 * Runtime: 56 ms
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    function dfs(p, depth) {
        if (!p) { return }
        if (!level[depth]) {
            level[depth] = [p.val]
        } else {
            level[depth].push(p.val)
        }
        dfs(p.left, depth + 1)
        dfs(p.right, depth + 1)
    }
    const level = []
    dfs(root, 0)
    return level.reverse()
};