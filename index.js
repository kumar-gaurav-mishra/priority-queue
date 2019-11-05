'use strict';
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(element, priority = 0) {
    if (!element) return undefined;
    let node = new Node(element, priority);
    this.values.push(node);
    if (this.values.length <= 1) return this;
    let index = this.values.length - 1;
    while (index > -1) {
      let parent = Math.floor((index - 1) / 2);
      if (this.values[parent] && this.values[index] && this.values[parent].priority > this.values[index].priority) {
        let temp = this.values[parent];
        this.values[parent] = this.values[index];
        this.values[index] = temp;
        index = parent;
      } else {
        return this;
      }
    }
  }
  dequeue() {
    if (this.values.length === 0) return undefined;
    let maxPriorityElement = this.values[0];
    if (this.values.length - 1 > 0) {
      this.values[0] = this.values.pop();
      const length = this.values.length;
      let index = 0;
      let element = this.values[0];
      while (true) {
        let swap = null;
        let leftIdx = 2 * index + 1;
        let rightIdx = 2 * index + 2;
        let leftChild, rightChild;
        if (leftIdx < length) {
          leftChild = this.values[leftIdx];
          if (leftChild.priority < element.priority) {
            swap = leftIdx;
          }
        }
        if (rightIdx < length) {
          rightChild = this.values[rightIdx];
          if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
            swap = rightIdx;
          }
        }
        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;
      }
    } else {
      this.values.pop();
    }

    return maxPriorityElement;
  }
}
module.exports = PriorityQueue;
