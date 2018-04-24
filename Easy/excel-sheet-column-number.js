/**
 * Problem: Excel Sheet Column Number
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2018/04/24
 * Author: Aonan He
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let res = 0
    let bit = 1
    for (let i = s.length - 1; i >= 0; i--) {
        let x = s[i].charCodeAt() - 'A'.charCodeAt() + 1
        res += (bit * x)
        bit *= 26
    }
    return res
};