let Folder = function(name) {
  this.name = name;
  this.files = [];
};

Folder.prototype.add = function(file) {
  this.files.push(file);
};

Folder.prototype.scan = function() {
  console.log('开始扫描文件夹：' + this.name);
  for (let i = 0, file, files = this.files; (file = files[i++]); ) {
    file.scan();
  }
};

let File = function(name) {
  this.name = name;
};

File.prototype.add = function() {
  throw new Error('文件下面不能添加文件');
};

File.prototype.scan = function() {
  console.log('开始扫描文件：' + this.name);
};

let folder = new Folder('学习资料');
let folder1 = new Folder('JavaScript');
let folder2 = new Folder('jQuery');

let file1 = new File('JavaScript设计模式与开发实践');
let file2 = new File('精通jQquery');
let file3 = new File('重构与模式');

folder1.add(file1);
folder2.add(file2);

folder.add(folder1);
folder.add(folder2);
folder.add(file3);

// folder.scan();

// 复制新的文件夹和文件

let folder3 = new Folder('Nodejs');
let file4 = new File('深入浅出Nodejs');
folder3.add(file4);

let file5 = new File('笑傲江湖');

folder.add(folder3);
folder.add(file5);

folder.scan();
