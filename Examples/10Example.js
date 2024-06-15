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

const user_activity_Router = require('./user_activity');
router.use('/:id/activity', user_activity_Router);

module.exports = router;
