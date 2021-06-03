class Grid {
  /**
   * Grid - create a class to encapsulate grid plateau. Obstacles to be future class.
   *
   * Args
   * -----
   * @param {array} grid - The constructed Grid object
   * @param {array} obstacles - An array of x,y coordinates of known obstacle locations on the plateau; defunct rovers, rocks, canyons, etc.
   */

  // Expects a grid in the form of an array, such as [5, 5]
  constructor(grid_xy, obstacles) {
    if (!Number.isInteger(grid_xy[0]) || !Number.isInteger(grid_xy[1])) {
      throw new Error('Grid (i.e. plateau) coordinates must be integers');
    }

    if (grid_xy[0] <= 0 || grid_xy[1] <= 0) {
      throw new Error('Grid (i.e. plateau) coordinates must be positive');
    }

    this.grid_xy = grid_xy;
    this.obstacles = obstacles === undefined ? [] : obstacles;
  }

  get x() {
    return this.grid_xy[0];
  }

  get y() {
    return this.grid_xy[1];
  }
}

module.exports = Grid;
