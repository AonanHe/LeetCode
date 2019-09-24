/**
 * Problem: Perfect Number
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2018/12/21
 * Author: Aonan He
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num <= 0) return false
  const n = Math.floor(Math.sqrt(num))
  let sum = 0
  for (let i = 1; i <= n; i++) {
    if (num % i === 0) {
      sum += i
      if (i * i !== num) {
        sum += num / i
      }
    }
  }
  return sum - num === num
}
