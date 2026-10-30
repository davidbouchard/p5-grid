//--------------------------------------------------------
// A simple grid class to build things like Cellular Automata
// or WFC

class Grid {
  // w, h - grid dimensions, in cells
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.cells = [];
  }

  set(x, y, value) {
    // remove decimals just in case
    x = floor(x);
    y = floor(y);
    this.cells[x + y * this.width] = value;
  }

  get(x, y) {
    // remove decimals just in case
    x = floor(x);
    y = floor(y);
    return this.cells[x + y * this.height];
  }

  // Get the 8-neighbors of a cell (top, down, left right + corners)
  // This will return fewer neighbors if the cell is on an edge
  // unless wrapAround is true
  getNeighbors8(x, y, wrapAround = false) {
    let directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1], // Top row
      [0, -1],
      [0, 1], // Middle row
      [1, -1],
      [1, 0],
      [1, 1], // Bottom row
    ];
    return this.getNeighbors(x, y, directions, wrapAround);
  }

  // Return the 4 neighbours (top, down, left right)
  // This will return fewer neighbors if the cell is on an edge
  // unless wrapAround is true  
  getNeighbors4(x, y, wrapAround = false) {
    let directions = [
      [-1, 0][(0, -1)], // Top // left
      [0, 1], // right
      [1, 0], // Bottom
    ];
    return this.getNeighbors(x, y, directions, wrapAround);
  }

  getNeighbors(x, y, directions, wrapAround = false) {    
    let n = [];
    for (let [dx, dy] of directions) {      
      let newX = x + dx;
      let newY = y + dy;
      if (wrapAround) {
        // this ensures negative grid coordinates will remain positive
        newX = ((newX % grid.width) + grid.width) % grid.width;
        newY = ((newY % grid.height) + grid.height) % grid.height;
      }
      // check if the new coordinates are within bounds
      if (newX >= 0 && newY >= 0 && newX < grid.width && newY < grid.height) {
        n.push(grid.get(newX, newY));
      }
    }
    return n;
  }

  // copies the data from the otherGrid into this one
  // useful for cellular automata algorithms where we do the 
  // updates in a separate grid 
  copy(otherGrid) {
    // this will do a deep copy, in case cell values objects and not
    // just primitives
    this.cells = structuredClone(otherGrid.cells);    
  }
}