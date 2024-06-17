const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

//CRUD - Create, Read, Update, Delete
//Grundlegende Operationen von Servern

// Read
app.get("/", (req, res) => {
    res.send("<h1>Hallo Welt</h1>")
})

app.get("/user", (req, res) => {
    res.send("<h1>Hallo User</h1>")
})

app.get("/user/max", (req, res) => {
    res.send("<h1>Hallo Max</h1>")
})

app.get("/user/danny", (req, res) => {
    res.send("<h1>Hallo Danny</h1>")
})

app.get("/user/nechirvan", (req, res) => {
    res.send("<h1>Hallo Nechirvan</h1>")
})

// Create
app.post("/", (req, res) => {
    res.send("<h1>POST: Hallo Welt</h1>")
})

// Update
app.put("/", (req, res) => {
    res.send("<h1>PUT: Hallo Welt</h1>")
})

// Delete
app.delete("/", (req, res) => {
    res.send("<h1>DELETE: Hallo Welt</h1>")
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});