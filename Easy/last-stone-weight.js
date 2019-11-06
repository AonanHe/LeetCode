/**
 * Problem: Last Stone Weight
 * Difficulty: Easy
 * Runtime: 60 ms
 * Date: 2019/11/06
 * Author: Aonan He
 */
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  const heap = []

  function swap(arr, i, j) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  function size() {
    return heap.length
  }

  function getParent(index) {
    return Math.floor((index - 1) / 2)
  }

  function getLeftChild(index) {
    return 2 * index + 1
  }

  function siftUp(index) {
    let current = index
    while (current) {
      const parent = getParent(current)
      if (heap[parent] < heap[current]) {
        swap(heap, parent, current)
      } else {
        break
      }
      current = parent
    }
  }

  function siftDown(index) {
    let parent = index
    let current = getLeftChild(parent)
    const len = size()
    while (current < len) {
      const rightChild = current + 1
      if (rightChild < len && heap[current] < heap[rightChild]) {
        current = rightChild
      }
      if (heap[parent] < heap[current]) {
        swap(heap, parent, current)
      } else {
        break
      }
      parent = current
      current = getLeftChild(parent)
    }
  }

  function insert(val) {
    const index = size()
    heap.push(val)
    siftUp(index)
  }

  function get() {
    return heap[0]
  }

  function extract() {
    const bottom = size() - 1
    if (bottom < 0) return undefined
    swap(heap, 0, bottom)
    const node = heap.pop()
    siftDown(0)
    return node
  }

  function heapify(arr) {
    arr.forEach(item => {
      insert(item)
    })
  }

  heapify(stones)
  while (size() > 1) {
    const x = extract()
    const y = extract()
    const diff = Math.abs(x - y)
    if (diff !== 0) {
      insert(diff)
    }
  }
  return heap.length > 0 ? get() : 0
}
