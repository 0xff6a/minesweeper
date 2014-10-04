function Square(content_type) {
  this.content = factory(content_type);
};

function factory(content_type) {
  return (new content_type);
}
