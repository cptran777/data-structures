describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should add numbers and objectds to a set', function() {
    set.add(47);
    set.add({mykey: 'Hi Leah'});
    expect(set.contains(47)).to.equal(true);
    expect(set.contains({mykey: 'Hi Leah'})).to.equal(true);
  });  

  it('should remove numbers and objects from a set', function() {
    set.add(47);
    set.add({mykey: 'Hi Leah'});
    set.remove(47);
    set.remove({mykey: 'Hi Leah'});
    expect(set.contains(47)).to.equal(false);
    expect(set.contains({mykey: 'Hi Leah'})).to.equal(false);    
  });

});
