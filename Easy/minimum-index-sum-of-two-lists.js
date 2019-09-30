/**
 * Problem: Minimum Index Sum of Two Lists
 * Difficulty: Easy
 * Runtime: 96 ms
 * Date: 2019/09/30
 * Author: Aonan He
 */
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let sum = list1.length + list2.length
  let res = []
  list1.forEach((s, index) => {
    const pos = list2.indexOf(s)
    if (pos !== -1) {
      if (pos + index < sum) {
        sum = pos + index
        res = [s]
      } else if (pos + index === sum) {
        res.push(s)
      }
    }
  })
  return res
}
