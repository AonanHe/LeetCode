/**
 * Problem: Sort Array By Parity
 * Difficulty: Easy
 * Runtime: 80 ms
 * Date: 2019/10/28
 * Author: Aonan He
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  return A.filter(x => x % 2 === 0).concat(A.filter(x => x % 2 === 1))
}
