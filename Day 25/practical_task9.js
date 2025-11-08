try{
    console.log("num " + num);
}
catch (e){
    console.log(e.name);
    console.log(e.message);
}
finally{
    console.log("Error handled");
}