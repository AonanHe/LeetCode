/**
 * Problem: Average of Levels in Binary Tree
 * Difficulty: Easy
 * Runtime: 72 ms
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
  const queue = []
  const result = []
  if (!root) return []
  queue.push(root)
  while (queue.length) {
    const length = queue.length
    let sum = 0
    for (let i = 0; i < length; i++) {
      const current = queue.shift()
      sum += current.val
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    result.push(sum / length)
  }
  return result
}
