/**
 * Problem: Arranging Coins
 * Difficulty: Easy
 * Runtime: 92 ms
 * Date: 2018/05/31
 * Author: Aonan He
 */

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 0, right = n
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if ((mid + mid ** 2) > n * 2) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return right
};
