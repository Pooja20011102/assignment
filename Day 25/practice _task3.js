let num = -2;

try{
    if(num < 0){
        throw new Error("Number is neagtive")
    }
    console.log(num);
}
catch(e){
    console.log("Error " + e.message);
}
finally{
    console.log("Code executed");
    
}