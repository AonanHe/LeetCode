/**
 * Problem: Implement Queue using Stacks
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2018/05/10
 * Author: Aonan He
 */

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    const backup = []
    let len = this.stack.length
    while (len) {
        const x = this.stack.pop()
        backup.push(x)
        len --
    }
    this.stack.push(x)
    len = backup.length
    while (len) {
        const x = backup.pop()
        this.stack.push(x)
        len --
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const len = this.stack.length
    return this.stack[len - 1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
