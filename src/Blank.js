function Blank() {};
Blank.prototype = new HiddenContent;
Blank.prototype.constructor = Blank;

Blank.prototype.reveal = function(neighbour_squares) {
  return (new MineCounter(neighbour_squares));
};