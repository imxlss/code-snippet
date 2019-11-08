function myPromise(executor) {
    let self = this;
    self.status = `pending`;
    self.value = undefined;
    self.reason = undefined;
    self.onResolvedCallback = [];
    self.onRejectedCallback = [];

    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value;
            self.status = `fulfilled`;
            self.onResolvedCallback.forEach(fn => fn());
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.reason = reason;
            self.status = `rejected`;
            self.onRejectedCallback.forEach(fn => fn());
        }
    }
    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

myPromise.prototype.then = function (onfulfilled, onrejected) {
    let self = this;

    if (self.status === `fulfilled`) {
        // 这里promise的状态已经确定是resolved，所以调用onResolved
        return new myPromise(function (resolve, reject) {
            try {
                let result = onfulfilled(self.value);
                if (result instanceof myPromise) {
                    result.then(resolve, reject)
                } else {

                }
            } catch (error) {

            }
        });
    }

    if (self.status === 'rejected') {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    var ret = onRejected(self.data);
                    if (ret instanceof Promise) {
                        ret.then(resolve, reject);
                    } else {
                        reject(ret);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        });
    }

    if (self.status === 'pending') {
        return new Promise(function (resolve, reject) {
            self.onFulfilledCallback.push(function (value) {
                setTimeout(function () {
                    try {
                        var ret = onFulfilled(self.data);
                        if (ret instanceof Promise) {
                            ret.then(resolve, reject);
                        } else {
                            resolve(ret);
                        }
                    } catch (e) {
                        reject(e);
                    }
                });
            });

            self.onRejectedCallback.push(function (reason) {
                setTimeout(function () {
                    try {
                        var ret = onRejected(self.data);
                        if (ret instanceof Promise) {
                            ret.then(resolve, reject);
                        } else {
                            reject(ret);
                        }
                    } catch (e) {
                        reject(e);
                    }
                });
            });
        });
    }
}

let p = new myPromise((resolve, reject) => {
    resolve(111);
})
p.then((value) => {
    return value + '第二个then';
}, (reason) => {
    console.log('err', reason);
}).then((v) => {
    console.log(v);
});
