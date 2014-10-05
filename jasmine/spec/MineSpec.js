describe("Mine:", function() {
  var mine,
      neighbours;

  beforeEach(function() {
    mine = new Mine();
    neighbours = [];
  });

  describe("#display", function() {
   
    it("should return 'hidden'", function() {
      expect(mine.display()).toEqual("hidden");
    });
  });

  describe("#reveal", function() {

    it("should return an explosion if revealed", function() {
      expect(mine.reveal(neighbours)).toEqual(jasmine.any(Explosion));
    });
  });
});