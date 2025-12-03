function select() {
    fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => {
            document.getElementById("output").textContent =
                JSON.stringify(data, null, 2);
        });
}

function select2() {
    fetch("http://localhost:5000/users-proc")
        .then(res => res.json())
        .then(data => {
            document.getElementById("output").textContent =
                JSON.stringify(data, null, 2);
        });
}

function select3() {
    fetch("http://localhost:5000/users2")
        .then(res => res.json())
        .then(data => {
            document.getElementById("output").textContent =
                JSON.stringify(data, null, 2);
        });
}

function addUser() {
    const id = document.getElementById("ID").value;

    fetch("http://localhost:5000/user3", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("output").textContent =
            JSON.stringify(data, null, 2);
    })
    .catch(err => console.error("Error:", err));
}
