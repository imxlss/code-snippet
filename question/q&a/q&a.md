## Q&A

> 判断是否是一个正确的网址

```js
let isUrl = (url) => {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}
```

> 把{1:222, 2:123, 5:888}处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]

```js
let obj = {
    1: 222,
    2: 123,
    5: 888
}

const result = Array.from({
    length: 12
}).map((_, index) => (obj[index + 1] || null));

console.log(result);
```