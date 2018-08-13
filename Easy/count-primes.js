/**
 * Problem: Count Primes
 * Difficulty: Easy
 * Runtime: 868 ms
 * Date: 2018/05/04
 * Author: Aonan He
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    function isPrime(x) {
        if (x === 1) { return false }
        if (x === 2) { return true }
        if (x % 2 === 0) { return false }
        const y = Math.ceil(Math.sqrt(x))
        for (let i = 2; i <= y; i++) {
            if (x % i === 0) { return false }
        }
        return true
    }
    let res = 0
    for (let i = 1; i < n; i++) {
        if (isPrime(i)) { res ++ }
    }
    return res
};