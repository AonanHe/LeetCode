/**
 * Problem: Binary Tree Paths
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/05/13
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) { return [] }
    const res = []
    function dfs(p, path) {
        if (!p.left && !p.right) {
            res.push(path)
            return
        }
        if (p.left) { dfs(p.left, `${path}->${p.left.val}`) }
        if (p.right) { dfs(p.right, `${path}->${p.right.val}`) }
    }
    dfs(root, root.val.toString())
    return res
};