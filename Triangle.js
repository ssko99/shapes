'use strict';
var Shape = require('./Shape');

function Triangle(side1, side2, side3) {
    if (!(this instanceof Triangle)) {
        return new Triangle(side1, side2, side3);
    }
    Shape.apply(this, arguments);
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

module.exports = Triangle;
