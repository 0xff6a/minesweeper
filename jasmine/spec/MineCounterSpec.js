describe("MineCounter:", function() {
  var mineCounter,
      squares;

  beforeEach(function() {
    squares = [new Square(Blank), new Square(Blank)];
    mineCounter = new MineCounter(squares);
  });

  describe("intialisation", function() {

    it("should hold the number of mines in neighbouring squares", function() {
      expect(mineCounter.value).toEqual(0);
    });
  });

  describe("#display", function() {
   
    it("should return a single space string when there are no neighbouring mines", function() {
      expect(mineCounter.display()).toEqual(" ");
    });

    it("should return the number of neighbouring mines if there are any", function() {
      var mineCounter;

      squares.push(new Square(Mine));
      mineCounter = new MineCounter(squares);
      
      expect(mineCounter.display()).toEqual("1");
    });
  });

  describe("#reveal", function() {

    it("should return itself when revealed", function() {
      expect(mineCounter.reveal()).toBe(mineCounter);
    });
  });
});