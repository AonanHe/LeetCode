/**
 * Problem: Remove Duplicates from Sorted List
 * Difficulty: Easy
 * Runtime: 76 ms
 * Date: 2018/04/05
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
var deleteDuplicates = function(head) {
    let pre = head
    if (!head) { return head }
    let p = pre.next
    while (p) {
        while ((p) && (pre.val === p.val)) {
            p = p.next
        }
        pre.next = p
        pre = p
        p = pre && pre.next
    }
    return head
};
