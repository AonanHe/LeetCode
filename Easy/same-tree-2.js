/**
 * Problem: Same Tree
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2018/04/09
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function(p, q) {
    if (!p && !q) { return true }
    if ((!p && q) || (p && !q)) { return false }
    if ((p.val === q.val) && (isSameTree(p.left, q.left)) && (isSameTree(p.right, q.right))) {
        return true
    }
    return false
};