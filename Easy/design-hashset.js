/**
 * Problem: Design HashSet
 * Difficulty: Easy
 * Runtime: 176 ms
 * Date: 2019/01/02
 * Author: Aonan He
 */
/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.hash = {}
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  this.hash[key] = true
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  delete this.hash[key]
}

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  return this.hash[key] === true
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
