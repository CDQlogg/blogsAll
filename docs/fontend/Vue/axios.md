---
title: axios  
date: 2023-3-07
tags:
  - Vue2
permalink: /fontend/Vue/axios
---

## 直接调用axios
```js
axios({
  url:'http://192.168.1.110/show/tour/getList',
  method:'GET'
}).then(res=>{})
```
## 项目开发时的数据源

- 来自测试服务器   http://192.168.1.110
- 来自在线服务器   https://api.juooo.com
## 先封装axios，后使用
```js
let instance = axios.create({  //可以将集中封装的方法，独立存放在一个js公共模块中
  baseURL:'https://api.juooo.com',  //此处的域名替换后，可以整体替换所有的请求域名
  headers:{}  //为所有请求，统一配置请求头
})

instance({
  url:'/show/tour/getList?version=6.1.26&referer=2',
  method:'GET'
}).then(res=>{
  console.log(res);
})
```
## 使用axios提供的子方法，发起请求

- get方法
```js
instance.get('/show/tour/getList?version=6.1.26&referer=2')
        .then(res=>{
          console.log(res);
        })


instance.get('/show/tour/getList',{
      params:{ //此处的params是关键字
        version:'6.1.26',
        referer:2
      }
    }).then(res=>{
      console.log(res);
    })
```
- post方法
```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
```
- put方法 
- delete方法 