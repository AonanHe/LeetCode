/**
 * Problem: Count and Say
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/04/02
 * Author: Aonan He
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let s = '1'
    for (let k = 2; k <= n; k++) {
        let i = 0, j = 0
        let t = ''
        while (i < s.length) {
            while (s[i] === s[j]) { j += 1 }
            t += ((j - i).toString() + s[i])
            i = j
        }
        s = t
    }
    return s
};
