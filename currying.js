/**
 * 一个通用的function currying(){}
 * @param {function} fn 一个将要被currying的函数
 */

let currying = function (fn) {
    let args = [];

    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, args);
        } else {
            args.push(...arguments);
            return arguments.callee;
        }
    }
}

let fn = (function () {
    let money = 0;

    return function () {
        for (let i = 0, l = arguments.length; i < l; i++) {
            money += arguments[i];
        }

        return money;
    }
})()

let cost = currying(fn);




console.log(cost(100)(200)(300)());