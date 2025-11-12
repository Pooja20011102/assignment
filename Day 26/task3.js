function getname(name, callback) {
    console.log(name + " completed the task.");
    callback();
}


// Convert callback-based function to Promise
function getnamePromise(name) {
    return new Promise((resolve, reject) => {
        // Call the callback-based function
        getname(name, () => {
            // When callback finishes, resolve the Promise
            resolve("Task completed successfully");
        });

        // You could add reject logic if needed (like in error cases)
    });
}

// Using the Promise
getnamePromise("Bala")
    .then((msg) => console.log(msg))
    .catch((err) => console.log("Error: " + err));
