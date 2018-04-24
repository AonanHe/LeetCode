/**
 * Problem: Intersection of Two Linked Lists
 * Difficulty: Easy
 * Runtime: 88 ms
 * Date: 2018/04/24
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null
    }
    let p = headA,
        q = headB
    while (p !== q) {
        p = p === null ? headB : p.next
        q = q === null ? headA : q.next
    }
    return p
};