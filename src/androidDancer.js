var AndroidDancer = function(top, left timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
};

AndroidDancer.prototype = Object.create(makeDancer.prototype);
AndroidDancer.prototype.constructor = AndroidDancer;
