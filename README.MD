# p5 Grid

A small p5.js cellular automata sketch built in the `src` folder. The project creates a black-and-white grid and simulates Conway's Game of Life, where cells live, die, and evolve over time based on neighbor counts.

Use the Grid class in other projects: 
`<script src="https://cdn.jsdelivr.net/gh/davidbouchard/p5-grid/src/grid.js"></script>`

## What this project does

- Creates an 80x80 canvas using p5.js
- Randomly initializes the grid with live and dead cells
- Advances the simulation one generation at a time when a key is pressed
- Lets the user paint live cells by clicking or dragging the mouse
- Displays the grid as a pixel image using black for dead cells and white for live cells

## Core files

- `src/index.html` loads the p5.js libraries and the game scripts
- `src/grid.js` defines a reusable `Grid` class used for cell storage and neighbor detection. 
- `src/sketch.js` contains the simulation setup, random population logic, user interaction, and Game of Life update loop
## Controls

- Press any key to advance the simulation to the next generation
- Click or drag the mouse to create live cells on the grid

## Run it locally

Because the project is a static HTML/JavaScript app, you can run it by opening the page in a browser.

### Option 1
Open `src/index.html` directly in a browser.

### Option 2
Serve the project from the workspace root with a simple local server:

```bash
python -m http.server
```

Then open:

```text
http://localhost:8000/src/
```

## Notes

This project is a lightweight experiment in grid-based cellular automata and demonstrates how to build a simple simulation using p5.js and a custom grid abstraction.
