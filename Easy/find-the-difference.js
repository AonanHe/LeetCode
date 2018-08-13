/**
 * Problem: Find the Difference
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/05/25
 * Author: Aonan He
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const dictS = []
    const dictT = []
    for (let i = 0; i < s.length; i++) {
        if (dictS[s[i]] === undefined) {
            dictS[s[i]] = 1
        } else {
            dictS[s[i]] ++
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (dictT[t[i]] === undefined) {
            dictT[t[i]] = 1
        } else {
            dictT[t[i]] ++
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (dictS[t[i]] !== dictT[t[i]]) {
            return t[i]
        }
    }
};
