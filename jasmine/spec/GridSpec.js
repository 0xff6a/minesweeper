describe("Grid:", function() {
  var grid;

  beforeEach(function() {
   grid = new Grid(100, Blank);
  });

  describe("initialisation", function() {

    it("should have N blank squares, with N set on initialisation", function() {
      expect(grid.squares.length).toEqual(100);
    });

    it("should hold blank squares only", function() {
      
    });
  });
});