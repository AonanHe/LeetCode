/**
 * Problem: Min Stack
 * Difficulty: Easy
 * Runtime: 72 ms
 * Date: 2018/04/23
 * Author: Aonan He
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    const len = this.minStack.length
    if (!this.minStack.length || this.minStack[len - 1] >= x) {
        this.minStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const x = this.stack.pop()
    const len = this.minStack.length
    if (this.minStack[len - 1] === x) {
        this.minStack.pop()
    }
    return x
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const len = this.stack.length
    return this.stack[len - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const len = this.minStack.length
    return this.minStack[len - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
