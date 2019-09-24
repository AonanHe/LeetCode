/**
 * Problem: Search in a Binary Search Tree
 * Difficulty: Easy
 * Runtime: 84 ms
 * Date: 2018/12/31
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) return null
  if (root.val === val) return root
  if (root.val > val) return searchBST(root.left, val)
  if (root.val < val) return searchBST(root.right, val)
}
