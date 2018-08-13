/**
 * Problem: Power of Three
 * Difficulty: Easy
 * Runtime: 324 ms
 * Date: 2018/05/21
 * Author: Aonan He
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 0) { return false }
    while (n % 3 === 0) {
        n = parseInt(n / 3)
    }
    return n === 1
};
