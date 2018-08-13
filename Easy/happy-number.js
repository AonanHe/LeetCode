/**
 * Problem: Happy Number
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2018/05/02
 * Author: Aonan He
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set()
    function calc(n) {
        if (n === 1) { return true }
        if (set.has(n)) { return false }
        set.add(n)
        const s = n.toString()
        let sum = 0
        for (let i = 0; i < s.length; i++) {
            sum += parseInt(s[i]) ** 2
        }
        return calc(sum)
    }
    return calc(n)
};