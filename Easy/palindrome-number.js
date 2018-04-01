/**
 * Problem: Palindrome Number
 * Difficulty: Easy
 * Runtime: 292 ms
 * Date: 2018/03/31
 * Author: Aonan He
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) { return false }
    return x.toString() === x.toString().split('').reverse().join('')
};
