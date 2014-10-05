function Explosion() {};
Explosion.prototype = new RevealedContent;
Explosion.prototype.constructor = Explosion;

Explosion.prototype.display = function() {
  return "💣";
};