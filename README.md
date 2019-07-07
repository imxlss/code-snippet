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
