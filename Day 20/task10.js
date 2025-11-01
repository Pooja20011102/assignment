//Write a function that takes an array of numbers and returns the sum using a loop.

function sumorarr(arr){
    let sum = 0;
    for (let i =0;i<=arr.length-1;i++){
        sum+=arr[i]
    }
    return sum;
}

console.log(sumorarr([2,3,5,6,7]));
console.log(sumorarr([3,4,6,89,9]));

