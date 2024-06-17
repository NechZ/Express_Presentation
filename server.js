const express = require('express');
const path = require('path');
const userRouter = require('./routes/users')
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded( {extended: true}))

app.use('/routes/users', userRouter)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/forms', (req, res) => {
    res.render('forms');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});