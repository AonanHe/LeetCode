/**
 * Problem: Remove Linked List Elements
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2018/05/04
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dummy = new ListNode(0)
    dummy.next = head
    let p = dummy
    while (p && p.next) {
        if (p.next.val === val) {
            p.next = p.next.next
        } else {
            p = p.next
        }
    }
    return dummy.next
};