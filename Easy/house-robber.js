/**
 * Problem: House Robber
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2018/05/02
 * Author: Aonan He
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const len = nums.length
    if (!len) { return 0 }
    let f = []
    f.push([])
    f[0][0] = 0
    f[0][1] = nums[0]
    for (let i = 1; i < len; i++) {
        f.push([])
        f[i][0] = Math.max(f[i - 1][0], f[i - 1][1])
        f[i][1] = f[i - 1][0] + nums[i]
    }
    return Math.max(f[len - 1][0], f[len - 1][1])
};