describe("Square:", function() {
  var content = Blank,
      square;

   beforeEach(function() {
     square = new Square(content);
   });

   describe("initialisation", function() {
   
     it("should be initialised with content", function() {
       var blank = new Blank();
       expect(square.content).toEqual(blank);
     });
  });

  describe("#isMined", function() {

    it("should know if it does not contain a mine", function() {
      expect(square.isMined()).toBe(false);
    });

    it("should know if it contains a mine", function() {
      var mined = new Square(Mine);
      expect(mined.isMined()).toBe(true);
    });
  });
});
