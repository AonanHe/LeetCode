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
    let s = n.toString(2)
    const len = s.length
    s = s.split('').reverse().join('') + '0'.repeat(32 - len)
    return parseInt(s, 2)
};