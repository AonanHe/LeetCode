/**
 * Problem: Valid Parentheses
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2018/04/01
 * Author: Aonan He
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) { return false }
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = []
    let top = -1
    for (let i = 0; i < s.length; i++) {
        if (['(', '{', '['].indexOf(s[i]) !== -1) {
            top += 1
            stack[top] = s[i]
        } else if (stack[top] === brackets[s[i]]) {
            top -= 1
        } else {
            return false
        }
    }
    if (top >= 0) { return false }
    return true
};
