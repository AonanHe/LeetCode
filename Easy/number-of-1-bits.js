/**
 * Problem: Number of 1 Bits
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2018/04/30
 * Author: Aonan He
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0
    while (n) {
        res += n & 1
        n = Math.floor(n / 2)
    }
    return res
};