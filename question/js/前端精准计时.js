/**
 * 前端正序精确计时，每次setTimeout使用矫正过的timeout
 */

const timeout = 1000;
const startTime = new Date().getTime(); // 开始时间
let count = 0; // setTimeout调用次数
let setTimeoutId;
let time = 0;

setTimeoutId = setTimeout(timer, timeout);

function timer() {
  time++;
  count++;
  const offset = new Date().getTime() - (startTime + count * timeout) // 偏差
  const nextTimeout = timeout - offset;
  console.log(`误差：${offset} ms，下一次执行：${nextTimeout} ms 后，现在时间：${time} s`)
  if (nextTimeout < 0) {
    nextTimeout = 0;
  }

  setTimeoutId = setTimeout(timer, nextTimeout);
};
