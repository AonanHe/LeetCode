/**
 * Problem: Prime Number of Set Bits in Binary Representation
 * Difficulty: Easy
 * Runtime: 332 ms
 * Date: 2019/09/24
 * Author: Aonan He
 */
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  let count = 0
  const prime = [2, 3, 5, 7, 11, 13, 17, 19]
  for (let i = L; i <= R; i++) {
    const total = i
      .toString(2)
      .split('')
      .reduce((pre, cur) => +pre + +cur)
    if (prime.indexOf(total) !== -1) {
      count += 1
    }
  }
  return count
}
