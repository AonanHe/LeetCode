/**
 * Problem: Hamming Distance
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2019/04/03
 * Author: Aonan He
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let s = x.toString(2)
  let t = y.toString(2)

  while (s.length < t.length) s = '0' + s
  while (s.length > t.length) t = '0' + t

  let res = 0
  const len = s.length

  for (let i = 0; i < len; i++) {
    if (s[i] !== t[i]) res += 1
  }

  return res
}
