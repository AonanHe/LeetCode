/**
 * Problem: Range Addition II
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2019/09/30
 * Author: Aonan He
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  let minA = m
  let minB = n
  ops.forEach((item) => {
    const [a, b] = item
    minA = Math.min(minA, a)
    minB = Math.min(minB, b)
  })
  return minA * minB
}
