/**
 * Problem: Can Place Flowers
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/10/01
 * Author: Aonan He
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
      flowerbed[i] = 1
      n -= 1
    }
  }
  return n <= 0
}
