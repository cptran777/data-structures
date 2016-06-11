var BinarySearchTree = function(value) {

  var obj = {};
  var itemCount = 1;

  obj.right = null;
  obj.left = null;
  obj.parent = null;
  obj.value = value;
  obj.depth = 1;

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
    var addNewTree = function () {
      itemCount++;
      var newTree = BinarySearchTree(val);
      newTree.parent = obj;
      newTree.depth = obj.depth + 1;
      return newTree;
    };

    if (val < obj.value) {
      if (obj.left === null) {
        obj.left = addNewTree();
        if (obj.left.depth > 2 * Math.log2(itemCount + 1)) {
          debugger;
          var rootTree = obj.parent;
          while (rootTree.parent !== null) {
            rootTree = rootTree.parent;
          }
          rootTree.rebalance();
        }
      } else {
        obj.left.insert(val);
      }
    } else if (val > obj.value) {
      if (obj.right === null) {
        obj.right = addNewTree();
        if (obj.right.depth > 2 * Math.log2(itemCount + 1)) {
          debugger;
          var rootTree = obj.parent;
          while (rootTree.parent !== null) {
            rootTree = rootTree.parent;
          }
          rootTree.rebalance();
        }
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

  obj.breadthFirstLog = function (callback) {
    var queue = new Queue();
    queue.enqueue(obj);
    while (queue.size() > 0) {
      var currentTree = queue.dequeue();
      callback(currentTree.value);
      if (currentTree.left !== null) {
        queue.enqueue(currentTree.left);
      }
      if (currentTree.right !== null) {
        queue.enqueue(currentTree.right);
      }
    }
  };

  obj.rebalance = function() {
    var storage = [];
    var newTree;
    obj.depthFirstLog(function fillArray(leaf) {
      storage.push(leaf);
    });
    console.log(storage);

    var insertionRecursion = function(arr, createTree) {
      if (arr.length <= 1) {
        newTree.insert(arr[0]);
      } else if (arr.length === 2) {
        newTree.insert(arr[0]);
        newTree.insert(arr[1]);
      } else {
        var middle = Math.floor(arr.length / 2);
        if (createTree) {
          newTree = BinarySearchTree(arr[middle]);
        } else {
          newTree.insert(arr[middle]);
        }
        var arrayA = arr.slice(0, middle);
        var arrayB = arr.slice(middle + 1);    
        insertionRecursion(arrayA, false);
        insertionRecursion(arrayB, false);  
      }
    };
    insertionRecursion(storage.sort(), true);
    obj = newTree;
  };

  return obj;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * contains => O(log n)
 * insert => O(log n)
 * depthFirstLog => O(n)
 */
