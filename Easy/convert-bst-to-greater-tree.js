/**
 * Problem: Convert BST to Greater Tree
 * Difficulty: Easy
 * Runtime: 108 ms
 * Date: 2019/01/11
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let sum = 0
  function dfs(p) {
    if (!p) return
    dfs(p.right)
    sum += p.val
    p.val = sum
    dfs(p.left)
  }
  dfs(root)
  return root
}
