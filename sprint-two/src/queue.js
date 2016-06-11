var Queue = function() {
  this.queueSize = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.queueSize;
};
Queue.prototype.enqueue = function(val) {
  this.storage[this.queueSize] = val;
  this.queueSize++;
};
Queue.prototype.dequeue = function() {
  if (this.queueSize > 0) {
    this.queueSize--;
    var result = this.storage[0];
    for (var i = 1; i <= this.queueSize; i++) {
      this.storage[i - 1] = this.storage[i];
    }
  }
  return result;  
};


