var DoubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.previous = null;

  list.addToTail = function(value) {
    var newNode = DNode(value);
    if (list.tail !== null) {
      newNode.previous = list.tail;
      list.tail.next = newNode;
    } else {
      list.head = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var idontknow = list.head.value;
    list.head = list.head.next;
    if (list.head !== null) {
      list.head.previous = null;
    }
    return idontknow;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  list.addToHead = function (value) {
    var newNode = DNode(value);
    if (list.head !== null) {
      list.head.previous = newNode;
      newNode.next = list.head;
    } else {
      list.tail = newNode;
    }
    list.head = newNode; 
  };

  list.removeTail = function () {
    var idontknow = list.tail.value;
    list.tail = list.tail.previous;
    if (list.tail !== null) {
      list.tail.next = null;
    }
    return idontknow;
  };

  return list;
};

var DNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 list.contains => O(n) time
 list.removeHead & list.addToTail => O(1) time
 */
