/**
 * Problem: Word Pattern
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2018/05/19
 * Author: Aonan He
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    if (!pattern.length || !str) { return false }
    const words = str.split(' ')
    if (pattern.length !== words.length) { return false }
    const dictS = []
    const dictT = []
    for (let i = 0; i < pattern.length; i++) {
        const s = pattern[i]
        const t = words[i]
        if ((dictS[s] === undefined) && (dictT[t] === undefined)) {
            dictS[s] = t
            dictT[t] = s
        } else if ((dictS[s] !== t) || (dictT[t] !== s)) {
            return false
        }
    }
    return true
};
