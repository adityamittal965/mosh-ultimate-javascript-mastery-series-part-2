// 06- Functions are Objects

/*
In JavaScript functions are objects
*/

function Circle(radius) {
    this.radius = radius;
    this.draw = function draw() {
        console.log('Draw');
    }
}

console.log(Circle.name); // This property returns the name of the function.

console.log(Circle.length); // This property returns the number of arguments.

console.log(Circle.constructor); // This returns the 'Function()' constructor that was used when we create a literal function. JavaScript uses that constructor to crete this object.
// Like this: 
// This is equivalent to function Circle(), this is what is happening under the hood.
const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function draw() {
    console.log('Draw')
}
`);

const circleObject = new Circle(1) ;
const circle1Object = new Circle1(1) ;

// These call() and apply methods are equivalent to const Circle = new Circle(1)
Circle.call({}, 1) // With the "call()" method we can call a function, as the first argument we pass an empty object, and then the following arguments explicitly
Circle.apply({}, [1]) // With the "apply()" method, it works the same way as the call but we pass the arguments as an array.

// Using the call or apply method is the same as the following code:
const circle = new Circle(1)
console.log(circle);
