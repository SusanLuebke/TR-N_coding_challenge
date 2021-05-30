const { marsRover } = require("../Solutions/codingChallenge");

beforeEach(() => {
  newRover = new marsRover([0,0], "N");
});

describe("marsRover", () => {  
  test("Has an initial position of [0, 0], 'N'", () => {
    expect(newRover.currentPosition_xy).toEqual([0, 0]);
    expect(newRover.direction).toEqual("N");
  });

  test("With compassPoint N, 'L' point is 'W'", () => {
    expect(newRover.compassPoints[`N`][`L`]).toEqual("W");
  });

  test("Rotate right signifies east, 'E'", () => {
    expect(newRover.rotate(`R`)).toEqual("E");
  });

  test("Rover can move when given instructions", () => {
    newRover.move('LMLM')
    expect(newRover.currentPosition_xy).toEqual([1, 1]);
  });


});
