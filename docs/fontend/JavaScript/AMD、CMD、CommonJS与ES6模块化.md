---
title: AMD、CMD、CommonJS与ES6模块化  
date: 2023-3-01
tags:
  - JavaScript
permalink: /fontend/JavaScript/AMD、CMD、CommonJS与ES6模块化
---

- 模块化的引入主要是用于解决命名冲突、代码复用、代码可读性、依赖管理等
## AMD异步模块定义

- AMD全称Asynchronous Module Definition异步模块定义
- AMD并非原生js支持，是RequireJS模块化开发当中推广的产物，AMD依赖于RequireJS函数库，打包生成对应效果的js代码
- RequireJS主要用于解决多个js文件之间的依赖关系、浏览器加载大量js代码导致无响应、异步加载模块
- RequireJS通过define(id?,dependencies?,factory)定义模块，id可选，为定义模块的标识，默认为模块文件名不包括后缀，dependencies可选，是当前模块依赖的模块路径数组，factory为工厂方法，初始化模块的函数或者对象，如果为函数将会只执行一次，如果是对象将作为模块的输出
- 通过require(dependencies,factory)导入模块，其中dependencies为需要导入的模块路径数组，factory为当模块导入之后的回调函数，此函数的参数列表为对应导入的模块
- 通过require.config(配置对象)配置各模块路径和引用名
```js
require.config({
  baseUrl: "js/lib",
  paths: {
    "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js
    "underscore": "underscore.min",
  }
})
```
## CMD通用模块定义

- CMD全称Common Module Definition通用模块定义
- 同AMD，CMD也有一个函数库SeaJS与RequireJS类似的功能
- CMD推崇一个文件一个模块，推崇依赖就近，定义模块define(id?,deps?,factory)，id同AMD，deps一般不在其中写依赖，而是在factory中在需要使用的时候引入模块，factory函数接收3各参数，参数一require方法，用来内部引入模块的时候调用，参数二exports是一个对象，用来向外部提供模块接口，参数三module也是一个对象上面存储了与当前模块相关联的一些属性和方法
- 通过seajs.use(deps,func)加载模块，deps为引入到模块路径数组，func为加载完成后的回调函数

## AMD、CMD的主要区别在于
- AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块
- CMD推崇就近依赖，只有在用到某个模块的时候再去require
## CommonJS

- CommonJS模块规范，通常用于Nodejs中的模块化
- 拥有4个环境变量modul、exports、require、global
- 通过module.exports(不推荐exports)导出模块对象，通过require(模块路径)加载模块
- 当一个模块同时存在exports和module.exports时后者覆盖前者
- 规范中__dirname代表当前模块文件所在的文件夹路径，__filename代表当前模块文件夹路径+文件名
- CommonJS通过同步的方式加载模块，其输出的模块是一个拷贝对象，所以修改原的模块不会对被引入的模块内部产生影响，且模块在代码运行的时候加载

## ES6模块化

- es6引入的export与import用于解决js自身不具备模块功能的缺陷
- 通过export或者export default导出模块接口，通过import xxx from '路径'，导入模块
- 对于export导出的接口可以使用import {接口} from '路径'，通过解构的方式按需导入
- 对于export default默认导出的，可以使用import xxx from '路径'，来导入默认导出的接口，xxx可以是自定义名称，且一个模块只能有一个默认导出，可以有多个export
- 还可以通过别名的方式设置导出和导入的接口名，如export {a as foo}，把foo作为a的别名导出，import foo as b from 路径，把b当作foo的别名导入
- es6模块是在代码编译时输出接口即编译时加载，es6是通过命令来指定导出和加载，且导出的是模块中的只读引用，如果原始模块中的值被改变了，那么加载的值也会随之改变，所以是动态引用