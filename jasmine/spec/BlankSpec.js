describe("Blank:", function() {
  var blank;

   beforeEach(function() {
     blank = new Blank();
   });

   describe("#display", function() {

     it("should return an single space string", function() {
       expect(blank.display()).toEqual(" ");
     });
  });
});