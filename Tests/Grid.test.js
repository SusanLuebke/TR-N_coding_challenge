const Grid = require('../Solutions/Grid');

describe('Grid', () => {
  test('Grid successfully created', () => {
    const grid = new Grid([5, 5]);
    expect(grid.x).toEqual(5);
    expect(grid.y).toEqual(5);
  });

  test('Throws an error if grid size settings are not integers', () => {
    expect(() => {
      new Grid(['one', 'one']);
    }).toThrow('Grid (i.e. plateau) coordinates must be integers');
  });
});
