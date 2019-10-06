/**
 * Problem: Robot Return to Origin
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2019/10/06
 * Author: Aonan He
 */
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  const count = {}
  for (let i = 0; i < moves.length; i++) {
    count[moves[i]] = (count[moves[i]] || 0) + 1
  }
  return count['L'] === count['R'] && count['U'] === count['D']
}
