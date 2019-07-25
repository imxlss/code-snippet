const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {
    console.log(__dirname);
    const fileName = path.resolve(__dirname, 'data.txt');
    fs.readFile(fileName, function (err, data) {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end(data);
    })
})

server.listen(8000, function () {
    console.log('listening...')
});