const http = require('http');
const readline = require('readline');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
};

console.log("Running Client");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    options.path = "/" + input;

    const req = http.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log(data);
        });
    });

    req.on('error', (error) => {
        console.error(error);
    });

    req.end();
});

rl.on('close', () => {
    console.log('Exiting Client');
    process.exit(0);
});

