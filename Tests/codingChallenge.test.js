const { codingChallenge } = require("../Solutions/codingChallenge"); 
let rover = codingChallenge;

// beforeEach(() => {
//   rover = new Rover();
// });

describe('rover', () => {
  test("Has an initial position of zero", () => {
    expect(rover.direction).toEqual(0);
  })
})

