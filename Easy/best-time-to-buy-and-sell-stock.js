/**
 * Problem: Best Time to Buy and Sell Stock
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/04/17
 * Author: Aonan He
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0
    let min = Infinity
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        res = Math.max(res, prices[i] - min)
    }
    return res
};