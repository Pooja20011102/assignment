async function fetchdata(){
    try{
        let result = await new Promise((resolve)=>{
            setTimeout(()=>{
                console.log("Data Fetched successfully");
                
            },2000);
        })
   
    }
    catch(error){
        console.log("Error " + error);
        
    }
    finally{
        console.log("task Completed");
    }
}

fetchdata()