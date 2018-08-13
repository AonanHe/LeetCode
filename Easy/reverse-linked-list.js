/**
 * Problem: Reverse Linked List
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2018/05/06
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) { return null }
    let res = null
    function reverse(pre, p) {
        if (p.next) {
            reverse(p, p.next)
            p.next = pre
        } else {
            p.next = pre
            res = p
        }
    }
    reverse(null, head)
    return res
};
