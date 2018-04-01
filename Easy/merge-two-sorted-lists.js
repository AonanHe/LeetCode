/**
 * Problem: Merge Two Sorted Lists
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2018/04/01
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) { return l2 }
    if (!l2) { return l1 }
    let p1 = l1, p2 = l2
    let res = null, p = null, minNode = null
    while (p1) {
        if (!p2) { break }
        if (p1.val < p2.val) {
            minNode = new ListNode(p1.val)
            p1 = p1.next
        } else {
            minNode = new ListNode(p2.val)
            p2 = p2.next
        }
        if (!res) {
            res = minNode
            p = res
        } else {
            p.next = minNode
            p = p.next
        }
    }
    if (p1) { p.next = p1 }
    if (p2) { p.next = p2 }
    return res
};
