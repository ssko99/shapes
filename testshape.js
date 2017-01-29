'use strict';
var Shape = require("./Shape");
var Square = require("./Square");
var Triangle = require("./Triangle");
var Pentagon = require("./Pentagon");


var triangle = new Triangle(1, 2, 3);
var square = new Square(4);
var pentagon = new Pentagon(1, 2, 3, 4, 5);
var shape = new Shape();


shape.get_type();
square.get_type();
triangle.get_type();
pentagon.get_type();
//console.log(square.constructor.name);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Triangle);
console.log(square instanceof Shape);
console.log(square instanceof Square);
console.log(pentagon instanceof Shape);
console.log(pentagon instanceof Pentagon);
console.log( shape instanceof Shape);
