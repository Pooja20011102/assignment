// Create a closure that maintains a counter.

function outer(){
    let counter = 1;
   
    
    function inc_counter(){
        console.log("count: " + counter);
        counter++;
    }
    return inc_counter;
}

let obj = outer()
obj()
obj()
obj()