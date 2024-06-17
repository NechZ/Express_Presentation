const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
});

app.get('/user', (req, res) => {
    res.sendFile('./public/user.html', { root: __dirname });
});

app.get('/user/new', (req, res) => {
    res.sendFile('./public/user_new.html', { root: __dirname });
});

app.get('/user/1', (req, res) => {
    res.send('User 1');
});

app.get('/user/1/edit', (req, res) => {
    res.send('User 1 Edit Form');
});

app.get('/user/2', (req, res) => {
    res.send('User 2');
});
