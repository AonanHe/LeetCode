/**
 * Problem: Minimum Distance Between BST Nodes
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/10/23
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
var minDiffInBST = function(root) {
  let ans = Infinity
  let pre = null
  function dfs(node) {
    if (!node) return
    dfs(node.left)
    if (pre) {
      ans = Math.min(node.val - pre.val, ans)
    }
    pre = node
    dfs(node.right)
  }
  dfs(root)
  return ans
}
