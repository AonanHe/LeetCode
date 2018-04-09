/**
 * Problem: Symmetric Tree
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/04/09
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) { return true }
  if (!root.left && !root.right) { return true }
  const que = []
  let head = 0,
      tail = 0
  que.push(root)
  while (head <= tail) {
      let x = tail
      while (head <= x) {
          let p = que[head++]
          if (p) {
              que[++tail] = p.left
              que[++tail] = p.right
          }
      }
      let len = tail - x
      for (let i = x + 1; i <= tail; i++) {
          const j = tail - (i - x) + 1
          if (i > parseInt(len / 2) + x) { break }
          if (que[i] && que[j]) {
              if (que[i].val !== que[j].val) {
                  return false
              }
          } else if (que[i] !== que[j]) {
              return false
          }
      }
  }
  return true
};