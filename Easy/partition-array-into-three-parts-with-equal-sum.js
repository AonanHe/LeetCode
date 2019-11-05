/**
 * Problem: Partition Array Into Three Parts With Equal Sum
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2019/11/05
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const sum = A.reduce((pre, cur) => pre + cur, 0)
  if (sum % 3 !== 0) return false
  const avg = Math.floor(sum / 3)
  let i = 0
  let j = A.length - 1
  let sumL = 0
  let sumR = 0
  while (i < j) {
    if (sumL !== avg) {
      sumL += A[i]
      i += 1
    }
    if (sumR !== avg) {
      sumR += A[j]
      j -= 1
    }
    if (sumL === avg && sumR === avg) {
      return true
    }
  }
  return false
}
