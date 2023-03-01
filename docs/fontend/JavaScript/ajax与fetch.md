---
title: ajax与fetch  
date: 2023-3-01
permalink: /fontend/JavaScript/ajax与fetch
---

## ajax

- ajax全称Asynchronous JavaScript And XML也就是异步js与xml，它可以让页面在不刷新的情况下发起请求获取数据
- 使用window.XMLHttpRequest构造器实例化一个网络请求对象const XHR = new XMLHttpRequest()
- XHR.open(method, url, [ async, [ user, [ password]]])此方法用来发送一个请求，method为请求方法，url为请求地址，async为boolean值默认为true即使用异步请求，user和password在请求需要用户和密码的时候使用
- XHR.send(body)参数为发生请求主体内容，其格式可以为FormData、ArrayBuffer、Document、序列化字符串，在收到响应后，响应的数据会自动填充XHR对象的属性
- 当需要设置请求头时可以调用XHR.setRequestHeader(header,value)设置请求头的类型与值，当以post方式发起请求就用设置XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')此请求头，值可更改
- 通过监听实例的onreadystatechange属性方法，当readyState的值改变的时候会触发onreadystatechange对应的回调函数XHR.onreadystatechange = function () { }
- 请求状态readyState有5个值，对应5个请求状态，只读

- 0 表示 请求还未初始化，尚未调用 open() 方法。
- 1 表示 已建立服务器链接，open() 方法已经被调用。
- 2 表示 请求已接受，send() 方法已经被调用，并且头部和状态已经可获得。
- 3 表示 正在处理请求，下载中； responseText 属性已经包含部分数据。
- 4 表示 完成，下载操作已完成。


- 还有status属性，它是这次请求中的响应数字状态码，即为我们平时看到的1xx、2xx、3xx、4xx、5xx表示此次请求的状态结果，在还未发起请求和出错时都为0，只读
- XHR.responseText属性为此次响应的数据，为字符串，可能是JSON格式需要JSON.parse解析
- XHR.responseXML属性为xml形式的数据，可以通过XHR.responseType = 'document'和XHR.overrideMimeType('text/xml')来解析为XML
- XHR.withCredentials属性设置为boolean值，通过此属性来设置是否使用cookies、authorization等凭证字段
- XHR.timeout通过此属性来设置请求超时时间
- XHR.ontimeout通过此属性来设置请求超时的回调函数,函数的参数为事件对象
- XHR.abort()此方法用来终止网络请求
- XHR.getAllResponseHeaders()此方法用来获取所有的响应头
- XHR.getResponseHeader(name)此方法用来获取指定的响应头
### 还有6个关于进度的事件

- loadstart 在收到响应的第一个字节触发
- progress 在接收期间不断触发
- error 发生错误
- abort 调用abort方法而终止
- load 接收到完整数据，可代替readystatechange与readyState判断
- loadend 在通信完成或abort error load事件后触发


- 通过XHR.addEventListener(eventname,callback)方法添加对应的事件监听，其回调函数接收一个事件对象参数
- progress事件对象有3个属性用于查看当前进度相关信息，lengthComputable为boolean值，表示进度是否可用，position表示已经接收的字节数，totalSize表示总需要传输的内容长度即Content-Length字节数，通常在分片传输内容的时候用到

## 简单的发起一次请求
```js
// 最简单的发起一个请求
const XHR = new XMLHttpRequest()
XHR.open('get','http://127.0.0.1:3000/test?key=value')
XHR.send()
XHR.addEventListener('load',(e)=>{
  // 服务端返回的是查询参数
  console.log(XHR.response) // {"key":"value"}
})
复制代码基于XMLHttpRequest封装一个请求方法
// 发送的数据
const data = {
  name: 'tom'
}
// 请求配置
const config = {
  type: "post",
  url: "http://127.0.0.1:3000/test",
  data: data,
  dataType: 'application/json',
  success: function (res) {
    console.log(res);
  },
  error: function (e) {
    console.log(e);
  }
}
// 请求构造器
function Ajax(conf) {
  this.type = conf.type || 'get'
  this.url = conf.url || ''
  this.data = conf.data || {}
  this.dataType = conf.dataType || ''
  this.success = conf.success || null
  this.error = conf.error || null
}
// send方法
Ajax.prototype.send = function () {
  if (this.url === '') return
  const XHR = new XMLHttpRequest()
  XHR.addEventListener('load', () => {
    if (XHR.status >= 200 && XHR.status < 300 || XHR.status == 304) {
      typeof this.success === 'function' && this.success(XHR.response)
    }
  })
  XHR.addEventListener('error', (e) => {
    typeof this.error === 'function' && this.error(e)
  })
  if (this.type.toLowerCase() === 'get') {
    XHR.open('get', this.url)
    XHR.send(null)
  } else {
    XHR.open(this.type, this.url)
    XHR.setRequestHeader('Content-Type', this.dataType || 'application/x-www-form-urlencoded')
    let data = this.data
    if (this.dataType === 'application/json') {
      data = JSON.stringify(this.data)
    }
    XHR.send(data)
  }
}
// 发送请求
const ajax = new Ajax(config).send()
```
由于网络请求模块封装较繁琐，这里就简单封装了一下，仅供参考（。＾▽＾）
## fetch

- fetch API提供了js接口，用于替代XMLHttpRequest方式的网络请求，fetch()全局方法使用起来比XHR更加方便
- fetch方法接受2个参数，参数1为请求url或 Request 对象，参数2为可选配置对象
```js
// fetch方法返回一个Promise对象，可用then方法接收结果，用catch方法捕获异常，同Promise使用
// 配置对象具体配置
const config = {
  method: 'GET',      // 请求方法
  headers: {          // 头信息
    'user-agent': 'Mozilla/4.0 MDN Example',
    'content-type': 'application/json'
  },
  body: JSON.stringify({  // 请求的 body 信息，Blob, FormData 等
    data: 1
  }),
  mode: 'cors',             // 请求的模式，cors、 no-cors 或 same-origin
  credentials: 'include',   // omit、same-origin 或 include。为了在当前域名内自动发送 cookie, 必须提供这个选项
  cache: 'no-cache',        // default 、 no-store 、 reload 、 no-cache 、 force-cache 或者 only-if-cached
  redirect: 'follow',       // 可用的 redirect 模式: follow (自动重定向), error (如果产生重定向将自动终止并且抛出一个错误), 或者 manual (手动处理重定向).
  referrer: 'no-referrer',  // no-referrer、client或一个 URL。默认是 client。
  referrerPolicy: 'no-referrer', // 指定 referer HTTP头
  integrity: 'sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=', // 包括请求的  subresource integrity 值
}
// 发起请求
fetch('http://biadu.com' [, config])
```

- then的回调函数接受一个Response对象参数，其对象拥有9个属性，8个方法


- 9个属性

- type 只读 包含Response的类型 (例如, basic, cors)
- url 只读 包含Response的URL
- useFinalURL 包含了一个布尔值来标示这是否是该Response的最终URL
- status 只读 包含Response的状态码
- ok 只读 包含了一个布尔值来标示该Response成功(状态码200-299)
- redirected 只读 表示该Response是否来自一个重定向，如果是的话，它的URL列表将会有多个
- statusText 只读 包含了与该Response状态码一致的状态信息
- headers 只读 包含此Response所关联的Headers 对象
- bodyUsed Body 只读 包含了一个布尔值来标示该Response是否读取过Body



## 8个方法

- clone 创建一个Response对象的克隆
- error 返回一个绑定了网络错误的新的Response对象
- redirect(url, status) 用另一个URL创建一个新的 response
- arrayBuffer 接受一个 Response 流, 并等待其读取完成. 并 resolve 一个 ArrayBuffer 对象
- blob  blob()方法使用一个 Response 流，并将其读取完成
- formData 将 Response 对象中的所承载的数据流读取并封装成为一个对象
- json 使用一个 Response 流，并将其读取完成。解析结果是将文本体解析为 JSON
- text 提供了一个可供读取的"返回流", 它返回一个包含USVString对象，编码为UTF-8
