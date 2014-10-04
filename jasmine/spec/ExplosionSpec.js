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
});