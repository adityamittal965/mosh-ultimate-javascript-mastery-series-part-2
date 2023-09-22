// 10 - Abstraction

function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = () => {         // Equivalent to, this.computeOptimalLocation = function(){ console.log("this is the best location") ; }
    console.log("this is the best location");
  };

  this.draw = function draw() {
    this.computeOptimumLocation(); // We define the method and call it in the draw method. THIS MAYBE NOT A GOOD PRACTICE
    console.log("Draw");
  };
}

const circle = new Circle(10);

// In some situation not all the members should be accessible to the consumer or client of this object.
// For example if we set it to false it is going to completely mess up the object.
// Abstraction means "Hide the details & Complexity, show only the essentials to the user".
circle.computeOptimumLocation = false; 

// Maybe the computeOptimumLocation method, and defaultLocation property should be hidden, they could be implementation details, and should be hidden from the consumer of this object
// Suppose we only need to call the computeOptimumLocation from inside the draw method. We will implement this in the next lecture.
