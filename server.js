const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

//app.use(express.static("public"))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send("Hm");
});

const userRouter = require('./routes/user');
app.use('/user', userRouter);

