## stream

### 什么是stream?

> `stream`（流）是一个抽象的数据接口。它的本质就是让数据流动起来。linux的`|`命令就是`stream`。

### stream使用示例：

```js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {
    const fileName = path.resolve(__dirname, 'data.txt');

    let stream = fs.createReadStream(fileName);
    stream.pipe(res);
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
})

server.listen(8000);
```

使用`stream`不需要把文件全部读取后再返回，而是一边读取一边返回。数据通过管道流动给客户端。减轻服务器的压力

### stream流转过程

source ---(pipe)---> dest

#### source

`stream`常见的三种来源方式：
1. 控制台输入
2. `http`请求中的`request`
3. 文件读取

#### pipe

语法

> source.pipe(dest)

#### dest

`stream`常见的三种输出方式：
1. 输出控制台
2. `http`请求中的`response`
3. 文件写入

### stream应用场景

+ `get`请求中应用stream

读取文件返回给客户端
```js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {
    const method = req.method; // 获取请求方法
    if (method === 'GET') { // get 请求方法判断
        const fileName = path.resolve(__dirname, 'data.txt');
        let stream = fs.createReadStream(fileName);
        stream.pipe(res); // 将 res 作为 stream 的 dest
    }
});
server.listen(8000);
```

+ 文件操作

+ ...

### stream的种类

+ `Writable` - 可写入数据的流（例如：fs.createWriteStream()）
+ `Readable` - 可读取数据的流（例如：fs.createReadStream()）
+ `Duplex` - 可读又可写的流（例如：net.Socket()）
+ `Transform` - 在读写过程中可以修改或转换数据的`Duplex`流（例如：zlib.createDeflate()）

### stream注意点
+ 写操作是`覆盖`而不是`append`
+ 已关闭的流不能重复使用
+ `pipe`方法返回的是目标数据流。如`source.pipe(dest)`返回的是`dest`
+ 监听多个数据流，同时你又使用了 `pipe` 方法来串联数据流的话, 代码示例：
```js
data
    .on('end', function () {
        console.log('data end');
    })
    .pipe(a)
    .on('end', function () {
        console.log('a end');
    })
    .pipe(b)
    .on('end', function () {
        console.log('b end');
    });
```