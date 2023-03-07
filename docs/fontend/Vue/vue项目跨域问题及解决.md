---
title: vue项目跨域问题及解决  
date: 2023-3-07
tags:
  - Vue2
permalink: /fontend/Vue/vue项目跨域问题及解决
---
>
真实项目中遇到跨域，优先找后端沟通，让后端解决！！！
>

## 1. 跨域出现的原因

- 由浏览器的同源策略所引发的,浏览器安全限制
- 不同协议、不同域名、不同端口，都会触发同源策略
- 服务器之间不存在跨域问题

## 2. 如何解决跨域问题？

- 后端可以通过响应头的方式，告知浏览器，本接口是否可以跨域访问

可以让后端进行配置
 
 
- 采用vue本地服务代理访问目标接口 
>
  ○ 【注意】打包后，代码脱离了开发环境，代理就会失效
  ○ 采用代理前 
    ■ 本地浏览器----目标服务器
 
  ○ 采用代理后 
    ■ 本地浏览器----本地代理服务器-----目标服务器
 >
>
access-control-allow-origin: https://www.smartisan.com   允许指定域名访问接口
access-control-allow-origin: *     允许所有域名跨域访问该接口
>
## 项目的自定义配置

### vuecli配置文档

### 1、在项目的根目录下，新建vue.config.js 配置文件

根目录！！

### 2、在vue.config.js中进行自定义配置 （例如:本地代理）
```js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{ //开发服务
    proxy:{ //代理
      '/hehe':{ //具体代理配置
        target:'https://shopapi.smartisan.com', //期望访问的目标服务器
        pathRewrite:{
          '^/hehe':''
        }
        // 不加pathRewrite
        // https://shopapi.smartisan.com/hehe/product/home
      }
    }
  }
})
```
### 3、 需要重新启动项目，才能生效自定义配置

必须重启!!!
>
npm run serve
>
### 4、验证代理是否生效
```js
axios.get('/hello/product/home')
```