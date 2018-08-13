/**
 * Problem: Fizz Buzz
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2018/05/26
 * Author: Aonan He
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const res = []
    for (let i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            res.push('FizzBuzz')
        } else if (i % 3 === 0) {
            res.push('Fizz')
        } else if (i % 5 === 0) {
            res.push('Buzz')
        } else {
            res.push(i.toString())
        }
    }
    return res
};
