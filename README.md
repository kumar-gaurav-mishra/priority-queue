# Priority Queue

Priority Queue Implementation in JavaScript

### Installation & Usage :

```Installation

npm install priority-queue

```

```Javascript
const Queue = require('priority-queue');

let queue = new Queue();
queue.enqueue("Walk the dog", 10); // enqueue take first argument as event and second argument as priority. Priority 1 is greater than 2
queue.dequeue(); // gives you the node with lowest priority
```
