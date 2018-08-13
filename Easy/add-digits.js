/**
 * Problem: Add Digits
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2018/05/14
 * Author: Aonan He
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return num > 0 ? ((num - 1) % 9 + 1) : 0
};
