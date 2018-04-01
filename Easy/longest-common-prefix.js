/**
 * Problem: Longest Common Prefix
 * Difficulty: Easy
 * Runtime: 60 ms
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
    const s = strs[0]
    const check = function(index, ch) {
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][index] !== ch) {
                return false
            }
        }
        return true
    }
    let i = 0
    for (; i < s.length; i++) {
        if (!check(i, s[i])) { break }
    }
    return s.slice(0, i)
};
