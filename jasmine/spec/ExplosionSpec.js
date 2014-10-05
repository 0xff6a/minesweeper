describe("Explosion:", function() {
  var explosion;

  beforeEach(function() {
    explosion = new Explosion();
  });

  describe("#display", function() {
   
    it("should return a unicode bomb", function() {
      expect(explosion.display()).toEqual("💣");
    });
  });

  describe("#reveal", function() {

    it("should return itself when revealed", function() {
      expect(explosion.reveal()).toBe(explosion);
    });
  });
});