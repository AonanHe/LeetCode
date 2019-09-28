/**
 * Problem: Maximum Depth of N-ary Tree
 * Difficulty: Easy
 * Runtime: 596 ms
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
  const queue = []
  const depth = []
  if (!root) return 0
  let result = 1
  queue.push(root)
  depth.push(1)
  while (queue.length) {
    const current = queue.shift()
    const dep = depth.shift()
    if (current && current.children) {
      current.children.forEach((child) => {
        queue.push(child)
        depth.push(dep + 1)
        result = Math.max(result, dep + 1)
      })
    }
  }
  return result
}
