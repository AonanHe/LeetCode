/**
 * Problem: Sqrt(x)
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2018/04/04
 * Author: Aonan He
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x, mid = 0
    while (left <= right) {
        mid = (left + right) >> 1
        if (mid * mid > x) {
            right = mid - 1
        } else if (mid * mid < x) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return right
};
