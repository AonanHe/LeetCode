/**
 * Problem: Heaters
 * Difficulty: Easy
 * Runtime: 112 ms
 * Date: 2019/09/26
 * Author: Aonan He
 */
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  houses.sort((a, b) => a - b)
  heaters.sort((a, b) => a - b)
  let radius = 0
  let j = 0
  for (let i = 0; i < houses.length; i++) {
    const house = houses[i]
    while (j < heaters.length && heaters[j] < house) {
      j += 1
    }
    if (j === 0) {
      radius = Math.max(radius, heaters[j] - house)
    } else if (j === heaters.length) {
      return Math.max(
        radius,
        houses[houses.length - 1] - heaters[heaters.length - 1]
      )
    } else {
      radius = Math.max(
        radius,
        Math.min(heaters[j] - house, house - heaters[j - 1])
      )
    }
  }
  return radius
}
