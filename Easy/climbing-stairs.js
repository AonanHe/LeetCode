/**
 * Problem: Climbing Stairs
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2018/04/04
 * Author: Aonan He
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const f = []
    f[0] = 0
    f[1] = 1
    f[2] = 2
    for (let i = 3; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2]
    }
    return f[n]
};