/**
 * Problem: N-ary Tree Postorder Traversal
 * Difficulty: Easy
 * Runtime: 612 ms
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
var postorder = function(root) {
  const res = []
  function traverse(root) {
    if (!root) return
    root.children.forEach((child) => {
      traverse(child)
    })
    res.push(root.val)
  }
  traverse(root)
  return res
}
