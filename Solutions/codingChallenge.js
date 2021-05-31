// Reference Dictionary
// const compassPoints = {
//   N: {
//     L: "W",
//     R: "E",
//     move: (x, y) => {
//       return { x: x, y: y + 1 };
//     },
//   },
//   E: {
//     L: "N",
//     R: "S",
//     move: (x, y) => {
//       return { x: x + 1, y: y };
//     },
//   },
//   S: {
//     L: "E",
//     R: "W",
//     move: (x, y) => {
//       return { x: x, y: y - 1 };
//     },
//   },
//   W: {
//     L: "S",
//     R: "N",
//     move: (x, y) => {
//       return { x: x - 1, y: y };
//     },
//   },
// };

// Mars Rover: Perseverence
class marsRover {
  constructor(currentPosition_xy, direction, obstacles) {
    this.currentPosition_xy =
      currentPosition_xy === undefined ? [0, 0] : currentPosition_xy;
    this.direction = direction === undefined ? "N" : direction; // NESW, LR
    this.obstacles = obstacles === undefined ? [] : obstacles;
    this.compassPoints = ["N", "E", "S", "W"];
    this.compassPointsIndex = this.compassPoints.indexOf(this.direction); // index 0 to length
  }

  rotate(leftOrRight) {
    // turn L or R
    if (leftOrRight === "L") {
      this.compassPointsIndex = this.compassPointsIndex - 1; // left is -1
      if (this.compassPointsIndex < 0) {
        this.compassPointsIndex += 4;
      }
    } else {
      this.compassPointsIndex = (this.compassPointsIndex + 1) % 4; // right is +1
    }
    this.direction = this.compassPoints[this.compassPointsIndex];
    return this.direction;
  }

  move() {
    if (this.direction === "N") {
      this.currentPosition_xy[1] = (this.currentPosition_xy[1] + 1) % 6;
    } else if (this.direction === "E") {
      this.currentPosition_xy[0] = (this.currentPosition_xy[0] + 1) % 6;
    } else if (this.direction === "W") {
      this.currentPosition_xy[0] -= 1;
      if (this.currentPosition_xy[0] < 0) {
        // addresses roll over case, neg
        this.currentPosition_xy[0] += 6;
      }
    } else if (this.direction === "S") {
      this.currentPosition_xy[1] -= 1;
      if (this.currentPosition_xy[1] < 0) {
        // addresses roll over case, neg
        this.currentPosition_xy[1] += 6;
      }
    }
  }

  execute(command) {
    let commands = command.split(``);
    for (let i = 0; i < commands.length; i++) {
      if (commands[i] === "L" || commands[i] === "R") {
        this.rotate(commands[i]);
      } else {
        this.move();
      }
    }
    console.log(this.currentPosition_xy);
    console.log(this.direction);
    return [this.currentPosition_xy, this.direction];
  }
}

// in order to export
module.exports = {
  marsRover,
};
