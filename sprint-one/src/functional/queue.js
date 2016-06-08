var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  var firstKey = 0;
  var nextKey = 0;

  someInstance.enqueue = function(value) {
    storage[nextKey] = value;
    size++;
    nextKey++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      delete storage[firstKey];
      size--;
      firstKey++;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
