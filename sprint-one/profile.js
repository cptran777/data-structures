var newQueue, newStack;
var scalar = 100000;

for (var i = 0; i < scalar; i++) {
  newQueue = new Queue();
}

for (var i = 0; i < scalar; i++) {
  newQueue.enqueue(i);
}

for (var i = 0; i < scalar; i++) {
  newQueue.dequeue(i);
}

for (var i = 0; i < scalar; i++) {
  newStack = new Stack();
}

for (var i = 0; i < scalar; i++) {
  newStack.push(i);
}

for (var i = 0; i < scalar; i++) {
  newStack.pop(i);
}
