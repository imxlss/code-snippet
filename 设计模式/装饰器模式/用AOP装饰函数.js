Function.prototype.before = function(beforefn) {
  let _self = this;

  return function() {
    beforefn.apply(this, arguments);

    return _self.apply(this, arguments);
  };
};

Function.prototype.after = function(afterfn) {
  let _self = this;

  return function() {
    let ret = _self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  };
};
