/**
 * uncurrying 的实现方式之一
 */

Function.prototype.uncurrying = function () {
    let self = this;

    return function () {
        let obj = Array.prototype.shift.call(arguments);
        console.log(arguments);
        return self.apply(obj, arguments);
    }
}

let push = Array.prototype.push.uncurrying();

(function () {
    push(arguments, 4);
    // console.log([...arguments]);
})(1, 2, 3)


/**
 * uncurrying 的实现方式之二
 */

Function.prototype.uncurrying = function () {
    let self = this;
    return function () {
        return Function.prototype.call.apply(self, arguments);
    }
}