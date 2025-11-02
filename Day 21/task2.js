// Add and remove items using push, pop, shift, unshift.

let items = ["phone","television","ipad"]
console.log(items);

items.push("dinning table");//adds at last position
console.log(items);//[ 'phone', 'television', 'ipad', 'dinning table' ]

a = items.pop();//deletes the last element and stores it.
console.log(items);//[ 'phone', 'television', 'ipad' ]
console.log(a);//dinning table

items.unshift("chair");//adds in the front of the array
console.log(items);//[ 'chair', 'phone', 'television', 'ipad' ]

b = items.shift();//deletes the first element and stores it
console.log(items);//[ 'phone', 'television', 'ipad' ]
console.log(b);//chair
