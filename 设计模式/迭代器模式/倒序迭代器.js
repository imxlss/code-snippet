// 第一个参数为被循环的数组，第二个参数为回调函数
let reverseEach = function(ary, callback) {
  for (let i = ary.length - 1; i >= 0; i--) {
    callback.call(ary[i], i, ary[i]);
  }
};

each([1, 2, 3], function(i, n) {
  console.log([i, n]);
});
