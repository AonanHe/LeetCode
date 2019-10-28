/**
 * Problem: Increasing Order Search Tree
 * Difficulty: Easy
 * Runtime: 164 ms
 * Date: 2019/10/28
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let tree = null
  let p = null
  function traverse(node) {
    if (!node) return
    traverse(node.left)
    if (!tree) {
      tree = new TreeNode(node.val)
      p = tree
    } else {
      p.right = new TreeNode(node.val)
      p = p.right
    }
    traverse(node.right)
  }
  traverse(root)
  return tree
}
