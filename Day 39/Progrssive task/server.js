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
    database: "electronics_shop"
});

db.connect(err => {
    if (err) console.log(err);
    else console.log("MySQL Connected");
});

app.get("/users", (req, res) => {
    db.query("SELECT * FROM total_customer_order", (err, rows) => {
        if (err) return res.status(500).json({ error: err });
        res.json(rows);
    });
});

app.get("/users2", (req, res) => {
    db.query("SELECT * FROM total_summary", (err, rows) => {
        if (err) return res.status(500).json({ error: err });
        res.json(rows);
    });
});


app.get("/users-proc", (req, res) => {
    const sql = `
        SELECT 
            o.order_id,
            o.order_date,
            c.name AS customer_name,
            p.name AS product_name,
            total(c.quantity, p.price) AS total_price,
            gettax(total(c.quantity, p.price)) AS including_tax
        FROM orders o
        INNER JOIN customers c ON o.customer_id = c.id
        INNER JOIN products p ON c.product_id = p.product_id
    `;

    db.query(sql, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(rows);
    });
});


app.post("/user3", (req, res) => {
    const { id } = req.body;

    const sql = "CALL calculate_bill(?)";

    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });

        const bill = result[0][0].bill;

        res.json({ bill });
    });
});



app.listen(5000, () => console.log("Server running on port 5000"));