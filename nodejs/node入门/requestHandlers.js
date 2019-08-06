/**
 * 请求处理程序
 * @param {*} response 
 */

// let exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called.");

    let body = `
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        </head>
        <body>
            <form action="/upload" method="post">
                <textarea name="text" rows="20" cols="60"></textarea>
                <input type="submit" value="Submit text" />
            </form>
        </body>
    </html>`;

    /*     exec("dir", function (error, stdout, stderr) {
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });

            response.write(stdout);
            response.end();
        }); */

    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write(body);
    response.end();
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.write(`Hello upload`);
    response.end();
}

exports.start = start;
exports.upload = upload;