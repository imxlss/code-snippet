/**
 * 理解函数柯里化的思想
 */

let cost = (function () {
    let args = [];

    return function () {
        if (arguments.length === 0) {
            let money = 0;
            for (let i = 0, l = args.length; i < l; i++) {
                money += args[i];
            }
            return money;
        } else {
            // [].push.apply(args, arguments);
            args.push(...arguments);
            console.log(args);
        }
    }
})()

cost(100);
cost(200);
cost(300);

console.log(cost());