//Create a function that checks if a number is even or odd.

function evenorodd(num){
    if (num%2==0){
        return "Even"
    };
    return "Odd"
}

console.log(evenorodd(46));

//Arrow function

const evenodd = n => n%2==0?"Even":"odd";

console.log(evenodd(45));

