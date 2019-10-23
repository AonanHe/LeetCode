/**
 * Problem: Letter Case Permutation
 * Difficulty: Easy
 * Runtime: 88 ms
 * Date: 2019/10/23
 * Author: Aonan He
 */
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  const ans = []
  const reg = new RegExp('[a-zA-Z]')
  const current = []
  function dfs(n) {
    if (n === S.length) {
      ans.push(current.join(''))
      return
    }
    if (reg.test(S[n])) {
      for (let i = 0; i <= 1; i++) {
        current.push(i === 0 ? S[n].toLowerCase() : S[n].toUpperCase())
        dfs(n + 1)
        current.pop()
      }
    } else {
      current.push(S[n])
      dfs(n + 1)
      current.pop()
    }
  }
  dfs(0)
  return ans
}
