// Use a callback function to display “Task Complete” after another function finishes.

function taskdoer(){
    console.log("Task is completed")
}

function task(callback){
    console.log("Task is going on.....");
    callback();
}

task(taskdoer);