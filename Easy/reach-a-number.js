/**
 * Problem: Reach a Number
 * Difficulty: Easy
 * Runtime: 84 ms
 * Date: 2019/01/09
 * Author: Aonan He
 */
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
  let sum = 0
  let i = 0
  const goal = Math.abs(target)
  for (let i = 0; ; i++) {
    sum += i
    let delta = sum - goal
    if (delta >= 0 && delta % 2 === 0) return i
  }
}
