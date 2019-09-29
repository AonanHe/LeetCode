/**
 * Problem: Binary Tree Tilt
 * Difficulty: Easy
 * Runtime: 64 ms
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
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  let sum = 0
  function dfs(root) {
    if (!root) return 0
    const left = dfs(root.left)
    const right = dfs(root.right)
    sum += Math.abs(left - right)
    return left + right + root.val
  }
  dfs(root)
  return sum
}
