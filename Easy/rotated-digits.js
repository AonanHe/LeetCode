/**
 * Problem: Rotated Digits
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2019/10/23
 * Author: Aonan He
 */
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  const dict = {
    0: 0,
    1: 1,
    2: 5,
    5: 2,
    6: 9,
    8: 8,
    9: 6
  }
  let ans = 0
  function rotated(s) {
    let t = ''
    for (let i = 0; i < s.length; i++) {
      if (dict[s[i]] === undefined) return ''
      t += dict[s[i]]
    }
    return t
  }
  for (let i = 1; i <= N; i++) {
    const s = i.toString()
    rotated(s)
    const t = rotated(s)
    if (t && s !== t) ans += 1
  }
  return ans
}
