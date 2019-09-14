let event = {
    clientList: {},
    listen: function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    },
    remove: function (key, fn) {
        let fns = this.clientList[key];

        if (!fns) {
            return false;
        }

        if (!fn) {
            fns && (fns.length = 0);
        } else {
            for (let l = fns.length - 1; l >= 0; l--) {
                let _fn = fns[l];

                if (_fn === fn) {
                    fns.splice(l, 1);
                }
            }
        }
    },
    trigger: function () {
        let key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key];

        if (!fns || fns.length === 0) {
            return false;
        }

        for (let i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    }
}

let installEvent = function (obj) {
    for (let key in event) {
        obj[key] = event[key];
    }
}

let saleOffices = {};

installEvent(saleOffices);

saleOffices.listen('sqareMeter88', fn1 = function (price) {
    console.log('price  ' + price);
})

saleOffices.listen('sqareMeter88', fn2 = function () {
    console.log('sqareMeter88  ' + arguments[1]);
})

// saleOffices.listen('sqareMeter100', function (price) {
//     console.log('price  ' + price);
// })

saleOffices.remove('sqareMeter88', fn2);

saleOffices.trigger('sqareMeter88', 2000, 88);

// saleOffices.trigger('sqareMeter100', 3000);