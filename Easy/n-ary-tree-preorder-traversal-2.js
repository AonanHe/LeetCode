/**
 * Problem: N-ary Tree Preorder Traversal
 * Difficulty: Easy
 * Runtime: 788 ms
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
  if (!root) return []
  const res = []
  const queue = []
  queue.push(root)
  while (queue.length) {
    const current = queue.shift()
    if (current.children) {
      queue.unshift(...current.children)
    }
    res.push(current.val)
  }
  return res
}
