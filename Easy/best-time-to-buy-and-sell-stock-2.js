/**
 * Problem: Best Time to Buy and Sell Stock
 * Difficulty: Easy
 * Runtime: 368 ms
 * Date: 2018/04/17
 * Author: Aonan He
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0
    for (let i = 0; i < prices.length - 1; i++) {
        let profit = 0
        for (let j = i + 1; j < prices.length; j++) {
            profit = Math.max(profit, prices[j] - prices[i])
        }
        res = Math.max(res, profit)
    }
    return res
};