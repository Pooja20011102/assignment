// INSERT
function addUser() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    fetch("/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);  // Will show "Inserted"
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
    })
    .catch(err => console.error("Error:", err));
}



// SELECT ALL
function loadUsers() {
    fetch("/users")
        .then(res => res.json())
        .then(data => {
            document.getElementById("output").textContent =
                JSON.stringify(data, null, 2);
        })
        .catch(err => console.error("Error:", err));
}



// FILTER (by message)
function filter() {
    const message = prompt("Enter message to filter:");

    fetch(`/users/filter?message=${message}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("output").textContent =
                JSON.stringify(data, null, 2);
        })
        .catch(err => console.error("Error:", err));
}



// DELETE
function del() {
    const id = prompt("Enter ID to delete:");

    fetch(`/delete/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message); // "Deleted"
    })
    .catch(err => console.error("Error:", err));
}
