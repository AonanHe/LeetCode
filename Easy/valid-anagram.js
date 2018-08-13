/**
 * Problem: Valid Anagram
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2018/05/12
 * Author: Aonan He
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const dictS = []
    const dictT = []
    for (let i = 0; i < s.length; i++) {
        if (dictS[s[i]] === undefined) {
            dictS[s[i]] = 0
        } else {
            dictS[s[i]] ++
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (dictT[t[i]] === undefined) {
            dictT[t[i]] = 0
        } else {
            dictT[t[i]] ++
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (dictS[s[i]] !== dictT[s[i]]) {
            return false
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (dictS[t[i]] !== dictT[t[i]]) {
            return false
        }
    }
    return true
};