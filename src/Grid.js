function Grid(size, content_type) {

  this.squares = _factory(size, content_type);

  function _factory(size, content_type) {
    var result = [];

    for (var i = 0; i < size; i++) {
      result[i] = new Square(content_type);
    }

    return result;
  }
}