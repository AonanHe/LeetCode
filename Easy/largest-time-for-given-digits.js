/**
 * Problem: Largest Time for Given Digits
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2019/11/01
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
  const number = []
  const visit = []
  let total = 0
  let max = 0
  let ans = ''
  function check(a, b, c, d) {
    if (a * 10 + b < 24 && c * 10 + d <= 59) {
      const time = (a * 10 + b) * 60 + (c * 10 + d)
      if (time >= max) {
        max = time
        ans = `${a}${b}:${c}${d}`
      }
    }
  }
  function generate(n) {
    if (n === A.length) {
      check(...number)
      return
    }
    for (let i = 0; i < A.length; i++) {
      total += 1
      if (!visit[i]) {
        visit[i] = true
        number.push(A[i])
        generate(n + 1)
        visit[i] = false
        number.pop()
      }
    }
  }
  generate(0)
  return ans
}
