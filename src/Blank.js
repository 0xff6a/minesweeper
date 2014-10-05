function Blank() {};

Blank.inheritsFrom(HiddenContent);

Blank.prototype.reveal = function(neighbour_squares) {
  return (new MineCounter(neighbour_squares));
};