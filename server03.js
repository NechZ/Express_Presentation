const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//Read
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.get("/redirect", (req, res) => {
    res.redirect('http://google.com')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

