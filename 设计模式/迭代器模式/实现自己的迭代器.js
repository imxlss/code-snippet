// 第一个参数为被循环的数组，第二个参数为回调函数
let each = function(ary, callback) {
  for (let i = 0, l = ary.length; i < l; i++) {
    callback.call(ary[i], i, ary[i]);
  }
};

each([1, 2, 3], function(i, n) {
  console.log([i, n]);
});
