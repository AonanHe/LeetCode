/**
 * Problem: Binary Watch
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2018/05/25
 * Author: Aonan He
 */

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    const dictBinary = {}
    const res = []
    function countOne(n) {
        const s = n.toString(2)
        let total = 0
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '1') {
                total ++
            }
        }
        return total
    }
    for (let i = 0; i <= 59; i++) {
        const total = countOne(i)
        dictBinary[i] = total
    }
    for (let i = 0; i <= 11; i++) {
        for (let j = 0; j <= 59; j++) {
            if (dictBinary[i] + dictBinary[j] === num) {
                const time = j < 10 ? `${i}:0${j}` : `${i}:${j}`
                res.push(time)
            }
        }
    }
    return res
};