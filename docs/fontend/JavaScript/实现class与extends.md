---
title: 实现class与extends  
date: 2023-3-01
categories:
  - 前端
tags:
  - JavaScript
permalink: /fontend/JavaScript/实现class与extends
---

## 实现class
>
es6加入的class其实是为了开发者方便创建类，与其他语言在写法上尽量一致，但是js原生并没有类这个东西，为了实现类的效果，可以通过js的构造器来实现，class使用new关键字生成实例，构造器也是通过new来实例化，那么可以推断class本质也是个构造器
>
手动实现class
```js
const Class = (function () {
  function Constructor(name) {
    this.name = name
  }
  //添加原型方法
  Constructor.prototype.getName = function name(name) {
    console.log('原型方法getName:' + this.name);
  }
  //添加原型属性
  Constructor.prototype.age = '原型属性age'
  //添加静态方法
  Constructor.log = function log() {
    console.log('我是构造器的静态方法log');
  }
  //添加静态属性
  Constructor.isWho = '构造器静态属性isWho'
  return Constructor
})()
const i = new Class('我是实例')
```
实现class语法糖，只需封装一层函数。

- 返回的Constructor就是实例的构造器，其prototype是个空白的对象这是由于Function造成的
- new后面调用的函数必须是一个构造器函数，用于构造实例，此构造器的this指向实例
- 构造器内部需要实现依照传入的参数设置实例的属性
- 定义Class时需要实现原型属性和静态属性的挂载

以上只实现class的定义，接下来要实现能够兼容继承的写法
实现extends

- 继承需要满足原型的继承
- 还需要满足可调用父类构造器
```js
//父类
const Parent = (function () {
  function Constructor(age) {
    this.age = age
  }
  Constructor.prototype.getName = function () {
    console.log(this.name);
  }
  return Constructor
})()
//子类
const Class = (function (_Parent = null) {
  if (_Parent) {
    Constructor.prototype = Object.create(_Parent.prototype, {
      constructor: {
        value: Constructor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
    Constructor.__proto__ = _Parent
  }
  function Constructor(name, age) {
    _Parent ? _Parent.call(this, age) : this
    this.name = name
  }
  Constructor.prototype.getAge = function () {
    console.log(this.age);
  }
  return Constructor
})(Parent)
```
- 实现原型继承，可以使用之前的继承写法，注意class形式的继承，会把父类设为子类的__proto__
- 在构造函数内判断是否有父类，如果有就要调用父类的构造函数，把当前的this传入，这样才能生成父类构造器中定义的属性，这才算是真正的继承。继承不单继承原型还能实现继承父类构造器中定义的属性
- 对于原型方法和静态方法也是类似定义，注意定义的方法如果用到this需要使用function关键字定义函数，不可使用匿名函数，否则this无法指向调用对象本身
