function RevealedContent() {}

RevealedContent.prototype.reveal = function() {
  return this;
};

RevealedContent.prototype.display = function() {
  return this.content.display();
};