const express = require('express');
const router = express.Router();

activity = [2001, 2002, 2003, 2004, 2005];

router.get('/', (req, res) => {
    res.send('Activity in the Years: ' + activity);
    console.log('Activity in the Years:', activity);
});

module.exports = router;