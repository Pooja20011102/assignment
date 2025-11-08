let num = 15;

try{
    if (num < 18){
        throw new Error("You are not eligible to vote");
    }
    console.log("num " + num );
}
catch(e){
    console.log("Error " + e.message);
}
finally{
    console.log("\nAge Validation Completed");
}