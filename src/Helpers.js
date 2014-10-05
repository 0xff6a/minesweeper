Function.prototype.inheritsFrom = function(parent){ 
  this.prototype = new parent();
  this.prototype.constructor = this;
  this.prototype.parent = parent.prototype;

  return this;
};

Array.prototype.sum = function() {
  var result = 0,
      i;
  for(i = 0; i < this.length; result += this[i++])/* empty */; 

  return result;
 };

Array.prototype.matrixLength = function() {
  var elements = this.map(function(vector) {
    return vector.length;
  });

  return elements.sum();
};

 