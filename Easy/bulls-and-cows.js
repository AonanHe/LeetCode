/**
 * Problem: Bulls and Cows
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2019/09/26
 * Author: Aonan He
 */
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let bulls = 0
  let cows = 0
  const dict = {}
  for (let i = 0; i < secret.length; i++) {
    const x = secret[i]
    if (x === guess[i]) {
      bulls += 1
    }
    if (!dict[x]) {
      dict[x] = 1
    } else {
      dict[x] += 1
    }
  }
  for (let i = 0; i < guess.length; i++) {
    const x = guess[i]
    if (dict[x] > 0) {
      cows += 1
      dict[x] -= 1
    }
  }
  return bulls + 'A' + (cows - bulls) + 'B'
}
