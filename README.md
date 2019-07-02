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
