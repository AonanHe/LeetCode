/**
 * Problem: String Compression
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2018/11/10
 * Author: Aonan He
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let i = 0
  let j = 0
  while (j < chars.length) {
    if (chars[j] === chars[j + 1]) {
      j++
    } else {
      const count = j - i + 1
      const s = count.toString()
      if (count === 1) {
        i += 1
      } else {
        chars.splice(i + 1, count - 1, ...s.split(''))
        i += s.length + 1
      }
      j = i
    }
  }
}
