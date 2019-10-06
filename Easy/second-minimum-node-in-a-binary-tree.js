/**
 * Problem: Second Minimum Node In a Binary Tree
 * Difficulty: Easy
 * Runtime: 52 ms
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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  function traverse(node, val) {
    if (!node) return -1
    if (node.val > val) return node.val
    const left = traverse(node.left, val)
    const right = traverse(node.right, val)
    if (left >= val && right >= val) {
      return Math.min(left, right)
    }
    return Math.max(left, right)
  }
  return traverse(root, root.val)
}
