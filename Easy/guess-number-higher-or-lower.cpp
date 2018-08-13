/**
 * Problem: Guess Number Higher or Lower
 * Difficulty: Easy
 * Runtime: 2 ms
 * Date: 2018/05/24
 * Author: Aonan He
 */

// Forward declaration of guess API.
// @param num, your guess
// @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
int guess(int num);

class Solution {
public:
    int guessNumber(int n) {
        int left = 1;
        int right = n;
        int mid = 0;
        int result = 0;
        while (left <= right) {
            mid = (right - left) / 2 + left;
            result = guess(mid);
            if (result == -1) {
                right = mid - 1;
            } else if (result == 1) {
                left = mid + 1;
            } else if (result == 0) {
                return mid;
            }
        }
        return left;
    }
};
