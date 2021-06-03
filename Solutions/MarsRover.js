class MarsRover {
  /**
   * Mars Rovers - create a class to move rovers around a grid plateau.
   * A rover’s position and location are represented by a combination of x and y coordinates and
   * a letter representing one of the four cardinal compass points (N, E, S, W).
   * For movement, NASA sends a string of letters, 'L', 'R' and 'M', for left, right and move respectively.
   *
   * Args
   * -----
   * @param {array} currentPosition_xy - the input, updated based on command
   * @param {string} direction - current direction, N, E, S or W, rover is facing; used in conjuction with currentPosition_xy
   * @param {array} grid - The constructed Grid object
   */

  constructor(currentPosition_xy, direction, grid) {
    // Verify input as correct format for each of the inputs
    if (
      direction != 'N' &&
      direction != 'E' &&
      direction != 'S' &&
      direction != 'W'
    ) {
      throw new Error('Direction coordinates must be N, E, S or W');
    }
    if (
      !Number.isInteger(currentPosition_xy[0]) &&
      !Number.isInteger(currentPosition_xy[1])
    ) {
      throw new Error('X, Y coordinates must be an array of integers');
    }
    if (grid.constructor.name != 'Grid') {
      throw new Error('The grid input must be of Grid class');
    }

    // Initialize class variables
    this.grid_xy = grid === undefined ? [5, 5] : [grid.x, grid.y];
    this.currentPosition_xy =
      currentPosition_xy === undefined ? [0, 0] : currentPosition_xy;
    this.direction = direction === undefined ? 'N' : direction; // NESW, LR
    this.compassPoints = ['N', 'E', 'S', 'W'];
    this.compassPointsIndex = this.compassPoints.indexOf(this.direction); // to accept any initial postion beyond N
  }

  // To rotate Rover to the Left(-) or Right(+)
  rotate(leftOrRight) {
    // turn L or R
    if (leftOrRight === 'L') {
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
  // Includes ability to handle roll over cases, negative value
  // new_position is temporary storage of x,y until no obtacles confirmed
  move() {
    let new_position = this.currentPosition_xy.slice(0);
    if (this.direction === 'N') {
      new_position[1] = (new_position[1] + 1) % (this.grid_xy[1] + 1); // use modulo to return 0 for pos no.
    } else if (this.direction === 'E') {
      new_position[0] = (new_position[0] + 1) % (this.grid_xy[0] + 1); // use modulo to return 0 for pos no.
    } else if (this.direction === 'S') {
      new_position[1] -= 1;
      if (new_position[1] < 0) {
        // addresses roll over case, neg
        new_position[1] += this.grid_xy[1] + 1;
      }
    } else if (this.direction === 'W') {
      new_position[0] -= 1;
      if (new_position[0] < 0) {
        // addresses roll over case, neg
        new_position[0] += this.grid_xy[0] + 1;
      }
    }
    if (!this.hasObstacles()) {
      this.currentPosition_xy = new_position;
    }
  }
  // Splits string input into separate commands: rotate(L or R) and move(N, E, S, W)
  execute(command) {
    let commands = command.split(``);
    for (const element of commands) {
      if (element === 'L' || element === 'R') {
        this.rotate(element);
      } else {
        this.move();
      }
    }

    return [this.currentPosition_xy, this.direction];
  }

  // Future bolt on to test for obstacles, currently hard coded to false
  hasObstacles(currentPosition_xy, direction) {
    // Check if an obstacle will come into play
    return false;
  }
}

module.exports = MarsRover;
