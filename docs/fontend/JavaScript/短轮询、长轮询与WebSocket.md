---
title: 短轮询、长轮询与WebSocket  
date: 2023-3-01
tags:
  - JavaScript
permalink: /fontend/JavaScript/短轮询、长轮询与WebSocket
---

## 短轮询

- http 短轮询是server收到请求不管是否有数据到达都直接响应http请求，服务端响应完成，就会关闭这个TCP连接；如果浏览器收到的数据为空，则隔一段时间，浏览器又会发送相同的http请求到server以获取数据响应
- 缺点：消息交互的实时性较低（server端到浏览器端的数据反馈效率低）

简单演示
```js
const xhr = new XMLHttpRequest()
// 每秒发送一次短轮询
const id = setInterval(() => {
  xhr.open('GET', 'http://127.0.0.1:3000/test?key=value')
  xhr.addEventListener('load', (e) => {
    if (xhr.status == 200) {
      // 处理数据
      console.log(xhr.response)
      // 如果不需要可以关闭
      clearInterval(id)
    }
  })
  xhr.send()
}, 1000)
```
## 长轮询

- http 长轮询是server收到请求后如果有数据，立刻响应请求；如果没有数据就会停留一段时间，这段时间内，如果server请求的数据到达（如查询数据库或数据的逻辑处理完成），就会立刻响应；如果这段时间过后，还没有数据到达，则以空数据的形式响应http请求；若浏览器收到的数据为空，会再次发送同样的http请求到server
- 缺点：server 没有数据到达时，http连接会停留一段时间，这会造成服务器资源浪费
简单演示
```js

function ajax() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://127.0.0.1:3000/test?key=value');
  xhr.addEventListener('load', (e) => {
    if (xhr.status == 200) {
      // 处理数据
      console.log(xhr.response)
      // 如果不需要可以关闭
      if (xhr.response != '') return
      ajax()
    }
  })
  xhr.send();
}
```
## 相同点

- 当server的数据不可达时，基于http长轮询和短轮询的http请求，都会停留一段时间
- 都是用于实时从服务器获取数据更新

## 不同点

- http长轮询是在服务器端的停留，而http短轮询是在浏览器端的停留
- 短轮询隔一段时间向服务器发起请求，不管服务器数据有没有变化都直接返回结果，长轮询则在服务器数据有发生变化的时候才返回结果，如果在一定时间没有变化那么将会超时自动关闭连接
![](http://file.cqcdq.top/Bv2fOMIjuinGuThCu3uuEMmdgz5rcTXK/%E4%B8%8D%E5%90%8C%E7%82%B9.png)

## Web Socket

- 为了解决http无状态，被动性，以及轮询问题，html5新推出了websocket协议，浏览器和服务器只需完成一次握手，两者即可建立持久性连接，并进行双向通信
- 基于http进行握手，发生加密数据，保持连接不断开
### 优点：

- 较少的控制开销，在进行客户端与服务器的数据交换时，用于协议控制的数据包头较小
- 更强的实时性，全双工通信，不必局限于一方发起的请求，服务器与客户端可以随时发送数据，延迟更少
- 有状态的连接，websocket在通信之前需要双方建立连接，才能进行通信，而http协议在每次请求都要携带状态信息
- 基于二进制数据传输，websocket定义了二进制帧，可以处理二进制内容，相比于文本传输，提高了效率
- 支持自定义子协议，可以自行扩展协议，如部分浏览器支持压缩等
- 更好的压缩效果，Websocket在适当的扩展支持下，可以沿用之前内容的上下文，在传递类似的数据时，可以显著地提高压缩率
