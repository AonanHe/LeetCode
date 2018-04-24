/**
 * Problem: Excel Sheet Column Title
 * Difficulty: Easy
 * Runtime: 48 ms
 * Date: 2018/04/24
 * Author: Aonan He
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let res = ''
    while (n !== 0) {
        let x = n % 26
        n = Math.floor(n / 26)
        if (x === 0) {
            x += 26
            n -= 1
        }
        res = String.fromCharCode('A'.charCodeAt() + (x - 1)) + res
    }
    return res
};
