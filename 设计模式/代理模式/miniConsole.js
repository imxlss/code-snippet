miniConsole = {
  log: function() {
    console.log(Array.prototype.join.call(arguments));
    console.log(arguments);
  }
};
