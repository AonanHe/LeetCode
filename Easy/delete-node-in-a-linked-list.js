/**
 * Problem: Delete Node in a Linked List
 * Difficulty: Easy
 * Runtime: 64 ms
 * Date: 2018/05/11
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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if (!node || !node.next) { return }
    node.val = node.next.val
    node.next = node.next.next
};