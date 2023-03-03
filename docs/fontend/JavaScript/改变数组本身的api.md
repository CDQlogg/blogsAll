---
title: 改变数组本身的api  
date: 2023-3-01
categories:
  - 前端
tags:
  - JavaScript
permalink: /fontend/JavaScript/改变数组本身的api
---
- pop()  尾部弹出一个元素
- push() 尾部插入一个元素
- shift()  头部弹出一个元素
- unshift()  头部插入一个元素
- sort([func]) 对数组进行排序,func有2各参数，其返回值小于0，那么参数1被排列到参数2之前，反之参数2排在参数1之前
- reverse() 原位反转数组中的元素
- splice(pos,deleteCount,...item)  返回修改后的数组，从pos开始删除deleteCount个元素，并在当前位置插入items
- copyWithin(pos[, start[, end]]) 复制从start到end(不包括end)的元素，到pos开始的索引，返回改变后的数组，浅拷贝
- arr.fill(value[, start[, end]]) 从start到end默认到数组最后一个位置，不包括end，填充val，返回填充后的数组
