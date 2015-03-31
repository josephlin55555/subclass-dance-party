var AndroidDancer = function(top, left, timeBetweenSteps, color) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="src/ANDROID.png" width="200" height="200">');
  this.$node.addClass('android');
  this.$node.removeClass('dancer');
};
console.log('entered androidDancer.js');
AndroidDancer.prototype = Object.create(makeBlinkyDancer.prototype);
AndroidDancer.prototype.constructor = AndroidDancer;
