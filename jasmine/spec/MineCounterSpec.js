describe("MineCounter:", function() {
  
  var mineCounter,
      squares;

   beforeEach(function() {
     
     squares = [ new Square(Blank), new Square(Blank) ];
     mineCounter = new MineCounter(squares);
   
   });

   describe("#display", function() {
   
     it("should return a single space string when there are no neighbour mines", function() {
     
       expect(mineCounter.display()).toEqual(" ");
     
     });

    it("should return the number of neighbouring mines if there are any", function() {
     
      var mineCounter;

      squares.push(new Square(Mine));
      mineCounter = new MineCounter(squares);
      
      expect(mineCounter.display()).toEqual("1");

    });

  });

});