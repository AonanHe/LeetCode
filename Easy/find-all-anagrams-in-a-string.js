/**
 * Problem: Find All Anagrams in a String
 * Difficulty: Easy
 * Runtime: 184 ms
 * Date: 2018/05/29
 * Author: Aonan He
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const target = {}
    const dict = {}
    const res = []
    function check() {
        const keys = Object.keys(dict)
        for (let i = 0; i < keys.length; i++) {
            if (dict[keys[i]] !== target[keys[i]]) {
                return false
            }
        }
        return true
    }
    for (let ch of p) {
        target[ch] = (target[ch] || 0) + 1
    }
    const range = s.length - p.length
    const len = p.length
    for (let i = 0; i < len; i++) {
        dict[s[i]] = (dict[s[i]] || 0) + 1
    }
    if (check()) {
        res.push(0)
    }
    for (let i = 0; i < range; i++) {
        dict[s[i]]--
        dict[s[i + len]] = (dict[s[i + len]] || 0) + 1
        if (dict[s[i]] === 0) {
			delete dict[s[i]]
		}
        if (check()) {
            res.push(i + 1)
        }
    }
    return res
};
