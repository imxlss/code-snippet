let saleOffices = {};

saleOffices.clientList = {};

saleOffices.listen = function (key, fn) {
    if (!this.clientList[key]) {
        this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
}

saleOffices.trigger = function () {
    let key = Array.prototype.shift.call(arguments),
        fns = this.clientList[key];

    if (!fns || fns.length === 0) {
        return false;
    }

    for (let i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments);
    }
}

saleOffices.listen('sqareMeter88', function (price) {
    console.log('price  ' + price);
})

saleOffices.listen('sqareMeter100', function (price) {
    console.log('price  ' + price);
})

saleOffices.trigger('sqareMeter88', 2000);
saleOffices.trigger('sqareMeter100', 3000);