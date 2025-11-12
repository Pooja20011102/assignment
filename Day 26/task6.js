// Create a function that accepts any number of parameters using the rest operator.

function getarguments(...a) {
    for (let i = 0;i<a.length;i++){
        console.log(a[i]);
    }
}

getarguments("apple","banana","chocolates","cherry","pen")