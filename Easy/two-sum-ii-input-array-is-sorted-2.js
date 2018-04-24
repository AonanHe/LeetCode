/**
 * Problem: Two Sum II - Input array is sorted
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/04/24
 * Author: Aonan He
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const map = new Map()
    for (let i = 0; i < numbers.length; i++) {
        const x = target - numbers[i]
        const index = map.get(x)
        if (index !== undefined) {
            return [index + 1, i + 1]
        }
        map.set(numbers[i], i)
    }
};