/**
 * Problem: Power of Two
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2018/05/10
 * Author: Aonan He
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let x = 1
    while (x < n) {
        x *= 2
    }
    return x === n
};
