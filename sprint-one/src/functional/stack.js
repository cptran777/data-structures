var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var key = 0; 

  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.pop = function() {
    var result;
    if (key !== 0) {
      key--;
      result = storage[key];
    }
    return result;
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
