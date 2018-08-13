/**
 * Problem: Convert a Number to Hexadecima
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2018/05/26
 * Author: Aonan He
 */

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    const dict = []
    const res = []
    const maxNum = 2 ** 32 - 1
    if (num < 0) { num += (maxNum + 1) }
    if (num === 0) { return '0' }
    for (let i = 0; i < 16; i++) {
        if (i > 9) {
            const hex = String.fromCharCode('a'.charCodeAt() + i - 10)
            dict[i] = hex
        } else{
            dict[i] = i.toString()
        }
    }
    while (num) {
        const x = num % 16
        res.push(dict[x])
        num = parseInt(num / 16)
    }
    return res.reverse().join('')
};
