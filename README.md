Minesweeper in JavaScript
=========================
- Creating a minesweeper in Javascript
- Extending it to include an optimal move helper based on own algorithms

This repository is a work in progress

Next steps:

display method for all board contents
- Mine/Blank -> return "hidden"
- Explosion -> return unicode bomb
- MineCounter -> return value


square has reveal method
-> square.reveal()
    -> return content.reveal()

content is either Mine or Blank. both have a reveal method

-> Mine.reveal 
  -> return explosion
-> blank.reveal
  -> return MineCounter

Explosion and MineCounter inherit from revealed square
 -> return self when revealed

The inherits method is similar to Java's extends. The uber method is similar to Java's super. It lets a method call a method of the parent class. (The names have been changed to avoid reserved word restrictions.)

