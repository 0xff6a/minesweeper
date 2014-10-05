describe("Grid:", function() {
  var size = 5,
      grid;

  beforeEach(function() {
   grid = new Grid(size, Square, Blank);
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

  describe("#deployMines", function() {

    it("should fill the grid with a randomly placed set of mines", function() {
      var mineCount = 0,
          mines = 5;

      grid.deployMines(mines, Mine);
      grid.squares.forEach(function(row) {
        row.forEach(function(square) {
          if (square.content instanceof Mine) {
            mineCount++;
          }
        });
      });
      expect(mineCount).toEqual(mines);
    });
  });

  describe("#reveal", function() {
    
    beforeEach( function() {
      grid.squares[0][1].mine(Mine);
      grid.squares[1][1].mine(Mine);
      grid.squares[1][0].mine(Mine);
    });

    it("should reveal the target cell only if it contains a numbered minecounter", function() {
      grid.revealSquare(0,0);
      expect(grid.squares[0][0].display()).toEqual("3");
      expect(grid.squares[0][1].display()).toEqual("hidden");
      expect(grid.squares[1][1].display()).toEqual("hidden");
      expect(grid.squares[1][0].display()).toEqual("hidden");
    });

    it("should reveal an explosion if the target cell is mined", function() {
      grid.revealSquare(1,0);
      expect(grid.squares[1][0].display()).toEqual("💣");
    });

    it("should reveal the target cell and neighbours if it contains a blank minecounter", function() {
      grid.revealSquare(0,3);
      expect(grid.squares[0][3].display()).toEqual(" ");
      expect(grid.squares[0][4].display()).toEqual(" ");
      expect(grid.squares[1][3].display()).toEqual(" ");
    });
  });
});