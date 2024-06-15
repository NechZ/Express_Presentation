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

router.get('/:id', (req, res) => {
    res.send(`Get User ${req.params.id}`);
});
// Ungefähr so ähnlich wie args in Python

module.exports = router;
