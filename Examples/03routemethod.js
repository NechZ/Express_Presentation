const express = require('express');
const router = express.Router();

app.get('/user/', (req, res) => {
    res.send('Loading Users...');
});

app.post('/user/', (req, res) => {
    res.send('Generating User...');
});

app.get('/user/new', (req, res) => {
    res.send('Loading New User Form...');
});

//router.get
//router.post
//router.put
//router.delete
//router.all
//router.use
//etc..

//module.exports = router;
