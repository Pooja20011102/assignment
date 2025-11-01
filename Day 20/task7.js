// Create a function to calculate the area of a rectangle.

function area_rectangle(length,breadth){
    return `Area of rectangle is ${length*breadth}cm^2`;
}

console.log(area_rectangle(20,90));

//Arrow function

const area = (l,b) => l*b;

console.log(area(30,40));

