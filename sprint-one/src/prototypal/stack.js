var Stack = function() {
  var object = Object.create(stackMethods);
  object.key = 0;
  object.stack = {};
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


