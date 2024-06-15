const express = require('express');
const router = express.Router();
// .Router() ist nicht das Gleiche wie .router()!

router.get('/user/', (req, res) => {
    res.send('Users');
});

router.post('/user/', (req, res) => {
    res.send('Create User');
});

router.get('/user/new', (req, res) => {
    res.send('New User Form');
});

//router.get
//router.post
//router.put
//router.delete
//router.all
//router.use
//etc..

//module.exports = router;
