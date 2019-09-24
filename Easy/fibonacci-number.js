/**
 * Problem: Fibonacci Number
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/01/10
 * Author: Aonan He
 */
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  const f = []
  f[0] = 0
  f[1] = 1
  for (let i = 2; i <= N; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }
  return f[N]
}
