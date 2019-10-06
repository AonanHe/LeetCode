/**
 * Problem: Trim a Binary Search Tree
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2019/10/06
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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (!root) return root
  if (root.val < L) {
    return trimBST(root.right, L, R)
  }
  if (root.val > R) {
    return trimBST(root.left, L, R)
  }
  root.left = trimBST(root.left, L, R)
  root.right = trimBST(root.right, L, R)
  return root
}
