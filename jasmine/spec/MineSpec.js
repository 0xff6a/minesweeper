describe('Mine:', function() {
  
  var mine;

   beforeEach(function() {
     mine = new Mine();
   });

   describe('#display', function() {
   
     it('should return a unicode bomb', function() {
       expect(mine.display()).toEqual("💣");
     });

  });

});