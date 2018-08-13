/**
 * Problem: First Unique Character in a String
 * Difficulty: Easy
 * Runtime: 100 ms
 * Date: 2018/05/25
 * Author: Aonan He
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const dict = []
    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]] === undefined) {
            dict[s[i]] = 1
        } else {
            dict[s[i]] ++
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]] === 1) {
            return i
        }
    }
    return -1
};
