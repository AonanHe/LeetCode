/**
 * Problem: Plus One
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/03/31
 * Author: Aonan He
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const len = digits.length
    if (!len) { return [1] }
    digits[len - 1] += 1
    for (let i = len - 1; i > 0; i--) {
        digits[i - 1] += Math.floor(digits[i] / 10),
        digits[i] = digits[i] % 10
    }
    if (digits[0] >= 10) {
        digits[0] %= 10
        return [1, ...digits]
    }
    return digits
};
