/**
 * Problem: Distribute Candies
 * Difficulty: Easy
 * Runtime: 132 ms
 * Date: 2019/09/29
 * Author: Aonan He
 */
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  const set = new Set()
  candies.forEach((x) => {
    set.add(x)
  })
  return Math.min(set.size, candies.length / 2)
}
