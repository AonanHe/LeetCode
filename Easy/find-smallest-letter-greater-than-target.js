/**
 * Problem: Find Smallest Letter Greater Than Target
 * Difficulty: Easy
 * Runtime: 92 ms
 * Date: 2019/01/07
 * Author: Aonan He
 */
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let left = 0
  let right = letters.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (letters[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return letters[left % letters.length]
}