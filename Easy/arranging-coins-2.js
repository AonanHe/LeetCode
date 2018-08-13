/**
 * Problem: Arranging Coins
 * Difficulty: Easy
 * Runtime: 96 ms
 * Date: 2018/05/31
 * Author: Aonan He
 */

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i = 0
    while (n >= 0) {
        i += 1
        n -= i
    }
    return i - 1
};
