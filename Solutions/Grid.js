export default class Grid {
    constructor (grid_xy, obstacles) {
      if (!Number.isInteger(grid_xy) || !Number.isInteger(grid_xy)) {
        throw new Error('Grid (i.e. plateau) coordinates must be integers');
      }
  
      if (grid_xy <= 0 || grid_xy <= 0) {
        throw new Error('Grid (i.e. plateau) coordinates must be positive');
      }
  
      this.grid_xy = grid_xy;
    }
  }