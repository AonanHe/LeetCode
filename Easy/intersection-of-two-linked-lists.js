/**
 * Problem: Intersection of Two Linked Lists
 * Difficulty: Easy
 * Runtime: 84 ms
 * Date: 2018/04/23
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
    function traverse(head) {
        let p = head
        let count = 0
        while (p) {
            count ++
            p = p.next
        }
        return count
    }
    function move(head, step) {
        let p = head
        for (let i = 0; i < step; i++) {
            p = p.next
        }
        return p
    }
    const lenA = traverse(headA)
    const lenB = traverse(headB)
    let p = headA,
        q = headB
    if (lenA > lenB) {
        p = move(p, lenA - lenB)
    } else {
        q = move(q, lenB - lenA)
    }
    while (p && q) {
        if (p === q) {
            return p
        }
        p = p.next
        q = q.next
    }
    return null
};