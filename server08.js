const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//CRUD - Create, Read, Update, Delete
//Grundlegende Operationen von Servern

//Read
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.get("/redirect", (req, res) => {
    res.redirect('http://google.com')
})

app.get("/download", (req, res) => {
    res.download("./public/pic.png");
})

app.get("/hope", (req, res) => {
    res.status(404).send('Not Found')
})

app.get("/json", (req, res) => {
    res.json({ message: 'JSON Data'});
}) //Meist bei API Requests gesendet

// Create
app.post("/", (req, res) => {
    res.send("User wurde angelegt");
})

// Update
app.put("/", (req, res) => {
    res.send("Alle Daten wurden aktualisiert");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});