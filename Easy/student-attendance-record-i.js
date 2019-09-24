/**
 * Problem: Student Attendance Record I
 * Difficulty: Easy
 * Runtime: 52 ms
 * Date: 2018/12/30
 * Author: Aonan He
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let late = 0
  let absent = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      absent++
    }
    if (s[i] === 'L') {
      late++
    } else {
      late = 0
    }
    if (late > 2 || absent > 1) {
      return false
    }
  }
  return true
}
