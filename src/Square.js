function Square(content_type) {
  function factory(content_type) {
    return (new content_type());
  }

  this.content = factory(content_type);
  this.neighbours = [];
}

Square.prototype.isMined = function() {
  return (this.content instanceof Mine);
};

Square.prototype.reveal = function() {
  var newContent = this.content.reveal(this.neighbours);
  this.content = newContent;

  return newContent;
};

Square.prototype.isHidden = function() {
  return (this.content instanceof HiddenContent);
};

Square.prototype.display = function() {
  return this.content.display();
};

Square.prototype.mine = function(mineObject) {
  this.content = new mineObject();

  return this;
};



