describe('Square:', function() {
  
  var content = Blank,
      square;

   beforeEach(function() {
     square = new Square(content);
   });

   describe('initialisation', function() {
   
     it('should be initialised with content', function() {
       var blank = new Blank();
       expect(square.content).toEqual(blank);
     });

  });

});
