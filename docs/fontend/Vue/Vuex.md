---
title: Vuex  
date: 2023-3-07
tags:
  - Vue2
permalink: /fontend/Vue/Vuex
---

>
如果你不知道该不该使用它，那你可能就不需要使用
状态机
遵循了单向数据流的设计思想
>
## 什么是vuex?

集中式的状态管理（数据管理）工具
 
- 在商品列表【加入购物车】操作购物车数据
- 导航栏的购物车下拉组件中，展示购物车数据
- 在购物车页面中，展示购物车数据

## 为什么使用vuex？

让我们更加便捷的去管理，需要跨组件、同步、共享的数据包

## 如何使用vuex？

### 使用vuex的流程

文档![](https://v3.vuex.vuejs.org/zh/)

- 安装
>
npm i vuex -S
>
- 项目新建独立的模块，配置vuex
>
store/index.js
 
● state        存储状态机数据包
● mutations    用以触发state变化的方法包
● getters      根据state的变化，运算得到一个符合条件的新数据包，类似于组件中的computed的能力
● actions      在状态机中，发起异步请求的模块
● modules     状态机拆分模块化
>
- 在组件中，提取状态机的state数据，并使用
必须在computed中提取
```js
computed: {
  count() {
    return this.$store.state.num  //提取状态机中的state数据包
  }
},
```
- 在组件中，触发mutations，修改状态机中的state
```js
methods: {
  handlePlus() {
    this.$store.commit('increment')  //触发store状态机的mutations
  }
},
```
### 关于core-js报错问题

1. 报错信息  
>
./src/store/index.js
Module not found: Error: Can't resolve 'core-js/modules/es.array.filter.js' in 'D:\2103H5\Vue（实战周）\vue-project\src\store'
>
2. 重新安装npm依赖  

- 删除node_moduels
- 执行 npm i

### getters的使用

- 负责处理state数据，并返回新的数据 
- 如果处理后的数据包，也需要跨组件共享，就适合放在getters 

## vuex的模块化

- 为了避免store状态机文件，变得过于臃肿，不利于维护 
- 可以按照数据的业务逻辑，将状态机拆分为若干模块   【项目中必须拆分模块】 
>
● count.js
● goods.js
>
- 使用modules将各个模块，引入并配置到store对象 
- 拆分模块后，默认情况下 
>
● state变成了模块内局部的数据
● getters、mutations、actions依旧是全局的
>
- 可以为每个模块开启命名空间，保证内部所以的属性、方法，都变为局部
>
namespaced:true
>
- mutations触发时，没有携带模块名的报错
>
[vuex] unknown mutation type: increment
>
## vuex使用方法汇总

### 1. 初始化vuex的基本语法

熟悉这三个文件的关系、及内部语法
>
● index.js
● count.js
● goods.js
>
```js
export default {
  namespace:true,
  state:()=>({}),
  getters:{},
  mutations:{}
}
```
### 2. 在组件中使用vuex状态机的方法
```js
● this.$store.state.模块名.数据名          获取state的方式
● this.$store.getters['模块名/getters数据名']   获取getters的方式
● this.$store.commit('模块名/mutation的名字',可选参数)
```