let order500 = function(orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500元定金预购，得到100元优惠券');
  } else {
    return 'nextSuccessor';
  }
};

let order200 = function(orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200元定金预购，得到50元优惠券');
  } else {
    return 'nextSuccessor';
  }
};

let orderNormal = function(orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买，无优惠券');
  } else {
    console.log('手机库存不足');
  }
};

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

let chainOrder500 = new Chain(order500);
let chainOrder200 = new Chain(order200);
let chainOrderNormal = new Chain(orderNormal);

// 职责节点串联成链
chainOrder500
  .setNextSuccessor(chainOrder200)
  .setNextSuccessor(chainOrderNormal);
// chainOrder200.setNextSuccessor();

chainOrder500.passRequest(1, true, 500);
chainOrder500.passRequest(2, true, 500);
chainOrder500.passRequest(3, true, 500);
chainOrder500.passRequest(1, false, 0);
