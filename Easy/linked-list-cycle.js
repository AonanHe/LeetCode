/**
 * Problem: Linked List Cycle
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2018/04/19
 * Author: Aonan He
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p = head
    while (p) {
        if (p.val === Infinity) {
            return true
        }
        p.val = Infinity
        p = p.next
    }
    return false
};
