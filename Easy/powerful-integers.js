/**
 * Problem: Powerful Integers
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2019/11/03
 * Author: Aonan He
 */
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
  const set = new Set()
  for (let i = 1; i < bound; i *= x) {
    for (let j = 1; i + j <= bound; j *= y) {
      set.add(i + j)
      if (y === 1) break
    }
    if (x === 1) break
  }
  return [...set]
}
