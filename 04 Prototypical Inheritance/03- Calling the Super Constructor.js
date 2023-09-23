// 03- Calling the Super Constructor

// We introduce a parameter to the shape.;
// Now every shape as a color
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  // If we do Shape(color), the constructor of Shape will receive 'window' object as this and window.color would be set.
  Shape.call(this, color); // Here we call the Shape function, and pass to it "this" which will reference the object created when calling the Circle function, an instance of Circle, and the color parameter
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw circle");
};

const myCircle = new Circle(1, "blue");
console.log(myCircle); // Circle { color: 'blue', radius: 1 }
