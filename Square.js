'use strict';

var Shape = require('./Shape');

var Square = function Square(side) {
	 if (!(this instanceof Square)) {
        return new Square(side);
    }
    Shape.apply(this, arguments);
    this.side = side;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

module.exports = Square;