const MarsRover = require('../Solutions/MarsRover');
const Grid = require('../Solutions/Grid');

// Default setting is [0, 0], 'N' of a 5 x 5 grid
beforeEach(() => {
  newRover = new MarsRover([0, 0], 'N', new Grid([5, 5]));
});

describe('MarsRover', () => {
  test("Has an initial position of [0, 0], 'N'", () => {
    expect(newRover.currentPosition_xy).toEqual([0, 0]);
    expect(newRover.direction).toEqual('N');
  });

  test("A rotate right signifies east, 'E'", () => {
    expect(newRover.rotate(`R`)).toEqual('E');
  });

  test('Rover can move when given instructions', () => {
    newRover.move();
    expect(newRover.currentPosition_xy).toEqual([0, 1]);
  });

  test('Rover can execute a multifaceted command', () => {
    let command = 'RM';
    let answer = newRover.execute(command);
    expect(answer).toEqual([[1, 0], 'E']);
  });

  // Tests for rollover/ edge cases; right, left, top and bottom

  test('Test for right roll over edge case', () => {
    let command = 'RMMMMMM'; // edge case off grid right
    let answer = newRover.execute(command);
    expect(answer).toEqual([[0, 0], 'E']);
  });

  test('Test for top roll over edge case', () => {
    let command = 'MMMMMM'; // edge case off grid top, rollover to initial start point
    let answer = newRover.execute(command);
    expect(answer).toEqual([[0, 0], 'N']);
  });

  test('Test for rotate roll over', () => {
    let command = 'RRRR'; // edge case off right of compassPoint, rollover to initial start point
    let answer = newRover.execute(command);
    expect(answer).toEqual([[0, 0], 'N']);
  });

  test('Test for rotate roll over, on lefthand side', () => {
    let command = 'L'; // edge case off left of compassPoint, negative
    let answer = newRover.execute(command);
    expect(answer).toEqual([[0, 0], 'W']);
  });

  test('Test for bottom roll over edge case', () => {
    let command = 'LLM'; // edge case off grid bottom, negative
    let answer = newRover.execute(command);
    expect(answer).toEqual([[0, 5], 'S']);
  });

  // Test cases as provided within Kata

  test('Test case 1 from Mars Rover Kata; long scenerio', () => {
    newRover = new MarsRover([1, 2], 'N', new Grid([5, 5]));
    let command = 'LMLMLMLMM';
    let answer = newRover.execute(command);
    expect(answer).toEqual([[1, 3], 'N']);
  });

  test('Test case 2 from Mars Rover Kata; long scenerio', () => {
    newRover = new MarsRover([3, 3], 'E', new Grid([5, 5]));
    let command = 'MMRMMRMRRM';
    let answer = newRover.execute(command);
    expect(answer).toEqual([[5, 1], 'E']);
  });

  // Test for an asymmetrical grid (i.e. plateau); rather than 6 x 6, 2 x 5

  test('Test for an uneven plateau/grid', () => {
    newRover = new MarsRover([0, 0], 'N', new Grid([2, 5]));
    let command = 'MMMMMMRMMM';
    let answer = newRover.execute(command);
    expect(answer).toEqual([[0, 0], 'E']);
  });

  // Test to verify input as correct format

  test('Throws an error if direction is not N, E, S or W', () => {
    expect(() => {
      new MarsRover([1, 1], 'north', new Grid([5, 5]));
    }).toThrow('Direction coordinates must be N, E, S or W');
  });

  test('Throws an error if Grid (i.e. plateau) coordinates are not integers', () => {
    expect(() => {
      new MarsRover([1, 1], 'N', new Grid(['five', 'five']));
    }).toThrow('Grid (i.e. plateau) coordinates must be integers');
  });

  test('Throws an error if Grid (i.e. plateau) is not of Grid class', () => {
    expect(() => {
      new MarsRover([1, 1], 'N', [5, 5]);
    }).toThrow('The grid input must be of Grid class');
  });
});
