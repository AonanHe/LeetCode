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
    for (let i = 0; i < s.length; i++) {
        res = res * 26 + (s[i].charCodeAt() - 'A'.charCodeAt() + 1)
    }
    return res
};