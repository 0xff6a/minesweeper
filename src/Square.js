function Square(content_type) {
  this.content = _factory(content_type);
  this.neighbours = [];

  function _factory(content_type) {
    return (new content_type);
  }
};

Square.prototype.isMined = function() {
  return (this.content instanceof Mine);
};

Square.prototype.reveal = function() {
  var newContent = this.content.reveal(this.neighbours);
  this.content = newContent;

  return newContent;
};



