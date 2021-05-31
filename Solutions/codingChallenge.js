// Reference Dictionary
const compassPoints = {
  N: {
    L: "W",
    R: "E",
    move: (x, y) => {
      return { x: x, y: y + 1 };
    },
  },
  E: {
    L: "N",
    R: "S",
    move: (x, y) => {
      return { x: x + 1, y: y };
    },
  },
  S: {
    L: "E",
    R: "W",
    move: (x, y) => {
      return { x: x, y: y - 1 };
    },
  },
  W: {
    L: "S",
    R: "N",
    move: (x, y) => {
      return { x: x - 1, y: y };
    },
  },
};

// move, direction, possibly track (class structure first, restructure with functional prog)
// classes rover, plateau
// rotate, move, execute
// return the command when passed through

class marsRover {
  constructor(currentPosition, direction, obstacles) {
    this.currentPosition_xy =
      this.currentPosition_xy === undefined ? [0, 0] : this.currentPosition_xy;
    this.direction = this.direction === undefined ? "N" : this.direction; // NEWS, LR
    this.obstacles = this.obstacles === undefined ? [] : this.obstacles;
    this.compassPoints = compassPoints;
  }

  rotate(direction) {
    return "E";
  }

  move() {
    if ((this.direction = "N")) {
      this.currentPosition_xy[1] += 1;
    } else if ((this.direction = "E")) {
      this.currentPosition_xy[0] += 1;
    } else if ((this.direction = "W")) {
      this.currentPosition_xy[0] -= 1;
    } else if ((this.direction = "S")) {
      this.currentPosition_xy[1] -= 1;
    }
  }
}

// in order to export
module.exports = {
  marsRover,
};
