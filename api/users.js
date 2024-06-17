const express = require('express');
const fs = require('fs')
const path = require('path')

const router = express.Router();

router.use(express.json())

router.use(jsonmidware)

router.post('/', (req, res) => {
    const { name, email, password } = req.body;
    console.log('New user created:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    const user = {name, email, password};

    fs.readFile(path.join(__dirname, '../users.json'), 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            let users = JSON.parse(data).users; // convert to JSON object
            users.push(user); // add new user to the users array
    
            fs.writeFile(path.join(__dirname, '../users.json'), JSON.stringify({users: users}, null, 2), function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
    });

    res.sendStatus(200);
});

// Middleware
function jsonmidware(req, res, next) {
    // Check if request is Valid
    fs.readFile(
        path.join(__dirname, '../users.json'),
        function(err, data){
            if (err) {
                console.log(err)
            } 
            const jsonData = JSON.parse(data)
            const userExists = jsonData.users.some(user => user.email === req.body.email);
            if (userExists) {
                res.render('forms', {name: req.body.name, email: req.body.email, password: req.body.password, message: 'Email has already been used'});
            } else {
                console.log('Input Valid')
                next()
            }
    })
}

module.exports = router;
