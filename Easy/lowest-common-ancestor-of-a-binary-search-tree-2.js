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
    if (p.val > q.val) {
		const temp = p
		p = q
		q = temp
	}
	while (true) {
		if (root.val < p.val) {
			root = root.right
		} else if (root.val > q.val) {
			root = root.left
		} else {
			return root
		}
	}
};
