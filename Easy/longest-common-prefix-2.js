/**
 * Problem: Longest Common Prefix
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2018/04/01
 * Author: Aonan He
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) { return '' }
    if (strs.length === 1) { return strs[0] }
    let s = strs[0]
    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(s) !== 0) {
            s = s.substring(0, s.length - 1)
            if (s.length === 0) { return '' }
        }
    }
    return s
};
