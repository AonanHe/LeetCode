/**
 * Problem: Diameter of Binary Tree
 * Difficulty: Easy
 * Runtime: 112 ms
 * Date: 2018/12/30
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
var diameterOfBinaryTree = function(root) {
  let max = 0
  function dfs(p) {
    if (!p) return
    max = Math.max(max, maxDeep(p.left, 0) + maxDeep(p.right, 0))
    dfs(p.left)
    dfs(p.right)
  }
  function maxDeep(p, deep) {
    if (!p) return deep
    const left = maxDeep(p.left, deep + 1)
    const right = maxDeep(p.right, deep + 1)
    return Math.max(left, right)
  }
  dfs(root)
  return max
}
