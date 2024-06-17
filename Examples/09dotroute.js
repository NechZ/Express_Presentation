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



router.get('/:id', (req, res) => {
    res.send(`Get User ${req.params.id}`);
});

router.put('/:id', (req, res) => {
    res.send(`Update User ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Delete User ${req.params.id}`);
});

// Gleiche Funktionalität wie oben, nur deutlich besser strukturiert
router
    .route('/:id')
    .get((req, res) => {
        res.send(`Get User ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update User ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete User ${req.params.id}`);
    });

module.exports = router;
