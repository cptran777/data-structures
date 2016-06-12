var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  var size = 0;
  var firstKey = 0;
  var nextKey = 0;

  someInstance.enqueue = function(value) {
<<<<<<< HEAD
    storage[nextKey] = value;
    size++;
    nextKey++;
=======
    storage[size] = value;
    size++;
>>>>>>> LeahNCharlie
  };

  someInstance.dequeue = function() {
    if (size > 0) {
<<<<<<< HEAD
      var toDequeue = storage[firstKey];
      delete storage[firstKey];
      size--;
      firstKey++;
    }
    return toDequeue;
=======
      size--;
      var result = storage[0];
      for (var i = 1; i <= size; i++) {
        storage[i - 1] = storage[i];
      }     
    }
    return result;
>>>>>>> LeahNCharlie
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
