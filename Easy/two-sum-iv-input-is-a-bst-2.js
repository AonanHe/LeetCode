/**
 * Problem: Two Sum IV - Input is a BST
 * Difficulty: Easy
 * Runtime: 88 ms
 * Date: 2019/10/05
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const count = {}
  function dfs(node, k) {
    if (!node) return false
    if (count[k - node.val]) {
      return true
    }
    count[node.val] = true
    return dfs(node.left, k) || dfs(node.right, k)
  }
  return dfs(root, k)
}
