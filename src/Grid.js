function Grid(sizeIn, content_type) {
  function factory(sizeIn, content_type) {
    var result = [],
        row,
        col;

    for (row = 0; row < sizeIn; row++) {
      result[row] = [];
      for (col = 0; col < sizeIn; col++) {
        result[row][col] = new Square(content_type);
      }
    }

    return result;
  }

  this.size = sizeIn;
  this.squares = factory(sizeIn, content_type);
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

      if ( grid.isValidRef(n_row, n_col) && !(row_shift === 0 && col_shift === 0)) {
        neighbours.push(grid.squares[n_row][n_col]); 
      }
    });
  });

  return neighbours;
};

Grid.prototype.isValidRef = function(row, col) {
  return (row >= 0 && row < this.size && col >= 0 && col < this.size);
};


