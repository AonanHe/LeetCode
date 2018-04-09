/**
 * Problem: Add Binary
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2018/04/04
 * Author: Aonan He
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const lenA = a.length
    const lenB = b.length
    const sum = []
    const maxLen = Math.max(lenA, lenB)
    a = '0'.repeat(maxLen - lenA) + a
    b = '0'.repeat(maxLen - lenB) + b
    for (let i = 0; i < maxLen; i++) {
        sum.push(0)
    }
    for (let i = maxLen - 1; i >= 0; i--) {
        sum[i] += (parseInt(a[i]) + parseInt(b[i]))
        if (i > 0) {
            sum[i - 1] = parseInt(sum[i] / 2)
            sum[i] %= 2
        }
    }
    if (sum[0] > 1) {
        sum.splice(0, 0, parseInt(sum[0] / 2))
        sum[1] %= 2
    }
    return sum.join('')
};
