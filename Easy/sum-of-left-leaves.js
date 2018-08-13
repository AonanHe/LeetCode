/**
 * Problem: Sum of Left Leaves
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2018/05/25
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
var sumOfLeftLeaves = function(root) {
    let sum = 0
    function dfs(p, isLeft) {
        if (!p) { return }
        if (!p.left && !p.right && isLeft) {
            sum += p.val
        }
        dfs(p.left, true)
        dfs(p.right, false)
    }
    dfs(root, false)
    return sum
};
