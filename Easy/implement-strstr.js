/**
 * Problem: Longest Common Prefix
 * Difficulty: Easy
 * Runtime: 64 ms
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
    if (len < 0) { return -1 }
    if ((len === 0) && (haystack === needle)) { return 0 }
    for (let i = 0; i <= len; i++) {
        let equal = true
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                equal = false
                break
            }
        }
        if (equal) { return i }
    }
    return -1
};
