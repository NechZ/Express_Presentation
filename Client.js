const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/index.html',
    method: 'GET'
};

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);
    });
});

console.log("Running Client")

req.on('error', (error) => {
    console.error(error);
});

req.end();