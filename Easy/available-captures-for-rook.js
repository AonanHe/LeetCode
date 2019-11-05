/**
 * Problem: Available Captures for Rook
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2019/11/05
 * Author: Aonan He
 */
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  const N = board.length
  const M = board[0].length
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 'R') {
        return (
          move(i, j, 0, -1) +
          move(i, j, 0, 1) +
          move(i, j, -1, 0) +
          move(i, j, 1, 0)
        )
      }
    }
  }
  function move(x, y, dirX, dirY) {
    while (x >= 0 && y >= 0 && x < N && y < M && board[x][y] !== 'B') {
      if (board[x][y] === 'p') {
        return 1
      }
      x += dirX
      y += dirY
    }
    return 0
  }
}
