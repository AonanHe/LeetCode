/**
 * Problem: Reverse Vowels of a String
 * Difficulty: Easy
 * Runtime: 132 ms
 * Date: 2018/05/23
 * Author: Aonan He
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const str = s.split('')
    const index = []
    const letter = str.filter((ch, idx) => {
        if (vowel.indexOf(ch) !== -1) {
            index.push(idx)
            return true
        }
        return false
    })
    letter.reverse()
    for (let i = 0; i < index.length; i++) {
        str[index[i]] = letter[i]
    }
    return str.join('')
};
