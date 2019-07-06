let mult = function() {
  console.log('开始计算乘积');
  let a = 1;
  for (let i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
};

let proxyMult = (function() {
  let cache = {};
  return function() {
    let args = Array.prototype.join.call(arguments, ',');
    if (args in cache) {
      return cache[args];
    }
    return (cache[args] = mult.apply(this, arguments));
  };
})();

console.log(proxyMult(2, 3, 4));
console.log(proxyMult(2, 3, 4));
