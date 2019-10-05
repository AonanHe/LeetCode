/**
 * Problem: Two Sum IV - Input is a BST
 * Difficulty: Easy
 * Runtime: 104 ms
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const number = []
  function traverse(node) {
    if (!node) return
    number.push(node.val)
    traverse(node.left)
    traverse(node.right)
  }
  traverse(root)
  const count = {}
  number.forEach((x) => {
    count[x] = (count[x] || 0) + 1
  })
  for (let i = 0; i < number.length; i++) {
    count[number[i]] -= 1
    if (count[k - number[i]] > 0) {
      return true
    }
    count[number[i]] += 1
  }
  return false
}
