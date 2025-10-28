//Declare three variables using var, let, and const

var a = "Anand";
let b = 12;
const c = 18;
console.log(a);
console.log(b);
console.log(c);


//Try reassigning all three — note which one gives an error.
 a = "Latha";
 b = 13;
// c = 18; //constant reassignment gives me an error

console.log(a);
console.log(b);
console.log(c);

// Create variables of each data type and log their types.


let username = "Surya";
let age = 23;
let cgpa = 8.9;
let infinity = 12/0;
let d = undefined;
let obj = {
    name : "Surya",
    age : 24,
    cgpa : 8.7
};
let emptyValue = null;
const id = Symbol('id');
let largeNumber = 9007199254740991n;
const colors = ["red", "green", "blue"]; // Array (a type of object)
function greet() { console.log("Hello");
 } // Function (a type of object)

console.log(username);
console.log(age);
console.log(cgpa);
console.log(infinity);
console.log(undefined);
console.log(obj);
console.log(emptyValue);
console.log(id);
console.log(largeNumber);
console.log(colors);
console.log(greet());







// Use typeof to check types of all your variables.
console.log(typeof username);
console.log(typeof age);
console.log(typeof cgpa);
console.log(typeof infinity);
console.log(typeof undefined);
console.log(typeof obj);
console.log(typeof emptyValue);
console.log(typeof id);
console.log(typeof largeNumber);
console.log(typeof colors);
console.log(typeof greet);

// Try assigning a number, then a string to the same variable — observe behavior.

let num = 124;
console.log(num);

console.log(typeof num);
num = "myname"
console.log(num);

console.log(typeof num);

//It dynamically changes its datatype from number to string
