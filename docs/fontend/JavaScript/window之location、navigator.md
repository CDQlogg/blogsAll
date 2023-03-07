---
title: window之location、navigator  
date: 2023-3-01
tags:
  - JavaScript
permalink: /fontend/JavaScript/window之location、navigator
---

## location对象

location为全局对象window的一个属性，且window.location===document.location，其中的属性都是可读写的，但是只有修改href和hash才有意义，href会重新定位到一个URL，hash会跳到当前页面中的anchor名字的标记(如果有)，而且页面不会被重新加载
```js
// 这行代码将会使当前页面重定向到http://www.baidu.com
window.location.href = 'http://www.baidu.com'
----------------------------------------------
// 如果使用hash并且配合input输入框，那么当页面刷新之后，鼠标将会自动聚焦到对应id的input输入框，
<input type="text" id="target">
<script>
  window.location.hash = '#target'
</script>
```
先看下其拥有的属性  
![](http://file.cqcdq.top/HEEASmhvywa7nJOnd0MHmwNUQo67Kl7j/loc%E5%B1%9E%E6%80%A7.png)  
- 这里补充一个origin属性，返回URL协议+服务器名称+端口号 (location.origin == location.protocol + '//' + location.host)

可以通过上述属性来获取URL中的指定部分，或者修改href于hash达到重新定位与跳转
添加hash改变监听器，来控制hash改变时执行的代码
```js
window.addEventListener("hashchange", funcRef);
// 或者
window.onhashchange = funcRef;
```
location方法
![](http://file.cqcdq.top/hBjtWC7ynaoEqBe2s4pBh4aEHRLUyL2P/loc%E6%96%B9%E6%B3%95.png)

- assign(url),通过调用window.location.assign方法来打开指定url的新页面window.location.assign('http://www.baidu.com')在当前页面打开百度，可回退
- replace(url),在当前页面打开指定url，不可回退
- reload([Boolean]),调用此方法将会重新加载当前页面，如果参数为false或者不填，则会以最优的方式重新加载页面，可能从缓存中取资源，如果参数为true则会从服务器重新请求加载资源

## navigator对象

- window.navigator对象包含有关浏览器的信息，可以用它来查询一些关于运行当前脚本的应用程序的相关信息
```js
document.write("浏览器的代码名:" + navigator.appCodeName + "<br>");
document.write("浏览器的名称:" + navigator.appName + "<br>");
document.write("当前浏览器的语言:" + navigator.browserLanguage + "<br>");
document.write("浏览器的平台和版本信息:" + navigator.appVersion + "<br>");
document.write("浏览器中是否启用 cookie :" + navigator.cookieEnabled + "<br>");
document.write("运行浏览器的操作系统平台 :" + navigator.platform + "<br>");
```

- navigator.appCodeName 只读,任何浏览器中，总是返回 'Gecko'。该属性仅仅是为了保持兼容性。
- navigator.appName 只读,返回浏览器的官方名称。不要指望该属性返回正确的值。
- navigator.appVersion 只读,返回一个字符串，表示浏览器的版本。不要指望该属性返回正确的值。
- navigator.platform 只读,返回一个字符串，表示浏览器的所在系统平台。
- navigator.product 只读,返回当前浏览器的产品名称（如，"Gecko"）。
- navigator.userAgent 只读,返回当前浏览器的用户代理字符串（user agent string）

如下在不同浏览器打印的信息
```js
/*
chrome:
    Mozilla/5.0
    (Macintosh; Intel Mac OS X 10_12_6)
    AppleWebKit/537.36 (KHTML, like Gecko)
    Chrome/61.0.3163.91 Safari/537.36
safari:
    Mozilla/5.0
    (Macintosh; Intel Mac OS X 10_12_6)
    AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0
    Safari/604.1.38
ios11刘海X:
    Mozilla/5.0
    (iPhone; CPU iPhone OS 11_0 like Mac OS X)
    AppleWebKit/604.1.38 (KHTML, like Gecko)
    Version/11.0 Mobile/15A372 Safari/604.1
ipad：
    Mozilla/5.0
    (iPad; CPU OS 9_1 like Mac OS X)
    AppleWebKit/601.1.46 (KHTML, like Gecko)
    Version/9.0 Mobile/13B143 Safari/601.1
galxy sansum:
    Mozilla/5.0
    (Linux; Android 5.0; SM-G900P Build/LRX21T)
    AppleWebKit/537.36 (KHTML, like Gecko)
    Chrome/61.0.3163.91 Mobile Safari/537.36
安装uc浏览器：
    Mozilla/5.0
    (Linux; U; Android 6.0.1; zh-CN; Mi Note 2 Build/MXB48T)
    AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0
    Chrome/40.0.2214.89 UCBrowser/11.4.9.941 Mobile Safari/537.36
winphone:
    Mozilla/5.0
    (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E)
    AppleWebKit/537.36 (KHTML, like Gecko) 
    Chrome/61.0.3163.91 Mobile Safari/537.36
hybrid方法的可能：
    Mozilla/5.0
    (iPhone; CPU iPhone OS 11_0 like Mac OS X)
    AppleWebKit/604.1.38 (KHTML, like Gecko)
    Mobile/15A372 weibo/80011134
*/
```
