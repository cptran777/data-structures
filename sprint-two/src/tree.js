var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var babyTree = Tree(value);
  babyTree.parent = this;
  this.children.push(babyTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } 
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function () {
  var parent = this.parent;
  this.parent = null;
  for (var x = 0; x < parent.children.length; x++) {
    if (parent.children[x] === this) {
      return parent.children.splice(x, 1)[0]; 
    }
  }
};

treeMethods.traverse = function (callback) {
  var val = callback(this.value);
  this.value = val === undefined ? val : this.value;
  this.children.forEach(function traverseChildren (child) {
    child.traverse(callback);
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild => O(1)
 * contains => O(n)
 * removeFromParent => O(n)
 * traverse => O(n);
 */
