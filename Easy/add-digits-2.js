/**
 * Problem: Add Digits
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2018/05/14
 * Author: Aonan He
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num > 9) {
        let sum = 0
        let x = num
        while (x > 0) {
            sum += (x % 10)
            x = parseInt(x / 10)
        }
        num = sum
    }
    return num
};
