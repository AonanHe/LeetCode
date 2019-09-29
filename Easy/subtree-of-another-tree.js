/**
 * Problem: Subtree of Another Tree
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/09/29
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function isSameTree(s, t) {
  if (!s && !t) return true
  if (s && t) {
    return (
      s.val === t.val &&
      isSameTree(s.left, t.left) &&
      isSameTree(s.right, t.right)
    )
  }
  return false
}

var isSubtree = function(s, t) {
  if (!s && !t) return true
  if (!s && t) return false
  return isSameTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
}
