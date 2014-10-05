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

Grid.prototype.associate_neighbours = function() {
  var row,
      col;
  for (row = 0; row < this.size; row++) {
    for (col = 0; col < this.size; col++)  {
      this.squares[row][col].neighbours = this._squareNeighbours(row,col);
    }
  }
};

Grid.prototype._squareNeighbours = function(row, col) {
  return [this.squares[0][1], this.squares[1][0], this.squares[1][1]];
};