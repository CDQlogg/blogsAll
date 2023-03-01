---
title: apply、call、bind实现  
date: 2023-3-01
permalink: /fontend/JavaScript/apply、call、bind实现
---

3者的实现其实差不多，bind实现可能会有点不一样，都要实现this的改变
## 手动实现apply

思路就是想办法使函数被传入的thisArg调用，那么函数的this就指向调用者
```js
Function.prototype.Apply = function (thisArg, args = Symbol.for('args')) {
  console.dir(this)            //this为这个方法的调用者=>foo函数
  const fn = Symbol('fn')      //生成一个不重复的键
  thisArg[fn] = this || window //把foo函数作为传入this的一个方法
  args === Symbol.for('args') 
  ? thisArg[fn]()
  : thisArg[fn](...args)       //调用这方法，传参
  delete thisArg[fn]           //使用完删除
}
var name = 'foo'
var age = 5
function foo(age,height) {
  console.log(this.name) // obj
  console.log(age)       // 3
  console.log(height)    // null
}
const obj = {
  name: 'obj',
  age: 3
}
foo.Apply(obj,[obj.age,null])
```
## 手动实现call
基本思路同apply，就是传参形式改变一下,这里通过arguments获取参数列表
```js
Function.prototype.Call = function (thisArg) {
  console.dir(this)            //this为这个方法的调用者=>foo函数
  const fn = Symbol('fn')      //生成一个不重复的键
  thisArg[fn] = this || window //把foo函数作为传入this的一个方法
  const args = Array.from(arguments).slice(1)
  args.length ? thisArg[fn](...args) : thisArg[fn]()  //调用这方法，传参
  delete thisArg[fn]           //使用完删除
}
```
## 手动实现bind
bind函数要能够返回严格绑定this与参数后的函数，调用这个返回的函数时有可能还会传入参数，那么需要拼接参数
```js
Function.prototype.Bind = function (thisArg) {
  const fn = Symbol('fn')       //生成一个不重复的键
  thisArg[fn] = this || window  //把foo函数作为传入this的一个方法
  const f = thisArg[fn]         // 负责一份函数
  delete thisArg[fn]            //删除原来对象上的函数，但是保留了this指向
  const args = Array.from(arguments).slice(1)
  return function () {
    const arg = args.concat(...arguments)
    f(...arg)
  }
}
var name = 'foo'
var age = 5
var height = 4
function foo(age, height) {
  console.log(this.name)       // obj
  console.log(age)             // 3
  console.log(height)          // 2
}
const obj = {
  name: 'obj',
  age: 3
}
foo.Bind(obj, obj.age)(2)
```