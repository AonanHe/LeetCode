/**
 * Problem: Isomorphic Strings
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/05/05
 * Author: Aonan He
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const lenS = s.length
    const lenT = t.length
    if (lenS !== lenT) { return false }
    const dictStoT = {}
    const dictTtoS = {}
    for (let i = 0; i < lenS; i++) {
        if (!dictStoT[s[i]]) {
            dictStoT[s[i]] = t[i]
        } else if (dictStoT[s[i]] !== t[i]) {
            return false
        }
        if (!dictTtoS[t[i]]) {
            dictTtoS[t[i]] = s[i]
        } else if (dictTtoS[t[i]] !== s[i]) {
            return false
        }
    }
    return true
};