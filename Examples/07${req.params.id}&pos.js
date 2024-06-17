const express = require('express');
const router = express.Router();

// Statische Methoden
router.get('/', (req, res) => {
    res.send('Loading Users...');
});

router.post('/', (req, res) => {
    res.send('Generating User...');
});

router.get('/new', (req, res) => {
    res.send('Loading New User Form...');
});


// Dynamische Methoden
router.get('/:id', (req, res) => {
    res.send(`User ${req.params.id}`);
});

module.exports = router;
