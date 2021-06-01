// Mars Rover: Perseverence
class marsRover {
  constructor(currentPosition_xy, direction, grid_xy, obstacles) {
    this.grid_xy = grid_xy === undefined ? [5, 5] : grid_xy;
    this.currentPosition_xy =
      currentPosition_xy === undefined ? [0, 0] : currentPosition_xy;
    this.direction = direction === undefined ? "N" : direction; // NESW, LR
    this.obstacles = obstacles === undefined ? [] : obstacles;
    this.compassPoints = ["N", "E", "S", "W"];
    this.compassPointsIndex = this.compassPoints.indexOf(this.direction); // to accept any initial postion beyond N
  }

  // To rotate Rover to the Left(-) or Right(+)
  rotate(leftOrRight) {
    // turn L or R
    if (leftOrRight === "L") {
      this.compassPointsIndex = this.compassPointsIndex - 1; // left is -1
      if (this.compassPointsIndex < 0) {
        this.compassPointsIndex += this.compassPoints.length;
      }
    } else {
      this.compassPointsIndex =
        (this.compassPointsIndex + 1) % this.compassPoints.length; // right is +1
    }
    this.direction = this.compassPoints[this.compassPointsIndex];
    return this.direction;
  }

  // To move the Rover North(N), East(E), South(S) or West(W)
  // Includes ability to handle roll over case, negative value
  move() {
    console.log(this.grid_xy);
    if (this.direction === "N") {
      if (!this.checkObstacles()) {
        this.currentPosition_xy[1] =
          (this.currentPosition_xy[1] + 1) % (this.grid_xy[1] + 1);
      }
    } else if (this.direction === "E") {
      if (!this.checkObstacles()) {
        this.currentPosition_xy[0] =
          (this.currentPosition_xy[0] + 1) % (this.grid_xy[0] + 1);
      }
    } else if (this.direction === "S") {
      if (!this.checkObstacles()) {
        this.currentPosition_xy[1] -= 1;
        if (this.currentPosition_xy[1] < 0) {
          // addresses roll over case, neg
          this.currentPosition_xy[1] += this.grid_xy[1] + 1;
        }
      }
    } else if (this.direction === "W") {
      if (!this.checkObstacles()) {
        this.currentPosition_xy[0] -= 1;
        if (this.currentPosition_xy[0] < 0) {
          // addresses roll over case, neg
          this.currentPosition_xy[0] += this.grid_xy[0] + 1;
        }
      }
    }
  }

  // Splits string input into separate commands: rotate(L or R) and move(N, E, S, W)
  execute(command) {
    let commands = command.split(``);
    for (let i = 0; i < commands.length; i++) {
      if (commands[i] === "L" || commands[i] === "R") {
        this.rotate(commands[i]);
      } else {
        this.move();
      }
    }

    return [this.currentPosition_xy, this.direction];
  }

  checkObstacles(currentPosition_xy, direction) {
    // Check if an obstacle will come into play
    return false;
  }
}

// in order to export
module.exports = {
  marsRover,
};
