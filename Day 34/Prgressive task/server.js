// npm init -y 
// npm install express mysql2 cors - run this in command prompt


const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const path = require("path");
app.use(express.static(path.join(__dirname, "main")));

// Connect to DB
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pooja",
    database: "testdb"
});

db.connect(err => {
    if (err) console.log(err);
    else console.log("MySQL Connected");
});


// INSERT
app.post("/add", (req, res) => {
    const { name, message } = req.body;
    const sql = "INSERT INTO users (name, message) VALUES (?, ?)";
    db.query(sql, [name, message], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Inserted", id: result.insertId });
    });
});


// SELECT ALL
app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, rows) => {
        if (err) return res.status(500).json({ error: err });
        res.json(rows);
    });
});


// FILTER BY message (or name)
app.get("/users/filter", (req, res) => {
    const message = req.query.message;

    const sql = "SELECT * FROM users WHERE message = ?";
    db.query(sql, [message], (err, rows) => {
        if (err) return res.status(500).json({ error: err });
        res.json(rows);
    });
});


// DELETE by ID
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM users WHERE id = ?", [id], err => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Deleted" });
    });
});


// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
