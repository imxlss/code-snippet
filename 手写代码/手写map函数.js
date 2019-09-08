let arrayMap = function(ary, callback) {
  let i = 0,
    length = ary.length,
    value,
    ret = [];

  for (; i < length; i++) {
    value = callback(ary[i], i, ary);
    ret.push(value);
  }

  return ret;
};

let a = arrayMap([1, 2, 3], item => item * 2);

console.log(a);
