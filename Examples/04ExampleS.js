const express = require('express');
//const userRouter = require('./routes/user');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
});

//app.use('/user', userRouter);

