var ChromeDancer = function(top, left, timeBetweenSteps, size) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.size = size;
};

ChromeDancer.prototype = Object.create(makeBlinkyDancer.prototype);
ChromeDancer.prototype.constructor = ChromeDancer;
