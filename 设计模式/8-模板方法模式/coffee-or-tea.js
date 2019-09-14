let Beverage = function() {};

Beverage.prototype.boilWater = function() {
  console.log('把水煮沸');
};

Beverage.prototype.brew = function() {};

Beverage.prototype.pourInCup = function() {};

Beverage.prototype.addCondiments = function() {};

Beverage.prototype.init = function() {
  this.boilWater();
  this.brew();
  this.pourInCup();
  this.addCondiments();
};

let Coffee = function() {};

Coffee.prototype = new Beverage();

Coffee.prototype.brew = function() {
  console.log('用沸水冲泡咖啡');
};

Coffee.prototype.pourInCup = function() {
  console.log('把咖啡倒进杯子');
};

Coffee.prototype.addCondiments = function() {
  console.log('加糖和牛奶');
};

let coffee = new Coffee();
coffee.init();

let Tea = function() {};

Tea.prototype = new Beverage();

Tea.prototype.brew = function() {
  console.log('用沸水浸泡茶叶');
};

Tea.prototype.pourInCup = function() {
  console.log('把茶水倒进杯子');
};

Tea.prototype.addCondiments = function() {
  console.log('加柠檬');
};

let tea = new Tea();
tea.init();
