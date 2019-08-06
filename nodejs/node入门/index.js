let server = require('./server');
let router = require('./router');
let requestHandlers = require('./requestHandlers');


let handle = {};

handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);