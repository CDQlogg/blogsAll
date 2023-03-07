---
title: vue2基本使用  
date: 2023-3-01
tags:
  - Vue2
permalink: /fontend/Vue/vue2基本使用
---

## 官方文档
官方文档:[vue2](https://v2.cn.vuejs.org/)
## 定位

- 渐进式 JavaScript 框架

## 特点

- 数据驱动视图
 
- Javascript  通过DOM操作,实现网页交互   API名称太长了
- JQuery     通过DOM操作,实现网页交互    缩短API名称
- Vue        开发者不需要进行DOM操作了，只需要操作数据包，Vue会自动更新DOM

## 列表渲染
渲染一组数据,注意v-for嵌套
```js
v-for="(item,index) in 数据包"
```
- item  是遍历数据包中的每一条数据，格式不确定（对象、数组、字符串）
- index  遍历时的序号

## computed 计算属性

- 计算   宏观计算（对于数据的所有操作都可以称为一种计算）
- 属性   会返回新的运算结果给我们直接渲染
### 使用computed的优势
 
- 降低代码冗余度
- 逻辑代码的拓展性较强
- 提高渲染性能
- 能够根据data的变化，自动触发重新运算

1.  字符串翻转操作
Hello ---> olleH 
2.  按成绩筛选学员的功能 

- 当某个数据包需要处理（翻转、过滤）后再渲染，请想起computed

## watch监听

- 监听data的 变化，作出事件响应  
### 使用场景

1.  监听音乐播放时间变化，同步改变进度条 
2.  监听数据变化，进行本地缓存 
- 浅监听 
```js
stu(){  //监听stu的变化  【浅监听】
  console.log('监听到了stu的变化');
  localStorage.setItem('stu',JSON.stringify(this.stu))
}
```
- 深监听
```js
stu:{   //深监听
  handler(){  //处理函数
    console.log('深监听');
    localStorage.setItem('stu',JSON.stringify(this.stu))
  },
  deep:true   //开启深监听
}
```

## 生命周期钩子函数

在Vue实例创建过程中，会自动触发执行的一些特殊的函数

![](https://v2.cn.vuejs.org/images/lifecycle.png)

## props参数验证

- 约束组件调用者所传递的props参数的数据类型

```js
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
```
## $emit

用以实现子父通信  
- 子组件，触发子组件的事件函数， 
- 子组件在事件函数中通过this.$emit 触发自定义事件 give-me-money 
- 父级在调用子组件的时候，需要绑定对应的自定义事件 
```js
<my-child @give-me-money="父级的事件函数"></my-child>
```
-  父级在事件函数中，可以得到自己传递的参数，进行后续操作

## slot插槽

让组件调用者，可以向组件内部传递HTML结构

- 匿名插槽 
- 具名插槽 
- 向插槽批量写入内容 
```js
<template slot="s1">
    <h1>传递插槽内容2</h1>
    <h1>传递插槽内容2</h1>
    <h1>传递插槽内容2</h1>
</template>
```
- 插槽默认内容
```js
<slot>
    <strong>这是匿名插槽的默认内容</strong>
</slot>
```

## 动态绑定class、style  【使用频率很高】

文档![](https://v2.cn.vuejs.org/v2/guide/class-and-style.html)
### 关于class的动态绑定语法

- 单独使用三目运算
- 单独使用数组
- 单独使用对象
- 数组内部用三目
- 数据内部用对象

## 单页面应用（SPA  --- Single Page Application）

- 整个项目只有一个html文件
- 视觉上的页面切换，本质是组件的切换 (.vue单文件组件)

## 组件通信

- 父子通信

通过props实现

- 子父通信

通过$emit实现

- 非父子关系的组件通信

bus事件总线通信

-  $refs实现组件通信


## vuex 集中式状态管理工具

### bus事件总线通信

本质就是new Vue() 实例对象
```js
let bus = new Vue()  //事件总线对象
```
-  定义bus对象
```js
let bus = new Vue()
```
- 触发bus总线的自定义事件
```js
handleSend() {
    bus.$emit('give-a-candy',1)  //【2】触发bus总线自定义事件
    this.candy -= 1
}
```
- 订阅总线bus对象的自定义事件
```js
created () {
    bus.$on('give-a-candy',(n)=>{ //【3】订阅总线bus对象的自定义事件
        console.log(n);
        this.candy += n
    })
},
```

## refs的使用

### 用以获取真实DOM结构

- 操作普通标签的DOM
- 操作组件标签实例对象

不要过度使用DOM操作  

适合用DOM操作的场景  

- 焦点管理
- 多媒体文件操作 （音频、视频）