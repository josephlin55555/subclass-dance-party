var HansenDancer = function(top, left, timeBetweenSteps, size) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.size = size;
  this.$node.append('<img src="src/chris_hansen.gif">');
  this.$node.removeClass('dancer');
  this.$node.addClass('hansen');
};

HansenDancer.prototype = Object.create(makeDancer.prototype);
HansenDancer.prototype.constructor = HansenDancer;
