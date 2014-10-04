describe("Mine:", function() {
  var mine;

   beforeEach(function() {
     mine = new Mine();
   });

   describe("#display", function() {
   
     it("should return 'hidden'", function() {
       expect(mine.display()).toEqual("hidden");
     });
  });
});