var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = {
    objectSize: 0,
    storage: {}
  };

  _.extend(object, queueMethods);

  return object;

};

var queueMethods = {
  size: function () {
    return this.objectSize;
  },
  enqueue: function (val) {
    this.storage[this.objectSize] = val;
    this.objectSize++;
  },
  dequeue: function () {
    if (this.objectSize > 0) {
      var result = this.storage[0];
      this.objectSize--;
      for ( var i = 1; i <= this.objectSize; i++) {
        this.storage[i-1] = this.storage[i];
      }
    }
    return result;
  }
};