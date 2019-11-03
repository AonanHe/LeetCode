/**
 * Problem: Cousins in Binary Tree
 * Difficulty: Easy
 * Runtime: 84 ms
 * Date: 2019/11/03
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let parentX = null
  let parentY = null
  let deepX = -1
  let deepY = -1
  function dfs(node, deep, x, y) {
    if (!node) return
    if (node.left && node.left.val === x) {
      parentX = node
      deepX = deep
    }
    if (node.left && node.left.val === y) {
      parentY = node
      deepY = deep
    }
    if (node.right && node.right.val === x) {
      parentX = node
      deepX = deep
    }
    if (node.right && node.right.val === y) {
      parentY = node
      deepY = deep
    }
    dfs(node.left, deep + 1, x, y)
    dfs(node.right, deep + 1, x, y)
  }
  dfs(root, 0, x, y)
  return deepX === deepY && parentX !== parentY
}
