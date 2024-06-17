const express = require('express');
const userRouter = require('./routes/users')
const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.use('/routes/users', userRouter)

app.set('view engine', 'ejs')
app.get('/forms', (req, res) => {
    res.render('forms');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});