// 05- Constructor Prototypes

/*
The constructor property returns a reference to the Object constructor function that created the instance object.
Note that the value of this property is a reference to the function itself, not a string containing the function's name.

The value is only read-only for primitive values such as 1, true, and "test".
*/

/*
"MyConstructor.prototype":  Doesn't return the prototype of MyConstructor, we're getting the prototype of MyConstructor's instances 
instead. 
If you want the prototype of MyConstructor,
1. Object.getPrototypeOf(MyConstructor)     // preferred, or 
2. MyConstructor.__proto__                  // bad because MDN says so
*/
let objectLiteral = {};
console.log(Object.getPrototypeOf(objectLiteral)); // Object
console.log(Object.prototype === Object.getPrototypeOf(objectLiteral)); // true
console.log(objectLiteral.constructor === Object); // true

let objectConstructor = new Object();
console.log(Object.getPrototypeOf(objectConstructor)); // Object
console.log(Object.prototype === Object.getPrototypeOf(objectConstructor)); // true
console.log(objectConstructor.constructor === Object); // true

let arrayLiteral = [];
console.log(Object.getPrototypeOf(arrayLiteral)); // Array
console.log(Array.prototype === Object.getPrototypeOf(arrayLiteral)); // true
console.log(arrayLiteral.constructor === Array); // true

let arrayConstructor = new Array();
console.log(Object.getPrototypeOf(arrayConstructor)); // Array
console.log(Array.prototype === Object.getPrototypeOf(arrayConstructor)); // true
console.log(arrayConstructor.constructor === Array); // true

let numberLiteral = 3;
console.log(Object.getPrototypeOf(numberLiteral)); // Number
console.log(Number.prototype === Object.getPrototypeOf(numberLiteral)); // true
console.log(numberLiteral.constructor === Number); // true

let numberConstructor = new Number(3);
console.log(Object.getPrototypeOf(numberConstructor)); // Number
console.log(Number.prototype === Object.getPrototypeOf(numberConstructor)); // true
console.log(numberConstructor.constructor === Number); // true


// As function in JavaScript are objects. A Constructor Function also have a prototype property

function Circle(radius) {
  this.radius = radius
}

console.log(Circle.prototype); // This is the Object that will be used as the parent for object created by the Circle constructor function. Lets call it the circleBase

const myCircle = new Circle(10);
console.log(Object.getPrototypeOf(myCircle)); // This returns the same object as Circle.prototype, the circleBase
console.log(Circle.prototype === Object.getPrototypeOf(myCircle));
console.log(myCircle.constructor); // This will return the circle constructor function
/*
ƒ Circle(radius) {
  this.radius = radius;
}
*/
