let num = 120;

try{
    if(num > 100){
        throw new Error("Number is greater than 100")
    }
    console.log(num);
}
catch(e){
    console.log("Error " + e.message);
}
finally{
    console.log("Code executed");
    
}