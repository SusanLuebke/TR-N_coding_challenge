// Future Sprint Consideration, break out Grid and Obstacles into separate class

class Grid {
  // Expects a grid in the form of an array, such as [5, 5]
  constructor(grid_xy, obstacles) {
    if (!Number.isInteger(grid_xy[0]) || !Number.isInteger(grid_xy[1])) {
      throw new Error('Grid (i.e. plateau) coordinates must be integers');
    }

    if (grid_xy[0] <= 0 || grid_xy[1] <= 0) {
      throw new Error('Grid (i.e. plateau) coordinates must be positive');
    }

    this.grid_xy = grid_xy;
  }

  get x() {
    return this.grid_xy[0];
  }

  get y() {
    return this.grid_xy[1];
  }
}

module.exports = Grid;
