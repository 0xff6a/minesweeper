function MineCounter(neighbour_squares) {
  
  this.value = minesIn(neighbour_squares);

  function minesIn(neighbour_squares) {

    return neighbour_squares.filter(function(neighbour) {
      
      return neighbour.isMined();
    
    }).length;
  
  }

}

MineCounter.prototype.display = function() {
    
    return (this.value == 0 ? " " : this.value.toString());

};