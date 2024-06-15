const express = require('express');
const userRouter = require('./routes/user');
const AdminRouter = require('./routes/admin');
const forms = require('./routes/forms');
const Bestellung = require('./routes/Bestellung');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
});

app.use('/user', userRouter);
app.use('/admin', AdminRouter);
app.use('/forms', forms);
app.zse('/Bestellung', Bestellung);


