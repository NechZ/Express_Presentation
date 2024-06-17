const express = require('express');

// Creating a Router
const router = express.Router();

// static methods
router.get('/', (req, res) => {
    res.send('Loading Users...');
});

router.post('/', (req, res) => {
    res.send('Generating User...');
});

router.get('/new', (req, res) => {
    res.send('Loading New User Form...');
});

// dynamic Methods
router
    .route('/:id')
    .get((req, res) => {
        res.send(`Get User ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update User ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`User ${req.params.id}`);
    });


// Importing nested user_activity Router
const user_activity_Router = require('./user_activity');
router.use('/:id/activity', user_activity_Router);

// exporting the router
module.exports = router;