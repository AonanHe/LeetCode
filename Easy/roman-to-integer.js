/**
 * Problem: Roman to Integer
 * Difficulty: Easy
 * Runtime: 216 ms
 * Date: 2018/03/31
 * Author: Aonan He
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    const len = s.length
    if (!len) { return 0 }
    let res = 0
    for (let i = 0; i < len - 1; i++) {
        if (roman[s[i]] >= roman[s[i + 1]]) {
            res += roman[s[i]]
        } else {
            res -= roman[s[i]]
        }
    }
    res += roman[s[len - 1]]
    return res
};
