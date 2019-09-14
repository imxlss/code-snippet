let mult = function() {
  console.log('开始计算乘积');
  let a = 1;
  for (let i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
};

let plus = function() {
  console.log('开始求和');
  let a = 0;
  for (let i = 0, l = arguments.length; i < l; i++) {
    a = a + arguments[i];
  }
  return a;
};

// 创建缓存代理的工厂
let createProxyFactory = function(fn) {
  let cache = {};
  return function() {
    let args = Array.prototype.join.call(arguments, ',');
    if (args in cache) {
      return cache[args];
    }

    return (cache[args] = fn.apply(this, arguments));
  };
};

let proxyMult = createProxyFactory(mult);
let proxyPlus = createProxyFactory(plus);

console.log(proxyMult(1, 2, 3, 4));
console.log(proxyMult(1, 2, 3, 4));
console.log(proxyPlus(1, 2, 3, 4));
console.log(proxyPlus(1, 2, 3, 4));
