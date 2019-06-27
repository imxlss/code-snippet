/**
 * 单例模式定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
 */

let Singleton = function (name) {
    this.name = name;
}

Singleton.instance = null;
Singleton.prototype.getName = function () {
    console.log(this.name);
}
Singleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new Singleton(name);
    }

    return this.instance;
}

let a = Singleton.getInstance('sven1');
let b = Singleton.getInstance('sven2');

console.log(a === b);