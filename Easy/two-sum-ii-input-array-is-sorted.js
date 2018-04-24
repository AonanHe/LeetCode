/**
 * Problem: Two Sum II - Input array is sorted
 * Difficulty: Easy
 * Runtime: 56 ms
 * Date: 2018/04/24
 * Author: Aonan He
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        let left = i + 1,
            right = numbers.length - 1,
            x = target - numbers[i]
        while (left <= right) {
            mid = (left + right) >> 1
            if (numbers[mid] < x) {
                left = mid + 1
            } else if (numbers[mid] > x) {
                right = mid - 1
            } else {
                return [i + 1, mid + 1]
            }
        }
    }
};