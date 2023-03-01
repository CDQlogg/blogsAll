---
title: HTML5智能表单  
date: 2023-2-28
permalink: /fontend/HTML5+CSS3/HTML5智能表单
---

## input表单type属性值
``` js
type = "email" 限制用户输入必须为Email类型

type="url"          限制用户输入必须为URL类型

type="date"     限制用户输入必须为日期类型

type="datetime" 显示完整日期 含时区

type="datetime-local" 显示完整日期 不含时区

type="time"    限制用户输入必须为时间类型

type="month"  限制用户输入必须为月类型

type="week"    限制用户输入必须为周类型

type="number" 限制用户输入必须为数字类型

type="range"    生成一个滑动条

type="search"  具有搜索意义的表单results="n"属性

type="color"    生成一个颜色选择表单

type="tel"    显示电话号码

```

## Input 类型 - Date Pickers（日期选择器）
``` js
HTML5 拥有多个可供选取日期和时间的新输入类型：

date 选取日、月、年

month 选取月、年

week  选取周和年

time  选取时间（小时和分钟）
```

## HTML5新增表单属性
``` js
required: required内容不能为空

placeholder: 表单提示信息

autofocus:自动聚焦

pattern: 正则表达式  输入的内容必须匹配到指定正则范围

autocomplete:是否保存用户输入值


formaction: 在submit里定义提交地址

datalist: 输入框选择列表配合list使用 list值为datalist的id值

output: 计算或脚本输出
```

## 表单验证
```js
validity对象，通过下面的valid可以查看验证是否通过，如果八种验证都返回true,一种验证失败返回false

oText.addEventListener("invalid",fn1,false)

ev.preventDefault(): 阻止默认事件

valueMissing: 当输入值为空的时候，返回true


typeMismatch: 控件值与预期不吻合，返回true


patternMismatch: 输入值不满足pattern正则，返回true


cusomError

```