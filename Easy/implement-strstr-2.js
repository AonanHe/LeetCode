/**
 * Problem: Longest Common Prefix
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2018/04/02
 * Author: Aonan He
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const len = haystack.length - needle.length
    for (let i = 0; i <= len; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i
        }
    }
    return -1
};
