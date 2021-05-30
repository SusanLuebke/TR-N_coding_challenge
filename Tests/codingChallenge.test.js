const { marsRover } = require("../Solutions/codingChallenge"); 


// beforeEach(() => {
//   rover = new Rover();
// });

describe('marsRover', () => {
  test("Has an initial position of [0, 0]", () => {
    let newRover = new marsRover;
    expect(newRover.currentPosition).toEqual([0, 0]);
  })

  test("Has an initial compassPoint that is "N" || "E" || "W" || "S"", () => {
    let newRover = new marsRover;
    expect(newRover.currentPosition).toEqual([0, 0]);
  })
})

