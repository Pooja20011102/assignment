// Create a callback function that greets a user after getting their name.

function myname(name){
    console.log("Hello " + name);
}

function username(callback){
    let name = "Latha";
    callback(name);
}
username(myname)