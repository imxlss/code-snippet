type StatusType = 'Pending' | 'Fulfilled' | 'Rejected';

class myPromise {
  private status: StatusType;
  private value: any;
  private reason: any;
  private resolvedCallbacks: Function[];
  private rejectedCallbacks: Function[];

  constructor(fn: Function) {
    this.status = 'Pending';

    try {
      fn(this.resolve, this.reject)
    }
    catch (e) {
      this.reject(e);
    }

  }

  private resolve = (value: any) => {
    if (this.status === 'Pending') {
      this.status = 'Fulfilled';
      this.value = value;
      this.resolvedCallbacks.forEach(cb => cb());
    }
  }

  private reject = (reason: any) => {
    if (this.status === 'Pending') {
      this.status = 'Rejected';
      this.reason = reason;
      this.rejectedCallbacks.forEach(cb => cb());
    }
  }

  then(onFulfilled: Function, onRejected: Function) {
    if (this.status === 'Fulfilled') {
      onFulfilled(this.value);
    }

    if (this.status === 'Rejected') {
      onRejected(this.reason);
    }

    if (this.status === 'Pending') {
      this.resolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });

      this.rejectedCallbacks.push(() => {
        onRejected(this.reason);
      })
    }
  }
}

let p = new myPromise((resolve, reject) => {
  resolve(111);
}).then(
  v => {
    console.log(v);
  },
  (err) => (console.log(err))
)
