var BinarySearchTree = function(value) {

  var obj = {};
  var itemCount = 1;

  obj.right = null;
  obj.left = null;
  obj.parent = null;
  obj.value = value;
  obj.depth = 1;
  var isRoot = true;
  var treeDepth = 1;

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
    itemCount++;
    var addNewTree = function () {
      var newTree = BinarySearchTree(val);
      newTree.parent = obj;
      newTree.depth = obj.depth + 1;
      newTree.isRoot = false;
      return newTree;
    };

    if (val < obj.value) {
      if (obj.left === null) {
        obj.left = addNewTree();
        if (!isRoot) {
          return obj.left.depth;
        } else {
          treeDepth = obj.left.depth;
        }
        // if (obj.left.depth > 2 * Math.log2(itemCount + 1)) {
        //   var rootTree = obj.parent;
        //   while (rootTree.parent !== null) {
        //     rootTree = rootTree.parent;
        //   }
        //   rootTree.rebalance();
        // }
      } else {
        if (isRoot) {
          treeDepth = obj.left.insert(val);
        } else {
          return obj.right.insert(val);
        }
      }
    } else if (val > obj.value) {
      if (obj.right === null) {
        obj.right = addNewTree();
        if (!isRoot) {
          return obj.right.depth;
        } else {
          treeDepth = obj.right.depth;
        }
        // if (obj.right.depth > 2 * Math.log2(itemCount + 1)) {
        //   debugger;
        //   var rootTree = obj.parent;
        //   while (rootTree.parent !== null) {
        //     rootTree = rootTree.parent;
        //   }
        //   rootTree.rebalance();
        // }
      } else {
        if (isRoot) {
          treeDepth = obj.right.insert(val);
        } else {
          return obj.right.insert(val);
        }
      }
    }
    if (isRoot && obj.checkBalance()) {
      obj.rebalance();
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

  obj.checkBalance = function () {
    return treeDepth > 2 * Math.log2(itemCount + 1);
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
