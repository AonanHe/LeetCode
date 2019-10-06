/**
 * Problem: Longest Univalue Path
 * Difficulty: Easy
 * Runtime: 172 ms
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
var longestUnivaluePath = function(root) {
  if (!root) return 0
  let ans = 0
  function dfs(node, val) {
    if (!node) return 0
    const left = dfs(node.left, node.val)
    const right = dfs(node.right, node.val)
    ans = Math.max(ans, left + right)
    if (node.val === val) {
      return Math.max(left, right) + 1
    }
    return 0
  }
  dfs(root, root.val)
  return ans
}
