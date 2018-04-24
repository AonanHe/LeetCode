/**
 * Problem: Factorial Trailing Zeroes
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/04/24
 * Author: Aonan He
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let res = 0
    while (n) {
        n = Math.floor(n / 5)
        res += n
    }
    return res
};