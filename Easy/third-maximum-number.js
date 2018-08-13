/**
 * Problem: Third Maximum Number
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/05/27
 * Author: Aonan He
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let res = undefined
    function find(maximun) {
        let ans = -Infinity
        for (let i = 0; i < nums.length; i++) {
            if ((maximun === undefined) || 
                ((nums[i] !== maximun) && (nums[i] < maximun))) {
                ans = Math.max(nums[i], ans)
            }
        }
        return ans
    }
    for (let i = 0; i < 3; i++) {
        res = find(res)
    }
    return res == -Infinity ? find(undefined) : res
};
