/**
 * Problem: Ransom Note
 * Difficulty: Easy
 * Runtime: 84 ms
 * Date: 2018/05/24
 * Author: Aonan He
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const dict = {}
    for (let i = 0; i < magazine.length; i++) {
        const ch = magazine[i]
        if (dict[ch] === undefined) {
            dict[ch] = 1
        } else {
            dict[ch] ++
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const ch = ransomNote[i]
        if ((dict[ch] !== undefined) && (dict[ch] > 0)) {
            dict[ch] --
        } else {
            return false
        }
    }
    return true
};
