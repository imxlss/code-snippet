let http = require('http');
let url = require('url');

const PORT = 8080;

function start(route, handle) {
    let handler = (request, response) => {
        let pathname = url.parse(request.url).pathname;

        route(handle, pathname, response);
    }

    http.createServer(handler).listen(PORT);
}


exports.start = start;