/**
 * Problem: License Key Formatting
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2019/09/26
 * Author: Aonan He
 */
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  let str = ''
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== '-') {
      str += S[i].toUpperCase()
    }
  }
  let x = str.length % K
  let count = 0
  let secret = str.substr(0, x)
  if (secret.length && secret.length !== str.length) {
    secret += '-'
  }
  for (let i = x; i < str.length; i++) {
    if (count < K) {
      secret += str[i]
      count += 1
    }
    if (count === K) {
      if (i !== str.length - 1) {
        secret += '-'
      }
      count = 0
    }
  }
  return secret
}
