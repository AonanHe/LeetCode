/**
 * Problem: Design Linked List
 * Difficulty: Easy
 * Runtime: 136 ms
 * Date: 2019/01/02
 * Author: Aonan He
 */
/**
 * Initialize your data structure here.
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

var MyLinkedList = function() {
  this.head = null
  this.size = 0
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || this.size <= index) return -1
  let cursor = this.head
  for (let i = 0; i < index; i++) {
    cursor = cursor.next
  }
  return cursor.val
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const cursor = new ListNode(val)
  cursor.next = this.head
  this.head = cursor
  this.size++
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let cursor = this.head
  while (cursor.next) {
    cursor = cursor.next
  }
  if (!cursor) {
    this.head = new ListNode(val)
  } else {
    cursor.next = new ListNode(val)
  }
  this.size++
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0 || index > this.size) return
  if (index === 0) {
    this.addAtHead(val)
    return
  }
  let cursor = this.head
  for (let i = 0; i < index - 1; i++) {
    cursor = cursor.next
  }
  let pointer = new ListNode(val)
  pointer.next = cursor.next
  cursor.next = pointer
  this.size++
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) return
  if (index === 0) {
    this.head = this.head.next
    this.size--
    return
  }
  let cursor = this.head
  for (let i = 0; i < index - 1; i++) {
    cursor = cursor.next
  }
  cursor.next = cursor.next.next
  this.size--
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
