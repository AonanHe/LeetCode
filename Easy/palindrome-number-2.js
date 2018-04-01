/**
 * Problem: Palindrome Number
 * Difficulty: Easy
 * Runtime: 252 ms
 * Date: 2018/03/31
 * Author: Aonan He
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const INT_MAX = (2 ** 31) - 1
    if (x < 0 || x > INT_MAX) { return false }
    let rem = x
    let y = 0
    while (rem > 0) {
        y = (y * 10) + (rem % 10)
        rem = Math.floor(rem / 10)
    }
    return x === y
};
