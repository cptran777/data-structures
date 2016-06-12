var Stack = function() {
  var object = {
    key: 0,
    stack: {}
  };

  _.extend(object, stackMethods);

  return object;
};

var stackMethods = {
  size: function() {
    return this.key;
  }, 
  push: function(val) {
    this.stack[this.key] = val;
    this.key++;
  },
  pop: function() {
    if (this.key > 0) {
      this.key--;
      var result = this.stack[this.key]; 
      delete this.stack[this.key];     
    }
    return result;
  }
};


