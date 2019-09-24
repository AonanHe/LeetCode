/**
 * Problem: Min Cost Climbing Stairs
 * Difficulty: Easy
 * Runtime: 80 ms
 * Date: 2019/01/07
 * Author: Aonan He
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const N = cost.length
  for (let i = 2; i <= N; i++) {
    cost[i] = Math.min(cost[i - 1], cost[i - 2]) + (cost[i] || 0)
  }
  return cost[N]
}
