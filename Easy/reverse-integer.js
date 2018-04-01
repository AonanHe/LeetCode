/**
 * Problem: Reverse Integer
 * Difficulty: Easy
 * Runtime: 84 ms
 * Date: 2018/03/31
 * Author: Aonan He
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const s = Math.abs(x)
        .toString()
        .split('')
        .reverse()
        .join('')
    const y = Number(s)
    if (y > 2 ** 31) { return 0 }
    if (x < 0) { return `-${y}` }
    return y
};
