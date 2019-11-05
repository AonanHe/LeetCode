/**
 * Problem: Find the Town Judge
 * Difficulty: Easy
 * Runtime: 100 ms
 * Date: 2019/11/05
 * Author: Aonan He
 */
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  const inDegree = []
  const outDegree = []
  if (N === 1 && !trust.length) return N
  for (let i = 0; i < trust.length; i++) {
    const [x, y] = trust[i]
    outDegree[x] = (outDegree[x] || 0) + 1
    inDegree[y] = (inDegree[y] || 0) + 1
  }
  for (let i = 1; i <= N; i++) {
    if (!outDegree[i] && inDegree[i] === N - 1) {
      return i
    }
  }
  return -1
}
