/**
 * Problem: Subdomain Visit Count
 * Difficulty: Easy
 * Runtime: 104 ms
 * Date: 2019/10/24
 * Author: Aonan He
 */
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  const count = {}
  function calc(total, s) {
    const arr = s.split('.')
    let current = ''
    for (let i = arr.length - 1; i >= 0; i--) {
      current = arr[i] + (i !== arr.length - 1 ? '.' : '') + current
      count[current] = (count[current] || 0) + Number(total)
    }
  }
  for (let i = 0; i < cpdomains.length; i++) {
    const [total, s] = cpdomains[i].split(' ')
    calc(total, s)
  }
  const ans = []
  for (let d in count) {
    ans.push(`${count[d]} ${d}`)
  }
  return ans
}
