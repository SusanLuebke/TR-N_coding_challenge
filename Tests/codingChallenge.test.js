const { marsRover } = require("../Solutions/codingChallenge");

beforeEach(() => {
  newRover = new marsRover([0,0], "N");
});

describe("marsRover", () => {  
  test("Has an initial position of [0, 0], 'N'", () => {
    expect(newRover.currentPosition_xy).toEqual([0, 0]);
    expect(newRover.direction).toEqual("N");
  });

  // test("With compassPoint N, 'L' point is 'W'", () => {
  //   expect(newRover.compassPoints[`N`][`L`]).toEqual("W");
  // });

  test("Rotate right signifies east, 'E'", () => {
    expect(newRover.rotate(`R`)).toEqual("E");
  });

  test("Rover can move when given instructions", () => {
    newRover.move()
    expect(newRover.currentPosition_xy).toEqual([0, 1]);
  });

  test("Rover can execute a multifaceted command", () => {
    let command = 'RM'
    answer = newRover.execute(command)
    expect(answer).toEqual([[1, 0], 'E']);
  });

  // Test for rollover/ edge cases; right, left, top and bottom

  test("Tests for right roll over edge case", () => {
    let command = 'RMMMMMM' // edge case off grid right
    answer = newRover.execute(command)
    expect(answer).toEqual([[0, 0], 'E']);
  });

  test("Tests for top roll over edge case", () => {
    let command = 'MMMMMM' // edge case off grid top
    answer = newRover.execute(command)
    expect(answer).toEqual([[0, 0], 'N']);
  });

  test("Tests for rotate roll over", () => {
    let command = 'RRRR' // edge case off right of compassPoint
    answer = newRover.execute(command)
    expect(answer).toEqual([[0, 0], 'N']);
  });

  test("Tests for rotate roll over, on lefthand side", () => {
    let command = 'L' // edge case off left of compassPoint
    answer = newRover.execute(command)
    expect(answer).toEqual([[0, 0], 'W']);
  });

  test("Tests for bottom roll over edge case", () => {
    let command = 'LLM' // edge case off grid bottom
    answer = newRover.execute(command)
    expect(answer).toEqual([[0, 5], 'S']);
  });


});
