---
title: setTimeout与setInterval  
date: 2023-3-01
categories:
  - 前端
tags:
  - JavaScript
permalink: /fontend/JavaScript/setTimeout与setInterval
---

## setTimeout

- setTimeout属于webApi的一部分，可以实现延时调用，属于异步宏任务，一次性使用
- setTimeout(func|code, [delay], [arg1], [arg2], ...) 参数1为想要执行的函数或代码字符串，参数2为延迟执行时间，单位毫秒默认0，参数3及之后的参数为参数1为函数时传入的参数，调用之后会返回一个定时器id
- 此方法只执行一次，可以使用clearTimeout(id)清除定时器来取消回调
- 看一下setTimeout的延迟执行机制
![](http://file.cqcdq.top/aHNoRkpFCS4LSzb0woT7fKgtMglP7eRY/%E5%AE%9A%E6%97%B6%E5%99%A81.png)


- 以上使用嵌套setTimeout来实现循环调用，可以从中看出setTimeout计时是从上一个setTimeout回调执行之后开始的，看看代码效果
![](http://file.cqcdq.top/G3Oldfezfbn53hKdR5f4e1DQRv4y2o1D/%E5%AE%9A%E6%97%B6%E5%99%A82.png)


- 上图计算的是2次调用回调之间的间隔，不包括回调执行时间，可以看出在开启定时器之后到执行回调的时间确实是参数2所设置的值，延迟时间与回调函数执行时间无关；
- 简单来讲setTimeout的延迟时间不包括自身回调所占用的时间

- 也就是说setTimeout是在上一次回调执行之后才开启的定时
## setInterval

- setInterval同样也是webApi的一部分，主要用来定时循环执行代码
- 不同于setTimeout，此定时器的延迟执行机制有所不同
- setInterval(func|code, [delay], [arg1], [arg2], ...)，参数列表同setTimeout，参数2为每次循环时间
![](http://file.cqcdq.top/7q30kk1dy8S2LbkNeA2dwTDYHlC042tR/%E5%AE%9A%E6%97%B6%E5%99%A83.png)


- 从上图可以先得出结论，setInterval的延迟执行时间包含自身回调执行所占用的时间，看看代码效果
![](http://file.cqcdq.top/0bYScmP9i3ItUrfPmte2vM10bA2xcWXV/%E5%AE%9A%E6%97%B6%E5%99%A84.png)


- 上图计算的是2次调用回调之间的间隔，不包括回调执行时间，可以看出setInterval在2次执行之间的延迟受到了回调的影响，再验证一下
![](http://file.cqcdq.top/f9zSQIKTlGq6y315EhHgPyvID4AITTQ3/%E5%AE%9A%E6%97%B6%E5%99%A85.png)


- 此次我把回调执行时间也算在计时之内，现在看来setInterval的定时时间确实包含了自身回调所占用的时间

- 由于这2个api都属于异步宏任务，在执行的时候都会进入任务队列，如果队列前的任务执行时间较长，那么也会影响到定时器的执行时机
- 在浏览器中alert、confirm、prompt都会阻塞js主线程执行，直到弹窗消失，但是定时器还会继续执行；定时器并不能达到0延迟，最小延迟限制在4ms
