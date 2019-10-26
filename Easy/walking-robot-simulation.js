/**
 * Problem: Walking Robot Simulation
 * Difficulty: Easy
 * Runtime: 84 ms
 * Date: 2019/10/26
 * Author: Aonan He
 */
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  const dirX = [0, 1, 0, -1]
  const dirY = [1, 0, -1, 0]
  let faces = 0
  let x = 0
  let y = 0
  let ans = 0
  function hash(x, y) {
    return x * 10 ** 6 + y
  }
  const set = new Set()
  obstacles.forEach(obstacle => {
    set.add(hash(obstacle[0], obstacle[1]))
  })
  commands.forEach(command => {
    switch (command) {
      case -1:
        faces = (faces + 1) % 4
        break
      case -2:
        faces = (faces + 3) % 4
        break
      default:
        for (let i = 1; i <= command; i++) {
          const nx = x + dirX[faces]
          const ny = y + dirY[faces]
          if (set.has(hash(nx, ny))) break
          x = nx
          y = ny
          ans = Math.max(ans, x * x + y * y)
        }
    }
  })
  return ans
}
