/**
 * Problem: Groups of Special-Equivalent Strings
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2019/10/27
 * Author: Aonan He
 */
/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
  const set = new Set()
  A.forEach(s => {
    const even = []
    const odd = []
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
        even.push(s[i])
      } else {
        odd.push(s[i])
      }
    }
    even.sort()
    odd.sort()
    set.add(even.join('') + odd.join(''))
  })
  return set.size
}
