const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static("public"))

app.get('/view/:filename', (req, res) => {
    const filename = req.params.filename;
    res.status(200).sendFile(path.join(__dirname + '/view', filename));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});