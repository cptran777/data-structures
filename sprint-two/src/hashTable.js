


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, {});
  }
  this._storage.get(index)[k] = v;
  this._count++;

  if (this._count >= .75 * this._limit) {
    this.resize(2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var testVar = this._storage.get(index);
  delete this._storage.get(index)[k];
  this._count--;
  if (this._count <= .25 * this._limit && (this._limit > 8)) {
    this.resize(.5);
  }
};

HashTable.prototype.resize = function(scalar) {
  this._limit = this._limit * scalar;
  var newTable = LimitedArray(this._limit);
  var self = this;
  this._storage.each(function(item, index) {
    if (item !== undefined) {
      for (var key in item) {
        var newIndex = getIndexBelowMaxForKey(key, self._limit);
        if (newTable.get(newIndex) === undefined) {
          newTable.set(newIndex, {});
        }
        newTable.get(newIndex)[key] = item[key];
      }
    }
  });
  this._storage = newTable;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert => O(1)
 * retrieve => O(1)
 * remove => O(1)
 * resize => O(n)
 */


