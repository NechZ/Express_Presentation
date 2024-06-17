const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const port = 3000;

const requestListener = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    const pathname = parsedUrl.pathname;

    if (method === 'GET' && pathname === '/') {
        fs.readFile(path.join(__dirname, 'public/download.html'), (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if (method === 'GET' && pathname === '/redirect') {
        res.writeHead(302, {'Location': 'http://google.com'});
        res.end();
    } else if (method === 'GET' && pathname === '/download') {
        const file = path.join(__dirname, 'public/pic.png');
        fs.access(file, fs.constants.F_OK, (err) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Not Found');
            } else {
                res.writeHead(200, {'Content-Disposition': 'attachment; filename=pic.png'});
                const readStream = fs.createReadStream(file);
                readStream.pipe(res);
            }
        });
    } else if (method === 'GET' && pathname === '/hope') {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    } else if (method === 'GET' && pathname === '/json') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'JSON Data' }));
    } else if (method === 'POST' && pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('User wurde angelegt');
    } else if (method === 'PUT' && pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Alle Daten wurden aktualisiert');
    } else if (method === 'DELETE' && pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Alle Daten gelöscht!!!');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
};

const server = http.createServer(requestListener);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
