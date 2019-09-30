/**
 * Problem: N-ary Tree Preorder Traversal
 * Difficulty: Easy
 * Runtime: 592 ms
 * Date: 2019/09/30
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
 * @return {number[]}
 */
var preorder = function(root) {
  const res = []
  function traverse(root) {
    if (!root) return
    res.push(root.val)
    root.children.forEach((child) => {
      traverse(child)
    })
  }
  traverse(root)
  return res
}
