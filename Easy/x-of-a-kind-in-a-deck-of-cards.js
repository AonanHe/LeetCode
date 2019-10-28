/**
 * Problem: X of a Kind in a Deck of Cards
 * Difficulty: Easy
 * Runtime: 80 ms
 * Date: 2019/10/28
 * Author: Aonan He
 */
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  function gcd(a, b) {
    if (b === 0) return a
    return gcd(b, a % b)
  }
  const count = {}
  deck.forEach(x => {
    count[x] = (count[x] || 0) + 1
  })
  let num = count[deck[0]]
  deck.forEach(x => {
    num = gcd(num, count[x])
  })
  return !(num === 1)
}
