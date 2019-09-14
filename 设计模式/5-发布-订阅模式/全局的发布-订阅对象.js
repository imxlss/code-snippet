let Event = (function () {
    let clientList = {};

    let listen = function (key, fn) {
        if (!clientList[key]) {
            clientList[key] = [];
        }
        clientList[key].push(fn);
    }

    let trigger = function () {
        let key = Array.prototype.shift.call(arguments),
            fns = clientList[key];

        if (!fns || fns.length === 0) {
            return false;
        }

        for (let i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    }

    let remove = function (key, fn) {
        let fns = clientList[key];

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
    }

    return {
        listen,
        trigger,
        remove
    }

})()

Event.listen('sqareMeter88', function (price) {
    console.log('price  ' + price);
})

Event.trigger('sqareMeter88', 2000);