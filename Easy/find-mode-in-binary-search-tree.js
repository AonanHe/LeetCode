/**
 * Problem: Find Mode in Binary Search Tree
 * Difficulty: Easy
 * Runtime: 96 ms
 * Date: 2019/01/17
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
 * @return {number[]}
 */
var findMode = function(root) {
  const dict = {}
  function dfs(p) {
    if (!p) return
    dfs(p.left)
    dict[p.val] = dict[p.val] ? dict[p.val] + 1 : 1
    dfs(p.right)
  }
  dfs(root)
  let max = 0
  Object.keys(dict).forEach((key) => {
    max = Math.max(max, dict[key])
  })
  return Object.keys(dict).filter((key) => dict[key] === max)
}
