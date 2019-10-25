/**
 * Problem: Maximize Distance to Closest Person
 * Difficulty: Easy
 * Runtime: 84 ms
 * Date: 2019/10/25
 * Author: Aonan He
 */
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  const s = seats.join('')
  const arr = s.split('1')
  let ans = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length) {
      ans = Math.max(ans, Math.floor((arr[i].length + 1) / 2))
    }
  }
  return Math.max(ans, s.indexOf('1'), s.length - 1 - s.lastIndexOf('1'))
}
