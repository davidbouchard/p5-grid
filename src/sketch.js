// press any key to advance to the next step 
// drag 

let grid;
let newGrid;
let gridImage;

let DEAD = 0;
let ALIVE = 1;

//--------------------------------------------------------
function setup() {
  new Canvas(80, 80, PIXELATED);
  
  grid = new Grid(width, height);
  newGrid = new Grid(width, height);
  gridImage = createImage(width, height);
  
  // populate the grid with random values
  for (let x = 0; x < grid.width; x++) {
    for (let y = 0; y < grid.height; y++) {
      if (random(1) < 0.4) grid.set(x, y, ALIVE);
      else grid.set(x, y, DEAD);
    }
  }
  updateGridImage();
}
//--------------------------------------------------------
function draw() {
  image(gridImage, 0, 0);
  
  if (kb.pressing()) automataStep();

  if (mouse.pressing()) {    
    grid.set(mouse.x, mouse.y, ALIVE);
    updateGridImage();
  }
}
//--------------------------------------------------------
function automataStep() {
  for (let x = 0; x < grid.width; x++) {
    for (let y = 0; y < grid.height; y++) {
      let cell = grid.get(x, y);
      let neighbors = grid.getNeighbors8(x, y);
      // count the number of ALIVE neighbors
      let count = 0;
      for (let n of neighbors) {
        count += n;
      }
      // THE GAME OF LIFE 
      // 1. a DEAD cell becomes ALIVE if it has exactly three living neighbors
      // 2. an ALIVE cell stays alive with two or three neighbors;
      // 3. otherwise, it dies 💀       
      if (cell == DEAD && count == 3) newGrid.set(x, y, ALIVE);
      else if (cell == ALIVE && (count == 2 || count == 3)) newGrid.set(x, y, ALIVE);
      else newGrid.set(x, y, DEAD);
    }
  }
  grid.copy(newGrid);
  updateGridImage();
}
//--------------------------------------------------------
function updateGridImage() {
  // draw the grid as an image where DEAD pixels are black and ALIVE pixels are white
  for (let x = 0; x < grid.width; x++) {
    for (let y = 0; y < grid.height; y++) {
      let cell = grid.get(x, y);
      if (cell == DEAD) gridImage.set(x, y, color("black"));
      if (cell == ALIVE) gridImage.set(x, y, color("white"));
    }
  }
  gridImage.updatePixels();
} 