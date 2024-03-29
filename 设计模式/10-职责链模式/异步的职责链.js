// 职责链节点构造函数
let Chain = function(fn) {
  this.fn = fn;
  this.successor = null; // 表示链中的下一个节点
};

Chain.prototype.setNextSuccessor = function(successor) {
  return (this.successor = successor);
};

Chain.prototype.passRequest = function() {
  let ret = this.fn.apply(this, arguments);

  if (ret === 'nextSuccessor') {
    return (
      this.successor &&
      this.successor.passRequest.apply(this.successor, arguments)
    );
  }

  return ret;
};

Chain.prototype.next = function() {
  return (
    this.successor &&
    this.successor.passRequest.apply(this.successor, arguments)
  );
};

let fn1 = new Chain(function() {
  console.log(1);
  return 'nextSuccessor';
});

let fn2 = new Chain(function() {
  console.log(2);
  setTimeout(() => {
    this.next();
  }, 1000);
});

let fn3 = new Chain(function() {
  console.log(3);
});

fn1.setNextSuccessor(fn2).setNextSuccessor(fn3);
fn1.passRequest();
