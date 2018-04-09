/**
 * Problem: Symmetric Tree
 * Difficulty: Easy
 * Runtime: 60 ms
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  function compare(p, q) {
      if (!p && !q) { return true }
      if (p && q && p.val === q.val) {
          return compare(p.left, q.right) && compare(p.right, q.left)
      }
      return false
  }
  if (!root) { return true }
  return compare(root.left, root.right)
};