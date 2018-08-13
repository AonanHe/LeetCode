/**
 * Problem: Add Strings
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2018/05/28
 * Author: Aonan He
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    function toNumber(ch) {
        return ch.charCodeAt() - '0'.charCodeAt()
    }
    function calc(s1, s2) {
        const len = Math.max(s1.length, s2.length)
        let a = s1
        let b = s2
        if (s1.length < s2.length) {
            a = s2
            b = s1
        }
        a = a.split('').reverse().join('')
        b = b.split('').reverse().join('')
        for (let i = 0; i < len; i++) {
            let x = toNumber(a[i])
            if (b[i] !== undefined) {
                x += toNumber(b[i])
            }
            sum[i] = (sum[i] || 0) + x
            if (sum[i] > 9) {
                sum.push(parseInt(sum[i] / 10))
                sum[i] %= 10
            }
        }
        sum.reverse()
    }
    const sum = []
    calc(num1, num2)
    return sum.join('')
};
