# shell 编程

## 什么是 Shell 脚本

> 最简单的解释，一个 shell 脚本就是一个包含一系列命令的文件。shell 读取这个文件，然后执行文件中的所有命令，就好像这些命令已经直接被输入到了命令行中一样。

## 怎样编写一个 shell 脚本？

第一个 shell 脚本：`hello_world.sh`

```sh
#!/bin/bash
# This is our first script.
echo 'Hello World!'
```

> `#!`字符序列是一种特殊的结构叫做 `shebang`。这个 `shebang` 被用来告诉操作系统将执行此脚本所用的解释器的名字。每个 shell 脚本都应该把这作为第一行。
