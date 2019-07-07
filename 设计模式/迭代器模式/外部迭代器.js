let Iterator = function(obj) {
  let current = 0;

  let next = function() {
    current += 1;
  };

  let isDone = function() {
    return current >= obj.length;
  };

  let getCurrItem = function() {
    return obj[current];
  };

  return {
    next,
    isDone,
    getCurrItem,
    length: obj.length
  };
};

// 比较两个数组是否相等

let compare = function(iterator1, iterator2) {
  if (iterator1.length !== iterator2.length) {
    console.log('不相等');
    return;
  }

  while (!iterator1.isDone() && !iterator2.isDone()) {
    if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
      console.log('不相等');
      return;
    }

    iterator1.next();
    iterator2.next();
  }

  console.log('相等');
};

let iterator1 = Iterator([1, 2, 3]);
let iterator2 = Iterator([1, 2, 2]);

compare(iterator1, iterator2);
