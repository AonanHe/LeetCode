/**
 * Problem: Design HashMap
 * Difficulty: Easy
 * Runtime: 180 ms
 * Date: 2019/01/02
 * Author: Aonan He
 */
/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.hash = {}
}

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  this.hash[key] = value
}

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  if (key in this.hash) return this.hash[key]
  return -1
}

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  delete this.hash[key]
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = Object.create(MyHashMap).createNew()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
