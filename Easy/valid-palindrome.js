/**
 * Problem: Valid Palindrome
 * Difficulty: Easy
 * Runtime: 176 ms
 * Date: 2018/04/18
 * Author: Aonan He
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const reg = /^[A-Za-z0-9]*$/
    const a = s.toLocaleLowerCase()
        .split('')
        .filter(ch => reg.test(ch))
    const original = a.join('')
    const reversion = a.reverse().join('')
    return original === reversion
};