describe("Grid:", function() {
  var size = 10,
      grid;

  beforeEach(function() {
   grid = new Grid(size, Blank);
  });

  describe("initialisation", function() {

    it("should have N blank squares, with N set on initialisation", function() {
      expect(grid.squares.matrixLength()).toEqual(size*size);
    });

    it("should hold blank squares only", function() {
      expect(grid.squares.every(function(row) {
        return row.every(function(square) {
          return (square.content instanceof Blank);
        });
      }))
      .toBe(true);
    });
  });
});