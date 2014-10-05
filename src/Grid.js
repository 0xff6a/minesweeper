function Grid(sizeIn, unit, default_content) {
  this.size = sizeIn;
  this.squares = factory(sizeIn, unit, default_content);
  this.associate_neighbours();

  function factory(sizeIn, unit, default_content) {
    var result = [],
        row,
        col;

    for (row = 0; row < sizeIn; row++) {
      result[row] = [];
      for (col = 0; col < sizeIn; col++) {
        result[row][col] = new unit(default_content);
      }
    }

    return result;
  }
}

Grid.prototype.SHIFT_RNG = [-1, 0, 1];

Grid.prototype.associate_neighbours = function() {
  var row,
      col;

  for (row = 0; row < this.size; row++) {
    for (col = 0; col < this.size; col++)  {
      this.squares[row][col].neighbours = this.getSquareNeighbours(row,col);
    }
  }
};

Grid.prototype.getSquareNeighbours = function(row, col) {
  var grid = this,
      neighbours = [];

  grid.getNeighbourAddresses(row, col).map(function(address) {
    neighbours.push(grid.squares[address[0]][address[1]]);
  });

  return neighbours;
};

Grid.prototype.getNeighbourAddresses = function(row, col) {
  var grid = this,
      addresses = [];

  grid.SHIFT_RNG.forEach(function(row_shift) {
   grid.SHIFT_RNG.forEach(function(col_shift) {
      var n_row = row + row_shift,
          n_col = col + col_shift;

      if ( grid.isOnGrid(n_row, n_col) &&  grid.isNonZeroShift(row_shift, col_shift) ) {
        addresses.push([n_row, n_col]); 
      }
    });
  });

  return addresses;
};

Grid.prototype.isOnGrid = function(row, col) {
  return (row >= 0 && row < this.size && col >= 0 && col < this.size);
};

Grid.prototype.isNonZeroShift = function(row_shift, col_shift) {
  return !(row_shift === 0 && col_shift === 0);
};

Grid.prototype.deployMines = function(count, mineObject) {
  var index = 0;

  while (index < count) {
    if (this.deployMineAtRandom(mineObject)) {
      index++;
    }
  }
};

Grid.prototype.deployMineAtRandom = function(mineObject) {
  var row = randomInt(0, this.size - 1),
      col = randomInt(0, this.size - 1),
      target;

  target = this.squares[row][col];
  if (target.content instanceof mineObject) {
    return false; 
  }
  else {
    target.content = new mineObject();
  }

  return true;
};

Grid.prototype.revealSquare = function(row, col) {

  var revelation = this.squares[row][col].reveal();

  if (revelation.display() === " ") {
    this.revealNeighbourSquares(row, col);
  }
  
  return revelation;
};

Grid.prototype.revealNeighbourSquares = function(row, col) {
  var grid = this;

  grid.getNeighbourAddresses(row, col).forEach(function(address) {
    grid.revealSquare.apply(grid, address);
  });
};



