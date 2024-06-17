const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Loading Users...');
});

router.post('/', (req, res) => {
    res.send('Generating User...');
});

router.get('/new', (req, res) => {
    res.send('Loading New User Form...');
});




// Immernoch Redundant
router.get('/1', (req, res) => {
    res.send('User 1');
});

router.get('/2', (req, res) => {
    res.send('User 2');
});

router.get('/3', (req, res) => {
    res.send('User 3');
});

router.get('/:name', (req, res) => {
    res.send(`User ${req.params.name}`);
});



module.exports = router;
