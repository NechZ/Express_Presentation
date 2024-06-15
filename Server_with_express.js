const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, filename));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});