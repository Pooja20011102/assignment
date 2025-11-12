// Write a callback that logs “Task Completed” after 3 seconds.

function do_the_task(callback){
    setTimeout(() => {
        callback();
    }, 3000);
}

function complete_task(){
    console.log("Task Completed");
}
 
do_the_task(complete_task);