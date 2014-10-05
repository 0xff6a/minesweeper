describe("Grid:", function() {
  var size = 5,
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

    it("should associate each square with its neighbours", function() {
      var first_square = grid.squares[0][0];
      var neighbours = [grid.squares[0][1], grid.squares[1][0], grid.squares[1][1]];
      expect(first_square.neighbours).toEqual(neighbours);
    });
  });
});