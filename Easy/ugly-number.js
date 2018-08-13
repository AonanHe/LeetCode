/**
 * Problem: Ugly Number
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2018/05/15
 * Author: Aonan He
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num === 0) { return false }
    const prime = [2, 3, 5]
    while (prime.length) {
        let x = prime[0]
        while (num % x === 0) {
            num = parseInt(num / x)
        }
        prime.shift()
    }
    return num === 1
};
