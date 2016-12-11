/**
 * Created by XD on 2016/7/22.
 */
var Wheel = function() {}

Wheel.prototype.init = function(cb) {
    console.log('init wheel...');
    setTimeout(function() {
        console.log('asyncInit setTimeout');
        cb();
    }, 1000);
}

Wheel.prototype.run = function() {
    console.log('run wheel...');
    return 'wheel';
}

module.exports = Wheel;