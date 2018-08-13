/**
 * Problem: Reverse String
 * Difficulty: Easy
 * Runtime: 80 ms
 * Date: 2018/05/22
 * Author: Aonan He
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split('').reverse().join('')
};
