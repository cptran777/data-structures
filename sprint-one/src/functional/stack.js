var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.pop = function() {
    if (key > 0) {
      var toPop = storage[key-1];
      delete storage[key-1];
      key--;
    }
    return toPop;
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
