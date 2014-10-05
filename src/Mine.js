function Mine() {};
Mine.prototype = new HiddenContent;
Mine.prototype.constructor = Mine;

Mine.prototype.reveal = function() {
  return (new Explosion);
};