/**
 * Problem: Valid Perfect Square
 * Difficulty: Easy
 * Runtime: 48 ms
 * Date: 2018/05/24
 * Author: Aonan He
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 0) { return false }
    function sqrt(x) {
        let left = 0, right = x, mid = 0
        while (left <= right) {
            mid = parseInt((left + right) / 2)
            if (mid * mid > x) {
                right = mid - 1
            } else if (mid * mid < x) {
                left = mid + 1
            } else {
                return mid
            }
        }
        return right
    }
    return sqrt(num) ** 2 === num
};
