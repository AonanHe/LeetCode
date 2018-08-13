/**
 * Problem: Invert Binary Tree
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2018/05/09
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function invert(p) {
        if (!p) { return }
        invert(p.left)
        invert(p.right)
        let temp = p.left
        p.left = p.right
        p.right = temp
    }
    invert(root)
    return root
};
