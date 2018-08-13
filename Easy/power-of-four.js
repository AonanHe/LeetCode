/**
 * Problem: Power of Four
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2018/05/21
 * Author: Aonan He
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num === 0) { return false }
    while (num % 4 === 0) {
        num = parseInt(num / 4)
    }
    return num === 1
};
