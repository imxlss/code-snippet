const fs = require('fs');
const path = require('path');

const filePath1 = path.resolve(__dirname, 'data.txt');
const filePath2 = path.resolve(__dirname, 'data-bak.txt');

const readStream = fs.createReadStream(filePath1);
const writeStream = fs.createWriteStream(filePath2);

readStream.pipe(writeStream);

readStream.on('end', function () {
    console.log('拷贝完成');
})