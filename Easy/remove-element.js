/**
 * Problem: Remove Element
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2018/04/01
 * Author: Aonan He
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0
    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1)
        } else {
            i += 1
        }
    }
    return i
};
