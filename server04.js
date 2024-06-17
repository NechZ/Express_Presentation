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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
