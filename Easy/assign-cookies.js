/**
 * Problem: Assign Cookies
 * Difficulty: Easy
 * Runtime: 88 ms
 * Date: 2018/12/16
 * Author: Aonan He
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let i = 0
  s.forEach((sj) => {
    if (sj >= g[i]) {
      i += 1
    }
  })
  return i
}
