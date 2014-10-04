describe("Blank:", function() {
  var blank;

   beforeEach(function() {
     blank = new Blank();
   });

   describe("#display", function() {

     it("should return 'hidden'", function() {
       expect(blank.display()).toEqual("hidden");
     });
  });
});