/**
 * Problem: Middle of the Linked List
 * Difficulty: Easy
 * Runtime: 48 ms
 * Date: 2019/10/26
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
var middleNode = function(head) {
  let low = head
  let fast = head
  while (fast && fast.next) {
    low = low.next
    fast = fast.next.next
  }
  return low
}
