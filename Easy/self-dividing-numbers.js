/**
 * Problem: Self Dividing Numbers
 * Difficulty: Easy
 * Runtime: 80 ms
 * Date: 2019/01/06
 * Author: Aonan He
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function check(num) {
  const arr = num.toString().split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '0' || num % arr[i] !== 0) {
      return false
    }
  }
  return true
}

var selfDividingNumbers = function(left, right) {
  const result = []
  for (let i = left; i <= right; i++) {
    if (check(i)) result.push(i)
  }
  return result
}
