/**
 * Problem: Reverse Bits
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2018/04/30
 * Author: Aonan He
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0
    for (let i = 0; i < 32; i++) {
        res = res * 2 + (n & 1)
        n = n >> 1
    }
    return res
};