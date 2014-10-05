describe("Square:", function() {
  var square,
      mined;

  beforeEach(function() {
    square = new Square(Blank);
    mined = new Square(Mine);
  });

  describe("initialisation", function() {
   
    it("should be initialised with content", function() {
      var blank = new Blank();
      expect(square.content).toEqual(blank);
    });

    it("should be initialised with no neighbours", function() {
      expect(square.neighbours).toEqual([]);
    });
  });

  describe("#isMined", function() {

    it("should know if it does not contain a mine", function() {
      expect(square.isMined()).toBe(false);
    });

    it("should know if it contains a mine", function() {
      expect(mined.isMined()).toBe(true);
    });
  });

  describe("#reveal", function() {
    var counter;

    beforeEach(function() {
      square.neighbours = [new Square(Mine), new Square(Blank)];
      counter = new MineCounter(square.neighbours);
    });

    it("should return an explosion if the square is mined", function() {
      expect(mined.reveal()).toEqual(jasmine.any(Explosion));
    });

    it("should change the square content to an explosion if it is mined", function() {
      mined.reveal();
      expect(mined.content).toEqual(jasmine.any(Explosion));
    });

    it("should return a mine counter if the square is blank", function() {
      expect(square.reveal()).toEqual(counter);
    });

    it("should change the square content to a mine counter if it is blank", function() {
      square.reveal();
      expect(square.content).toEqual(counter);
    });
  });
});
