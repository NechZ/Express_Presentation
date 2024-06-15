const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Users');
});

router.post('/', (req, res) => {
    res.send('Create User');
});

router.get('/new', (req, res) => {
    res.send('New User Form');
});

router.get('/1', (req, res) => {
    res.send('User 1');
});

router.get('/2', (req, res) => {
    res.send('User 2');
});

router.get('/3', (req, res) => {
    res.send('User 3');
});


module.exports = router;
