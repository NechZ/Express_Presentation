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


//const users = [{ name: 'John' }, { name: 'Jane' }, { name: 'Jim' }];




router.param('id', (req, res, next, id) => {
    req.user = users[id];
    console.log('User:', req.user);
    next();
});







module.exports = router;
