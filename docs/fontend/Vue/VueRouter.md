---
title: VueRouter  
date: 2023-3-07
tags:
  - Vue2
permalink: /fontend/Vue/VueRouter
---


## Vue生态

- Vue核心
- @vue/cli脚手架
- vue-router路由管理
- vuex状态管理
- UI组件库

## vue-router是什么?

- 网络请求---网线----路由器----远程服务器
- 不同路径---vue-router----查看项目页面组件

## vue-router使用的必要性

中大型项目中，会有很多业务组件(页面组件)

## 如何使用vue-router？

使用VueRouter的流程  【非常重要】

文档![https://v3.router.vuejs.org/zh/](https://v3.router.vuejs.org/zh/)

- 引入路由 
- 创建组件 
- 创建路由对象 

### 路由映射关系配置   路径----组件

- 路由注入 
- 呈现组件 

### router-view    想在哪里呈现组件，就在哪里写router-view

- 切换路由

### router-link

## vue-router的核心功能

### 动态路由匹配

- 路由参数传递
例如: 商品列表.vue---路由参数(id)---商品详情.vue

-  设置形参
```js
{  
  path:'/contact/:tel',
  component:Contact
}
```
-  传递实参
```js
<router-link to="/contact/13822334455">联系我们</router-link>
```
- 提取使用

在组件的template区域直接提取使用   $route.params.形参名称  
在组件的功能区域（created）中提取使用   this.$route.params.形参名称  

## 路由嵌套

- 单层路由无法满足项目需求时，可以引入嵌套路由

1.  新建组件 
2.  配置子路由 
```js
{  
  path:'/prod',
  component:Product,
  children:[
    {
      path:'/',
      component:P1
    },
    {
      path:'p2',  //此处的子路由，不能带 /
      component:P2
    }
  ]
},
```
3. 在主组件中呈现子组件

- 在主组件的template中，新增router-view 
- 切换路由
- router-link 

## 编程式导航

通过事件的方式，触发路由的切换

1.  为菜单元素绑定事件 
2.  在事件函数中，触发路由切换 
```js
// 方法1：只触发路由切换
this.$router.push(目标路径) 
// 方法2：编程式导航传参
this.$router.push({
  path:目标路径,
  query:{ 
    id:666  //自定义路由参数
  }
})
```
### 路由切换的方式选择

1.  如果使用router-link后，不影响项目布局结构，尽量使用router-link 
2.  如果不太方便让结构渲染为a标签的话，可以使用编程式导航 

- 命名路由

1. 为路由对象配置name
```js
{  
  path:'/home',
  name:'h',
  component:Home
},
```
2. 可以使用name触发路由切换
```js
this.$router.push({
  name:name,
  params:{  //刷新后会丢失
    num:100
  }
})
```