/**
 * Problem: Minimum Absolute Difference in BST
 * Difficulty: Easy
 * Runtime: 84 ms
 * Date: 2018/12/25
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
var getMinimumDifference = function(root) {
  const node = []
  function dfs(p) {
    if (!p) return
    dfs(p.left)
    dfs(p.right)
    node.push(p.val)
  }
  dfs(root)
  node.sort((a, b) => b - a)
  let min = Number.MAX_VALUE
  for (let i = 0; i < node.length - 1; i++) {
    min = Math.min(min, node[i] - node[i + 1])
  }
  return min
}
