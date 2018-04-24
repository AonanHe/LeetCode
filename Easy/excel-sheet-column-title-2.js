/**
 * Problem: Excel Sheet Column Title
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2018/04/24
 * Author: Aonan He
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let res = ''
    while (n) {
        n --
        let x = n % 26
        res = String.fromCharCode('A'.charCodeAt() + x) + res
        n = Math.floor(n / 26)
    }
    return res
};
