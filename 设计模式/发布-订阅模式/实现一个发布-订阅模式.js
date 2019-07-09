let saleOffices = {};

saleOffices.clientList = [];

saleOffices.listen = function (fn) {
    this.clientList.push(fn);
}

saleOffices.trigger = function () {
    for (let i = 0, fn; fn = this.clientList[i++];) {
        fn.apply(this, arguments);
    }
}

saleOffices.listen(function (price, sqareMeter) {
    console.log('price' + price);
    console.log('sqareMeter' + sqareMeter);
})

saleOffices.listen(function (price, sqareMeter) {
    console.log('price' + price);
    console.log('sqareMeter' + sqareMeter);
})

saleOffices.trigger(2000, 88);
saleOffices.trigger(3000, 100);