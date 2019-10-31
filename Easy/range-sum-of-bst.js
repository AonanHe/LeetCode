/**
 * Problem: Range Sum of BST
 * Difficulty: Easy
 * Runtime: 136 ms
 * Date: 2019/10/31
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
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  if (!root) return 0
  const left = rangeSumBST(root.left, L, R)
  const right = rangeSumBST(root.right, L, R)
  if (root.val >= L && root.val <= R) {
    return left + right + root.val
  } else {
    return left + right
  }
}
