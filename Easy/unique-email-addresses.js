/**
 * Problem: Unique Email Addresses
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2019/10/31
 * Author: Aonan He
 */
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const set = new Set()
  for (let i = 0; i < emails.length; i++) {
    ;[s, t] = emails[i].split('@')
    const plus = s.indexOf('+')
    const email =
      (plus === -1 ? s : s.slice(0, plus)).replace(/\./g, '') + '@' + t
    set.add(email)
  }
  return set.size
}
