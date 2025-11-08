function divide(a,b){
    try{
        if(b===0){
            throw new Error("You can't divide a number by zero.")
        }
        console.log("Result " + a/b);
    }
    
    catch (e){
        console.log("Error " + e.message);
        
    }

    finally{
        console.log("Division done");
        
    }
}

divide(3,2);
divide(3,0);