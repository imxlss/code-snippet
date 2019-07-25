process.stdin.on('data', function (chunk) {
    console.log('stream by stdin', chunk)
    console.log('stream by stdin', chunk.toString())
})
//控制台输入koalakoala后输出结果
