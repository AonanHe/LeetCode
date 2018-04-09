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
    let res = true
    function check(p, q) {
        if ((p && !q) || (!p && q)) {
            res = false
            return
        }
        if (!p && !q) {
            return
        }
        if (p.val !== q.val) {
            res = false
            return
        }
        check(p.left, q.left)
        check(p.right, q.right)
    }
    check(p, q)
    return res
};