const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const HOST = '0.0.0.0';

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
    '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    const extname = path.extname(filePath);
    let contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                // 文件不存在，返回404
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(`<h1>404 Not Found</h1><p>The requested file ${req.url} was not found.</p>`, 'utf-8');
            } else {
                // 其他错误，返回500
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`, 'utf-8');
            }
        } else {
            // 文件存在，返回文件内容
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
    console.log('You can access this server from your iPhone by visiting:');
    console.log('1. Make sure your iPhone and this computer are on the same Wi-Fi network');
    console.log('2. Find your computer\'s local IP address (e.g., 192.168.x.x)');
    console.log('3. On your iPhone, open Safari and enter: http://your-computer-ip:8000');
});