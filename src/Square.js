function Square(content_type) {
  this.content = _factory(content_type);

  function _factory(content_type) {
    return (new content_type);
  }
};

Square.prototype.isMined = function() {
  return (this.content instanceof Mine);
};


