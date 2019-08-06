/**
 * 路由，用于把不同的请求对应到不同的请求处理程序（request handler）
 * @param {*} handle
 * @param {*} pathname 
 * @param {*} response 
 */


function route(handle, pathname, response) {
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log('No request handler found for ' + pathname);
        response.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        response.write('404 Not Found');
        response.end();
    }
}

exports.route = route;