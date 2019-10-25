/**
 * Problem: Lemonade Change
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2019/10/25
 * Author: Aonan He
 */
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  const dict = {}
  const cash = [20, 10, 5]
  function change(money) {
    let total = money
    for (let i = 0; i < cash.length; i++) {
      const x = Math.floor(total / cash[i])
      const num = cash[i]
      if (dict[num]) {
        if (dict[num] >= x) {
          total -= x * num
          dict[num] -= x
        } else {
          total -= dict[num] * num
          dict[num] = 0
        }
      }
      if (total === 0) return true
    }
    return total === 0
  }
  for (let i = 0; i < bills.length; i++) {
    const diff = bills[i] - 5
    if (!change(diff)) return false
    dict[bills[i]] = (dict[bills[i]] || 0) + 1
  }
  return true
}
