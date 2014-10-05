Minesweeper in JavaScript
=========================
- Creating a minesweeper in Javascript
- Extending it to include an optimal move helper based on own algorithms

This repository is a work in progress

Next steps:

- Grid to create assocations between squares and neighbours on intialisation
- DI in grid? pass Square(Blank) as content_type?

Classes:
-------

- Square: contains either a Mine or a Blank. Knows its neighbour squares
- Grid: holds all squares. Associates squares with neighbours on intialisation
- Mine: returns an Explosion when revealed
- Blank: returns a MineCounter when revealed
- Explosion: displays a bomb icon
- MineCounter: displays number of mines in neighbouring squares





