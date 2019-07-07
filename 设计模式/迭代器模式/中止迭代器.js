// 第一个参数为被循环的数组，第二个参数为回调函数
let each = function(ary, callback) {
  for (let i = 0, l = ary.length; i < l; i++) {
    if (callback(i, ary[i]) === false) {
      break;
    }
  }
};

each([1, 2, 3, 4, 5], function(i, n) {
  if (n > 3) {
    return false;
  }
  console.log(n);
});
