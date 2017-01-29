'use strict';

var Shape = require('./Shape');

function Pentagon(side1, side2, side3, side4, side5) {
    if (!(this instanceof Pentagon)) {
        return new Square();
    }
    Shape.apply(this, arguments);
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
    this.side5 = side5;
}

Pentagon.prototype = Object.create(Shape.prototype);
Pentagon.prototype.constructor = Pentagon;


module.exports = Pentagon;
