/**
 * Problem: Unique Morse Code Words
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2019/10/23
 * Author: Aonan He
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const table = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ]
  const delta = 'a'.charCodeAt()
  const set = new Set()
  for (let i = 0; i < words.length; i++) {
    let s = ''
    for (let j = 0; j < words[i].length; j++) {
      s += table[words[i][j].charCodeAt() - delta]
    }
    set.add(s)
  }
  return set.size
}
