/**
 * Problem: Quad Tree Intersection
 * Difficulty: Easy
 * Runtime: 184 ms
 * Date: 2019/09/26
 * Author: Aonan He
 */
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function(quadTree1, quadTree2) {
  if (quadTree1.isLeaf) {
    return quadTree1.val ? quadTree1 : quadTree2
  }
  if (quadTree2.isLeaf) {
    return quadTree2.val ? quadTree2 : quadTree1
  }
  let topLeft = intersect(quadTree1.topLeft, quadTree2.topLeft)
  let topRight = intersect(quadTree1.topRight, quadTree2.topRight)
  let bottomLeft = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft)
  let bottomRight = intersect(quadTree1.bottomRight, quadTree2.bottomRight)
  if (
    topLeft.isLeaf &&
    topRight.isLeaf &&
    bottomLeft.isLeaf &&
    bottomRight.isLeaf &&
    topLeft.val === topRight.val &&
    topRight.val === bottomLeft.val &&
    bottomLeft.val === bottomRight.val
  ) {
    return new Node(topLeft.val, true, null, null, null, null)
  } else {
    return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight)
  }
}
