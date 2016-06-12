var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stack = {};
  this.key = 0;
};

Stack.prototype.size = function () {
  return this.key;
};

Stack.prototype.push = function (val) {
  this.stack[this.key] = val;
  this.key++;
};

Stack.prototype.pop = function () {
  if ( this.key > 0) {
    this.key--;
    return this.stack[this.key];
  }
};


