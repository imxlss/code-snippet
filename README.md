# code-snippet

代码片段

## 单例模式

> 定义：保证一个类只有一个实例，并提供一个访问它的全局访问点。

单例模式的核心：

- 只有一个实例
- 可全局访问

### 惰性单例

惰性单例指的是在需要的时候才创建对象实例。

### javascript 中的单例模式

Javascript 是一门`无类（class-free）`的语言。

基于`类`的单例模式在 Javascript 中并不适用。

管理单例的逻辑：用一个变量来标志是否创建过对象，如果是，下次直接返回已经创建好的对象。

```javascript
let obj;
if (!obj) {
  obj = ...;
}
return obj;
```

惰性单例，将创建对象和管理单例的职责分布在两个不同的方法中，这两个方法组合起来才具有单例模式的威力。

## 策略模式

> 定义：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。

一个基于策略模式的程序至少由两部分组成：

- 一组策略类————策略类封装了具体的算法，并负责具体的计算过程。
- 环境类 Context————Context 接受客户的请求，随后把请求委托给某一个策略类。要做到这一点，说明 Context 中要维持对某个策略对象的引用。

在 Javascript 语言的策略模式中，策略类往往被函数所替代，这时策略模式就成为一种隐形的模式。

## 代理模式

代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。

代理模式的关键是：当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象来控制对这个对象的访问，客户实际上访问的是替身对象。替身对象对请求做出一些处理之后，再把请求转交给本体对象。

### 保护代理和虚拟代理

保护代理；代理 B 帮 A 过滤掉一些请求。

虚拟代理：虚拟代理把一些开销很大的对象，延迟到真正需要它的时候才去创建。

保护代理用于控制不同权限的对象对目标的访问。Javascript 中不易实现。

JavaScript 中常用的有`虚拟代理`和`缓存代理`

在客户看来，代理对象和本体对象是一致的，代理接手请求的过程对于用户来说是透明的，用户并不清楚代理和本体的区别。 这样做有两个好处：

- 用户可以放心的使用代理，他只关心能否得到想要的结果。
- 在任何使用本体的地方都可以替换成使用代理。

## 迭代器模式

迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要保留该对象的内部表示。

迭代器可以分为内部迭代器和外部迭代器。

内部迭代器：外界不用关心迭代器内部调实现，跟迭代器调交互也仅仅是一次初始调用，但这也是内部迭代器调缺点。

外部迭代器：外部迭代器必显式地请求迭代下一个元素。

## 发布-订阅模式

> 发布-订阅模式又叫观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。

如何一步一步实现发布-订阅模式：

- 首先要指定谁充当发布者（比如售楼处）
- 然后给发布者添加一个缓存列表，用于存放回调函数以便通知订阅者（售楼处的花名册）
- 最后发布消息的时候，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函数（遍历花名册，挨个发短信）

## 命令模式

命令模式中的命令指的是一个执行某些特定事情的指令。

### 应用场景

有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请求的操作是什么。此时希望用一种松耦合的方式来设计程序，使得请求发送者和请求接收者能够消除彼此之间的耦合关系。

### 宏命令

宏命令是一组命令的集合，通过执行宏命令的方式，可以一次执行一批命令。

宏命令是命令模式与组合模式的联用产物。

智能命令与傻瓜命令:

- 一般来说，命令模式都会在 command 对象中保存一个`接收者`来负责真正执行客户的请求。这种情况下，命令对象是”傻瓜式“的，它只负责把客户的请求转交给接收者来执行。这种模式的好处是请求发起者和请求接收者之间尽可能地得到了解耦。

- ”聪明的“命令对象可以直接实现请求，这样一来就不再需要接收者的存在，这种”聪明的“命令对象也叫智能命令。

## 组合模式

> 组合模式就是用小的子对象来构建更大的对象，而这些小的子对象本身也许是由更小的“孙对象”构成的。

### 组合模式的用途

组合模式将对象组合成树形结构，来表示`部分-整体`的层次结构。

- 表示树形结构。组合模式可以非常方便地描述对象部分-整体层次结构。

- 利用对象多态性统一对待组合对象和单个对象。在组合模式中，客户将统一地使用组合结构中的所有对象，而不需要关心它是组合对象还是单个对象。

### 注意的地方

1. 组合模式不是父子关系
   组合对象是一种 HAS-A（聚合）的关系，而不是 IS-A。
2. 对叶对象操作的一致性
   只有用一致的方式对待列表中的每个叶对象的时候，才适合使用组合模式。
3. 双向映射关系
   对象之间不是严格意义上的层次结构，不适合使用组合模式。
4. 用职责链模式提高组合模式性能
   （不太理解职责链模式...）

### 总结

组合模式适合两种情况：

- 表示对象的部分-整体层次结构
- 客户希望统一对待树中的所有对象

## 模板方法模式

模板方法模式是一种只需使用继承就可以实现的模式。

模板方法是一种严重依赖抽象类的设计模式。

```js
Beverage.prototype.init = function() {
  this.boilWater();
  this.brew();
  this.pourInCup();
  this.addCondiments();
};
```

`Beverage.prototype.init` 就是模板方法。原因是，该方法中封装了子类的算法框架，它作为一个算法的模板，知道子类以何种顺序去执行哪些方法。

### 应用场景

- 封装算法框架
- 钩子方法

## 享元模式

享元模式是一种用于`性能优化`的模式。享元模式的核心是运用共享技术来有效支持`大量细粒度的对象`。

享元模式要求将对象的属性划分为`内部状态`与`外部状态`（状态在这里通常指属性）。

> 实现享元模式的关键是：把内部状态和外部状态分离开来。

如何划分内部状态和外部状态：

- 内部状态`存储于对象内部`。
- 内部状态可以`被一些对象共享`。
- 内部状态`独立于具体的场景`，通常不会改变。
- 外部状态取决于具体的场景，并根据场景而变化，外部状态不能共享。

### 应用场景

一般来说，以下情况发生时可以使用享元模式：

- 一个程序中使用来大量的相似对象。
- 由于使用的大量对象，造成了很大的内存开销。
- 对象的大多数状态都可以变为外部状态。
- 剥离出对象的外部状态之后，可以用相对较少的共享对象取代大量对象。

### 对象池

对象池维护一个装载空闲对象的池子，如果需要对象的时候，不是直接 new，而是转从对象池里获取。如果对象池里没有空闲对象，则创建一个新对象，当获取出的对象完成他的职责之后，再进入池子等待被下次获取。

对象池跟享元模式有点相似。只是并没有主动分离内部状态和外部状态的过程。

### 应用场景

- HTTP 连接池
- 数据库连接池

- 在 Web 前端开发中，对象池使用最多的场景大概就是跟 DOM 有关的操作。

## 职责链模式

职责链模式的定义是：使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系，将这些对象连接成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。

职责链模式的最大优点就是解耦了请求发送者和 N 个接收者之间的复杂关系，由于不知道链中的哪个节点可以处理你发出的请求，所以你只需把请求传递给第一个节点即可。

## 中介者模式

中介者模式的作用就是解除对象与对象之间的紧耦合关系。

中介者模式是迪米特法则的一种实现。

在中介者模式中，对象之间几乎不知道彼此的存在，它们只能通过中介者对象来互相影响对方。

中介者模式最大的缺点是，系统中会新增一个中介者对象。对象之间交互的复杂性，转移成了中介者对象的复杂性，使得中介者对象经常是巨大的。

> 中介者模式可以很方便的对模块或者对象进行解耦，但对象之间并非一定需要解耦。在实际项目中，模块或对象之间有一些依赖关系是正常的。

## 状态模式

> 状态模式的定义：允许一个对象在其内部状态改变时改变它的行为，对象看起来似乎修改了它的类。

1. 将状态封装成独立的类，并将请求委托给当前的状态对象，当对象的内部状态改变时，会带来不同的行为变化。

2. 从客户角度来看，我们使用的对象，在不同的状态下具有截然不同的行为，这个对象看起来是从不同的类中实例化而来的，实际上这是使用的了委托的效果。
