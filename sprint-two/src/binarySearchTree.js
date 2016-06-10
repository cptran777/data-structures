var BinarySearchTree = function(value) {

  var obj = {};

  obj.right = null;
  obj.left = null;
  obj.value = value;

  obj.contains = function (val) {
    if (obj.value === val) {
      return true;
    } else if (val < obj.value && obj.left !== null) {
      return obj.left.contains(val);
    } else if (obj.right !== null) {
      return obj.right.contains(val);
    }
    return false;
  };

  obj.insert = function (val) {
    //var newTree = BinarySearchTree(val);
    if (val < obj.value) {
      if (obj.left === null) {
        var newTree = BinarySearchTree(val);
        obj.left = newTree;
      } else {
        obj.left.insert(val);
      }
    } else if (val > obj.value) {
      if (obj.right === null) {
        var newTree = BinarySearchTree(val);
        obj.right = newTree;
      } else {
        obj.right.insert(val);
      }
    }
  };

  obj.depthFirstLog = function (callback) {
    callback(obj.value);
    if (obj.left !== null) {
      obj.left.depthFirstLog(callback);
    }
    if (obj.right !== null) {
      obj.right.depthFirstLog(callback);
    }
  };

  return obj;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * contains => O(log n)
 * insert => O(log n)
 * depthFirstLog => O(n)
 */
