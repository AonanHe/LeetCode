/**
 * Problem: Pascal's Triangle II
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2018/04/16
 * Author: Aonan He
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const res = [1]
    for (let i = 0; i < rowIndex; i++) {
        for (let j = i + 1; j > 0; j--) {
            res[j] = (res[j] || 0) + res[j - 1]
        }
    }
    return res
};