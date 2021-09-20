const Triangle = require('./triangle');

describe('Triangle', function () {
  it('with one row', function () {
    expect(new Triangle(1).rows).toEqual([[1]]);
  });

  it('with two rows', function () {
    expect(new Triangle(2).rows).toEqual([[1], [1, 1]]);
  });

  it('with three rows', function () {
    expect(new Triangle(3).rows).toEqual([[1], [1, 1], [1, 2, 1]]);
  });

  it('last row', function () {
    expect(new Triangle(4).lastRow).toEqual([1, 3, 3, 1]);
  });

  it('fifth row', function () {
    expect(new Triangle(5).lastRow).toEqual([1, 4, 6, 4, 1]);
  });

});