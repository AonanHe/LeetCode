/**
 * Problem: Number of Lines To Write String
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2019/10/23
 * Author: Aonan He
 */
/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
  if (!S) return [0, 0]
  const delta = 'a'.charCodeAt()
  let row = 0
  let current = 0
  for (let i = 0; i < S.length; i++) {
    const x = S[i].charCodeAt() - delta
    if (current + widths[x] > 100) {
      row += 1
      current = widths[x]
    } else {
      current += widths[x]
    }
  }
  return [row + 1, current]
}
