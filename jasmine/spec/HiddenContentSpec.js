describe("HiddenContent:", function() {

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

});