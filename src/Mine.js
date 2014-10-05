function Mine() {};
Mine.inheritsFrom(HiddenContent);

Mine.prototype.reveal = function() {
  return (new Explosion);
};