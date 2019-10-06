/**
 * Problem: Baseball Game
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2019/10/06
 * Author: Aonan He
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const arr = []
  let i = 0
  for (let ch of ops) {
    switch (ch) {
      case '+':
        arr[i] = arr[i - 1] + arr[i - 2]
        i += 1
        break
      case 'D':
        arr[i] = arr[i - 1] * 2
        i += 1
        break
      case 'C':
        arr[i - 1] = 0
        i -= 1
        break
      default:
        arr[i] = +ch
        i += 1
    }
  }
  return arr.reduce((pre, cur) => pre + cur)
}
