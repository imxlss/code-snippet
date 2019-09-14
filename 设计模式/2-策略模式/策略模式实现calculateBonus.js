/**
 * 一组策略类
 */
let performanceS = function () {};

performanceS.prototype.calculate = function (salary) {
    return salary * 4;
}

let performanceA = function () {};

performanceA.prototype.calculate = function (salary) {
    return salary * 3;
}

let performanceB = function () {};

performanceB.prototype.calculate = function (salary) {
    return salary * 2;
}

/**
 * 环境类
 */
let Bonus = function () {
    this.salary = null;
    this.strategy = null;
}

Bonus.prototype.setSalary = function (salary) {
    this.salary = salary;
}

Bonus.prototype.setStrategy = function (strategy) {
    this.strategy = strategy;
}

Bonus.prototype.getBonus = function () {
    if (!this.strategy) {
        throw new Error('未设置strategy属性');
    }

    return this.strategy.calculate(this.salary);
}

/**
 * 新建Bonus对象
 * 给Bonus对象设置一些原始的数据
 * 传入策略对象
 */

let bonus = new Bonus();

bonus.setSalary(1000);
bonus.setStrategy(new performanceS());

console.log(bonus.getBonus());

bonus.setStrategy(new performanceA());
console.log(bonus.getBonus());