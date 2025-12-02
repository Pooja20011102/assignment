// Function to call /users (view table)
function select() {
    fetch("/users")
        .then(res => res.json())
        .then(data => {
            document.getElementById("output").textContent =
                JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById("output").textContent =
                "Error: " + err;
        });
}

// Function to call /users-proc (stored procedure)
function select2() {
    fetch("/users-proc")
        .then(res => res.json())
        .then(data => {
            document.getElementById("output").textContent =
                JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById("output").textContent =
                "Error: " + err;
        });
}
