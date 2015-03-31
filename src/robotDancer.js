var RobotDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

RobotDancer.prototype = Object.create(makeDancer.prototype);
RobotDancer.prototype.constructor = RobotDancer;
