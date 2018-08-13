/**
 * Problem: Number of Segments in a String
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/05/29
 * Author: Aonan He
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.split(' ').filter(ch => ch !== '').length
};
