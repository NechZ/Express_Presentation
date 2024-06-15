const express = require('express');
const router = express.Router();

activity = [2001, 2002, 2003, 2004, 2005];

router.get('/', (req, res) => {
    res.send(activity);
    console.log('Activity in Years:', activity);
});

module.exports = router;