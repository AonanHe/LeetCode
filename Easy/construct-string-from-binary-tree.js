/**
 * Problem: Construct String from Binary Tree
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/10/01
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
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  if (!t) return ''
  if (!t.left && !t.right) {
    return t.val + ''
  }
  if (!t.right) {
    return t.val + '(' + tree2str(t.left) + ')'
  }
  return t.val + '(' + tree2str(t.left) + ')' + '(' + tree2str(t.right) + ')'
}
