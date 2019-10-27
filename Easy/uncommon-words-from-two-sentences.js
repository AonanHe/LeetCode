/**
 * Problem: Uncommon Words from Two Sentences
 * Difficulty: Easy
 * Runtime: 68 ms
 * Date: 2019/10/27
 * Author: Aonan He
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  const dict = {}
  const arrA = A.split(' ')
  const arrB = B.split(' ')
  arrA.forEach(word => {
    dict[word] = (dict[word] || 0) + 1
  })
  arrB.forEach(word => {
    dict[word] = (dict[word] || 0) + 1
  })
  const ans = []
  for (let word in dict) {
    if (dict[word] === 1) {
      ans.push(word)
    }
  }
  return ans
}
