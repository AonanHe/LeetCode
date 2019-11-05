/**
 * Problem: Partition Array Into Three Parts With Equal Sum
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/11/05
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  const ans = []
  let x = 0
  for (let i = 0; i < A.length; i++) {
    x = (x * 2 + A[i]) % 10
    ans.push(x % 5 === 0)
  }
  return ans
}
