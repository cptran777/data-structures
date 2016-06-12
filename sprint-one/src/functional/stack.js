var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var key = 0; 

  var storage = {};
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.pop = function() {
<<<<<<< HEAD
    if (key > 0) {
      var toPop = storage[key-1];
      delete storage[key-1];
      key--;
    }
    return toPop;
=======
    var result;
    if (key !== 0) {
      key--;
      result = storage[key];
    }
    return result;
>>>>>>> LeahNCharlie
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
