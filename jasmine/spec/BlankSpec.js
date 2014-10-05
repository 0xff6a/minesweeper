describe("Blank:", function() {
  var blank,
      neighbours;

  beforeEach(function() {
    blank = new Blank();
    neighbours = [new Square(Blank), new Square(Blank)];
  });

  describe("#display", function() {

    it("should return 'hidden'", function() {
      expect(blank.display()).toEqual("hidden");
    });
  });

  describe("#reveal", function() {

    it("should return a MineCounter when revealed", function() {
      expect(blank.reveal(neighbours)).toEqual(new MineCounter(neighbours));
    });
  });
});