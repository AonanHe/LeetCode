/**
 * Problem: Leaf-Similar Trees
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/10/26
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  function traverse(root) {
    const leaf = []
    function dfs(node) {
      if (!node) return
      if (!node.left && !node.right) {
        leaf.push(node.val)
      }
      dfs(node.left)
      dfs(node.right)
    }
    dfs(root)
    return leaf
  }
  const leafA = traverse(root1)
  const leafB = traverse(root2)
  if (leafA.length !== leafB.length) return false
  for (let i = 0; i < leafA.length; i++) {
    if (leafA[i] !== leafB[i]) return false
  }
  return true
}
