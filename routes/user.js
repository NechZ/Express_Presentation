const express = require('express');

// Creating a Router
const router = express.Router();

// Dummy Data
const users = [{ name: 'John' }, { name: 'Jane' }, { name: 'Jim' }];

// static methods
router.get('/', (req, res) => {
    res.send('Users');
});

router.get('/new', (req, res) => {
    res.send('User New Form');
});

// dynamic Methods
router.get('/:id', (req, res) => {
    res.send(`User ${req.params.id}`);
});

router
    .route('/:id/edit')
    .get((req, res) => {
        res.send(`Get User ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update User ${req.params.id} Edit Form`);
    })
    .delete((req, res) => {
        res.send(`User ${req.params.id} Edit Form`);
    });

// Logging dynamic parameters
router.param('id', (req, res, next, id) => {
    req.user = users[id];
    console.log('User:', req.user);
    next();
});

// Importing nested user_activity Router
const user_activity_Router = require('./user_activity');
router.use('/:id/activity', user_activity_Router);

// exporting the router
module.exports = router;