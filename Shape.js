'use strict';

var Shape = function Shape() {
    this.get_type = function() {
 //       console.log(this.constructor.name);
        console.log(this.constructor);
    }
}

module.exports = Shape;
