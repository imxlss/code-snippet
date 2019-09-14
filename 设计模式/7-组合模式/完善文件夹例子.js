let Folder = function(name) {
  this.name = name;
  this.parent = null;
  this.files = [];
};

Folder.prototype.add = function(file) {
  file.parent = this;
  this.files.push(file);
};

Folder.prototype.scan = function() {
  console.log('开始扫描文件夹：' + this.name);
  for (let i = 0, file, files = this.files; (file = files[i++]); ) {
    file.scan();
  }
};

Folder.prototype.remove = function() {
  if (!this.parent) {
    return;
  }

  for (let files = this.parent.files, l = files.length - 1; l >= 0; l--) {
    let file = files[l];
    if (file === this) {
      files.splice(l, 1);
    }
  }
};

let File = function(name) {
  this.name = name;
  this.parent = null;
};

File.prototype.add = function() {
  throw new Error('文件下面不能添加文件');
};

File.prototype.scan = function() {
  console.log('开始扫描文件：' + this.name);
};

File.prototype.remove = function() {
  if (!this.parent) {
    return;
  }
  for (let files = this.parent.files, l = files.length - 1; l >= 0; l--) {
    let file = files[l];
    if (file === this) {
      files.splice(l, 1);
    }
  }
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

// folder1.remove();
folder.scan();
