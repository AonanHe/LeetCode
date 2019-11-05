/**
 * Problem: Pairs of Songs With Total Durations Divisible by 60
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2019/11/05
 * Author: Aonan He
 */
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  const count = []
  let ans = 0
  for (let i = 0; i < time.length; i++) {
    const x = time[i] % 60
    if (x === 0) {
      ans += count[x] || 0
    } else {
      ans += count[60 - x] || 0
    }
    count[x] = (count[x] || 0) + 1
  }
  return ans
}
