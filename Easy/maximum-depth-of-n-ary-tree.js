/**
 * Problem: Maximum Depth of N-ary Tree
 * Difficulty: Easy
 * Runtime: 592 ms
 * Date: 2019/09/26
 * Author: Aonan He
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0
  if (!root.children.length) return 1
  return 1 + Math.max(...root.children.map((item) => maxDepth(item)))
}
