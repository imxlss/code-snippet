const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {
    console.log(__dirname);
    const fileName = path.resolve(__dirname, 'data.txt');
    let stream = fs.createReadStream(fileName);
    stream.pipe(res);
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
})

server.listen(8000, function () {
    console.log('listening...')
});