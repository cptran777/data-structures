describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree(9001);
  });

  it('should have methods named "addChild", "traverse", "removeFromParent" and "contains", and a property named "value" and parent', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should check if child has the correct parent', function() {
    tree.addChild(5);
    expect(tree.children[0].parent.value).to.equal(9001);
    expect(tree.children[0].parent).to.equal(tree);
  });  

  it('should dissociate a child from a tree', function() {
    tree.addChild(5);
    var orphan = tree.children[0].removeFromParent();
    expect(tree.contains(orphan.value)).to.equal(false);
    expect(orphan.parent).to.equal(null);
  });  

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should call a function on every value using traverse in a tree', function() {
    var testArray = [];
    var addTwo = function (value) {
      testArray.push(value + 2);
    };
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(8);
    tree.traverse(addTwo);
    expect(testArray).to.eql([9003, 7, 9, 10, 8]);
  });

});
