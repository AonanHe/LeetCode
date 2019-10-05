/**
 * Problem: Average of Levels in Binary Tree
 * Difficulty: Easy
 * Runtime: 68 ms
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  if (!root) return []
  const path = []
  function traverse(node, level) {
    if (!path[level]) {
      path[level] = []
    }
    path[level].push(node.val)
    if (node.left) traverse(node.left, level + 1)
    if (node.right) traverse(node.right, level + 1)
  }
  traverse(root, 0)
  return path.map((item) => item.reduce((pre, cur) => pre + cur) / item.length)
}
