function Grid(sizeIn, unit, default_content) {
  function factory(sizeIn, unit, default_content) {
    var result = [],
        row,
        col;
        console.log(unit);
    for (row = 0; row < sizeIn; row++) {
      result[row] = [];
      for (col = 0; col < sizeIn; col++) {
        result[row][col] = new unit(default_content);
      }
    }

    return result;
  }

  this.size = sizeIn;
  this.squares = factory(sizeIn, unit, default_content);
  this.associate_neighbours();
}

Grid.prototype.NEIGHBOUR_RNG = [-1, 0, 1];

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

  grid.NEIGHBOUR_RNG.forEach(function(row_shift) {
    grid.NEIGHBOUR_RNG.forEach(function(col_shift) {
      var n_row = row + row_shift,
          n_col = col + col_shift;

      if ( grid.isOnGrid(n_row, n_col) &&  grid.isNonZeroShift(row_shift, col_shift) ) {
        neighbours.push(grid.squares[n_row][n_col]); 
      }
    });
  });

  return neighbours;
};

Grid.prototype.isOnGrid = function(row, col) {
  return (row >= 0 && row < this.size && col >= 0 && col < this.size);
};

Grid.prototype.isNonZeroShift = function(row_shift, col_shift) {
  return !(row_shift === 0 && col_shift === 0)
};


