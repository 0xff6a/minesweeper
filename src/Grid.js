function Grid(size, content_type) {
  function factory(size, content_type) {
    var result = [],
        x,
        y;
    for (x = 0; x < size; x++) {
      result[x] = [];
      for (y = 0; y < size; y++) {
        result[x][y] = new Square(content_type);
      }
    }
    
    return result;
  }

  this.squares = factory(size, content_type);
}