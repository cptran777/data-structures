

// Instantiate a new graph
var Graph = function() {
  this.nodeList = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {
    value: node,
    edgeList: []
  };
  this.nodeList.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === node) {
      return this.nodeList.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    var fromIndex, toIndex;
    this.forEachNode(function(node, index) {
      if (node.value === fromNode) {
        fromIndex = index;
      } if (node.value === toNode) {
        toIndex = index;
      }
    });

    return _.some(this.nodeList[fromIndex].edgeList, function(node) {
      return node.value === toNode;
    }) && _.some(this.nodeList[toIndex].edgeList, function(node) {
      return node.value === fromNode;
    });
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  fromNode = typeof fromNode === 'object' ? fromNode.value : fromNode;
  toNode = typeof toNode === 'object' ? toNode.value : toNode;
  if (this.contains(fromNode) && this.contains(toNode)) {
    var fromIndex, toIndex;
    for (var i = 0; i < this.nodeList.length; i++) {
      if (this.nodeList[i].value === fromNode) {
        fromIndex = i;
      } 
      if (this.nodeList[i].value === toNode) {
        toIndex = i;
      }
    }
    this.nodeList[fromIndex].edgeList.push(this.nodeList[toIndex]);
    this.nodeList[toIndex].edgeList.push(this.nodeList[fromIndex]);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    var fromIndex, toIndex;
    for (var i = 0; i < this.nodeList.length; i++) {
      if (this.nodeList[i].value === fromNode) {
        fromIndex = i;
      } if (this.nodeList[i].value === toNode) {
        toIndex = i;
      }
    }

    var fromEdgeList = this.nodeList[fromIndex].edgeList;
    for (var i = 0; i < fromEdgeList.length; i++) {
      if (fromEdgeList[i].value === toNode) {
        fromEdgeList.splice(i, 1);
      }
    }
    var toEdgeList = this.nodeList[toIndex].edgeList;
    for (var i = 0; i < toEdgeList.length; i++) {
      if (toEdgeList[i].value === fromNode) {
        toEdgeList.splice(i, 1);
      }
    }

  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodeList.forEach(function() {
    cb.apply(this, arguments);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * contains => O(n)
 * removeNode => O(n)
 * hasEdge => O(n)
 * remove => O(n)
 * forEachNode => varies with the nature of callback, but will always be 
   greater than or equal to O(n)
 */


