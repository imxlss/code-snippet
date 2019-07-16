function Promise(executor) {
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
            self.onResolved.forEach(fn => fn());
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.reason = reason;
            self.status = `rejected`;
            self.onRejected.forEach(fn => fn());
        }
    }

    executor(resolve, reject);
}

Promise.prototype.then = function (onfulfilled, onrejected) {
    let self = this;
    if (self.status === `fulfilled`) {
        onfulfilled(self.value);
    }

    if (self.status === 'rejected') {
        onrejected(self.reason);
    }

    if (self.status === 'pending') {
        self.onResolved.push(function () {
            onfulfilled(self.value);
        });
        self.onRejected.push(function () {
            onrejected(self.reason);
        })
    }
}