/**
 * Problem: Lowest Common Ancestor of a Binary Search Tree
 * Difficulty: Easy
 * Runtime: 84 ms
 * Date: 2018/05/10
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const val = root.val
    if (p.val <= val && val <= q.val) { return root }
    if (q.val <= val && val <= p.val) { return root }
    if (val < p.val) { return lowestCommonAncestor(root.right, p, q) }
    return lowestCommonAncestor(root.left, p, q)
};
