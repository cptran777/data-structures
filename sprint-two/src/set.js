var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var itemStringed = JSON.stringify(item);
  this._storage[itemStringed] = true;
};

setPrototype.contains = function(item) {
  var itemStringed = JSON.stringify(item);
  return this._storage[itemStringed] !== undefined;
};

setPrototype.remove = function(item) {
  var itemStringed = JSON.stringify(item);
  delete this._storage[itemStringed];
};

/*
 * Complexity: What is the time complexity of the above functions?
 for all functions, O(1) time. 
 */
