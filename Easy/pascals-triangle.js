/**
 * Problem: Pascal's Triangle
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2018/04/16
 * Author: Aonan He
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const f = []
    if (numRows === 0) { return [] }
    f.push([1])
    for (let i = 1; i < numRows; i++) {
        f.push([])
        for (let j = 0; j <= i; j++) {
            f[i].push((f[i - 1][j - 1] || 0) + (f[i - 1][j] || 0))
        }
    }
    return f
};